# Microsoft.Cache @ 2021-08-01

## Resource Microsoft.Cache/redisEnterprise@2021-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterProperties](#clusterproperties): Properties of RedisEnterprise clusters, as opposed to general resource properties like location, tags
* **sku**: [Sku](#sku) (Required): SKU parameters supplied to the create RedisEnterprise operation.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Cache/redisEnterprise' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: The Availability Zones where this cluster will be deployed.

## Resource Microsoft.Cache/redisEnterprise/databases@2021-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseProperties](#databaseproperties): Properties of RedisEnterprise databases, as opposed to general resource properties like location, tags
* **type**: 'Microsoft.Cache/redisEnterprise/databases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Cache/redisEnterprise/privateEndpointConnections@2021-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the PrivateEndpointConnectProperties.
* **type**: 'Microsoft.Cache/redisEnterprise/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## ClusterProperties
### Properties
* **hostName**: string (ReadOnly): DNS name of the cluster endpoint
* **minimumTlsVersion**: '1.0' | '1.1' | '1.2': The minimum TLS version for the cluster to support, e.g. '1.2'
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): List of private endpoint connections associated with the specified RedisEnterprise cluster
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): Current provisioning status
* **redisVersion**: string (ReadOnly): Version of redis the cluster supports, e.g. '6'
* **resourceState**: 'CreateFailed' | 'Creating' | 'DeleteFailed' | 'Deleting' | 'DisableFailed' | 'Disabled' | 'Disabling' | 'EnableFailed' | 'Enabling' | 'Running' | 'UpdateFailed' | 'Updating' (ReadOnly): Current resource status

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the PrivateEndpointConnectProperties.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

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
* **status**: 'Approved' | 'Pending' | 'Rejected': The private endpoint connection status.

## Sku
### Properties
* **capacity**: int: The size of the RedisEnterprise cluster. Defaults to 2 or 3 depending on SKU. Valid values are (2, 4, 6, ...) for Enterprise SKUs and (3, 9, 15, ...) for Flash SKUs.
* **name**: 'EnterpriseFlash_F1500' | 'EnterpriseFlash_F300' | 'EnterpriseFlash_F700' | 'Enterprise_E10' | 'Enterprise_E100' | 'Enterprise_E20' | 'Enterprise_E50' (Required): The type of RedisEnterprise cluster to deploy. Possible values: (Enterprise_E10, EnterpriseFlash_F300 etc.)

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DatabaseProperties
### Properties
* **clientProtocol**: 'Encrypted' | 'Plaintext': Specifies whether redis clients can connect using TLS-encrypted or plaintext redis protocols. Default is TLS-encrypted.
* **clusteringPolicy**: 'EnterpriseCluster' | 'OSSCluster': Clustering policy - default is OSSCluster. Specified at create time.
* **evictionPolicy**: 'AllKeysLFU' | 'AllKeysLRU' | 'AllKeysRandom' | 'NoEviction' | 'VolatileLFU' | 'VolatileLRU' | 'VolatileRandom' | 'VolatileTTL': Redis eviction policy - default is VolatileLRU
* **modules**: [Module](#module)[]: Optional set of redis modules to enable in this database - modules can only be added at creation time.
* **persistence**: [Persistence](#persistence): Persistence-related configuration for the RedisEnterprise database
* **port**: int: TCP port of the database endpoint. Specified at create time. Defaults to an available port.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): Current provisioning status
* **resourceState**: 'CreateFailed' | 'Creating' | 'DeleteFailed' | 'Deleting' | 'DisableFailed' | 'Disabled' | 'Disabling' | 'EnableFailed' | 'Enabling' | 'Running' | 'UpdateFailed' | 'Updating' (ReadOnly): Current resource status

## Module
### Properties
* **args**: string: Configuration options for the module, e.g. 'ERROR_RATE 0.00 INITIAL_SIZE 400'.
* **name**: string (Required): The name of the module, e.g. 'RedisBloom', 'RediSearch', 'RedisTimeSeries'
* **version**: string (ReadOnly): The version of the module, e.g. '1.0'.

## Persistence
### Properties
* **aofEnabled**: bool: Sets whether AOF is enabled.
* **aofFrequency**: '1s' | 'always': Sets the frequency at which data is written to disk.
* **rdbEnabled**: bool: Sets whether RDB is enabled.
* **rdbFrequency**: '12h' | '1h' | '6h': Sets the frequency at which a snapshot of the database is created.

