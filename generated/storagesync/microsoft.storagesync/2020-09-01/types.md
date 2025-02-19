# Microsoft.StorageSync @ 2020-09-01

## Resource Microsoft.StorageSync/storageSyncServices@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Required. Gets or sets the location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo region is specified on update, the request will succeed.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageSyncServiceCreateParametersProperties](#storagesyncservicecreateparametersproperties): StorageSyncService Properties object.
* **tags**: [StorageSyncServiceCreateParametersTags](#storagesyncservicecreateparameterstags): Gets or sets a list of key value pairs that describe the resource. These tags can be used for viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key with a length no greater than 128 characters and a value with a length no greater than 256 characters.
* **type**: 'Microsoft.StorageSync/storageSyncServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageSync/storageSyncServices/privateEndpointConnections@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the PrivateEndpointConnectProperties.
* **type**: 'Microsoft.StorageSync/storageSyncServices/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageSync/storageSyncServices/registeredServers@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RegisteredServerCreateParametersProperties](#registeredservercreateparametersproperties): RegisteredServer Create Properties object.
* **type**: 'Microsoft.StorageSync/storageSyncServices/registeredServers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageSync/storageSyncServices/syncGroups@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: any: Any object
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CloudEndpointCreateParametersProperties](#cloudendpointcreateparametersproperties): CloudEndpoint Properties object.
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerEndpointCreateParametersProperties](#serverendpointcreateparametersproperties): ServerEndpoint Properties object.
* **type**: 'Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## StorageSyncServiceCreateParametersProperties
### Properties
* **incomingTrafficPolicy**: 'AllowAllTraffic' | 'AllowVirtualNetworksOnly': Type of the Incoming Traffic Policy
* **lastOperationName**: string (ReadOnly): Resource Last Operation Name
* **lastWorkflowId**: string (ReadOnly): StorageSyncService lastWorkflowId
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): List of private endpoint connection associated with the specified storage sync service
* **provisioningState**: string (ReadOnly): StorageSyncService Provisioning State
* **storageSyncServiceStatus**: int (ReadOnly): Storage Sync service status.
* **storageSyncServiceUid**: string (ReadOnly): Storage Sync service Uid

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

## StorageSyncServiceCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RegisteredServerCreateParametersProperties
### Properties
* **agentVersion**: string: Registered Server Agent Version
* **agentVersionExpirationDate**: string (ReadOnly): Registered Server Agent Version Expiration Date
* **agentVersionStatus**: 'Blocked' | 'Expired' | 'NearExpiry' | 'Ok' (ReadOnly): Type of the registered server agent version status
* **clusterId**: string: Registered Server clusterId
* **clusterName**: string: Registered Server clusterName
* **discoveryEndpointUri**: string (ReadOnly): Resource discoveryEndpointUri
* **friendlyName**: string: Friendly Name
* **lastHeartBeat**: string: Registered Server last heart beat
* **lastOperationName**: string (ReadOnly): Resource Last Operation Name
* **lastWorkflowId**: string (ReadOnly): Registered Server lastWorkflowId
* **managementEndpointUri**: string (ReadOnly): Management Endpoint Uri
* **monitoringConfiguration**: string (ReadOnly): Monitoring Configuration
* **monitoringEndpointUri**: string (ReadOnly): Telemetry Endpoint Uri
* **provisioningState**: string (ReadOnly): Registered Server Provisioning State
* **resourceLocation**: string (ReadOnly): Resource Location
* **serverCertificate**: string: Registered Server Certificate
* **serverId**: string: Registered Server serverId
* **serverManagementErrorCode**: int (ReadOnly): Registered Server Management Error Code
* **serverName**: string (ReadOnly): Server name
* **serverOSVersion**: string: Registered Server OS Version
* **serverRole**: string: Registered Server serverRole
* **serviceLocation**: string (ReadOnly): Service Location
* **storageSyncServiceUid**: string (ReadOnly): Registered Server storageSyncServiceUid

## CloudEndpointCreateParametersProperties
### Properties
* **azureFileShareName**: string: Azure file share name
* **backupEnabled**: string (ReadOnly): Backup Enabled
* **changeEnumerationStatus**: [CloudEndpointChangeEnumerationStatus](#cloudendpointchangeenumerationstatus) (ReadOnly): Cloud endpoint change enumeration status object
* **friendlyName**: string: Friendly Name
* **lastOperationName**: string (ReadOnly): Resource Last Operation Name
* **lastWorkflowId**: string (ReadOnly): CloudEndpoint lastWorkflowId
* **partnershipId**: string (ReadOnly): Partnership Id
* **provisioningState**: string (ReadOnly): CloudEndpoint Provisioning State
* **storageAccountResourceId**: string: Storage Account Resource Id
* **storageAccountTenantId**: string: Storage Account Tenant Id

## CloudEndpointChangeEnumerationStatus
### Properties
* **activity**: [CloudEndpointChangeEnumerationActivity](#cloudendpointchangeenumerationactivity) (ReadOnly): Cloud endpoint change enumeration activity object
* **lastEnumerationStatus**: [CloudEndpointLastChangeEnumerationStatus](#cloudendpointlastchangeenumerationstatus) (ReadOnly): Cloud endpoint change enumeration status object
* **lastUpdatedTimestamp**: string (ReadOnly): Last updated timestamp

## CloudEndpointChangeEnumerationActivity
### Properties
* **deletesProgressPercent**: int (ReadOnly): Progress percentage for processing deletes. This is done separately from the rest of the enumeration run
* **lastUpdatedTimestamp**: string (ReadOnly): Last updated timestamp
* **minutesRemaining**: int (ReadOnly): Estimate of time remaining for the enumeration run
* **operationState**: 'EnumerationInProgress' | 'InitialEnumerationInProgress' (ReadOnly): State of change enumeration activity
* **processedDirectoriesCount**: int (ReadOnly): Count of directories processed
* **processedFilesCount**: int (ReadOnly): Count of files processed
* **progressPercent**: int (ReadOnly): Progress percentage for change enumeration run, excluding processing of deletes
* **startedTimestamp**: string (ReadOnly): Timestamp when change enumeration started
* **statusCode**: int (ReadOnly): When non-zero, indicates an issue that is delaying change enumeration
* **totalCountsState**: 'Calculating' | 'Final' (ReadOnly): State of the total counts of change enumeration activity
* **totalDirectoriesCount**: int (ReadOnly): Total count of directories enumerated
* **totalFilesCount**: int (ReadOnly): Total count of files enumerated
* **totalSizeBytes**: int (ReadOnly): Total enumerated size in bytes

## CloudEndpointLastChangeEnumerationStatus
### Properties
* **completedTimestamp**: string (ReadOnly): Timestamp when change enumeration completed
* **namespaceDirectoriesCount**: int (ReadOnly): Count of directories in the namespace
* **namespaceFilesCount**: int (ReadOnly): Count of files in the namespace
* **namespaceSizeBytes**: int (ReadOnly): Namespace size in bytes
* **nextRunTimestamp**: string (ReadOnly): Timestamp of when change enumeration is expected to run again
* **startedTimestamp**: string (ReadOnly): Timestamp when change enumeration started

## ServerEndpointCreateParametersProperties
### Properties
* **cloudTiering**: 'off' | 'on': Type of the Feature Status
* **cloudTieringStatus**: [ServerEndpointCloudTieringStatus](#serverendpointcloudtieringstatus) (ReadOnly): Server endpoint cloud tiering status object.
* **friendlyName**: string: Friendly Name
* **initialDownloadPolicy**: 'AvoidTieredFiles' | 'NamespaceOnly' | 'NamespaceThenModifiedFiles': Policy for how namespace and files are recalled during FastDr
* **initialUploadPolicy**: 'Merge' | 'ServerAuthoritative': Policy for how the initial upload sync session is performed.
* **lastOperationName**: string (ReadOnly): Resource Last Operation Name
* **lastWorkflowId**: string (ReadOnly): ServerEndpoint lastWorkflowId
* **localCacheMode**: 'DownloadNewAndModifiedFiles' | 'UpdateLocallyCachedFiles': Policy for enabling follow-the-sun business models: link local cache to cloud behavior to pre-populate before local access.
* **offlineDataTransfer**: 'off' | 'on': Type of the Feature Status
* **offlineDataTransferShareName**: string: Offline data transfer share name
* **offlineDataTransferStorageAccountResourceId**: string (ReadOnly): Offline data transfer storage account resource ID
* **offlineDataTransferStorageAccountTenantId**: string (ReadOnly): Offline data transfer storage account tenant ID
* **provisioningState**: string (ReadOnly): ServerEndpoint Provisioning State
* **recallStatus**: [ServerEndpointRecallStatus](#serverendpointrecallstatus) (ReadOnly): Server endpoint recall status object.
* **serverLocalPath**: string: Server folder used for data synchronization
* **serverName**: string (ReadOnly): Server name
* **serverResourceId**: string: Arm resource identifier.
* **syncStatus**: [ServerEndpointSyncStatus](#serverendpointsyncstatus) (ReadOnly): Server Endpoint sync status
* **tierFilesOlderThanDays**: int: Tier files older than days.
* **volumeFreeSpacePercent**: int: Level of free space to be maintained by Cloud Tiering if it is enabled.

## ServerEndpointCloudTieringStatus
### Properties
* **cachePerformance**: [CloudTieringCachePerformance](#cloudtieringcacheperformance) (ReadOnly): Server endpoint cloud tiering status object.
* **datePolicyStatus**: [CloudTieringDatePolicyStatus](#cloudtieringdatepolicystatus) (ReadOnly): Status of the date policy
* **filesNotTiering**: [CloudTieringFilesNotTiering](#cloudtieringfilesnottiering) (ReadOnly): Server endpoint cloud tiering status object.
* **health**: 'Error' | 'Healthy' | 'Unavailable' (ReadOnly): Type of the server endpoint health state
* **healthLastUpdatedTimestamp**: string (ReadOnly): The last updated timestamp of health state
* **lastCloudTieringResult**: int (ReadOnly): Last cloud tiering result (HResult)
* **lastSuccessTimestamp**: string (ReadOnly): Last cloud tiering success timestamp
* **lastUpdatedTimestamp**: string (ReadOnly): Last updated timestamp
* **spaceSavings**: [CloudTieringSpaceSavings](#cloudtieringspacesavings) (ReadOnly): Server endpoint cloud tiering status object.
* **volumeFreeSpacePolicyStatus**: [CloudTieringVolumeFreeSpacePolicyStatus](#cloudtieringvolumefreespacepolicystatus) (ReadOnly): Status of the volume free space policy

## CloudTieringCachePerformance
### Properties
* **cacheHitBytes**: int (ReadOnly): Count of bytes that were served from the local server
* **cacheHitBytesPercent**: int (ReadOnly): Percentage of total bytes (hit + miss) that were served from the local server
* **cacheMissBytes**: int (ReadOnly): Count of bytes that were served from the cloud
* **lastUpdatedTimestamp**: string (ReadOnly): Last updated timestamp

## CloudTieringDatePolicyStatus
### Properties
* **lastUpdatedTimestamp**: string (ReadOnly): Last updated timestamp
* **tieredFilesMostRecentAccessTimestamp**: string (ReadOnly): Most recent access time of tiered files

## CloudTieringFilesNotTiering
### Properties
* **errors**: [FilesNotTieringError](#filesnottieringerror)[] (ReadOnly): Array of tiering errors
* **lastUpdatedTimestamp**: string (ReadOnly): Last updated timestamp
* **totalFileCount**: int (ReadOnly): Last cloud tiering result (HResult)

## FilesNotTieringError
### Properties
* **errorCode**: int (ReadOnly): Error code (HResult)
* **fileCount**: int (ReadOnly): Count of files with this error

## CloudTieringSpaceSavings
### Properties
* **cachedSizeBytes**: int (ReadOnly): Cached content size on the server
* **lastUpdatedTimestamp**: string (ReadOnly): Last updated timestamp
* **spaceSavingsBytes**: int (ReadOnly): Count of bytes saved on the server
* **spaceSavingsPercent**: int (ReadOnly): Percentage of cached size over total size
* **totalSizeCloudBytes**: int (ReadOnly): Total size of content in the azure file share
* **volumeSizeBytes**: int (ReadOnly): Volume size

## CloudTieringVolumeFreeSpacePolicyStatus
### Properties
* **currentVolumeFreeSpacePercent**: int (ReadOnly): Current volume free space percentage.
* **effectiveVolumeFreeSpacePolicy**: int (ReadOnly): In the case where multiple server endpoints are present in a volume, an effective free space policy is applied.
* **lastUpdatedTimestamp**: string (ReadOnly): Last updated timestamp

## ServerEndpointRecallStatus
### Properties
* **lastUpdatedTimestamp**: string (ReadOnly): Last updated timestamp
* **recallErrors**: [ServerEndpointRecallError](#serverendpointrecallerror)[] (ReadOnly): Array of recall errors
* **totalRecallErrorsCount**: int (ReadOnly): Total count of recall errors.

## ServerEndpointRecallError
### Properties
* **count**: int (ReadOnly): Count of occurences of the error
* **errorCode**: int (ReadOnly): Error code (HResult)

## ServerEndpointSyncStatus
### Properties
* **backgroundDataDownloadActivity**: [ServerEndpointBackgroundDataDownloadActivity](#serverendpointbackgrounddatadownloadactivity) (ReadOnly): Background data download activity object
* **combinedHealth**: 'Error' | 'Healthy' | 'Unavailable' (ReadOnly): Type of the server endpoint health state
* **downloadActivity**: [ServerEndpointSyncActivityStatus](#serverendpointsyncactivitystatus) (ReadOnly): Sync Session status object.
* **downloadHealth**: 'Error' | 'Healthy' | 'Unavailable' (ReadOnly): Type of the server endpoint health state
* **downloadStatus**: [ServerEndpointSyncSessionStatus](#serverendpointsyncsessionstatus) (ReadOnly): Sync Session status object.
* **lastUpdatedTimestamp**: string (ReadOnly): Last Updated Timestamp
* **offlineDataTransferStatus**: 'Complete' | 'InProgress' | 'NotRunning' | 'Stopping' (ReadOnly): Type of the Health state
* **syncActivity**: 'Download' | 'Upload' | 'UploadAndDownload' (ReadOnly): Type of the sync activity state
* **totalPersistentFilesNotSyncingCount**: int (ReadOnly): Total count of persistent files not syncing (combined upload + download).
* **uploadActivity**: [ServerEndpointSyncActivityStatus](#serverendpointsyncactivitystatus) (ReadOnly): Sync Session status object.
* **uploadHealth**: 'Error' | 'Healthy' | 'Unavailable' (ReadOnly): Type of the server endpoint health state
* **uploadStatus**: [ServerEndpointSyncSessionStatus](#serverendpointsyncsessionstatus) (ReadOnly): Sync Session status object.

## ServerEndpointBackgroundDataDownloadActivity
### Properties
* **downloadedBytes**: int (ReadOnly): Running count of bytes downloaded
* **percentProgress**: int (ReadOnly): Progress percentage
* **startedTimestamp**: string (ReadOnly): Timestamp when the operation started
* **timestamp**: string (ReadOnly): Timestamp when properties were updated

## ServerEndpointSyncActivityStatus
### Properties
* **appliedBytes**: int (ReadOnly): Applied bytes
* **appliedItemCount**: int (ReadOnly): Applied item count.
* **perItemErrorCount**: int (ReadOnly): Per item error count
* **sessionMinutesRemaining**: int (ReadOnly): Session minutes remaining (if available)
* **syncMode**: 'InitialFullDownload' | 'InitialUpload' | 'NamespaceDownload' | 'Regular' | 'SnapshotUpload' (ReadOnly): Sync mode for the server endpoint.
* **timestamp**: string (ReadOnly): Timestamp when properties were updated
* **totalBytes**: int (ReadOnly): Total bytes (if available)
* **totalItemCount**: int (ReadOnly): Total item count (if available)

## ServerEndpointSyncSessionStatus
### Properties
* **filesNotSyncingErrors**: [ServerEndpointFilesNotSyncingError](#serverendpointfilesnotsyncingerror)[] (ReadOnly): Array of per-item errors coming from the last sync session.
* **lastSyncMode**: 'InitialFullDownload' | 'InitialUpload' | 'NamespaceDownload' | 'Regular' | 'SnapshotUpload' (ReadOnly): Sync mode for the server endpoint.
* **lastSyncPerItemErrorCount**: int (ReadOnly): Last sync per item error count.
* **lastSyncResult**: int (ReadOnly): Last sync result (HResult)
* **lastSyncSuccessTimestamp**: string (ReadOnly): Last sync success timestamp
* **lastSyncTimestamp**: string (ReadOnly): Last sync timestamp
* **persistentFilesNotSyncingCount**: int (ReadOnly): Count of persistent files not syncing.
* **transientFilesNotSyncingCount**: int (ReadOnly): Count of transient files not syncing.

## ServerEndpointFilesNotSyncingError
### Properties
* **errorCode**: int (ReadOnly): Error code (HResult)
* **persistentCount**: int (ReadOnly): Count of persistent files not syncing with the specified error code
* **transientCount**: int (ReadOnly): Count of transient files not syncing with the specified error code

