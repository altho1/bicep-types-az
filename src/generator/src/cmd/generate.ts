import os from 'os';
import path from 'path';
import { createWriteStream, existsSync } from 'fs';
import { readdir, stat, rmdir, mkdir, rm, writeFile, readFile, copyFile } from 'fs/promises';
import { series } from 'async';
import { spawn } from 'child_process';
import chalk from 'chalk';
import stripAnsi from 'strip-ansi';
import yargs from 'yargs';
import { groupBy, keys, orderBy, sortBy, Dictionary } from 'lodash';
import { TypeBaseKind } from '../types';
import { GeneratorConfig, getConfig } from '../config';
import * as markdown from '@ts-common/commonmark-to-markdown'
import * as yaml from 'js-yaml'

interface ILogger {
  out: (data: string) => void;
  err: (data: string) => void;
}

const defaultLogger: ILogger = {
  out: data => process.stdout.write(data),
  err: data => process.stderr.write(data),
}

const rootDir = `${__dirname}/../../../../`;

const extensionDir = path.resolve(`${rootDir}/src/autorest.bicep/`);
const autorestBinary = os.platform() === 'win32' ? 'autorest.cmd' : 'autorest';
const defaultOutDir = path.resolve(`${rootDir}/generated`);

const argsConfig = yargs
  .strict()
  .option('specs-dir', { type: 'string', demandOption: true, desc: 'Path to the azure-rest-api-specs dir' })
  .option('out-dir', { type: 'string', default: defaultOutDir, desc: 'Output path for generated files' })
  .option('single-path', { type: 'string', default: undefined, desc: 'Only regenerate under a specific file path - e.g. "compute"' })
  .option('verbose', { type: 'boolean', default: false, desc: 'Enable autorest verbose logging' })
  .option('wait-for-debugger', { type: 'boolean', default: false, desc: 'Wait for a C# debugger to be attached before running the Autorest extension' });

executeSynchronous(async () => {
  const args = await argsConfig.parseAsync();  
  const inputBaseDir = path.resolve(args['specs-dir']);
  const outputBaseDir = path.resolve(args['out-dir']);
  const verbose = args['verbose'];
  const waitForDebugger = args['wait-for-debugger'];
  const singlePath = args['single-path'];

  if (!existsSync(`${extensionDir}/dist`)) {
    throw `Unable to find ${extensionDir}/dist. Did you forget to run 'npm run build'?`;
  }

  // find all readme paths in the azure-rest-api-specs repo
  const specsPath = path.join(inputBaseDir, 'specification');
  const readmePaths = await findReadmePaths(specsPath);
  if (readmePaths.length === 0) {
    throw `Unable to find rest-api-specs in folder ${inputBaseDir}`;
  }

  const tmpOutputPath = `${os.tmpdir()}/_bcp_${new Date().getTime()}`;
  await rmdir(tmpOutputPath, { recursive: true });

  // this file is deliberately gitignored as it'll be overwritten when using --single-path
  // it's used to generate the git commit message
  await mkdir(outputBaseDir, { recursive: true });
  const summaryLogger = await getLogger(`${outputBaseDir}/summary.log`);

  // use consistent sorting to make log changes easier to review
  for (const readmePath of readmePaths.sort(lowerCaseCompare)) {
    const bicepReadmePath = `${path.dirname(readmePath)}/readme.bicep.md`;
    const basePath = path.relative(specsPath, readmePath).split(path.sep)[0].toLowerCase();
    const tmpOutputDir = `${tmpOutputPath}/${basePath}`;
    const outputDir = `${outputBaseDir}/${basePath}`;

    if (singlePath && lowerCaseCompare(singlePath, basePath) !== 0) {
      continue;
    }

    // prepare temp dir for output
    await rmdir(tmpOutputDir, { recursive: true });
    await mkdir(tmpOutputDir, { recursive: true });
    const logger = await getLogger(`${tmpOutputDir}/log.out`);
    const config = getConfig(basePath);

    try {
      // autorest readme.bicep.md files are not checked in, so we must generate them before invoking autorest
      await generateAutorestConfig(logger, readmePath, bicepReadmePath, config);
      await generateSchema(logger, readmePath, tmpOutputDir, verbose, waitForDebugger);

      // remove all previously-generated files and copy over results
      await rmdir(outputDir, { recursive: true });
      await mkdir(outputDir, { recursive: true });
      await copyRecursive(tmpOutputDir, outputDir);
    } catch (err) {
      logErr(logger, err);
      
      // Use markdown formatting as this summary will be included in the PR description
      logOut(summaryLogger, 
`<details>
  <summary>Failed to generate types for path '${basePath}'</summary>

\`\`\`
${err}
\`\`\`
</details>
`);
    }

    // clean up temp dir
    await rmdir(tmpOutputDir, { recursive: true });
    // clean up autorest readme.bicep.md files
    await rm(bicepReadmePath, { force: true });
  }

  // build the type index
  await buildTypeIndex(defaultLogger, outputBaseDir);
});

function normalizeJsonPath(jsonPath: string) {
  return path.normalize(jsonPath).replace(/[\\\/]/g, '/');
}

async function generateAutorestConfig(logger: ILogger, readmePath: string, bicepReadmePath: string, config: GeneratorConfig) {
  // We expect a path format convention of <provider>/(preview|stable)/<yyyy>-<mm>-<dd>(|-preview)/<filename>.json
  // This information is used to generate individual tags in the generated autorest configuration
  const pathRegex = /^([^\/]+)\/[^\/]+\/(\d{4}-\d{2}-\d{2}(|-preview))\/.*\.json$/i;

  const readmeContents = await readFile(readmePath, { encoding: 'utf8' });
  const readmeMarkdown = markdown.parse(readmeContents);

  const inputFiles = new Set<string>(config.additionalFiles);
  // we need to look for all autorest configuration elements containing input files, and collect that list of files. These will look like (e.g.):
  // ```yaml $(tag) == 'someTag'
  // input-file:
  // - path/to/file.json
  // - path/to/other_file.json
  // ```
  for (const node of markdown.iterate(readmeMarkdown.markDown)) {
    // We're only interested in yaml code blocks
    if (node.type !== 'code_block' || !node.info || !node.literal ||
      !node.info.trim().startsWith('yaml')) {
      continue;
    }
    
    const yamlData = yaml.load(node.literal) as any;
    if (yamlData) {
      // input-file may be a single string or an array of strings
      const inputFile = yamlData['input-file'];
      if (typeof inputFile === 'string') {
        inputFiles.add(inputFile);
      } else if (inputFile instanceof Array) {
        for (const i of inputFile) {
          inputFiles.add(i);
        }
      }
    }
  }

  const filesByTag: Dictionary<string[]> = {};
  for (const file of inputFiles) {
    const normalizedFile = normalizeJsonPath(file);
    const match = pathRegex.exec(normalizedFile);
    if (match) {
      // Generate a unique tag. We can't process all of the different API versions in one autorest pass
      // because there are constraints on naming uniqueness (e.g. naming of definitions), so we want to pass over
      // each API version separately.
      const tagName = `${match[1].toLowerCase()}-${match[2].toLowerCase()}`;
      if (!filesByTag[tagName]) {
        filesByTag[tagName] = [];
      }

      filesByTag[tagName].push(normalizedFile);
    } else {
      logOut(logger, `WARNING: Unable to parse swagger path \"${file}\"`);
    }
  }

  let generatedContent = `##Bicep

### Bicep multi-api
\`\`\`yaml $(bicep) && $(multiapi)
${yaml.dump({ 'batch': Object.keys(filesByTag).map(tag => ({ 'tag': tag })) }, { lineWidth: 1000 })}
\`\`\`
`;

  for (const tag of Object.keys(filesByTag)) {
    generatedContent += `### Tag: ${tag} and bicep
\`\`\`yaml $(tag) == '${tag}' && $(bicep)
${yaml.dump({ 'input-file': filesByTag[tag] }, { lineWidth: 1000})}
\`\`\`
`;
  }

  await writeFile(bicepReadmePath, generatedContent);
}

async function generateSchema(logger: ILogger, readme: string, outputBaseDir: string, verbose: boolean, waitForDebugger: boolean) {
  let autoRestParams = [
    `--use=@autorest/modelerfour`,
    `--use=${extensionDir}`,
    '--bicep',
    `--output-folder=${outputBaseDir}`,
    `--multiapi`,
    '--title=none',
    // This is necessary to avoid failures such as "ERROR: Semantic violation: Discriminator must be a required property." blocking type generation.
    // In an ideal world, we'd raise issues in https://github.com/Azure/azure-rest-api-specs and force RP teams to fix them, but this isn't very practical
    // as new validations are added continuously, and there's often quite a lag before teams will fix them - we don't want to be blocked by this in generating types. 
    `--skip-semantics-validation`,
    readme,
  ];

  if (verbose) {
    autoRestParams = autoRestParams.concat([
      `--debug`,
      `--verbose`,
    ]);
  }

  if (waitForDebugger) {
    autoRestParams = autoRestParams.concat([
      `--bicep.debugger`,
    ]);
  }

  return await executeCmd(logger, verbose, __dirname, autorestBinary, autoRestParams);
}

async function findReadmePaths(specsPath: string) {
  return await findRecursive(specsPath, filePath => {
    if (path.basename(filePath) !== 'readme.md') {
      return false;
    }

    return filePath
      .split(path.sep)
      .some(parent => parent == 'resource-manager');
  });
}

async function copyRecursive(sourceBasePath: string, destinationBasePath: string): Promise<void> {
  for (const filePath of await findRecursive(sourceBasePath, _ => true)) {
    const destinationPath = path.join(destinationBasePath, path.relative(sourceBasePath, filePath));

    await mkdir(path.dirname(destinationPath), { recursive: true });
    await copyFile(filePath, destinationPath);
  }
}

async function findRecursive(basePath: string, filter: (name: string) => boolean): Promise<string[]> {
  let results: string[] = [];

  for (const subPathName of await readdir(basePath)) {
    const subPath = path.resolve(`${basePath}/${subPathName}`);

    const fileStat = await stat(subPath);
    if (fileStat.isDirectory()) {
      const pathResults = await findRecursive(subPath, filter);
      results = results.concat(pathResults);
      continue;
    }

    if (!fileStat.isFile()) {
      continue;
    }

    if (!filter(subPath)) {
      continue;
    }

    results.push(subPath);
  }

  return results;
}

function executeCmd(logger: ILogger, verbose: boolean, cwd: string, cmd: string, args: string[]) : Promise<void> {
  return new Promise((resolve, reject) => {
    if (verbose) {
      logOut(logger, chalk.green(`Executing: ${cmd} ${args.join(' ')}`));
    }

    const child = spawn(cmd, args, {
      cwd: cwd,
      windowsHide: true,
      shell: true,
    });

    child.stdout.on('data', data => logger.out(chalk.grey(data.toString())));
    child.stderr.on('data', data => {
      const message = data.toString();
      logger.err(chalk.red(message));
      if (message.indexOf('FATAL ERROR') > -1 && message.indexOf('Allocation failed - JavaScript heap out of memory') > -1) {
        reject('Child process has run out of memory');
      }
    });

    child.on('error', err => {
      reject(err);
    });
    child.on('exit', code => {
      if (code !== 0) {
        reject(`Exited with code ${code}`);
      } else {
        resolve();
      }
    });
  });
}

function executeSynchronous<T>(asyncFunc: () => Promise<T>) {
  series(
    [asyncFunc],
    (error, _) => {
      if (error) {
        throw error;
      }
    });
}

function lowerCaseCompare(a: string, b: string) {
  const aLower = a.toLowerCase();
  const bLower = b.toLowerCase();

  if (aLower === bLower) {
    return 0;
  }

  return aLower < bLower ? -1 : 1;
}

function logOut(logger: ILogger, line: string) {
  logger.out(`${line}\n`);
}

function logErr(logger: ILogger, line: any) {
  logger.err(`${line}\n`);
}

async function getLogger(logFilePath: string): Promise<ILogger> {
  await rm(logFilePath, { force: true });
  const logFileStream = createWriteStream(logFilePath, { flags: 'a' });

  return {
    out: (data: string) => {
      process.stdout.write(data);
      logFileStream.write(stripAnsi(data));
    },
    err: (data: string) => {
      process.stdout.write(data);
      logFileStream.write(stripAnsi(data));
    },
  };
}

async function buildTypeIndex(logger: ILogger, baseDir: string) {
  const indexContent = await buildIndex(logger, baseDir);

  await writeFile(
    `${baseDir}/index.json`,
    JSON.stringify(indexContent, null, 0));

  await writeFile(
    `${baseDir}/index.md`,
    generateIndexMarkdown(indexContent));
}

interface TypeIndex {
  Types: Dictionary<TypeIndexEntry>;
}

interface TypeIndexEntry {
  RelativePath: string;
  Index: number;
}

function generateIndexMarkdown(index: TypeIndex) {
  let markdown = '# Bicep Types\n';

  const byProvider = groupBy(keys(index.Types), x => x.split('/')[0].toLowerCase());
  for (const namespace of sortBy(keys(byProvider), x => x.toLowerCase())) {
    markdown += `## ${namespace}\n`;

    const byResourceType = groupBy(byProvider[namespace], x => x.split('@')[0].toLowerCase());
    for (const resourceType of sortBy(keys(byResourceType), x => x.toLowerCase())) {
      markdown += `### ${resourceType}\n`;

      for (const typeString of sortBy(byResourceType[resourceType], x => x.toLowerCase())) {
        const version = typeString.split('@')[1];
        const jsonPath = index.Types[typeString].RelativePath;
        const anchor = `resource-${typeString.replace(/[^a-zA-Z0-9-]/g, '').toLowerCase()}`

        markdown += `* [${version}](${path.dirname(jsonPath)}/types.md#${anchor})\n`;
      }

      markdown += '\n';
    }
  }

  return markdown;
}

async function buildIndex(logger: ILogger, baseDir: string): Promise<TypeIndex> {
  const typeFiles = await findRecursive(baseDir, filePath => {
    return path.basename(filePath) === 'types.json';
  });
  
  const resourceTypes = new Set<string>();
  const typeDictionary: Dictionary<TypeIndexEntry> = {};

  // Use a consistent sort order so that file system differences don't generate changes
  for (const typeFilePath of orderBy(typeFiles, f => f.toLowerCase(), 'asc')) {
    const content = await readFile(typeFilePath, { encoding: 'utf8' });

    const types = JSON.parse(content) as any[];
    for (const type of types) {
      const resource = type[TypeBaseKind.ResourceType];
      if (!resource) {
        continue;
      }

      if (resourceTypes.has(resource.Name.toLowerCase())) {
        logOut(logger, `WARNING: Found duplicate type \"${resource.Name}\"`);
        continue;
      }
      resourceTypes.add(resource.Name.toLowerCase());

      typeDictionary[resource.Name] = {
        RelativePath: path.relative(baseDir, typeFilePath),
        Index: types.indexOf(type),
      };
    }
  }

  return {
    Types: typeDictionary,
  }
}