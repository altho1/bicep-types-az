# Microsoft.Cache @ 2020-12-01

## Resource Microsoft.Cache/redis@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RedisCreateProperties](#rediscreateproperties) (Required): Properties supplied to Create Redis operation.
* **tags**: [RedisCreateParametersTags](#rediscreateparameterstags): Resource tags.
* **type**: 'Microsoft.Cache/redis' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: A list of availability zones denoting where the resource needs to come from.

## Resource Microsoft.Cache/redis/firewallRules@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RedisFirewallRuleProperties](#redisfirewallruleproperties) (Required): Specifies a range of IP addresses permitted to connect to the cache
* **type**: 'Microsoft.Cache/redis/firewallRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Cache/redis/linkedServers@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RedisLinkedServerCreateProperties](#redislinkedservercreateproperties) (Required): Create properties for a linked server
* **type**: 'Microsoft.Cache/redis/linkedServers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Cache/redis/patchSchedules@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ScheduleEntries](#scheduleentries) (Required): List of patch schedules for a Redis cache.
* **type**: 'Microsoft.Cache/redis/patchSchedules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Cache/redis/privateEndpointConnections@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the PrivateEndpointConnectProperties.
* **type**: 'Microsoft.Cache/redis/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## RedisCreateProperties
### Properties
* **accessKeys**: [RedisAccessKeys](#redisaccesskeys) (ReadOnly): Redis cache access keys.
* **enableNonSslPort**: bool: Specifies whether the non-ssl Redis server port (6379) is enabled.
* **hostName**: string (ReadOnly): Redis host name.
* **instances**: [RedisInstanceDetails](#redisinstancedetails)[] (ReadOnly): List of the Redis instances associated with the cache
* **linkedServers**: [RedisLinkedServer](#redislinkedserver)[] (ReadOnly): List of the linked servers associated with the cache
* **minimumTlsVersion**: '1.0' | '1.1' | '1.2': Optional: requires clients to use a specified TLS version (or higher) to connect (e,g, '1.0', '1.1', '1.2')
* **port**: int (ReadOnly): Redis non-SSL port.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): List of private endpoint connection associated with the specified redis cache
* **provisioningState**: 'Creating' | 'Deleting' | 'Disabled' | 'Failed' | 'Linking' | 'Provisioning' | 'RecoveringScaleFailure' | 'Scaling' | 'Succeeded' | 'Unlinking' | 'Unprovisioning' | 'Updating' (ReadOnly): Redis instance provisioning status.
* **publicNetworkAccess**: 'Disabled' | 'Enabled': Whether or not public endpoint access is allowed for this cache.  Value is optional but if passed in, must be 'Enabled' or 'Disabled'. If 'Disabled', private endpoints are the exclusive access method. Default value is 'Enabled'
* **redisConfiguration**: [RedisCommonPropertiesRedisConfiguration](#rediscommonpropertiesredisconfiguration): All Redis Settings. Few possible keys: rdb-backup-enabled,rdb-storage-connection-string,rdb-backup-frequency,maxmemory-delta,maxmemory-policy,notify-keyspace-events,maxmemory-samples,slowlog-log-slower-than,slowlog-max-len,list-max-ziplist-entries,list-max-ziplist-value,hash-max-ziplist-entries,hash-max-ziplist-value,set-max-intset-entries,zset-max-ziplist-entries,zset-max-ziplist-value etc.
* **redisVersion**: string: Redis version. Only major version will be used in PUT/PATCH request with current valid values: (4, 6)
* **replicasPerMaster**: int: The number of replicas to be created per primary.
* **replicasPerPrimary**: int: The number of replicas to be created per primary.
* **shardCount**: int: The number of shards to be created on a Premium Cluster Cache.
* **sku**: [Sku](#sku) (Required): SKU parameters supplied to the create Redis operation.
* **sslPort**: int (ReadOnly): Redis SSL port.
* **staticIP**: string: Static IP address. Optionally, may be specified when deploying a Redis cache inside an existing Azure Virtual Network; auto assigned by default.
* **subnetId**: string: The full resource ID of a subnet in a virtual network to deploy the Redis cache in. Example format: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/Microsoft.{Network|ClassicNetwork}/VirtualNetworks/vnet1/subnets/subnet1
* **tenantSettings**: [RedisCommonPropertiesTenantSettings](#rediscommonpropertiestenantsettings): A dictionary of tenant settings

## RedisAccessKeys
### Properties
* **primaryKey**: string (ReadOnly): The current primary key that clients can use to authenticate with Redis cache.
* **secondaryKey**: string (ReadOnly): The current secondary key that clients can use to authenticate with Redis cache.

## RedisInstanceDetails
### Properties
* **isMaster**: bool (ReadOnly): Specifies whether the instance is a primary node.
* **isPrimary**: bool (ReadOnly): Specifies whether the instance is a primary node.
* **nonSslPort**: int (ReadOnly): If enableNonSslPort is true, provides Redis instance Non-SSL port.
* **shardId**: int (ReadOnly): If clustering is enabled, the Shard ID of Redis Instance
* **sslPort**: int (ReadOnly): Redis instance SSL port.
* **zone**: string (ReadOnly): If the Cache uses availability zones, specifies availability zone where this instance is located.

## RedisLinkedServer
### Properties
* **id**: string (ReadOnly): Linked server Id.

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties) (ReadOnly): Properties of the PrivateEndpointConnectProperties.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint) (ReadOnly): The Private Endpoint resource.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (ReadOnly): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' (ReadOnly): The current provisioning state.

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for Private Endpoint

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string (ReadOnly): A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string (ReadOnly): The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Pending' | 'Rejected' (ReadOnly): The private endpoint connection status.

## RedisCommonPropertiesRedisConfiguration
### Properties
* **aof-storage-connection-string-0**: string: First storage account connection string
* **aof-storage-connection-string-1**: string: Second storage account connection string
* **maxclients**: string (ReadOnly): The max clients config
* **maxfragmentationmemory-reserved**: string: Value in megabytes reserved for fragmentation per shard
* **maxmemory-delta**: string: Value in megabytes reserved for non-cache usage per shard e.g. failover.
* **maxmemory-policy**: string: The eviction strategy used when your data won't fit within its memory limit.
* **maxmemory-reserved**: string: Value in megabytes reserved for non-cache usage per shard e.g. failover.
* **rdb-backup-enabled**: string: Specifies whether the rdb backup is enabled
* **rdb-backup-frequency**: string: Specifies the frequency for creating rdb backup
* **rdb-backup-max-snapshot-count**: string: Specifies the maximum number of snapshots for rdb backup
* **rdb-storage-connection-string**: string: The storage account connection string for storing rdb file
### Additional Properties
* **Additional Properties Type**: string

## Sku
### Properties
* **capacity**: int (Required): The size of the Redis cache to deploy. Valid values: for C (Basic/Standard) family (0, 1, 2, 3, 4, 5, 6), for P (Premium) family (1, 2, 3, 4).
* **family**: 'C' | 'P' (Required): The SKU family to use. Valid values: (C, P). (C = Basic/Standard, P = Premium).
* **name**: 'Basic' | 'Premium' | 'Standard' (Required): The type of Redis cache to deploy. Valid values: (Basic, Standard, Premium)

## RedisCommonPropertiesTenantSettings
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RedisCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RedisFirewallRuleProperties
### Properties
* **endIP**: string (Required): highest IP address included in the range
* **startIP**: string (Required): lowest IP address included in the range

## RedisLinkedServerCreateProperties
### Properties
* **linkedRedisCacheId**: string (Required): Fully qualified resourceId of the linked redis cache.
* **linkedRedisCacheLocation**: string (Required): Location of the linked redis cache.
* **provisioningState**: string (ReadOnly): Terminal state of the link between primary and secondary redis cache.
* **serverRole**: 'Primary' | 'Secondary' (Required): Role of the linked server.

## ScheduleEntries
### Properties
* **scheduleEntries**: [ScheduleEntry](#scheduleentry)[] (Required): List of patch schedules for a Redis cache.

## ScheduleEntry
### Properties
* **dayOfWeek**: 'Everyday' | 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday' | 'Weekend' (Required): Day of the week when a cache can be patched.
* **maintenanceWindow**: string: ISO8601 timespan specifying how much time cache patching can take.
* **startHourUtc**: int (Required): Start hour after which cache patching can start.

