# Microsoft.Batch @ 2019-04-01

## Resource Microsoft.Batch/batchAccounts@2019-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The region in which to create the account.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BatchAccountCreateProperties](#batchaccountcreateproperties): The properties of a Batch account.
* **tags**: [BatchAccountCreateParametersTags](#batchaccountcreateparameterstags): The user-specified tags associated with the account.
* **type**: 'Microsoft.Batch/batchAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Batch/batchAccounts/applications@2019-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): The ETag of the resource, used for concurrency statements.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationProperties](#applicationproperties): The properties associated with the Application.
* **type**: 'Microsoft.Batch/batchAccounts/applications' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Batch/batchAccounts/applications/versions@2019-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): The ETag of the resource, used for concurrency statements.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationPackageProperties](#applicationpackageproperties): Properties of an application package
* **type**: 'Microsoft.Batch/batchAccounts/applications/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Batch/batchAccounts/certificates@2019-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): The ETag of the resource, used for concurrency statements.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CertificateCreateOrUpdateProperties](#certificatecreateorupdateproperties): Certificate properties for create operations
* **type**: 'Microsoft.Batch/batchAccounts/certificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Batch/batchAccounts/pools@2019-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): The ETag of the resource, used for concurrency statements.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PoolProperties](#poolproperties): Pool properties.
* **type**: 'Microsoft.Batch/batchAccounts/pools' (ReadOnly, DeployTimeConstant): The resource type

## BatchAccountCreateProperties
### Properties
* **accountEndpoint**: string (ReadOnly): The account endpoint used to interact with the Batch service.
* **activeJobAndJobScheduleQuota**: int (ReadOnly): The active job and job schedule quota for the Batch account.
* **autoStorage**: [AutoStorageBaseProperties](#autostoragebaseproperties): The properties related to the auto-storage account.
* **dedicatedCoreQuota**: int (ReadOnly): For accounts with PoolAllocationMode set to UserSubscription, quota is managed on the subscription so this value is not returned.
* **dedicatedCoreQuotaPerVMFamily**: [VirtualMachineFamilyCoreQuota](#virtualmachinefamilycorequota)[] (ReadOnly): A list of the dedicated core quota per Virtual Machine family for the Batch account. For accounts with PoolAllocationMode set to UserSubscription, quota is managed on the subscription so this value is not returned.
* **dedicatedCoreQuotaPerVMFamilyEnforced**: bool (ReadOnly): Batch is transitioning its core quota system for dedicated cores to be enforced per Virtual Machine family. During this transitional phase, the dedicated core quota per Virtual Machine family may not yet be enforced. If this flag is false, dedicated core quota is enforced via the old dedicatedCoreQuota property on the account and does not consider Virtual Machine family. If this flag is true, dedicated core quota is enforced via the dedicatedCoreQuotaPerVMFamily property on the account, and the old dedicatedCoreQuota does not apply.
* **keyVaultReference**: [KeyVaultReference](#keyvaultreference): Identifies the Azure key vault associated with a Batch account.
* **lowPriorityCoreQuota**: int (ReadOnly): For accounts with PoolAllocationMode set to UserSubscription, quota is managed on the subscription so this value is not returned.
* **poolAllocationMode**: 'BatchService' | 'UserSubscription': The allocation mode for creating pools in the Batch account.
* **poolQuota**: int (ReadOnly): The pool quota for the Batch account.
* **provisioningState**: 'Cancelled' | 'Creating' | 'Deleting' | 'Failed' | 'Invalid' | 'Succeeded' (ReadOnly): The provisioned state of the resource

## AutoStorageBaseProperties
### Properties
* **lastKeySync**: string (ReadOnly): The UTC time at which storage keys were last synchronized with the Batch account.
* **storageAccountId**: string (Required): The resource ID of the storage account to be used for auto-storage account.

## VirtualMachineFamilyCoreQuota
### Properties
* **coreQuota**: int (ReadOnly): The core quota for the VM family for the Batch account.
* **name**: string (ReadOnly): The Virtual Machine family name.

## KeyVaultReference
### Properties
* **id**: string (Required): The resource ID of the Azure key vault associated with the Batch account.
* **url**: string (Required): The URL of the Azure key vault associated with the Batch account.

## BatchAccountCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApplicationProperties
### Properties
* **allowUpdates**: bool: A value indicating whether packages within the application may be overwritten using the same version string.
* **defaultVersion**: string: The package to use if a client requests the application but does not specify a version. This property can only be set to the name of an existing package.
* **displayName**: string: The display name for the application.

## ApplicationPackageProperties
### Properties
* **format**: string (ReadOnly): The format of the application package, if the package is active.
* **lastActivationTime**: string (ReadOnly): The time at which the package was last activated, if the package is active.
* **state**: 'Active' | 'Pending' (ReadOnly): The current state of the application package.
* **storageUrl**: string (ReadOnly): The URL for the application package in Azure Storage.
* **storageUrlExpiry**: string (ReadOnly): The UTC time at which the Azure Storage URL will expire.

## CertificateCreateOrUpdateProperties
### Properties
* **data**: string (Required, WriteOnly): The maximum size is 10KB.
* **deleteCertificateError**: [DeleteCertificateError](#deletecertificateerror) (ReadOnly): An error response from the Batch service.
* **format**: 'Cer' | 'Pfx': The format of the certificate - either Pfx or Cer. If omitted, the default is Pfx.
* **password**: string (WriteOnly): This is required if the certificate format is pfx and must be omitted if the certificate format is cer.
* **previousProvisioningState**: 'Deleting' | 'Failed' | 'Succeeded' (ReadOnly)
* **previousProvisioningStateTransitionTime**: string (ReadOnly): The time at which the certificate entered its previous state.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' (ReadOnly)
* **provisioningStateTransitionTime**: string (ReadOnly): The time at which the certificate entered its current state.
* **publicData**: string (ReadOnly): The public key of the certificate.
* **thumbprint**: string: This must match the thumbprint from the name.
* **thumbprintAlgorithm**: string: This must match the first portion of the certificate name. Currently required to be 'SHA1'.

## DeleteCertificateError
### Properties
* **code**: string (ReadOnly): An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
* **details**: [DeleteCertificateError](#deletecertificateerror)[] (ReadOnly): A list of additional details about the error.
* **message**: string (ReadOnly): A message describing the error, intended to be suitable for display in a user interface.
* **target**: string (ReadOnly): The target of the particular error. For example, the name of the property in error.

## PoolProperties
### Properties
* **allocationState**: 'Resizing' | 'Steady' | 'Stopping' (ReadOnly): Whether the pool is resizing.
* **allocationStateTransitionTime**: string (ReadOnly): The time at which the pool entered its current allocation state.
* **applicationLicenses**: string[]: The list of application licenses must be a subset of available Batch service application licenses. If a license is requested which is not supported, pool creation will fail.
* **applicationPackages**: [ApplicationPackageReference](#applicationpackagereference)[]: Changes to application package references affect all new compute nodes joining the pool, but do not affect compute nodes that are already in the pool until they are rebooted or reimaged. There is a maximum of 10 application package references on any given pool.
* **autoScaleRun**: [AutoScaleRun](#autoscalerun) (ReadOnly): The results and errors from an execution of a pool autoscale formula.
* **certificates**: [CertificateReference](#certificatereference)[]: For Windows compute nodes, the Batch service installs the certificates to the specified certificate store and location. For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory.
* **creationTime**: string (ReadOnly): The creation time of the pool.
* **currentDedicatedNodes**: int (ReadOnly): The number of compute nodes currently in the pool.
* **currentLowPriorityNodes**: int (ReadOnly): The number of low priority compute nodes currently in the pool.
* **deploymentConfiguration**: [DeploymentConfiguration](#deploymentconfiguration): Deployment configuration properties.
* **displayName**: string: The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024.
* **interNodeCommunication**: 'Disabled' | 'Enabled': This imposes restrictions on which nodes can be assigned to the pool. Enabling this value can reduce the chance of the requested number of nodes to be allocated in the pool. If not specified, this value defaults to 'Disabled'.
* **lastModified**: string (ReadOnly): This is the last time at which the pool level data, such as the targetDedicatedNodes or autoScaleSettings, changed. It does not factor in node-level changes such as a compute node changing state.
* **maxTasksPerNode**: int: The default value is 1. The maximum value is the smaller of 4 times the number of cores of the vmSize of the pool or 256.
* **metadata**: [MetadataItem](#metadataitem)[]: The Batch service does not assign any meaning to metadata; it is solely for the use of user code.
* **networkConfiguration**: [NetworkConfiguration](#networkconfiguration): The network configuration for a pool.
* **provisioningState**: 'Deleting' | 'Succeeded' (ReadOnly): The current state of the pool.
* **provisioningStateTransitionTime**: string (ReadOnly): The time at which the pool entered its current state.
* **resizeOperationStatus**: [ResizeOperationStatus](#resizeoperationstatus) (ReadOnly): Describes either the current operation (if the pool AllocationState is Resizing) or the previously completed operation (if the AllocationState is Steady).
* **scaleSettings**: [ScaleSettings](#scalesettings): Defines the desired size of the pool. This can either be 'fixedScale' where the requested targetDedicatedNodes is specified, or 'autoScale' which defines a formula which is periodically reevaluated. If this property is not specified, the pool will have a fixed scale with 0 targetDedicatedNodes.
* **startTask**: [StartTask](#starttask): In some cases the start task may be re-run even though the node was not rebooted. Due to this, start tasks should be idempotent and exit gracefully if the setup they're performing has already been done. Special care should be taken to avoid start tasks which create breakaway process or install/launch services from the start task working directory, as this will block Batch from being able to re-run the start task.
* **taskSchedulingPolicy**: [TaskSchedulingPolicy](#taskschedulingpolicy): Specifies how tasks should be distributed across compute nodes.
* **userAccounts**: [UserAccount](#useraccount)[]: The list of user accounts to be created on each node in the pool.
* **vmSize**: string: For information about available sizes of virtual machines for Cloud Services pools (pools created with cloudServiceConfiguration), see Sizes for Cloud Services (https://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/). Batch supports all Cloud Services VM sizes except ExtraSmall. For information about available VM sizes for pools using images from the Virtual Machines Marketplace (pools created with virtualMachineConfiguration) see Sizes for Virtual Machines (Linux) (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/) or Sizes for Virtual Machines (Windows) (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/). Batch supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).

## ApplicationPackageReference
### Properties
* **id**: string (Required): The ID of the application package to install. This must be inside the same batch account as the pool. This can either be a reference to a specific version or the default version if one exists.
* **version**: string: If this is omitted, and no default version is specified for this application, the request fails with the error code InvalidApplicationPackageReferences. If you are calling the REST API directly, the HTTP status code is 409.

## AutoScaleRun
### Properties
* **error**: [AutoScaleRunError](#autoscalerunerror): An error that occurred when autoscaling a pool.
* **evaluationTime**: string (Required): The time at which the autoscale formula was last evaluated.
* **results**: string: Each variable value is returned in the form $variable=value, and variables are separated by semicolons.

## AutoScaleRunError
### Properties
* **code**: string (Required): An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
* **details**: [AutoScaleRunError](#autoscalerunerror)[]: Additional details about the error.
* **message**: string (Required): A message describing the error, intended to be suitable for display in a user interface.

## CertificateReference
### Properties
* **id**: string (Required): The fully qualified ID of the certificate to install on the pool. This must be inside the same batch account as the pool.
* **storeLocation**: 'CurrentUser' | 'LocalMachine': The default value is currentUser. This property is applicable only for pools configured with Windows nodes (that is, created with cloudServiceConfiguration, or with virtualMachineConfiguration using a Windows image reference). For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory.
* **storeName**: string: This property is applicable only for pools configured with Windows nodes (that is, created with cloudServiceConfiguration, or with virtualMachineConfiguration using a Windows image reference). Common store names include: My, Root, CA, Trust, Disallowed, TrustedPeople, TrustedPublisher, AuthRoot, AddressBook, but any custom store name can also be used. The default value is My.
* **visibility**: 'RemoteUser' | 'StartTask' | 'Task'[]: Which user accounts on the compute node should have access to the private data of the certificate.

## DeploymentConfiguration
### Properties
* **cloudServiceConfiguration**: [CloudServiceConfiguration](#cloudserviceconfiguration): The configuration for nodes in a pool based on the Azure Cloud Services platform.
* **virtualMachineConfiguration**: [VirtualMachineConfiguration](#virtualmachineconfiguration): The configuration for compute nodes in a pool based on the Azure Virtual Machines infrastructure.

## CloudServiceConfiguration
### Properties
* **osFamily**: string (Required): Possible values are: 2 - OS Family 2, equivalent to Windows Server 2008 R2 SP1. 3 - OS Family 3, equivalent to Windows Server 2012. 4 - OS Family 4, equivalent to Windows Server 2012 R2. 5 - OS Family 5, equivalent to Windows Server 2016. 6 - OS Family 6, equivalent to Windows Server 2019. For more information, see Azure Guest OS Releases (https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases).
* **osVersion**: string: The default value is * which specifies the latest operating system version for the specified OS family.

## VirtualMachineConfiguration
### Properties
* **containerConfiguration**: [ContainerConfiguration](#containerconfiguration): The configuration for container-enabled pools.
* **dataDisks**: [DataDisk](#datadisk)[]: This property must be specified if the compute nodes in the pool need to have empty data disks attached to them.
* **imageReference**: [ImageReference](#imagereference) (Required): A reference to an Azure Virtual Machines Marketplace image or the Azure Image resource of a custom Virtual Machine. To get the list of all imageReferences verified by Azure Batch, see the 'List supported node agent SKUs' operation.
* **licenseType**: string: This only applies to images that contain the Windows operating system, and should only be used when you hold valid on-premises licenses for the nodes which will be deployed. If omitted, no on-premises licensing discount is applied. Values are:

 Windows_Server - The on-premises license is for Windows Server.
 Windows_Client - The on-premises license is for Windows Client.
* **nodeAgentSkuId**: string (Required): The Batch node agent is a program that runs on each node in the pool, and provides the command-and-control interface between the node and the Batch service. There are different implementations of the node agent, known as SKUs, for different operating systems. You must specify a node agent SKU which matches the selected image reference. To get the list of supported node agent SKUs along with their list of verified image references, see the 'List supported node agent SKUs' operation.
* **windowsConfiguration**: [WindowsConfiguration](#windowsconfiguration): Windows operating system settings to apply to the virtual machine.

## ContainerConfiguration
### Properties
* **containerImageNames**: string[]: This is the full image reference, as would be specified to "docker pull". An image will be sourced from the default Docker registry unless the image is fully qualified with an alternative registry.
* **containerRegistries**: [ContainerRegistry](#containerregistry)[]: If any images must be downloaded from a private registry which requires credentials, then those credentials must be provided here.
* **type**: 'DockerCompatible' (Required): The container technology to be used.

## ContainerRegistry
### Properties
* **password**: string (Required): The password to log into the registry server.
* **registryServer**: string: If omitted, the default is "docker.io".
* **username**: string (Required): The user name to log into the registry server.

## DataDisk
### Properties
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite': The type of caching to enable for the disk.
* **diskSizeGB**: int (Required): The initial disk size in GB when creating new data disk.
* **lun**: int (Required): The lun is used to uniquely identify each data disk. If attaching multiple disks, each should have a distinct lun.
* **storageAccountType**: 'Premium_LRS' | 'Standard_LRS': The storage account type for use in creating data disks.

## ImageReference
### Properties
* **id**: string: This property is mutually exclusive with other properties. The virtual machine image must be in the same region and subscription as the Azure Batch account. For information about the firewall settings for Batch node agent to communicate with Batch service see https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration .
* **offer**: string: For example, UbuntuServer or WindowsServer.
* **publisher**: string: For example, Canonical or MicrosoftWindowsServer.
* **sku**: string: For example, 14.04.0-LTS or 2012-R2-Datacenter.
* **version**: string: A value of 'latest' can be specified to select the latest version of an image. If omitted, the default is 'latest'.

## WindowsConfiguration
### Properties
* **enableAutomaticUpdates**: bool: If omitted, the default value is true.

## MetadataItem
### Properties
* **name**: string (Required): The name of the metadata item.
* **value**: string (Required): The value of the metadata item.

## NetworkConfiguration
### Properties
* **endpointConfiguration**: [PoolEndpointConfiguration](#poolendpointconfiguration): The endpoint configuration for a pool.
* **subnetId**: string: The virtual network must be in the same region and subscription as the Azure Batch account. The specified subnet should have enough free IP addresses to accommodate the number of nodes in the pool. If the subnet doesn't have enough free IP addresses, the pool will partially allocate compute nodes, and a resize error will occur. The 'MicrosoftAzureBatch' service principal must have the 'Classic Virtual Machine Contributor' Role-Based Access Control (RBAC) role for the specified VNet. The specified subnet must allow communication from the Azure Batch service to be able to schedule tasks on the compute nodes. This can be verified by checking if the specified VNet has any associated Network Security Groups (NSG). If communication to the compute nodes in the specified subnet is denied by an NSG, then the Batch service will set the state of the compute nodes to unusable. For pools created via virtualMachineConfiguration the Batch account must have poolAllocationMode userSubscription in order to use a VNet. If the specified VNet has any associated Network Security Groups (NSG), then a few reserved system ports must be enabled for inbound communication. For pools created with a virtual machine configuration, enable ports 29876 and 29877, as well as port 22 for Linux and port 3389 for Windows. For pools created with a cloud service configuration, enable ports 10100, 20100, and 30100. Also enable outbound connections to Azure Storage on port 443. For more details see: https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration

## PoolEndpointConfiguration
### Properties
* **inboundNatPools**: [InboundNatPool](#inboundnatpool)[] (Required): The maximum number of inbound NAT pools per Batch pool is 5. If the maximum number of inbound NAT pools is exceeded the request fails with HTTP status code 400.

## InboundNatPool
### Properties
* **backendPort**: int (Required): This must be unique within a Batch pool. Acceptable values are between 1 and 65535 except for 22, 3389, 29876 and 29877 as these are reserved. If any reserved values are provided the request fails with HTTP status code 400.
* **frontendPortRangeEnd**: int (Required): Acceptable values range between 1 and 65534 except ports from 50000 to 55000 which are reserved by the Batch service. All ranges within a pool must be distinct and cannot overlap. If any reserved or overlapping values are provided the request fails with HTTP status code 400.
* **frontendPortRangeStart**: int (Required): Acceptable values range between 1 and 65534 except ports from 50000 to 55000 which are reserved. All ranges within a pool must be distinct and cannot overlap. If any reserved or overlapping values are provided the request fails with HTTP status code 400.
* **name**: string (Required): The name must be unique within a Batch pool, can contain letters, numbers, underscores, periods, and hyphens. Names must start with a letter or number, must end with a letter, number, or underscore, and cannot exceed 77 characters.  If any invalid values are provided the request fails with HTTP status code 400.
* **networkSecurityGroupRules**: [NetworkSecurityGroupRule](#networksecuritygrouprule)[]: The maximum number of rules that can be specified across all the endpoints on a Batch pool is 25. If no network security group rules are specified, a default rule will be created to allow inbound access to the specified backendPort. If the maximum number of network security group rules is exceeded the request fails with HTTP status code 400.
* **protocol**: 'TCP' | 'UDP' (Required): The protocol of the endpoint.

## NetworkSecurityGroupRule
### Properties
* **access**: 'Allow' | 'Deny' (Required): The action that should be taken for a specified IP address, subnet range or tag.
* **priority**: int (Required): Priorities within a pool must be unique and are evaluated in order of priority. The lower the number the higher the priority. For example, rules could be specified with order numbers of 150, 250, and 350. The rule with the order number of 150 takes precedence over the rule that has an order of 250. Allowed priorities are 150 to 3500. If any reserved or duplicate values are provided the request fails with HTTP status code 400.
* **sourceAddressPrefix**: string (Required): Valid values are a single IP address (i.e. 10.10.10.10), IP subnet (i.e. 192.168.1.0/24), default tag, or * (for all addresses).  If any other values are provided the request fails with HTTP status code 400.

## ResizeOperationStatus
### Properties
* **errors**: [ResizeError](#resizeerror)[]: This property is set only if an error occurred during the last pool resize, and only when the pool allocationState is Steady.
* **nodeDeallocationOption**: 'Requeue' | 'RetainedData' | 'TaskCompletion' | 'Terminate': Determines what to do with a node and its running task(s) after it has been selected for deallocation.
* **resizeTimeout**: string: The default value is 15 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service returns an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request).
* **startTime**: string: The time when this resize operation was started.
* **targetDedicatedNodes**: int: The desired number of dedicated compute nodes in the pool.
* **targetLowPriorityNodes**: int: The desired number of low-priority compute nodes in the pool.

## ResizeError
### Properties
* **code**: string (Required): An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
* **details**: [ResizeError](#resizeerror)[]: Additional details about the error.
* **message**: string (Required): A message describing the error, intended to be suitable for display in a user interface.

## ScaleSettings
### Properties
* **autoScale**: [AutoScaleSettings](#autoscalesettings): AutoScale settings for the pool.
* **fixedScale**: [FixedScaleSettings](#fixedscalesettings): Fixed scale settings for the pool.

## AutoScaleSettings
### Properties
* **evaluationInterval**: string: If omitted, the default value is 15 minutes (PT15M).
* **formula**: string (Required): A formula for the desired number of compute nodes in the pool.

## FixedScaleSettings
### Properties
* **nodeDeallocationOption**: 'Requeue' | 'RetainedData' | 'TaskCompletion' | 'Terminate': Determines what to do with a node and its running task(s) after it has been selected for deallocation.
* **resizeTimeout**: string: The default value is 15 minutes. Timeout values use ISO 8601 format. For example, use PT10M for 10 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service rejects the request with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request).
* **targetDedicatedNodes**: int: At least one of targetDedicatedNodes, targetLowPriority nodes must be set.
* **targetLowPriorityNodes**: int: At least one of targetDedicatedNodes, targetLowPriority nodes must be set.

## StartTask
### Properties
* **commandLine**: string: The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. Required if any other properties of the startTask are specified.
* **containerSettings**: [TaskContainerSettings](#taskcontainersettings): The container settings for a task.
* **environmentSettings**: [EnvironmentSetting](#environmentsetting)[]: A list of environment variable settings for the start task.
* **maxTaskRetryCount**: int: The Batch service retries a task if its exit code is nonzero. Note that this value specifically controls the number of retries. The Batch service will try the task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries the task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry the task. If the maximum retry count is -1, the Batch service retries the task without limit.
* **resourceFiles**: [ResourceFile](#resourcefile)[]: A list of files that the Batch service will download to the compute node before running the command line.
* **userIdentity**: [UserIdentity](#useridentity): Specify either the userName or autoUser property, but not both.
* **waitForSuccess**: bool: If true and the start task fails on a compute node, the Batch service retries the start task up to its maximum retry count (maxTaskRetryCount). If the task has still not completed successfully after all retries, then the Batch service marks the compute node unusable, and will not schedule tasks to it. This condition can be detected via the node state and scheduling error detail. If false, the Batch service will not wait for the start task to complete. In this case, other tasks can start executing on the compute node while the start task is still running; and even if the start task fails, new tasks will continue to be scheduled on the node. The default is false.

## TaskContainerSettings
### Properties
* **containerRunOptions**: string: These additional options are supplied as arguments to the "docker create" command, in addition to those controlled by the Batch Service.
* **imageName**: string (Required): This is the full image reference, as would be specified to "docker pull". If no tag is provided as part of the image name, the tag ":latest" is used as a default.
* **registry**: [ContainerRegistry](#containerregistry): A private container registry.

## EnvironmentSetting
### Properties
* **name**: string (Required): The name of the environment variable.
* **value**: string: The value of the environment variable.

## ResourceFile
### Properties
* **autoStorageContainerName**: string: The autoStorageContainerName, storageContainerUrl and httpUrl properties are mutually exclusive and one of them must be specified.
* **blobPrefix**: string: The property is valid only when autoStorageContainerName or storageContainerUrl is used. This prefix can be a partial filename or a subdirectory. If a prefix is not specified, all the files in the container will be downloaded.
* **fileMode**: string: This property applies only to files being downloaded to Linux compute nodes. It will be ignored if it is specified for a resourceFile which will be downloaded to a Windows node. If this property is not specified for a Linux node, then a default value of 0770 is applied to the file.
* **filePath**: string: If the httpUrl property is specified, the filePath is required and describes the path which the file will be downloaded to, including the filename. Otherwise, if the autoStorageContainerName or storageContainerUrl property is specified, filePath is optional and is the directory to download the files to. In the case where filePath is used as a directory, any directory structure already associated with the input data will be retained in full and appended to the specified filePath directory. The specified relative path cannot break out of the task's working directory (for example by using '..').
* **httpUrl**: string: The autoStorageContainerName, storageContainerUrl and httpUrl properties are mutually exclusive and one of them must be specified. If the URL is Azure Blob Storage, it must be readable using anonymous access; that is, the Batch service does not present any credentials when downloading the blob. There are two ways to get such a URL for a blob in Azure storage: include a Shared Access Signature (SAS) granting read permissions on the blob, or set the ACL for the blob or its container to allow public access.
* **storageContainerUrl**: string: The autoStorageContainerName, storageContainerUrl and httpUrl properties are mutually exclusive and one of them must be specified. This URL must be readable and listable using anonymous access; that is, the Batch service does not present any credentials when downloading the blob. There are two ways to get such a URL for a blob in Azure storage: include a Shared Access Signature (SAS) granting read and list permissions on the blob, or set the ACL for the blob or its container to allow public access.

## UserIdentity
### Properties
* **autoUser**: [AutoUserSpecification](#autouserspecification): Specifies the parameters for the auto user that runs a task on the Batch service.
* **userName**: string: The userName and autoUser properties are mutually exclusive; you must specify one but not both.

## AutoUserSpecification
### Properties
* **elevationLevel**: 'Admin' | 'NonAdmin': The elevation level of the user.
* **scope**: 'Pool' | 'Task': The default value is task.

## TaskSchedulingPolicy
### Properties
* **nodeFillType**: 'Pack' | 'Spread' (Required): How tasks should be distributed across compute nodes.

## UserAccount
### Properties
* **elevationLevel**: 'Admin' | 'NonAdmin': The elevation level of the user.
* **linuxUserConfiguration**: [LinuxUserConfiguration](#linuxuserconfiguration): Properties used to create a user account on a Linux node.
* **name**: string (Required): The name of the user account.
* **password**: string (Required): The password for the user account.
* **windowsUserConfiguration**: [WindowsUserConfiguration](#windowsuserconfiguration): Properties used to create a user account on a Windows node.

## LinuxUserConfiguration
### Properties
* **gid**: int: The uid and gid properties must be specified together or not at all. If not specified the underlying operating system picks the gid.
* **sshPrivateKey**: string: The private key must not be password protected. The private key is used to automatically configure asymmetric-key based authentication for SSH between nodes in a Linux pool when the pool's enableInterNodeCommunication property is true (it is ignored if enableInterNodeCommunication is false). It does this by placing the key pair into the user's .ssh directory. If not specified, password-less SSH is not configured between nodes (no modification of the user's .ssh directory is done).
* **uid**: int: The uid and gid properties must be specified together or not at all. If not specified the underlying operating system picks the uid.

## WindowsUserConfiguration
### Properties
* **loginMode**: 'Batch' | 'Interactive': Specifies login mode for the user. The default value for VirtualMachineConfiguration pools is interactive mode and for CloudServiceConfiguration pools is batch mode.

