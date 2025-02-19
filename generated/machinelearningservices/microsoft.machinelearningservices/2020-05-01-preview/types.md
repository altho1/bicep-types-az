# Microsoft.MachineLearningServices @ 2020-05-01-preview

## Resource Microsoft.MachineLearningServices/workspaces@2020-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity for the resource.
* **location**: string: Specifies the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceProperties](#workspaceproperties): The properties of a machine learning workspace.
* **sku**: [Sku](#sku): Sku of the resource
* **tags**: [ResourceTags](#resourcetags): Contains resource tags defined as key/value pairs.
* **type**: 'Microsoft.MachineLearningServices/workspaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/computes@2020-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity for the resource.
* **location**: string: Specifies the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [Compute](#compute): Machine Learning compute object.
* **sku**: [Sku](#sku): Sku of the resource
* **tags**: [ResourceTags](#resourcetags): Contains resource tags defined as key/value pairs.
* **type**: 'Microsoft.MachineLearningServices/workspaces/computes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/datasets@2020-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **datasetType**: 'file' | 'tabular' (Required, WriteOnly): Specifies dataset type.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity) (ReadOnly): Identity for the resource.
* **location**: string (ReadOnly): Specifies the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **parameters**: [DatasetCreateRequestParameters](#datasetcreaterequestparameters) (Required, WriteOnly)
* **properties**: [Dataset](#dataset) (ReadOnly): Machine Learning dataset object.
* **registration**: [DatasetCreateRequestRegistration](#datasetcreaterequestregistration) (Required, WriteOnly)
* **skipValidation**: bool (WriteOnly): Skip validation that ensures data can be loaded from the dataset before registration.
* **sku**: [Sku](#sku) (ReadOnly): Sku of the resource
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Contains resource tags defined as key/value pairs.
* **timeSeries**: [DatasetCreateRequestTimeSeries](#datasetcreaterequesttimeseries) (WriteOnly)
* **type**: 'Microsoft.MachineLearningServices/workspaces/datasets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/datastores@2020-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **accountKey**: string (WriteOnly): Account Key of storage account.
* **accountName**: string (WriteOnly): The name of the storage account.
* **adlsResourceGroup**: string (WriteOnly): The resource group the ADLS store belongs to. Defaults to selected resource group.
* **adlsSubscriptionId**: string (WriteOnly): The ID of the subscription the ADLS store belongs to. Defaults to selected subscription.
* **apiVersion**: '2020-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **authorityUrl**: string (WriteOnly): Authority url used to authenticate the user.
* **clientId**: string (WriteOnly): The service principal's client/application ID.
* **clientSecret**: string (WriteOnly): The service principal's secret.
* **containerName**: string (WriteOnly): The name of the azure blob container.
* **databaseName**: string (WriteOnly): The database name.
* **dataStoreType**: 'adls' | 'adls-gen2' | 'blob' | 'dbfs' | 'file' | 'mysqldb' | 'psqldb' | 'sqldb' (Required, WriteOnly): Specifies datastore type.
* **description**: string (WriteOnly): The description of the datastore.
* **endpoint**: string (WriteOnly): The endpoint of the server.
* **enforceSSL**: bool (WriteOnly): This sets the ssl value of the server. Defaults to true if not set.
* **fileSystem**: string (WriteOnly): The file system name of the ADLS Gen2.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity) (ReadOnly): Identity for the resource.
* **includeSecret**: bool (WriteOnly): Include datastore secret in response.
* **location**: string (ReadOnly): Specifies the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **password**: string (WriteOnly): The password.
* **port**: string (WriteOnly): The port number.
* **properties**: [Datastore](#datastore) (ReadOnly): Machine Learning datastore object.
* **protocol**: string (WriteOnly): The protocol to be used
* **resourceUrl**: string (WriteOnly): Determines what operations will be performed.
* **sasToken**: string (WriteOnly): Sas Token of storage account.
* **serverName**: string (WriteOnly): The SQL/MySQL/PostgreSQL server name
* **shareName**: string (WriteOnly): The name of the file share.
* **skipValidation**: bool (WriteOnly): Skip validation that ensures data can be loaded from the dataset before registration.
* **sku**: [Sku](#sku) (ReadOnly): Sku of the resource
* **storageAccountResourceGroup**: string (WriteOnly): The resource group of the storage account. Defaults to selected resource group
* **storageAccountSubscriptionId**: string (WriteOnly): The subscription ID of the storage account. Defaults to selected subscription
* **storeName**: string (WriteOnly): The ADLS store name.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Contains resource tags defined as key/value pairs.
* **tenantId**: string (WriteOnly): The service principal Tenant ID.
* **type**: 'Microsoft.MachineLearningServices/workspaces/datastores' (ReadOnly, DeployTimeConstant): The resource type
* **userId**: string (WriteOnly): The user ID.
* **userName**: string (WriteOnly): The username of the database user.
* **workspaceSystemAssignedIdentity**: bool (WriteOnly): If set to true, datastore support data access authenticated with Workspace MSI.

## Resource Microsoft.MachineLearningServices/workspaces/linkedWorkspaces@2020-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LinkedWorkspaceProps](#linkedworkspaceprops): LinkedWorkspace specific properties.
* **type**: 'Microsoft.MachineLearningServices/workspaces/linkedWorkspaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/privateEndpointConnections@2020-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity for the resource.
* **location**: string: Specifies the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the PrivateEndpointConnectProperties.
* **sku**: [Sku](#sku): Sku of the resource
* **tags**: [ResourceTags](#resourcetags): Contains resource tags defined as key/value pairs.
* **type**: 'Microsoft.MachineLearningServices/workspaces/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/services@2020-05-01-preview
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: computeType

### Base Properties
* **apiVersion**: '2020-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **description**: string (WriteOnly): The description of the service.
* **environmentImageRequest**: [CreateServiceRequestEnvironmentImageRequest](#createservicerequestenvironmentimagerequest) (WriteOnly): The Environment, models and assets needed for inferencing.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity) (ReadOnly): Identity for the resource.
* **keys**: [CreateServiceRequestKeys](#createservicerequestkeys) (WriteOnly): The authentication keys.
* **kvTags**: [CreateServiceRequestKvTags](#createservicerequestkvtags) (WriteOnly): The service tag dictionary. Tags are mutable.
* **location**: string: The name of the Azure location/region.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreateServiceRequestProperties](#createservicerequestproperties): The service properties dictionary. Properties are immutable.
* **sku**: [Sku](#sku) (ReadOnly): Sku of the resource
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Contains resource tags defined as key/value pairs.
* **type**: 'Microsoft.MachineLearningServices/workspaces/services' (ReadOnly, DeployTimeConstant): The resource type
### ACIServiceCreateRequest
#### Properties
* **appInsightsEnabled**: bool (WriteOnly): Whether or not Application Insights is enabled.
* **authEnabled**: bool (WriteOnly): Whether or not authentication is enabled on the service.
* **cname**: string (WriteOnly): The CName for the service.
* **computeType**: 'ACI' (Required): The compute environment type for the service.
* **containerResourceRequirements**: [ContainerResourceRequirements](#containerresourcerequirements) (WriteOnly): The resource requirements for the container (cpu and memory).
* **dataCollection**: [ACIServiceCreateRequestDataCollection](#aciservicecreaterequestdatacollection) (WriteOnly): Details of the data collection options specified.
* **dnsNameLabel**: string (WriteOnly): The Dns label for the service.
* **encryptionProperties**: [ACIServiceCreateRequestEncryptionProperties](#aciservicecreaterequestencryptionproperties) (WriteOnly): The encryption properties.
* **sslCertificate**: string (WriteOnly): The public SSL certificate in PEM format to use if SSL is enabled.
* **sslEnabled**: bool (WriteOnly): Whether or not SSL is enabled.
* **sslKey**: string (WriteOnly): The public SSL key in PEM format for the certificate.
* **vnetConfiguration**: [ACIServiceCreateRequestVnetConfiguration](#aciservicecreaterequestvnetconfiguration) (WriteOnly): The virtual network configuration.

### AKSServiceCreateRequest
#### Properties
* **aadAuthEnabled**: bool (WriteOnly): Whether or not AAD authentication is enabled.
* **appInsightsEnabled**: bool (WriteOnly): Whether or not Application Insights is enabled.
* **authEnabled**: bool (WriteOnly): Whether or not authentication is enabled.
* **autoScaler**: [AKSServiceCreateRequestAutoScaler](#aksservicecreaterequestautoscaler) (WriteOnly): The auto scaler properties.
* **computeName**: string (WriteOnly): The name of the compute resource.
* **computeType**: 'AKS' (Required): The compute environment type for the service.
* **containerResourceRequirements**: [ContainerResourceRequirements](#containerresourcerequirements) (WriteOnly): The resource requirements for the container (cpu and memory).
* **dataCollection**: [AKSServiceCreateRequestDataCollection](#aksservicecreaterequestdatacollection) (WriteOnly): Details of the data collection options specified.
* **livenessProbeRequirements**: [AKSServiceCreateRequestLivenessProbeRequirements](#aksservicecreaterequestlivenessproberequirements) (WriteOnly): The liveness probe requirements.
* **maxConcurrentRequestsPerContainer**: int (WriteOnly): The maximum number of concurrent requests per container.
* **maxQueueWaitMs**: int (WriteOnly): Maximum time a request will wait in the queue (in milliseconds). After this time, the service will return 503 (Service Unavailable)
* **namespace**: string (WriteOnly): Kubernetes namespace for the service.
* **numReplicas**: int (WriteOnly): The number of replicas on the cluster.
* **scoringTimeoutMs**: int (WriteOnly): The scoring timeout in milliseconds.


## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned': The identity type.
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): dictionary containing all the user assigned identities, with resourceId of the UAI as key.

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string (ReadOnly): The clientId(aka appId) of the user assigned identity.
* **principalId**: string (ReadOnly): The principal ID of the user assigned identity.
* **tenantId**: string (ReadOnly): The tenant ID of the user assigned identity.

## WorkspaceProperties
### Properties
* **allowPublicAccessWhenBehindVnet**: bool: The flag to indicate whether to allow public access when behind VNet.
* **applicationInsights**: string: ARM id of the application insights associated with this workspace. This cannot be changed once the workspace has been created
* **containerRegistry**: string: ARM id of the container registry associated with this workspace. This cannot be changed once the workspace has been created
* **creationTime**: string (ReadOnly): The creation time of the machine learning workspace in ISO8601 format.
* **description**: string: The description of this workspace.
* **discoveryUrl**: string: Url for the discovery service to identify regional endpoints for machine learning experimentation services
* **encryption**: [EncryptionProperty](#encryptionproperty)
* **friendlyName**: string: The friendly name for this workspace. This name in mutable
* **hbiWorkspace**: bool: The flag to signal HBI data in the workspace and reduce diagnostic data collected by the service
* **imageBuildCompute**: string: The compute name for image build
* **keyVault**: string: ARM id of the key vault associated with this workspace. This cannot be changed once the workspace has been created
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): The list of private endpoint connections in the workspace.
* **privateLinkCount**: int (ReadOnly): Count of private connections in the workspace
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' (ReadOnly): The current deployment state of workspace resource. The provisioningState is to indicate states for resource provisioning.
* **serviceProvisionedResourceGroup**: string (ReadOnly): The name of the managed resource group created by workspace RP in customer subscription if the workspace is CMK workspace
* **sharedPrivateLinkResources**: [SharedPrivateLinkResource](#sharedprivatelinkresource)[]: The list of shared private link resources in this workspace.
* **storageAccount**: string: ARM id of the storage account associated with this workspace. This cannot be changed once the workspace has been created
* **workspaceId**: string (ReadOnly): The immutable id associated with this workspace.

## EncryptionProperty
### Properties
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties) (Required)
* **status**: 'Disabled' | 'Enabled' (Required): Indicates whether or not the encryption is enabled for the workspace.

## KeyVaultProperties
### Properties
* **identityClientId**: string: For future use - The client id of the identity which will be used to access key vault.
* **keyIdentifier**: string (Required): Key vault uri to access the encryption key.
* **keyVaultArmId**: string (Required): The ArmId of the keyVault where the customer owned encryption key is present.

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Specifies the resource ID.
* **identity**: [Identity](#identity): Identity for the resource.
* **location**: string: Specifies the location of the resource.
* **name**: string (ReadOnly): Specifies the name of the resource.
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the PrivateEndpointConnectProperties.
* **sku**: [Sku](#sku): Sku of the resource
* **tags**: [ResourceTags](#resourcetags): Contains resource tags defined as key/value pairs.
* **type**: string (ReadOnly): Specifies the type of the resource.

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The Private Endpoint resource.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' (ReadOnly): The current provisioning state.

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for Private Endpoint

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | 'Timeout': The private endpoint connection status.

## Sku
### Properties
* **name**: string: Name of the sku
* **tier**: string: Tier of the sku like Basic or Enterprise

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SharedPrivateLinkResource
### Properties
* **name**: string: Unique name of the private link.
* **properties**: [SharedPrivateLinkResourceProperty](#sharedprivatelinkresourceproperty): Properties of a shared private link resource.

## SharedPrivateLinkResourceProperty
### Properties
* **groupId**: string: The private link resource group id.
* **privateLinkResourceId**: string: The resource id that private link links to.
* **requestMessage**: string: Request message.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | 'Timeout': The private endpoint connection status.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Compute
* **Discriminator**: computeType

### Base Properties
* **computeLocation**: string: Location for the underlying compute
* **createdOn**: string (ReadOnly): The date and time when the compute was created.
* **description**: string: The description of the Machine Learning compute.
* **isAttachedCompute**: bool (ReadOnly): Indicating whether the compute was provisioned by user and brought from outside if true, or machine learning service provisioned it if false.
* **modifiedOn**: string (ReadOnly): The date and time when the compute was last modified.
* **provisioningErrors**: [MachineLearningServiceError](#machinelearningserviceerror)[] (ReadOnly): Errors during provisioning
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' (ReadOnly): The current deployment state of workspace resource. The provisioningState is to indicate states for resource provisioning.
* **resourceId**: string: ARM resource id of the underlying compute
### AKS
#### Properties
* **computeType**: 'AKS' (Required): The type of compute
* **properties**: [AKSProperties](#aksproperties): AKS properties

### AmlCompute
#### Properties
* **computeType**: 'AmlCompute' (Required): The type of compute
* **properties**: [AmlComputeProperties](#amlcomputeproperties): AML Compute properties

### Databricks
#### Properties
* **computeType**: 'Databricks' (Required): The type of compute
* **properties**: [DatabricksProperties](#databricksproperties)

### DataFactory
#### Properties
* **computeType**: 'DataFactory' (Required): The type of compute

### DataLakeAnalytics
#### Properties
* **computeType**: 'DataLakeAnalytics' (Required): The type of compute
* **properties**: [DataLakeAnalyticsProperties](#datalakeanalyticsproperties)

### HDInsight
#### Properties
* **computeType**: 'HDInsight' (Required): The type of compute
* **properties**: [HDInsightProperties](#hdinsightproperties)

### VirtualMachine
#### Properties
* **computeType**: 'VirtualMachine' (Required): The type of compute
* **properties**: [VirtualMachineProperties](#virtualmachineproperties)


## MachineLearningServiceError
### Properties
* **error**: [ErrorResponse](#errorresponse) (ReadOnly): Error response information.

## ErrorResponse
### Properties
* **code**: string (ReadOnly): Error code.
* **details**: [ErrorDetail](#errordetail)[] (ReadOnly): An array of error detail objects.
* **message**: string (ReadOnly): Error message.

## ErrorDetail
### Properties
* **code**: string (Required): Error code.
* **message**: string (Required): Error message.

## AKSProperties
### Properties
* **agentCount**: int: Number of agents
* **agentVMSize**: string: Agent virtual machine size
* **aksNetworkingConfiguration**: [AksNetworkingConfiguration](#aksnetworkingconfiguration): Advance configuration for AKS networking
* **clusterFqdn**: string: Cluster full qualified domain name
* **sslConfiguration**: [SslConfiguration](#sslconfiguration): The ssl configuration for scoring
* **systemServices**: [SystemService](#systemservice)[] (ReadOnly): System services

## AksNetworkingConfiguration
### Properties
* **dnsServiceIP**: string: An IP address assigned to the Kubernetes DNS service. It must be within the Kubernetes service address range specified in serviceCidr.
* **dockerBridgeCidr**: string: A CIDR notation IP range assigned to the Docker bridge network. It must not overlap with any Subnet IP ranges or the Kubernetes service address range.
* **serviceCidr**: string: A CIDR notation IP range from which to assign service cluster IPs. It must not overlap with any Subnet IP ranges.
* **subnetId**: string: Virtual network subnet resource ID the compute nodes belong to

## SslConfiguration
### Properties
* **cert**: string: Cert data
* **cname**: string: CNAME of the cert
* **key**: string: Key data
* **status**: 'Disabled' | 'Enabled': Enable or disable ssl for scoring

## SystemService
### Properties
* **publicIpAddress**: string (ReadOnly): Public IP address
* **systemServiceType**: string (ReadOnly): The type of this system service.
* **version**: string (ReadOnly): The version for this type.

## AmlComputeProperties
### Properties
* **allocationState**: 'Resizing' | 'Steady' (ReadOnly): Allocation state of the compute. Possible values are: steady - Indicates that the compute is not resizing. There are no changes to the number of compute nodes in the compute in progress. A compute enters this state when it is created and when no operations are being performed on the compute to change the number of compute nodes. resizing - Indicates that the compute is resizing; that is, compute nodes are being added to or removed from the compute.
* **allocationStateTransitionTime**: string (ReadOnly): The time at which the compute entered its current allocation state.
* **currentNodeCount**: int (ReadOnly): The number of compute nodes currently assigned to the compute.
* **errors**: [MachineLearningServiceError](#machinelearningserviceerror)[] (ReadOnly): Collection of errors encountered by various compute nodes during node setup.
* **nodeStateCounts**: [NodeStateCounts](#nodestatecounts) (ReadOnly): Counts of various compute node states on the amlCompute.
* **remoteLoginPortPublicAccess**: 'Disabled' | 'Enabled' | 'NotSpecified': State of the public SSH port. Possible values are: Disabled - Indicates that the public ssh port is closed on all nodes of the cluster. Enabled - Indicates that the public ssh port is open on all nodes of the cluster. NotSpecified - Indicates that the public ssh port is closed on all nodes of the cluster if VNet is defined, else is open all public nodes. It can be default only during cluster creation time, after creation it will be either enabled or disabled.
* **scaleSettings**: [ScaleSettings](#scalesettings): scale settings for AML Compute
* **subnet**: [ResourceId](#resourceid): Represents a resource ID. For example, for a subnet, it is the resource URL for the subnet.
* **targetNodeCount**: int (ReadOnly): The target number of compute nodes for the compute. If the allocationState is resizing, this property denotes the target node count for the ongoing resize operation. If the allocationState is steady, this property denotes the target node count for the previous resize operation.
* **userAccountCredentials**: [UserAccountCredentials](#useraccountcredentials): Settings for user account that gets created on each on the nodes of a compute.
* **vmPriority**: 'Dedicated' | 'LowPriority': Virtual Machine priority
* **vmSize**: string: Virtual Machine Size

## NodeStateCounts
### Properties
* **idleNodeCount**: int (ReadOnly): Number of compute nodes in idle state.
* **leavingNodeCount**: int (ReadOnly): Number of compute nodes which are leaving the amlCompute.
* **preemptedNodeCount**: int (ReadOnly): Number of compute nodes which are in preempted state.
* **preparingNodeCount**: int (ReadOnly): Number of compute nodes which are being prepared.
* **runningNodeCount**: int (ReadOnly): Number of compute nodes which are running jobs.
* **unusableNodeCount**: int (ReadOnly): Number of compute nodes which are in unusable state.

## ScaleSettings
### Properties
* **maxNodeCount**: int (Required): Max number of nodes to use
* **minNodeCount**: int: Min number of nodes to use
* **nodeIdleTimeBeforeScaleDown**: string: Node Idle Time before scaling down amlCompute

## ResourceId
### Properties
* **id**: string (Required): The ID of the resource

## UserAccountCredentials
### Properties
* **adminUserName**: string (Required): Name of the administrator user account which can be used to SSH to nodes.
* **adminUserPassword**: string: Password of the administrator user account.
* **adminUserSshPublicKey**: string: SSH public key of the administrator user account.

## DatabricksProperties
### Properties
* **databricksAccessToken**: string: Databricks access token

## DataLakeAnalyticsProperties
### Properties
* **dataLakeStoreAccountName**: string: DataLake Store Account Name

## HDInsightProperties
### Properties
* **address**: string: Public IP address of the master node of the cluster.
* **administratorAccount**: [VirtualMachineSshCredentials](#virtualmachinesshcredentials): Admin credentials for virtual machine
* **sshPort**: int: Port open for ssh connections on the master node of the cluster.

## VirtualMachineSshCredentials
### Properties
* **password**: string: Password of admin account
* **privateKeyData**: string: Private key data
* **publicKeyData**: string: Public key data
* **username**: string: Username of admin account

## VirtualMachineProperties
### Properties
* **address**: string: Public IP address of the virtual machine.
* **administratorAccount**: [VirtualMachineSshCredentials](#virtualmachinesshcredentials): Admin credentials for virtual machine
* **sshPort**: int: Port open for ssh connections.
* **virtualMachineSize**: string: Virtual Machine size

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DatasetCreateRequestParameters
### Properties
* **header**: 'all_files_have_same_headers' | 'combine_all_files_headers' | 'no_headers' | 'only_first_file_has_headers' (WriteOnly): Header type.
* **includePath**: bool (WriteOnly): Boolean to keep path information as column in the dataset. Defaults to False. This is useful when reading multiple files, and want to know which file a particular record originated from, or to keep useful information in file path.
* **partitionFormat**: string (WriteOnly): The partition information of each path will be extracted into columns based on the specified format. Format part '{column_name}' creates string column, and '{column_name:yyyy/MM/dd/HH/mm/ss}' creates datetime column, where 'yyyy', 'MM', 'dd', 'HH', 'mm' and 'ss' are used to extract year, month, day, hour, minute and second for the datetime type. The format should start from the position of first partition key until the end of file path. For example, given the path '../USA/2019/01/01/data.parquet' where the partition is by country/region and time, partition_format='/{CountryOrRegion}/{PartitionDate:yyyy/MM/dd}/data.csv' creates a string column 'CountryOrRegion' with the value 'USA' and a datetime column 'PartitionDate' with the value '2019-01-01
* **path**: [DatasetCreateRequestParametersPath](#datasetcreaterequestparameterspath) (WriteOnly)
* **query**: [DatasetCreateRequestParametersQuery](#datasetcreaterequestparametersquery) (WriteOnly)
* **separator**: string (WriteOnly): The separator used to split columns for 'delimited_files' sourceType.
* **sourceType**: 'delimited_files' | 'json_lines_files' | 'parquet_files' (WriteOnly): Data source type.

## DatasetCreateRequestParametersPath
### Properties
* **dataPath**: [DatasetCreateRequestParametersPathDataPath](#datasetcreaterequestparameterspathdatapath) (WriteOnly)
* **httpUrl**: string (WriteOnly): The Http URL.

## DatasetCreateRequestParametersPathDataPath
### Properties
* **datastoreName**: string (WriteOnly): The datastore name.
* **relativePath**: string (WriteOnly): Path within the datastore.

## DatasetCreateRequestParametersQuery
### Properties
* **datastoreName**: string (WriteOnly): The SQL/PostgreSQL/MySQL datastore name.
* **query**: string (WriteOnly): SQL Quey.

## Dataset
### Properties
* **createdTime**: string (ReadOnly): The dataset creation time (UTC).
* **datasetId**: string (ReadOnly): Unique Dataset identifier.
* **datasetState**: [DatasetState](#datasetstate) (ReadOnly): Dataset state
* **datasetType**: string (ReadOnly): Dataset Type.
* **defaultCompute**: string (ReadOnly): Name of the default compute to be used for any Dataset actions (such as Profile, Write).
* **description**: string (ReadOnly): Description about this dataset version.
* **etag**: string (ReadOnly): eTag description
* **isVisible**: bool (ReadOnly): Flag to hide Dataset in UI
* **latest**: [DatasetLatest](#datasetlatest) (ReadOnly): Last created Dataset definition.
* **modifiedTime**: string (ReadOnly): The dataset last modified time (UTC).
* **name**: string (ReadOnly): Unique dataset name
* **tags**: [DatasetTags](#datasettags) (ReadOnly): Tags for this dataset version.

## DatasetState
### Properties
* **deprecatedBy**: [DatasetStateDeprecatedBy](#datasetstatedeprecatedby) (ReadOnly): Reference to better Dataset or a Definition
* **etag**: string (ReadOnly): eTag description
* **state**: string (ReadOnly): Dataset state

## DatasetStateDeprecatedBy
### Properties
* **datasetId**: string (ReadOnly): Unique Dataset identifier.
* **definitionVersion**: string (ReadOnly): Definition Version

## DatasetLatest
### Properties
* **createdBy**: [UserInfo](#userinfo) (ReadOnly): User who created.
* **createdTime**: string (ReadOnly): The dataset creation time (UTC).
* **dataflow**: string (ReadOnly): Dataflow Json
* **dataPath**: [DatasetLatestDataPath](#datasetlatestdatapath) (ReadOnly): Datastore and reference to location of data such as relativePath, Sql Query and etc.
* **datasetDefinitionState**: [DatasetState](#datasetstate) (ReadOnly): Dataset state
* **datasetId**: string (ReadOnly): Unique Dataset identifier.
* **description**: string (ReadOnly): Description about the dataset.
* **etag**: string (ReadOnly): eTag description
* **fileType**: string (ReadOnly): Dataset FileType, specified by user.
* **modifiedTime**: string (ReadOnly): The dataset last modified time (UTC).
* **notes**: string (ReadOnly): Summary of Definition changes.
* **partitionFormatInPath**: bool (ReadOnly): Indicates how the source data is partitioned. This is defined to filter on a range of partitioned data before performing actions or materialization.
* **properties**: [DatasetLatestProperties](#datasetlatestproperties) (ReadOnly): Properties stores information like name of time series column for time series dataset.
* **savedDatasetId**: string (ReadOnly): Indicates the saved dataset this definition is mapping to, populated on Get.
* **tags**: [DatasetLatestTags](#datasetlatesttags) (ReadOnly): Tags associated with the dataset.
* **telemetryInfo**: [DatasetLatestTelemetryInfo](#datasetlatesttelemetryinfo) (ReadOnly): Telemetry information about the dataset including information like which service the dataset was created from.
* **useDescriptionTagsFromDefinition**: bool (ReadOnly): Whether to use description and tags from the definition level as opposed to dataset level (old behavior).
* **versionId**: string (ReadOnly): An identifier uniquely identifies a definition change.

## UserInfo
### Properties
* **userAltSecId**: string (ReadOnly): A user alternate sec id. This represents the user in a different identity provider system Eg.1:live.com:puid
* **userIdp**: string (ReadOnly): A user identity provider. Eg live.com
* **userIss**: string (ReadOnly): The issuer which issued the token for this user.
* **userName**: string (ReadOnly): A user's full name or a service principal's app ID.
* **userObjectId**: string (ReadOnly): A user or service principal's object ID..
* **userPuId**: string (ReadOnly): A user or service principal's PuID.
* **userTenantId**: string (ReadOnly): A user or service principal's tenant ID.

## DatasetLatestDataPath
### Properties
* **additionalProperties**: [DatasetLatestDataPathAdditionalProperties](#datasetlatestdatapathadditionalproperties) (ReadOnly): Additional Properties.
* **azureFilePath**: string (ReadOnly): Azure path for Azure Blob or File
* **datastoreName**: string (ReadOnly): Data store Name
* **httpUrl**: string (ReadOnly): HTTP URL.
* **partitionFormat**: string (ReadOnly): Specify the partition format of path. Defaults to None.
* **partitionFormatIgnoreError**: bool (ReadOnly): Whether or not to ignore unmatched path.
* **paths**: string[] (ReadOnly): List of files expanded from a file GLOB specified
* **relativePath**: string (ReadOnly): Relative path in the data store
* **sqlDataPath**: [DatasetLatestDataPathSqlDataPath](#datasetlatestdatapathsqldatapath) (ReadOnly): Sql Query/Table/Stored Procedure details.

## DatasetLatestDataPathAdditionalProperties
### Properties
### Additional Properties
* **Additional Properties Type**: any

## DatasetLatestDataPathSqlDataPath
### Properties
* **queryTimeout**: int (ReadOnly): SQL query timeout. Unit in seconds.
* **sqlQuery**: string (ReadOnly): SQL query
* **sqlStoredProcedureName**: string (ReadOnly): SQL storedProcedure name
* **sqlTableName**: string (ReadOnly): SQL table name

## DatasetLatestProperties
### Properties
### Additional Properties
* **Additional Properties Type**: any

## DatasetLatestTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DatasetLatestTelemetryInfo
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DatasetTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DatasetCreateRequestRegistration
### Properties
* **description**: string (WriteOnly): The description for the dataset.
* **name**: string (WriteOnly): The name of the dataset.
* **tags**: [DatasetCreateRequestRegistrationTags](#datasetcreaterequestregistrationtags) (WriteOnly): Tags associated with the dataset.

## DatasetCreateRequestRegistrationTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DatasetCreateRequestTimeSeries
### Properties
* **coarseGrainTimestamp**: string (WriteOnly): Column name to be used as CoarseGrainTimestamp. Can only be used if 'fineGrainTimestamp' is specified and cannot be same as 'fineGrainTimestamp'.
* **fineGrainTimestamp**: string (WriteOnly): Column name to be used as FineGrainTimestamp

## Datastore
### Properties
* **azureDataLakeSection**: [AzureDataLakeSection](#azuredatalakesection) (ReadOnly): Data Specific to azure data lake.
* **azureMySqlSection**: [AzureMySqlSection](#azuremysqlsection) (ReadOnly): Data specific to azure MySQL.
* **azurePostgreSqlSection**: [AzurePostgreSqlSection](#azurepostgresqlsection) (ReadOnly): Data specific to azure PostgreSQL.
* **azureSqlDatabaseSection**: [AzureSqlDatabaseSection](#azuresqldatabasesection) (ReadOnly): Data specific to azure SQL database.
* **azureStorageSection**: [AzureStorageSection](#azurestoragesection) (ReadOnly): Data specific to azure storage.
* **createdBy**: [UserInfo](#userinfo) (ReadOnly): User who created.
* **createdTime**: string (ReadOnly): The date and time when the datastore was created.
* **dataStoreType**: 'AzureBlob' | 'AzureDataLake' | 'AzureDataLakeGen2' | 'AzureFile' | 'AzureMySql' | 'AzurePostgreSql' | 'AzureSqlDatabase' | 'DBFS' (ReadOnly): The datastore type.
* **description**: string (ReadOnly): Description of the datastore.
* **glusterFsSection**: [GlusterFsSection](#glusterfssection) (ReadOnly): Data specific to GlusterFS.
* **hasBeenValidated**: bool (ReadOnly): A read only property that denotes whether the service datastore has been validated with credentials.
* **linkedInfo**: [LinkedInfo](#linkedinfo) (ReadOnly): Info about origin if it is linked.
* **modifiedBy**: [UserInfo](#userinfo) (ReadOnly): User who created.
* **modifiedTime**: string (ReadOnly): The date and time when the datastore was last modified.
* **name**: string (ReadOnly): Name of the datastore.
* **tags**: [DatastoreTags](#datastoretags) (ReadOnly): Tags for this datastore.

## AzureDataLakeSection
### Properties
* **authorityUrl**: string (ReadOnly): The authority URL used for authentication.
* **certificate**: string (ReadOnly): The content of the certificate used for authentication.
* **clientId**: string (ReadOnly): The Client ID/Application ID
* **clientSecret**: string (ReadOnly): The client secret.
* **credentialType**: 'None' | 'ServicePrincipal' (ReadOnly): The Azure Data Lake credential type.
* **isCertAuth**: bool (ReadOnly): Is it using certificate to authenticate. If false then use client secret.
* **resourceGroup**: string (ReadOnly): Resource Group.
* **resourceUri**: string (ReadOnly): The resource the service principal/app has access to.
* **serviceDataAccessAuthIdentity**: 'None' | 'WorkspaceSystemAssignedIdentity' (ReadOnly): Indicates which identity to use to authenticate service data access to customer's storage.
* **storeName**: string (ReadOnly): The Azure Data Lake store name.
* **subscriptionId**: string (ReadOnly): Subscription ID.
* **tenantId**: string (ReadOnly): The ID of the tenant the service principal/app belongs to.
* **thumbprint**: string (ReadOnly): The thumbprint of the certificate above.

## AzureMySqlSection
### Properties
* **authorityUrl**: string (ReadOnly): The authority URL used for authentication.
* **certificate**: string (ReadOnly): The content of the certificate used for authentication.
* **clientId**: string (ReadOnly): The Client ID/Application ID
* **clientSecret**: string (ReadOnly): The client secret.
* **credentialType**: 'None' | 'ServicePrincipal' | 'SqlAuthentication' (ReadOnly): Sql Authentication type.
* **databaseName**: string (ReadOnly): The Azure SQL database name.
* **endpoint**: string (ReadOnly): The server host endpoint.
* **isCertAuth**: bool (ReadOnly): Is it using certificate to authenticate. If false then use client secret.
* **portNumber**: string (ReadOnly): / The Azure SQL port number.
* **resourceGroup**: string (ReadOnly): Resource Group.
* **resourceUri**: string (ReadOnly): The resource the service principal/app has access to.
* **serverName**: string (ReadOnly): The Azure SQL server name.
* **serviceDataAccessAuthIdentity**: 'None' | 'WorkspaceSystemAssignedIdentity' (ReadOnly): Indicates which identity to use to authenticate service data access to customer's storage.
* **subscriptionId**: string (ReadOnly): Subscription ID.
* **tenantId**: string (ReadOnly): The ID of the tenant the service principal/app belongs to.
* **thumbprint**: string (ReadOnly): The thumbprint of the certificate above.
* **userId**: string (ReadOnly): The Azure SQL user id.
* **userPassword**: string (ReadOnly): The Azure SQL user password.

## AzurePostgreSqlSection
### Properties
* **authorityUrl**: string (ReadOnly): The authority URL used for authentication.
* **certificate**: string (ReadOnly): The content of the certificate used for authentication.
* **clientId**: string (ReadOnly): The Client ID/Application ID
* **clientSecret**: string (ReadOnly): The client secret.
* **credentialType**: 'None' | 'ServicePrincipal' | 'SqlAuthentication' (ReadOnly): Sql Authentication type.
* **databaseName**: string (ReadOnly): The Azure SQL database name.
* **enableSsl**: bool (ReadOnly): Indicates SSL requirement of Azure Postgresql server.
* **endpoint**: string (ReadOnly): The server host endpoint.
* **isCertAuth**: bool (ReadOnly): Is it using certificate to authenticate. If false then use client secret.
* **portNumber**: string (ReadOnly): / The Azure SQL port number.
* **resourceGroup**: string (ReadOnly): Resource Group.
* **resourceUri**: string (ReadOnly): The resource the service principal/app has access to.
* **serverName**: string (ReadOnly): The Azure SQL server name.
* **serviceDataAccessAuthIdentity**: 'None' | 'WorkspaceSystemAssignedIdentity' (ReadOnly): Indicates which identity to use to authenticate service data access to customer's storage.
* **subscriptionId**: string (ReadOnly): Subscription ID.
* **tenantId**: string (ReadOnly): The ID of the tenant the service principal/app belongs to.
* **thumbprint**: string (ReadOnly): The thumbprint of the certificate above.
* **userId**: string (ReadOnly): The Azure SQL user id.
* **userPassword**: string (ReadOnly): The Azure SQL user password.

## AzureSqlDatabaseSection
### Properties
* **authorityUrl**: string (ReadOnly): The authority URL used for authentication.
* **certificate**: string (ReadOnly): The content of the certificate used for authentication.
* **clientId**: string (ReadOnly): The Client ID/Application ID
* **clientSecret**: string (ReadOnly): The client secret.
* **credentialType**: 'None' | 'ServicePrincipal' | 'SqlAuthentication' (ReadOnly): Sql Authentication type.
* **databaseName**: string (ReadOnly): The Azure SQL database name.
* **endpoint**: string (ReadOnly): The server host endpoint.
* **isCertAuth**: bool (ReadOnly): Is it using certificate to authenticate. If false then use client secret.
* **portNumber**: string (ReadOnly): / The Azure SQL port number.
* **resourceGroup**: string (ReadOnly): Resource Group.
* **resourceUri**: string (ReadOnly): The resource the service principal/app has access to.
* **serverName**: string (ReadOnly): The Azure SQL server name.
* **serviceDataAccessAuthIdentity**: 'None' | 'WorkspaceSystemAssignedIdentity' (ReadOnly): Indicates which identity to use to authenticate service data access to customer's storage.
* **subscriptionId**: string (ReadOnly): Subscription ID.
* **tenantId**: string (ReadOnly): The ID of the tenant the service principal/app belongs to.
* **thumbprint**: string (ReadOnly): The thumbprint of the certificate above.
* **userId**: string (ReadOnly): The Azure SQL user id.
* **userPassword**: string (ReadOnly): The Azure SQL user password.

## AzureStorageSection
### Properties
* **accountKey**: string (ReadOnly): Storage Account Key (Deprecated).
* **accountName**: string (ReadOnly): Storage Account Name.
* **areWorkspaceManagedIdentitiesAllowed**: bool (ReadOnly): Indicate if we are using Workspace ManagedIdentities/MSI token (Deprecated).
* **blobCacheTimeout**: int (ReadOnly): If this is an "DataStoreType.AzureBlob", the length of time (in seconds) to cache files locally after they are accessed (downloaded).
* **clientCredentials**: [ClientCredentials](#clientcredentials) (ReadOnly): Service principal credential when credential type is "AzureStorageCredentialTypes.ClientCredentials".
* **containerName**: string (ReadOnly): The storage container name.
* **credential**: string (ReadOnly): The credential.
* **credentialType**: 'AccountKey' | 'ClientCredentials' | 'None' | 'Sas' (ReadOnly): The credential type.
* **endpoint**: string (ReadOnly): The host of the container.
* **isSas**: bool (ReadOnly): Indicate if we are using SAS token or Account Key (Deprecated).
* **protocol**: string (ReadOnly): The protocol to use. Defaults to https.
* **resourceGroup**: string (ReadOnly): Resource Group.
* **sasToken**: string (ReadOnly): SAS Token for the container (Deprecated).
* **serviceDataAccessAuthIdentity**: 'None' | 'WorkspaceSystemAssignedIdentity' (ReadOnly): Indicates which identity to use to authenticate service data access to customer's storage.
* **subscriptionId**: string (ReadOnly): Subscription ID.

## ClientCredentials
### Properties
* **authorityUrl**: string (ReadOnly): The authority URL used for authentication.
* **certificate**: string (ReadOnly): The content of the certificate used for authentication.
* **clientId**: string (ReadOnly): The Client ID/Application ID
* **clientSecret**: string (ReadOnly): The client secret.
* **isCertAuth**: bool (ReadOnly): Is it using certificate to authenticate. If false then use client secret.
* **resourceGroup**: string (ReadOnly): Resource Group.
* **resourceUri**: string (ReadOnly): The resource the service principal/app has access to.
* **serviceDataAccessAuthIdentity**: 'None' | 'WorkspaceSystemAssignedIdentity' (ReadOnly): Indicates which identity to use to authenticate service data access to customer's storage.
* **subscriptionId**: string (ReadOnly): Subscription ID.
* **tenantId**: string (ReadOnly): The ID of the tenant the service principal/app belongs to.
* **thumbprint**: string (ReadOnly): The thumbprint of the certificate above.

## GlusterFsSection
### Properties
* **serverAddress**: string (ReadOnly): The server address of one of the servers that hosts the GlusterFS. Can be either the IP address or server name.
* **volumeName**: string (ReadOnly): The name of the created GlusterFS volume.

## LinkedInfo
### Properties
* **linkedId**: string (ReadOnly): LinkedId id.
* **linkedResourceName**: string (ReadOnly): Linked resource name.
* **origin**: 'Synapse' (ReadOnly): Datastore origin

## DatastoreTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## LinkedWorkspaceProps
### Properties
* **linkedWorkspaceResourceId**: string: ResourceId of the link target of the linked workspace.
* **userAssignedIdentityResourceId**: string: ResourceId of the user assigned identity for the linked workspace.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CreateServiceRequestEnvironmentImageRequest
### Properties
* **assets**: [ImageAsset](#imageasset)[] (WriteOnly): The list of assets.
* **driverProgram**: string (WriteOnly): The name of the driver file.
* **environment**: [EnvironmentImageRequestEnvironment](#environmentimagerequestenvironment) (WriteOnly): The details of the AZURE ML environment.
* **environmentReference**: [EnvironmentImageRequestEnvironmentReference](#environmentimagerequestenvironmentreference) (WriteOnly): The unique identifying details of the AZURE ML environment.
* **modelIds**: string[] (WriteOnly): The list of model Ids.
* **models**: [Model](#model)[] (WriteOnly): The list of models.

## ImageAsset
### Properties
* **id**: string (WriteOnly): The Asset Id.
* **mimeType**: string (WriteOnly): The mime type.
* **unpack**: bool (WriteOnly): Whether the Asset is unpacked.
* **url**: string (WriteOnly): The Url of the Asset.

## EnvironmentImageRequestEnvironment
### Properties
* **docker**: [ModelEnvironmentDefinitionDocker](#modelenvironmentdefinitiondocker) (WriteOnly): The definition of a Docker container.
* **environmentVariables**: [ModelEnvironmentDefinitionEnvironmentVariables](#modelenvironmentdefinitionenvironmentvariables) (WriteOnly): Definition of environment variables to be defined in the environment.
* **inferencingStackVersion**: string (WriteOnly): The inferencing stack version added to the image. To avoid adding an inferencing stack, do not set this value. Valid values: "latest".
* **name**: string (WriteOnly): The name of the environment.
* **python**: [ModelEnvironmentDefinitionPython](#modelenvironmentdefinitionpython) (WriteOnly): Settings for a Python environment.
* **r**: [ModelEnvironmentDefinitionR](#modelenvironmentdefinitionr) (WriteOnly): Settings for a R environment.
* **spark**: [ModelEnvironmentDefinitionSpark](#modelenvironmentdefinitionspark) (WriteOnly): The configuration for a Spark environment.
* **version**: string (WriteOnly): The environment version.

## ModelEnvironmentDefinitionDocker
### Properties
* **baseDockerfile**: string (WriteOnly): Base Dockerfile used for Docker-based runs. Mutually exclusive with BaseImage.
* **baseImage**: string (WriteOnly): Base image used for Docker-based runs. Mutually exclusive with BaseDockerfile.
* **baseImageRegistry**: [ModelDockerSectionBaseImageRegistry](#modeldockersectionbaseimageregistry) (WriteOnly): Image registry that contains the base image.

## ModelDockerSectionBaseImageRegistry
### Properties
* **address**: string (WriteOnly)
* **password**: string (WriteOnly)
* **username**: string (WriteOnly)

## ModelEnvironmentDefinitionEnvironmentVariables
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ModelEnvironmentDefinitionPython
### Properties
* **baseCondaEnvironment**: string (WriteOnly)
* **condaDependencies**: any (WriteOnly): Any object
* **interpreterPath**: string (WriteOnly): The python interpreter path to use if an environment build is not required. The path specified gets used to call the user script.
* **userManagedDependencies**: bool (WriteOnly): True means that AzureML reuses an existing python environment; False means that AzureML will create a python environment based on the Conda dependencies specification.

## ModelEnvironmentDefinitionR
### Properties
* **bioConductorPackages**: string[] (WriteOnly): The packages from Bioconductor.
* **cranPackages**: [RCranPackage](#rcranpackage)[] (WriteOnly): The CRAN packages to use.
* **customUrlPackages**: string[] (WriteOnly): The packages from custom urls.
* **gitHubPackages**: [RGitHubPackage](#rgithubpackage)[] (WriteOnly): The packages directly from GitHub.
* **rscriptPath**: string (WriteOnly): The Rscript path to use if an environment build is not required.
The path specified gets used to call the user script.
* **rVersion**: string (WriteOnly): The version of R to be installed
* **snapshotDate**: string (WriteOnly): Date of MRAN snapshot to use in YYYY-MM-DD format, e.g. "2019-04-17"
* **userManaged**: bool (WriteOnly): Indicates whether the environment is managed by user or by AzureML.

## RCranPackage
### Properties
* **name**: string (WriteOnly): The package name.
* **repository**: string (WriteOnly): The repository name.

## RGitHubPackage
### Properties
* **authToken**: string (WriteOnly): Personal access token to install from a private repo
* **repository**: string (WriteOnly): Repository address in the format username/repo[/subdir][@ref|#pull].

## ModelEnvironmentDefinitionSpark
### Properties
* **packages**: [SparkMavenPackage](#sparkmavenpackage)[] (WriteOnly): The Spark packages to use.
* **precachePackages**: bool (WriteOnly): Whether to precache the packages.
* **repositories**: string[] (WriteOnly): The list of spark repositories.

## SparkMavenPackage
### Properties
* **artifact**: string (WriteOnly)
* **group**: string (WriteOnly)
* **version**: string (WriteOnly)

## EnvironmentImageRequestEnvironmentReference
### Properties
* **name**: string (WriteOnly): Name of the environment.
* **version**: string (WriteOnly): Version of the environment.

## Model
### Properties
* **createdTime**: string (WriteOnly): The Model creation time (UTC).
* **datasets**: [DatasetReference](#datasetreference)[] (WriteOnly): The list of datasets associated with the model.
* **derivedModelIds**: string[] (WriteOnly): Models derived from this model
* **description**: string (WriteOnly): The Model description text.
* **experimentName**: string (WriteOnly): The name of the experiment where this model was created.
* **framework**: string (WriteOnly): The Model framework.
* **frameworkVersion**: string (WriteOnly): The Model framework version.
* **id**: string (WriteOnly): The Model Id.
* **kvTags**: [ModelKvTags](#modelkvtags) (WriteOnly): The Model tag dictionary. Items are mutable.
* **mimeType**: string (Required, WriteOnly): The MIME type of Model content. For more details about MIME type, please open https://www.iana.org/assignments/media-types/media-types.xhtml
* **modifiedTime**: string (WriteOnly): The Model last modified time (UTC).
* **name**: string (Required, WriteOnly): The Model name.
* **parentModelId**: string (WriteOnly): The Parent Model Id.
* **properties**: [ModelProperties](#modelproperties) (WriteOnly): The Model property dictionary. Properties are immutable.
* **resourceRequirements**: [ContainerResourceRequirements](#containerresourcerequirements) (WriteOnly): The resource requirements for the container (cpu and memory).
* **runId**: string (WriteOnly): The RunId that created this model.
* **sampleInputData**: string (WriteOnly): Sample Input Data for the Model. A reference to a dataset in the workspace in the format aml://dataset/{datasetId}
* **sampleOutputData**: string (WriteOnly): Sample Output Data for the Model. A reference to a dataset in the workspace in the format aml://dataset/{datasetId}
* **unpack**: bool (WriteOnly): Indicates whether we need to unpack the Model during docker Image creation.
* **url**: string (Required, WriteOnly): The URL of the Model. Usually a SAS URL.
* **version**: int (WriteOnly): The Model version assigned by Model Management Service.

## DatasetReference
### Properties
* **id**: string (WriteOnly): The id of the dataset reference.
* **name**: string (WriteOnly): The name of the dataset reference.

## ModelKvTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ModelProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ContainerResourceRequirements
### Properties
* **cpu**: int (WriteOnly): The number of CPU cores on the container.
* **fpga**: int (WriteOnly): The number of FPGA PCIE devices exposed to the container. Must be multiple of 2.
* **gpu**: int (WriteOnly): The number of GPU cores in the container.
* **memoryInGB**: int (WriteOnly): The amount of memory on the container in GB.

## CreateServiceRequestKeys
### Properties
* **primaryKey**: string (WriteOnly): The primary key.
* **secondaryKey**: string (WriteOnly): The secondary key.

## CreateServiceRequestKvTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CreateServiceRequestProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ACIServiceCreateRequestDataCollection
### Properties
* **eventHubEnabled**: bool (WriteOnly): Option for enabling/disabling Event Hub.
* **storageEnabled**: bool (WriteOnly): Option for enabling/disabling storage.

## ACIServiceCreateRequestEncryptionProperties
### Properties
* **keyName**: string (Required, WriteOnly): Encryption Key name
* **keyVersion**: string (Required, WriteOnly): Encryption Key Version
* **vaultBaseUrl**: string (Required, WriteOnly): vault base Url

## ACIServiceCreateRequestVnetConfiguration
### Properties
* **subnetName**: string (WriteOnly): The name of the virtual network subnet.
* **vnetName**: string (WriteOnly): The name of the virtual network.

## AKSServiceCreateRequestAutoScaler
### Properties
* **autoscaleEnabled**: bool (WriteOnly): Option to enable/disable auto scaling.
* **maxReplicas**: int (WriteOnly): The maximum number of replicas in the cluster.
* **minReplicas**: int (WriteOnly): The minimum number of replicas to scale down to.
* **refreshPeriodInSeconds**: int (WriteOnly): The amount of seconds to wait between auto scale updates.
* **targetUtilization**: int (WriteOnly): The target utilization percentage to use for determining whether to scale the cluster.

## AKSServiceCreateRequestDataCollection
### Properties
* **eventHubEnabled**: bool (WriteOnly): Option for enabling/disabling Event Hub.
* **storageEnabled**: bool (WriteOnly): Option for enabling/disabling storage.

## AKSServiceCreateRequestLivenessProbeRequirements
### Properties
* **failureThreshold**: int (WriteOnly): The number of failures to allow before returning an unhealthy status.
* **initialDelaySeconds**: int (WriteOnly): The delay before the first probe in seconds.
* **periodSeconds**: int (WriteOnly): The length of time between probes in seconds.
* **successThreshold**: int (WriteOnly): The number of successful probes before returning a healthy status.
* **timeoutSeconds**: int (WriteOnly): The probe timeout in seconds.

