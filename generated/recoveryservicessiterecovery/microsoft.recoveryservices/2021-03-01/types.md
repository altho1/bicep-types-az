# Microsoft.RecoveryServices @ 2021-03-01

## Resource Microsoft.RecoveryServices/vaults/replicationAlertSettings@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigureAlertRequestProperties](#configurealertrequestproperties): Properties of a configure alert request.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationAlertSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FabricCreationInputProperties](#fabriccreationinputproperties): Properties of site details provided during the time of site creation
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationNetworks/replicationNetworkMappings@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreateNetworkMappingInputProperties](#createnetworkmappinginputproperties): Common input details for network mapping operation.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationNetworks/replicationNetworkMappings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreateProtectionContainerInputProperties](#createprotectioncontainerinputproperties): Create protection container input properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationMigrationItems@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EnableMigrationInputProperties](#enablemigrationinputproperties) (Required): Enable migration input properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationMigrationItems' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectedItems@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EnableProtectionInputProperties](#enableprotectioninputproperties): Enable protection input properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectedItems' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectionContainerMappings@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreateProtectionContainerMappingInputProperties](#createprotectioncontainermappinginputproperties): Configure pairing input properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectionContainerMappings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationRecoveryServicesProviders@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AddRecoveryServicesProviderInputProperties](#addrecoveryservicesproviderinputproperties) (Required): The properties of an add provider request.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationRecoveryServicesProviders' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationStorageClassifications/replicationStorageClassificationMappings@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageMappingInputProperties](#storagemappinginputproperties): Storage mapping input properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationStorageClassifications/replicationStorageClassificationMappings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationFabrics/replicationvCenters@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AddVCenterRequestProperties](#addvcenterrequestproperties): The properties of an add vCenter request.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationvCenters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationPolicies@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreatePolicyInputProperties](#createpolicyinputproperties): Policy creation properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationProtectionIntents@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreateProtectionIntentProperties](#createprotectionintentproperties): Create protection intent input properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationProtectionIntents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationRecoveryPlans@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreateRecoveryPlanInputProperties](#createrecoveryplaninputproperties) (Required): Recovery plan creation properties.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationRecoveryPlans' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RecoveryServices/vaults/replicationVaultSettings@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VaultSettingCreationInputProperties](#vaultsettingcreationinputproperties) (Required): Input to create vault setting.
* **type**: 'Microsoft.RecoveryServices/vaults/replicationVaultSettings' (ReadOnly, DeployTimeConstant): The resource type

## ConfigureAlertRequestProperties
### Properties
* **customEmailAddresses**: string[]: The custom email address for sending emails.
* **locale**: string: The locale for the email notification.
* **sendToOwners**: string: A value indicating whether to send email to subscription administrator.

## FabricCreationInputProperties
### Properties
* **bcdrState**: string (ReadOnly): BCDR state of the fabric.
* **customDetails**: [FabricSpecificCreationInput](#fabricspecificcreationinput): Fabric provider specific settings.
* **encryptionDetails**: [EncryptionDetails](#encryptiondetails) (ReadOnly): Encryption details for the fabric.
* **friendlyName**: string (ReadOnly): Friendly name of the fabric.
* **health**: string (ReadOnly): Health of fabric.
* **healthErrorDetails**: [HealthError](#healtherror)[] (ReadOnly): Fabric health error details.
* **internalIdentifier**: string (ReadOnly): Dra Registration Id.
* **rolloverEncryptionDetails**: [EncryptionDetails](#encryptiondetails) (ReadOnly): Encryption details for the fabric.

## FabricSpecificCreationInput
* **Discriminator**: instanceType

### Base Properties
### AzureFabricCreationInput
#### Properties
* **containerIds**: string[] (ReadOnly): The container Ids for the Azure fabric.
* **instanceType**: 'Azure' (Required): Gets the class type.
* **location**: string: The Location.

### HyperVSiteDetails
#### Properties
* **instanceType**: 'HyperVSite' (Required): Gets the class type.

### InMageRcmFabricCreationInput
#### Properties
* **agentDetails**: [AgentDetails](#agentdetails)[] (ReadOnly): The list of agent details.
* **authCertificate**: string (WriteOnly): The certificate to be used for AAD authentication.
* **controlPlaneUri**: string (ReadOnly): The control plane Uri.
* **dataPlaneUri**: string (ReadOnly): The data plane Uri.
* **dras**: [DraDetails](#dradetails)[] (ReadOnly): The list of DRAs.
* **instanceType**: 'InMageRcm' (Required): Gets the class type.
* **physicalSiteId**: string: The ARM Id of the physical site.
* **processServers**: [ProcessServerDetails](#processserverdetails)[] (ReadOnly): The list of process servers.
* **pushInstallers**: [PushInstallerDetails](#pushinstallerdetails)[] (ReadOnly): The list of push installers.
* **rcmProxies**: [RcmProxyDetails](#rcmproxydetails)[] (ReadOnly): The list of RCM proxies.
* **replicationAgents**: [ReplicationAgentDetails](#replicationagentdetails)[] (ReadOnly): The list of replication agents.
* **reprotectAgents**: [ReprotectAgentDetails](#reprotectagentdetails)[] (ReadOnly): The list of reprotect agents.
* **serviceContainerId**: string (ReadOnly): The service container Id.
* **serviceEndpoint**: string (ReadOnly): The service endpoint.
* **serviceResourceId**: string (ReadOnly): The service resource Id.
* **sourceAgentIdentity**: [IdentityProviderInput](#identityproviderinput) (WriteOnly): Identity provider input.
* **vmwareSiteId**: string: The ARM Id of the VMware site.

### VmmDetails
#### Properties
* **instanceType**: 'VMM' (Required): Gets the class type.

### VMwareDetails
#### Properties
* **agentCount**: string (ReadOnly): The number of source and target servers configured to talk to this CS.
* **agentExpiryDate**: string (ReadOnly): Agent expiry date.
* **agentVersion**: string (ReadOnly): The agent Version.
* **agentVersionDetails**: [VersionDetails](#versiondetails) (ReadOnly): Version related details.
* **availableMemoryInBytes**: int (ReadOnly): The available memory.
* **availableSpaceInBytes**: int (ReadOnly): The available space.
* **cpuLoad**: string (ReadOnly): The percentage of the CPU load.
* **cpuLoadStatus**: string (ReadOnly): The CPU load status.
* **csServiceStatus**: string (ReadOnly): The CS service status.
* **databaseServerLoad**: string (ReadOnly): The database server load.
* **databaseServerLoadStatus**: string (ReadOnly): The database server load status.
* **hostName**: string (ReadOnly): The host name.
* **instanceType**: 'VMware' (Required): Gets the class type.
* **ipAddress**: string (ReadOnly): The IP address.
* **lastHeartbeat**: string (ReadOnly): The last heartbeat received from CS server.
* **masterTargetServers**: [MasterTargetServer](#mastertargetserver)[] (ReadOnly): The list of Master Target servers associated with the fabric.
* **memoryUsageStatus**: string (ReadOnly): The memory usage status.
* **processServerCount**: string (ReadOnly): The number of process servers.
* **processServers**: [ProcessServer](#processserver)[] (ReadOnly): The list of Process Servers associated with the fabric.
* **protectedServers**: string (ReadOnly): The number of protected servers.
* **psTemplateVersion**: string (ReadOnly): PS template version.
* **replicationPairCount**: string (ReadOnly): The number of replication pairs configured in this CS.
* **runAsAccounts**: [RunAsAccount](#runasaccount)[] (ReadOnly): The list of run as accounts created on the server.
* **spaceUsageStatus**: string (ReadOnly): The space usage status.
* **sslCertExpiryDate**: string (ReadOnly): CS SSL cert expiry date.
* **sslCertExpiryRemainingDays**: int (ReadOnly): CS SSL cert expiry date.
* **systemLoad**: string (ReadOnly): The percentage of the system load.
* **systemLoadStatus**: string (ReadOnly): The system load status.
* **totalMemoryInBytes**: int (ReadOnly): The total memory.
* **totalSpaceInBytes**: int (ReadOnly): The total space.
* **versionStatus**: string (ReadOnly): Version status
* **webLoad**: string (ReadOnly): The web load.
* **webLoadStatus**: string (ReadOnly): The web load status.

### VMwareV2FabricCreationInput
#### Properties
* **instanceType**: 'VMwareV2' (Required): Gets the class type.
* **migrationSolutionId**: string (Required): The ARM Id of the migration solution.
* **serviceEndpoint**: string (ReadOnly): The service endpoint.
* **serviceResourceId**: string (ReadOnly): The service resource Id.
* **vmwareSiteId**: string (Required): The ARM Id of the VMware site.


## AgentDetails
### Properties
* **agentId**: string (ReadOnly): The Id of the agent running on the server.
* **biosId**: string (ReadOnly): The machine BIOS Id.
* **disks**: [AgentDiskDetails](#agentdiskdetails)[] (ReadOnly): The details of agent disks.
* **fqdn**: string (ReadOnly): The machine FQDN.
* **machineId**: string (ReadOnly): The Id of the machine to which the agent is registered.

## AgentDiskDetails
### Properties
* **capacityInBytes**: int (ReadOnly): The disk capacity in bytes.
* **diskId**: string (ReadOnly): The disk Id.
* **diskName**: string (ReadOnly): The disk name.
* **isOSDisk**: string (ReadOnly): A value indicating whether the disk is the OS disk.
* **lunId**: int (ReadOnly): The lun of disk.

## DraDetails
### Properties
* **health**: 'Critical' | 'None' | 'Normal' | 'Warning' (ReadOnly): The health of the DRA.
* **healthErrors**: [HealthError](#healtherror)[] (ReadOnly): The health errors.
* **id**: string (ReadOnly): The DRA Id.
* **lastHeartbeatUtc**: string (ReadOnly): The last heartbeat received from the DRA.
* **name**: string (ReadOnly): The DRA name.
* **version**: string (ReadOnly): The DRA version.

## HealthError
### Properties
* **creationTimeUtc**: string (ReadOnly): Error creation time (UTC)
* **customerResolvability**: 'Allowed' | 'NotAllowed' (ReadOnly): Value indicating whether the health error is customer resolvable.
* **entityId**: string (ReadOnly): ID of the entity.
* **errorCategory**: string (ReadOnly): Category of error.
* **errorCode**: string (ReadOnly): Error code.
* **errorId**: string (ReadOnly): The health error unique id.
* **errorLevel**: string (ReadOnly): Level of error.
* **errorMessage**: string (ReadOnly): Error message.
* **errorSource**: string (ReadOnly): Source of error.
* **errorType**: string (ReadOnly): Type of error.
* **innerHealthErrors**: [InnerHealthError](#innerhealtherror)[] (ReadOnly): The inner health errors. HealthError having a list of HealthError as child errors is problematic. InnerHealthError is used because this will prevent an infinite loop of structures when Hydra tries to auto-generate the contract. We are exposing the related health errors as inner health errors and all API consumers can utilize this in the same fashion as Exception -&gt; InnerException.
* **possibleCauses**: string (ReadOnly): Possible causes of error.
* **recommendedAction**: string (ReadOnly): Recommended action to resolve error.
* **recoveryProviderErrorMessage**: string (ReadOnly): DRA error message.
* **summaryMessage**: string (ReadOnly): Summary message of the entity.

## InnerHealthError
### Properties
* **creationTimeUtc**: string (ReadOnly): Error creation time (UTC)
* **entityId**: string (ReadOnly): ID of the entity.
* **errorCategory**: string (ReadOnly): Category of error.
* **errorCode**: string (ReadOnly): Error code.
* **errorLevel**: string (ReadOnly): Level of error.
* **errorMessage**: string (ReadOnly): Error message.
* **errorSource**: string (ReadOnly): Source of error.
* **errorType**: string (ReadOnly): Type of error.
* **possibleCauses**: string (ReadOnly): Possible causes of error.
* **recommendedAction**: string (ReadOnly): Recommended action to resolve error.
* **recoveryProviderErrorMessage**: string (ReadOnly): DRA error message.
* **summaryMessage**: string (ReadOnly): Summary message of the entity.

## ProcessServerDetails
### Properties
* **availableMemoryInBytes**: int (ReadOnly): The available memory.
* **availableSpaceInBytes**: int (ReadOnly): The available disk space.
* **freeSpacePercentage**: int (ReadOnly): The free disk space percentage.
* **health**: 'Critical' | 'None' | 'Normal' | 'Warning' (ReadOnly): The health of the DRA.
* **healthErrors**: [HealthError](#healtherror)[] (ReadOnly): The health errors.
* **historicHealth**: 'Critical' | 'None' | 'Normal' | 'Warning' (ReadOnly): The health of the DRA.
* **id**: string (ReadOnly): The process server Id.
* **lastHeartbeatUtc**: string (ReadOnly): The last heartbeat received from the process server.
* **memoryUsagePercentage**: int (ReadOnly): The memory usage percentage.
* **name**: string (ReadOnly): The process server name.
* **processorUsagePercentage**: int (ReadOnly): The processor usage percentage.
* **throughputInBytes**: int (ReadOnly): The throughput in bytes.
* **throughputUploadPendingDataInBytes**: int (ReadOnly): The uploading pending data in bytes.
* **totalMemoryInBytes**: int (ReadOnly): The total memory.
* **totalSpaceInBytes**: int (ReadOnly): The total disk space.
* **usedMemoryInBytes**: int (ReadOnly): The used memory.
* **usedSpaceInBytes**: int (ReadOnly): The used disk space.
* **version**: string (ReadOnly): The process server version.

## PushInstallerDetails
### Properties
* **health**: 'Critical' | 'None' | 'Normal' | 'Warning' (ReadOnly): The health of the DRA.
* **healthErrors**: [HealthError](#healtherror)[] (ReadOnly): The health errors.
* **id**: string (ReadOnly): The push installer Id.
* **lastHeartbeatUtc**: string (ReadOnly): The last heartbeat received from the push installer.
* **name**: string (ReadOnly): The push installer name.
* **version**: string (ReadOnly): The push installer version.

## RcmProxyDetails
### Properties
* **health**: 'Critical' | 'None' | 'Normal' | 'Warning' (ReadOnly): The health of the DRA.
* **healthErrors**: [HealthError](#healtherror)[] (ReadOnly): The health errors.
* **id**: string (ReadOnly): The RCM proxy Id.
* **lastHeartbeatUtc**: string (ReadOnly): The last heartbeat received from the RCM proxy.
* **name**: string (ReadOnly): The RCM proxy name.
* **version**: string (ReadOnly): The RCM proxy version.

## ReplicationAgentDetails
### Properties
* **health**: 'Critical' | 'None' | 'Normal' | 'Warning' (ReadOnly): The health of the DRA.
* **healthErrors**: [HealthError](#healtherror)[] (ReadOnly): The health errors.
* **id**: string (ReadOnly): The replication agent Id.
* **lastHeartbeatUtc**: string (ReadOnly): The last heartbeat received from the replication agent.
* **name**: string (ReadOnly): The replication agent name.
* **version**: string (ReadOnly): The replication agent version.

## ReprotectAgentDetails
### Properties
* **health**: 'Critical' | 'None' | 'Normal' | 'Warning' (ReadOnly): The health of the DRA.
* **healthErrors**: [HealthError](#healtherror)[] (ReadOnly): The health errors.
* **id**: string (ReadOnly): The reprotect agent Id.
* **lastHeartbeatUtc**: string (ReadOnly): The last heartbeat received from the reprotect agent.
* **name**: string (ReadOnly): The reprotect agent name.
* **version**: string (ReadOnly): The version.

## IdentityProviderInput
### Properties
* **aadAuthority**: string (Required, WriteOnly): The base authority for Azure Active Directory authentication.
* **applicationId**: string (Required, WriteOnly): The application/client Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services.
* **audience**: string (Required, WriteOnly): The intended Audience of the service principal with which the on-premise management/data plane components would communicate with our Azure services.
* **objectId**: string (Required, WriteOnly): The object Id of the service principal with which the on-premise management/data plane components would communicate with our Azure services.
* **tenantId**: string (Required, WriteOnly): The tenant Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services.

## VersionDetails
### Properties
* **expiryDate**: string (ReadOnly): Version expiry date.
* **status**: 'Deprecated' | 'NotSupported' | 'SecurityUpdateRequired' | 'Supported' | 'UpdateRequired' (ReadOnly): A value indicating whether security update required.
* **version**: string (ReadOnly): The agent version.

## MasterTargetServer
### Properties
* **agentExpiryDate**: string (ReadOnly): Agent expiry date.
* **agentVersion**: string (ReadOnly): The version of the scout component on the server.
* **agentVersionDetails**: [VersionDetails](#versiondetails) (ReadOnly): Version related details.
* **dataStores**: [DataStore](#datastore)[] (ReadOnly): The list of data stores in the fabric.
* **diskCount**: int (ReadOnly): Disk count of the master target.
* **healthErrors**: [HealthError](#healtherror)[] (ReadOnly): Health errors.
* **id**: string (ReadOnly): The server Id.
* **ipAddress**: string (ReadOnly): The IP address of the server.
* **lastHeartbeat**: string (ReadOnly): The last heartbeat received from the server.
* **marsAgentExpiryDate**: string (ReadOnly): MARS agent expiry date.
* **marsAgentVersion**: string (ReadOnly): MARS agent version.
* **marsAgentVersionDetails**: [VersionDetails](#versiondetails) (ReadOnly): Version related details.
* **name**: string (ReadOnly): The server name.
* **osType**: string (ReadOnly): The OS type of the server.
* **osVersion**: string (ReadOnly): OS Version of the master target.
* **retentionVolumes**: [RetentionVolume](#retentionvolume)[] (ReadOnly): The retention volumes of Master target Server.
* **validationErrors**: [HealthError](#healtherror)[] (ReadOnly): Validation errors.
* **versionStatus**: string (ReadOnly): Version status

## DataStore
### Properties
* **capacity**: string (ReadOnly): The capacity of data store in GBs.
* **freeSpace**: string (ReadOnly): The free space of data store in GBs.
* **symbolicName**: string (ReadOnly): The symbolic name of data store.
* **type**: string (ReadOnly): The type of data store.
* **uuid**: string (ReadOnly): The uuid of data store.

## RetentionVolume
### Properties
* **capacityInBytes**: int (ReadOnly): The volume capacity.
* **freeSpaceInBytes**: int (ReadOnly): The free space available in this volume.
* **thresholdPercentage**: int (ReadOnly): The threshold percentage.
* **volumeName**: string (ReadOnly): The volume name.

## ProcessServer
### Properties
* **agentExpiryDate**: string (ReadOnly): Agent expiry date.
* **agentVersion**: string (ReadOnly): The version of the scout component on the server.
* **agentVersionDetails**: [VersionDetails](#versiondetails) (ReadOnly): Version related details.
* **availableMemoryInBytes**: int (ReadOnly): The available memory.
* **availableSpaceInBytes**: int (ReadOnly): The available space.
* **cpuLoad**: string (ReadOnly): The percentage of the CPU load.
* **cpuLoadStatus**: string (ReadOnly): The CPU load status.
* **friendlyName**: string (ReadOnly): The Process Server's friendly name.
* **health**: 'Critical' | 'None' | 'Normal' | 'Warning' (ReadOnly): The health of the DRA.
* **healthErrors**: [HealthError](#healtherror)[] (ReadOnly): Health errors.
* **hostId**: string (ReadOnly): The agent generated Id.
* **id**: string (ReadOnly): The Process Server Id.
* **ipAddress**: string (ReadOnly): The IP address of the server.
* **lastHeartbeat**: string (ReadOnly): The last heartbeat received from the server.
* **machineCount**: string (ReadOnly): The servers configured with this PS.
* **marsCommunicationStatus**: string (ReadOnly): The MARS communication status.
* **marsRegistrationStatus**: string (ReadOnly): The MARS registration status.
* **memoryUsageStatus**: string (ReadOnly): The memory usage status.
* **mobilityServiceUpdates**: [MobilityServiceUpdate](#mobilityserviceupdate)[] (ReadOnly): The list of the mobility service updates available on the Process Server.
* **osType**: string (ReadOnly): The OS type of the server.
* **osVersion**: string (ReadOnly): OS Version of the process server. Note: This will get populated if user has CS version greater than 9.12.0.0.
* **psServiceStatus**: string (ReadOnly): The PS service status.
* **psStatsRefreshTime**: string (ReadOnly): The process server stats refresh time.
* **replicationPairCount**: string (ReadOnly): The number of replication pairs configured in this PS.
* **spaceUsageStatus**: string (ReadOnly): The space usage status.
* **sslCertExpiryDate**: string (ReadOnly): The PS SSL cert expiry date.
* **sslCertExpiryRemainingDays**: int (ReadOnly): CS SSL cert expiry date.
* **systemLoad**: string (ReadOnly): The percentage of the system load.
* **systemLoadStatus**: string (ReadOnly): The system load status.
* **throughputInBytes**: int (ReadOnly): The throughput in bytes.
* **throughputInMBps**: int (ReadOnly): The throughput in MBps.
* **throughputStatus**: string (ReadOnly): The throughput status.
* **throughputUploadPendingDataInBytes**: int (ReadOnly): The uploading pending data in bytes.
* **totalMemoryInBytes**: int (ReadOnly): The total memory.
* **totalSpaceInBytes**: int (ReadOnly): The total space.
* **versionStatus**: string (ReadOnly): Version status

## MobilityServiceUpdate
### Properties
* **osType**: string (ReadOnly): The OS type.
* **rebootStatus**: string (ReadOnly): The reboot status of the update - whether it is required or not.
* **version**: string (ReadOnly): The version of the latest update.

## RunAsAccount
### Properties
* **accountId**: string (ReadOnly): The CS RunAs account Id.
* **accountName**: string (ReadOnly): The CS RunAs account name.

## EncryptionDetails
### Properties
* **kekCertExpiryDate**: string (ReadOnly): The key encryption key certificate expiry date.
* **kekCertThumbprint**: string (ReadOnly): The key encryption key certificate thumbprint.
* **kekState**: string (ReadOnly): The key encryption key state for the Vmm.

## CreateNetworkMappingInputProperties
### Properties
* **fabricSpecificDetails**: [FabricSpecificCreateNetworkMappingInput](#fabricspecificcreatenetworkmappinginput) (WriteOnly): Input details specific to fabrics during Network Mapping.
* **fabricSpecificSettings**: [NetworkMappingFabricSpecificSettings](#networkmappingfabricspecificsettings) (ReadOnly): Network Mapping fabric specific settings.
* **primaryFabricFriendlyName**: string (ReadOnly): The primary fabric friendly name.
* **primaryNetworkFriendlyName**: string (ReadOnly): The primary network friendly name.
* **primaryNetworkId**: string (ReadOnly): The primary network id for network mapping.
* **recoveryFabricArmId**: string (ReadOnly): The recovery fabric ARM id.
* **recoveryFabricFriendlyName**: string (ReadOnly): The recovery fabric friendly name.
* **recoveryFabricName**: string (WriteOnly): Recovery fabric Name.
* **recoveryNetworkFriendlyName**: string (ReadOnly): The recovery network friendly name.
* **recoveryNetworkId**: string: Recovery network Id.
* **state**: string (ReadOnly): The pairing state for network mapping.

## FabricSpecificCreateNetworkMappingInput
* **Discriminator**: instanceType

### Base Properties
### AzureToAzureCreateNetworkMappingInput
#### Properties
* **instanceType**: 'AzureToAzure' (Required): The instance type.
* **primaryNetworkId**: string (WriteOnly): The primary azure vnet Id.

### VmmToAzureCreateNetworkMappingInput
#### Properties
* **instanceType**: 'VmmToAzure' (Required): The instance type.

### VmmToVmmCreateNetworkMappingInput
#### Properties
* **instanceType**: 'VmmToVmm' (Required): The instance type.


## NetworkMappingFabricSpecificSettings
* **Discriminator**: instanceType

### Base Properties
### AzureToAzureNetworkMappingSettings
#### Properties
* **instanceType**: 'AzureToAzure' (Required): Gets the Instance type.
* **primaryFabricLocation**: string (ReadOnly): The primary fabric location.
* **recoveryFabricLocation**: string (ReadOnly): The recovery fabric location.

### VmmToAzureNetworkMappingSettings
#### Properties
* **instanceType**: 'VmmToAzure' (Required): Gets the Instance type.

### VmmToVmmNetworkMappingSettings
#### Properties
* **instanceType**: 'VmmToVmm' (Required): Gets the Instance type.


## CreateProtectionContainerInputProperties
### Properties
* **fabricFriendlyName**: string (ReadOnly): Fabric friendly name.
* **fabricSpecificDetails**: [ProtectionContainerFabricSpecificDetails](#protectioncontainerfabricspecificdetails) (ReadOnly): Base class for fabric specific details of container.
* **fabricType**: string (ReadOnly): The fabric type.
* **friendlyName**: string (ReadOnly): The name.
* **pairingStatus**: string (ReadOnly): The pairing status of this cloud.
* **protectedItemCount**: int (ReadOnly): Number of protected PEs
* **providerSpecificInput**: [ReplicationProviderSpecificContainerCreationInput](#replicationproviderspecificcontainercreationinput)[] (WriteOnly): Provider specific inputs for container creation.
* **role**: string (ReadOnly): The role of this cloud.

## ProtectionContainerFabricSpecificDetails
### Properties
* **instanceType**: string (ReadOnly): Gets the class type. Overridden in derived classes.

## ReplicationProviderSpecificContainerCreationInput
* **Discriminator**: instanceType

### Base Properties
### VMwareCbtContainerCreationInput
#### Properties
* **instanceType**: '6c7da455-506f-43ff-a16a-8eb101aebb70' (Required): The class type.

### A2AContainerCreationInput
#### Properties
* **instanceType**: 'A2A' (Required): The class type.


## EnableMigrationInputProperties
### Properties
* **allowedOperations**: 'DisableMigration' | 'Migrate' | 'TestMigrate' | 'TestMigrateCleanup'[] (ReadOnly): The allowed operations on the migration item, based on the current migration state of the item.
* **currentJob**: [CurrentJobDetails](#currentjobdetails) (ReadOnly): Current job details of the migration item.
* **health**: string (ReadOnly): The consolidated health.
* **healthErrors**: [HealthError](#healtherror)[] (ReadOnly): The list of health errors.
* **machineName**: string (ReadOnly): The on-premise virtual machine name.
* **migrationState**: 'DisableMigrationFailed' | 'DisableMigrationInProgress' | 'EnableMigrationFailed' | 'EnableMigrationInProgress' | 'InitialSeedingFailed' | 'InitialSeedingInProgress' | 'MigrationFailed' | 'MigrationInProgress' | 'MigrationSucceeded' | 'None' | 'Replicating' (ReadOnly): The migration status.
* **migrationStateDescription**: string (ReadOnly): The migration state description.
* **policyFriendlyName**: string (ReadOnly): The name of policy governing this item.
* **policyId**: string (Required): The policy Id.
* **providerSpecificDetails**: [EnableMigrationProviderSpecificInput](#enablemigrationproviderspecificinput) (Required): Enable migration provider specific input.
* **recoveryServicesProviderId**: string (ReadOnly): The recovery services provider ARM Id.
* **testMigrateState**: 'None' | 'TestMigrationCleanupInProgress' | 'TestMigrationFailed' | 'TestMigrationInProgress' | 'TestMigrationSucceeded' (ReadOnly): The test migrate state.
* **testMigrateStateDescription**: string (ReadOnly): The test migrate state description.

## CurrentJobDetails
### Properties
* **jobId**: string (ReadOnly): The ARM Id of the job being executed.
* **jobName**: string (ReadOnly): The job name.
* **startTime**: string (ReadOnly): The start time of the job.

## EnableMigrationProviderSpecificInput
* **Discriminator**: instanceType

### Base Properties
### VMwareCbtEnableMigrationInput
#### Properties
* **dataMoverRunAsAccountId**: string (Required): The data mover RunAs account Id.
* **disksToInclude**: [VMwareCbtDiskInput](#vmwarecbtdiskinput)[] (Required, WriteOnly): The disks to include list.
* **instanceType**: 'VMwareCbt' (Required): The class type.
* **lastRecoveryPointReceived**: string (ReadOnly): The last recovery point received time.
* **licenseType**: 'NoLicenseType' | 'NotSpecified' | 'WindowsServer': The license type.
* **migrationRecoveryPointId**: string (ReadOnly): The recovery point Id to which the VM was migrated.
* **osType**: string (ReadOnly): The type of the OS on the VM.
* **protectedDisks**: [VMwareCbtProtectedDiskDetails](#vmwarecbtprotecteddiskdetails)[] (ReadOnly): The list of protected disks.
* **snapshotRunAsAccountId**: string (Required): The snapshot RunAs account Id.
* **targetAvailabilitySetId**: string: The target availability set ARM Id.
* **targetBootDiagnosticsStorageAccountId**: string: The target boot diagnostics storage account ARM Id.
* **targetLocation**: string (ReadOnly): The target location.
* **targetNetworkId**: string (Required): The target network ARM Id.
* **targetResourceGroupId**: string (Required): The target resource group ARM Id.
* **targetSubnetName**: string (WriteOnly): The target subnet name.
* **targetVmName**: string: The target VM name.
* **targetVmSize**: string: The target VM size.
* **vmNics**: [VMwareCbtNicDetails](#vmwarecbtnicdetails)[] (ReadOnly): The network details.
* **vmwareMachineId**: string (Required): The ARM Id of the VM discovered in VMware.


## VMwareCbtDiskInput
### Properties
* **diskId**: string (Required, WriteOnly): The disk Id.
* **diskType**: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' (WriteOnly): The DiskType.
* **isOSDisk**: string (Required, WriteOnly): A value indicating whether the disk is the OS disk.
* **logStorageAccountId**: string (Required, WriteOnly): The log storage account ARM Id.
* **logStorageAccountSasSecretName**: string (Required, WriteOnly): The key vault secret name of the log storage account.

## VMwareCbtProtectedDiskDetails
### Properties
* **capacityInBytes**: int (ReadOnly): The disk capacity in bytes.
* **diskId**: string (ReadOnly): The disk id.
* **diskName**: string (ReadOnly): The disk name.
* **diskPath**: string (ReadOnly): The disk path.
* **diskType**: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' (ReadOnly): The disk type.
* **isOSDisk**: string (ReadOnly): A value indicating whether the disk is the OS disk.
* **logStorageAccountId**: string (ReadOnly): The log storage account ARM Id.
* **logStorageAccountSasSecretName**: string (ReadOnly): The key vault secret name of the log storage account.
* **seedManagedDiskId**: string (ReadOnly): The ARM Id of the seed managed disk.
* **targetManagedDiskId**: string (ReadOnly): The ARM Id of the target managed disk.

## VMwareCbtNicDetails
### Properties
* **isPrimaryNic**: string (ReadOnly): A value indicating whether this is the primary NIC.
* **isSelectedForMigration**: string (ReadOnly): A value indicating whether this NIC is selected for migration.
* **nicId**: string (ReadOnly): The NIC Id.
* **sourceIPAddress**: string (ReadOnly): The source IP address.
* **sourceIPAddressType**: 'Dynamic' | 'Static' (ReadOnly): The source IP address type.
* **sourceNetworkId**: string (ReadOnly): Source network Id.
* **targetIPAddress**: string (ReadOnly): The target IP address.
* **targetIPAddressType**: 'Dynamic' | 'Static' (ReadOnly): The source IP address type.
* **targetSubnetName**: string (ReadOnly): Target subnet name.

## EnableProtectionInputProperties
### Properties
* **activeLocation**: string (ReadOnly): The Current active location of the PE.
* **allowedOperations**: string[] (ReadOnly): The allowed operations on the Replication protected item.
* **currentScenario**: [CurrentScenarioDetails](#currentscenariodetails) (ReadOnly): Current scenario details of the protected entity.
* **failoverHealth**: string (ReadOnly): The consolidated failover health for the VM.
* **failoverRecoveryPointId**: string (ReadOnly): The recovery point ARM Id to which the Vm was failed over.
* **friendlyName**: string (ReadOnly): The name.
* **healthErrors**: [HealthError](#healtherror)[] (ReadOnly): List of health errors.
* **lastSuccessfulFailoverTime**: string (ReadOnly): The Last successful failover time.
* **lastSuccessfulTestFailoverTime**: string (ReadOnly): The Last successful test failover time.
* **policyFriendlyName**: string (ReadOnly): The name of Policy governing this PE.
* **policyId**: string: The Policy Id.
* **primaryFabricFriendlyName**: string (ReadOnly): The friendly name of the primary fabric.
* **primaryFabricProvider**: string (ReadOnly): The fabric provider of the primary fabric.
* **primaryProtectionContainerFriendlyName**: string (ReadOnly): The name of primary protection container friendly name.
* **protectableItemId**: string: The protectable item Id.
* **protectedItemType**: string (ReadOnly): The type of protected item type.
* **protectionState**: string (ReadOnly): The protection status.
* **protectionStateDescription**: string (ReadOnly): The protection state description.
* **providerSpecificDetails**: [EnableProtectionProviderSpecificInput](#enableprotectionproviderspecificinput): Enable protection provider specific input.
* **recoveryContainerId**: string (ReadOnly): The recovery container Id.
* **recoveryFabricFriendlyName**: string (ReadOnly): The friendly name of recovery fabric.
* **recoveryFabricId**: string (ReadOnly): The Arm Id of recovery fabric.
* **recoveryProtectionContainerFriendlyName**: string (ReadOnly): The name of recovery container friendly name.
* **recoveryServicesProviderId**: string (ReadOnly): The recovery provider ARM Id.
* **replicationHealth**: string (ReadOnly): The consolidated protection health for the VM taking any issues with SRS as well as all the replication units associated with the VM's replication group into account. This is a string representation of the ProtectionHealth enumeration.
* **testFailoverState**: string (ReadOnly): The Test failover state.
* **testFailoverStateDescription**: string (ReadOnly): The Test failover state description.

## CurrentScenarioDetails
### Properties
* **jobId**: string (ReadOnly): ARM Id of the job being executed.
* **scenarioName**: string (ReadOnly): Scenario name.
* **startTime**: string (ReadOnly): Start time of the workflow.

## EnableProtectionProviderSpecificInput
* **Discriminator**: instanceType

### Base Properties
### A2AEnableProtectionInput
#### Properties
* **agentVersion**: string (ReadOnly): The agent version.
* **diskEncryptionInfo**: [DiskEncryptionInfo](#diskencryptioninfo) (WriteOnly): Recovery disk encryption info (BEK and KEK).
* **fabricObjectId**: string: The fabric specific object Id of the virtual machine.
* **initialPrimaryFabricLocation**: string (ReadOnly): The initial primary fabric location.
* **initialPrimaryZone**: string (ReadOnly): The initial primary availability zone.
* **initialRecoveryFabricLocation**: string (ReadOnly): The initial recovery fabric location.
* **initialRecoveryZone**: string (ReadOnly): The initial recovery availability zone.
* **instanceType**: 'A2A' (Required): The class type.
* **isReplicationAgentUpdateRequired**: bool (ReadOnly): A value indicating whether replication agent update is required.
* **lastHeartbeat**: string (ReadOnly): The last heartbeat received from the source server.
* **lastRpoCalculatedTime**: string (ReadOnly): The time (in UTC) when the last RPO value was calculated by Protection Service.
* **lifecycleId**: string (ReadOnly): An id associated with the PE that survives actions like switch protection which change the backing PE/CPE objects internally.The lifecycle id gets carried forward to have a link/continuity in being able to have an Id that denotes the "same" protected item even though other internal Ids/ARM Id might be changing.
* **managementId**: string (ReadOnly): The management Id.
* **monitoringJobType**: string (ReadOnly): The type of the monitoring job. The progress is contained in MonitoringPercentageCompletion property.
* **monitoringPercentageCompletion**: int (ReadOnly): The percentage of the monitoring job. The type of the monitoring job is defined by MonitoringJobType property.
* **multiVmGroupCreateOption**: 'AutoCreated' | 'UserSpecified' (ReadOnly): Whether Multi VM group is auto created or specified by user.
* **multiVmGroupId**: string (ReadOnly): The multi vm group Id.
* **multiVmGroupName**: string: The multi vm group name.
* **osType**: string (ReadOnly): The type of operating system.
* **primaryFabricLocation**: string (ReadOnly): Primary fabric location.
* **protectedDisks**: [A2AProtectedDiskDetails](#a2aprotecteddiskdetails)[] (ReadOnly): The list of protected disks.
* **protectedManagedDisks**: [A2AProtectedManagedDiskDetails](#a2aprotectedmanageddiskdetails)[] (ReadOnly): The list of protected managed disks.
* **recoveryAvailabilitySet**: string (ReadOnly): The recovery availability set.
* **recoveryAvailabilitySetId**: string (WriteOnly): The recovery availability set Id.
* **recoveryAvailabilityZone**: string: The recovery availability zone.
* **recoveryAzureNetworkId**: string (WriteOnly): The recovery Azure virtual network ARM id.
* **recoveryAzureResourceGroupId**: string (ReadOnly): The recovery resource group.
* **recoveryAzureVMName**: string (ReadOnly): The name of recovery virtual machine.
* **recoveryAzureVMSize**: string (ReadOnly): The size of recovery virtual machine.
* **recoveryBootDiagStorageAccountId**: string: The boot diagnostic storage account.
* **recoveryCloudService**: string (ReadOnly): The recovery cloud service.
* **recoveryCloudServiceId**: string (WriteOnly): The recovery cloud service Id. Valid for V1 scenarios.
* **recoveryContainerId**: string (WriteOnly): The recovery container Id.
* **recoveryFabricLocation**: string (ReadOnly): The recovery fabric location.
* **recoveryFabricObjectId**: string (ReadOnly): The recovery fabric object Id.
* **recoveryProximityPlacementGroupId**: string: The recovery proximity placement group Id.
* **recoveryResourceGroupId**: string (WriteOnly): The recovery resource group Id. Valid for V2 scenarios.
* **recoverySubnetName**: string (WriteOnly): The recovery subnet name.
* **rpoInSeconds**: int (ReadOnly): The last RPO value in seconds.
* **selectedRecoveryAzureNetworkId**: string (ReadOnly): The recovery virtual network.
* **selectedTfoAzureNetworkId**: string (ReadOnly): The test failover virtual network.
* **testFailoverRecoveryFabricObjectId**: string (ReadOnly): The test failover fabric object Id.
* **tfoAzureVMName**: string (ReadOnly): The test failover VM name.
* **unprotectedDisks**: [A2AUnprotectedDiskDetails](#a2aunprotecteddiskdetails)[] (ReadOnly): The list of unprotected disks.
* **vmDisks**: [A2AVmDiskInputDetails](#a2avmdiskinputdetails)[] (WriteOnly): The list of vm disk details.
* **vmEncryptionType**: 'NotEncrypted' | 'OnePassEncrypted' | 'TwoPassEncrypted' (ReadOnly): The encryption type of the VM.
* **vmManagedDisks**: [A2AVmManagedDiskInputDetails](#a2avmmanageddiskinputdetails)[] (WriteOnly): The list of vm managed disk details.
* **vmNics**: [VMNicDetails](#vmnicdetails)[] (ReadOnly): The virtual machine nic details.
* **vmProtectionState**: string (ReadOnly): The protection state for the vm.
* **vmProtectionStateDescription**: string (ReadOnly): The protection state description for the vm.
* **vmSyncedConfigDetails**: [AzureToAzureVmSyncedConfigDetails](#azuretoazurevmsyncedconfigdetails) (ReadOnly): Azure to Azure VM synced configuration details.

### HyperVReplicaReplicationDetails
#### Properties
* **initialReplicationDetails**: [InitialReplicationDetails](#initialreplicationdetails) (ReadOnly): Initial replication details.
* **instanceType**: 'HyperVReplica2012' (Required): The class type.
* **lastReplicatedTime**: string (ReadOnly): The Last replication time.
* **vMDiskDetails**: [DiskDetails](#diskdetails)[] (ReadOnly): VM disk details.
* **vmId**: string (ReadOnly): The virtual machine Id.
* **vmNics**: [VMNicDetails](#vmnicdetails)[] (ReadOnly): The PE Network details.
* **vmProtectionState**: string (ReadOnly): The protection state for the vm.
* **vmProtectionStateDescription**: string (ReadOnly): The protection state description for the vm.

### HyperVReplicaBlueReplicationDetails
#### Properties
* **initialReplicationDetails**: [InitialReplicationDetails](#initialreplicationdetails) (ReadOnly): Initial replication details.
* **instanceType**: 'HyperVReplica2012R2' (Required): The class type.
* **lastReplicatedTime**: string (ReadOnly): The Last replication time.
* **vMDiskDetails**: [DiskDetails](#diskdetails)[] (ReadOnly): VM disk details.
* **vmId**: string (ReadOnly): The virtual machine Id.
* **vmNics**: [VMNicDetails](#vmnicdetails)[] (ReadOnly): The PE Network details.
* **vmProtectionState**: string (ReadOnly): The protection state for the vm.
* **vmProtectionStateDescription**: string (ReadOnly): The protection state description for the vm.

### HyperVReplicaAzureEnableProtectionInput
#### Properties
* **azureVmDiskDetails**: [AzureVmDiskDetails](#azurevmdiskdetails)[] (ReadOnly): Azure VM Disk details.
* **disksToInclude**: string[] (WriteOnly): The list of VHD IDs of disks to be protected.
* **enableRdpOnTargetOption**: string: The selected option to enable RDP\SSH on target vm after failover. String value of {SrsDataContract.EnableRDPOnTargetOption} enum.
* **encryption**: string (ReadOnly): The encryption info.
* **hvHostVmId**: string (WriteOnly): The Hyper-V host Vm Id.
* **initialReplicationDetails**: [InitialReplicationDetails](#initialreplicationdetails) (ReadOnly): Initial replication details.
* **instanceType**: 'HyperVReplicaAzure' (Required): The class type.
* **lastReplicatedTime**: string (ReadOnly): The Last replication time.
* **lastRpoCalculatedTime**: string (ReadOnly): The last RPO calculated time.
* **licenseType**: string (ReadOnly): License Type of the VM to be used.
* **logStorageAccountId**: string (WriteOnly): The storage account to be used for logging during replication.
* **oSDetails**: [OSDetails](#osdetails) (ReadOnly): Disk Details.
* **osType**: string (WriteOnly): The OS type associated with vm.
* **recoveryAvailabilitySetId**: string (ReadOnly): The recovery availability set Id.
* **recoveryAzureLogStorageAccountId**: string (ReadOnly): The ARM id of the log storage account used for replication. This will be set to null if no log storage account was provided during enable protection.
* **recoveryAzureResourceGroupId**: string (ReadOnly): The target resource group Id.
* **recoveryAzureStorageAccount**: string (ReadOnly): The recovery Azure storage account.
* **recoveryAzureVmName**: string (ReadOnly): Recovery Azure given name.
* **recoveryAzureVMSize**: string (ReadOnly): The Recovery Azure VM size.
* **rpoInSeconds**: int (ReadOnly): Last RPO value.
* **selectedRecoveryAzureNetworkId**: string (ReadOnly): The selected recovery azure network Id.
* **selectedSourceNicId**: string (ReadOnly): The selected source nic Id which will be used as the primary nic during failover.
* **sourceVmCpuCount**: int (ReadOnly): The CPU count of the VM on the primary side.
* **sourceVmRamSizeInMB**: int (ReadOnly): The RAM size of the VM on the primary side.
* **targetAvailabilitySetId**: string (WriteOnly): The availability set ARM Id.
* **targetAvailabilityZone**: string: The target availability zone.
* **targetAzureNetworkId**: string (WriteOnly): The selected target Azure network Id.
* **targetAzureSubnetId**: string (WriteOnly): The selected target Azure subnet Id.
* **targetAzureV1ResourceGroupId**: string (WriteOnly): The Id of the target resource group (for classic deployment) in which the failover VM is to be created.
* **targetAzureV2ResourceGroupId**: string (WriteOnly): The Id of the target resource group (for resource manager deployment) in which the failover VM is to be created.
* **targetAzureVmName**: string (WriteOnly): The target azure Vm Name.
* **targetProximityPlacementGroupId**: string: The proximity placement group ARM Id.
* **targetStorageAccountId**: string (WriteOnly): The storage account name.
* **targetVmSize**: string (WriteOnly): The target VM size.
* **useManagedDisks**: string: A value indicating whether managed disks should be used during failover.
* **vhdId**: string (WriteOnly): The OS disk VHD id associated with vm.
* **vmId**: string (ReadOnly): The virtual machine Id.
* **vmName**: string (WriteOnly): The Vm Name.
* **vmNics**: [VMNicDetails](#vmnicdetails)[] (ReadOnly): The PE Network details.
* **vmProtectionState**: string (ReadOnly): The protection state for the vm.
* **vmProtectionStateDescription**: string (ReadOnly): The protection state description for the vm.

### HyperVReplicaBaseReplicationDetails
#### Properties
* **initialReplicationDetails**: [InitialReplicationDetails](#initialreplicationdetails) (ReadOnly): Initial replication details.
* **instanceType**: 'HyperVReplicaBaseReplicationDetails' (Required): The class type.
* **lastReplicatedTime**: string (ReadOnly): The Last replication time.
* **vMDiskDetails**: [DiskDetails](#diskdetails)[] (ReadOnly): VM disk details.
* **vmId**: string (ReadOnly): The virtual machine Id.
* **vmNics**: [VMNicDetails](#vmnicdetails)[] (ReadOnly): The PE Network details.
* **vmProtectionState**: string (ReadOnly): The protection state for the vm.
* **vmProtectionStateDescription**: string (ReadOnly): The protection state description for the vm.

### InMageEnableProtectionInput
#### Properties
* **activeSiteType**: string (ReadOnly): The active location of the VM. If the VM is being protected from Azure, this field will take values from { Azure, OnPrem }. If the VM is being protected between two data-centers, this field will be OnPrem always.
* **agentDetails**: [InMageAgentDetails](#inmageagentdetails) (ReadOnly): The details of the InMage agent.
* **azureStorageAccountId**: string (ReadOnly): A value indicating the underlying Azure storage account. If the VM is not running in Azure, this value shall be set to null.
* **compressedDataRateInMB**: int (ReadOnly): The compressed data change rate in MB.
* **consistencyPoints**: [InMageReplicationDetailsConsistencyPoints](#inmagereplicationdetailsconsistencypoints) (ReadOnly): The collection of Consistency points.
* **datastoreName**: string (WriteOnly): The target data store name.
* **datastores**: string[] (ReadOnly): The data stores of the on-premise machine Value can be list of strings that contain data store names
* **discoveryType**: string (ReadOnly): A value indicating the discovery type of the machine.
* **diskExclusionInput**: [InMageDiskExclusionInput](#inmagediskexclusioninput) (WriteOnly): DiskExclusionInput when doing enable protection of virtual machine in InMage provider.
* **diskResized**: string (ReadOnly): A value indicating whether any disk is resized for this VM.
* **disksToInclude**: string[] (WriteOnly): The disks to include list.
* **infrastructureVmId**: string (ReadOnly): The infrastructure VM Id.
* **instanceType**: 'InMage' (Required): The class type.
* **ipAddress**: string (ReadOnly): The source IP address.
* **lastHeartbeat**: string (ReadOnly): The last heartbeat received from the source server.
* **lastRpoCalculatedTime**: string (ReadOnly): The last RPO calculated time.
* **lastUpdateReceivedTime**: string (ReadOnly): The last update time received from on-prem components.
* **masterTargetId**: string (Required): The Master Target Id.
* **multiVmGroupId**: string (Required): The multi vm group Id.
* **multiVmGroupName**: string (Required): The multi vm group name.
* **multiVmSyncStatus**: string (ReadOnly): A value indicating whether the multi vm sync is enabled or disabled.
* **osDetails**: [OSDiskDetails](#osdiskdetails) (ReadOnly): Details of the OS Disk.
* **osVersion**: string (ReadOnly): The OS Version of the protected item.
* **processServerId**: string (Required): The Process Server Id.
* **protectedDisks**: [InMageProtectedDiskDetails](#inmageprotecteddiskdetails)[] (ReadOnly): The list of protected disks.
* **protectionStage**: string (ReadOnly): The protection stage.
* **rebootAfterUpdateStatus**: string (ReadOnly): A value indicating whether the source server requires a restart after update.
* **replicaId**: string (ReadOnly): The replica id of the protected item.
* **resyncDetails**: [InitialReplicationDetails](#initialreplicationdetails) (ReadOnly): Initial replication details.
* **retentionDrive**: string (Required, WriteOnly): The retention drive to use on the MT.
* **retentionWindowEnd**: string (ReadOnly): The retention window end time.
* **retentionWindowStart**: string (ReadOnly): The retention window start time.
* **rpoInSeconds**: int (ReadOnly): The RPO in seconds.
* **runAsAccountId**: string (WriteOnly): The CS account Id.
* **sourceVmCpuCount**: int (ReadOnly): The CPU count of the VM on the primary side.
* **sourceVmRamSizeInMB**: int (ReadOnly): The RAM size of the VM on the primary side.
* **uncompressedDataRateInMB**: int (ReadOnly): The uncompressed data change rate in MB.
* **validationErrors**: [HealthError](#healtherror)[] (ReadOnly): The validation errors of the on-premise machine Value can be list of validation errors
* **vCenterInfrastructureId**: string (ReadOnly): The vCenter infrastructure Id.
* **vmFriendlyName**: string (WriteOnly): The Vm Name.
* **vmId**: string (ReadOnly): The virtual machine Id.
* **vmNics**: [VMNicDetails](#vmnicdetails)[] (ReadOnly): The PE Network details.
* **vmProtectionState**: string (ReadOnly): The protection state for the vm.
* **vmProtectionStateDescription**: string (ReadOnly): The protection state description for the vm.

### InMageAzureV2EnableProtectionInput
#### Properties
* **agentExpiryDate**: string (ReadOnly): Agent expiry date.
* **agentVersion**: string (ReadOnly): The agent version.
* **azureVMDiskDetails**: [AzureVmDiskDetails](#azurevmdiskdetails)[] (ReadOnly): Azure VM Disk details.
* **compressedDataRateInMB**: int (ReadOnly): The compressed data change rate in MB.
* **datastores**: string[] (ReadOnly): The data stores of the on-premise machine. Value can be list of strings that contain data store names.
* **discoveryType**: string (ReadOnly): A value indicating the discovery type of the machine. Value can be vCenter or physical.
* **diskEncryptionSetId**: string (WriteOnly): The DiskEncryptionSet ARM ID.
* **diskResized**: string (ReadOnly): A value indicating whether any disk is resized for this VM.
* **disksToInclude**: [InMageAzureV2DiskInputDetails](#inmageazurev2diskinputdetails)[] (WriteOnly): The disks to include list.
* **diskType**: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' (WriteOnly): The DiskType.
* **enableRdpOnTargetOption**: string: The selected option to enable RDP\SSH on target vm after failover. String value of {SrsDataContract.EnableRDPOnTargetOption} enum.
* **infrastructureVmId**: string (ReadOnly): The infrastructure VM Id.
* **instanceType**: 'InMageAzureV2' (Required): The class type.
* **ipAddress**: string (ReadOnly): The source IP address.
* **isAgentUpdateRequired**: string (ReadOnly): A value indicating whether installed agent needs to be updated.
* **isRebootAfterUpdateRequired**: string (ReadOnly): A value indicating whether the source server requires a restart after update.
* **lastHeartbeat**: string (ReadOnly): The last heartbeat received from the source server.
* **lastRpoCalculatedTime**: string (ReadOnly): The last RPO calculated time.
* **lastUpdateReceivedTime**: string (ReadOnly): The last update time received from on-prem components.
* **licenseType**: string (ReadOnly): License Type of the VM to be used.
* **logStorageAccountId**: string (WriteOnly): The storage account to be used for logging during replication.
* **masterTargetId**: string: The Master target Id.
* **multiVmGroupId**: string: The multi vm group Id.
* **multiVmGroupName**: string: The multi vm group name.
* **multiVmSyncStatus**: string (ReadOnly): A value indicating whether multi vm sync is enabled or disabled.
* **osDiskId**: string (ReadOnly): The id of the disk containing the OS.
* **osType**: string (ReadOnly): The type of the OS on the VM.
* **osVersion**: string (ReadOnly): The OS Version of the protected item.
* **processServerId**: string: The Process Server Id.
* **processServerName**: string (ReadOnly): The process server name.
* **protectedDisks**: [InMageAzureV2ProtectedDiskDetails](#inmageazurev2protecteddiskdetails)[] (ReadOnly): The list of protected disks.
* **protectedManagedDisks**: [InMageAzureV2ManagedDiskDetails](#inmageazurev2manageddiskdetails)[] (ReadOnly): The list of protected managed disks.
* **protectionStage**: string (ReadOnly): The protection stage.
* **recoveryAvailabilitySetId**: string (ReadOnly): The recovery availability set Id.
* **recoveryAzureLogStorageAccountId**: string (ReadOnly): The ARM id of the log storage account used for replication. This will be set to null if no log storage account was provided during enable protection.
* **recoveryAzureResourceGroupId**: string (ReadOnly): The target resource group Id.
* **recoveryAzureStorageAccount**: string (ReadOnly): The recovery Azure storage account.
* **recoveryAzureVMName**: string (ReadOnly): Recovery Azure given name.
* **recoveryAzureVMSize**: string (ReadOnly): The Recovery Azure VM size.
* **replicaId**: string (ReadOnly): The replica id of the protected item.
* **resyncProgressPercentage**: int (ReadOnly): The resync progress percentage.
* **rpoInSeconds**: int (ReadOnly): The RPO in seconds.
* **runAsAccountId**: string (WriteOnly): The CS account Id.
* **selectedRecoveryAzureNetworkId**: string (ReadOnly): The selected recovery azure network Id.
* **selectedSourceNicId**: string (ReadOnly): The selected source nic Id which will be used as the primary nic during failover.
* **selectedTfoAzureNetworkId**: string (ReadOnly): The test failover virtual network.
* **sourceVmCpuCount**: int (ReadOnly): The CPU count of the VM on the primary side.
* **sourceVmRamSizeInMB**: int (ReadOnly): The RAM size of the VM on the primary side.
* **storageAccountId**: string (WriteOnly): The storage account name.
* **targetAvailabilitySetId**: string (WriteOnly): The availability set ARM Id.
* **targetAvailabilityZone**: string: The target availability zone.
* **targetAzureNetworkId**: string (WriteOnly): The selected target Azure network Id.
* **targetAzureSubnetId**: string (WriteOnly): The selected target Azure subnet Id.
* **targetAzureV1ResourceGroupId**: string (WriteOnly): The Id of the target resource group (for classic deployment) in which the failover VM is to be created.
* **targetAzureV2ResourceGroupId**: string (WriteOnly): The Id of the target resource group (for resource manager deployment) in which the failover VM is to be created.
* **targetAzureVmName**: string (WriteOnly): The target azure Vm Name.
* **targetProximityPlacementGroupId**: string: The proximity placement group ARM Id.
* **targetVmId**: string (ReadOnly): The ARM Id of the target Azure VM. This value will be null until the VM is failed over. Only after failure it will be populated with the ARM Id of the Azure VM.
* **targetVmSize**: string (WriteOnly): The target VM size.
* **uncompressedDataRateInMB**: int (ReadOnly): The uncompressed data change rate in MB.
* **useManagedDisks**: string (ReadOnly): A value indicating whether managed disks should be used during failover.
* **validationErrors**: [HealthError](#healtherror)[] (ReadOnly): The validation errors of the on-premise machine Value can be list of validation errors.
* **vCenterInfrastructureId**: string (ReadOnly): The vCenter infrastructure Id.
* **vhdName**: string (ReadOnly): The OS disk VHD name.
* **vmId**: string (ReadOnly): The virtual machine Id.
* **vmNics**: [VMNicDetails](#vmnicdetails)[] (ReadOnly): The PE Network details.
* **vmProtectionState**: string (ReadOnly): The protection state for the vm.
* **vmProtectionStateDescription**: string (ReadOnly): The protection state description for the vm.

### InMageRcmEnableProtectionInput
#### Properties
* **agentUpgradeBlockingErrorDetails**: [InMageRcmAgentUpgradeBlockingErrorDetails](#inmagercmagentupgradeblockingerrordetails)[] (ReadOnly): The agent upgrade blocking error information.
* **agentUpgradeState**: 'Commit' | 'Completed' | 'None' | 'Started' (ReadOnly): The agent auto upgrade state.
* **allocatedMemoryInMB**: int (ReadOnly): The allocated memory in MB.
* **discoveryType**: string (ReadOnly): The type of the discovered VM.
* **disksDefault**: [InMageRcmDisksDefaultInput](#inmagercmdisksdefaultinput) (WriteOnly): InMageRcm disk input.
* **disksToInclude**: [InMageRcmDiskInput](#inmagercmdiskinput)[] (WriteOnly): The disks to include list.
* **fabricDiscoveryMachineId**: string: The ARM Id of discovered machine.
* **failoverRecoveryPointId**: string (ReadOnly): The recovery point Id to which the VM was failed over.
* **firmwareType**: string (ReadOnly): The firmware type.
* **initialReplicationProcessedBytes**: int (ReadOnly): The initial replication processed bytes. This includes sum of total bytes transferred and matched bytes on all selected disks in source VM.
* **initialReplicationProgressPercentage**: int (ReadOnly): The initial replication progress percentage. This is calculated based on total bytes processed for all disks in the source VM.
* **initialReplicationTransferredBytes**: int (ReadOnly): The initial replication transferred bytes from source VM to azure for all selected disks on source VM.
* **instanceType**: 'InMageRcm' (Required): The class type.
* **internalIdentifier**: string (ReadOnly): The virtual machine internal identifier.
* **isLastUpgradeSuccessful**: string (ReadOnly): A value indicating whether last agent upgrade was successful or not.
* **lastAgentUpgradeErrorDetails**: [InMageRcmLastAgentUpgradeErrorDetails](#inmagercmlastagentupgradeerrordetails)[] (ReadOnly): The last agent upgrade error information.
* **lastAgentUpgradeFailedJobId**: string (ReadOnly): The last agent upgrade failed or cancelled job Id.
* **lastAgentUpgradeType**: string (ReadOnly): The last agent upgrade type.
* **lastRecoveryPointId**: string (ReadOnly): The last recovery point Id.
* **lastRecoveryPointReceived**: string (ReadOnly): The last recovery point received time.
* **lastRpoCalculatedTime**: string (ReadOnly): The last recovery point objective calculated time.
* **lastRpoInSeconds**: int (ReadOnly): The last recovery point objective value.
* **licenseType**: 'NoLicenseType' | 'NotSpecified' | 'WindowsServer': The license type.
* **mobilityAgentDetails**: [InMageRcmMobilityAgentDetails](#inmagercmmobilityagentdetails) (ReadOnly): InMageRcm mobility agent details.
* **multiVmGroupName**: string: The multi VM group name.
* **osType**: string (ReadOnly): The type of the OS on the VM.
* **processorCoreCount**: int (ReadOnly): The processor core count.
* **processServerId**: string: The process server Id.
* **processServerName**: string (ReadOnly): The process server name.
* **protectedDisks**: [InMageRcmProtectedDiskDetails](#inmagercmprotecteddiskdetails)[] (ReadOnly): The list of protected disks.
* **resyncProcessedBytes**: int (ReadOnly): The resync processed bytes. This includes sum of total bytes transferred and matched bytes on all selected disks in source VM.
* **resyncProgressPercentage**: int (ReadOnly): The resync progress percentage. This is calculated based on total bytes processed for all disks in the source VM.
* **resyncRequired**: string (ReadOnly): A value indicating whether resync is required.
* **resyncState**: 'None' | 'PreparedForResynchronization' | 'StartedResynchronization' (ReadOnly): The resync state.
* **resyncTransferredBytes**: int (ReadOnly): The resync transferred bytes from source VM to azure for all selected disks on source VM.
* **runAsAccountId**: string: The run-as account Id.
* **targetAvailabilitySetId**: string: The target availability set ARM Id.
* **targetAvailabilityZone**: string: The target availability zone.
* **targetBootDiagnosticsStorageAccountId**: string: The target boot diagnostics storage account ARM Id.
* **targetGeneration**: string (ReadOnly): The target generation.
* **targetNetworkId**: string: The selected target network ARM Id.
* **targetProximityPlacementGroupId**: string: The target proximity placement group Id.
* **targetResourceGroupId**: string: The target resource group ARM Id.
* **targetSubnetName**: string (WriteOnly): The selected target subnet name.
* **targetVmName**: string: The target VM name.
* **targetVmSize**: string: The target VM size.
* **testNetworkId**: string: The selected test network ARM Id.
* **testSubnetName**: string (WriteOnly): The selected test subnet name.
* **vmNics**: [InMageRcmNicDetails](#inmagercmnicdetails)[] (ReadOnly): The network details.

### SanEnableProtectionInput
#### Properties
* **instanceType**: 'San' (Required): The class type.


## DiskEncryptionInfo
### Properties
* **diskEncryptionKeyInfo**: [DiskEncryptionKeyInfo](#diskencryptionkeyinfo) (WriteOnly): Disk Encryption Key Information (BitLocker Encryption Key (BEK) on Windows).
* **keyEncryptionKeyInfo**: [KeyEncryptionKeyInfo](#keyencryptionkeyinfo) (WriteOnly): Key Encryption Key (KEK) information.

## DiskEncryptionKeyInfo
### Properties
* **keyVaultResourceArmId**: string (WriteOnly): The KeyVault resource ARM Id for secret.
* **secretIdentifier**: string (WriteOnly): The secret URL / identifier.

## KeyEncryptionKeyInfo
### Properties
* **keyIdentifier**: string (WriteOnly): The key URL / identifier.
* **keyVaultResourceArmId**: string (WriteOnly): The KeyVault resource ARM Id for key.

## A2AProtectedDiskDetails
### Properties
* **allowedDiskLevelOperation**: string[] (ReadOnly): The disk level operations list.
* **dataPendingAtSourceAgentInMB**: int (ReadOnly): The data pending at source virtual machine in MB.
* **dataPendingInStagingStorageAccountInMB**: int (ReadOnly): The data pending for replication in MB at staging account.
* **dekKeyVaultArmId**: string (ReadOnly): The KeyVault resource id for secret (BEK).
* **diskCapacityInBytes**: int (ReadOnly): The disk capacity in bytes.
* **diskName**: string (ReadOnly): The disk name.
* **diskState**: string (ReadOnly): The disk state.
* **diskType**: string (ReadOnly): The type of disk.
* **diskUri**: string (ReadOnly): The disk uri.
* **isDiskEncrypted**: bool (ReadOnly): A value indicating whether vm has encrypted os disk or not.
* **isDiskKeyEncrypted**: bool (ReadOnly): A value indicating whether disk key got encrypted or not.
* **kekKeyVaultArmId**: string (ReadOnly): The KeyVault resource id for key (KEK).
* **keyIdentifier**: string (ReadOnly): The key URL / identifier (KEK).
* **monitoringJobType**: string (ReadOnly): The type of the monitoring job. The progress is contained in MonitoringPercentageCompletion property.
* **monitoringPercentageCompletion**: int (ReadOnly): The percentage of the monitoring job. The type of the monitoring job is defined by MonitoringJobType property.
* **primaryDiskAzureStorageAccountId**: string (ReadOnly): The primary disk storage account.
* **primaryStagingAzureStorageAccountId**: string (ReadOnly): The primary staging storage account.
* **recoveryAzureStorageAccountId**: string (ReadOnly): The recovery disk storage account.
* **recoveryDiskUri**: string (ReadOnly): Recovery disk uri.
* **resyncRequired**: bool (ReadOnly): A value indicating whether resync is required for this disk.
* **secretIdentifier**: string (ReadOnly): The secret URL / identifier (BEK).

## A2AProtectedManagedDiskDetails
### Properties
* **allowedDiskLevelOperation**: string[] (ReadOnly): The disk level operations list.
* **dataPendingAtSourceAgentInMB**: int (ReadOnly): The data pending at source virtual machine in MB.
* **dataPendingInStagingStorageAccountInMB**: int (ReadOnly): The data pending for replication in MB at staging account.
* **dekKeyVaultArmId**: string (ReadOnly): The KeyVault resource id for secret (BEK).
* **diskCapacityInBytes**: int (ReadOnly): The disk capacity in bytes.
* **diskId**: string (ReadOnly): The managed disk Arm id.
* **diskName**: string (ReadOnly): The disk name.
* **diskState**: string (ReadOnly): The disk state.
* **diskType**: string (ReadOnly): The type of disk.
* **failoverDiskName**: string (ReadOnly): The failover name for the managed disk.
* **isDiskEncrypted**: bool (ReadOnly): A value indicating whether vm has encrypted os disk or not.
* **isDiskKeyEncrypted**: bool (ReadOnly): A value indicating whether disk key got encrypted or not.
* **kekKeyVaultArmId**: string (ReadOnly): The KeyVault resource id for key (KEK).
* **keyIdentifier**: string (ReadOnly): The key URL / identifier (KEK).
* **monitoringJobType**: string (ReadOnly): The type of the monitoring job. The progress is contained in MonitoringPercentageCompletion property.
* **monitoringPercentageCompletion**: int (ReadOnly): The percentage of the monitoring job. The type of the monitoring job is defined by MonitoringJobType property.
* **primaryStagingAzureStorageAccountId**: string (ReadOnly): The primary staging storage account.
* **recoveryDiskEncryptionSetId**: string (ReadOnly): The recovery disk encryption set Id.
* **recoveryReplicaDiskAccountType**: string (ReadOnly): The replica disk type. Its an optional value and will be same as source disk type if not user provided.
* **recoveryReplicaDiskId**: string (ReadOnly): Recovery replica disk Arm Id.
* **recoveryResourceGroupId**: string (ReadOnly): The recovery disk resource group Arm Id.
* **recoveryTargetDiskAccountType**: string (ReadOnly): The target disk type after failover. Its an optional value and will be same as source disk type if not user provided.
* **recoveryTargetDiskId**: string (ReadOnly): Recovery target disk Arm Id.
* **resyncRequired**: bool (ReadOnly): A value indicating whether resync is required for this disk.
* **secretIdentifier**: string (ReadOnly): The secret URL / identifier (BEK).
* **tfoDiskName**: string (ReadOnly): The test failover name for the managed disk.

## A2AUnprotectedDiskDetails
### Properties
* **diskLunId**: int (ReadOnly): The source lun Id for the data disk.

## A2AVmDiskInputDetails
### Properties
* **diskUri**: string (WriteOnly): The disk Uri.
* **primaryStagingAzureStorageAccountId**: string (WriteOnly): The primary staging storage account Id.
* **recoveryAzureStorageAccountId**: string (WriteOnly): The recovery VHD storage account Id.

## A2AVmManagedDiskInputDetails
### Properties
* **diskEncryptionInfo**: [DiskEncryptionInfo](#diskencryptioninfo) (WriteOnly): Recovery disk encryption info (BEK and KEK).
* **diskId**: string (WriteOnly): The disk Id.
* **primaryStagingAzureStorageAccountId**: string (WriteOnly): The primary staging storage account Arm Id.
* **recoveryDiskEncryptionSetId**: string (WriteOnly): The recovery disk encryption set Id.
* **recoveryReplicaDiskAccountType**: string (WriteOnly): The replica disk type. Its an optional value and will be same as source disk type if not user provided.
* **recoveryResourceGroupId**: string (WriteOnly): The target resource group Arm Id.
* **recoveryTargetDiskAccountType**: string (WriteOnly): The target disk type after failover. Its an optional value and will be same as source disk type if not user provided.

## VMNicDetails
### Properties
* **enableAcceleratedNetworkingOnRecovery**: bool (ReadOnly): A value indicating whether the NIC has accelerated networking enabled.
* **enableAcceleratedNetworkingOnTfo**: bool (ReadOnly): Whether the test failover NIC has accelerated networking enabled.
* **ipAddressType**: string (ReadOnly): Ip address type.
* **nicId**: string (ReadOnly): The nic Id.
* **primaryNicStaticIPAddress**: string (ReadOnly): Primary nic static IP address.
* **recoveryLBBackendAddressPoolIds**: string[] (ReadOnly): The target backend address pools for the NIC.
* **recoveryNetworkSecurityGroupId**: string (ReadOnly): The id of the NSG associated with the NIC.
* **recoveryNicIpAddressType**: string (ReadOnly): IP allocation type for recovery VM.
* **recoveryNicName**: string (ReadOnly): The name of the NIC to be used when creating target NICs.
* **recoveryNicResourceGroupName**: string (ReadOnly): The resource group of the NIC to be used when creating target NICs.
* **recoveryPublicIpAddressId**: string (ReadOnly): The id of the public IP address resource associated with the NIC.
* **recoveryVMNetworkId**: string (ReadOnly): Recovery VM network Id.
* **recoveryVMSubnetName**: string (ReadOnly): Recovery VM subnet name.
* **replicaNicId**: string (ReadOnly): The replica nic Id.
* **replicaNicStaticIPAddress**: string (ReadOnly): Replica nic static IP address.
* **reuseExistingNic**: bool (ReadOnly): A value indicating whether an existing NIC is allowed to be reused during failover subject to availability.
* **selectionType**: string (ReadOnly): Selection type for failover.
* **sourceNicArmId**: string (ReadOnly): The source nic ARM Id.
* **tfoIPConfigs**: [IPConfig](#ipconfig)[] (ReadOnly): The IP configurations to be used by NIC during test failover.
* **tfoNetworkSecurityGroupId**: string (ReadOnly): The NSG to be used by NIC during test failover.
* **tfoRecoveryNicName**: string (ReadOnly): The name of the NIC to be used when creating target NICs in TFO.
* **tfoRecoveryNicResourceGroupName**: string (ReadOnly): The resource group of the NIC to be used when creating target NICs in TFO.
* **tfoReuseExistingNic**: bool (ReadOnly): A value indicating whether an existing NIC is allowed to be reused during test failover subject to availability.
* **tfoVMNetworkId**: string (ReadOnly): The network to be used by NIC during test failover.
* **tfoVMSubnetName**: string (ReadOnly): The subnet to be used by NIC during test failover.
* **vMNetworkName**: string (ReadOnly): VM network name.
* **vMSubnetName**: string (ReadOnly): VM subnet name.

## IPConfig
### Properties
* **lBBackendAddressPoolIds**: string[] (ReadOnly): The backend address pools associated with the IP configuration.
* **publicIpAddressId**: string (ReadOnly): The Id of the public IP address associated with the IP configuration.
* **staticIPAddress**: string (ReadOnly): The static IP address of the IP configuration.

## AzureToAzureVmSyncedConfigDetails
### Properties
* **inputEndpoints**: [InputEndpoint](#inputendpoint)[] (ReadOnly): The Azure VM input endpoints.
* **tags**: [AzureToAzureVmSyncedConfigDetailsTags](#azuretoazurevmsyncedconfigdetailstags) (ReadOnly): The Azure VM tags.

## InputEndpoint
### Properties
* **endpointName**: string (ReadOnly): The input endpoint name.
* **privatePort**: int (ReadOnly): The input endpoint private port.
* **protocol**: string (ReadOnly): The input endpoint protocol.
* **publicPort**: int (ReadOnly): The input endpoint public port.

## AzureToAzureVmSyncedConfigDetailsTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## InitialReplicationDetails
### Properties
* **initialReplicationProgressPercentage**: string (ReadOnly): The initial replication progress percentage.
* **initialReplicationType**: string (ReadOnly): Initial replication type.

## DiskDetails
### Properties
* **maxSizeMB**: int (ReadOnly): The hard disk max size in MB.
* **vhdId**: string (ReadOnly): The VHD Id.
* **vhdName**: string (ReadOnly): The VHD name.
* **vhdType**: string (ReadOnly): The type of the volume.

## AzureVmDiskDetails
### Properties
* **diskEncryptionSetId**: string (ReadOnly): The DiskEncryptionSet ARM ID.
* **diskId**: string (ReadOnly): The disk resource id.
* **lunId**: string (ReadOnly): Ordinal\LunId of the disk for the Azure VM.
* **maxSizeMB**: string (ReadOnly): Max side in MB.
* **targetDiskLocation**: string (ReadOnly): Blob uri of the Azure disk.
* **targetDiskName**: string (ReadOnly): The target Azure disk name.
* **vhdId**: string (ReadOnly): The VHD id.
* **vhdName**: string (ReadOnly): VHD name.
* **vhdType**: string (ReadOnly): VHD type.

## OSDetails
### Properties
* **osEdition**: string (ReadOnly): The OSEdition.
* **oSMajorVersion**: string (ReadOnly): The OS Major Version.
* **oSMinorVersion**: string (ReadOnly): The OS Minor Version.
* **osType**: string (ReadOnly): VM Disk details.
* **oSVersion**: string (ReadOnly): The OS Version.
* **productType**: string (ReadOnly): Product type.

## InMageAgentDetails
### Properties
* **agentExpiryDate**: string (ReadOnly): Agent expiry date.
* **agentUpdateStatus**: string (ReadOnly): A value indicating whether installed agent needs to be updated.
* **agentVersion**: string (ReadOnly): The agent version.
* **postUpdateRebootStatus**: string (ReadOnly): A value indicating whether reboot is required after update is applied.

## InMageReplicationDetailsConsistencyPoints
### Properties
### Additional Properties
* **Additional Properties Type**: string

## InMageDiskExclusionInput
### Properties
* **diskSignatureOptions**: [InMageDiskSignatureExclusionOptions](#inmagedisksignatureexclusionoptions)[] (WriteOnly): The guest disk signature based option for disk exclusion.
* **volumeOptions**: [InMageVolumeExclusionOptions](#inmagevolumeexclusionoptions)[] (WriteOnly): The volume label based option for disk exclusion.

## InMageDiskSignatureExclusionOptions
### Properties
* **diskSignature**: string (WriteOnly): The guest signature of disk to be excluded from replication.

## InMageVolumeExclusionOptions
### Properties
* **onlyExcludeIfSingleVolume**: string (WriteOnly): The value indicating whether to exclude multi volume disk or not. If a disk has multiple volumes and one of the volume has label matching with VolumeLabel this disk will be excluded from replication if OnlyExcludeIfSingleVolume is false.
* **volumeLabel**: string (WriteOnly): The volume label. The disk having any volume with this label will be excluded from replication.

## OSDiskDetails
### Properties
* **osType**: string (ReadOnly): The type of the OS on the VM.
* **osVhdId**: string (ReadOnly): The id of the disk containing the OS.
* **vhdName**: string (ReadOnly): The OS disk VHD name.

## InMageProtectedDiskDetails
### Properties
* **diskCapacityInBytes**: int (ReadOnly): The disk capacity in bytes.
* **diskId**: string (ReadOnly): The disk id.
* **diskName**: string (ReadOnly): The disk name.
* **diskResized**: string (ReadOnly): A value indicating whether disk is resized.
* **fileSystemCapacityInBytes**: int (ReadOnly): The file system capacity in bytes.
* **healthErrorCode**: string (ReadOnly): The health error code for the disk.
* **lastRpoCalculatedTime**: string (ReadOnly): The last RPO calculated time.
* **protectionStage**: string (ReadOnly): The protection stage.
* **psDataInMB**: int (ReadOnly): The PS data transit in MB.
* **resyncDurationInSeconds**: int (ReadOnly): The resync duration in seconds.
* **resyncProgressPercentage**: int (ReadOnly): The resync progress percentage.
* **resyncRequired**: string (ReadOnly): A value indicating whether resync is required for this disk.
* **rpoInSeconds**: int (ReadOnly): The RPO in seconds.
* **sourceDataInMB**: int (ReadOnly): The source data transit in MB.
* **targetDataInMB**: int (ReadOnly): The target data transit in MB.

## InMageAzureV2DiskInputDetails
### Properties
* **diskEncryptionSetId**: string (WriteOnly): The DiskEncryptionSet ARM ID.
* **diskId**: string (WriteOnly): The DiskId.
* **diskType**: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' (WriteOnly): The DiskType.
* **logStorageAccountId**: string (WriteOnly): The LogStorageAccountId.

## InMageAzureV2ProtectedDiskDetails
### Properties
* **diskCapacityInBytes**: int (ReadOnly): The disk capacity in bytes.
* **diskId**: string (ReadOnly): The disk id.
* **diskName**: string (ReadOnly): The disk name.
* **diskResized**: string (ReadOnly): A value indicating whether disk is resized.
* **fileSystemCapacityInBytes**: int (ReadOnly): The disk file system capacity in bytes.
* **healthErrorCode**: string (ReadOnly): The health error code for the disk.
* **lastRpoCalculatedTime**: string (ReadOnly): The last RPO calculated time.
* **protectionStage**: string (ReadOnly): The protection stage.
* **psDataInMegaBytes**: int (ReadOnly): The PS data transit in MB.
* **resyncDurationInSeconds**: int (ReadOnly): The resync duration in seconds.
* **resyncProgressPercentage**: int (ReadOnly): The resync progress percentage.
* **resyncRequired**: string (ReadOnly): A value indicating whether resync is required for this disk.
* **rpoInSeconds**: int (ReadOnly): The RPO in seconds.
* **sourceDataInMegaBytes**: int (ReadOnly): The source data transit in MB.
* **targetDataInMegaBytes**: int (ReadOnly): The target data transit in MB.

## InMageAzureV2ManagedDiskDetails
### Properties
* **diskId**: string (ReadOnly): The disk id.
* **replicaDiskType**: string (ReadOnly): The replica disk type.
* **seedManagedDiskId**: string (ReadOnly): Seed managed disk Id.

## InMageRcmAgentUpgradeBlockingErrorDetails
### Properties
* **errorCode**: string (ReadOnly): The error code.
* **errorMessage**: string (ReadOnly): The error message.
* **errorMessageParameters**: [InMageRcmAgentUpgradeBlockingErrorDetailsErrorMessageParameters](#inmagercmagentupgradeblockingerrordetailserrormessageparameters) (ReadOnly): The error message parameters.
* **errorTags**: [InMageRcmAgentUpgradeBlockingErrorDetailsErrorTags](#inmagercmagentupgradeblockingerrordetailserrortags) (ReadOnly): The error tags.
* **possibleCauses**: string (ReadOnly): The possible causes.
* **recommendedAction**: string (ReadOnly): The recommended action.

## InMageRcmAgentUpgradeBlockingErrorDetailsErrorMessageParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## InMageRcmAgentUpgradeBlockingErrorDetailsErrorTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## InMageRcmDisksDefaultInput
### Properties
* **diskEncryptionSetId**: string (WriteOnly): The disk encryption set ARM Id.
* **diskType**: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' (WriteOnly): The DiskType.
* **logStorageAccountId**: string (WriteOnly): The log storage account ARM Id.

## InMageRcmDiskInput
### Properties
* **diskEncryptionSetId**: string (WriteOnly): The disk encryption set ARM Id.
* **diskId**: string (WriteOnly): The disk Id.
* **diskType**: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' (WriteOnly): The DiskType.
* **logStorageAccountId**: string (WriteOnly): The log storage account ARM Id.

## InMageRcmLastAgentUpgradeErrorDetails
### Properties
* **errorCode**: string (ReadOnly): The error code.
* **errorMessage**: string (ReadOnly): The error message.
* **errorMessageParameters**: [InMageRcmLastAgentUpgradeErrorDetailsErrorMessageParameters](#inmagercmlastagentupgradeerrordetailserrormessageparameters) (ReadOnly): The error message parameters.
* **errorTags**: [InMageRcmLastAgentUpgradeErrorDetailsErrorTags](#inmagercmlastagentupgradeerrordetailserrortags) (ReadOnly): The error tags.
* **possibleCauses**: string (ReadOnly): The possible causes.
* **recommendedAction**: string (ReadOnly): The recommended action.

## InMageRcmLastAgentUpgradeErrorDetailsErrorMessageParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## InMageRcmLastAgentUpgradeErrorDetailsErrorTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## InMageRcmMobilityAgentDetails
### Properties
* **agentVersionExpiryDate**: string (ReadOnly): The agent version expiry date.
* **driverVersion**: string (ReadOnly): The driver version.
* **driverVersionExpiryDate**: string (ReadOnly): The driver version expiry date.
* **isUpgradeable**: string (ReadOnly): A value indicating whether agent is upgradeable or not.
* **lastHeartbeatUtc**: string (ReadOnly): The time of the last heartbeat received from the agent.
* **latestUpgradableVersionWithoutReboot**: string (ReadOnly): The latest upgradeable version available without reboot.
* **latestVersion**: string (ReadOnly): The latest agent version available.
* **reasonsBlockingUpgrade**: 'AgentNoHeartbeat' | 'AlreadyOnLatestVersion' | 'DistroIsNotReported' | 'DistroNotSupportedForUpgrade' | 'IncompatibleApplianceVersion' | 'InvalidAgentVersion' | 'InvalidDriverVersion' | 'MissingUpgradePath' | 'NotProtected' | 'ProcessServerNoHeartbeat' | 'RcmProxyNoHeartbeat' | 'RebootRequired' | 'Unknown' | 'UnsupportedProtectionScenario'[] (ReadOnly): The whether update is possible or not.
* **version**: string (ReadOnly): The agent version.

## InMageRcmProtectedDiskDetails
### Properties
* **capacityInBytes**: int (ReadOnly): The disk capacity in bytes.
* **diskEncryptionSetId**: string (ReadOnly): The disk encryption set ARM Id.
* **diskId**: string (ReadOnly): The disk Id.
* **diskName**: string (ReadOnly): The disk name.
* **diskType**: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' (ReadOnly): The DiskType.
* **isOSDisk**: string (ReadOnly): A value indicating whether the disk is the OS disk.
* **logStorageAccountId**: string (ReadOnly): The log storage account ARM Id.
* **seedManagedDiskId**: string (ReadOnly): The ARM Id of the seed managed disk.
* **targetManagedDiskId**: string (ReadOnly): The ARM Id of the target managed disk.

## InMageRcmNicDetails
### Properties
* **isPrimaryNic**: string (ReadOnly): A value indicating whether this is the primary NIC.
* **isSelectedForFailover**: string (ReadOnly): A value indicating whether this NIC is selected for failover.
* **nicId**: string (ReadOnly): The NIC Id.
* **sourceIPAddress**: string (ReadOnly): The source IP address.
* **sourceIPAddressType**: 'Dynamic' | 'Static' (ReadOnly): The source IP address type.
* **sourceNetworkId**: string (ReadOnly): Source network Id.
* **sourceSubnetName**: string (ReadOnly): Source subnet name.
* **targetIPAddress**: string (ReadOnly): The target IP address.
* **targetIPAddressType**: 'Dynamic' | 'Static' (ReadOnly): The source IP address type.
* **targetSubnetName**: string (ReadOnly): Target subnet name.
* **testIPAddress**: string (ReadOnly): The test IP address.
* **testIPAddressType**: 'Dynamic' | 'Static' (ReadOnly): The source IP address type.
* **testSubnetName**: string (ReadOnly): Test subnet name.

## CreateProtectionContainerMappingInputProperties
### Properties
* **health**: string (ReadOnly): Health of pairing.
* **healthErrorDetails**: [HealthError](#healtherror)[] (ReadOnly): Health error.
* **policyFriendlyName**: string (ReadOnly): Friendly name of replication policy.
* **policyId**: string: Applicable policy.
* **providerSpecificDetails**: [ProtectionContainerMappingProviderSpecificDetails](#protectioncontainermappingproviderspecificdetails) (ReadOnly): Container mapping provider specific details.
* **providerSpecificInput**: [ReplicationProviderSpecificContainerMappingInput](#replicationproviderspecificcontainermappinginput) (WriteOnly): Provider specific input for pairing operations.
* **sourceFabricFriendlyName**: string (ReadOnly): Friendly name of source fabric.
* **sourceProtectionContainerFriendlyName**: string (ReadOnly): Friendly name of source protection container.
* **state**: string (ReadOnly): Association Status
* **targetFabricFriendlyName**: string (ReadOnly): Friendly name of target fabric.
* **targetProtectionContainerFriendlyName**: string (ReadOnly): Friendly name of paired container.
* **targetProtectionContainerId**: string: The target unique protection container name.

## ProtectionContainerMappingProviderSpecificDetails
* **Discriminator**: instanceType

### Base Properties
### A2AProtectionContainerMappingDetails
#### Properties
* **agentAutoUpdateStatus**: 'Disabled' | 'Enabled' (ReadOnly): A value indicating whether the auto update is enabled.
* **automationAccountArmId**: string (ReadOnly): The automation account arm id.
* **instanceType**: 'A2A' (Required): Gets the class type. Overridden in derived classes.
* **jobScheduleName**: string (ReadOnly): The job schedule arm name.
* **scheduleName**: string (ReadOnly): The schedule arm name.

### VMwareCbtProtectionContainerMappingDetails
#### Properties
* **instanceType**: 'VMwareCbt' (Required): Gets the class type. Overridden in derived classes.
* **keyVaultId**: string (ReadOnly): The target key vault ARM Id.
* **keyVaultUri**: string (ReadOnly): The target key vault URI.
* **serviceBusConnectionStringSecretName**: string (ReadOnly): The secret name of the service bus connection string.
* **storageAccountId**: string (ReadOnly): The storage account ARM Id.
* **storageAccountSasSecretName**: string (ReadOnly): The secret name of the storage account.
* **targetLocation**: string (ReadOnly): The target location.


## ReplicationProviderSpecificContainerMappingInput
* **Discriminator**: instanceType

### Base Properties
### A2AContainerMappingInput
#### Properties
* **agentAutoUpdateStatus**: 'Disabled' | 'Enabled' (WriteOnly): A value indicating whether the auto update is enabled.
* **automationAccountArmId**: string (WriteOnly): The automation account arm id.
* **instanceType**: 'A2A' (Required): The class type.

### VMwareCbtContainerMappingInput
#### Properties
* **instanceType**: 'VMwareCbt' (Required): The class type.
* **keyVaultId**: string (Required, WriteOnly): The target key vault ARM Id.
* **keyVaultUri**: string (Required, WriteOnly): The target key vault URL.
* **serviceBusConnectionStringSecretName**: string (Required, WriteOnly): The secret name of the service bus connection string.
* **storageAccountId**: string (Required, WriteOnly): The storage account ARM Id.
* **storageAccountSasSecretName**: string (Required, WriteOnly): The secret name of the storage account.
* **targetLocation**: string (Required, WriteOnly): The target location.


## AddRecoveryServicesProviderInputProperties
### Properties
* **allowedScenarios**: string[] (ReadOnly): The scenarios allowed on this provider.
* **authenticationIdentityDetails**: [IdentityProviderDetails](#identityproviderdetails) (ReadOnly): Identity provider details.
* **authenticationIdentityInput**: [IdentityProviderInput](#identityproviderinput) (Required, WriteOnly): Identity provider input.
* **connectionStatus**: string (ReadOnly): A value indicating whether DRA is responsive.
* **dataPlaneAuthenticationIdentityInput**: [IdentityProviderInput](#identityproviderinput) (WriteOnly): Identity provider input.
* **draIdentifier**: string (ReadOnly): The DRA Id.
* **fabricFriendlyName**: string (ReadOnly): The fabric friendly name.
* **fabricType**: string (ReadOnly): Type of the site.
* **friendlyName**: string (ReadOnly): Friendly name of the DRA.
* **healthErrorDetails**: [HealthError](#healtherror)[] (ReadOnly): The recovery services provider health error details.
* **lastHeartBeat**: string (ReadOnly): Time when last heartbeat was sent by the DRA.
* **machineId**: string (WriteOnly): The Id of the machine where the provider is getting added.
* **machineName**: string (Required, WriteOnly): The name of the machine where the provider is getting added.
* **protectedItemCount**: int (ReadOnly): Number of protected VMs currently managed by the DRA.
* **providerVersion**: string (ReadOnly): The provider version.
* **providerVersionDetails**: [VersionDetails](#versiondetails) (ReadOnly): Version related details.
* **providerVersionExpiryDate**: string (ReadOnly): Expiry date of the version.
* **providerVersionState**: string (ReadOnly): DRA version status.
* **resourceAccessIdentityDetails**: [IdentityProviderDetails](#identityproviderdetails) (ReadOnly): Identity provider details.
* **resourceAccessIdentityInput**: [IdentityProviderInput](#identityproviderinput) (Required, WriteOnly): Identity provider input.
* **serverVersion**: string (ReadOnly): The fabric provider.

## IdentityProviderDetails
### Properties
* **aadAuthority**: string (ReadOnly): The base authority for Azure Active Directory authentication.
* **applicationId**: string (ReadOnly): The application/client Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services.
* **audience**: string (ReadOnly): The intended Audience of the service principal with which the on-premise management/data plane components would communicate with our Azure services.
* **objectId**: string (ReadOnly): The object Id of the service principal with which the on-premise management/data plane components would communicate with our Azure services.
* **tenantId**: string (ReadOnly): The tenant Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services.

## StorageMappingInputProperties
### Properties
* **targetStorageClassificationId**: string: The ID of the storage object.

## AddVCenterRequestProperties
### Properties
* **discoveryStatus**: string (ReadOnly): The VCenter discovery status.
* **fabricArmResourceName**: string (ReadOnly): The ARM resource name of the fabric containing this VCenter.
* **friendlyName**: string: The friendly name of the vCenter.
* **healthErrors**: [HealthError](#healtherror)[] (ReadOnly): The health errors for this VCenter.
* **infrastructureId**: string (ReadOnly): The infrastructure Id of vCenter.
* **internalId**: string (ReadOnly): VCenter internal ID.
* **ipAddress**: string: The IP address of the vCenter to be discovered.
* **lastHeartbeat**: string (ReadOnly): The time when the last heartbeat was received by vCenter.
* **port**: string: The port number for discovery.
* **processServerId**: string: The process server Id from where the discovery is orchestrated.
* **runAsAccountId**: string: The account Id which has privileges to discover the vCenter.

## CreatePolicyInputProperties
### Properties
* **friendlyName**: string (ReadOnly): The FriendlyName.
* **providerSpecificDetails**: [PolicyProviderSpecificDetails](#policyproviderspecificdetails) (ReadOnly): Base class for Provider specific details for policies.
* **providerSpecificInput**: [PolicyProviderSpecificInput](#policyproviderspecificinput) (WriteOnly): Base class for provider specific input

## PolicyProviderSpecificDetails
* **Discriminator**: instanceType

### Base Properties
### A2APolicyDetails
#### Properties
* **appConsistentFrequencyInMinutes**: int (ReadOnly): The app consistent snapshot frequency in minutes.
* **crashConsistentFrequencyInMinutes**: int (ReadOnly): The crash consistent snapshot frequency in minutes.
* **instanceType**: 'A2A' (Required): Gets the class type. Overridden in derived classes.
* **multiVmSyncStatus**: string (ReadOnly): A value indicating whether multi-VM sync has to be enabled.
* **recoveryPointHistory**: int (ReadOnly): The duration in minutes until which the recovery points need to be stored.
* **recoveryPointThresholdInMinutes**: int (ReadOnly): The recovery point threshold in minutes.

### HyperVReplicaPolicyDetails
#### Properties
* **allowedAuthenticationType**: int (ReadOnly): A value indicating the authentication type.
* **applicationConsistentSnapshotFrequencyInHours**: int (ReadOnly): A value indicating the application consistent frequency.
* **compression**: string (ReadOnly): A value indicating whether compression has to be enabled.
* **initialReplicationMethod**: string (ReadOnly): A value indicating whether IR is online.
* **instanceType**: 'HyperVReplica2012' (Required): Gets the class type. Overridden in derived classes.
* **offlineReplicationExportPath**: string (ReadOnly): A value indicating the offline IR export path.
* **offlineReplicationImportPath**: string (ReadOnly): A value indicating the offline IR import path.
* **onlineReplicationStartTime**: string (ReadOnly): A value indicating the online IR start time.
* **recoveryPoints**: int (ReadOnly): A value indicating the number of recovery points.
* **replicaDeletionOption**: string (ReadOnly): A value indicating whether the VM has to be auto deleted. Supported Values: String.Empty, None, OnRecoveryCloud
* **replicationPort**: int (ReadOnly): A value indicating the recovery HTTPS port.

### HyperVReplicaBluePolicyDetails
#### Properties
* **allowedAuthenticationType**: int (ReadOnly): A value indicating the authentication type.
* **applicationConsistentSnapshotFrequencyInHours**: int (ReadOnly): A value indicating the application consistent frequency.
* **compression**: string (ReadOnly): A value indicating whether compression has to be enabled.
* **initialReplicationMethod**: string (ReadOnly): A value indicating whether IR is online.
* **instanceType**: 'HyperVReplica2012R2' (Required): Gets the class type. Overridden in derived classes.
* **offlineReplicationExportPath**: string (ReadOnly): A value indicating the offline IR export path.
* **offlineReplicationImportPath**: string (ReadOnly): A value indicating the offline IR import path.
* **onlineReplicationStartTime**: string (ReadOnly): A value indicating the online IR start time.
* **recoveryPoints**: int (ReadOnly): A value indicating the number of recovery points.
* **replicaDeletionOption**: string (ReadOnly): A value indicating whether the VM has to be auto deleted. Supported Values: String.Empty, None, OnRecoveryCloud
* **replicationFrequencyInSeconds**: int (ReadOnly): A value indicating the replication interval.
* **replicationPort**: int (ReadOnly): A value indicating the recovery HTTPS port.

### HyperVReplicaAzurePolicyDetails
#### Properties
* **activeStorageAccountId**: string (ReadOnly): The active storage account Id.
* **applicationConsistentSnapshotFrequencyInHours**: int (ReadOnly): The interval (in hours) at which Hyper-V Replica should create an application consistent snapshot within the VM.
* **encryption**: string (ReadOnly): A value indicating whether encryption is enabled for virtual machines in this cloud.
* **instanceType**: 'HyperVReplicaAzure' (Required): Gets the class type. Overridden in derived classes.
* **onlineReplicationStartTime**: string (ReadOnly): The scheduled start time for the initial replication. If this parameter is Null, the initial replication starts immediately.
* **recoveryPointHistoryDurationInHours**: int (ReadOnly): The duration (in hours) to which point the recovery history needs to be maintained.
* **replicationInterval**: int (ReadOnly): The replication interval.

### HyperVReplicaBasePolicyDetails
#### Properties
* **allowedAuthenticationType**: int (ReadOnly): A value indicating the authentication type.
* **applicationConsistentSnapshotFrequencyInHours**: int (ReadOnly): A value indicating the application consistent frequency.
* **compression**: string (ReadOnly): A value indicating whether compression has to be enabled.
* **initialReplicationMethod**: string (ReadOnly): A value indicating whether IR is online.
* **instanceType**: 'HyperVReplicaBasePolicyDetails' (Required): Gets the class type. Overridden in derived classes.
* **offlineReplicationExportPath**: string (ReadOnly): A value indicating the offline IR export path.
* **offlineReplicationImportPath**: string (ReadOnly): A value indicating the offline IR import path.
* **onlineReplicationStartTime**: string (ReadOnly): A value indicating the online IR start time.
* **recoveryPoints**: int (ReadOnly): A value indicating the number of recovery points.
* **replicaDeletionOption**: string (ReadOnly): A value indicating whether the VM has to be auto deleted. Supported Values: String.Empty, None, OnRecoveryCloud
* **replicationPort**: int (ReadOnly): A value indicating the recovery HTTPS port.

### InMagePolicyDetails
#### Properties
* **appConsistentFrequencyInMinutes**: int (ReadOnly): The app consistent snapshot frequency in minutes.
* **instanceType**: 'InMage' (Required): Gets the class type. Overridden in derived classes.
* **multiVmSyncStatus**: string (ReadOnly): A value indicating whether multi-VM sync has to be enabled.
* **recoveryPointHistory**: int (ReadOnly): The duration in minutes until which the recovery points need to be stored.
* **recoveryPointThresholdInMinutes**: int (ReadOnly): The recovery point threshold in minutes.

### InMageAzureV2PolicyDetails
#### Properties
* **appConsistentFrequencyInMinutes**: int (ReadOnly): The app consistent snapshot frequency in minutes.
* **crashConsistentFrequencyInMinutes**: int (ReadOnly): The crash consistent snapshot frequency in minutes.
* **instanceType**: 'InMageAzureV2' (Required): Gets the class type. Overridden in derived classes.
* **multiVmSyncStatus**: string (ReadOnly): A value indicating whether multi-VM sync has to be enabled.
* **recoveryPointHistory**: int (ReadOnly): The duration in minutes until which the recovery points need to be stored.
* **recoveryPointThresholdInMinutes**: int (ReadOnly): The recovery point threshold in minutes.

### InMageBasePolicyDetails
#### Properties
* **appConsistentFrequencyInMinutes**: int (ReadOnly): The app consistent snapshot frequency in minutes.
* **instanceType**: 'InMageBasePolicyDetails' (Required): Gets the class type. Overridden in derived classes.
* **multiVmSyncStatus**: string (ReadOnly): A value indicating whether multi-VM sync has to be enabled.
* **recoveryPointHistory**: int (ReadOnly): The duration in minutes until which the recovery points need to be stored.
* **recoveryPointThresholdInMinutes**: int (ReadOnly): The recovery point threshold in minutes.

### InMageRcmPolicyDetails
#### Properties
* **appConsistentFrequencyInMinutes**: int (ReadOnly): The app consistent snapshot frequency in minutes.
* **crashConsistentFrequencyInMinutes**: int (ReadOnly): The crash consistent snapshot frequency in minutes.
* **enableMultiVmSync**: string (ReadOnly): A value indicating whether multi-VM sync has to be enabled.
* **instanceType**: 'InMageRcm' (Required): Gets the class type. Overridden in derived classes.
* **recoveryPointHistoryInMinutes**: int (ReadOnly): The duration in minutes until which the recovery points need to be stored.

### RcmAzureMigrationPolicyDetails
#### Properties
* **appConsistentFrequencyInMinutes**: int (ReadOnly): The app consistent snapshot frequency in minutes.
* **crashConsistentFrequencyInMinutes**: int (ReadOnly): The crash consistent snapshot frequency in minutes.
* **instanceType**: 'RcmAzureMigration' (Required): Gets the class type. Overridden in derived classes.
* **multiVmSyncStatus**: 'Disabled' | 'Enabled' (ReadOnly): A value indicating whether multi-VM sync has to be enabled.
* **recoveryPointHistory**: int (ReadOnly): The duration in minutes until which the recovery points need to be stored.
* **recoveryPointThresholdInMinutes**: int (ReadOnly): The recovery point threshold in minutes.

### VmwareCbtPolicyDetails
#### Properties
* **appConsistentFrequencyInMinutes**: int (ReadOnly): The app consistent snapshot frequency in minutes.
* **crashConsistentFrequencyInMinutes**: int (ReadOnly): The crash consistent snapshot frequency in minutes.
* **instanceType**: 'VMwareCbt' (Required): Gets the class type. Overridden in derived classes.
* **recoveryPointHistoryInMinutes**: int (ReadOnly): The duration in minutes until which the recovery points need to be stored.


## PolicyProviderSpecificInput
* **Discriminator**: instanceType

### Base Properties
### A2APolicyCreationInput
#### Properties
* **appConsistentFrequencyInMinutes**: int (WriteOnly): The app consistent snapshot frequency (in minutes).
* **crashConsistentFrequencyInMinutes**: int (WriteOnly): The crash consistent snapshot frequency (in minutes).
* **instanceType**: 'A2A' (Required): The class type.
* **multiVmSyncStatus**: 'Disable' | 'Enable' (Required, WriteOnly): A value indicating whether multi-VM sync has to be enabled. Value should be 'Enabled' or 'Disabled'.
* **recoveryPointHistory**: int (WriteOnly): The duration in minutes until which the recovery points need to be stored.

### HyperVReplicaPolicyInput
#### Properties
* **allowedAuthenticationType**: int (WriteOnly): A value indicating the authentication type.
* **applicationConsistentSnapshotFrequencyInHours**: int (WriteOnly): A value indicating the application consistent frequency.
* **compression**: string (WriteOnly): A value indicating whether compression has to be enabled.
* **initialReplicationMethod**: string (WriteOnly): A value indicating whether IR is online.
* **instanceType**: 'HyperVReplica2012' (Required): The class type.
* **offlineReplicationExportPath**: string (WriteOnly): A value indicating the offline IR export path.
* **offlineReplicationImportPath**: string (WriteOnly): A value indicating the offline IR import path.
* **onlineReplicationStartTime**: string (WriteOnly): A value indicating the online IR start time.
* **recoveryPoints**: int (WriteOnly): A value indicating the number of recovery points.
* **replicaDeletion**: string (WriteOnly): A value indicating whether the VM has to be auto deleted.
* **replicationPort**: int (WriteOnly): A value indicating the recovery HTTPS port.

### HyperVReplicaBluePolicyInput
#### Properties
* **allowedAuthenticationType**: int (WriteOnly): A value indicating the authentication type.
* **applicationConsistentSnapshotFrequencyInHours**: int (WriteOnly): A value indicating the application consistent frequency.
* **compression**: string (WriteOnly): A value indicating whether compression has to be enabled.
* **initialReplicationMethod**: string (WriteOnly): A value indicating whether IR is online.
* **instanceType**: 'HyperVReplica2012R2' (Required): The class type.
* **offlineReplicationExportPath**: string (WriteOnly): A value indicating the offline IR export path.
* **offlineReplicationImportPath**: string (WriteOnly): A value indicating the offline IR import path.
* **onlineReplicationStartTime**: string (WriteOnly): A value indicating the online IR start time.
* **recoveryPoints**: int (WriteOnly): A value indicating the number of recovery points.
* **replicaDeletion**: string (WriteOnly): A value indicating whether the VM has to be auto deleted.
* **replicationFrequencyInSeconds**: int (WriteOnly): A value indicating the replication interval.
* **replicationPort**: int (WriteOnly): A value indicating the recovery HTTPS port.

### HyperVReplicaAzurePolicyInput
#### Properties
* **applicationConsistentSnapshotFrequencyInHours**: int (WriteOnly): The interval (in hours) at which Hyper-V Replica should create an application consistent snapshot within the VM.
* **instanceType**: 'HyperVReplicaAzure' (Required): The class type.
* **onlineReplicationStartTime**: string (WriteOnly): The scheduled start time for the initial replication. If this parameter is Null, the initial replication starts immediately.
* **recoveryPointHistoryDuration**: int (WriteOnly): The duration (in hours) to which point the recovery history needs to be maintained.
* **replicationInterval**: int (WriteOnly): The replication interval.
* **storageAccounts**: string[] (WriteOnly): The list of storage accounts to which the VMs in the primary cloud can replicate to.

### InMagePolicyInput
#### Properties
* **appConsistentFrequencyInMinutes**: int (WriteOnly): The app consistent snapshot frequency (in minutes).
* **instanceType**: 'InMage' (Required): The class type.
* **multiVmSyncStatus**: 'Disable' | 'Enable' (Required, WriteOnly): A value indicating whether multi-VM sync has to be enabled. Value should be 'Enabled' or 'Disabled'.
* **recoveryPointHistory**: int (WriteOnly): The duration in minutes until which the recovery points need to be stored.
* **recoveryPointThresholdInMinutes**: int (WriteOnly): The recovery point threshold in minutes.

### InMageAzureV2PolicyInput
#### Properties
* **appConsistentFrequencyInMinutes**: int (WriteOnly): The app consistent snapshot frequency (in minutes).
* **crashConsistentFrequencyInMinutes**: int (WriteOnly): The crash consistent snapshot frequency (in minutes).
* **instanceType**: 'InMageAzureV2' (Required): The class type.
* **multiVmSyncStatus**: 'Disable' | 'Enable' (Required, WriteOnly): A value indicating whether multi-VM sync has to be enabled. Value should be 'Enabled' or 'Disabled'.
* **recoveryPointHistory**: int (WriteOnly): The duration in minutes until which the recovery points need to be stored.
* **recoveryPointThresholdInMinutes**: int (WriteOnly): The recovery point threshold in minutes.

### InMageRcmPolicyCreationInput
#### Properties
* **appConsistentFrequencyInMinutes**: int (WriteOnly): The app consistent snapshot frequency (in minutes).
* **crashConsistentFrequencyInMinutes**: int (WriteOnly): The crash consistent snapshot frequency (in minutes).
* **enableMultiVmSync**: string (WriteOnly): A value indicating whether multi-VM sync has to be enabled.
* **instanceType**: 'InMageRcm' (Required): The class type.
* **recoveryPointHistoryInMinutes**: int (WriteOnly): The duration in minutes until which the recovery points need to be stored.

### VMwareCbtPolicyCreationInput
#### Properties
* **appConsistentFrequencyInMinutes**: int (WriteOnly): The app consistent snapshot frequency (in minutes).
* **crashConsistentFrequencyInMinutes**: int (WriteOnly): The crash consistent snapshot frequency (in minutes).
* **instanceType**: 'VMwareCbt' (Required): The class type.
* **recoveryPointHistoryInMinutes**: int (WriteOnly): The duration in minutes until which the recovery points need to be stored.


## CreateProtectionIntentProperties
### Properties
* **creationTimeUTC**: string (ReadOnly): The creation time in UTC.
* **friendlyName**: string (ReadOnly): The name.
* **isActive**: bool (ReadOnly): A value indicating whether the intent object is active.
* **jobId**: string (ReadOnly): The job Id.
* **jobState**: string (ReadOnly): The job state.
* **providerSpecificDetails**: [CreateProtectionIntentProviderSpecificDetails](#createprotectionintentproviderspecificdetails): Create protection intent provider specific input.

## CreateProtectionIntentProviderSpecificDetails
* **Discriminator**: instanceType

### Base Properties
### A2ACreateProtectionIntentInput
#### Properties
* **autoProtectionOfDataDisk**: 'Disabled' | 'Enabled' (WriteOnly): A value indicating whether the auto protection is enabled.
* **autoProtectionOfDataDiskStatus**: 'Disabled' | 'Enabled' (ReadOnly): A value indicating whether the auto protection is enabled.
* **diskEncryptionInfo**: [DiskEncryptionInfo](#diskencryptioninfo): Recovery disk encryption info (BEK and KEK).
* **fabricObjectId**: string (Required): The fabric specific object Id of the virtual machine.
* **instanceType**: 'A2A' (Required): The class type.
* **multiVmGroupId**: string: The multi vm group id.
* **multiVmGroupName**: string: The multi vm group name.
* **policyId**: string (ReadOnly): The ID of Policy governing this PE.
* **primaryContainerFriendlyName**: string (ReadOnly): The primary container Name.
* **primaryFabricFriendlyName**: string (ReadOnly): The recovery fabric Name.
* **primaryLocation**: string (Required): The primary location for the virtual machine.
* **primaryStagingStorageAccountCustomInput**: [StorageAccountCustomDetails](#storageaccountcustomdetails) (WriteOnly): Storage account custom input.
* **protectionProfileCustomInput**: [ProtectionProfileCustomDetails](#protectionprofilecustomdetails) (WriteOnly): Protection Profile custom input.
* **recoveryAvailabilitySetCustomInput**: [RecoveryAvailabilitySetCustomDetails](#recoveryavailabilitysetcustomdetails) (WriteOnly): Recovery Availability Set custom input.
* **recoveryAvailabilitySetId**: string (ReadOnly): The recovery availability set Id.
* **recoveryAvailabilityType**: 'AvailabilitySet' | 'AvailabilityZone' | 'Single' (Required): The recovery availability type of the virtual machine.
* **recoveryAvailabilityZone**: string: The recovery availability zone.
* **recoveryBootDiagStorageAccount**: [StorageAccountCustomDetails](#storageaccountcustomdetails) (WriteOnly): Storage account custom input.
* **recoveryBootDiagStorageAccountId**: string (ReadOnly): The boot diagnostic storage account.
* **recoveryContainerFriendlyName**: string (ReadOnly): The recovery container Name.
* **recoveryFabricFriendlyName**: string (ReadOnly): The recovery fabric Name.
* **recoveryLocation**: string (Required): The recovery location for the virtual machine.
* **recoveryProximityPlacementGroupCustomInput**: [RecoveryProximityPlacementGroupCustomDetails](#recoveryproximityplacementgroupcustomdetails) (WriteOnly): Recovery Proximity placement group custom input.
* **recoveryProximityPlacementGroupId**: string (ReadOnly): The recovery proximity placement group custom details.
* **recoveryResourceGroupId**: string (Required): The recovery resource group Id. Valid for V2 scenarios.
* **recoverySubscriptionId**: string (Required): The recovery subscription Id of the virtual machine.
* **recoveryVirtualNetworkCustomInput**: [RecoveryVirtualNetworkCustomDetails](#recoveryvirtualnetworkcustomdetails) (WriteOnly): Recovery Virtual network custom input.
* **recoveryVirtualNetworkId**: string (ReadOnly): The recovery virtual network Id.
* **vmDisks**: [A2AProtectionIntentDiskInputDetails](#a2aprotectionintentdiskinputdetails)[]: The list of vm disk inputs.
* **vmManagedDisks**: [A2AProtectionIntentManagedDiskInputDetails](#a2aprotectionintentmanageddiskinputdetails)[]: The list of vm managed disk inputs.


## StorageAccountCustomDetails
* **Discriminator**: resourceType

### Base Properties
### ExistingStorageAccount
#### Properties
* **azureStorageAccountId**: string (Required, WriteOnly): The storage account Arm Id. Throw error, if resource does not exists.
* **resourceType**: 'Existing' (Required): The class type.


## ProtectionProfileCustomDetails
* **Discriminator**: resourceType

### Base Properties
### ExistingProtectionProfile
#### Properties
* **protectionProfileId**: string (Required, WriteOnly): The protection profile Arm Id. Throw error, if resource does not exists.
* **resourceType**: 'Existing' (Required): The class type.

### NewProtectionProfile
#### Properties
* **appConsistentFrequencyInMinutes**: int (WriteOnly): The app consistent snapshot frequency (in minutes).
* **crashConsistentFrequencyInMinutes**: int (WriteOnly): The crash consistent snapshot frequency (in minutes).
* **multiVmSyncStatus**: 'Disable' | 'Enable' (Required, WriteOnly): A value indicating whether multi-VM sync has to be enabled. Value should be 'Enabled' or 'Disabled'.
* **policyName**: string (Required, WriteOnly): The protection profile input.
* **recoveryPointHistory**: int (WriteOnly): The duration in minutes until which the recovery points need to be stored.
* **resourceType**: 'New' (Required): The class type.


## RecoveryAvailabilitySetCustomDetails
* **Discriminator**: resourceType

### Base Properties
### ExistingRecoveryAvailabilitySet
#### Properties
* **recoveryAvailabilitySetId**: string (WriteOnly): The recovery availability set Id. Will throw error, if resource does not exist.
* **resourceType**: 'Existing' (Required): The class type.


## RecoveryProximityPlacementGroupCustomDetails
* **Discriminator**: resourceType

### Base Properties
### ExistingRecoveryProximityPlacementGroup
#### Properties
* **recoveryProximityPlacementGroupId**: string (WriteOnly): The recovery proximity placement group Id. Will throw error, if resource does not exist.
* **resourceType**: 'Existing' (Required): The class type.


## RecoveryVirtualNetworkCustomDetails
* **Discriminator**: resourceType

### Base Properties
### ExistingRecoveryVirtualNetwork
#### Properties
* **recoverySubnetName**: string (WriteOnly): The recovery subnet name.
* **recoveryVirtualNetworkId**: string (Required, WriteOnly): The recovery virtual network Id. Will throw error, if resource does not exist.
* **resourceType**: 'Existing' (Required): The class type.

### NewRecoveryVirtualNetwork
#### Properties
* **recoveryVirtualNetworkName**: string (WriteOnly): The recovery virtual network name.
* **recoveryVirtualNetworkResourceGroupName**: string (WriteOnly): The name of the resource group to be used to create the recovery virtual network. If absent, target network would be created in the same resource group as target VM.
* **resourceType**: 'New' (Required): The class type.


## A2AProtectionIntentDiskInputDetails
### Properties
* **diskUri**: string (Required): The disk Uri.
* **primaryStagingAzureStorageAccountId**: string (ReadOnly): The primary staging storage account Id.
* **primaryStagingStorageAccountCustomInput**: [StorageAccountCustomDetails](#storageaccountcustomdetails) (WriteOnly): Storage account custom input.
* **recoveryAzureStorageAccountCustomInput**: [StorageAccountCustomDetails](#storageaccountcustomdetails) (WriteOnly): Storage account custom input.
* **recoveryAzureStorageAccountId**: string (ReadOnly): The recovery VHD storage account Id.

## A2AProtectionIntentManagedDiskInputDetails
### Properties
* **diskEncryptionInfo**: [DiskEncryptionInfo](#diskencryptioninfo): Recovery disk encryption info (BEK and KEK).
* **diskId**: string (Required): The disk Id.
* **primaryStagingAzureStorageAccountId**: string (ReadOnly): The primary staging storage account Arm Id.
* **primaryStagingStorageAccountCustomInput**: [StorageAccountCustomDetails](#storageaccountcustomdetails) (WriteOnly): Storage account custom input.
* **recoveryDiskEncryptionSetId**: string: The recovery disk encryption set Id.
* **recoveryReplicaDiskAccountType**: string: The replica disk type. Its an optional value and will be same as source disk type if not user provided.
* **recoveryResourceGroupCustomInput**: [RecoveryResourceGroupCustomDetails](#recoveryresourcegroupcustomdetails) (WriteOnly): Recovery Resource Group custom input.
* **recoveryResourceGroupId**: string (ReadOnly): The target resource group Arm Id.
* **recoveryTargetDiskAccountType**: string: The target disk type after failover. Its an optional value and will be same as source disk type if not user provided.

## RecoveryResourceGroupCustomDetails
* **Discriminator**: resourceType

### Base Properties
### ExistingRecoveryResourceGroup
#### Properties
* **recoveryResourceGroupId**: string (WriteOnly): The recovery resource group Id. Valid for V2 scenarios.
* **resourceType**: 'Existing' (Required): The class type.


## CreateRecoveryPlanInputProperties
### Properties
* **allowedOperations**: string[] (ReadOnly): The list of allowed operations.
* **currentScenario**: [CurrentScenarioDetails](#currentscenariodetails) (ReadOnly): Current scenario details of the protected entity.
* **currentScenarioStatus**: string (ReadOnly): The recovery plan status.
* **currentScenarioStatusDescription**: string (ReadOnly): The recovery plan status description.
* **failoverDeploymentModel**: 'Classic' | 'NotApplicable' | 'ResourceManager': The failover deployment model.
* **friendlyName**: string (ReadOnly): The friendly name.
* **groups**: [RecoveryPlanGroup](#recoveryplangroup)[] (Required): The recovery plan groups.
* **lastPlannedFailoverTime**: string (ReadOnly): The start time of the last planned failover.
* **lastTestFailoverTime**: string (ReadOnly): The start time of the last test failover.
* **lastUnplannedFailoverTime**: string (ReadOnly): The start time of the last unplanned failover.
* **primaryFabricFriendlyName**: string (ReadOnly): The primary fabric friendly name.
* **primaryFabricId**: string (Required): The primary fabric Id.
* **providerSpecificDetails**: [RecoveryPlanProviderSpecificDetails](#recoveryplanproviderspecificdetails)[] (ReadOnly): The provider id and provider specific details.
* **providerSpecificInput**: [RecoveryPlanProviderSpecificInput](#recoveryplanproviderspecificinput)[] (WriteOnly): The provider specific input.
* **recoveryFabricFriendlyName**: string (ReadOnly): The recovery fabric friendly name.
* **recoveryFabricId**: string (Required): The recovery fabric Id.
* **replicationProviders**: string[] (ReadOnly): The list of replication providers.

## RecoveryPlanGroup
### Properties
* **endGroupActions**: [RecoveryPlanAction](#recoveryplanaction)[]: The end group actions.
* **groupType**: 'Boot' | 'Failover' | 'Shutdown' (Required): The group type.
* **replicationProtectedItems**: [RecoveryPlanProtectedItem](#recoveryplanprotecteditem)[]: The list of protected items.
* **startGroupActions**: [RecoveryPlanAction](#recoveryplanaction)[]: The start group actions.

## RecoveryPlanAction
### Properties
* **actionName**: string (Required): The action name.
* **customDetails**: [RecoveryPlanActionDetails](#recoveryplanactiondetails) (Required): Recovery plan action custom details.
* **failoverDirections**: 'PrimaryToRecovery' | 'RecoveryToPrimary'[] (Required): The list of failover directions.
* **failoverTypes**: 'ChangePit' | 'Commit' | 'CompleteMigration' | 'DisableProtection' | 'Failback' | 'FinalizeFailback' | 'PlannedFailover' | 'RepairReplication' | 'ReverseReplicate' | 'SwitchProtection' | 'TestFailover' | 'TestFailoverCleanup' | 'UnplannedFailover'[] (Required): The list of failover types.

## RecoveryPlanActionDetails
* **Discriminator**: instanceType

### Base Properties
### RecoveryPlanAutomationRunbookActionDetails
#### Properties
* **fabricLocation**: 'Primary' | 'Recovery' (Required): The fabric location.
* **instanceType**: 'AutomationRunbookActionDetails' (Required): Gets the type of action details (see RecoveryPlanActionDetailsTypes enum for possible values).
* **runbookId**: string: The runbook ARM Id.
* **timeout**: string: The runbook timeout.

### RecoveryPlanManualActionDetails
#### Properties
* **description**: string: The manual action description.
* **instanceType**: 'ManualActionDetails' (Required): Gets the type of action details (see RecoveryPlanActionDetailsTypes enum for possible values).

### RecoveryPlanScriptActionDetails
#### Properties
* **fabricLocation**: 'Primary' | 'Recovery' (Required): The fabric location.
* **instanceType**: 'ScriptActionDetails' (Required): Gets the type of action details (see RecoveryPlanActionDetailsTypes enum for possible values).
* **path**: string (Required): The script path.
* **timeout**: string: The script timeout.


## RecoveryPlanProtectedItem
### Properties
* **id**: string: The ARM Id of the recovery plan protected item.
* **virtualMachineId**: string: The virtual machine Id.

## RecoveryPlanProviderSpecificDetails
* **Discriminator**: instanceType

### Base Properties
### RecoveryPlanA2ADetails
#### Properties
* **instanceType**: 'A2A' (Required): Gets the Instance type.
* **primaryZone**: string (ReadOnly): The primary zone.
* **recoveryZone**: string (ReadOnly): The recovery zone.


## RecoveryPlanProviderSpecificInput
* **Discriminator**: instanceType

### Base Properties
### RecoveryPlanA2AInput
#### Properties
* **instanceType**: 'A2A' (Required): Gets the Instance type.
* **primaryZone**: string (WriteOnly): The primary zone.
* **recoveryZone**: string (WriteOnly): The recovery zone.


## VaultSettingCreationInputProperties
### Properties
* **migrationSolutionId**: string (Required): The migration solution Id.

