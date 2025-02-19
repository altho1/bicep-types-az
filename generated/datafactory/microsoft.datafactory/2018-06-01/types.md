# Microsoft.DataFactory @ 2018-06-01

## Resource Microsoft.DataFactory/factories@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): Etag identifies change in the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [FactoryIdentity](#factoryidentity): Identity properties of the factory resource.
* **location**: string: The resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FactoryProperties](#factoryproperties): Factory resource properties.
* **tags**: [ResourceTags](#resourcetags): The resource tags.
* **type**: 'Microsoft.DataFactory/factories' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataFactory/factories/dataflows@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag identifies change in the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DataFlow](#dataflow) (Required): Azure Data Factory nested object which contains a flow with data movements and transformations.
* **type**: 'Microsoft.DataFactory/factories/dataflows' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataFactory/factories/datasets@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag identifies change in the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [Dataset](#dataset) (Required): The Azure Data Factory nested object which identifies data within different data stores, such as tables, files, folders, and documents.
* **type**: 'Microsoft.DataFactory/factories/datasets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataFactory/factories/integrationRuntimes@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag identifies change in the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IntegrationRuntime](#integrationruntime) (Required): Azure Data Factory nested object which serves as a compute resource for activities.
* **type**: 'Microsoft.DataFactory/factories/integrationRuntimes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataFactory/factories/linkedservices@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag identifies change in the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LinkedService](#linkedservice) (Required): The Azure Data Factory nested object which contains the information and credential which can be used to connect with related store or compute resource.
* **type**: 'Microsoft.DataFactory/factories/linkedservices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataFactory/factories/managedVirtualNetworks@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag identifies change in the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedVirtualNetwork](#managedvirtualnetwork) (Required): A managed Virtual Network associated with the Azure Data Factory
* **type**: 'Microsoft.DataFactory/factories/managedVirtualNetworks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataFactory/factories/managedVirtualNetworks/managedPrivateEndpoints@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag identifies change in the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedPrivateEndpoint](#managedprivateendpoint) (Required): Properties of a managed private endpoint
* **type**: 'Microsoft.DataFactory/factories/managedVirtualNetworks/managedPrivateEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataFactory/factories/pipelines@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag identifies change in the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [Pipeline](#pipeline) (Required): A data factory pipeline.
* **type**: 'Microsoft.DataFactory/factories/pipelines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataFactory/factories/privateEndpointConnections@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag identifies change in the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkConnectionApprovalRequest](#privatelinkconnectionapprovalrequest): A request to approve or reject a private endpoint connection
* **type**: 'Microsoft.DataFactory/factories/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataFactory/factories/triggers@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Etag identifies change in the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [Trigger](#trigger) (Required): Azure data factory nested object which contains information about creating pipeline run
* **type**: 'Microsoft.DataFactory/factories/triggers' (ReadOnly, DeployTimeConstant): The resource type

## FactoryIdentity
### Properties
* **principalId**: string (ReadOnly): The principal id of the identity.
* **tenantId**: string (ReadOnly): The client tenant id of the identity.
* **type**: 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' (Required): The identity type.
* **userAssignedIdentities**: [UserAssignedIdentitiesDefinitionSpecification](#userassignedidentitiesdefinitionspecification): Definition of all user assigned identities for a factory.

## UserAssignedIdentitiesDefinitionSpecification
### Properties
### Additional Properties
* **Additional Properties Type**: any

## FactoryProperties
### Properties
* **createTime**: string (ReadOnly): Time the factory was created in ISO8601 format.
* **encryption**: [EncryptionConfiguration](#encryptionconfiguration): Definition of CMK for the factory.
* **globalParameters**: [GlobalParameterDefinitionSpecification](#globalparameterdefinitionspecification): Definition of all parameters for an entity.
* **provisioningState**: string (ReadOnly): Factory provisioning state, example Succeeded.
* **publicNetworkAccess**: 'Disabled' | 'Enabled': Whether or not public network access is allowed for the data factory.
* **repoConfiguration**: [FactoryRepoConfiguration](#factoryrepoconfiguration): Factory's git repo information.
* **version**: string (ReadOnly): Version of the factory.

## EncryptionConfiguration
### Properties
* **identity**: [CMKIdentityDefinition](#cmkidentitydefinition): Managed Identity used for CMK.
* **keyName**: string (Required): The name of the key in Azure Key Vault to use as Customer Managed Key.
* **keyVersion**: string: The version of the key used for CMK. If not provided, latest version will be used.
* **vaultBaseUrl**: string (Required): The url of the Azure Key Vault used for CMK.

## CMKIdentityDefinition
### Properties
* **userAssignedIdentity**: string: The resource id of the user assigned identity to authenticate to customer's key vault.

## GlobalParameterDefinitionSpecification
### Properties
### Additional Properties
* **Additional Properties Type**: [GlobalParameterSpecification](#globalparameterspecification)

## GlobalParameterSpecification
### Properties
* **type**: 'Array' | 'Bool' | 'Float' | 'Int' | 'Object' | 'String' (Required): Global Parameter type.
* **value**: any (Required): Any object

## FactoryRepoConfiguration
* **Discriminator**: type

### Base Properties
* **accountName**: string (Required): Account name.
* **collaborationBranch**: string (Required): Collaboration branch.
* **lastCommitId**: string: Last commit id.
* **repositoryName**: string (Required): Repository name.
* **rootFolder**: string (Required): Root folder.
### FactoryGitHubConfiguration
#### Properties
* **clientId**: string: GitHub bring your own app client id.
* **clientSecret**: [GitHubClientSecret](#githubclientsecret): Client secret information for factory's bring your own app repository configuration.
* **hostName**: string: GitHub Enterprise host name. For example: https://github.mydomain.com
* **type**: 'FactoryGitHubConfiguration' (Required): Type of repo configuration.

### FactoryVstsConfiguration
#### Properties
* **projectName**: string (Required): VSTS project name.
* **tenantId**: string: VSTS tenant id.
* **type**: 'FactoryVSTSConfiguration' (Required): Type of repo configuration.


## GitHubClientSecret
### Properties
* **byoaSecretAkvUrl**: string: Bring your own app client secret AKV URL.
* **byoaSecretName**: string: Bring your own app client secret name in AKV.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DataFlow
* **Discriminator**: type

### Base Properties
* **annotations**: any[]: List of tags that can be used for describing the data flow.
* **description**: string: The description of the data flow.
* **folder**: [DataFlowFolder](#dataflowfolder): The folder that this data flow is in. If not specified, Data flow will appear at the root level.
### MappingDataFlow
#### Properties
* **type**: 'MappingDataFlow' (Required): Type of data flow.
* **typeProperties**: [MappingDataFlowTypeProperties](#mappingdataflowtypeproperties): Mapping data flow type properties.

### WranglingDataFlow
#### Properties
* **type**: 'WranglingDataFlow' (Required): Type of data flow.
* **typeProperties**: [PowerQueryTypeProperties](#powerquerytypeproperties): Power Query data flow type properties.


## DataFlowFolder
### Properties
* **name**: string: The name of the folder that this data flow is in.

## MappingDataFlowTypeProperties
### Properties
* **script**: string: DataFlow script.
* **sinks**: [DataFlowSink](#dataflowsink)[]: List of sinks in data flow.
* **sources**: [DataFlowSource](#dataflowsource)[]: List of sources in data flow.
* **transformations**: [Transformation](#transformation)[]: List of transformations in data flow.

## DataFlowSink
### Properties
* **dataset**: [DatasetReference](#datasetreference): Dataset reference type.
* **description**: string: Transformation description.
* **linkedService**: [LinkedServiceReference](#linkedservicereference): Linked service reference type.
* **name**: string (Required): Transformation name.
* **schemaLinkedService**: [LinkedServiceReference](#linkedservicereference): Linked service reference type.

## DatasetReference
### Properties
* **parameters**: [ParameterValueSpecification](#parametervaluespecification): An object mapping parameter names to argument values.
* **referenceName**: string (Required): Reference dataset name.
* **type**: 'DatasetReference' (Required): Dataset reference type.

## ParameterValueSpecification
### Properties
### Additional Properties
* **Additional Properties Type**: any

## LinkedServiceReference
### Properties
* **parameters**: [ParameterValueSpecification](#parametervaluespecification): An object mapping parameter names to argument values.
* **referenceName**: string (Required): Reference LinkedService name.
* **type**: 'LinkedServiceReference' (Required): Linked service reference type.

## ParameterValueSpecification
### Properties
### Additional Properties
* **Additional Properties Type**: any

## DataFlowSource
### Properties
* **dataset**: [DatasetReference](#datasetreference): Dataset reference type.
* **description**: string: Transformation description.
* **linkedService**: [LinkedServiceReference](#linkedservicereference): Linked service reference type.
* **name**: string (Required): Transformation name.
* **schemaLinkedService**: [LinkedServiceReference](#linkedservicereference): Linked service reference type.

## Transformation
### Properties
* **description**: string: Transformation description.
* **name**: string (Required): Transformation name.

## PowerQueryTypeProperties
### Properties
* **documentLocale**: string: Locale of the Power query mashup document.
* **script**: string: Power query mashup script.
* **sources**: [PowerQuerySource](#powerquerysource)[]: List of sources in Power Query.

## PowerQuerySource
### Properties
* **dataset**: [DatasetReference](#datasetreference): Dataset reference type.
* **description**: string: Transformation description.
* **linkedService**: [LinkedServiceReference](#linkedservicereference): Linked service reference type.
* **name**: string (Required): Transformation name.
* **schemaLinkedService**: [LinkedServiceReference](#linkedservicereference): Linked service reference type.
* **script**: string: source script.

## Dataset
* **Discriminator**: type

### Base Properties
* **annotations**: any[]: List of tags that can be used for describing the Dataset.
* **description**: string: Dataset description.
* **folder**: [DatasetFolder](#datasetfolder): The folder that this Dataset is in. If not specified, Dataset will appear at the root level.
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference) (Required): Linked service reference type.
* **parameters**: [ParameterDefinitionSpecification](#parameterdefinitionspecification): Definition of all parameters for an entity.
* **schema**: any: Any object
* **structure**: any: Any object
### AmazonMWSObjectDataset
#### Properties
* **type**: 'AmazonMWSObject' (Required): Type of dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### AmazonRdsForOracleTableDataset
#### Properties
* **type**: 'AmazonRdsForOracleTable' (Required): Type of dataset.
* **typeProperties**: [AmazonRdsForOracleTableDatasetTypeProperties](#amazonrdsfororacletabledatasettypeproperties): AmazonRdsForOracle dataset properties.

### AmazonRdsForSqlServerTableDataset
#### Properties
* **type**: 'AmazonRdsForSqlServerTable' (Required): Type of dataset.
* **typeProperties**: [AmazonRdsForSqlServerTableDatasetTypeProperties](#amazonrdsforsqlservertabledatasettypeproperties): The Amazon RDS for SQL Server dataset properties.

### AmazonRedshiftTableDataset
#### Properties
* **type**: 'AmazonRedshiftTable' (Required): Type of dataset.
* **typeProperties**: [AmazonRedshiftTableDatasetTypeProperties](#amazonredshifttabledatasettypeproperties): Amazon Redshift table dataset properties.

### AmazonS3Dataset
#### Properties
* **type**: 'AmazonS3Object' (Required): Type of dataset.
* **typeProperties**: [AmazonS3DatasetTypeProperties](#amazons3datasettypeproperties) (Required): Amazon S3 dataset properties.

### AvroDataset
#### Properties
* **type**: 'Avro' (Required): Type of dataset.
* **typeProperties**: [AvroDatasetTypeProperties](#avrodatasettypeproperties): Avro dataset properties.

### AzureBlobDataset
#### Properties
* **type**: 'AzureBlob' (Required): Type of dataset.
* **typeProperties**: [AzureBlobDatasetTypeProperties](#azureblobdatasettypeproperties): Azure Blob dataset properties.

### AzureBlobFSDataset
#### Properties
* **type**: 'AzureBlobFSFile' (Required): Type of dataset.
* **typeProperties**: [AzureBlobFSDatasetTypeProperties](#azureblobfsdatasettypeproperties): Azure Data Lake Storage Gen2 dataset properties.

### AzureDatabricksDeltaLakeDataset
#### Properties
* **type**: 'AzureDatabricksDeltaLakeDataset' (Required): Type of dataset.
* **typeProperties**: [AzureDatabricksDeltaLakeDatasetTypeProperties](#azuredatabricksdeltalakedatasettypeproperties): Azure Databricks Delta Lake Dataset Properties

### AzureDataExplorerTableDataset
#### Properties
* **type**: 'AzureDataExplorerTable' (Required): Type of dataset.
* **typeProperties**: [AzureDataExplorerDatasetTypeProperties](#azuredataexplorerdatasettypeproperties) (Required): Azure Data Explorer (Kusto) dataset properties.

### AzureDataLakeStoreDataset
#### Properties
* **type**: 'AzureDataLakeStoreFile' (Required): Type of dataset.
* **typeProperties**: [AzureDataLakeStoreDatasetTypeProperties](#azuredatalakestoredatasettypeproperties): Azure Data Lake Store dataset properties.

### AzureMariaDBTableDataset
#### Properties
* **type**: 'AzureMariaDBTable' (Required): Type of dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### AzureMySqlTableDataset
#### Properties
* **type**: 'AzureMySqlTable' (Required): Type of dataset.
* **typeProperties**: [AzureMySqlTableDatasetTypeProperties](#azuremysqltabledatasettypeproperties) (Required): Azure MySQL database dataset properties.

### AzurePostgreSqlTableDataset
#### Properties
* **type**: 'AzurePostgreSqlTable' (Required): Type of dataset.
* **typeProperties**: [AzurePostgreSqlTableDatasetTypeProperties](#azurepostgresqltabledatasettypeproperties): Azure PostgreSQL dataset properties.

### AzureSearchIndexDataset
#### Properties
* **type**: 'AzureSearchIndex' (Required): Type of dataset.
* **typeProperties**: [AzureSearchIndexDatasetTypeProperties](#azuresearchindexdatasettypeproperties) (Required): Properties specific to this dataset type.

### AzureSqlDWTableDataset
#### Properties
* **type**: 'AzureSqlDWTable' (Required): Type of dataset.
* **typeProperties**: [AzureSqlDWTableDatasetTypeProperties](#azuresqldwtabledatasettypeproperties): Azure SQL Data Warehouse dataset properties.

### AzureSqlMITableDataset
#### Properties
* **type**: 'AzureSqlMITable' (Required): Type of dataset.
* **typeProperties**: [AzureSqlMITableDatasetTypeProperties](#azuresqlmitabledatasettypeproperties): Azure SQL Managed Instance dataset properties.

### AzureSqlTableDataset
#### Properties
* **type**: 'AzureSqlTable' (Required): Type of dataset.
* **typeProperties**: [AzureSqlTableDatasetTypeProperties](#azuresqltabledatasettypeproperties): Azure SQL dataset properties.

### AzureTableDataset
#### Properties
* **type**: 'AzureTable' (Required): Type of dataset.
* **typeProperties**: [AzureTableDatasetTypeProperties](#azuretabledatasettypeproperties) (Required): Azure Table dataset properties.

### BinaryDataset
#### Properties
* **type**: 'Binary' (Required): Type of dataset.
* **typeProperties**: [BinaryDatasetTypeProperties](#binarydatasettypeproperties): Binary dataset properties.

### CassandraTableDataset
#### Properties
* **type**: 'CassandraTable' (Required): Type of dataset.
* **typeProperties**: [CassandraTableDatasetTypeProperties](#cassandratabledatasettypeproperties): Cassandra dataset properties.

### CommonDataServiceForAppsEntityDataset
#### Properties
* **type**: 'CommonDataServiceForAppsEntity' (Required): Type of dataset.
* **typeProperties**: [CommonDataServiceForAppsEntityDatasetTypeProperties](#commondataserviceforappsentitydatasettypeproperties): Common Data Service for Apps entity dataset properties.

### ConcurObjectDataset
#### Properties
* **type**: 'ConcurObject' (Required): Type of dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### CosmosDbMongoDbApiCollectionDataset
#### Properties
* **type**: 'CosmosDbMongoDbApiCollection' (Required): Type of dataset.
* **typeProperties**: [CosmosDbMongoDbApiCollectionDatasetTypeProperties](#cosmosdbmongodbapicollectiondatasettypeproperties) (Required): CosmosDB (MongoDB API) database dataset properties.

### CosmosDbSqlApiCollectionDataset
#### Properties
* **type**: 'CosmosDbSqlApiCollection' (Required): Type of dataset.
* **typeProperties**: [CosmosDbSqlApiCollectionDatasetTypeProperties](#cosmosdbsqlapicollectiondatasettypeproperties) (Required): CosmosDB (SQL API) Collection dataset properties.

### CouchbaseTableDataset
#### Properties
* **type**: 'CouchbaseTable' (Required): Type of dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### CustomDataset
#### Properties
* **type**: 'CustomDataset' (Required): Type of dataset.
* **typeProperties**: any: Any object

### Db2TableDataset
#### Properties
* **type**: 'Db2Table' (Required): Type of dataset.
* **typeProperties**: [Db2TableDatasetTypeProperties](#db2tabledatasettypeproperties): Db2 table dataset properties.

### DelimitedTextDataset
#### Properties
* **type**: 'DelimitedText' (Required): Type of dataset.
* **typeProperties**: [DelimitedTextDatasetTypeProperties](#delimitedtextdatasettypeproperties): DelimitedText dataset properties.

### DocumentDbCollectionDataset
#### Properties
* **type**: 'DocumentDbCollection' (Required): Type of dataset.
* **typeProperties**: [DocumentDbCollectionDatasetTypeProperties](#documentdbcollectiondatasettypeproperties) (Required): DocumentDB Collection dataset properties.

### DrillTableDataset
#### Properties
* **type**: 'DrillTable' (Required): Type of dataset.
* **typeProperties**: [DrillDatasetTypeProperties](#drilldatasettypeproperties): Drill Dataset Properties

### DynamicsAXResourceDataset
#### Properties
* **type**: 'DynamicsAXResource' (Required): Type of dataset.
* **typeProperties**: [DynamicsAXResourceDatasetTypeProperties](#dynamicsaxresourcedatasettypeproperties) (Required): Dynamics AX OData resource dataset properties.

### DynamicsCrmEntityDataset
#### Properties
* **type**: 'DynamicsCrmEntity' (Required): Type of dataset.
* **typeProperties**: [DynamicsCrmEntityDatasetTypeProperties](#dynamicscrmentitydatasettypeproperties): Dynamics CRM entity dataset properties.

### DynamicsEntityDataset
#### Properties
* **type**: 'DynamicsEntity' (Required): Type of dataset.
* **typeProperties**: [DynamicsEntityDatasetTypeProperties](#dynamicsentitydatasettypeproperties): Dynamics entity dataset properties.

### EloquaObjectDataset
#### Properties
* **type**: 'EloquaObject' (Required): Type of dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### ExcelDataset
#### Properties
* **type**: 'Excel' (Required): Type of dataset.
* **typeProperties**: [ExcelDatasetTypeProperties](#exceldatasettypeproperties): Excel dataset properties.

### FileShareDataset
#### Properties
* **type**: 'FileShare' (Required): Type of dataset.
* **typeProperties**: [FileShareDatasetTypeProperties](#filesharedatasettypeproperties): On-premises file system dataset properties.

### GoogleAdWordsObjectDataset
#### Properties
* **type**: 'GoogleAdWordsObject' (Required): Type of dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### GoogleBigQueryObjectDataset
#### Properties
* **type**: 'GoogleBigQueryObject' (Required): Type of dataset.
* **typeProperties**: [GoogleBigQueryDatasetTypeProperties](#googlebigquerydatasettypeproperties): Google BigQuery Dataset Properties

### GreenplumTableDataset
#### Properties
* **type**: 'GreenplumTable' (Required): Type of dataset.
* **typeProperties**: [GreenplumDatasetTypeProperties](#greenplumdatasettypeproperties): Greenplum Dataset Properties

### HBaseObjectDataset
#### Properties
* **type**: 'HBaseObject' (Required): Type of dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### HiveObjectDataset
#### Properties
* **type**: 'HiveObject' (Required): Type of dataset.
* **typeProperties**: [HiveDatasetTypeProperties](#hivedatasettypeproperties): Hive Properties

### HttpDataset
#### Properties
* **type**: 'HttpFile' (Required): Type of dataset.
* **typeProperties**: [HttpDatasetTypeProperties](#httpdatasettypeproperties): Properties specific to this dataset type.

### HubspotObjectDataset
#### Properties
* **type**: 'HubspotObject' (Required): Type of dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### ImpalaObjectDataset
#### Properties
* **type**: 'ImpalaObject' (Required): Type of dataset.
* **typeProperties**: [ImpalaDatasetTypeProperties](#impaladatasettypeproperties): Impala Dataset Properties

### InformixTableDataset
#### Properties
* **type**: 'InformixTable' (Required): Type of dataset.
* **typeProperties**: [InformixTableDatasetTypeProperties](#informixtabledatasettypeproperties): Informix table dataset properties.

### JiraObjectDataset
#### Properties
* **type**: 'JiraObject' (Required): Type of dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### JsonDataset
#### Properties
* **type**: 'Json' (Required): Type of dataset.
* **typeProperties**: [JsonDatasetTypeProperties](#jsondatasettypeproperties): Json dataset properties.

### MagentoObjectDataset
#### Properties
* **type**: 'MagentoObject' (Required): Type of dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### MariaDBTableDataset
#### Properties
* **type**: 'MariaDBTable' (Required): Type of dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### MarketoObjectDataset
#### Properties
* **type**: 'MarketoObject' (Required): Type of dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### MicrosoftAccessTableDataset
#### Properties
* **type**: 'MicrosoftAccessTable' (Required): Type of dataset.
* **typeProperties**: [MicrosoftAccessTableDatasetTypeProperties](#microsoftaccesstabledatasettypeproperties): Microsoft Access table dataset properties.

### MongoDbAtlasCollectionDataset
#### Properties
* **type**: 'MongoDbAtlasCollection' (Required): Type of dataset.
* **typeProperties**: [MongoDbAtlasCollectionDatasetTypeProperties](#mongodbatlascollectiondatasettypeproperties) (Required): MongoDB Atlas database dataset properties.

### MongoDbCollectionDataset
#### Properties
* **type**: 'MongoDbCollection' (Required): Type of dataset.
* **typeProperties**: [MongoDbCollectionDatasetTypeProperties](#mongodbcollectiondatasettypeproperties) (Required): MongoDB database dataset properties.

### MongoDbV2CollectionDataset
#### Properties
* **type**: 'MongoDbV2Collection' (Required): Type of dataset.
* **typeProperties**: [MongoDbV2CollectionDatasetTypeProperties](#mongodbv2collectiondatasettypeproperties) (Required): MongoDB database dataset properties.

### MySqlTableDataset
#### Properties
* **type**: 'MySqlTable' (Required): Type of dataset.
* **typeProperties**: [MySqlTableDatasetTypeProperties](#mysqltabledatasettypeproperties): MySql table dataset properties.

### NetezzaTableDataset
#### Properties
* **type**: 'NetezzaTable' (Required): Type of dataset.
* **typeProperties**: [NetezzaTableDatasetTypeProperties](#netezzatabledatasettypeproperties): Netezza dataset properties.

### ODataResourceDataset
#### Properties
* **type**: 'ODataResource' (Required): Type of dataset.
* **typeProperties**: [ODataResourceDatasetTypeProperties](#odataresourcedatasettypeproperties): OData dataset properties.

### OdbcTableDataset
#### Properties
* **type**: 'OdbcTable' (Required): Type of dataset.
* **typeProperties**: [OdbcTableDatasetTypeProperties](#odbctabledatasettypeproperties): ODBC table dataset properties.

### Office365Dataset
#### Properties
* **type**: 'Office365Table' (Required): Type of dataset.
* **typeProperties**: [Office365DatasetTypeProperties](#office365datasettypeproperties) (Required): Office365 dataset properties.

### OracleServiceCloudObjectDataset
#### Properties
* **type**: 'OracleServiceCloudObject' (Required): Type of dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### OracleTableDataset
#### Properties
* **type**: 'OracleTable' (Required): Type of dataset.
* **typeProperties**: [OracleTableDatasetTypeProperties](#oracletabledatasettypeproperties): On-premises Oracle dataset properties.

### OrcDataset
#### Properties
* **type**: 'Orc' (Required): Type of dataset.
* **typeProperties**: [OrcDatasetTypeProperties](#orcdatasettypeproperties): ORC dataset properties.

### ParquetDataset
#### Properties
* **type**: 'Parquet' (Required): Type of dataset.
* **typeProperties**: [ParquetDatasetTypeProperties](#parquetdatasettypeproperties): Parquet dataset properties.

### PaypalObjectDataset
#### Properties
* **type**: 'PaypalObject' (Required): Type of dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### PhoenixObjectDataset
#### Properties
* **type**: 'PhoenixObject' (Required): Type of dataset.
* **typeProperties**: [PhoenixDatasetTypeProperties](#phoenixdatasettypeproperties): Phoenix Dataset Properties

### PostgreSqlTableDataset
#### Properties
* **type**: 'PostgreSqlTable' (Required): Type of dataset.
* **typeProperties**: [PostgreSqlTableDatasetTypeProperties](#postgresqltabledatasettypeproperties): PostgreSQL table dataset properties.

### PrestoObjectDataset
#### Properties
* **type**: 'PrestoObject' (Required): Type of dataset.
* **typeProperties**: [PrestoDatasetTypeProperties](#prestodatasettypeproperties): Presto Dataset Properties

### QuickBooksObjectDataset
#### Properties
* **type**: 'QuickBooksObject' (Required): Type of dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### RelationalTableDataset
#### Properties
* **type**: 'RelationalTable' (Required): Type of dataset.
* **typeProperties**: [RelationalTableDatasetTypeProperties](#relationaltabledatasettypeproperties): Relational table dataset properties.

### ResponsysObjectDataset
#### Properties
* **type**: 'ResponsysObject' (Required): Type of dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### RestResourceDataset
#### Properties
* **type**: 'RestResource' (Required): Type of dataset.
* **typeProperties**: [RestResourceDatasetTypeProperties](#restresourcedatasettypeproperties): Properties specific to this dataset type.

### SalesforceMarketingCloudObjectDataset
#### Properties
* **type**: 'SalesforceMarketingCloudObject' (Required): Type of dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### SalesforceObjectDataset
#### Properties
* **type**: 'SalesforceObject' (Required): Type of dataset.
* **typeProperties**: [SalesforceObjectDatasetTypeProperties](#salesforceobjectdatasettypeproperties): Salesforce object dataset properties.

### SalesforceServiceCloudObjectDataset
#### Properties
* **type**: 'SalesforceServiceCloudObject' (Required): Type of dataset.
* **typeProperties**: [SalesforceServiceCloudObjectDatasetTypeProperties](#salesforceservicecloudobjectdatasettypeproperties): Salesforce Service Cloud object dataset properties.

### SapBwCubeDataset
#### Properties
* **type**: 'SapBwCube' (Required): Type of dataset.

### SapCloudForCustomerResourceDataset
#### Properties
* **type**: 'SapCloudForCustomerResource' (Required): Type of dataset.
* **typeProperties**: [SapCloudForCustomerResourceDatasetTypeProperties](#sapcloudforcustomerresourcedatasettypeproperties) (Required): Sap Cloud For Customer OData resource dataset properties.

### SapEccResourceDataset
#### Properties
* **type**: 'SapEccResource' (Required): Type of dataset.
* **typeProperties**: [SapEccResourceDatasetTypeProperties](#sapeccresourcedatasettypeproperties) (Required): Sap ECC OData resource dataset properties.

### SapHanaTableDataset
#### Properties
* **type**: 'SapHanaTable' (Required): Type of dataset.
* **typeProperties**: [SapHanaTableDatasetTypeProperties](#saphanatabledatasettypeproperties): SAP HANA Table properties.

### SapOpenHubTableDataset
#### Properties
* **type**: 'SapOpenHubTable' (Required): Type of dataset.
* **typeProperties**: [SapOpenHubTableDatasetTypeProperties](#sapopenhubtabledatasettypeproperties) (Required): Sap Business Warehouse Open Hub Destination Table properties.

### SapTableResourceDataset
#### Properties
* **type**: 'SapTableResource' (Required): Type of dataset.
* **typeProperties**: [SapTableResourceDatasetTypeProperties](#saptableresourcedatasettypeproperties) (Required): SAP Table Resource properties.

### ServiceNowObjectDataset
#### Properties
* **type**: 'ServiceNowObject' (Required): Type of dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### SharePointOnlineListResourceDataset
#### Properties
* **type**: 'SharePointOnlineListResource' (Required): Type of dataset.
* **typeProperties**: [SharePointOnlineListDatasetTypeProperties](#sharepointonlinelistdatasettypeproperties): Sharepoint online list dataset properties.

### ShopifyObjectDataset
#### Properties
* **type**: 'ShopifyObject' (Required): Type of dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### SnowflakeDataset
#### Properties
* **type**: 'SnowflakeTable' (Required): Type of dataset.
* **typeProperties**: [SnowflakeDatasetTypeProperties](#snowflakedatasettypeproperties) (Required): Snowflake dataset properties.

### SparkObjectDataset
#### Properties
* **type**: 'SparkObject' (Required): Type of dataset.
* **typeProperties**: [SparkDatasetTypeProperties](#sparkdatasettypeproperties): Spark Properties

### SqlServerTableDataset
#### Properties
* **type**: 'SqlServerTable' (Required): Type of dataset.
* **typeProperties**: [SqlServerTableDatasetTypeProperties](#sqlservertabledatasettypeproperties): On-premises SQL Server dataset properties.

### SquareObjectDataset
#### Properties
* **type**: 'SquareObject' (Required): Type of dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### SybaseTableDataset
#### Properties
* **type**: 'SybaseTable' (Required): Type of dataset.
* **typeProperties**: [SybaseTableDatasetTypeProperties](#sybasetabledatasettypeproperties): Sybase table dataset properties.

### TeradataTableDataset
#### Properties
* **type**: 'TeradataTable' (Required): Type of dataset.
* **typeProperties**: [TeradataTableDatasetTypeProperties](#teradatatabledatasettypeproperties): Teradata dataset properties.

### VerticaTableDataset
#### Properties
* **type**: 'VerticaTable' (Required): Type of dataset.
* **typeProperties**: [VerticaDatasetTypeProperties](#verticadatasettypeproperties): Vertica Properties

### WebTableDataset
#### Properties
* **type**: 'WebTable' (Required): Type of dataset.
* **typeProperties**: [WebTableDatasetTypeProperties](#webtabledatasettypeproperties) (Required): Web table dataset properties.

### XeroObjectDataset
#### Properties
* **type**: 'XeroObject' (Required): Type of dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.

### XmlDataset
#### Properties
* **type**: 'Xml' (Required): Type of dataset.
* **typeProperties**: [XmlDatasetTypeProperties](#xmldatasettypeproperties): Xml dataset properties.

### ZohoObjectDataset
#### Properties
* **type**: 'ZohoObject' (Required): Type of dataset.
* **typeProperties**: [GenericDatasetTypeProperties](#genericdatasettypeproperties): Properties specific to this dataset type.


## DatasetFolder
### Properties
* **name**: string: The name of the folder that this Dataset is in.

## ParameterDefinitionSpecification
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterSpecification](#parameterspecification)

## ParameterSpecification
### Properties
* **defaultValue**: any: Any object
* **type**: 'Array' | 'Bool' | 'Float' | 'Int' | 'Object' | 'SecureString' | 'String' (Required): Parameter type.

## GenericDatasetTypeProperties
### Properties
* **tableName**: any: Any object

## AmazonRdsForOracleTableDatasetTypeProperties
### Properties
* **schema**: any: Any object
* **table**: any: Any object

## AmazonRdsForSqlServerTableDatasetTypeProperties
### Properties
* **schema**: any: Any object
* **table**: any: Any object

## AmazonRedshiftTableDatasetTypeProperties
### Properties
* **schema**: any: Any object
* **table**: any: Any object
* **tableName**: any: Any object

## AmazonS3DatasetTypeProperties
### Properties
* **bucketName**: any (Required): Any object
* **compression**: [DatasetCompression](#datasetcompression): The compression method used on a dataset.
* **format**: [DatasetStorageFormat](#datasetstorageformat): The format definition of a storage.
* **key**: any: Any object
* **modifiedDatetimeEnd**: any: Any object
* **modifiedDatetimeStart**: any: Any object
* **prefix**: any: Any object
* **version**: any: Any object

## DatasetCompression
* **Discriminator**: type

### Base Properties
### DatasetBZip2Compression
#### Properties
* **type**: 'BZip2' (Required): Type of dataset compression. Type: string (or Expression with resultType string).

### DatasetDeflateCompression
#### Properties
* **level**: any: Any object
* **type**: 'Deflate' (Required): Type of dataset compression. Type: string (or Expression with resultType string).

### DatasetGZipCompression
#### Properties
* **level**: any: Any object
* **type**: 'GZip' (Required): Type of dataset compression. Type: string (or Expression with resultType string).

### DatasetTarCompression
#### Properties
* **type**: 'Tar' (Required): Type of dataset compression. Type: string (or Expression with resultType string).

### DatasetTarGZipCompression
#### Properties
* **level**: any: Any object
* **type**: 'TarGZip' (Required): Type of dataset compression. Type: string (or Expression with resultType string).

### DatasetZipDeflateCompression
#### Properties
* **level**: any: Any object
* **type**: 'ZipDeflate' (Required): Type of dataset compression. Type: string (or Expression with resultType string).


## DatasetStorageFormat
* **Discriminator**: type

### Base Properties
* **deserializer**: any: Any object
* **serializer**: any: Any object
### AvroFormat
#### Properties
* **type**: 'AvroFormat' (Required): Type of dataset storage format.

### JsonFormat
#### Properties
* **encodingName**: any: Any object
* **filePattern**: any: Any object
* **jsonNodeReference**: any: Any object
* **jsonPathDefinition**: any: Any object
* **nestingSeparator**: any: Any object
* **type**: 'JsonFormat' (Required): Type of dataset storage format.

### OrcFormat
#### Properties
* **type**: 'OrcFormat' (Required): Type of dataset storage format.

### ParquetFormat
#### Properties
* **type**: 'ParquetFormat' (Required): Type of dataset storage format.

### TextFormat
#### Properties
* **columnDelimiter**: any: Any object
* **encodingName**: any: Any object
* **escapeChar**: any: Any object
* **firstRowAsHeader**: any: Any object
* **nullValue**: any: Any object
* **quoteChar**: any: Any object
* **rowDelimiter**: any: Any object
* **skipLineCount**: any: Any object
* **treatEmptyAsNull**: any: Any object
* **type**: 'TextFormat' (Required): Type of dataset storage format.


## AvroDatasetTypeProperties
### Properties
* **avroCompressionCodec**: any: Any object
* **avroCompressionLevel**: int
* **location**: [DatasetLocation](#datasetlocation) (Required): Dataset location.

## DatasetLocation
* **Discriminator**: type

### Base Properties
* **fileName**: any: Any object
* **folderPath**: any: Any object
### AmazonS3CompatibleLocation
#### Properties
* **bucketName**: any: Any object
* **type**: 'AmazonS3CompatibleLocation' (Required): Type of dataset storage location.
* **version**: any: Any object

### AmazonS3Location
#### Properties
* **bucketName**: any: Any object
* **type**: 'AmazonS3Location' (Required): Type of dataset storage location.
* **version**: any: Any object

### AzureBlobFSLocation
#### Properties
* **fileSystem**: any: Any object
* **type**: 'AzureBlobFSLocation' (Required): Type of dataset storage location.

### AzureBlobStorageLocation
#### Properties
* **container**: any: Any object
* **type**: 'AzureBlobStorageLocation' (Required): Type of dataset storage location.

### AzureDataLakeStoreLocation
#### Properties
* **type**: 'AzureDataLakeStoreLocation' (Required): Type of dataset storage location.

### AzureFileStorageLocation
#### Properties
* **type**: 'AzureFileStorageLocation' (Required): Type of dataset storage location.

### FileServerLocation
#### Properties
* **type**: 'FileServerLocation' (Required): Type of dataset storage location.

### FtpServerLocation
#### Properties
* **type**: 'FtpServerLocation' (Required): Type of dataset storage location.

### GoogleCloudStorageLocation
#### Properties
* **bucketName**: any: Any object
* **type**: 'GoogleCloudStorageLocation' (Required): Type of dataset storage location.
* **version**: any: Any object

### HdfsLocation
#### Properties
* **type**: 'HdfsLocation' (Required): Type of dataset storage location.

### HttpServerLocation
#### Properties
* **relativeUrl**: any: Any object
* **type**: 'HttpServerLocation' (Required): Type of dataset storage location.

### OracleCloudStorageLocation
#### Properties
* **bucketName**: any: Any object
* **type**: 'OracleCloudStorageLocation' (Required): Type of dataset storage location.
* **version**: any: Any object

### SftpLocation
#### Properties
* **type**: 'SftpLocation' (Required): Type of dataset storage location.


## AzureBlobDatasetTypeProperties
### Properties
* **compression**: [DatasetCompression](#datasetcompression): The compression method used on a dataset.
* **fileName**: any: Any object
* **folderPath**: any: Any object
* **format**: [DatasetStorageFormat](#datasetstorageformat): The format definition of a storage.
* **modifiedDatetimeEnd**: any: Any object
* **modifiedDatetimeStart**: any: Any object
* **tableRootLocation**: any: Any object

## AzureBlobFSDatasetTypeProperties
### Properties
* **compression**: [DatasetCompression](#datasetcompression): The compression method used on a dataset.
* **fileName**: any: Any object
* **folderPath**: any: Any object
* **format**: [DatasetStorageFormat](#datasetstorageformat): The format definition of a storage.

## AzureDatabricksDeltaLakeDatasetTypeProperties
### Properties
* **database**: any: Any object
* **table**: any: Any object

## AzureDataExplorerDatasetTypeProperties
### Properties
* **table**: any: Any object

## AzureDataLakeStoreDatasetTypeProperties
### Properties
* **compression**: [DatasetCompression](#datasetcompression): The compression method used on a dataset.
* **fileName**: any: Any object
* **folderPath**: any: Any object
* **format**: [DatasetStorageFormat](#datasetstorageformat): The format definition of a storage.

## AzureMySqlTableDatasetTypeProperties
### Properties
* **table**: any: Any object
* **tableName**: any: Any object

## AzurePostgreSqlTableDatasetTypeProperties
### Properties
* **schema**: any: Any object
* **table**: any: Any object
* **tableName**: any: Any object

## AzureSearchIndexDatasetTypeProperties
### Properties
* **indexName**: any (Required): Any object

## AzureSqlDWTableDatasetTypeProperties
### Properties
* **schema**: any: Any object
* **table**: any: Any object
* **tableName**: any: Any object

## AzureSqlMITableDatasetTypeProperties
### Properties
* **schema**: any: Any object
* **table**: any: Any object
* **tableName**: any: Any object

## AzureSqlTableDatasetTypeProperties
### Properties
* **schema**: any: Any object
* **table**: any: Any object
* **tableName**: any: Any object

## AzureTableDatasetTypeProperties
### Properties
* **tableName**: any (Required): Any object

## BinaryDatasetTypeProperties
### Properties
* **compression**: [DatasetCompression](#datasetcompression): The compression method used on a dataset.
* **location**: [DatasetLocation](#datasetlocation) (Required): Dataset location.

## CassandraTableDatasetTypeProperties
### Properties
* **keyspace**: any: Any object
* **tableName**: any: Any object

## CommonDataServiceForAppsEntityDatasetTypeProperties
### Properties
* **entityName**: any: Any object

## CosmosDbMongoDbApiCollectionDatasetTypeProperties
### Properties
* **collection**: any (Required): Any object

## CosmosDbSqlApiCollectionDatasetTypeProperties
### Properties
* **collectionName**: any (Required): Any object

## Db2TableDatasetTypeProperties
### Properties
* **schema**: any: Any object
* **table**: any: Any object
* **tableName**: any: Any object

## DelimitedTextDatasetTypeProperties
### Properties
* **columnDelimiter**: any: Any object
* **compressionCodec**: any: Any object
* **compressionLevel**: any: Any object
* **encodingName**: any: Any object
* **escapeChar**: any: Any object
* **firstRowAsHeader**: any: Any object
* **location**: [DatasetLocation](#datasetlocation) (Required): Dataset location.
* **nullValue**: any: Any object
* **quoteChar**: any: Any object
* **rowDelimiter**: any: Any object

## DocumentDbCollectionDatasetTypeProperties
### Properties
* **collectionName**: any (Required): Any object

## DrillDatasetTypeProperties
### Properties
* **schema**: any: Any object
* **table**: any: Any object
* **tableName**: any: Any object

## DynamicsAXResourceDatasetTypeProperties
### Properties
* **path**: any (Required): Any object

## DynamicsCrmEntityDatasetTypeProperties
### Properties
* **entityName**: any: Any object

## DynamicsEntityDatasetTypeProperties
### Properties
* **entityName**: any: Any object

## ExcelDatasetTypeProperties
### Properties
* **compression**: [DatasetCompression](#datasetcompression): The compression method used on a dataset.
* **firstRowAsHeader**: any: Any object
* **location**: [DatasetLocation](#datasetlocation) (Required): Dataset location.
* **nullValue**: any: Any object
* **range**: any: Any object
* **sheetIndex**: any: Any object
* **sheetName**: any: Any object

## FileShareDatasetTypeProperties
### Properties
* **compression**: [DatasetCompression](#datasetcompression): The compression method used on a dataset.
* **fileFilter**: any: Any object
* **fileName**: any: Any object
* **folderPath**: any: Any object
* **format**: [DatasetStorageFormat](#datasetstorageformat): The format definition of a storage.
* **modifiedDatetimeEnd**: any: Any object
* **modifiedDatetimeStart**: any: Any object

## GoogleBigQueryDatasetTypeProperties
### Properties
* **dataset**: any: Any object
* **table**: any: Any object
* **tableName**: any: Any object

## GreenplumDatasetTypeProperties
### Properties
* **schema**: any: Any object
* **table**: any: Any object
* **tableName**: any: Any object

## HiveDatasetTypeProperties
### Properties
* **schema**: any: Any object
* **table**: any: Any object
* **tableName**: any: Any object

## HttpDatasetTypeProperties
### Properties
* **additionalHeaders**: any: Any object
* **compression**: [DatasetCompression](#datasetcompression): The compression method used on a dataset.
* **format**: [DatasetStorageFormat](#datasetstorageformat): The format definition of a storage.
* **relativeUrl**: any: Any object
* **requestBody**: any: Any object
* **requestMethod**: any: Any object

## ImpalaDatasetTypeProperties
### Properties
* **schema**: any: Any object
* **table**: any: Any object
* **tableName**: any: Any object

## InformixTableDatasetTypeProperties
### Properties
* **tableName**: any: Any object

## JsonDatasetTypeProperties
### Properties
* **compression**: [DatasetCompression](#datasetcompression): The compression method used on a dataset.
* **encodingName**: any: Any object
* **location**: [DatasetLocation](#datasetlocation) (Required): Dataset location.

## MicrosoftAccessTableDatasetTypeProperties
### Properties
* **tableName**: any: Any object

## MongoDbAtlasCollectionDatasetTypeProperties
### Properties
* **collection**: any (Required): Any object

## MongoDbCollectionDatasetTypeProperties
### Properties
* **collectionName**: any (Required): Any object

## MongoDbV2CollectionDatasetTypeProperties
### Properties
* **collection**: any (Required): Any object

## MySqlTableDatasetTypeProperties
### Properties
* **tableName**: any: Any object

## NetezzaTableDatasetTypeProperties
### Properties
* **schema**: any: Any object
* **table**: any: Any object
* **tableName**: any: Any object

## ODataResourceDatasetTypeProperties
### Properties
* **path**: any: Any object

## OdbcTableDatasetTypeProperties
### Properties
* **tableName**: any: Any object

## Office365DatasetTypeProperties
### Properties
* **predicate**: any: Any object
* **tableName**: any (Required): Any object

## OracleTableDatasetTypeProperties
### Properties
* **schema**: any: Any object
* **table**: any: Any object
* **tableName**: any: Any object

## OrcDatasetTypeProperties
### Properties
* **location**: [DatasetLocation](#datasetlocation) (Required): Dataset location.
* **orcCompressionCodec**: any: Any object

## ParquetDatasetTypeProperties
### Properties
* **compressionCodec**: any: Any object
* **location**: [DatasetLocation](#datasetlocation) (Required): Dataset location.

## PhoenixDatasetTypeProperties
### Properties
* **schema**: any: Any object
* **table**: any: Any object
* **tableName**: any: Any object

## PostgreSqlTableDatasetTypeProperties
### Properties
* **schema**: any: Any object
* **table**: any: Any object
* **tableName**: any: Any object

## PrestoDatasetTypeProperties
### Properties
* **schema**: any: Any object
* **table**: any: Any object
* **tableName**: any: Any object

## RelationalTableDatasetTypeProperties
### Properties
* **tableName**: any: Any object

## RestResourceDatasetTypeProperties
### Properties
* **additionalHeaders**: any: Any object
* **paginationRules**: any: Any object
* **relativeUrl**: any: Any object
* **requestBody**: any: Any object
* **requestMethod**: any: Any object

## SalesforceObjectDatasetTypeProperties
### Properties
* **objectApiName**: any: Any object

## SalesforceServiceCloudObjectDatasetTypeProperties
### Properties
* **objectApiName**: any: Any object

## SapCloudForCustomerResourceDatasetTypeProperties
### Properties
* **path**: any (Required): Any object

## SapEccResourceDatasetTypeProperties
### Properties
* **path**: any (Required): Any object

## SapHanaTableDatasetTypeProperties
### Properties
* **schema**: any: Any object
* **table**: any: Any object

## SapOpenHubTableDatasetTypeProperties
### Properties
* **baseRequestId**: any: Any object
* **excludeLastRequest**: any: Any object
* **openHubDestinationName**: any (Required): Any object

## SapTableResourceDatasetTypeProperties
### Properties
* **tableName**: any (Required): Any object

## SharePointOnlineListDatasetTypeProperties
### Properties
* **listName**: any: Any object

## SnowflakeDatasetTypeProperties
### Properties
* **schema**: any: Any object
* **table**: any: Any object

## SparkDatasetTypeProperties
### Properties
* **schema**: any: Any object
* **table**: any: Any object
* **tableName**: any: Any object

## SqlServerTableDatasetTypeProperties
### Properties
* **schema**: any: Any object
* **table**: any: Any object
* **tableName**: any: Any object

## SybaseTableDatasetTypeProperties
### Properties
* **tableName**: any: Any object

## TeradataTableDatasetTypeProperties
### Properties
* **database**: any: Any object
* **table**: any: Any object

## VerticaDatasetTypeProperties
### Properties
* **schema**: any: Any object
* **table**: any: Any object
* **tableName**: any: Any object

## WebTableDatasetTypeProperties
### Properties
* **index**: any (Required): Any object
* **path**: any: Any object

## XmlDatasetTypeProperties
### Properties
* **compression**: [DatasetCompression](#datasetcompression): The compression method used on a dataset.
* **encodingName**: any: Any object
* **location**: [DatasetLocation](#datasetlocation) (Required): Dataset location.
* **nullValue**: any: Any object

## IntegrationRuntime
* **Discriminator**: type

### Base Properties
* **description**: string: Integration runtime description.
### ManagedIntegrationRuntime
#### Properties
* **managedVirtualNetwork**: [ManagedVirtualNetworkReference](#managedvirtualnetworkreference): Managed Virtual Network reference type.
* **state**: 'AccessDenied' | 'Initial' | 'Limited' | 'NeedRegistration' | 'Offline' | 'Online' | 'Started' | 'Starting' | 'Stopped' | 'Stopping' (ReadOnly): The state of integration runtime.
* **type**: 'Managed' (Required): Type of integration runtime.
* **typeProperties**: [ManagedIntegrationRuntimeTypeProperties](#managedintegrationruntimetypeproperties) (Required): Managed integration runtime type properties.

### SelfHostedIntegrationRuntime
#### Properties
* **type**: 'SelfHosted' (Required): Type of integration runtime.
* **typeProperties**: [SelfHostedIntegrationRuntimeTypeProperties](#selfhostedintegrationruntimetypeproperties): The self-hosted integration runtime properties.


## ManagedVirtualNetworkReference
### Properties
* **referenceName**: string (Required): Reference ManagedVirtualNetwork name.
* **type**: 'ManagedVirtualNetworkReference' (Required): Managed Virtual Network reference type.

## ManagedIntegrationRuntimeTypeProperties
### Properties
* **computeProperties**: [IntegrationRuntimeComputeProperties](#integrationruntimecomputeproperties): The compute resource properties for managed integration runtime.
* **customerVirtualNetwork**: [IntegrationRuntimeCustomerVirtualNetwork](#integrationruntimecustomervirtualnetwork): The definition and properties of virtual network to which Azure-SSIS integration runtime will join.
* **ssisProperties**: [IntegrationRuntimeSsisProperties](#integrationruntimessisproperties): SSIS properties for managed integration runtime.

## IntegrationRuntimeComputeProperties
### Properties
* **dataFlowProperties**: [IntegrationRuntimeDataFlowProperties](#integrationruntimedataflowproperties): Data flow properties for managed integration runtime.
* **location**: string: The location for managed integration runtime. The supported regions could be found on https://docs.microsoft.com/en-us/azure/data-factory/data-factory-data-movement-activities
* **maxParallelExecutionsPerNode**: int: Maximum parallel executions count per node for managed integration runtime.
* **nodeSize**: string: The node size requirement to managed integration runtime.
* **numberOfNodes**: int: The required number of nodes for managed integration runtime.
* **vNetProperties**: [IntegrationRuntimeVNetProperties](#integrationruntimevnetproperties): VNet properties for managed integration runtime.
### Additional Properties
* **Additional Properties Type**: any

## IntegrationRuntimeDataFlowProperties
### Properties
* **cleanup**: bool: Cluster will not be recycled and it will be used in next data flow activity run until TTL (time to live) is reached if this is set as false. Default is true.
* **computeType**: 'ComputeOptimized' | 'General' | 'MemoryOptimized': Compute type of the cluster which will execute data flow job.
* **coreCount**: int: Core count of the cluster which will execute data flow job. Supported values are: 8, 16, 32, 48, 80, 144 and 272.
* **timeToLive**: int: Time to live (in minutes) setting of the cluster which will execute data flow job.
### Additional Properties
* **Additional Properties Type**: any

## IntegrationRuntimeVNetProperties
### Properties
* **publicIPs**: string[]: Resource IDs of the public IP addresses that this integration runtime will use.
* **subnet**: string: The name of the subnet this integration runtime will join.
* **subnetId**: string: The ID of subnet, to which this Azure-SSIS integration runtime will be joined.
* **vNetId**: string: The ID of the VNet that this integration runtime will join.
### Additional Properties
* **Additional Properties Type**: any

## IntegrationRuntimeCustomerVirtualNetwork
### Properties
* **subnetId**: string: The ID of subnet to which Azure-SSIS integration runtime will join.

## IntegrationRuntimeSsisProperties
### Properties
* **catalogInfo**: [IntegrationRuntimeSsisCatalogInfo](#integrationruntimessiscataloginfo): Catalog information for managed dedicated integration runtime.
* **credential**: [CredentialReference](#credentialreference): Credential reference type.
* **customSetupScriptProperties**: [IntegrationRuntimeCustomSetupScriptProperties](#integrationruntimecustomsetupscriptproperties): Custom setup script properties for a managed dedicated integration runtime.
* **dataProxyProperties**: [IntegrationRuntimeDataProxyProperties](#integrationruntimedataproxyproperties): Data proxy properties for a managed dedicated integration runtime.
* **edition**: 'Enterprise' | 'Standard': The edition for the SSIS Integration Runtime
* **expressCustomSetupProperties**: [CustomSetupBase](#customsetupbase)[]: Custom setup without script properties for a SSIS integration runtime.
* **licenseType**: 'BasePrice' | 'LicenseIncluded': License type for bringing your own license scenario.
* **packageStores**: [PackageStore](#packagestore)[]: Package stores for the SSIS Integration Runtime.
### Additional Properties
* **Additional Properties Type**: any

## IntegrationRuntimeSsisCatalogInfo
### Properties
* **catalogAdminPassword**: [SecureString](#securestring): Azure Data Factory secure string definition. The string value will be masked with asterisks '*' during Get or List API calls.
* **catalogAdminUserName**: string: The administrator user name of catalog database.
* **catalogPricingTier**: 'Basic' | 'Premium' | 'PremiumRS' | 'Standard': The pricing tier for the catalog database. The valid values could be found in https://azure.microsoft.com/en-us/pricing/details/sql-database/
* **catalogServerEndpoint**: string: The catalog database server URL.
* **dualStandbyPairName**: string: The dual standby pair name of Azure-SSIS Integration Runtimes to support SSISDB failover.
### Additional Properties
* **Additional Properties Type**: any

## SecureString
### Properties
* **type**: string (Required): Type of the secret.
* **value**: string (Required): Value of secure string.

## CredentialReference
### Properties
* **referenceName**: string (Required): Reference credential name.
* **type**: 'CredentialReference' (Required): Credential reference type.
### Additional Properties
* **Additional Properties Type**: any

## IntegrationRuntimeCustomSetupScriptProperties
### Properties
* **blobContainerUri**: string: The URI of the Azure blob container that contains the custom setup script.
* **sasToken**: [SecureString](#securestring): Azure Data Factory secure string definition. The string value will be masked with asterisks '*' during Get or List API calls.

## IntegrationRuntimeDataProxyProperties
### Properties
* **connectVia**: [EntityReference](#entityreference): The entity reference.
* **path**: string: The path to contain the staged data in the Blob storage.
* **stagingLinkedService**: [EntityReference](#entityreference): The entity reference.

## EntityReference
### Properties
* **referenceName**: string: The name of this referenced entity.
* **type**: 'IntegrationRuntimeReference' | 'LinkedServiceReference': The type of this referenced entity.

## CustomSetupBase
* **Discriminator**: type

### Base Properties
### AzPowerShellSetup
#### Properties
* **type**: 'AzPowerShellSetup' (Required): The type of custom setup.
* **typeProperties**: [AzPowerShellSetupTypeProperties](#azpowershellsetuptypeproperties) (Required): Installation of Azure PowerShell type properties.

### CmdkeySetup
#### Properties
* **type**: 'CmdkeySetup' (Required): The type of custom setup.
* **typeProperties**: [CmdkeySetupTypeProperties](#cmdkeysetuptypeproperties) (Required): Cmdkey command custom setup type properties.

### ComponentSetup
#### Properties
* **type**: 'ComponentSetup' (Required): The type of custom setup.
* **typeProperties**: [LicensedComponentSetupTypeProperties](#licensedcomponentsetuptypeproperties) (Required): Installation of licensed component setup type properties.

### EnvironmentVariableSetup
#### Properties
* **type**: 'EnvironmentVariableSetup' (Required): The type of custom setup.
* **typeProperties**: [EnvironmentVariableSetupTypeProperties](#environmentvariablesetuptypeproperties) (Required): Environment variable custom setup type properties.


## AzPowerShellSetupTypeProperties
### Properties
* **version**: string (Required): The required version of Azure PowerShell to install.

## CmdkeySetupTypeProperties
### Properties
* **password**: [SecretBase](#secretbase) (Required): The base definition of a secret type.
* **targetName**: any (Required): Any object
* **userName**: any (Required): Any object

## SecretBase
* **Discriminator**: type

### Base Properties
### AzureKeyVaultSecretReference
#### Properties
* **secretName**: any (Required): Any object
* **secretVersion**: any: Any object
* **store**: [LinkedServiceReference](#linkedservicereference) (Required): Linked service reference type.
* **type**: 'AzureKeyVaultSecret' (Required): Type of the secret.

### SecureString
#### Properties
* **type**: 'SecureString' (Required): Type of the secret.
* **value**: string (Required): Value of secure string.


## LicensedComponentSetupTypeProperties
### Properties
* **componentName**: string (Required): The name of the 3rd party component.
* **licenseKey**: [SecretBase](#secretbase): The base definition of a secret type.

## EnvironmentVariableSetupTypeProperties
### Properties
* **variableName**: string (Required): The name of the environment variable.
* **variableValue**: string (Required): The value of the environment variable.

## PackageStore
### Properties
* **name**: string (Required): The name of the package store
* **packageStoreLinkedService**: [EntityReference](#entityreference) (Required): The entity reference.

## SelfHostedIntegrationRuntimeTypeProperties
### Properties
* **linkedInfo**: [LinkedIntegrationRuntimeType](#linkedintegrationruntimetype): The base definition of a linked integration runtime.

## LinkedIntegrationRuntimeType
* **Discriminator**: authorizationType

### Base Properties
### LinkedIntegrationRuntimeKeyAuthorization
#### Properties
* **authorizationType**: 'Key' (Required): The authorization type for integration runtime sharing.
* **key**: [SecureString](#securestring) (Required): Azure Data Factory secure string definition. The string value will be masked with asterisks '*' during Get or List API calls.

### LinkedIntegrationRuntimeRbacAuthorization
#### Properties
* **authorizationType**: 'RBAC' (Required): The authorization type for integration runtime sharing.
* **resourceId**: string (Required): The resource identifier of the integration runtime to be shared.


## LinkedService
* **Discriminator**: type

### Base Properties
* **annotations**: any[]: List of tags that can be used for describing the linked service.
* **connectVia**: [IntegrationRuntimeReference](#integrationruntimereference): Integration runtime reference type.
* **description**: string: Linked service description.
* **parameters**: [ParameterDefinitionSpecification](#parameterdefinitionspecification): Definition of all parameters for an entity.
### AmazonMWSLinkedService
#### Properties
* **type**: 'AmazonMWS' (Required): Type of linked service.
* **typeProperties**: [AmazonMWSLinkedServiceTypeProperties](#amazonmwslinkedservicetypeproperties) (Required): Amazon Marketplace Web Service linked service properties.

### AmazonRdsForOracleLinkedService
#### Properties
* **type**: 'AmazonRdsForOracle' (Required): Type of linked service.
* **typeProperties**: [AmazonRdsForLinkedServiceTypeProperties](#amazonrdsforlinkedservicetypeproperties) (Required): AmazonRdsForOracle database linked service properties.

### AmazonRdsForSqlServerLinkedService
#### Properties
* **type**: 'AmazonRdsForSqlServer' (Required): Type of linked service.
* **typeProperties**: [AmazonRdsForSqlServerLinkedServiceTypeProperties](#amazonrdsforsqlserverlinkedservicetypeproperties) (Required): Amazon Rds for SQL Server linked service properties.

### AmazonRedshiftLinkedService
#### Properties
* **type**: 'AmazonRedshift' (Required): Type of linked service.
* **typeProperties**: [AmazonRedshiftLinkedServiceTypeProperties](#amazonredshiftlinkedservicetypeproperties) (Required): Amazon Redshift linked service properties.

### AmazonS3LinkedService
#### Properties
* **type**: 'AmazonS3' (Required): Type of linked service.
* **typeProperties**: [AmazonS3LinkedServiceTypeProperties](#amazons3linkedservicetypeproperties) (Required): Amazon S3 linked service properties.

### AmazonS3CompatibleLinkedService
#### Properties
* **type**: 'AmazonS3Compatible' (Required): Type of linked service.
* **typeProperties**: [AmazonS3CompatibleLinkedServiceTypeProperties](#amazons3compatiblelinkedservicetypeproperties) (Required): Amazon S3 Compatible linked service properties.

### AzureBatchLinkedService
#### Properties
* **type**: 'AzureBatch' (Required): Type of linked service.
* **typeProperties**: [AzureBatchLinkedServiceTypeProperties](#azurebatchlinkedservicetypeproperties) (Required): Azure Batch linked service properties.

### AzureBlobFSLinkedService
#### Properties
* **type**: 'AzureBlobFS' (Required): Type of linked service.
* **typeProperties**: [AzureBlobFSLinkedServiceTypeProperties](#azureblobfslinkedservicetypeproperties) (Required): Azure Data Lake Storage Gen2 linked service properties.

### AzureBlobStorageLinkedService
#### Properties
* **type**: 'AzureBlobStorage' (Required): Type of linked service.
* **typeProperties**: [AzureBlobStorageLinkedServiceTypeProperties](#azureblobstoragelinkedservicetypeproperties) (Required): Azure Blob Storage linked service properties.

### AzureDatabricksLinkedService
#### Properties
* **type**: 'AzureDatabricks' (Required): Type of linked service.
* **typeProperties**: [AzureDatabricksLinkedServiceTypeProperties](#azuredatabrickslinkedservicetypeproperties) (Required): Azure Databricks linked service properties.

### AzureDatabricksDeltaLakeLinkedService
#### Properties
* **type**: 'AzureDatabricksDeltaLake' (Required): Type of linked service.
* **typeProperties**: [AzureDatabricksDetltaLakeLinkedServiceTypeProperties](#azuredatabricksdetltalakelinkedservicetypeproperties) (Required): Azure Databricks Delta Lake linked service properties.

### AzureDataExplorerLinkedService
#### Properties
* **type**: 'AzureDataExplorer' (Required): Type of linked service.
* **typeProperties**: [AzureDataExplorerLinkedServiceTypeProperties](#azuredataexplorerlinkedservicetypeproperties) (Required): Azure Data Explorer (Kusto) linked service properties.

### AzureDataLakeAnalyticsLinkedService
#### Properties
* **type**: 'AzureDataLakeAnalytics' (Required): Type of linked service.
* **typeProperties**: [AzureDataLakeAnalyticsLinkedServiceTypeProperties](#azuredatalakeanalyticslinkedservicetypeproperties) (Required): Azure Data Lake Analytics linked service properties.

### AzureDataLakeStoreLinkedService
#### Properties
* **type**: 'AzureDataLakeStore' (Required): Type of linked service.
* **typeProperties**: [AzureDataLakeStoreLinkedServiceTypeProperties](#azuredatalakestorelinkedservicetypeproperties) (Required): Azure Data Lake Store linked service properties.

### AzureFileStorageLinkedService
#### Properties
* **type**: 'AzureFileStorage' (Required): Type of linked service.
* **typeProperties**: [AzureFileStorageLinkedServiceTypeProperties](#azurefilestoragelinkedservicetypeproperties) (Required): Azure File Storage linked service properties.

### AzureFunctionLinkedService
#### Properties
* **type**: 'AzureFunction' (Required): Type of linked service.
* **typeProperties**: [AzureFunctionLinkedServiceTypeProperties](#azurefunctionlinkedservicetypeproperties) (Required): Azure Function linked service properties.

### AzureKeyVaultLinkedService
#### Properties
* **type**: 'AzureKeyVault' (Required): Type of linked service.
* **typeProperties**: [AzureKeyVaultLinkedServiceTypeProperties](#azurekeyvaultlinkedservicetypeproperties) (Required): Azure Key Vault linked service properties.

### AzureMariaDBLinkedService
#### Properties
* **type**: 'AzureMariaDB' (Required): Type of linked service.
* **typeProperties**: [AzureMariaDBLinkedServiceTypeProperties](#azuremariadblinkedservicetypeproperties) (Required): Azure Database for MariaDB linked service properties.

### AzureMLLinkedService
#### Properties
* **type**: 'AzureML' (Required): Type of linked service.
* **typeProperties**: [AzureMLLinkedServiceTypeProperties](#azuremllinkedservicetypeproperties) (Required): Azure ML Studio Web Service linked service properties.

### AzureMLServiceLinkedService
#### Properties
* **type**: 'AzureMLService' (Required): Type of linked service.
* **typeProperties**: [AzureMLServiceLinkedServiceTypeProperties](#azuremlservicelinkedservicetypeproperties) (Required): Azure ML Service linked service properties.

### AzureMySqlLinkedService
#### Properties
* **type**: 'AzureMySql' (Required): Type of linked service.
* **typeProperties**: [AzureMySqlLinkedServiceTypeProperties](#azuremysqllinkedservicetypeproperties) (Required): Azure MySQL database linked service properties.

### AzurePostgreSqlLinkedService
#### Properties
* **type**: 'AzurePostgreSql' (Required): Type of linked service.
* **typeProperties**: [AzurePostgreSqlLinkedServiceTypeProperties](#azurepostgresqllinkedservicetypeproperties) (Required): Azure PostgreSQL linked service properties.

### AzureSearchLinkedService
#### Properties
* **type**: 'AzureSearch' (Required): Type of linked service.
* **typeProperties**: [AzureSearchLinkedServiceTypeProperties](#azuresearchlinkedservicetypeproperties) (Required): Windows Azure Search Service linked service properties.

### AzureSqlDatabaseLinkedService
#### Properties
* **type**: 'AzureSqlDatabase' (Required): Type of linked service.
* **typeProperties**: [AzureSqlDatabaseLinkedServiceTypeProperties](#azuresqldatabaselinkedservicetypeproperties) (Required): Azure SQL Database linked service properties.

### AzureSqlDWLinkedService
#### Properties
* **type**: 'AzureSqlDW' (Required): Type of linked service.
* **typeProperties**: [AzureSqlDWLinkedServiceTypeProperties](#azuresqldwlinkedservicetypeproperties) (Required): Azure SQL Data Warehouse linked service properties.

### AzureSqlMILinkedService
#### Properties
* **type**: 'AzureSqlMI' (Required): Type of linked service.
* **typeProperties**: [AzureSqlMILinkedServiceTypeProperties](#azuresqlmilinkedservicetypeproperties) (Required): Azure SQL Managed Instance linked service properties.

### AzureStorageLinkedService
#### Properties
* **type**: 'AzureStorage' (Required): Type of linked service.
* **typeProperties**: [AzureStorageLinkedServiceTypeProperties](#azurestoragelinkedservicetypeproperties) (Required): Azure Storage linked service properties.

### AzureTableStorageLinkedService
#### Properties
* **type**: 'AzureTableStorage' (Required): Type of linked service.
* **typeProperties**: [AzureStorageLinkedServiceTypeProperties](#azurestoragelinkedservicetypeproperties) (Required): Azure Storage linked service properties.

### CassandraLinkedService
#### Properties
* **type**: 'Cassandra' (Required): Type of linked service.
* **typeProperties**: [CassandraLinkedServiceTypeProperties](#cassandralinkedservicetypeproperties) (Required): Cassandra linked service properties.

### CommonDataServiceForAppsLinkedService
#### Properties
* **type**: 'CommonDataServiceForApps' (Required): Type of linked service.
* **typeProperties**: [CommonDataServiceForAppsLinkedServiceTypeProperties](#commondataserviceforappslinkedservicetypeproperties) (Required): Common Data Service for Apps linked service properties.

### ConcurLinkedService
#### Properties
* **type**: 'Concur' (Required): Type of linked service.
* **typeProperties**: [ConcurLinkedServiceTypeProperties](#concurlinkedservicetypeproperties) (Required): Concur Service linked service properties.

### CosmosDbLinkedService
#### Properties
* **type**: 'CosmosDb' (Required): Type of linked service.
* **typeProperties**: [CosmosDbLinkedServiceTypeProperties](#cosmosdblinkedservicetypeproperties) (Required): CosmosDB linked service properties.

### CosmosDbMongoDbApiLinkedService
#### Properties
* **type**: 'CosmosDbMongoDbApi' (Required): Type of linked service.
* **typeProperties**: [CosmosDbMongoDbApiLinkedServiceTypeProperties](#cosmosdbmongodbapilinkedservicetypeproperties) (Required): CosmosDB (MongoDB API) linked service properties.

### CouchbaseLinkedService
#### Properties
* **type**: 'Couchbase' (Required): Type of linked service.
* **typeProperties**: [CouchbaseLinkedServiceTypeProperties](#couchbaselinkedservicetypeproperties) (Required): Couchbase server linked service properties.

### CustomDataSourceLinkedService
#### Properties
* **type**: 'CustomDataSource' (Required): Type of linked service.
* **typeProperties**: any (Required): Any object

### Db2LinkedService
#### Properties
* **type**: 'Db2' (Required): Type of linked service.
* **typeProperties**: [Db2LinkedServiceTypeProperties](#db2linkedservicetypeproperties) (Required): DB2 linked service properties.

### DrillLinkedService
#### Properties
* **type**: 'Drill' (Required): Type of linked service.
* **typeProperties**: [DrillLinkedServiceTypeProperties](#drilllinkedservicetypeproperties) (Required): Drill server linked service properties.

### DynamicsLinkedService
#### Properties
* **type**: 'Dynamics' (Required): Type of linked service.
* **typeProperties**: [DynamicsLinkedServiceTypeProperties](#dynamicslinkedservicetypeproperties) (Required): Dynamics linked service properties.

### DynamicsAXLinkedService
#### Properties
* **type**: 'DynamicsAX' (Required): Type of linked service.
* **typeProperties**: [DynamicsAXLinkedServiceTypeProperties](#dynamicsaxlinkedservicetypeproperties) (Required): Dynamics AX linked service properties.

### DynamicsCrmLinkedService
#### Properties
* **type**: 'DynamicsCrm' (Required): Type of linked service.
* **typeProperties**: [DynamicsCrmLinkedServiceTypeProperties](#dynamicscrmlinkedservicetypeproperties) (Required): Dynamics CRM linked service properties.

### EloquaLinkedService
#### Properties
* **type**: 'Eloqua' (Required): Type of linked service.
* **typeProperties**: [EloquaLinkedServiceTypeProperties](#eloqualinkedservicetypeproperties) (Required): Eloqua server linked service properties.

### FileServerLinkedService
#### Properties
* **type**: 'FileServer' (Required): Type of linked service.
* **typeProperties**: [FileServerLinkedServiceTypeProperties](#fileserverlinkedservicetypeproperties) (Required): File system linked service properties.

### FtpServerLinkedService
#### Properties
* **type**: 'FtpServer' (Required): Type of linked service.
* **typeProperties**: [FtpServerLinkedServiceTypeProperties](#ftpserverlinkedservicetypeproperties) (Required): Properties specific to this linked service type.

### GoogleAdWordsLinkedService
#### Properties
* **type**: 'GoogleAdWords' (Required): Type of linked service.
* **typeProperties**: [GoogleAdWordsLinkedServiceTypeProperties](#googleadwordslinkedservicetypeproperties) (Required): Google AdWords service linked service properties.

### GoogleBigQueryLinkedService
#### Properties
* **type**: 'GoogleBigQuery' (Required): Type of linked service.
* **typeProperties**: [GoogleBigQueryLinkedServiceTypeProperties](#googlebigquerylinkedservicetypeproperties) (Required): Google BigQuery service linked service properties.

### GoogleCloudStorageLinkedService
#### Properties
* **type**: 'GoogleCloudStorage' (Required): Type of linked service.
* **typeProperties**: [GoogleCloudStorageLinkedServiceTypeProperties](#googlecloudstoragelinkedservicetypeproperties) (Required): Google Cloud Storage linked service properties.

### GreenplumLinkedService
#### Properties
* **type**: 'Greenplum' (Required): Type of linked service.
* **typeProperties**: [GreenplumLinkedServiceTypeProperties](#greenplumlinkedservicetypeproperties) (Required): Greenplum Database linked service properties.

### HBaseLinkedService
#### Properties
* **type**: 'HBase' (Required): Type of linked service.
* **typeProperties**: [HBaseLinkedServiceTypeProperties](#hbaselinkedservicetypeproperties) (Required): HBase server linked service properties.

### HdfsLinkedService
#### Properties
* **type**: 'Hdfs' (Required): Type of linked service.
* **typeProperties**: [HdfsLinkedServiceTypeProperties](#hdfslinkedservicetypeproperties) (Required): HDFS linked service properties.

### HDInsightLinkedService
#### Properties
* **type**: 'HDInsight' (Required): Type of linked service.
* **typeProperties**: [HDInsightLinkedServiceTypeProperties](#hdinsightlinkedservicetypeproperties) (Required): HDInsight linked service properties.

### HDInsightOnDemandLinkedService
#### Properties
* **type**: 'HDInsightOnDemand' (Required): Type of linked service.
* **typeProperties**: [HDInsightOnDemandLinkedServiceTypeProperties](#hdinsightondemandlinkedservicetypeproperties) (Required): HDInsight ondemand linked service properties.

### HiveLinkedService
#### Properties
* **type**: 'Hive' (Required): Type of linked service.
* **typeProperties**: [HiveLinkedServiceTypeProperties](#hivelinkedservicetypeproperties) (Required): Hive Server linked service properties.

### HttpLinkedService
#### Properties
* **type**: 'HttpServer' (Required): Type of linked service.
* **typeProperties**: [HttpLinkedServiceTypeProperties](#httplinkedservicetypeproperties) (Required): Properties specific to this linked service type.

### HubspotLinkedService
#### Properties
* **type**: 'Hubspot' (Required): Type of linked service.
* **typeProperties**: [HubspotLinkedServiceTypeProperties](#hubspotlinkedservicetypeproperties) (Required): Hubspot Service linked service properties.

### ImpalaLinkedService
#### Properties
* **type**: 'Impala' (Required): Type of linked service.
* **typeProperties**: [ImpalaLinkedServiceTypeProperties](#impalalinkedservicetypeproperties) (Required): Impala server linked service properties.

### InformixLinkedService
#### Properties
* **type**: 'Informix' (Required): Type of linked service.
* **typeProperties**: [InformixLinkedServiceTypeProperties](#informixlinkedservicetypeproperties) (Required): Informix linked service properties.

### JiraLinkedService
#### Properties
* **type**: 'Jira' (Required): Type of linked service.
* **typeProperties**: [JiraLinkedServiceTypeProperties](#jiralinkedservicetypeproperties) (Required): Jira Service linked service properties.

### MagentoLinkedService
#### Properties
* **type**: 'Magento' (Required): Type of linked service.
* **typeProperties**: [MagentoLinkedServiceTypeProperties](#magentolinkedservicetypeproperties) (Required): Magento server linked service properties.

### MariaDBLinkedService
#### Properties
* **type**: 'MariaDB' (Required): Type of linked service.
* **typeProperties**: [MariaDBLinkedServiceTypeProperties](#mariadblinkedservicetypeproperties) (Required): MariaDB server linked service properties.

### MarketoLinkedService
#### Properties
* **type**: 'Marketo' (Required): Type of linked service.
* **typeProperties**: [MarketoLinkedServiceTypeProperties](#marketolinkedservicetypeproperties) (Required): Marketo server linked service properties.

### MicrosoftAccessLinkedService
#### Properties
* **type**: 'MicrosoftAccess' (Required): Type of linked service.
* **typeProperties**: [MicrosoftAccessLinkedServiceTypeProperties](#microsoftaccesslinkedservicetypeproperties) (Required): Microsoft Access linked service properties.

### MongoDbLinkedService
#### Properties
* **type**: 'MongoDb' (Required): Type of linked service.
* **typeProperties**: [MongoDbLinkedServiceTypeProperties](#mongodblinkedservicetypeproperties) (Required): MongoDB linked service properties.

### MongoDbAtlasLinkedService
#### Properties
* **type**: 'MongoDbAtlas' (Required): Type of linked service.
* **typeProperties**: [MongoDbAtlasLinkedServiceTypeProperties](#mongodbatlaslinkedservicetypeproperties) (Required): MongoDB Atlas linked service properties.

### MongoDbV2LinkedService
#### Properties
* **type**: 'MongoDbV2' (Required): Type of linked service.
* **typeProperties**: [MongoDbV2LinkedServiceTypeProperties](#mongodbv2linkedservicetypeproperties) (Required): MongoDB linked service properties.

### MySqlLinkedService
#### Properties
* **type**: 'MySql' (Required): Type of linked service.
* **typeProperties**: [MySqlLinkedServiceTypeProperties](#mysqllinkedservicetypeproperties) (Required): MySQL linked service properties.

### NetezzaLinkedService
#### Properties
* **type**: 'Netezza' (Required): Type of linked service.
* **typeProperties**: [NetezzaLinkedServiceTypeProperties](#netezzalinkedservicetypeproperties) (Required): Netezza linked service properties.

### ODataLinkedService
#### Properties
* **type**: 'OData' (Required): Type of linked service.
* **typeProperties**: [ODataLinkedServiceTypeProperties](#odatalinkedservicetypeproperties) (Required): OData linked service properties.

### OdbcLinkedService
#### Properties
* **type**: 'Odbc' (Required): Type of linked service.
* **typeProperties**: [OdbcLinkedServiceTypeProperties](#odbclinkedservicetypeproperties) (Required): ODBC linked service properties.

### Office365LinkedService
#### Properties
* **type**: 'Office365' (Required): Type of linked service.
* **typeProperties**: [Office365LinkedServiceTypeProperties](#office365linkedservicetypeproperties) (Required): Office365 linked service properties.

### OracleLinkedService
#### Properties
* **type**: 'Oracle' (Required): Type of linked service.
* **typeProperties**: [OracleLinkedServiceTypeProperties](#oraclelinkedservicetypeproperties) (Required): Oracle database linked service properties.

### OracleCloudStorageLinkedService
#### Properties
* **type**: 'OracleCloudStorage' (Required): Type of linked service.
* **typeProperties**: [OracleCloudStorageLinkedServiceTypeProperties](#oraclecloudstoragelinkedservicetypeproperties) (Required): Oracle Cloud Storage linked service properties.

### OracleServiceCloudLinkedService
#### Properties
* **type**: 'OracleServiceCloud' (Required): Type of linked service.
* **typeProperties**: [OracleServiceCloudLinkedServiceTypeProperties](#oracleservicecloudlinkedservicetypeproperties) (Required): Oracle Service Cloud linked service properties.

### PaypalLinkedService
#### Properties
* **type**: 'Paypal' (Required): Type of linked service.
* **typeProperties**: [PaypalLinkedServiceTypeProperties](#paypallinkedservicetypeproperties) (Required): Paypal Service linked service properties.

### PhoenixLinkedService
#### Properties
* **type**: 'Phoenix' (Required): Type of linked service.
* **typeProperties**: [PhoenixLinkedServiceTypeProperties](#phoenixlinkedservicetypeproperties) (Required): Phoenix server linked service properties.

### PostgreSqlLinkedService
#### Properties
* **type**: 'PostgreSql' (Required): Type of linked service.
* **typeProperties**: [PostgreSqlLinkedServiceTypeProperties](#postgresqllinkedservicetypeproperties) (Required): PostgreSQL linked service properties.

### PrestoLinkedService
#### Properties
* **type**: 'Presto' (Required): Type of linked service.
* **typeProperties**: [PrestoLinkedServiceTypeProperties](#prestolinkedservicetypeproperties) (Required): Presto server linked service properties.

### QuickBooksLinkedService
#### Properties
* **type**: 'QuickBooks' (Required): Type of linked service.
* **typeProperties**: [QuickBooksLinkedServiceTypeProperties](#quickbookslinkedservicetypeproperties) (Required): QuickBooks server linked service properties.

### ResponsysLinkedService
#### Properties
* **type**: 'Responsys' (Required): Type of linked service.
* **typeProperties**: [ResponsysLinkedServiceTypeProperties](#responsyslinkedservicetypeproperties) (Required): Responsys linked service properties.

### RestServiceLinkedService
#### Properties
* **type**: 'RestService' (Required): Type of linked service.
* **typeProperties**: [RestServiceLinkedServiceTypeProperties](#restservicelinkedservicetypeproperties) (Required): Rest Service linked service properties.

### SalesforceLinkedService
#### Properties
* **type**: 'Salesforce' (Required): Type of linked service.
* **typeProperties**: [SalesforceLinkedServiceTypeProperties](#salesforcelinkedservicetypeproperties) (Required): Salesforce linked service properties.

### SalesforceMarketingCloudLinkedService
#### Properties
* **type**: 'SalesforceMarketingCloud' (Required): Type of linked service.
* **typeProperties**: [SalesforceMarketingCloudLinkedServiceTypeProperties](#salesforcemarketingcloudlinkedservicetypeproperties) (Required): Salesforce Marketing Cloud linked service properties.

### SalesforceServiceCloudLinkedService
#### Properties
* **type**: 'SalesforceServiceCloud' (Required): Type of linked service.
* **typeProperties**: [SalesforceServiceCloudLinkedServiceTypeProperties](#salesforceservicecloudlinkedservicetypeproperties) (Required): Salesforce Service Cloud linked service properties.

### SapBWLinkedService
#### Properties
* **type**: 'SapBW' (Required): Type of linked service.
* **typeProperties**: [SapBWLinkedServiceTypeProperties](#sapbwlinkedservicetypeproperties) (Required): Properties specific to this linked service type.

### SapCloudForCustomerLinkedService
#### Properties
* **type**: 'SapCloudForCustomer' (Required): Type of linked service.
* **typeProperties**: [SapCloudForCustomerLinkedServiceTypeProperties](#sapcloudforcustomerlinkedservicetypeproperties) (Required): SAP Cloud for Customer linked service properties.

### SapEccLinkedService
#### Properties
* **type**: 'SapEcc' (Required): Type of linked service.
* **typeProperties**: [SapEccLinkedServiceTypeProperties](#sapecclinkedservicetypeproperties) (Required): SAP ECC linked service properties.

### SapHanaLinkedService
#### Properties
* **type**: 'SapHana' (Required): Type of linked service.
* **typeProperties**: [SapHanaLinkedServiceProperties](#saphanalinkedserviceproperties) (Required): Properties specific to this linked service type.

### SapOpenHubLinkedService
#### Properties
* **type**: 'SapOpenHub' (Required): Type of linked service.
* **typeProperties**: [SapOpenHubLinkedServiceTypeProperties](#sapopenhublinkedservicetypeproperties) (Required): Properties specific to SAP Business Warehouse Open Hub Destination linked service type.

### SapTableLinkedService
#### Properties
* **type**: 'SapTable' (Required): Type of linked service.
* **typeProperties**: [SapTableLinkedServiceTypeProperties](#saptablelinkedservicetypeproperties) (Required): Properties specific to this linked service type.

### ServiceNowLinkedService
#### Properties
* **type**: 'ServiceNow' (Required): Type of linked service.
* **typeProperties**: [ServiceNowLinkedServiceTypeProperties](#servicenowlinkedservicetypeproperties) (Required): ServiceNow server linked service properties.

### SftpServerLinkedService
#### Properties
* **type**: 'Sftp' (Required): Type of linked service.
* **typeProperties**: [SftpServerLinkedServiceTypeProperties](#sftpserverlinkedservicetypeproperties) (Required): Properties specific to this linked service type.

### SharePointOnlineListLinkedService
#### Properties
* **type**: 'SharePointOnlineList' (Required): Type of linked service.
* **typeProperties**: [SharePointOnlineListLinkedServiceTypeProperties](#sharepointonlinelistlinkedservicetypeproperties) (Required): SharePoint Online List linked service properties.

### ShopifyLinkedService
#### Properties
* **type**: 'Shopify' (Required): Type of linked service.
* **typeProperties**: [ShopifyLinkedServiceTypeProperties](#shopifylinkedservicetypeproperties) (Required): Shopify Service linked service properties.

### SnowflakeLinkedService
#### Properties
* **type**: 'Snowflake' (Required): Type of linked service.
* **typeProperties**: [SnowflakeLinkedServiceTypeProperties](#snowflakelinkedservicetypeproperties) (Required): Snowflake linked service properties.

### SparkLinkedService
#### Properties
* **type**: 'Spark' (Required): Type of linked service.
* **typeProperties**: [SparkLinkedServiceTypeProperties](#sparklinkedservicetypeproperties) (Required): Spark Server linked service properties.

### SqlServerLinkedService
#### Properties
* **type**: 'SqlServer' (Required): Type of linked service.
* **typeProperties**: [SqlServerLinkedServiceTypeProperties](#sqlserverlinkedservicetypeproperties) (Required): SQL Server linked service properties.

### SquareLinkedService
#### Properties
* **type**: 'Square' (Required): Type of linked service.
* **typeProperties**: [SquareLinkedServiceTypeProperties](#squarelinkedservicetypeproperties) (Required): Square Service linked service properties.

### SybaseLinkedService
#### Properties
* **type**: 'Sybase' (Required): Type of linked service.
* **typeProperties**: [SybaseLinkedServiceTypeProperties](#sybaselinkedservicetypeproperties) (Required): Sybase linked service properties.

### TeradataLinkedService
#### Properties
* **type**: 'Teradata' (Required): Type of linked service.
* **typeProperties**: [TeradataLinkedServiceTypeProperties](#teradatalinkedservicetypeproperties) (Required): Teradata linked service properties.

### VerticaLinkedService
#### Properties
* **type**: 'Vertica' (Required): Type of linked service.
* **typeProperties**: [VerticaLinkedServiceTypeProperties](#verticalinkedservicetypeproperties) (Required): Vertica linked service properties.

### WebLinkedService
#### Properties
* **type**: 'Web' (Required): Type of linked service.
* **typeProperties**: [WebLinkedServiceTypeProperties](#weblinkedservicetypeproperties) (Required): Base definition of WebLinkedServiceTypeProperties, this typeProperties is polymorphic based on authenticationType, so not flattened in SDK models.

### XeroLinkedService
#### Properties
* **type**: 'Xero' (Required): Type of linked service.
* **typeProperties**: [XeroLinkedServiceTypeProperties](#xerolinkedservicetypeproperties) (Required): Xero Service linked service properties.

### ZohoLinkedService
#### Properties
* **type**: 'Zoho' (Required): Type of linked service.
* **typeProperties**: [ZohoLinkedServiceTypeProperties](#zoholinkedservicetypeproperties) (Required): Zoho server linked service properties.


## IntegrationRuntimeReference
### Properties
* **parameters**: [ParameterValueSpecification](#parametervaluespecification): An object mapping parameter names to argument values.
* **referenceName**: string (Required): Reference integration runtime name.
* **type**: 'IntegrationRuntimeReference' (Required): Type of integration runtime.

## ParameterValueSpecification
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ParameterDefinitionSpecification
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterSpecification](#parameterspecification)

## AmazonMWSLinkedServiceTypeProperties
### Properties
* **accessKeyId**: any (Required): Any object
* **encryptedCredential**: any: Any object
* **endpoint**: any (Required): Any object
* **marketplaceID**: any (Required): Any object
* **mwsAuthToken**: [SecretBase](#secretbase): The base definition of a secret type.
* **secretKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **sellerID**: any (Required): Any object
* **useEncryptedEndpoints**: any: Any object
* **useHostVerification**: any: Any object
* **usePeerVerification**: any: Any object

## AmazonRdsForLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required): Any object
* **encryptedCredential**: any: Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.

## AmazonRdsForSqlServerLinkedServiceTypeProperties
### Properties
* **alwaysEncryptedSettings**: [SqlAlwaysEncryptedProperties](#sqlalwaysencryptedproperties): Sql always encrypted properties.
* **connectionString**: any (Required): Any object
* **encryptedCredential**: any: Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **userName**: any: Any object

## SqlAlwaysEncryptedProperties
### Properties
* **alwaysEncryptedAkvAuthType**: 'ManagedIdentity' | 'ServicePrincipal' | 'UserAssignedManagedIdentity' (Required): Sql always encrypted AKV authentication type. Type: string (or Expression with resultType string).
* **credential**: [CredentialReference](#credentialreference): Credential reference type.
* **servicePrincipalId**: any: Any object
* **servicePrincipalKey**: [SecretBase](#secretbase): The base definition of a secret type.

## AmazonRedshiftLinkedServiceTypeProperties
### Properties
* **database**: any (Required): Any object
* **encryptedCredential**: any: Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **port**: any: Any object
* **server**: any (Required): Any object
* **username**: any: Any object

## AmazonS3LinkedServiceTypeProperties
### Properties
* **accessKeyId**: any: Any object
* **authenticationType**: any: Any object
* **encryptedCredential**: any: Any object
* **secretAccessKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **serviceUrl**: any: Any object
* **sessionToken**: [SecretBase](#secretbase): The base definition of a secret type.

## AmazonS3CompatibleLinkedServiceTypeProperties
### Properties
* **accessKeyId**: any: Any object
* **encryptedCredential**: any: Any object
* **forcePathStyle**: any: Any object
* **secretAccessKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **serviceUrl**: any: Any object

## AzureBatchLinkedServiceTypeProperties
### Properties
* **accessKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **accountName**: any (Required): Any object
* **batchUri**: any (Required): Any object
* **credential**: [CredentialReference](#credentialreference): Credential reference type.
* **encryptedCredential**: any: Any object
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference) (Required): Linked service reference type.
* **poolName**: any (Required): Any object

## AzureBlobFSLinkedServiceTypeProperties
### Properties
* **accountKey**: any: Any object
* **azureCloudType**: any: Any object
* **credential**: [CredentialReference](#credentialreference): Credential reference type.
* **encryptedCredential**: any: Any object
* **servicePrincipalId**: any: Any object
* **servicePrincipalKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **tenant**: any: Any object
* **url**: any (Required): Any object

## AzureBlobStorageLinkedServiceTypeProperties
### Properties
* **accountKey**: [AzureKeyVaultSecretReference](#azurekeyvaultsecretreference): Azure Key Vault secret reference.
* **accountKind**: string: Specify the kind of your storage account. Allowed values are: Storage (general purpose v1), StorageV2 (general purpose v2), BlobStorage, or BlockBlobStorage. Type: string (or Expression with resultType string).
* **azureCloudType**: any: Any object
* **connectionString**: any: Any object
* **credential**: [CredentialReference](#credentialreference): Credential reference type.
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **sasToken**: [AzureKeyVaultSecretReference](#azurekeyvaultsecretreference): Azure Key Vault secret reference.
* **sasUri**: any: Any object
* **serviceEndpoint**: string: Blob service endpoint of the Azure Blob Storage resource. It is mutually exclusive with connectionString, sasUri property.
* **servicePrincipalId**: any: Any object
* **servicePrincipalKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **tenant**: any: Any object

## AzureKeyVaultSecretReference
### Properties
* **secretName**: any (Required): Any object
* **secretVersion**: any: Any object
* **store**: [LinkedServiceReference](#linkedservicereference) (Required): Linked service reference type.
* **type**: string (Required): Type of the secret.

## AzureDatabricksLinkedServiceTypeProperties
### Properties
* **accessToken**: [SecretBase](#secretbase): The base definition of a secret type.
* **authentication**: any: Any object
* **credential**: [CredentialReference](#credentialreference): Credential reference type.
* **domain**: any (Required): Any object
* **encryptedCredential**: any: Any object
* **existingClusterId**: any: Any object
* **instancePoolId**: any: Any object
* **newClusterCustomTags**: [AzureDatabricksLinkedServiceTypePropertiesNewClusterCustomTags](#azuredatabrickslinkedservicetypepropertiesnewclustercustomtags): Additional tags for cluster resources. This property is ignored in instance pool configurations.
* **newClusterDriverNodeType**: any: Any object
* **newClusterEnableElasticDisk**: any: Any object
* **newClusterInitScripts**: any: Any object
* **newClusterLogDestination**: any: Any object
* **newClusterNodeType**: any: Any object
* **newClusterNumOfWorker**: any: Any object
* **newClusterSparkConf**: [AzureDatabricksLinkedServiceTypePropertiesNewClusterSparkConf](#azuredatabrickslinkedservicetypepropertiesnewclustersparkconf): A set of optional, user-specified Spark configuration key-value pairs.
* **newClusterSparkEnvVars**: [AzureDatabricksLinkedServiceTypePropertiesNewClusterSparkEnvVars](#azuredatabrickslinkedservicetypepropertiesnewclustersparkenvvars): A set of optional, user-specified Spark environment variables key-value pairs.
* **newClusterVersion**: any: Any object
* **policyId**: any: Any object
* **workspaceResourceId**: any: Any object

## AzureDatabricksLinkedServiceTypePropertiesNewClusterCustomTags
### Properties
### Additional Properties
* **Additional Properties Type**: any

## AzureDatabricksLinkedServiceTypePropertiesNewClusterSparkConf
### Properties
### Additional Properties
* **Additional Properties Type**: any

## AzureDatabricksLinkedServiceTypePropertiesNewClusterSparkEnvVars
### Properties
### Additional Properties
* **Additional Properties Type**: any

## AzureDatabricksDetltaLakeLinkedServiceTypeProperties
### Properties
* **accessToken**: [SecretBase](#secretbase): The base definition of a secret type.
* **clusterId**: any: Any object
* **domain**: any (Required): Any object
* **encryptedCredential**: any: Any object

## AzureDataExplorerLinkedServiceTypeProperties
### Properties
* **credential**: [CredentialReference](#credentialreference): Credential reference type.
* **database**: any (Required): Any object
* **endpoint**: any (Required): Any object
* **servicePrincipalId**: any: Any object
* **servicePrincipalKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **tenant**: any: Any object

## AzureDataLakeAnalyticsLinkedServiceTypeProperties
### Properties
* **accountName**: any (Required): Any object
* **dataLakeAnalyticsUri**: any: Any object
* **encryptedCredential**: any: Any object
* **resourceGroupName**: any: Any object
* **servicePrincipalId**: any: Any object
* **servicePrincipalKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **subscriptionId**: any: Any object
* **tenant**: any (Required): Any object

## AzureDataLakeStoreLinkedServiceTypeProperties
### Properties
* **accountName**: any: Any object
* **azureCloudType**: any: Any object
* **credential**: [CredentialReference](#credentialreference): Credential reference type.
* **dataLakeStoreUri**: any (Required): Any object
* **encryptedCredential**: any: Any object
* **resourceGroupName**: any: Any object
* **servicePrincipalId**: any: Any object
* **servicePrincipalKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **subscriptionId**: any: Any object
* **tenant**: any: Any object

## AzureFileStorageLinkedServiceTypeProperties
### Properties
* **accountKey**: [AzureKeyVaultSecretReference](#azurekeyvaultsecretreference): Azure Key Vault secret reference.
* **connectionString**: any: Any object
* **encryptedCredential**: any: Any object
* **fileShare**: any: Any object
* **host**: any: Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **sasToken**: [AzureKeyVaultSecretReference](#azurekeyvaultsecretreference): Azure Key Vault secret reference.
* **sasUri**: any: Any object
* **snapshot**: any: Any object
* **userId**: any: Any object

## AzureFunctionLinkedServiceTypeProperties
### Properties
* **authentication**: any: Any object
* **credential**: [CredentialReference](#credentialreference): Credential reference type.
* **encryptedCredential**: any: Any object
* **functionAppUrl**: any (Required): Any object
* **functionKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **resourceId**: any: Any object

## AzureKeyVaultLinkedServiceTypeProperties
### Properties
* **baseUrl**: any (Required): Any object
* **credential**: [CredentialReference](#credentialreference): Credential reference type.

## AzureMariaDBLinkedServiceTypeProperties
### Properties
* **connectionString**: any: Any object
* **encryptedCredential**: any: Any object
* **pwd**: [AzureKeyVaultSecretReference](#azurekeyvaultsecretreference): Azure Key Vault secret reference.

## AzureMLLinkedServiceTypeProperties
### Properties
* **apiKey**: [SecretBase](#secretbase) (Required): The base definition of a secret type.
* **authentication**: any: Any object
* **encryptedCredential**: any: Any object
* **mlEndpoint**: any (Required): Any object
* **servicePrincipalId**: any: Any object
* **servicePrincipalKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **tenant**: any: Any object
* **updateResourceEndpoint**: any: Any object

## AzureMLServiceLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: any: Any object
* **mlWorkspaceName**: any (Required): Any object
* **resourceGroupName**: any (Required): Any object
* **servicePrincipalId**: any: Any object
* **servicePrincipalKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **subscriptionId**: any (Required): Any object
* **tenant**: any: Any object

## AzureMySqlLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required): Any object
* **encryptedCredential**: any: Any object
* **password**: [AzureKeyVaultSecretReference](#azurekeyvaultsecretreference): Azure Key Vault secret reference.

## AzurePostgreSqlLinkedServiceTypeProperties
### Properties
* **connectionString**: any: Any object
* **encryptedCredential**: any: Any object
* **password**: [AzureKeyVaultSecretReference](#azurekeyvaultsecretreference): Azure Key Vault secret reference.

## AzureSearchLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: any: Any object
* **key**: [SecretBase](#secretbase): The base definition of a secret type.
* **url**: any (Required): Any object

## AzureSqlDatabaseLinkedServiceTypeProperties
### Properties
* **alwaysEncryptedSettings**: [SqlAlwaysEncryptedProperties](#sqlalwaysencryptedproperties): Sql always encrypted properties.
* **azureCloudType**: any: Any object
* **connectionString**: any (Required): Any object
* **credential**: [CredentialReference](#credentialreference): Credential reference type.
* **encryptedCredential**: any: Any object
* **password**: [AzureKeyVaultSecretReference](#azurekeyvaultsecretreference): Azure Key Vault secret reference.
* **servicePrincipalId**: any: Any object
* **servicePrincipalKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **tenant**: any: Any object

## AzureSqlDWLinkedServiceTypeProperties
### Properties
* **azureCloudType**: any: Any object
* **connectionString**: any (Required): Any object
* **credential**: [CredentialReference](#credentialreference): Credential reference type.
* **encryptedCredential**: any: Any object
* **password**: [AzureKeyVaultSecretReference](#azurekeyvaultsecretreference): Azure Key Vault secret reference.
* **servicePrincipalId**: any: Any object
* **servicePrincipalKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **tenant**: any: Any object

## AzureSqlMILinkedServiceTypeProperties
### Properties
* **alwaysEncryptedSettings**: [SqlAlwaysEncryptedProperties](#sqlalwaysencryptedproperties): Sql always encrypted properties.
* **azureCloudType**: any: Any object
* **connectionString**: any (Required): Any object
* **credential**: [CredentialReference](#credentialreference): Credential reference type.
* **encryptedCredential**: any: Any object
* **password**: [AzureKeyVaultSecretReference](#azurekeyvaultsecretreference): Azure Key Vault secret reference.
* **servicePrincipalId**: any: Any object
* **servicePrincipalKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **tenant**: any: Any object

## AzureStorageLinkedServiceTypeProperties
### Properties
* **accountKey**: [AzureKeyVaultSecretReference](#azurekeyvaultsecretreference): Azure Key Vault secret reference.
* **connectionString**: any: Any object
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
* **sasToken**: [AzureKeyVaultSecretReference](#azurekeyvaultsecretreference): Azure Key Vault secret reference.
* **sasUri**: any: Any object

## CassandraLinkedServiceTypeProperties
### Properties
* **authenticationType**: any: Any object
* **encryptedCredential**: any: Any object
* **host**: any (Required): Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **port**: any: Any object
* **username**: any: Any object

## CommonDataServiceForAppsLinkedServiceTypeProperties
### Properties
* **authenticationType**: any (Required): Any object
* **deploymentType**: any (Required): Any object
* **encryptedCredential**: any: Any object
* **hostName**: any: Any object
* **organizationName**: any: Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **port**: any: Any object
* **servicePrincipalCredential**: [SecretBase](#secretbase): The base definition of a secret type.
* **servicePrincipalCredentialType**: any: Any object
* **servicePrincipalId**: any: Any object
* **serviceUri**: any: Any object
* **username**: any: Any object

## ConcurLinkedServiceTypeProperties
### Properties
* **clientId**: any (Required): Any object
* **connectionProperties**: any: Any object
* **encryptedCredential**: any: Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **useEncryptedEndpoints**: any: Any object
* **useHostVerification**: any: Any object
* **usePeerVerification**: any: Any object
* **username**: any (Required): Any object

## CosmosDbLinkedServiceTypeProperties
### Properties
* **accountEndpoint**: any: Any object
* **accountKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **azureCloudType**: any: Any object
* **connectionMode**: 'Direct' | 'Gateway': The connection mode used to access CosmosDB account. Type: string (or Expression with resultType string).
* **connectionString**: any: Any object
* **database**: any: Any object
* **encryptedCredential**: any: Any object
* **servicePrincipalCredential**: [SecretBase](#secretbase): The base definition of a secret type.
* **servicePrincipalCredentialType**: 'ServicePrincipalCert' | 'ServicePrincipalKey': The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string).
* **servicePrincipalId**: any: Any object
* **tenant**: any: Any object

## CosmosDbMongoDbApiLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required): Any object
* **database**: any (Required): Any object
* **isServerVersionAbove32**: any: Any object

## CouchbaseLinkedServiceTypeProperties
### Properties
* **connectionString**: any: Any object
* **credString**: [AzureKeyVaultSecretReference](#azurekeyvaultsecretreference): Azure Key Vault secret reference.
* **encryptedCredential**: any: Any object

## Db2LinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Basic': AuthenticationType to be used for connection. It is mutually exclusive with connectionString property.
* **certificateCommonName**: any: Any object
* **connectionString**: any: Any object
* **database**: any: Any object
* **encryptedCredential**: any: Any object
* **packageCollection**: any: Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **server**: any: Any object
* **username**: any: Any object

## DrillLinkedServiceTypeProperties
### Properties
* **connectionString**: any: Any object
* **encryptedCredential**: any: Any object
* **pwd**: [AzureKeyVaultSecretReference](#azurekeyvaultsecretreference): Azure Key Vault secret reference.

## DynamicsLinkedServiceTypeProperties
### Properties
* **authenticationType**: any (Required): Any object
* **deploymentType**: any (Required): Any object
* **encryptedCredential**: any: Any object
* **hostName**: any: Any object
* **organizationName**: any: Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **port**: any: Any object
* **servicePrincipalCredential**: [SecretBase](#secretbase): The base definition of a secret type.
* **servicePrincipalCredentialType**: any: Any object
* **servicePrincipalId**: any: Any object
* **serviceUri**: any: Any object
* **username**: any: Any object

## DynamicsAXLinkedServiceTypeProperties
### Properties
* **aadResourceId**: any (Required): Any object
* **encryptedCredential**: any: Any object
* **servicePrincipalId**: any (Required): Any object
* **servicePrincipalKey**: [SecretBase](#secretbase) (Required): The base definition of a secret type.
* **tenant**: any (Required): Any object
* **url**: any (Required): Any object

## DynamicsCrmLinkedServiceTypeProperties
### Properties
* **authenticationType**: any (Required): Any object
* **deploymentType**: any (Required): Any object
* **encryptedCredential**: any: Any object
* **hostName**: any: Any object
* **organizationName**: any: Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **port**: any: Any object
* **servicePrincipalCredential**: [SecretBase](#secretbase): The base definition of a secret type.
* **servicePrincipalCredentialType**: any: Any object
* **servicePrincipalId**: any: Any object
* **serviceUri**: any: Any object
* **username**: any: Any object

## EloquaLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: any: Any object
* **endpoint**: any (Required): Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **useEncryptedEndpoints**: any: Any object
* **useHostVerification**: any: Any object
* **usePeerVerification**: any: Any object
* **username**: any (Required): Any object

## FileServerLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: any: Any object
* **host**: any (Required): Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **userId**: any: Any object

## FtpServerLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Anonymous' | 'Basic': The authentication type to be used to connect to the FTP server.
* **enableServerCertificateValidation**: any: Any object
* **enableSsl**: any: Any object
* **encryptedCredential**: any: Any object
* **host**: any (Required): Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **port**: any: Any object
* **userName**: any: Any object

## GoogleAdWordsLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'ServiceAuthentication' | 'UserAuthentication' (Required): The OAuth 2.0 authentication mechanism used for authentication. ServiceAuthentication can only be used on self-hosted IR.
* **clientCustomerID**: any (Required): Any object
* **clientId**: any: Any object
* **clientSecret**: [SecretBase](#secretbase): The base definition of a secret type.
* **developerToken**: [SecretBase](#secretbase) (Required): The base definition of a secret type.
* **email**: any: Any object
* **encryptedCredential**: any: Any object
* **keyFilePath**: any: Any object
* **refreshToken**: [SecretBase](#secretbase): The base definition of a secret type.
* **trustedCertPath**: any: Any object
* **useSystemTrustStore**: any: Any object

## GoogleBigQueryLinkedServiceTypeProperties
### Properties
* **additionalProjects**: any: Any object
* **authenticationType**: 'ServiceAuthentication' | 'UserAuthentication' (Required): The OAuth 2.0 authentication mechanism used for authentication. ServiceAuthentication can only be used on self-hosted IR.
* **clientId**: any: Any object
* **clientSecret**: [SecretBase](#secretbase): The base definition of a secret type.
* **email**: any: Any object
* **encryptedCredential**: any: Any object
* **keyFilePath**: any: Any object
* **project**: any (Required): Any object
* **refreshToken**: [SecretBase](#secretbase): The base definition of a secret type.
* **requestGoogleDriveScope**: any: Any object
* **trustedCertPath**: any: Any object
* **useSystemTrustStore**: any: Any object

## GoogleCloudStorageLinkedServiceTypeProperties
### Properties
* **accessKeyId**: any: Any object
* **encryptedCredential**: any: Any object
* **secretAccessKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **serviceUrl**: any: Any object

## GreenplumLinkedServiceTypeProperties
### Properties
* **connectionString**: any: Any object
* **encryptedCredential**: any: Any object
* **pwd**: [AzureKeyVaultSecretReference](#azurekeyvaultsecretreference): Azure Key Vault secret reference.

## HBaseLinkedServiceTypeProperties
### Properties
* **allowHostNameCNMismatch**: any: Any object
* **allowSelfSignedServerCert**: any: Any object
* **authenticationType**: 'Anonymous' | 'Basic' (Required): The authentication mechanism to use to connect to the HBase server.
* **enableSsl**: any: Any object
* **encryptedCredential**: any: Any object
* **host**: any (Required): Any object
* **httpPath**: any: Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **port**: any: Any object
* **trustedCertPath**: any: Any object
* **username**: any: Any object

## HdfsLinkedServiceTypeProperties
### Properties
* **authenticationType**: any: Any object
* **encryptedCredential**: any: Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **url**: any (Required): Any object
* **userName**: any: Any object

## HDInsightLinkedServiceTypeProperties
### Properties
* **clusterUri**: any (Required): Any object
* **encryptedCredential**: any: Any object
* **fileSystem**: any: Any object
* **hcatalogLinkedServiceName**: [LinkedServiceReference](#linkedservicereference): Linked service reference type.
* **isEspEnabled**: any: Any object
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference): Linked service reference type.
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **userName**: any: Any object

## HDInsightOnDemandLinkedServiceTypeProperties
### Properties
* **additionalLinkedServiceNames**: [LinkedServiceReference](#linkedservicereference)[]: Specifies additional storage accounts for the HDInsight linked service so that the Data Factory service can register them on your behalf.
* **clusterNamePrefix**: any: Any object
* **clusterPassword**: [SecretBase](#secretbase): The base definition of a secret type.
* **clusterResourceGroup**: any (Required): Any object
* **clusterSize**: any (Required): Any object
* **clusterSshPassword**: [SecretBase](#secretbase): The base definition of a secret type.
* **clusterSshUserName**: any: Any object
* **clusterType**: any: Any object
* **clusterUserName**: any: Any object
* **coreConfiguration**: any: Any object
* **credential**: [CredentialReference](#credentialreference): Credential reference type.
* **dataNodeSize**: any: Any object
* **encryptedCredential**: any: Any object
* **hBaseConfiguration**: any: Any object
* **hcatalogLinkedServiceName**: [LinkedServiceReference](#linkedservicereference): Linked service reference type.
* **hdfsConfiguration**: any: Any object
* **headNodeSize**: any: Any object
* **hiveConfiguration**: any: Any object
* **hostSubscriptionId**: any (Required): Any object
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference) (Required): Linked service reference type.
* **mapReduceConfiguration**: any: Any object
* **oozieConfiguration**: any: Any object
* **scriptActions**: [ScriptAction](#scriptaction)[]: Custom script actions to run on HDI ondemand cluster once it's up. Please refer to https://docs.microsoft.com/en-us/azure/hdinsight/hdinsight-hadoop-customize-cluster-linux?toc=%2Fen-us%2Fazure%2Fhdinsight%2Fr-server%2FTOC.json&bc=%2Fen-us%2Fazure%2Fbread%2Ftoc.json#understanding-script-actions.
* **servicePrincipalId**: any: Any object
* **servicePrincipalKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **sparkVersion**: any: Any object
* **stormConfiguration**: any: Any object
* **subnetName**: any: Any object
* **tenant**: any (Required): Any object
* **timeToLive**: any (Required): Any object
* **version**: any (Required): Any object
* **virtualNetworkId**: any: Any object
* **yarnConfiguration**: any: Any object
* **zookeeperNodeSize**: any: Any object

## ScriptAction
### Properties
* **name**: string (Required): The user provided name of the script action.
* **parameters**: string: The parameters for the script action.
* **roles**: any (Required): Any object
* **uri**: string (Required): The URI for the script action.

## HiveLinkedServiceTypeProperties
### Properties
* **allowHostNameCNMismatch**: any: Any object
* **allowSelfSignedServerCert**: any: Any object
* **authenticationType**: 'Anonymous' | 'Username' | 'UsernameAndPassword' | 'WindowsAzureHDInsightService' (Required): The authentication method used to access the Hive server.
* **enableSsl**: any: Any object
* **encryptedCredential**: any: Any object
* **host**: any (Required): Any object
* **httpPath**: any: Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **port**: any: Any object
* **serverType**: 'HiveServer1' | 'HiveServer2' | 'HiveThriftServer': The type of Hive server.
* **serviceDiscoveryMode**: any: Any object
* **thriftTransportProtocol**: 'Binary' | 'HTTP ' | 'SASL': The transport protocol to use in the Thrift layer.
* **trustedCertPath**: any: Any object
* **useNativeQuery**: any: Any object
* **username**: any: Any object
* **useSystemTrustStore**: any: Any object
* **zooKeeperNameSpace**: any: Any object

## HttpLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Anonymous' | 'Basic' | 'ClientCertificate' | 'Digest' | 'Windows': The authentication type to be used to connect to the HTTP server.
* **authHeaders**: any: Any object
* **certThumbprint**: any: Any object
* **embeddedCertData**: any: Any object
* **enableServerCertificateValidation**: any: Any object
* **encryptedCredential**: any: Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **url**: any (Required): Any object
* **userName**: any: Any object

## HubspotLinkedServiceTypeProperties
### Properties
* **accessToken**: [SecretBase](#secretbase): The base definition of a secret type.
* **clientId**: any (Required): Any object
* **clientSecret**: [SecretBase](#secretbase): The base definition of a secret type.
* **encryptedCredential**: any: Any object
* **refreshToken**: [SecretBase](#secretbase): The base definition of a secret type.
* **useEncryptedEndpoints**: any: Any object
* **useHostVerification**: any: Any object
* **usePeerVerification**: any: Any object

## ImpalaLinkedServiceTypeProperties
### Properties
* **allowHostNameCNMismatch**: any: Any object
* **allowSelfSignedServerCert**: any: Any object
* **authenticationType**: 'Anonymous' | 'SASLUsername' | 'UsernameAndPassword' (Required): The authentication type to use.
* **enableSsl**: any: Any object
* **encryptedCredential**: any: Any object
* **host**: any (Required): Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **port**: any: Any object
* **trustedCertPath**: any: Any object
* **username**: any: Any object
* **useSystemTrustStore**: any: Any object

## InformixLinkedServiceTypeProperties
### Properties
* **authenticationType**: any: Any object
* **connectionString**: any (Required): Any object
* **credential**: [SecretBase](#secretbase): The base definition of a secret type.
* **encryptedCredential**: any: Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **userName**: any: Any object

## JiraLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: any: Any object
* **host**: any (Required): Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **port**: any: Any object
* **useEncryptedEndpoints**: any: Any object
* **useHostVerification**: any: Any object
* **usePeerVerification**: any: Any object
* **username**: any (Required): Any object

## MagentoLinkedServiceTypeProperties
### Properties
* **accessToken**: [SecretBase](#secretbase): The base definition of a secret type.
* **encryptedCredential**: any: Any object
* **host**: any (Required): Any object
* **useEncryptedEndpoints**: any: Any object
* **useHostVerification**: any: Any object
* **usePeerVerification**: any: Any object

## MariaDBLinkedServiceTypeProperties
### Properties
* **connectionString**: any: Any object
* **encryptedCredential**: any: Any object
* **pwd**: [AzureKeyVaultSecretReference](#azurekeyvaultsecretreference): Azure Key Vault secret reference.

## MarketoLinkedServiceTypeProperties
### Properties
* **clientId**: any (Required): Any object
* **clientSecret**: [SecretBase](#secretbase): The base definition of a secret type.
* **encryptedCredential**: any: Any object
* **endpoint**: any (Required): Any object
* **useEncryptedEndpoints**: any: Any object
* **useHostVerification**: any: Any object
* **usePeerVerification**: any: Any object

## MicrosoftAccessLinkedServiceTypeProperties
### Properties
* **authenticationType**: any: Any object
* **connectionString**: any (Required): Any object
* **credential**: [SecretBase](#secretbase): The base definition of a secret type.
* **encryptedCredential**: any: Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **userName**: any: Any object

## MongoDbLinkedServiceTypeProperties
### Properties
* **allowSelfSignedServerCert**: any: Any object
* **authenticationType**: 'Anonymous' | 'Basic': The authentication type to be used to connect to the MongoDB database.
* **authSource**: any: Any object
* **databaseName**: any (Required): Any object
* **enableSsl**: any: Any object
* **encryptedCredential**: any: Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **port**: any: Any object
* **server**: any (Required): Any object
* **username**: any: Any object

## MongoDbAtlasLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required): Any object
* **database**: any (Required): Any object

## MongoDbV2LinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required): Any object
* **database**: any (Required): Any object

## MySqlLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required): Any object
* **encryptedCredential**: any: Any object
* **password**: [AzureKeyVaultSecretReference](#azurekeyvaultsecretreference): Azure Key Vault secret reference.

## NetezzaLinkedServiceTypeProperties
### Properties
* **connectionString**: any: Any object
* **encryptedCredential**: any: Any object
* **pwd**: [AzureKeyVaultSecretReference](#azurekeyvaultsecretreference): Azure Key Vault secret reference.

## ODataLinkedServiceTypeProperties
### Properties
* **aadResourceId**: any: Any object
* **aadServicePrincipalCredentialType**: 'ServicePrincipalCert' | 'ServicePrincipalKey': Specify the credential type (key or cert) is used for service principal.
* **authenticationType**: 'AadServicePrincipal' | 'Anonymous' | 'Basic' | 'ManagedServiceIdentity' | 'Windows': Type of authentication used to connect to the OData service.
* **authHeaders**: any: Any object
* **azureCloudType**: any: Any object
* **encryptedCredential**: any: Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **servicePrincipalEmbeddedCert**: [SecretBase](#secretbase): The base definition of a secret type.
* **servicePrincipalEmbeddedCertPassword**: [SecretBase](#secretbase): The base definition of a secret type.
* **servicePrincipalId**: any: Any object
* **servicePrincipalKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **tenant**: any: Any object
* **url**: any (Required): Any object
* **userName**: any: Any object

## OdbcLinkedServiceTypeProperties
### Properties
* **authenticationType**: any: Any object
* **connectionString**: any (Required): Any object
* **credential**: [SecretBase](#secretbase): The base definition of a secret type.
* **encryptedCredential**: any: Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **userName**: any: Any object

## Office365LinkedServiceTypeProperties
### Properties
* **encryptedCredential**: any: Any object
* **office365TenantId**: any (Required): Any object
* **servicePrincipalId**: any (Required): Any object
* **servicePrincipalKey**: [SecretBase](#secretbase) (Required): The base definition of a secret type.
* **servicePrincipalTenantId**: any (Required): Any object

## OracleLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required): Any object
* **encryptedCredential**: any: Any object
* **password**: [AzureKeyVaultSecretReference](#azurekeyvaultsecretreference): Azure Key Vault secret reference.

## OracleCloudStorageLinkedServiceTypeProperties
### Properties
* **accessKeyId**: any: Any object
* **encryptedCredential**: any: Any object
* **secretAccessKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **serviceUrl**: any: Any object

## OracleServiceCloudLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: any: Any object
* **host**: any (Required): Any object
* **password**: [SecretBase](#secretbase) (Required): The base definition of a secret type.
* **useEncryptedEndpoints**: any: Any object
* **useHostVerification**: any: Any object
* **usePeerVerification**: any: Any object
* **username**: any (Required): Any object

## PaypalLinkedServiceTypeProperties
### Properties
* **clientId**: any (Required): Any object
* **clientSecret**: [SecretBase](#secretbase): The base definition of a secret type.
* **encryptedCredential**: any: Any object
* **host**: any (Required): Any object
* **useEncryptedEndpoints**: any: Any object
* **useHostVerification**: any: Any object
* **usePeerVerification**: any: Any object

## PhoenixLinkedServiceTypeProperties
### Properties
* **allowHostNameCNMismatch**: any: Any object
* **allowSelfSignedServerCert**: any: Any object
* **authenticationType**: 'Anonymous' | 'UsernameAndPassword' | 'WindowsAzureHDInsightService' (Required): The authentication mechanism used to connect to the Phoenix server.
* **enableSsl**: any: Any object
* **encryptedCredential**: any: Any object
* **host**: any (Required): Any object
* **httpPath**: any: Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **port**: any: Any object
* **trustedCertPath**: any: Any object
* **username**: any: Any object
* **useSystemTrustStore**: any: Any object

## PostgreSqlLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required): Any object
* **encryptedCredential**: any: Any object
* **password**: [AzureKeyVaultSecretReference](#azurekeyvaultsecretreference): Azure Key Vault secret reference.

## PrestoLinkedServiceTypeProperties
### Properties
* **allowHostNameCNMismatch**: any: Any object
* **allowSelfSignedServerCert**: any: Any object
* **authenticationType**: 'Anonymous' | 'LDAP' (Required): The authentication mechanism used to connect to the Presto server.
* **catalog**: any (Required): Any object
* **enableSsl**: any: Any object
* **encryptedCredential**: any: Any object
* **host**: any (Required): Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **port**: any: Any object
* **serverVersion**: any (Required): Any object
* **timeZoneID**: any: Any object
* **trustedCertPath**: any: Any object
* **username**: any: Any object
* **useSystemTrustStore**: any: Any object

## QuickBooksLinkedServiceTypeProperties
### Properties
* **accessToken**: [SecretBase](#secretbase): The base definition of a secret type.
* **accessTokenSecret**: [SecretBase](#secretbase): The base definition of a secret type.
* **companyId**: any: Any object
* **connectionProperties**: any: Any object
* **consumerKey**: any: Any object
* **consumerSecret**: [SecretBase](#secretbase): The base definition of a secret type.
* **encryptedCredential**: any: Any object
* **endpoint**: any: Any object
* **useEncryptedEndpoints**: any: Any object

## ResponsysLinkedServiceTypeProperties
### Properties
* **clientId**: any (Required): Any object
* **clientSecret**: [SecretBase](#secretbase): The base definition of a secret type.
* **encryptedCredential**: any: Any object
* **endpoint**: any (Required): Any object
* **useEncryptedEndpoints**: any: Any object
* **useHostVerification**: any: Any object
* **usePeerVerification**: any: Any object

## RestServiceLinkedServiceTypeProperties
### Properties
* **aadResourceId**: any: Any object
* **authenticationType**: 'AadServicePrincipal' | 'Anonymous' | 'Basic' | 'ManagedServiceIdentity' (Required): Type of authentication used to connect to the REST service.
* **authHeaders**: any: Any object
* **azureCloudType**: any: Any object
* **credential**: [CredentialReference](#credentialreference): Credential reference type.
* **enableServerCertificateValidation**: any: Any object
* **encryptedCredential**: any: Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **servicePrincipalId**: any: Any object
* **servicePrincipalKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **tenant**: any: Any object
* **url**: any (Required): Any object
* **userName**: any: Any object

## SalesforceLinkedServiceTypeProperties
### Properties
* **apiVersion**: any: Any object
* **encryptedCredential**: any: Any object
* **environmentUrl**: any: Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **securityToken**: [SecretBase](#secretbase): The base definition of a secret type.
* **username**: any: Any object

## SalesforceMarketingCloudLinkedServiceTypeProperties
### Properties
* **clientId**: any: Any object
* **clientSecret**: [SecretBase](#secretbase): The base definition of a secret type.
* **connectionProperties**: any: Any object
* **encryptedCredential**: any: Any object
* **useEncryptedEndpoints**: any: Any object
* **useHostVerification**: any: Any object
* **usePeerVerification**: any: Any object

## SalesforceServiceCloudLinkedServiceTypeProperties
### Properties
* **apiVersion**: any: Any object
* **encryptedCredential**: any: Any object
* **environmentUrl**: any: Any object
* **extendedProperties**: any: Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **securityToken**: [SecretBase](#secretbase): The base definition of a secret type.
* **username**: any: Any object

## SapBWLinkedServiceTypeProperties
### Properties
* **clientId**: any (Required): Any object
* **encryptedCredential**: any: Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **server**: any (Required): Any object
* **systemNumber**: any (Required): Any object
* **userName**: any: Any object

## SapCloudForCustomerLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: any: Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **url**: any (Required): Any object
* **username**: any: Any object

## SapEccLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: string: The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Either encryptedCredential or username/password must be provided. Type: string (or Expression with resultType string).
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **url**: string (Required): The URL of SAP ECC OData API. For example, '[https://hostname:port/sap/opu/odata/sap/servicename/]'. Type: string (or Expression with resultType string).
* **username**: string: The username for Basic authentication. Type: string (or Expression with resultType string).

## SapHanaLinkedServiceProperties
### Properties
* **authenticationType**: 'Basic' | 'Windows': The authentication type to be used to connect to the SAP HANA server.
* **connectionString**: any: Any object
* **encryptedCredential**: any: Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **server**: any: Any object
* **userName**: any: Any object

## SapOpenHubLinkedServiceTypeProperties
### Properties
* **clientId**: any: Any object
* **encryptedCredential**: any: Any object
* **language**: any: Any object
* **logonGroup**: any: Any object
* **messageServer**: any: Any object
* **messageServerService**: any: Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **server**: any: Any object
* **systemId**: any: Any object
* **systemNumber**: any: Any object
* **userName**: any: Any object

## SapTableLinkedServiceTypeProperties
### Properties
* **clientId**: any: Any object
* **encryptedCredential**: any: Any object
* **language**: any: Any object
* **logonGroup**: any: Any object
* **messageServer**: any: Any object
* **messageServerService**: any: Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **server**: any: Any object
* **sncLibraryPath**: any: Any object
* **sncMode**: any: Any object
* **sncMyName**: any: Any object
* **sncPartnerName**: any: Any object
* **sncQop**: any: Any object
* **systemId**: any: Any object
* **systemNumber**: any: Any object
* **userName**: any: Any object

## ServiceNowLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Basic' | 'OAuth2' (Required): The authentication type to use.
* **clientId**: any: Any object
* **clientSecret**: [SecretBase](#secretbase): The base definition of a secret type.
* **encryptedCredential**: any: Any object
* **endpoint**: any (Required): Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **useEncryptedEndpoints**: any: Any object
* **useHostVerification**: any: Any object
* **usePeerVerification**: any: Any object
* **username**: any: Any object

## SftpServerLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Basic' | 'MultiFactor' | 'SshPublicKey': The authentication type to be used to connect to the FTP server.
* **encryptedCredential**: any: Any object
* **host**: any (Required): Any object
* **hostKeyFingerprint**: any: Any object
* **passPhrase**: [SecretBase](#secretbase): The base definition of a secret type.
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **port**: any: Any object
* **privateKeyContent**: [SecretBase](#secretbase): The base definition of a secret type.
* **privateKeyPath**: any: Any object
* **skipHostKeyValidation**: any: Any object
* **userName**: any: Any object

## SharePointOnlineListLinkedServiceTypeProperties
### Properties
* **encryptedCredential**: any: Any object
* **servicePrincipalId**: any (Required): Any object
* **servicePrincipalKey**: [SecretBase](#secretbase) (Required): The base definition of a secret type.
* **siteUrl**: any (Required): Any object
* **tenantId**: any (Required): Any object

## ShopifyLinkedServiceTypeProperties
### Properties
* **accessToken**: [SecretBase](#secretbase): The base definition of a secret type.
* **encryptedCredential**: any: Any object
* **host**: any (Required): Any object
* **useEncryptedEndpoints**: any: Any object
* **useHostVerification**: any: Any object
* **usePeerVerification**: any: Any object

## SnowflakeLinkedServiceTypeProperties
### Properties
* **connectionString**: any (Required): Any object
* **encryptedCredential**: any: Any object
* **password**: [AzureKeyVaultSecretReference](#azurekeyvaultsecretreference): Azure Key Vault secret reference.

## SparkLinkedServiceTypeProperties
### Properties
* **allowHostNameCNMismatch**: any: Any object
* **allowSelfSignedServerCert**: any: Any object
* **authenticationType**: 'Anonymous' | 'Username' | 'UsernameAndPassword' | 'WindowsAzureHDInsightService' (Required): The authentication method used to access the Spark server.
* **enableSsl**: any: Any object
* **encryptedCredential**: any: Any object
* **host**: any (Required): Any object
* **httpPath**: any: Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **port**: any (Required): Any object
* **serverType**: 'SharkServer' | 'SharkServer2' | 'SparkThriftServer': The type of Spark server.
* **thriftTransportProtocol**: 'Binary' | 'HTTP ' | 'SASL': The transport protocol to use in the Thrift layer.
* **trustedCertPath**: any: Any object
* **username**: any: Any object
* **useSystemTrustStore**: any: Any object

## SqlServerLinkedServiceTypeProperties
### Properties
* **alwaysEncryptedSettings**: [SqlAlwaysEncryptedProperties](#sqlalwaysencryptedproperties): Sql always encrypted properties.
* **connectionString**: any (Required): Any object
* **encryptedCredential**: any: Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **userName**: any: Any object

## SquareLinkedServiceTypeProperties
### Properties
* **clientId**: any: Any object
* **clientSecret**: [SecretBase](#secretbase): The base definition of a secret type.
* **connectionProperties**: any: Any object
* **encryptedCredential**: any: Any object
* **host**: any: Any object
* **redirectUri**: any: Any object
* **useEncryptedEndpoints**: any: Any object
* **useHostVerification**: any: Any object
* **usePeerVerification**: any: Any object

## SybaseLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Basic' | 'Windows': AuthenticationType to be used for connection.
* **database**: any (Required): Any object
* **encryptedCredential**: any: Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **schema**: any: Any object
* **server**: any (Required): Any object
* **username**: any: Any object

## TeradataLinkedServiceTypeProperties
### Properties
* **authenticationType**: 'Basic' | 'Windows': AuthenticationType to be used for connection.
* **connectionString**: any: Any object
* **encryptedCredential**: any: Any object
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **server**: any: Any object
* **username**: any: Any object

## VerticaLinkedServiceTypeProperties
### Properties
* **connectionString**: any: Any object
* **encryptedCredential**: any: Any object
* **pwd**: [AzureKeyVaultSecretReference](#azurekeyvaultsecretreference): Azure Key Vault secret reference.

## WebLinkedServiceTypeProperties
* **Discriminator**: authenticationType

### Base Properties
* **url**: any (Required): Any object
### WebAnonymousAuthentication
#### Properties
* **authenticationType**: 'Anonymous' (Required): Type of authentication used to connect to the web table source.

### WebBasicAuthentication
#### Properties
* **authenticationType**: 'Basic' (Required): Type of authentication used to connect to the web table source.
* **password**: [SecretBase](#secretbase) (Required): The base definition of a secret type.
* **username**: any (Required): Any object

### WebClientCertificateAuthentication
#### Properties
* **authenticationType**: 'ClientCertificate' (Required): Type of authentication used to connect to the web table source.
* **password**: [SecretBase](#secretbase) (Required): The base definition of a secret type.
* **pfx**: [SecretBase](#secretbase) (Required): The base definition of a secret type.


## XeroLinkedServiceTypeProperties
### Properties
* **connectionProperties**: any: Any object
* **consumerKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **encryptedCredential**: any: Any object
* **host**: any: Any object
* **privateKey**: [SecretBase](#secretbase): The base definition of a secret type.
* **useEncryptedEndpoints**: any: Any object
* **useHostVerification**: any: Any object
* **usePeerVerification**: any: Any object

## ZohoLinkedServiceTypeProperties
### Properties
* **accessToken**: [SecretBase](#secretbase): The base definition of a secret type.
* **connectionProperties**: any: Any object
* **encryptedCredential**: any: Any object
* **endpoint**: any: Any object
* **useEncryptedEndpoints**: any: Any object
* **useHostVerification**: any: Any object
* **usePeerVerification**: any: Any object

## ManagedVirtualNetwork
### Properties
* **alias**: string (ReadOnly): Managed Virtual Network alias.
* **vNetId**: string (ReadOnly): Managed Virtual Network ID.
### Additional Properties
* **Additional Properties Type**: any

## ManagedPrivateEndpoint
### Properties
* **connectionState**: [ConnectionStateProperties](#connectionstateproperties): The connection state of a managed private endpoint
* **fqdns**: string[]: Fully qualified domain names
* **groupId**: string: The groupId to which the managed private endpoint is created
* **isReserved**: bool (ReadOnly): Denotes whether the managed private endpoint is reserved
* **privateLinkResourceId**: string: The ARM resource ID of the resource to which the managed private endpoint is created
* **provisioningState**: string (ReadOnly): The managed private endpoint provisioning state
### Additional Properties
* **Additional Properties Type**: any

## ConnectionStateProperties
### Properties
* **actionsRequired**: string (ReadOnly): The actions required on the managed private endpoint
* **description**: string (ReadOnly): The managed private endpoint description
* **status**: string (ReadOnly): The approval status

## Pipeline
### Properties
* **activities**: [Activity](#activity)[]: List of activities in pipeline.
* **annotations**: any[]: List of tags that can be used for describing the Pipeline.
* **concurrency**: int: The max number of concurrent runs for the pipeline.
* **description**: string: The description of the pipeline.
* **folder**: [PipelineFolder](#pipelinefolder): The folder that this Pipeline is in. If not specified, Pipeline will appear at the root level.
* **parameters**: [ParameterDefinitionSpecification](#parameterdefinitionspecification): Definition of all parameters for an entity.
* **policy**: [PipelinePolicy](#pipelinepolicy): Pipeline Policy.
* **runDimensions**: [PipelineRunDimensions](#pipelinerundimensions): Dimensions emitted by Pipeline.
* **variables**: [VariableDefinitionSpecification](#variabledefinitionspecification): Definition of variable for a Pipeline.

## Activity
* **Discriminator**: type

### Base Properties
* **dependsOn**: [ActivityDependency](#activitydependency)[]: Activity depends on condition.
* **description**: string: Activity description.
* **name**: string (Required): Activity name.
* **userProperties**: [UserProperty](#userproperty)[]: Activity user properties.
### AppendVariableActivity
#### Properties
* **type**: 'AppendVariable' (Required): Type of activity.
* **typeProperties**: [AppendVariableActivityTypeProperties](#appendvariableactivitytypeproperties) (Required): AppendVariable activity properties.

### AzureDataExplorerCommandActivity
#### Properties
* **type**: 'AzureDataExplorerCommand' (Required): Type of activity.
* **typeProperties**: [AzureDataExplorerCommandActivityTypeProperties](#azuredataexplorercommandactivitytypeproperties) (Required): Azure Data Explorer command activity properties.

### AzureFunctionActivity
#### Properties
* **type**: 'AzureFunctionActivity' (Required): Type of activity.
* **typeProperties**: [AzureFunctionActivityTypeProperties](#azurefunctionactivitytypeproperties) (Required): Azure Function activity type properties.

### AzureMLBatchExecutionActivity
#### Properties
* **type**: 'AzureMLBatchExecution' (Required): Type of activity.
* **typeProperties**: [AzureMLBatchExecutionActivityTypeProperties](#azuremlbatchexecutionactivitytypeproperties) (Required): Azure ML Batch Execution activity properties.

### AzureMLExecutePipelineActivity
#### Properties
* **type**: 'AzureMLExecutePipeline' (Required): Type of activity.
* **typeProperties**: [AzureMLExecutePipelineActivityTypeProperties](#azuremlexecutepipelineactivitytypeproperties) (Required): Azure ML Execute Pipeline activity properties.

### AzureMLUpdateResourceActivity
#### Properties
* **type**: 'AzureMLUpdateResource' (Required): Type of activity.
* **typeProperties**: [AzureMLUpdateResourceActivityTypeProperties](#azuremlupdateresourceactivitytypeproperties) (Required): Azure ML Update Resource activity properties.

### CopyActivity
#### Properties
* **inputs**: [DatasetReference](#datasetreference)[]: List of inputs for the activity.
* **outputs**: [DatasetReference](#datasetreference)[]: List of outputs for the activity.
* **type**: 'Copy' (Required): Type of activity.
* **typeProperties**: [CopyActivityTypeProperties](#copyactivitytypeproperties) (Required): Copy activity properties.

### CustomActivity
#### Properties
* **type**: 'Custom' (Required): Type of activity.
* **typeProperties**: [CustomActivityTypeProperties](#customactivitytypeproperties) (Required): Custom activity properties.

### DatabricksNotebookActivity
#### Properties
* **type**: 'DatabricksNotebook' (Required): Type of activity.
* **typeProperties**: [DatabricksNotebookActivityTypeProperties](#databricksnotebookactivitytypeproperties) (Required): Databricks Notebook activity properties.

### DatabricksSparkJarActivity
#### Properties
* **type**: 'DatabricksSparkJar' (Required): Type of activity.
* **typeProperties**: [DatabricksSparkJarActivityTypeProperties](#databrickssparkjaractivitytypeproperties) (Required): Databricks SparkJar activity properties.

### DatabricksSparkPythonActivity
#### Properties
* **type**: 'DatabricksSparkPython' (Required): Type of activity.
* **typeProperties**: [DatabricksSparkPythonActivityTypeProperties](#databrickssparkpythonactivitytypeproperties) (Required): Databricks SparkPython activity properties.

### DataLakeAnalyticsUsqlActivity
#### Properties
* **type**: 'DataLakeAnalyticsU-SQL' (Required): Type of activity.
* **typeProperties**: [DataLakeAnalyticsUsqlActivityTypeProperties](#datalakeanalyticsusqlactivitytypeproperties) (Required): DataLakeAnalyticsU-SQL activity properties.

### DeleteActivity
#### Properties
* **type**: 'Delete' (Required): Type of activity.
* **typeProperties**: [DeleteActivityTypeProperties](#deleteactivitytypeproperties) (Required): Delete activity properties.

### ExecuteDataFlowActivity
#### Properties
* **type**: 'ExecuteDataFlow' (Required): Type of activity.
* **typeProperties**: [ExecuteDataFlowActivityTypeProperties](#executedataflowactivitytypeproperties) (Required): Execute data flow activity properties.

### ExecutePipelineActivity
#### Properties
* **type**: 'ExecutePipeline' (Required): Type of activity.
* **typeProperties**: [ExecutePipelineActivityTypeProperties](#executepipelineactivitytypeproperties) (Required): Execute pipeline activity properties.

### ExecuteSsisPackageActivity
#### Properties
* **type**: 'ExecuteSSISPackage' (Required): Type of activity.
* **typeProperties**: [ExecuteSsisPackageActivityTypeProperties](#executessispackageactivitytypeproperties) (Required): Execute SSIS package activity properties.

### ExecuteWranglingDataflowActivity
#### Properties
* **policy**: [ActivityPolicy](#activitypolicy): Execution policy for an activity.
* **type**: 'ExecuteWranglingDataflow' (Required): Type of activity.
* **typeProperties**: [ExecutePowerQueryActivityTypeProperties](#executepowerqueryactivitytypeproperties) (Required): Execute power query data flow activity properties.

### FilterActivity
#### Properties
* **type**: 'Filter' (Required): Type of activity.
* **typeProperties**: [FilterActivityTypeProperties](#filteractivitytypeproperties) (Required): Filter activity properties.

### ForEachActivity
#### Properties
* **type**: 'ForEach' (Required): Type of activity.
* **typeProperties**: [ForEachActivityTypeProperties](#foreachactivitytypeproperties) (Required): ForEach activity properties.

### GetMetadataActivity
#### Properties
* **type**: 'GetMetadata' (Required): Type of activity.
* **typeProperties**: [GetMetadataActivityTypeProperties](#getmetadataactivitytypeproperties) (Required): GetMetadata activity properties.

### HDInsightHiveActivity
#### Properties
* **type**: 'HDInsightHive' (Required): Type of activity.
* **typeProperties**: [HDInsightHiveActivityTypeProperties](#hdinsighthiveactivitytypeproperties) (Required): HDInsight Hive activity properties.

### HDInsightMapReduceActivity
#### Properties
* **type**: 'HDInsightMapReduce' (Required): Type of activity.
* **typeProperties**: [HDInsightMapReduceActivityTypeProperties](#hdinsightmapreduceactivitytypeproperties) (Required): HDInsight MapReduce activity properties.

### HDInsightPigActivity
#### Properties
* **type**: 'HDInsightPig' (Required): Type of activity.
* **typeProperties**: [HDInsightPigActivityTypeProperties](#hdinsightpigactivitytypeproperties) (Required): HDInsight Pig activity properties.

### HDInsightSparkActivity
#### Properties
* **type**: 'HDInsightSpark' (Required): Type of activity.
* **typeProperties**: [HDInsightSparkActivityTypeProperties](#hdinsightsparkactivitytypeproperties) (Required): HDInsight spark activity properties.

### HDInsightStreamingActivity
#### Properties
* **type**: 'HDInsightStreaming' (Required): Type of activity.
* **typeProperties**: [HDInsightStreamingActivityTypeProperties](#hdinsightstreamingactivitytypeproperties) (Required): HDInsight streaming activity properties.

### IfConditionActivity
#### Properties
* **type**: 'IfCondition' (Required): Type of activity.
* **typeProperties**: [IfConditionActivityTypeProperties](#ifconditionactivitytypeproperties) (Required): IfCondition activity properties.

### LookupActivity
#### Properties
* **type**: 'Lookup' (Required): Type of activity.
* **typeProperties**: [LookupActivityTypeProperties](#lookupactivitytypeproperties) (Required): Lookup activity properties.

### SetVariableActivity
#### Properties
* **type**: 'SetVariable' (Required): Type of activity.
* **typeProperties**: [SetVariableActivityTypeProperties](#setvariableactivitytypeproperties) (Required): SetVariable activity properties.

### SqlServerStoredProcedureActivity
#### Properties
* **type**: 'SqlServerStoredProcedure' (Required): Type of activity.
* **typeProperties**: [SqlServerStoredProcedureActivityTypeProperties](#sqlserverstoredprocedureactivitytypeproperties) (Required): SQL stored procedure activity properties.

### SwitchActivity
#### Properties
* **type**: 'Switch' (Required): Type of activity.
* **typeProperties**: [SwitchActivityTypeProperties](#switchactivitytypeproperties) (Required): Switch activity properties.

### UntilActivity
#### Properties
* **type**: 'Until' (Required): Type of activity.
* **typeProperties**: [UntilActivityTypeProperties](#untilactivitytypeproperties) (Required): Until activity properties.

### ValidationActivity
#### Properties
* **type**: 'Validation' (Required): Type of activity.
* **typeProperties**: [ValidationActivityTypeProperties](#validationactivitytypeproperties) (Required): Validation activity properties.

### WaitActivity
#### Properties
* **type**: 'Wait' (Required): Type of activity.
* **typeProperties**: [WaitActivityTypeProperties](#waitactivitytypeproperties) (Required): Wait activity properties.

### WebActivity
#### Properties
* **type**: 'WebActivity' (Required): Type of activity.
* **typeProperties**: [WebActivityTypeProperties](#webactivitytypeproperties) (Required): Web activity type properties.

### WebHookActivity
#### Properties
* **type**: 'WebHook' (Required): Type of activity.
* **typeProperties**: [WebHookActivityTypeProperties](#webhookactivitytypeproperties) (Required): WebHook activity type properties.


## ActivityDependency
### Properties
* **activity**: string (Required): Activity name.
* **dependencyConditions**: 'Completed' | 'Failed' | 'Skipped' | 'Succeeded'[] (Required): Match-Condition for the dependency.
### Additional Properties
* **Additional Properties Type**: any

## UserProperty
### Properties
* **name**: string (Required): User property name.
* **value**: any (Required): Any object

## AppendVariableActivityTypeProperties
### Properties
* **value**: any: Any object
* **variableName**: string: Name of the variable whose value needs to be appended to.

## AzureDataExplorerCommandActivityTypeProperties
### Properties
* **command**: any (Required): Any object
* **commandTimeout**: any: Any object

## AzureFunctionActivityTypeProperties
### Properties
* **body**: any: Any object
* **functionName**: any (Required): Any object
* **headers**: any: Any object
* **method**: 'DELETE' | 'GET' | 'HEAD' | 'OPTIONS' | 'POST' | 'PUT' | 'TRACE' (Required): The list of HTTP methods supported by a AzureFunctionActivity.

## AzureMLBatchExecutionActivityTypeProperties
### Properties
* **globalParameters**: [AzureMLBatchExecutionActivityTypePropertiesGlobalParameters](#azuremlbatchexecutionactivitytypepropertiesglobalparameters): Key,Value pairs to be passed to the Azure ML Batch Execution Service endpoint. Keys must match the names of web service parameters defined in the published Azure ML web service. Values will be passed in the GlobalParameters property of the Azure ML batch execution request.
* **webServiceInputs**: [AzureMLBatchExecutionActivityTypePropertiesWebServiceInputs](#azuremlbatchexecutionactivitytypepropertieswebserviceinputs): Key,Value pairs, mapping the names of Azure ML endpoint's Web Service Inputs to AzureMLWebServiceFile objects specifying the input Blob locations.. This information will be passed in the WebServiceInputs property of the Azure ML batch execution request.
* **webServiceOutputs**: [AzureMLBatchExecutionActivityTypePropertiesWebServiceOutputs](#azuremlbatchexecutionactivitytypepropertieswebserviceoutputs): Key,Value pairs, mapping the names of Azure ML endpoint's Web Service Outputs to AzureMLWebServiceFile objects specifying the output Blob locations. This information will be passed in the WebServiceOutputs property of the Azure ML batch execution request.

## AzureMLBatchExecutionActivityTypePropertiesGlobalParameters
### Properties
### Additional Properties
* **Additional Properties Type**: any

## AzureMLBatchExecutionActivityTypePropertiesWebServiceInputs
### Properties
### Additional Properties
* **Additional Properties Type**: [AzureMLWebServiceFile](#azuremlwebservicefile)

## AzureMLWebServiceFile
### Properties
* **filePath**: any (Required): Any object
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference) (Required): Linked service reference type.

## AzureMLBatchExecutionActivityTypePropertiesWebServiceOutputs
### Properties
### Additional Properties
* **Additional Properties Type**: [AzureMLWebServiceFile](#azuremlwebservicefile)

## AzureMLExecutePipelineActivityTypeProperties
### Properties
* **continueOnStepFailure**: any: Any object
* **dataPathAssignments**: any: Any object
* **experimentName**: any: Any object
* **mlParentRunId**: any: Any object
* **mlPipelineEndpointId**: any: Any object
* **mlPipelineId**: any: Any object
* **mlPipelineParameters**: any: Any object
* **version**: any: Any object

## AzureMLUpdateResourceActivityTypeProperties
### Properties
* **trainedModelFilePath**: any (Required): Any object
* **trainedModelLinkedServiceName**: [LinkedServiceReference](#linkedservicereference) (Required): Linked service reference type.
* **trainedModelName**: any (Required): Any object

## CopyActivityTypeProperties
### Properties
* **dataIntegrationUnits**: any: Any object
* **enableSkipIncompatibleRow**: any: Any object
* **enableStaging**: any: Any object
* **logSettings**: [LogSettings](#logsettings): Log settings.
* **logStorageSettings**: [LogStorageSettings](#logstoragesettings): (Deprecated. Please use LogSettings) Log storage settings.
* **parallelCopies**: any: Any object
* **preserve**: any[]: Preserve rules.
* **preserveRules**: any[]: Preserve Rules.
* **redirectIncompatibleRowSettings**: [RedirectIncompatibleRowSettings](#redirectincompatiblerowsettings): Redirect incompatible row settings
* **sink**: [CopySink](#copysink) (Required): A copy activity sink.
* **skipErrorFile**: [SkipErrorFile](#skiperrorfile): Skip error file.
* **source**: [CopySource](#copysource) (Required): A copy activity source.
* **stagingSettings**: [StagingSettings](#stagingsettings): Staging settings.
* **translator**: any: Any object
* **validateDataConsistency**: any: Any object

## LogSettings
### Properties
* **copyActivityLogSettings**: [CopyActivityLogSettings](#copyactivitylogsettings): Settings for copy activity log.
* **enableCopyActivityLog**: any: Any object
* **logLocationSettings**: [LogLocationSettings](#loglocationsettings) (Required): Log location settings.

## CopyActivityLogSettings
### Properties
* **enableReliableLogging**: any: Any object
* **logLevel**: any: Any object

## LogLocationSettings
### Properties
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference) (Required): Linked service reference type.
* **path**: any: Any object

## LogStorageSettings
### Properties
* **enableReliableLogging**: any: Any object
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference) (Required): Linked service reference type.
* **logLevel**: any: Any object
* **path**: any: Any object
### Additional Properties
* **Additional Properties Type**: any

## RedirectIncompatibleRowSettings
### Properties
* **linkedServiceName**: any (Required): Any object
* **path**: any: Any object
### Additional Properties
* **Additional Properties Type**: any

## CopySink
* **Discriminator**: type

### Base Properties
* **disableMetricsCollection**: any: Any object
* **maxConcurrentConnections**: any: Any object
* **sinkRetryCount**: any: Any object
* **sinkRetryWait**: any: Any object
* **writeBatchSize**: any: Any object
* **writeBatchTimeout**: any: Any object
### AvroSink
#### Properties
* **formatSettings**: [AvroWriteSettings](#avrowritesettings): Avro write settings.
* **storeSettings**: [StoreWriteSettings](#storewritesettings): Connector write settings.
* **type**: 'AvroSink' (Required): Copy sink type.

### AzureBlobFSSink
#### Properties
* **copyBehavior**: any: Any object
* **metadata**: [MetadataItem](#metadataitem)[]: Specify the custom metadata to be added to sink data. Type: array of objects (or Expression with resultType array of objects).
* **type**: 'AzureBlobFSSink' (Required): Copy sink type.

### AzureDatabricksDeltaLakeSink
#### Properties
* **importSettings**: [AzureDatabricksDeltaLakeImportCommand](#azuredatabricksdeltalakeimportcommand): Azure Databricks Delta Lake import command settings.
* **preCopyScript**: any: Any object
* **type**: 'AzureDatabricksDeltaLakeSink' (Required): Copy sink type.

### AzureDataExplorerSink
#### Properties
* **flushImmediately**: any: Any object
* **ingestionMappingAsJson**: any: Any object
* **ingestionMappingName**: any: Any object
* **type**: 'AzureDataExplorerSink' (Required): Copy sink type.

### AzureDataLakeStoreSink
#### Properties
* **copyBehavior**: any: Any object
* **enableAdlsSingleFileParallel**: any: Any object
* **type**: 'AzureDataLakeStoreSink' (Required): Copy sink type.

### AzureMySqlSink
#### Properties
* **preCopyScript**: any: Any object
* **type**: 'AzureMySqlSink' (Required): Copy sink type.

### AzurePostgreSqlSink
#### Properties
* **preCopyScript**: any: Any object
* **type**: 'AzurePostgreSqlSink' (Required): Copy sink type.

### AzureQueueSink
#### Properties
* **type**: 'AzureQueueSink' (Required): Copy sink type.

### AzureSearchIndexSink
#### Properties
* **type**: 'AzureSearchIndexSink' (Required): Copy sink type.
* **writeBehavior**: 'Merge' | 'Upload': Specify the write behavior when upserting documents into Azure Search Index.

### AzureSqlSink
#### Properties
* **preCopyScript**: any: Any object
* **sqlWriterStoredProcedureName**: any: Any object
* **sqlWriterTableType**: any: Any object
* **sqlWriterUseTableLock**: any: Any object
* **storedProcedureParameters**: [AzureSqlSinkStoredProcedureParameters](#azuresqlsinkstoredprocedureparameters): SQL stored procedure parameters.
* **storedProcedureTableTypeParameterName**: any: Any object
* **tableOption**: any: Any object
* **type**: 'AzureSqlSink' (Required): Copy sink type.
* **upsertSettings**: [SqlUpsertSettings](#sqlupsertsettings): Sql upsert option settings
* **writeBehavior**: any: Any object

### AzureTableSink
#### Properties
* **azureTableDefaultPartitionKeyValue**: any: Any object
* **azureTableInsertType**: any: Any object
* **azureTablePartitionKeyName**: any: Any object
* **azureTableRowKeyName**: any: Any object
* **type**: 'AzureTableSink' (Required): Copy sink type.

### BinarySink
#### Properties
* **storeSettings**: [StoreWriteSettings](#storewritesettings): Connector write settings.
* **type**: 'BinarySink' (Required): Copy sink type.

### BlobSink
#### Properties
* **blobWriterAddHeader**: any: Any object
* **blobWriterDateTimeFormat**: any: Any object
* **blobWriterOverwriteFiles**: any: Any object
* **copyBehavior**: any: Any object
* **metadata**: [MetadataItem](#metadataitem)[]: Specify the custom metadata to be added to sink data. Type: array of objects (or Expression with resultType array of objects).
* **type**: 'BlobSink' (Required): Copy sink type.

### CommonDataServiceForAppsSink
#### Properties
* **alternateKeyName**: any: Any object
* **ignoreNullValues**: any: Any object
* **type**: 'CommonDataServiceForAppsSink' (Required): Copy sink type.
* **writeBehavior**: 'Upsert' (Required): Defines values for DynamicsSinkWriteBehavior.

### CosmosDbMongoDbApiSink
#### Properties
* **type**: 'CosmosDbMongoDbApiSink' (Required): Copy sink type.
* **writeBehavior**: any: Any object

### CosmosDbSqlApiSink
#### Properties
* **type**: 'CosmosDbSqlApiSink' (Required): Copy sink type.
* **writeBehavior**: any: Any object

### DelimitedTextSink
#### Properties
* **formatSettings**: [DelimitedTextWriteSettings](#delimitedtextwritesettings): Delimited text write settings.
* **storeSettings**: [StoreWriteSettings](#storewritesettings): Connector write settings.
* **type**: 'DelimitedTextSink' (Required): Copy sink type.

### DocumentDbCollectionSink
#### Properties
* **nestingSeparator**: any: Any object
* **type**: 'DocumentDbCollectionSink' (Required): Copy sink type.
* **writeBehavior**: any: Any object

### DynamicsCrmSink
#### Properties
* **alternateKeyName**: any: Any object
* **ignoreNullValues**: any: Any object
* **type**: 'DynamicsCrmSink' (Required): Copy sink type.
* **writeBehavior**: 'Upsert' (Required): Defines values for DynamicsSinkWriteBehavior.

### DynamicsSink
#### Properties
* **alternateKeyName**: any: Any object
* **ignoreNullValues**: any: Any object
* **type**: 'DynamicsSink' (Required): Copy sink type.
* **writeBehavior**: 'Upsert' (Required): Defines values for DynamicsSinkWriteBehavior.

### FileSystemSink
#### Properties
* **copyBehavior**: any: Any object
* **type**: 'FileSystemSink' (Required): Copy sink type.

### InformixSink
#### Properties
* **preCopyScript**: any: Any object
* **type**: 'InformixSink' (Required): Copy sink type.

### JsonSink
#### Properties
* **formatSettings**: [JsonWriteSettings](#jsonwritesettings): Json write settings.
* **storeSettings**: [StoreWriteSettings](#storewritesettings): Connector write settings.
* **type**: 'JsonSink' (Required): Copy sink type.

### MicrosoftAccessSink
#### Properties
* **preCopyScript**: any: Any object
* **type**: 'MicrosoftAccessSink' (Required): Copy sink type.

### MongoDbAtlasSink
#### Properties
* **type**: 'MongoDbAtlasSink' (Required): Copy sink type.
* **writeBehavior**: any: Any object

### MongoDbV2Sink
#### Properties
* **type**: 'MongoDbV2Sink' (Required): Copy sink type.
* **writeBehavior**: any: Any object

### OdbcSink
#### Properties
* **preCopyScript**: any: Any object
* **type**: 'OdbcSink' (Required): Copy sink type.

### OracleSink
#### Properties
* **preCopyScript**: any: Any object
* **type**: 'OracleSink' (Required): Copy sink type.

### OrcSink
#### Properties
* **formatSettings**: [OrcWriteSettings](#orcwritesettings): Orc write settings.
* **storeSettings**: [StoreWriteSettings](#storewritesettings): Connector write settings.
* **type**: 'OrcSink' (Required): Copy sink type.

### ParquetSink
#### Properties
* **formatSettings**: [ParquetWriteSettings](#parquetwritesettings): Parquet write settings.
* **storeSettings**: [StoreWriteSettings](#storewritesettings): Connector write settings.
* **type**: 'ParquetSink' (Required): Copy sink type.

### RestSink
#### Properties
* **additionalHeaders**: any: Any object
* **httpCompressionType**: any: Any object
* **httpRequestTimeout**: any: Any object
* **requestInterval**: any: Any object
* **requestMethod**: any: Any object
* **type**: 'RestSink' (Required): Copy sink type.

### SalesforceServiceCloudSink
#### Properties
* **externalIdFieldName**: any: Any object
* **ignoreNullValues**: any: Any object
* **type**: 'SalesforceServiceCloudSink' (Required): Copy sink type.
* **writeBehavior**: 'Insert' | 'Upsert': The write behavior for the operation. Default is Insert.

### SalesforceSink
#### Properties
* **externalIdFieldName**: any: Any object
* **ignoreNullValues**: any: Any object
* **type**: 'SalesforceSink' (Required): Copy sink type.
* **writeBehavior**: 'Insert' | 'Upsert': The write behavior for the operation. Default is Insert.

### SapCloudForCustomerSink
#### Properties
* **httpRequestTimeout**: any: Any object
* **type**: 'SapCloudForCustomerSink' (Required): Copy sink type.
* **writeBehavior**: 'Insert' | 'Update': The write behavior for the operation. Default is 'Insert'.

### SnowflakeSink
#### Properties
* **importSettings**: [SnowflakeImportCopyCommand](#snowflakeimportcopycommand): Snowflake import command settings.
* **preCopyScript**: any: Any object
* **type**: 'SnowflakeSink' (Required): Copy sink type.

### SqlDWSink
#### Properties
* **allowCopyCommand**: any: Any object
* **allowPolyBase**: any: Any object
* **copyCommandSettings**: [DWCopyCommandSettings](#dwcopycommandsettings): DW Copy Command settings.
* **polyBaseSettings**: [PolybaseSettings](#polybasesettings): PolyBase settings.
* **preCopyScript**: any: Any object
* **sqlWriterUseTableLock**: any: Any object
* **tableOption**: any: Any object
* **type**: 'SqlDWSink' (Required): Copy sink type.
* **upsertSettings**: [SqlDWUpsertSettings](#sqldwupsertsettings): Sql DW upsert option settings
* **writeBehavior**: any: Any object

### SqlMISink
#### Properties
* **preCopyScript**: any: Any object
* **sqlWriterStoredProcedureName**: any: Any object
* **sqlWriterTableType**: any: Any object
* **sqlWriterUseTableLock**: any: Any object
* **storedProcedureParameters**: [SqlMISinkStoredProcedureParameters](#sqlmisinkstoredprocedureparameters): SQL stored procedure parameters.
* **storedProcedureTableTypeParameterName**: any: Any object
* **tableOption**: any: Any object
* **type**: 'SqlMISink' (Required): Copy sink type.
* **upsertSettings**: [SqlUpsertSettings](#sqlupsertsettings): Sql upsert option settings
* **writeBehavior**: any: Any object

### SqlServerSink
#### Properties
* **preCopyScript**: any: Any object
* **sqlWriterStoredProcedureName**: any: Any object
* **sqlWriterTableType**: any: Any object
* **sqlWriterUseTableLock**: any: Any object
* **storedProcedureParameters**: [SqlServerSinkStoredProcedureParameters](#sqlserversinkstoredprocedureparameters): SQL stored procedure parameters.
* **storedProcedureTableTypeParameterName**: any: Any object
* **tableOption**: any: Any object
* **type**: 'SqlServerSink' (Required): Copy sink type.
* **upsertSettings**: [SqlUpsertSettings](#sqlupsertsettings): Sql upsert option settings
* **writeBehavior**: any: Any object

### SqlSink
#### Properties
* **preCopyScript**: any: Any object
* **sqlWriterStoredProcedureName**: any: Any object
* **sqlWriterTableType**: any: Any object
* **sqlWriterUseTableLock**: any: Any object
* **storedProcedureParameters**: [SqlSinkStoredProcedureParameters](#sqlsinkstoredprocedureparameters): SQL stored procedure parameters.
* **storedProcedureTableTypeParameterName**: any: Any object
* **tableOption**: any: Any object
* **type**: 'SqlSink' (Required): Copy sink type.
* **upsertSettings**: [SqlUpsertSettings](#sqlupsertsettings): Sql upsert option settings
* **writeBehavior**: any: Any object


## AvroWriteSettings
### Properties
* **fileNamePrefix**: any: Any object
* **maxRowsPerFile**: any: Any object
* **recordName**: string: Top level record name in write result, which is required in AVRO spec.
* **recordNamespace**: string: Record namespace in the write result.
* **type**: string (Required): The write setting type.
### Additional Properties
* **Additional Properties Type**: any

## StoreWriteSettings
* **Discriminator**: type

### Base Properties
* **copyBehavior**: any: Any object
* **disableMetricsCollection**: any: Any object
* **maxConcurrentConnections**: any: Any object
### AzureBlobFSWriteSettings
#### Properties
* **blockSizeInMB**: any: Any object
* **type**: 'AzureBlobFSWriteSettings' (Required): The write setting type.

### AzureBlobStorageWriteSettings
#### Properties
* **blockSizeInMB**: any: Any object
* **type**: 'AzureBlobStorageWriteSettings' (Required): The write setting type.

### AzureDataLakeStoreWriteSettings
#### Properties
* **expiryDateTime**: any: Any object
* **type**: 'AzureDataLakeStoreWriteSettings' (Required): The write setting type.

### AzureFileStorageWriteSettings
#### Properties
* **type**: 'AzureFileStorageWriteSettings' (Required): The write setting type.

### FileServerWriteSettings
#### Properties
* **type**: 'FileServerWriteSettings' (Required): The write setting type.

### SftpWriteSettings
#### Properties
* **operationTimeout**: any: Any object
* **type**: 'SftpWriteSettings' (Required): The write setting type.
* **useTempFileRename**: any: Any object


## MetadataItem
### Properties
* **name**: any: Any object
* **value**: any: Any object

## AzureDatabricksDeltaLakeImportCommand
### Properties
* **dateFormat**: any: Any object
* **timestampFormat**: any: Any object
* **type**: string (Required): The import setting type.
### Additional Properties
* **Additional Properties Type**: any

## AzureSqlSinkStoredProcedureParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [StoredProcedureParameter](#storedprocedureparameter)

## StoredProcedureParameter
### Properties
* **type**: 'Boolean' | 'Date' | 'Decimal' | 'Guid' | 'Int' | 'Int64' | 'String': Stored procedure parameter type.
* **value**: any: Any object

## SqlUpsertSettings
### Properties
* **interimSchemaName**: any: Any object
* **keys**: any: Any object
* **useTempDB**: any: Any object

## DelimitedTextWriteSettings
### Properties
* **fileExtension**: any (Required): Any object
* **fileNamePrefix**: any: Any object
* **maxRowsPerFile**: any: Any object
* **quoteAllText**: any: Any object
* **type**: string (Required): The write setting type.
### Additional Properties
* **Additional Properties Type**: any

## JsonWriteSettings
### Properties
* **filePattern**: any: Any object
* **type**: string (Required): The write setting type.
### Additional Properties
* **Additional Properties Type**: any

## OrcWriteSettings
### Properties
* **fileNamePrefix**: any: Any object
* **maxRowsPerFile**: any: Any object
* **type**: string (Required): The write setting type.
### Additional Properties
* **Additional Properties Type**: any

## ParquetWriteSettings
### Properties
* **fileNamePrefix**: any: Any object
* **maxRowsPerFile**: any: Any object
* **type**: string (Required): The write setting type.
### Additional Properties
* **Additional Properties Type**: any

## SnowflakeImportCopyCommand
### Properties
* **additionalCopyOptions**: [SnowflakeImportCopyCommandAdditionalCopyOptions](#snowflakeimportcopycommandadditionalcopyoptions): Additional copy options directly passed to snowflake Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalCopyOptions": { "DATE_FORMAT": "MM/DD/YYYY", "TIME_FORMAT": "'HH24:MI:SS.FF'" }
* **additionalFormatOptions**: [SnowflakeImportCopyCommandAdditionalFormatOptions](#snowflakeimportcopycommandadditionalformatoptions): Additional format options directly passed to snowflake Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalFormatOptions": { "FORCE": "TRUE", "LOAD_UNCERTAIN_FILES": "'FALSE'" }
* **type**: string (Required): The import setting type.
### Additional Properties
* **Additional Properties Type**: any

## SnowflakeImportCopyCommandAdditionalCopyOptions
### Properties
### Additional Properties
* **Additional Properties Type**: any

## SnowflakeImportCopyCommandAdditionalFormatOptions
### Properties
### Additional Properties
* **Additional Properties Type**: any

## DWCopyCommandSettings
### Properties
* **additionalOptions**: [DWCopyCommandSettingsAdditionalOptions](#dwcopycommandsettingsadditionaloptions): Additional options directly passed to SQL DW in Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalOptions": { "MAXERRORS": "1000", "DATEFORMAT": "'ymd'" }
* **defaultValues**: [DWCopyCommandDefaultValue](#dwcopycommanddefaultvalue)[]: Specifies the default values for each target column in SQL DW. The default values in the property overwrite the DEFAULT constraint set in the DB, and identity column cannot have a default value. Type: array of objects (or Expression with resultType array of objects).

## DWCopyCommandSettingsAdditionalOptions
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DWCopyCommandDefaultValue
### Properties
* **columnName**: any: Any object
* **defaultValue**: any: Any object

## PolybaseSettings
### Properties
* **rejectSampleValue**: any: Any object
* **rejectType**: 'percentage' | 'value': Indicates whether the RejectValue property is specified as a literal value or a percentage.
* **rejectValue**: any: Any object
* **useTypeDefault**: any: Any object
### Additional Properties
* **Additional Properties Type**: any

## SqlDWUpsertSettings
### Properties
* **interimSchemaName**: any: Any object
* **keys**: any: Any object

## SqlMISinkStoredProcedureParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [StoredProcedureParameter](#storedprocedureparameter)

## SqlServerSinkStoredProcedureParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [StoredProcedureParameter](#storedprocedureparameter)

## SqlSinkStoredProcedureParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [StoredProcedureParameter](#storedprocedureparameter)

## SkipErrorFile
### Properties
* **dataInconsistency**: any: Any object
* **fileMissing**: any: Any object

## CopySource
* **Discriminator**: type

### Base Properties
* **disableMetricsCollection**: any: Any object
* **maxConcurrentConnections**: any: Any object
* **sourceRetryCount**: any: Any object
* **sourceRetryWait**: any: Any object
### AmazonMWSSource
#### Properties
* **query**: any: Any object
* **type**: 'AmazonMWSSource' (Required): Copy source type.

### AmazonRdsForOracleSource
#### Properties
* **additionalColumns**: any: Any object
* **oracleReaderQuery**: any: Any object
* **partitionOption**: any: Any object
* **partitionSettings**: [AmazonRdsForOraclePartitionSettings](#amazonrdsfororaclepartitionsettings): The settings that will be leveraged for AmazonRdsForOracle source partitioning.
* **queryTimeout**: any: Any object
* **type**: 'AmazonRdsForOracleSource' (Required): Copy source type.

### AmazonRdsForSqlServerSource
#### Properties
* **partitionOption**: any: Any object
* **partitionSettings**: [SqlPartitionSettings](#sqlpartitionsettings): The settings that will be leveraged for Sql source partitioning.
* **produceAdditionalTypes**: any: Any object
* **sqlReaderQuery**: any: Any object
* **sqlReaderStoredProcedureName**: any: Any object
* **storedProcedureParameters**: [AmazonRdsForSqlServerSourceStoredProcedureParameters](#amazonrdsforsqlserversourcestoredprocedureparameters): Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}".
* **type**: 'AmazonRdsForSqlServerSource' (Required): Copy source type.

### AmazonRedshiftSource
#### Properties
* **query**: any: Any object
* **redshiftUnloadSettings**: [RedshiftUnloadSettings](#redshiftunloadsettings): The Amazon S3 settings needed for the interim Amazon S3 when copying from Amazon Redshift with unload. With this, data from Amazon Redshift source will be unloaded into S3 first and then copied into the targeted sink from the interim S3.
* **type**: 'AmazonRedshiftSource' (Required): Copy source type.

### AvroSource
#### Properties
* **additionalColumns**: any: Any object
* **storeSettings**: [StoreReadSettings](#storereadsettings): Connector read setting.
* **type**: 'AvroSource' (Required): Copy source type.

### AzureBlobFSSource
#### Properties
* **recursive**: any: Any object
* **skipHeaderLineCount**: any: Any object
* **treatEmptyAsNull**: any: Any object
* **type**: 'AzureBlobFSSource' (Required): Copy source type.

### AzureDatabricksDeltaLakeSource
#### Properties
* **exportSettings**: [AzureDatabricksDeltaLakeExportCommand](#azuredatabricksdeltalakeexportcommand): Azure Databricks Delta Lake export command settings.
* **query**: any: Any object
* **type**: 'AzureDatabricksDeltaLakeSource' (Required): Copy source type.

### AzureDataExplorerSource
#### Properties
* **additionalColumns**: any: Any object
* **noTruncation**: any: Any object
* **query**: any (Required): Any object
* **queryTimeout**: any: Any object
* **type**: 'AzureDataExplorerSource' (Required): Copy source type.

### AzureDataLakeStoreSource
#### Properties
* **recursive**: any: Any object
* **type**: 'AzureDataLakeStoreSource' (Required): Copy source type.

### AzureMariaDBSource
#### Properties
* **query**: any: Any object
* **type**: 'AzureMariaDBSource' (Required): Copy source type.

### AzureMySqlSource
#### Properties
* **query**: any: Any object
* **type**: 'AzureMySqlSource' (Required): Copy source type.

### AzurePostgreSqlSource
#### Properties
* **query**: any: Any object
* **type**: 'AzurePostgreSqlSource' (Required): Copy source type.

### AzureSqlSource
#### Properties
* **partitionOption**: any: Any object
* **partitionSettings**: [SqlPartitionSettings](#sqlpartitionsettings): The settings that will be leveraged for Sql source partitioning.
* **produceAdditionalTypes**: any: Any object
* **sqlReaderQuery**: any: Any object
* **sqlReaderStoredProcedureName**: any: Any object
* **storedProcedureParameters**: [AzureSqlSourceStoredProcedureParameters](#azuresqlsourcestoredprocedureparameters): Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}".
* **type**: 'AzureSqlSource' (Required): Copy source type.

### AzureTableSource
#### Properties
* **azureTableSourceIgnoreTableNotFound**: any: Any object
* **azureTableSourceQuery**: any: Any object
* **type**: 'AzureTableSource' (Required): Copy source type.

### BinarySource
#### Properties
* **formatSettings**: [BinaryReadSettings](#binaryreadsettings): Binary read settings.
* **storeSettings**: [StoreReadSettings](#storereadsettings): Connector read setting.
* **type**: 'BinarySource' (Required): Copy source type.

### BlobSource
#### Properties
* **recursive**: any: Any object
* **skipHeaderLineCount**: any: Any object
* **treatEmptyAsNull**: any: Any object
* **type**: 'BlobSource' (Required): Copy source type.

### CassandraSource
#### Properties
* **consistencyLevel**: 'ALL' | 'EACH_QUORUM' | 'LOCAL_ONE' | 'LOCAL_QUORUM' | 'LOCAL_SERIAL' | 'ONE' | 'QUORUM' | 'SERIAL' | 'THREE' | 'TWO': The consistency level specifies how many Cassandra servers must respond to a read request before returning data to the client application. Cassandra checks the specified number of Cassandra servers for data to satisfy the read request. Must be one of cassandraSourceReadConsistencyLevels. The default value is 'ONE'. It is case-insensitive.
* **query**: any: Any object
* **type**: 'CassandraSource' (Required): Copy source type.

### CommonDataServiceForAppsSource
#### Properties
* **additionalColumns**: any: Any object
* **query**: any: Any object
* **type**: 'CommonDataServiceForAppsSource' (Required): Copy source type.

### ConcurSource
#### Properties
* **query**: any: Any object
* **type**: 'ConcurSource' (Required): Copy source type.

### CosmosDbMongoDbApiSource
#### Properties
* **additionalColumns**: any: Any object
* **batchSize**: any: Any object
* **cursorMethods**: [MongoDbCursorMethodsProperties](#mongodbcursormethodsproperties): Cursor methods for Mongodb query
* **filter**: any: Any object
* **queryTimeout**: any: Any object
* **type**: 'CosmosDbMongoDbApiSource' (Required): Copy source type.

### CosmosDbSqlApiSource
#### Properties
* **additionalColumns**: any: Any object
* **detectDatetime**: any: Any object
* **pageSize**: any: Any object
* **preferredRegions**: any: Any object
* **query**: any: Any object
* **type**: 'CosmosDbSqlApiSource' (Required): Copy source type.

### CouchbaseSource
#### Properties
* **query**: any: Any object
* **type**: 'CouchbaseSource' (Required): Copy source type.

### Db2Source
#### Properties
* **query**: any: Any object
* **type**: 'Db2Source' (Required): Copy source type.

### DelimitedTextSource
#### Properties
* **additionalColumns**: any: Any object
* **formatSettings**: [DelimitedTextReadSettings](#delimitedtextreadsettings): Delimited text read settings.
* **storeSettings**: [StoreReadSettings](#storereadsettings): Connector read setting.
* **type**: 'DelimitedTextSource' (Required): Copy source type.

### DocumentDbCollectionSource
#### Properties
* **additionalColumns**: any: Any object
* **nestingSeparator**: any: Any object
* **query**: any: Any object
* **queryTimeout**: any: Any object
* **type**: 'DocumentDbCollectionSource' (Required): Copy source type.

### DrillSource
#### Properties
* **query**: any: Any object
* **type**: 'DrillSource' (Required): Copy source type.

### DynamicsAXSource
#### Properties
* **httpRequestTimeout**: any: Any object
* **query**: any: Any object
* **type**: 'DynamicsAXSource' (Required): Copy source type.

### DynamicsCrmSource
#### Properties
* **additionalColumns**: any: Any object
* **query**: any: Any object
* **type**: 'DynamicsCrmSource' (Required): Copy source type.

### DynamicsSource
#### Properties
* **additionalColumns**: any: Any object
* **query**: any: Any object
* **type**: 'DynamicsSource' (Required): Copy source type.

### EloquaSource
#### Properties
* **query**: any: Any object
* **type**: 'EloquaSource' (Required): Copy source type.

### ExcelSource
#### Properties
* **additionalColumns**: any: Any object
* **storeSettings**: [StoreReadSettings](#storereadsettings): Connector read setting.
* **type**: 'ExcelSource' (Required): Copy source type.

### FileSystemSource
#### Properties
* **additionalColumns**: any: Any object
* **recursive**: any: Any object
* **type**: 'FileSystemSource' (Required): Copy source type.

### GoogleAdWordsSource
#### Properties
* **query**: any: Any object
* **type**: 'GoogleAdWordsSource' (Required): Copy source type.

### GoogleBigQuerySource
#### Properties
* **query**: any: Any object
* **type**: 'GoogleBigQuerySource' (Required): Copy source type.

### GreenplumSource
#### Properties
* **query**: any: Any object
* **type**: 'GreenplumSource' (Required): Copy source type.

### HBaseSource
#### Properties
* **query**: any: Any object
* **type**: 'HBaseSource' (Required): Copy source type.

### HdfsSource
#### Properties
* **distcpSettings**: [DistcpSettings](#distcpsettings): Distcp settings.
* **recursive**: any: Any object
* **type**: 'HdfsSource' (Required): Copy source type.

### HiveSource
#### Properties
* **query**: any: Any object
* **type**: 'HiveSource' (Required): Copy source type.

### HttpSource
#### Properties
* **httpRequestTimeout**: any: Any object
* **type**: 'HttpSource' (Required): Copy source type.

### HubspotSource
#### Properties
* **query**: any: Any object
* **type**: 'HubspotSource' (Required): Copy source type.

### ImpalaSource
#### Properties
* **query**: any: Any object
* **type**: 'ImpalaSource' (Required): Copy source type.

### InformixSource
#### Properties
* **query**: any: Any object
* **type**: 'InformixSource' (Required): Copy source type.

### JiraSource
#### Properties
* **query**: any: Any object
* **type**: 'JiraSource' (Required): Copy source type.

### JsonSource
#### Properties
* **additionalColumns**: any: Any object
* **formatSettings**: [JsonReadSettings](#jsonreadsettings): Json read settings.
* **storeSettings**: [StoreReadSettings](#storereadsettings): Connector read setting.
* **type**: 'JsonSource' (Required): Copy source type.

### MagentoSource
#### Properties
* **query**: any: Any object
* **type**: 'MagentoSource' (Required): Copy source type.

### MariaDBSource
#### Properties
* **query**: any: Any object
* **type**: 'MariaDBSource' (Required): Copy source type.

### MarketoSource
#### Properties
* **query**: any: Any object
* **type**: 'MarketoSource' (Required): Copy source type.

### MicrosoftAccessSource
#### Properties
* **additionalColumns**: any: Any object
* **query**: any: Any object
* **type**: 'MicrosoftAccessSource' (Required): Copy source type.

### MongoDbAtlasSource
#### Properties
* **additionalColumns**: any: Any object
* **batchSize**: any: Any object
* **cursorMethods**: [MongoDbCursorMethodsProperties](#mongodbcursormethodsproperties): Cursor methods for Mongodb query
* **filter**: any: Any object
* **queryTimeout**: any: Any object
* **type**: 'MongoDbAtlasSource' (Required): Copy source type.

### MongoDbSource
#### Properties
* **additionalColumns**: any: Any object
* **query**: any: Any object
* **type**: 'MongoDbSource' (Required): Copy source type.

### MongoDbV2Source
#### Properties
* **additionalColumns**: any: Any object
* **batchSize**: any: Any object
* **cursorMethods**: [MongoDbCursorMethodsProperties](#mongodbcursormethodsproperties): Cursor methods for Mongodb query
* **filter**: any: Any object
* **queryTimeout**: any: Any object
* **type**: 'MongoDbV2Source' (Required): Copy source type.

### MySqlSource
#### Properties
* **query**: any: Any object
* **type**: 'MySqlSource' (Required): Copy source type.

### NetezzaSource
#### Properties
* **partitionOption**: any: Any object
* **partitionSettings**: [NetezzaPartitionSettings](#netezzapartitionsettings): The settings that will be leveraged for Netezza source partitioning.
* **query**: any: Any object
* **type**: 'NetezzaSource' (Required): Copy source type.

### ODataSource
#### Properties
* **additionalColumns**: any: Any object
* **httpRequestTimeout**: any: Any object
* **query**: any: Any object
* **type**: 'ODataSource' (Required): Copy source type.

### OdbcSource
#### Properties
* **query**: any: Any object
* **type**: 'OdbcSource' (Required): Copy source type.

### Office365Source
#### Properties
* **allowedGroups**: any: Any object
* **dateFilterColumn**: any: Any object
* **endTime**: any: Any object
* **outputColumns**: any: Any object
* **startTime**: any: Any object
* **type**: 'Office365Source' (Required): Copy source type.
* **userScopeFilterUri**: any: Any object

### OracleServiceCloudSource
#### Properties
* **query**: any: Any object
* **type**: 'OracleServiceCloudSource' (Required): Copy source type.

### OracleSource
#### Properties
* **additionalColumns**: any: Any object
* **oracleReaderQuery**: any: Any object
* **partitionOption**: any: Any object
* **partitionSettings**: [OraclePartitionSettings](#oraclepartitionsettings): The settings that will be leveraged for Oracle source partitioning.
* **queryTimeout**: any: Any object
* **type**: 'OracleSource' (Required): Copy source type.

### OrcSource
#### Properties
* **additionalColumns**: any: Any object
* **storeSettings**: [StoreReadSettings](#storereadsettings): Connector read setting.
* **type**: 'OrcSource' (Required): Copy source type.

### ParquetSource
#### Properties
* **additionalColumns**: any: Any object
* **storeSettings**: [StoreReadSettings](#storereadsettings): Connector read setting.
* **type**: 'ParquetSource' (Required): Copy source type.

### PaypalSource
#### Properties
* **query**: any: Any object
* **type**: 'PaypalSource' (Required): Copy source type.

### PhoenixSource
#### Properties
* **query**: any: Any object
* **type**: 'PhoenixSource' (Required): Copy source type.

### PostgreSqlSource
#### Properties
* **query**: any: Any object
* **type**: 'PostgreSqlSource' (Required): Copy source type.

### PrestoSource
#### Properties
* **query**: any: Any object
* **type**: 'PrestoSource' (Required): Copy source type.

### QuickBooksSource
#### Properties
* **query**: any: Any object
* **type**: 'QuickBooksSource' (Required): Copy source type.

### RelationalSource
#### Properties
* **additionalColumns**: any: Any object
* **query**: any: Any object
* **type**: 'RelationalSource' (Required): Copy source type.

### ResponsysSource
#### Properties
* **query**: any: Any object
* **type**: 'ResponsysSource' (Required): Copy source type.

### RestSource
#### Properties
* **additionalColumns**: any: Any object
* **additionalHeaders**: any: Any object
* **httpRequestTimeout**: any: Any object
* **paginationRules**: any: Any object
* **requestBody**: any: Any object
* **requestInterval**: any: Any object
* **requestMethod**: any: Any object
* **type**: 'RestSource' (Required): Copy source type.

### SalesforceMarketingCloudSource
#### Properties
* **query**: any: Any object
* **type**: 'SalesforceMarketingCloudSource' (Required): Copy source type.

### SalesforceServiceCloudSource
#### Properties
* **additionalColumns**: any: Any object
* **query**: any: Any object
* **readBehavior**: 'Query' | 'QueryAll': The read behavior for the operation. Default is Query.
* **type**: 'SalesforceServiceCloudSource' (Required): Copy source type.

### SalesforceSource
#### Properties
* **query**: any: Any object
* **readBehavior**: 'Query' | 'QueryAll': The read behavior for the operation. Default is Query.
* **type**: 'SalesforceSource' (Required): Copy source type.

### SapBwSource
#### Properties
* **query**: any: Any object
* **type**: 'SapBwSource' (Required): Copy source type.

### SapCloudForCustomerSource
#### Properties
* **httpRequestTimeout**: any: Any object
* **query**: any: Any object
* **type**: 'SapCloudForCustomerSource' (Required): Copy source type.

### SapEccSource
#### Properties
* **httpRequestTimeout**: any: Any object
* **query**: any: Any object
* **type**: 'SapEccSource' (Required): Copy source type.

### SapHanaSource
#### Properties
* **packetSize**: any: Any object
* **partitionOption**: any: Any object
* **partitionSettings**: [SapHanaPartitionSettings](#saphanapartitionsettings): The settings that will be leveraged for SAP HANA source partitioning.
* **query**: any: Any object
* **type**: 'SapHanaSource' (Required): Copy source type.

### SapOpenHubSource
#### Properties
* **baseRequestId**: any: Any object
* **customRfcReadTableFunctionModule**: any: Any object
* **excludeLastRequest**: any: Any object
* **sapDataColumnDelimiter**: any: Any object
* **type**: 'SapOpenHubSource' (Required): Copy source type.

### SapTableSource
#### Properties
* **batchSize**: any: Any object
* **customRfcReadTableFunctionModule**: any: Any object
* **partitionOption**: any: Any object
* **partitionSettings**: [SapTablePartitionSettings](#saptablepartitionsettings): The settings that will be leveraged for SAP table source partitioning.
* **rfcTableFields**: any: Any object
* **rfcTableOptions**: any: Any object
* **rowCount**: any: Any object
* **rowSkips**: any: Any object
* **sapDataColumnDelimiter**: any: Any object
* **type**: 'SapTableSource' (Required): Copy source type.

### ServiceNowSource
#### Properties
* **query**: any: Any object
* **type**: 'ServiceNowSource' (Required): Copy source type.

### SharePointOnlineListSource
#### Properties
* **httpRequestTimeout**: any: Any object
* **query**: any: Any object
* **type**: 'SharePointOnlineListSource' (Required): Copy source type.

### ShopifySource
#### Properties
* **query**: any: Any object
* **type**: 'ShopifySource' (Required): Copy source type.

### SnowflakeSource
#### Properties
* **exportSettings**: [SnowflakeExportCopyCommand](#snowflakeexportcopycommand): Snowflake export command settings.
* **query**: any: Any object
* **type**: 'SnowflakeSource' (Required): Copy source type.

### SparkSource
#### Properties
* **query**: any: Any object
* **type**: 'SparkSource' (Required): Copy source type.

### SqlDWSource
#### Properties
* **partitionOption**: any: Any object
* **partitionSettings**: [SqlPartitionSettings](#sqlpartitionsettings): The settings that will be leveraged for Sql source partitioning.
* **sqlReaderQuery**: any: Any object
* **sqlReaderStoredProcedureName**: any: Any object
* **storedProcedureParameters**: any: Any object
* **type**: 'SqlDWSource' (Required): Copy source type.

### SqlMISource
#### Properties
* **partitionOption**: any: Any object
* **partitionSettings**: [SqlPartitionSettings](#sqlpartitionsettings): The settings that will be leveraged for Sql source partitioning.
* **produceAdditionalTypes**: any: Any object
* **sqlReaderQuery**: any: Any object
* **sqlReaderStoredProcedureName**: any: Any object
* **storedProcedureParameters**: [SqlMISourceStoredProcedureParameters](#sqlmisourcestoredprocedureparameters): Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}".
* **type**: 'SqlMISource' (Required): Copy source type.

### SqlServerSource
#### Properties
* **partitionOption**: any: Any object
* **partitionSettings**: [SqlPartitionSettings](#sqlpartitionsettings): The settings that will be leveraged for Sql source partitioning.
* **produceAdditionalTypes**: any: Any object
* **sqlReaderQuery**: any: Any object
* **sqlReaderStoredProcedureName**: any: Any object
* **storedProcedureParameters**: [SqlServerSourceStoredProcedureParameters](#sqlserversourcestoredprocedureparameters): Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}".
* **type**: 'SqlServerSource' (Required): Copy source type.

### SqlSource
#### Properties
* **isolationLevel**: any: Any object
* **partitionOption**: any: Any object
* **partitionSettings**: [SqlPartitionSettings](#sqlpartitionsettings): The settings that will be leveraged for Sql source partitioning.
* **sqlReaderQuery**: any: Any object
* **sqlReaderStoredProcedureName**: any: Any object
* **storedProcedureParameters**: [SqlSourceStoredProcedureParameters](#sqlsourcestoredprocedureparameters): Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}".
* **type**: 'SqlSource' (Required): Copy source type.

### SquareSource
#### Properties
* **query**: any: Any object
* **type**: 'SquareSource' (Required): Copy source type.

### SybaseSource
#### Properties
* **query**: any: Any object
* **type**: 'SybaseSource' (Required): Copy source type.

### TeradataSource
#### Properties
* **partitionOption**: any: Any object
* **partitionSettings**: [TeradataPartitionSettings](#teradatapartitionsettings): The settings that will be leveraged for teradata source partitioning.
* **query**: any: Any object
* **type**: 'TeradataSource' (Required): Copy source type.

### VerticaSource
#### Properties
* **query**: any: Any object
* **type**: 'VerticaSource' (Required): Copy source type.

### WebSource
#### Properties
* **additionalColumns**: any: Any object
* **type**: 'WebSource' (Required): Copy source type.

### XeroSource
#### Properties
* **query**: any: Any object
* **type**: 'XeroSource' (Required): Copy source type.

### XmlSource
#### Properties
* **additionalColumns**: any: Any object
* **formatSettings**: [XmlReadSettings](#xmlreadsettings): Xml read settings.
* **storeSettings**: [StoreReadSettings](#storereadsettings): Connector read setting.
* **type**: 'XmlSource' (Required): Copy source type.

### ZohoSource
#### Properties
* **query**: any: Any object
* **type**: 'ZohoSource' (Required): Copy source type.


## AmazonRdsForOraclePartitionSettings
### Properties
* **partitionColumnName**: any: Any object
* **partitionLowerBound**: any: Any object
* **partitionNames**: any: Any object
* **partitionUpperBound**: any: Any object

## SqlPartitionSettings
### Properties
* **partitionColumnName**: any: Any object
* **partitionLowerBound**: any: Any object
* **partitionUpperBound**: any: Any object

## AmazonRdsForSqlServerSourceStoredProcedureParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [StoredProcedureParameter](#storedprocedureparameter)

## RedshiftUnloadSettings
### Properties
* **bucketName**: any (Required): Any object
* **s3LinkedServiceName**: [LinkedServiceReference](#linkedservicereference) (Required): Linked service reference type.

## StoreReadSettings
* **Discriminator**: type

### Base Properties
* **disableMetricsCollection**: any: Any object
* **maxConcurrentConnections**: any: Any object
### AmazonS3CompatibleReadSettings
#### Properties
* **deleteFilesAfterCompletion**: any: Any object
* **enablePartitionDiscovery**: bool: Indicates whether to enable partition discovery.
* **fileListPath**: any: Any object
* **modifiedDatetimeEnd**: any: Any object
* **modifiedDatetimeStart**: any: Any object
* **partitionRootPath**: any: Any object
* **prefix**: any: Any object
* **recursive**: any: Any object
* **type**: 'AmazonS3CompatibleReadSettings' (Required): The read setting type.
* **wildcardFileName**: any: Any object
* **wildcardFolderPath**: any: Any object

### AmazonS3ReadSettings
#### Properties
* **deleteFilesAfterCompletion**: any: Any object
* **enablePartitionDiscovery**: bool: Indicates whether to enable partition discovery.
* **fileListPath**: any: Any object
* **modifiedDatetimeEnd**: any: Any object
* **modifiedDatetimeStart**: any: Any object
* **partitionRootPath**: any: Any object
* **prefix**: any: Any object
* **recursive**: any: Any object
* **type**: 'AmazonS3ReadSettings' (Required): The read setting type.
* **wildcardFileName**: any: Any object
* **wildcardFolderPath**: any: Any object

### AzureBlobFSReadSettings
#### Properties
* **deleteFilesAfterCompletion**: any: Any object
* **enablePartitionDiscovery**: bool: Indicates whether to enable partition discovery.
* **fileListPath**: any: Any object
* **modifiedDatetimeEnd**: any: Any object
* **modifiedDatetimeStart**: any: Any object
* **partitionRootPath**: any: Any object
* **recursive**: any: Any object
* **type**: 'AzureBlobFSReadSettings' (Required): The read setting type.
* **wildcardFileName**: any: Any object
* **wildcardFolderPath**: any: Any object

### AzureBlobStorageReadSettings
#### Properties
* **deleteFilesAfterCompletion**: any: Any object
* **enablePartitionDiscovery**: bool: Indicates whether to enable partition discovery.
* **fileListPath**: any: Any object
* **modifiedDatetimeEnd**: any: Any object
* **modifiedDatetimeStart**: any: Any object
* **partitionRootPath**: any: Any object
* **prefix**: any: Any object
* **recursive**: any: Any object
* **type**: 'AzureBlobStorageReadSettings' (Required): The read setting type.
* **wildcardFileName**: any: Any object
* **wildcardFolderPath**: any: Any object

### AzureDataLakeStoreReadSettings
#### Properties
* **deleteFilesAfterCompletion**: any: Any object
* **enablePartitionDiscovery**: bool: Indicates whether to enable partition discovery.
* **fileListPath**: any: Any object
* **listAfter**: any: Any object
* **listBefore**: any: Any object
* **modifiedDatetimeEnd**: any: Any object
* **modifiedDatetimeStart**: any: Any object
* **partitionRootPath**: any: Any object
* **recursive**: any: Any object
* **type**: 'AzureDataLakeStoreReadSettings' (Required): The read setting type.
* **wildcardFileName**: any: Any object
* **wildcardFolderPath**: any: Any object

### AzureFileStorageReadSettings
#### Properties
* **deleteFilesAfterCompletion**: any: Any object
* **enablePartitionDiscovery**: bool: Indicates whether to enable partition discovery.
* **fileListPath**: any: Any object
* **modifiedDatetimeEnd**: any: Any object
* **modifiedDatetimeStart**: any: Any object
* **partitionRootPath**: any: Any object
* **prefix**: any: Any object
* **recursive**: any: Any object
* **type**: 'AzureFileStorageReadSettings' (Required): The read setting type.
* **wildcardFileName**: any: Any object
* **wildcardFolderPath**: any: Any object

### FileServerReadSettings
#### Properties
* **deleteFilesAfterCompletion**: any: Any object
* **enablePartitionDiscovery**: bool: Indicates whether to enable partition discovery.
* **fileFilter**: any: Any object
* **fileListPath**: any: Any object
* **modifiedDatetimeEnd**: any: Any object
* **modifiedDatetimeStart**: any: Any object
* **partitionRootPath**: any: Any object
* **recursive**: any: Any object
* **type**: 'FileServerReadSettings' (Required): The read setting type.
* **wildcardFileName**: any: Any object
* **wildcardFolderPath**: any: Any object

### FtpReadSettings
#### Properties
* **deleteFilesAfterCompletion**: any: Any object
* **enablePartitionDiscovery**: bool: Indicates whether to enable partition discovery.
* **fileListPath**: any: Any object
* **partitionRootPath**: any: Any object
* **recursive**: any: Any object
* **type**: 'FtpReadSettings' (Required): The read setting type.
* **useBinaryTransfer**: bool: Specify whether to use binary transfer mode for FTP stores.
* **wildcardFileName**: any: Any object
* **wildcardFolderPath**: any: Any object

### GoogleCloudStorageReadSettings
#### Properties
* **deleteFilesAfterCompletion**: any: Any object
* **enablePartitionDiscovery**: bool: Indicates whether to enable partition discovery.
* **fileListPath**: any: Any object
* **modifiedDatetimeEnd**: any: Any object
* **modifiedDatetimeStart**: any: Any object
* **partitionRootPath**: any: Any object
* **prefix**: any: Any object
* **recursive**: any: Any object
* **type**: 'GoogleCloudStorageReadSettings' (Required): The read setting type.
* **wildcardFileName**: any: Any object
* **wildcardFolderPath**: any: Any object

### HdfsReadSettings
#### Properties
* **deleteFilesAfterCompletion**: any: Any object
* **distcpSettings**: [DistcpSettings](#distcpsettings): Distcp settings.
* **enablePartitionDiscovery**: bool: Indicates whether to enable partition discovery.
* **fileListPath**: any: Any object
* **modifiedDatetimeEnd**: any: Any object
* **modifiedDatetimeStart**: any: Any object
* **partitionRootPath**: any: Any object
* **recursive**: any: Any object
* **type**: 'HdfsReadSettings' (Required): The read setting type.
* **wildcardFileName**: any: Any object
* **wildcardFolderPath**: any: Any object

### HttpReadSettings
#### Properties
* **additionalHeaders**: any: Any object
* **enablePartitionDiscovery**: bool: Indicates whether to enable partition discovery.
* **partitionRootPath**: any: Any object
* **requestBody**: any: Any object
* **requestMethod**: any: Any object
* **requestTimeout**: any: Any object
* **type**: 'HttpReadSettings' (Required): The read setting type.

### OracleCloudStorageReadSettings
#### Properties
* **deleteFilesAfterCompletion**: any: Any object
* **enablePartitionDiscovery**: bool: Indicates whether to enable partition discovery.
* **fileListPath**: any: Any object
* **modifiedDatetimeEnd**: any: Any object
* **modifiedDatetimeStart**: any: Any object
* **partitionRootPath**: any: Any object
* **prefix**: any: Any object
* **recursive**: any: Any object
* **type**: 'OracleCloudStorageReadSettings' (Required): The read setting type.
* **wildcardFileName**: any: Any object
* **wildcardFolderPath**: any: Any object

### SftpReadSettings
#### Properties
* **deleteFilesAfterCompletion**: any: Any object
* **enablePartitionDiscovery**: bool: Indicates whether to enable partition discovery.
* **fileListPath**: any: Any object
* **modifiedDatetimeEnd**: any: Any object
* **modifiedDatetimeStart**: any: Any object
* **partitionRootPath**: any: Any object
* **recursive**: any: Any object
* **type**: 'SftpReadSettings' (Required): The read setting type.
* **wildcardFileName**: any: Any object
* **wildcardFolderPath**: any: Any object


## DistcpSettings
### Properties
* **distcpOptions**: any: Any object
* **resourceManagerEndpoint**: any (Required): Any object
* **tempScriptPath**: any (Required): Any object

## AzureDatabricksDeltaLakeExportCommand
### Properties
* **dateFormat**: any: Any object
* **timestampFormat**: any: Any object
* **type**: string (Required): The export setting type.
### Additional Properties
* **Additional Properties Type**: any

## AzureSqlSourceStoredProcedureParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [StoredProcedureParameter](#storedprocedureparameter)

## BinaryReadSettings
### Properties
* **compressionProperties**: [CompressionReadSettings](#compressionreadsettings): Compression read settings.
* **type**: string (Required): The read setting type.
### Additional Properties
* **Additional Properties Type**: any

## CompressionReadSettings
* **Discriminator**: type

### Base Properties
### TarGZipReadSettings
#### Properties
* **preserveCompressionFileNameAsFolder**: any: Any object
* **type**: 'TarGZipReadSettings' (Required): The Compression setting type.

### TarReadSettings
#### Properties
* **preserveCompressionFileNameAsFolder**: any: Any object
* **type**: 'TarReadSettings' (Required): The Compression setting type.

### ZipDeflateReadSettings
#### Properties
* **preserveZipFileNameAsFolder**: any: Any object
* **type**: 'ZipDeflateReadSettings' (Required): The Compression setting type.


## MongoDbCursorMethodsProperties
### Properties
* **limit**: any: Any object
* **project**: any: Any object
* **skip**: any: Any object
* **sort**: any: Any object
### Additional Properties
* **Additional Properties Type**: any

## DelimitedTextReadSettings
### Properties
* **compressionProperties**: [CompressionReadSettings](#compressionreadsettings): Compression read settings.
* **skipLineCount**: any: Any object
* **type**: string (Required): The read setting type.
### Additional Properties
* **Additional Properties Type**: any

## JsonReadSettings
### Properties
* **compressionProperties**: [CompressionReadSettings](#compressionreadsettings): Compression read settings.
* **type**: string (Required): The read setting type.
### Additional Properties
* **Additional Properties Type**: any

## NetezzaPartitionSettings
### Properties
* **partitionColumnName**: any: Any object
* **partitionLowerBound**: any: Any object
* **partitionUpperBound**: any: Any object

## OraclePartitionSettings
### Properties
* **partitionColumnName**: any: Any object
* **partitionLowerBound**: any: Any object
* **partitionNames**: any: Any object
* **partitionUpperBound**: any: Any object

## SapHanaPartitionSettings
### Properties
* **partitionColumnName**: any: Any object

## SapTablePartitionSettings
### Properties
* **maxPartitionsNumber**: any: Any object
* **partitionColumnName**: any: Any object
* **partitionLowerBound**: any: Any object
* **partitionUpperBound**: any: Any object

## SnowflakeExportCopyCommand
### Properties
* **additionalCopyOptions**: [SnowflakeExportCopyCommandAdditionalCopyOptions](#snowflakeexportcopycommandadditionalcopyoptions): Additional copy options directly passed to snowflake Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalCopyOptions": { "DATE_FORMAT": "MM/DD/YYYY", "TIME_FORMAT": "'HH24:MI:SS.FF'" }
* **additionalFormatOptions**: [SnowflakeExportCopyCommandAdditionalFormatOptions](#snowflakeexportcopycommandadditionalformatoptions): Additional format options directly passed to snowflake Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalFormatOptions": { "OVERWRITE": "TRUE", "MAX_FILE_SIZE": "'FALSE'" }
* **type**: string (Required): The export setting type.
### Additional Properties
* **Additional Properties Type**: any

## SnowflakeExportCopyCommandAdditionalCopyOptions
### Properties
### Additional Properties
* **Additional Properties Type**: any

## SnowflakeExportCopyCommandAdditionalFormatOptions
### Properties
### Additional Properties
* **Additional Properties Type**: any

## SqlMISourceStoredProcedureParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [StoredProcedureParameter](#storedprocedureparameter)

## SqlServerSourceStoredProcedureParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [StoredProcedureParameter](#storedprocedureparameter)

## SqlSourceStoredProcedureParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [StoredProcedureParameter](#storedprocedureparameter)

## TeradataPartitionSettings
### Properties
* **partitionColumnName**: any: Any object
* **partitionLowerBound**: any: Any object
* **partitionUpperBound**: any: Any object

## XmlReadSettings
### Properties
* **compressionProperties**: [CompressionReadSettings](#compressionreadsettings): Compression read settings.
* **detectDataType**: any: Any object
* **namespacePrefixes**: any: Any object
* **namespaces**: any: Any object
* **type**: string (Required): The read setting type.
* **validationMode**: any: Any object
### Additional Properties
* **Additional Properties Type**: any

## StagingSettings
### Properties
* **enableCompression**: any: Any object
* **linkedServiceName**: [LinkedServiceReference](#linkedservicereference) (Required): Linked service reference type.
* **path**: any: Any object
### Additional Properties
* **Additional Properties Type**: any

## CustomActivityTypeProperties
### Properties
* **autoUserSpecification**: any: Any object
* **command**: any (Required): Any object
* **extendedProperties**: [CustomActivityTypePropertiesExtendedProperties](#customactivitytypepropertiesextendedproperties): User defined property bag. There is no restriction on the keys or values that can be used. The user specified custom activity has the full responsibility to consume and interpret the content defined.
* **folderPath**: any: Any object
* **referenceObjects**: [CustomActivityReferenceObject](#customactivityreferenceobject): Reference objects for custom activity
* **resourceLinkedService**: [LinkedServiceReference](#linkedservicereference): Linked service reference type.
* **retentionTimeInDays**: any: Any object

## CustomActivityTypePropertiesExtendedProperties
### Properties
### Additional Properties
* **Additional Properties Type**: any

## CustomActivityReferenceObject
### Properties
* **datasets**: [DatasetReference](#datasetreference)[]: Dataset references.
* **linkedServices**: [LinkedServiceReference](#linkedservicereference)[]: Linked service references.

## DatabricksNotebookActivityTypeProperties
### Properties
* **baseParameters**: [DatabricksNotebookActivityTypePropertiesBaseParameters](#databricksnotebookactivitytypepropertiesbaseparameters): Base parameters to be used for each run of this job.If the notebook takes a parameter that is not specified, the default value from the notebook will be used.
* **libraries**: [DatabricksNotebookActivityTypePropertiesLibrariesItem](#databricksnotebookactivitytypepropertieslibrariesitem)[]: A list of libraries to be installed on the cluster that will execute the job.
* **notebookPath**: any (Required): Any object

## DatabricksNotebookActivityTypePropertiesBaseParameters
### Properties
### Additional Properties
* **Additional Properties Type**: any

## DatabricksNotebookActivityTypePropertiesLibrariesItem
### Properties
### Additional Properties
* **Additional Properties Type**: any

## DatabricksSparkJarActivityTypeProperties
### Properties
* **libraries**: [DatabricksSparkJarActivityTypePropertiesLibrariesItem](#databrickssparkjaractivitytypepropertieslibrariesitem)[]: A list of libraries to be installed on the cluster that will execute the job.
* **mainClassName**: any (Required): Any object
* **parameters**: any[]: Parameters that will be passed to the main method.

## DatabricksSparkJarActivityTypePropertiesLibrariesItem
### Properties
### Additional Properties
* **Additional Properties Type**: any

## DatabricksSparkPythonActivityTypeProperties
### Properties
* **libraries**: [DatabricksSparkPythonActivityTypePropertiesLibrariesItem](#databrickssparkpythonactivitytypepropertieslibrariesitem)[]: A list of libraries to be installed on the cluster that will execute the job.
* **parameters**: any[]: Command line parameters that will be passed to the Python file.
* **pythonFile**: any (Required): Any object

## DatabricksSparkPythonActivityTypePropertiesLibrariesItem
### Properties
### Additional Properties
* **Additional Properties Type**: any

## DataLakeAnalyticsUsqlActivityTypeProperties
### Properties
* **compilationMode**: any: Any object
* **degreeOfParallelism**: any: Any object
* **parameters**: [DataLakeAnalyticsUsqlActivityTypePropertiesParameters](#datalakeanalyticsusqlactivitytypepropertiesparameters): Parameters for U-SQL job request.
* **priority**: any: Any object
* **runtimeVersion**: any: Any object
* **scriptLinkedService**: [LinkedServiceReference](#linkedservicereference) (Required): Linked service reference type.
* **scriptPath**: any (Required): Any object

## DataLakeAnalyticsUsqlActivityTypePropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: any

## DeleteActivityTypeProperties
### Properties
* **dataset**: [DatasetReference](#datasetreference) (Required): Dataset reference type.
* **enableLogging**: any: Any object
* **logStorageSettings**: [LogStorageSettings](#logstoragesettings): (Deprecated. Please use LogSettings) Log storage settings.
* **maxConcurrentConnections**: int: The max concurrent connections to connect data source at the same time.
* **recursive**: any: Any object
* **storeSettings**: [StoreReadSettings](#storereadsettings): Connector read setting.

## ExecuteDataFlowActivityTypeProperties
### Properties
* **compute**: [ExecuteDataFlowActivityTypePropertiesCompute](#executedataflowactivitytypepropertiescompute): Compute properties for data flow activity.
* **continueOnError**: any: Any object
* **dataFlow**: [DataFlowReference](#dataflowreference) (Required): Data flow reference type.
* **integrationRuntime**: [IntegrationRuntimeReference](#integrationruntimereference): Integration runtime reference type.
* **runConcurrently**: any: Any object
* **staging**: [DataFlowStagingInfo](#dataflowstaginginfo): Staging info for execute data flow activity.
* **traceLevel**: any: Any object

## ExecuteDataFlowActivityTypePropertiesCompute
### Properties
* **computeType**: any: Any object
* **coreCount**: any: Any object

## DataFlowReference
### Properties
* **datasetParameters**: any: Any object
* **referenceName**: string (Required): Reference data flow name.
* **type**: 'DataFlowReference' (Required): Data flow reference type.
### Additional Properties
* **Additional Properties Type**: any

## DataFlowStagingInfo
### Properties
* **folderPath**: any: Any object
* **linkedService**: [LinkedServiceReference](#linkedservicereference): Linked service reference type.

## ExecutePipelineActivityTypeProperties
### Properties
* **parameters**: [ParameterValueSpecification](#parametervaluespecification): An object mapping parameter names to argument values.
* **pipeline**: [PipelineReference](#pipelinereference) (Required): Pipeline reference type.
* **waitOnCompletion**: bool: Defines whether activity execution will wait for the dependent pipeline execution to finish. Default is false.

## ParameterValueSpecification
### Properties
### Additional Properties
* **Additional Properties Type**: any

## PipelineReference
### Properties
* **name**: string: Reference name.
* **referenceName**: string (Required): Reference pipeline name.
* **type**: 'PipelineReference' (Required): Pipeline reference type.

## ExecuteSsisPackageActivityTypeProperties
### Properties
* **connectVia**: [IntegrationRuntimeReference](#integrationruntimereference) (Required): Integration runtime reference type.
* **environmentPath**: any: Any object
* **executionCredential**: [SsisExecutionCredential](#ssisexecutioncredential): SSIS package execution credential.
* **loggingLevel**: any: Any object
* **logLocation**: [SsisLogLocation](#ssisloglocation): SSIS package execution log location
* **packageConnectionManagers**: [ExecuteSsisPackageActivityTypePropertiesPackageConnectionManagers](#executessispackageactivitytypepropertiespackageconnectionmanagers): The package level connection managers to execute the SSIS package.
* **packageLocation**: [SsisPackageLocation](#ssispackagelocation) (Required): SSIS package location.
* **packageParameters**: [ExecuteSsisPackageActivityTypePropertiesPackageParameters](#executessispackageactivitytypepropertiespackageparameters): The package level parameters to execute the SSIS package.
* **projectConnectionManagers**: [ExecuteSsisPackageActivityTypePropertiesProjectConnectionManagers](#executessispackageactivitytypepropertiesprojectconnectionmanagers): The project level connection managers to execute the SSIS package.
* **projectParameters**: [ExecuteSsisPackageActivityTypePropertiesProjectParameters](#executessispackageactivitytypepropertiesprojectparameters): The project level parameters to execute the SSIS package.
* **propertyOverrides**: [ExecuteSsisPackageActivityTypePropertiesPropertyOverrides](#executessispackageactivitytypepropertiespropertyoverrides): The property overrides to execute the SSIS package.
* **runtime**: any: Any object

## SsisExecutionCredential
### Properties
* **domain**: any (Required): Any object
* **password**: [SecureString](#securestring) (Required): Azure Data Factory secure string definition. The string value will be masked with asterisks '*' during Get or List API calls.
* **userName**: any (Required): Any object

## SsisLogLocation
### Properties
* **logPath**: any (Required): Any object
* **type**: 'File' (Required): The type of SSIS log location.
* **typeProperties**: [SsisLogLocationTypeProperties](#ssisloglocationtypeproperties) (Required): SSIS package execution log location properties.

## SsisLogLocationTypeProperties
### Properties
* **accessCredential**: [SsisAccessCredential](#ssisaccesscredential): SSIS access credential.
* **logRefreshInterval**: any: Any object

## SsisAccessCredential
### Properties
* **domain**: any (Required): Any object
* **password**: [SecretBase](#secretbase) (Required): The base definition of a secret type.
* **userName**: any (Required): Any object

## ExecuteSsisPackageActivityTypePropertiesPackageConnectionManagers
### Properties
### Additional Properties
* **Additional Properties Type**: [SsisConnectionManager](#ssisconnectionmanager)

## SsisConnectionManager
### Properties
### Additional Properties
* **Additional Properties Type**: [SsisExecutionParameter](#ssisexecutionparameter)

## SsisExecutionParameter
### Properties
* **value**: any (Required): Any object

## SsisPackageLocation
### Properties
* **packagePath**: any: Any object
* **type**: 'File' | 'InlinePackage' | 'PackageStore' | 'SSISDB': The type of SSIS package location.
* **typeProperties**: [SsisPackageLocationTypeProperties](#ssispackagelocationtypeproperties): SSIS package location properties.

## SsisPackageLocationTypeProperties
### Properties
* **accessCredential**: [SsisAccessCredential](#ssisaccesscredential): SSIS access credential.
* **childPackages**: [SsisChildPackage](#ssischildpackage)[]: The embedded child package list.
* **configurationAccessCredential**: [SsisAccessCredential](#ssisaccesscredential): SSIS access credential.
* **configurationPath**: any: Any object
* **packageContent**: any: Any object
* **packageLastModifiedDate**: string: The embedded package last modified date.
* **packageName**: string: The package name.
* **packagePassword**: [SecretBase](#secretbase): The base definition of a secret type.

## SsisChildPackage
### Properties
* **packageContent**: any (Required): Any object
* **packageLastModifiedDate**: string: Last modified date for embedded child package.
* **packageName**: string: Name for embedded child package.
* **packagePath**: any (Required): Any object

## ExecuteSsisPackageActivityTypePropertiesPackageParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [SsisExecutionParameter](#ssisexecutionparameter)

## ExecuteSsisPackageActivityTypePropertiesProjectConnectionManagers
### Properties
### Additional Properties
* **Additional Properties Type**: [SsisConnectionManager](#ssisconnectionmanager)

## SsisConnectionManager
### Properties
### Additional Properties
* **Additional Properties Type**: [SsisExecutionParameter](#ssisexecutionparameter)

## ExecuteSsisPackageActivityTypePropertiesProjectParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [SsisExecutionParameter](#ssisexecutionparameter)

## ExecuteSsisPackageActivityTypePropertiesPropertyOverrides
### Properties
### Additional Properties
* **Additional Properties Type**: [SsisPropertyOverride](#ssispropertyoverride)

## SsisPropertyOverride
### Properties
* **isSensitive**: bool: Whether SSIS package property override value is sensitive data. Value will be encrypted in SSISDB if it is true
* **value**: any (Required): Any object

## ActivityPolicy
### Properties
* **retry**: any: Any object
* **retryIntervalInSeconds**: int: Interval between each retry attempt (in seconds). The default is 30 sec.
* **secureInput**: bool: When set to true, Input from activity is considered as secure and will not be logged to monitoring.
* **secureOutput**: bool: When set to true, Output from activity is considered as secure and will not be logged to monitoring.
* **timeout**: any: Any object
### Additional Properties
* **Additional Properties Type**: any

## ExecutePowerQueryActivityTypeProperties
### Properties
* **compute**: [ExecuteDataFlowActivityTypePropertiesCompute](#executedataflowactivitytypepropertiescompute): Compute properties for data flow activity.
* **continueOnError**: any: Any object
* **dataFlow**: [DataFlowReference](#dataflowreference) (Required): Data flow reference type.
* **integrationRuntime**: [IntegrationRuntimeReference](#integrationruntimereference): Integration runtime reference type.
* **queries**: [PowerQuerySinkMapping](#powerquerysinkmapping)[]: List of mapping for Power Query mashup query to sink dataset(s).
* **runConcurrently**: any: Any object
* **sinks**: [ExecutePowerQueryActivityTypePropertiesSinks](#executepowerqueryactivitytypepropertiessinks): (Deprecated. Please use Queries). List of Power Query activity sinks mapped to a queryName.
* **staging**: [DataFlowStagingInfo](#dataflowstaginginfo): Staging info for execute data flow activity.
* **traceLevel**: any: Any object

## PowerQuerySinkMapping
### Properties
* **dataflowSinks**: [PowerQuerySink](#powerquerysink)[]: List of sinks mapped to Power Query mashup query.
* **queryName**: string: Name of the query in Power Query mashup document.

## PowerQuerySink
### Properties
* **dataset**: [DatasetReference](#datasetreference): Dataset reference type.
* **description**: string: Transformation description.
* **linkedService**: [LinkedServiceReference](#linkedservicereference): Linked service reference type.
* **name**: string (Required): Transformation name.
* **schemaLinkedService**: [LinkedServiceReference](#linkedservicereference): Linked service reference type.
* **script**: string: sink script.

## ExecutePowerQueryActivityTypePropertiesSinks
### Properties
### Additional Properties
* **Additional Properties Type**: [PowerQuerySink](#powerquerysink)

## FilterActivityTypeProperties
### Properties
* **condition**: [Expression](#expression) (Required): Azure Data Factory expression definition.
* **items**: [Expression](#expression) (Required): Azure Data Factory expression definition.

## Expression
### Properties
* **type**: 'Expression' (Required): Expression type.
* **value**: string (Required): Expression value.

## ForEachActivityTypeProperties
### Properties
* **activities**: [Activity](#activity)[] (Required): List of activities to execute .
* **batchCount**: int: Batch count to be used for controlling the number of parallel execution (when isSequential is set to false).
* **isSequential**: bool: Should the loop be executed in sequence or in parallel (max 50)
* **items**: [Expression](#expression) (Required): Azure Data Factory expression definition.

## GetMetadataActivityTypeProperties
### Properties
* **dataset**: [DatasetReference](#datasetreference) (Required): Dataset reference type.
* **fieldList**: any[]: Fields of metadata to get from dataset.
* **formatSettings**: [FormatReadSettings](#formatreadsettings): Format read settings.
* **storeSettings**: [StoreReadSettings](#storereadsettings): Connector read setting.

## FormatReadSettings
* **Discriminator**: type

### Base Properties
### BinaryReadSettings
#### Properties
* **compressionProperties**: [CompressionReadSettings](#compressionreadsettings): Compression read settings.
* **type**: 'BinaryReadSettings' (Required): The read setting type.

### DelimitedTextReadSettings
#### Properties
* **compressionProperties**: [CompressionReadSettings](#compressionreadsettings): Compression read settings.
* **skipLineCount**: any: Any object
* **type**: 'DelimitedTextReadSettings' (Required): The read setting type.

### JsonReadSettings
#### Properties
* **compressionProperties**: [CompressionReadSettings](#compressionreadsettings): Compression read settings.
* **type**: 'JsonReadSettings' (Required): The read setting type.

### XmlReadSettings
#### Properties
* **compressionProperties**: [CompressionReadSettings](#compressionreadsettings): Compression read settings.
* **detectDataType**: any: Any object
* **namespacePrefixes**: any: Any object
* **namespaces**: any: Any object
* **type**: 'XmlReadSettings' (Required): The read setting type.
* **validationMode**: any: Any object


## HDInsightHiveActivityTypeProperties
### Properties
* **arguments**: any[]: User specified arguments to HDInsightActivity.
* **defines**: [HDInsightHiveActivityTypePropertiesDefines](#hdinsighthiveactivitytypepropertiesdefines): Allows user to specify defines for Hive job request.
* **getDebugInfo**: 'Always' | 'Failure' | 'None': The HDInsightActivityDebugInfoOption settings to use.
* **queryTimeout**: int: Query timeout value (in minutes).  Effective when the HDInsight cluster is with ESP (Enterprise Security Package)
* **scriptLinkedService**: [LinkedServiceReference](#linkedservicereference): Linked service reference type.
* **scriptPath**: any: Any object
* **storageLinkedServices**: [LinkedServiceReference](#linkedservicereference)[]: Storage linked service references.
* **variables**: any[]: User specified arguments under hivevar namespace.

## HDInsightHiveActivityTypePropertiesDefines
### Properties
### Additional Properties
* **Additional Properties Type**: any

## HDInsightMapReduceActivityTypeProperties
### Properties
* **arguments**: any[]: User specified arguments to HDInsightActivity.
* **className**: any (Required): Any object
* **defines**: [HDInsightMapReduceActivityTypePropertiesDefines](#hdinsightmapreduceactivitytypepropertiesdefines): Allows user to specify defines for the MapReduce job request.
* **getDebugInfo**: 'Always' | 'Failure' | 'None': The HDInsightActivityDebugInfoOption settings to use.
* **jarFilePath**: any (Required): Any object
* **jarLibs**: any[]: Jar libs.
* **jarLinkedService**: [LinkedServiceReference](#linkedservicereference): Linked service reference type.
* **storageLinkedServices**: [LinkedServiceReference](#linkedservicereference)[]: Storage linked service references.

## HDInsightMapReduceActivityTypePropertiesDefines
### Properties
### Additional Properties
* **Additional Properties Type**: any

## HDInsightPigActivityTypeProperties
### Properties
* **arguments**: any: Any object
* **defines**: [HDInsightPigActivityTypePropertiesDefines](#hdinsightpigactivitytypepropertiesdefines): Allows user to specify defines for Pig job request.
* **getDebugInfo**: 'Always' | 'Failure' | 'None': The HDInsightActivityDebugInfoOption settings to use.
* **scriptLinkedService**: [LinkedServiceReference](#linkedservicereference): Linked service reference type.
* **scriptPath**: any: Any object
* **storageLinkedServices**: [LinkedServiceReference](#linkedservicereference)[]: Storage linked service references.

## HDInsightPigActivityTypePropertiesDefines
### Properties
### Additional Properties
* **Additional Properties Type**: any

## HDInsightSparkActivityTypeProperties
### Properties
* **arguments**: any[]: The user-specified arguments to HDInsightSparkActivity.
* **className**: string: The application's Java/Spark main class.
* **entryFilePath**: any (Required): Any object
* **getDebugInfo**: 'Always' | 'Failure' | 'None': The HDInsightActivityDebugInfoOption settings to use.
* **proxyUser**: any: Any object
* **rootPath**: any (Required): Any object
* **sparkConfig**: [HDInsightSparkActivityTypePropertiesSparkConfig](#hdinsightsparkactivitytypepropertiessparkconfig): Spark configuration property.
* **sparkJobLinkedService**: [LinkedServiceReference](#linkedservicereference): Linked service reference type.

## HDInsightSparkActivityTypePropertiesSparkConfig
### Properties
### Additional Properties
* **Additional Properties Type**: any

## HDInsightStreamingActivityTypeProperties
### Properties
* **arguments**: any[]: User specified arguments to HDInsightActivity.
* **combiner**: any: Any object
* **commandEnvironment**: any[]: Command line environment values.
* **defines**: [HDInsightStreamingActivityTypePropertiesDefines](#hdinsightstreamingactivitytypepropertiesdefines): Allows user to specify defines for streaming job request.
* **fileLinkedService**: [LinkedServiceReference](#linkedservicereference): Linked service reference type.
* **filePaths**: any[] (Required): Paths to streaming job files. Can be directories.
* **getDebugInfo**: 'Always' | 'Failure' | 'None': The HDInsightActivityDebugInfoOption settings to use.
* **input**: any (Required): Any object
* **mapper**: any (Required): Any object
* **output**: any (Required): Any object
* **reducer**: any (Required): Any object
* **storageLinkedServices**: [LinkedServiceReference](#linkedservicereference)[]: Storage linked service references.

## HDInsightStreamingActivityTypePropertiesDefines
### Properties
### Additional Properties
* **Additional Properties Type**: any

## IfConditionActivityTypeProperties
### Properties
* **expression**: [Expression](#expression) (Required): Azure Data Factory expression definition.
* **ifFalseActivities**: [Activity](#activity)[]: List of activities to execute if expression is evaluated to false. This is an optional property and if not provided, the activity will exit without any action.
* **ifTrueActivities**: [Activity](#activity)[]: List of activities to execute if expression is evaluated to true. This is an optional property and if not provided, the activity will exit without any action.

## LookupActivityTypeProperties
### Properties
* **dataset**: [DatasetReference](#datasetreference) (Required): Dataset reference type.
* **firstRowOnly**: any: Any object
* **source**: [CopySource](#copysource) (Required): A copy activity source.

## SetVariableActivityTypeProperties
### Properties
* **value**: any: Any object
* **variableName**: string: Name of the variable whose value needs to be set.

## SqlServerStoredProcedureActivityTypeProperties
### Properties
* **storedProcedureName**: any (Required): Any object
* **storedProcedureParameters**: [SqlServerStoredProcedureActivityTypePropertiesStoredProcedureParameters](#sqlserverstoredprocedureactivitytypepropertiesstoredprocedureparameters): Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}".

## SqlServerStoredProcedureActivityTypePropertiesStoredProcedureParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [StoredProcedureParameter](#storedprocedureparameter)

## SwitchActivityTypeProperties
### Properties
* **cases**: [SwitchCase](#switchcase)[]: List of cases that correspond to expected values of the 'on' property. This is an optional property and if not provided, the activity will execute activities provided in defaultActivities.
* **defaultActivities**: [Activity](#activity)[]: List of activities to execute if no case condition is satisfied. This is an optional property and if not provided, the activity will exit without any action.
* **on**: [Expression](#expression) (Required): Azure Data Factory expression definition.

## SwitchCase
### Properties
* **activities**: [Activity](#activity)[]: List of activities to execute for satisfied case condition.
* **value**: string: Expected value that satisfies the expression result of the 'on' property.

## UntilActivityTypeProperties
### Properties
* **activities**: [Activity](#activity)[] (Required): List of activities to execute.
* **expression**: [Expression](#expression) (Required): Azure Data Factory expression definition.
* **timeout**: any: Any object

## ValidationActivityTypeProperties
### Properties
* **childItems**: any: Any object
* **dataset**: [DatasetReference](#datasetreference) (Required): Dataset reference type.
* **minimumSize**: any: Any object
* **sleep**: any: Any object
* **timeout**: any: Any object

## WaitActivityTypeProperties
### Properties
* **waitTimeInSeconds**: any (Required): Any object

## WebActivityTypeProperties
### Properties
* **authentication**: [WebActivityAuthentication](#webactivityauthentication): Web activity authentication properties.
* **body**: any: Any object
* **connectVia**: [IntegrationRuntimeReference](#integrationruntimereference): Integration runtime reference type.
* **datasets**: [DatasetReference](#datasetreference)[]: List of datasets passed to web endpoint.
* **headers**: any: Any object
* **linkedServices**: [LinkedServiceReference](#linkedservicereference)[]: List of linked services passed to web endpoint.
* **method**: 'DELETE' | 'GET' | 'POST' | 'PUT' (Required): The list of HTTP methods supported by a WebActivity.
* **url**: any (Required): Any object

## WebActivityAuthentication
### Properties
* **credential**: [CredentialReference](#credentialreference): Credential reference type.
* **password**: [SecretBase](#secretbase): The base definition of a secret type.
* **pfx**: [SecretBase](#secretbase): The base definition of a secret type.
* **resource**: any: Any object
* **type**: string: Web activity authentication (Basic/ClientCertificate/MSI/ServicePrincipal)
* **username**: any: Any object
* **userTenant**: any: Any object

## WebHookActivityTypeProperties
### Properties
* **authentication**: [WebActivityAuthentication](#webactivityauthentication): Web activity authentication properties.
* **body**: any: Any object
* **headers**: any: Any object
* **method**: 'POST' (Required): The list of HTTP methods supported by a WebHook activity.
* **reportStatusOnCallBack**: any: Any object
* **timeout**: string: The timeout within which the webhook should be called back. If there is no value specified, it defaults to 10 minutes. Type: string. Pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
* **url**: any (Required): Any object

## PipelineFolder
### Properties
* **name**: string: The name of the folder that this Pipeline is in.

## ParameterDefinitionSpecification
### Properties
### Additional Properties
* **Additional Properties Type**: [ParameterSpecification](#parameterspecification)

## PipelinePolicy
### Properties
* **elapsedTimeMetric**: [PipelineElapsedTimeMetricPolicy](#pipelineelapsedtimemetricpolicy): Pipeline ElapsedTime Metric Policy.

## PipelineElapsedTimeMetricPolicy
### Properties
* **duration**: any: Any object

## PipelineRunDimensions
### Properties
### Additional Properties
* **Additional Properties Type**: any

## VariableDefinitionSpecification
### Properties
### Additional Properties
* **Additional Properties Type**: [VariableSpecification](#variablespecification)

## VariableSpecification
### Properties
* **defaultValue**: any: Any object
* **type**: 'Array' | 'Bool' | 'String' (Required): Variable type.

## PrivateLinkConnectionApprovalRequest
### Properties
* **privateEndpoint**: [ArmIdWrapper](#armidwrapper) (ReadOnly): A wrapper for an ARM resource id
* **privateLinkServiceConnectionState**: [PrivateLinkConnectionState](#privatelinkconnectionstate): The state of a private link connection
* **provisioningState**: string (ReadOnly)

## ArmIdWrapper
### Properties
* **id**: string (ReadOnly)

## PrivateLinkConnectionState
### Properties
* **actionsRequired**: string: ActionsRequired for a private link connection
* **description**: string: Description of a private link connection
* **status**: string: Status of a private link connection

## Trigger
* **Discriminator**: type

### Base Properties
* **annotations**: any[]: List of tags that can be used for describing the trigger.
* **description**: string: Trigger description.
* **runtimeState**: 'Disabled' | 'Started' | 'Stopped' (ReadOnly): Enumerates possible state of Triggers.
### BlobEventsTrigger
#### Properties
* **type**: 'BlobEventsTrigger' (Required): Trigger type.
* **typeProperties**: [BlobEventsTriggerTypeProperties](#blobeventstriggertypeproperties) (Required): Blob Events Trigger properties.

### BlobTrigger
#### Properties
* **type**: 'BlobTrigger' (Required): Trigger type.
* **typeProperties**: [BlobTriggerTypeProperties](#blobtriggertypeproperties) (Required): Blob Trigger properties.

### ChainingTrigger
#### Properties
* **pipeline**: [TriggerPipelineReference](#triggerpipelinereference) (Required): Pipeline that needs to be triggered with the given parameters.
* **type**: 'ChainingTrigger' (Required): Trigger type.
* **typeProperties**: [ChainingTriggerTypeProperties](#chainingtriggertypeproperties) (Required): Chaining Trigger properties.

### CustomEventsTrigger
#### Properties
* **type**: 'CustomEventsTrigger' (Required): Trigger type.
* **typeProperties**: [CustomEventsTriggerTypeProperties](#customeventstriggertypeproperties) (Required): Custom Events Trigger properties.

### RerunTumblingWindowTrigger
#### Properties
* **type**: 'RerunTumblingWindowTrigger' (Required): Trigger type.
* **typeProperties**: [RerunTumblingWindowTriggerTypeProperties](#reruntumblingwindowtriggertypeproperties) (Required): Rerun Trigger properties.

### ScheduleTrigger
#### Properties
* **type**: 'ScheduleTrigger' (Required): Trigger type.
* **typeProperties**: [ScheduleTriggerTypeProperties](#scheduletriggertypeproperties) (Required): Schedule Trigger properties.

### TumblingWindowTrigger
#### Properties
* **pipeline**: [TriggerPipelineReference](#triggerpipelinereference) (Required): Pipeline that needs to be triggered with the given parameters.
* **type**: 'TumblingWindowTrigger' (Required): Trigger type.
* **typeProperties**: [TumblingWindowTriggerTypeProperties](#tumblingwindowtriggertypeproperties) (Required): Tumbling Window Trigger properties.


## BlobEventsTriggerTypeProperties
### Properties
* **blobPathBeginsWith**: string: The blob path must begin with the pattern provided for trigger to fire. For example, '/records/blobs/december/' will only fire the trigger for blobs in the december folder under the records container. At least one of these must be provided: blobPathBeginsWith, blobPathEndsWith.
* **blobPathEndsWith**: string: The blob path must end with the pattern provided for trigger to fire. For example, 'december/boxes.csv' will only fire the trigger for blobs named boxes in a december folder. At least one of these must be provided: blobPathBeginsWith, blobPathEndsWith.
* **events**: 'Microsoft.Storage.BlobCreated' | 'Microsoft.Storage.BlobDeleted'[] (Required): Blob event types.
* **ignoreEmptyBlobs**: bool: If set to true, blobs with zero bytes will be ignored.
* **scope**: string (Required): The ARM resource ID of the Storage Account.

## BlobTriggerTypeProperties
### Properties
* **folderPath**: string (Required): The path of the container/folder that will trigger the pipeline.
* **linkedService**: [LinkedServiceReference](#linkedservicereference) (Required): Linked service reference type.
* **maxConcurrency**: int (Required): The max number of parallel files to handle when it is triggered.

## TriggerPipelineReference
### Properties
* **parameters**: [ParameterValueSpecification](#parametervaluespecification): An object mapping parameter names to argument values.
* **pipelineReference**: [PipelineReference](#pipelinereference): Pipeline reference type.

## ParameterValueSpecification
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ChainingTriggerTypeProperties
### Properties
* **dependsOn**: [PipelineReference](#pipelinereference)[] (Required): Upstream Pipelines.
* **runDimension**: string (Required): Run Dimension property that needs to be emitted by upstream pipelines.

## CustomEventsTriggerTypeProperties
### Properties
* **events**: any[] (Required): The list of event types that cause this trigger to fire.
* **scope**: string (Required): The ARM resource ID of the Azure Event Grid Topic.
* **subjectBeginsWith**: string: The event subject must begin with the pattern provided for trigger to fire. At least one of these must be provided: subjectBeginsWith, subjectEndsWith.
* **subjectEndsWith**: string: The event subject must end with the pattern provided for trigger to fire. At least one of these must be provided: subjectBeginsWith, subjectEndsWith.

## RerunTumblingWindowTriggerTypeProperties
### Properties
* **parentTrigger**: any (Required): Any object
* **requestedEndTime**: string (Required): The end time for the time period for which restatement is initiated. Only UTC time is currently supported.
* **requestedStartTime**: string (Required): The start time for the time period for which restatement is initiated. Only UTC time is currently supported.
* **rerunConcurrency**: int (Required): The max number of parallel time windows (ready for execution) for which a rerun is triggered.

## ScheduleTriggerTypeProperties
### Properties
* **recurrence**: [ScheduleTriggerRecurrence](#scheduletriggerrecurrence) (Required): The workflow trigger recurrence.

## ScheduleTriggerRecurrence
### Properties
* **endTime**: string: The end time.
* **frequency**: 'Day' | 'Hour' | 'Minute' | 'Month' | 'NotSpecified' | 'Week' | 'Year': Enumerates possible frequency option for the schedule trigger.
* **interval**: int: The interval.
* **schedule**: [RecurrenceSchedule](#recurrenceschedule): The recurrence schedule.
* **startTime**: string: The start time.
* **timeZone**: string: The time zone.
### Additional Properties
* **Additional Properties Type**: any

## RecurrenceSchedule
### Properties
* **hours**: int[]: The hours.
* **minutes**: int[]: The minutes.
* **monthDays**: int[]: The month days.
* **monthlyOccurrences**: [RecurrenceScheduleOccurrence](#recurrencescheduleoccurrence)[]: The monthly occurrences.
* **weekDays**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[]: The days of the week.
### Additional Properties
* **Additional Properties Type**: any

## RecurrenceScheduleOccurrence
### Properties
* **day**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday': The days of the week.
* **occurrence**: int: The occurrence.
### Additional Properties
* **Additional Properties Type**: any

## TumblingWindowTriggerTypeProperties
### Properties
* **delay**: any: Any object
* **dependsOn**: [DependencyReference](#dependencyreference)[]: Triggers that this trigger depends on. Only tumbling window triggers are supported.
* **endTime**: string: The end time for the time period for the trigger during which events are fired for windows that are ready. Only UTC time is currently supported.
* **frequency**: 'Hour' | 'Minute' | 'Month' (Required): Enumerates possible frequency option for the tumbling window trigger.
* **interval**: int (Required): The interval of the time windows. The minimum interval allowed is 15 Minutes.
* **maxConcurrency**: int (Required): The max number of parallel time windows (ready for execution) for which a new run is triggered.
* **retryPolicy**: [RetryPolicy](#retrypolicy): Execution policy for an activity.
* **startTime**: string (Required): The start time for the time period for the trigger during which events are fired for windows that are ready. Only UTC time is currently supported.

## DependencyReference
* **Discriminator**: type

### Base Properties
### SelfDependencyTumblingWindowTriggerReference
#### Properties
* **offset**: string (Required): Timespan applied to the start time of a tumbling window when evaluating dependency.
* **size**: string: The size of the window when evaluating the dependency. If undefined the frequency of the tumbling window will be used.
* **type**: 'SelfDependencyTumblingWindowTriggerReference' (Required): The type of dependency reference.

### TumblingWindowTriggerDependencyReference
#### Properties
* **offset**: string: Timespan applied to the start time of a tumbling window when evaluating dependency.
* **size**: string: The size of the window when evaluating the dependency. If undefined the frequency of the tumbling window will be used.
* **type**: 'TumblingWindowTriggerDependencyReference' (Required): The type of dependency reference.


## RetryPolicy
### Properties
* **count**: any: Any object
* **intervalInSeconds**: int: Interval between retries in seconds. Default is 30.

