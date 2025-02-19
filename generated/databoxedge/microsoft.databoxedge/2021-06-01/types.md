# Microsoft.DataBoxEdge @ 2021-06-01

## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices@2021-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The etag for the devices.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ResourceIdentity](#resourceidentity): Msi identity details of the resource
* **kind**: 'AzureDataBoxGateway' | 'AzureModularDataCentre' | 'AzureStackEdge' | 'AzureStackHub': The kind of the device.
* **location**: string (Required): The location of the device. This is a supported and registered Azure geographical region (for example, West US, East US, or Southeast Asia). The geographical region of a device cannot be changed once it is created, but if an identical geographical region is specified on update, the request will succeed.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DataBoxEdgeDeviceProperties](#databoxedgedeviceproperties): The properties of the Data Box Edge/Gateway device.
* **sku**: [Sku](#sku): The SKU type.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [DataBoxEdgeDeviceTags](#databoxedgedevicetags): The list of tags that describe the device. These tags can be used to view and group this device (across resource groups).
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices/bandwidthSchedules@2021-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BandwidthScheduleProperties](#bandwidthscheduleproperties) (Required): The properties of the bandwidth schedule.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/bandwidthSchedules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices/diagnosticProactiveLogCollectionSettings@2021-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ProactiveLogCollectionSettingsProperties](#proactivelogcollectionsettingsproperties) (Required): The properties of proactive log collection settings.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/diagnosticProactiveLogCollectionSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices/diagnosticRemoteSupportSettings@2021-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [DiagnosticRemoteSupportSettingsProperties](#diagnosticremotesupportsettingsproperties) (Required): The properties of remote support settings.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/diagnosticRemoteSupportSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices/orders@2021-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [OrderProperties](#orderproperties): Order properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/orders' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles@2021-06-01
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2021-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles' (ReadOnly, DeployTimeConstant): The resource type
### CloudEdgeManagementRole
#### Properties
* **kind**: 'CloudEdgeManagement' (Required): Role type.
* **properties**: [CloudEdgeManagementRoleProperties](#cloudedgemanagementroleproperties): CloudEdgeManagement Role properties.

### IoTRole
#### Properties
* **kind**: 'IOT' (Required): Role type.
* **properties**: [IoTRoleProperties](#iotroleproperties): IoT role properties.

### KubernetesRole
#### Properties
* **kind**: 'Kubernetes' (Required): Role type.
* **properties**: [KubernetesRoleProperties](#kubernetesroleproperties): Kubernetes role properties.

### MECRole
#### Properties
* **kind**: 'MEC' (Required): Role type.
* **properties**: [MECRoleProperties](#mecroleproperties): MEC role properties.


## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles/addons@2021-06-01
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2021-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles/addons' (ReadOnly, DeployTimeConstant): The resource type
### ArcAddon
#### Properties
* **kind**: 'ArcForKubernetes' (Required): Addon type.
* **properties**: [ArcAddonProperties](#arcaddonproperties) (Required): Arc addon properties.

### IoTAddon
#### Properties
* **kind**: 'IotEdge' (Required): Addon type.
* **properties**: [IoTAddonProperties](#iotaddonproperties) (Required): IoT addon properties.


## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles/monitoringConfig@2021-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [MonitoringMetricConfigurationProperties](#monitoringmetricconfigurationproperties) (Required): Metrics properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles/monitoringConfig' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices/shares@2021-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ShareProperties](#shareproperties) (Required): The share properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/shares' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccountCredentials@2021-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageAccountCredentialProperties](#storageaccountcredentialproperties) (Required): The storage account credential properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccountCredentials' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccounts@2021-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageAccountProperties](#storageaccountproperties) (Required): The storage account properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccounts/containers@2021-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ContainerProperties](#containerproperties) (Required): The container properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccounts/containers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices/triggers@2021-06-01
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2021-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/triggers' (ReadOnly, DeployTimeConstant): The resource type
### FileEventTrigger
#### Properties
* **kind**: 'FileEvent' (Required): Trigger Kind.
* **properties**: [FileTriggerProperties](#filetriggerproperties) (Required): File trigger properties.

### PeriodicTimerEventTrigger
#### Properties
* **kind**: 'PeriodicTimerEvent' (Required): Trigger Kind.
* **properties**: [PeriodicTimerProperties](#periodictimerproperties) (Required): Periodic timer trigger properties.


## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices/users@2021-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [UserProperties](#userproperties) (Required): The user properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/users' (ReadOnly, DeployTimeConstant): The resource type

## ResourceIdentity
### Properties
* **principalId**: string (ReadOnly): Service Principal Id backing the Msi
* **tenantId**: string (ReadOnly): Home Tenant Id
* **type**: 'None' | 'SystemAssigned' | 'UserAssigned': Identity type

## DataBoxEdgeDeviceProperties
### Properties
* **configuredRoleTypes**: 'ASA' | 'CloudEdgeManagement' | 'Cognitive' | 'Functions' | 'IOT' | 'Kubernetes' | 'MEC'[] (ReadOnly): Type of compute roles configured.
* **culture**: string (ReadOnly): The Data Box Edge/Gateway device culture.
* **dataBoxEdgeDeviceStatus**: 'Disconnected' | 'Maintenance' | 'NeedsAttention' | 'Offline' | 'Online' | 'PartiallyDisconnected' | 'ReadyToSetup': The status of the Data Box Edge/Gateway device.
* **dataResidency**: [DataResidency](#dataresidency): Wraps data-residency related information for edge-resource and this should be used with ARM layer.
* **description**: string (ReadOnly): The Description of the Data Box Edge/Gateway device.
* **deviceHcsVersion**: string (ReadOnly): The device software version number of the device (eg: 1.2.18105.6).
* **deviceLocalCapacity**: int (ReadOnly): The Data Box Edge/Gateway device local capacity in MB.
* **deviceModel**: string (ReadOnly): The Data Box Edge/Gateway device model.
* **deviceSoftwareVersion**: string (ReadOnly): The Data Box Edge/Gateway device software version.
* **deviceType**: 'DataBoxEdgeDevice' (ReadOnly): The type of the Data Box Edge/Gateway device.
* **edgeProfile**: [EdgeProfile](#edgeprofile) (ReadOnly): Details about Edge Profile for the resource
* **friendlyName**: string (ReadOnly): The Data Box Edge/Gateway device name.
* **modelDescription**: string (ReadOnly): The description of the Data Box Edge/Gateway device model.
* **nodeCount**: int (ReadOnly): The number of nodes in the cluster.
* **resourceMoveDetails**: [ResourceMoveDetails](#resourcemovedetails) (ReadOnly): Fields for tracking resource move
* **serialNumber**: string (ReadOnly): The Serial Number of Data Box Edge/Gateway device.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **timeZone**: string (ReadOnly): The Data Box Edge/Gateway device timezone.

## DataResidency
### Properties
* **type**: 'GeoZoneReplication' | 'ZoneReplication': DataResidencyType enum

## EdgeProfile
### Properties
* **subscription**: [EdgeProfileSubscription](#edgeprofilesubscription): Subscription details for the Edge Profile

## EdgeProfileSubscription
### Properties
* **id**: string: ARM ID of the subscription
* **properties**: [SubscriptionProperties](#subscriptionproperties)
* **registrationDate**: string
* **registrationId**: string: Edge Subscription Registration ID
* **state**: 'Deleted' | 'Registered' | 'Suspended' | 'Unregistered' | 'Warned'
* **subscriptionId**: string

## SubscriptionProperties
### Properties
* **locationPlacementId**: string
* **quotaId**: string
* **registeredFeatures**: [SubscriptionRegisteredFeatures](#subscriptionregisteredfeatures)[]: Array of SubscriptionRegisteredFeatures
* **serializedDetails**: string
* **tenantId**: string

## SubscriptionRegisteredFeatures
### Properties
* **name**: string
* **state**: string

## ResourceMoveDetails
### Properties
* **operationInProgress**: 'None' | 'ResourceMoveFailed' | 'ResourceMoveInProgress': Denotes whether move operation is in progress
* **operationInProgressLockTimeoutInUTC**: string: Denotes the timeout of the operation to finish

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The type of identity that last modified the resource.
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.

## Sku
### Properties
* **name**: 'EP2_128_1T4_Mx1_W' | 'EP2_256_2T4_W' | 'EP2_64_1VPU_W' | 'Edge' | 'EdgeMR_Mini' | 'EdgePR_Base' | 'EdgePR_Base_UPS' | 'EdgeP_Base' | 'EdgeP_High' | 'GPU' | 'Gateway' | 'Management' | 'RCA_Large' | 'RCA_Small' | 'RDC' | 'TCA_Large' | 'TCA_Small' | 'TDC' | 'TEA_1Node' | 'TEA_1Node_Heater' | 'TEA_1Node_UPS' | 'TEA_1Node_UPS_Heater' | 'TEA_4Node_Heater' | 'TEA_4Node_UPS_Heater' | 'TMA': The Sku name.
* **tier**: 'Standard': The Sku tier.

## DataBoxEdgeDeviceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BandwidthScheduleProperties
### Properties
* **days**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[] (Required): The days of the week when this schedule is applicable.
* **rateInMbps**: int (Required): The bandwidth rate in Mbps.
* **start**: string (Required): The start time of the schedule in UTC.
* **stop**: string (Required): The stop time of the schedule in UTC.

## ProactiveLogCollectionSettingsProperties
### Properties
* **userConsent**: 'Disabled' | 'Enabled' (Required): Proactive diagnostic collection consent flag

## DiagnosticRemoteSupportSettingsProperties
### Properties
* **remoteSupportSettingsList**: [RemoteSupportSettings](#remotesupportsettings)[]: Remote support settings list according to the RemoteApplicationType

## RemoteSupportSettings
### Properties
* **accessLevel**: 'FullAccess' | 'None' | 'ReadOnly' | 'ReadWrite': Access level allowed for this remote application type
* **expirationTimeStampInUTC**: string: Expiration time stamp
* **remoteApplicationType**: 'AllApplications' | 'LocalUI' | 'Powershell' | 'WAC': Remote application type

## OrderProperties
### Properties
* **contactInformation**: [ContactDetails](#contactdetails) (Required): Contains all the contact details of the customer.
* **currentStatus**: [OrderStatus](#orderstatus) (ReadOnly): Represents a single status change.
* **deliveryTrackingInfo**: [TrackingInfo](#trackinginfo)[] (ReadOnly): Tracking information for the package delivered to the customer whether it has an original or a replacement device.
* **orderHistory**: [OrderStatus](#orderstatus)[] (ReadOnly): List of status changes in the order.
* **returnTrackingInfo**: [TrackingInfo](#trackinginfo)[] (ReadOnly): Tracking information for the package returned from the customer whether it has an original or a replacement device.
* **serialNumber**: string (ReadOnly): Serial number of the device.
* **shipmentType**: 'NotApplicable' | 'SelfPickup' | 'ShippedToCustomer'
* **shippingAddress**: [Address](#address): The shipping address of the customer.

## ContactDetails
### Properties
* **companyName**: string (Required): The name of the company.
* **contactPerson**: string (Required): The contact person name.
* **emailList**: string[] (Required): The email list.
* **phone**: string (Required): The phone number.

## OrderStatus
### Properties
* **additionalOrderDetails**: [OrderStatusAdditionalOrderDetails](#orderstatusadditionalorderdetails) (ReadOnly): Dictionary to hold generic information which is not stored
by the already existing properties
* **comments**: string: Comments related to this status change.
* **status**: 'Arriving' | 'AwaitingDrop' | 'AwaitingFulfillment' | 'AwaitingPickup' | 'AwaitingPreparation' | 'AwaitingReturnShipment' | 'AwaitingShipment' | 'CollectedAtMicrosoft' | 'Declined' | 'Delivered' | 'LostDevice' | 'PickupCompleted' | 'ReplacementRequested' | 'ReturnInitiated' | 'Shipped' | 'ShippedBack' | 'Untracked' (Required): Status of the order as per the allowed status types.
* **trackingInformation**: [TrackingInfo](#trackinginfo) (ReadOnly): Tracking courier information.
* **updateDateTime**: string (ReadOnly): Time of status update.

## OrderStatusAdditionalOrderDetails
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackingInfo
### Properties
* **carrierName**: string: Name of the carrier used in the delivery.
* **serialNumber**: string: Serial number of the device being tracked.
* **trackingId**: string: Tracking ID of the shipment.
* **trackingUrl**: string: Tracking URL of the shipment.

## Address
### Properties
* **addressLine1**: string: The address line1.
* **addressLine2**: string: The address line2.
* **addressLine3**: string: The address line3.
* **city**: string: The city name.
* **country**: string (Required): The country name.
* **postalCode**: string: The postal code.
* **state**: string: The state name.

## CloudEdgeManagementRoleProperties
### Properties
* **edgeProfile**: [EdgeProfile](#edgeprofile) (ReadOnly): Details about Edge Profile for the resource
* **localManagementStatus**: 'Disabled' | 'Enabled' (ReadOnly): Local Edge Management Status
* **roleStatus**: 'Disabled' | 'Enabled' (Required): Local Edge Management Status

## IoTRoleProperties
### Properties
* **computeResource**: [ComputeResource](#computeresource): Compute infrastructure Resource
* **hostPlatform**: 'Linux' | 'Windows' (Required): Host OS supported by the Arc addon.
* **hostPlatformType**: 'KubernetesCluster' | 'LinuxVM' (ReadOnly): Platform where the runtime is hosted.
* **ioTDeviceDetails**: [IoTDeviceInfo](#iotdeviceinfo) (Required): Metadata of IoT device/IoT Edge device to be configured.
* **ioTEdgeAgentInfo**: [IoTEdgeAgentInfo](#iotedgeagentinfo): IoT edge agent details is optional, this will be used for download system Agent module while bootstrapping IoT Role if specified.
* **ioTEdgeDeviceDetails**: [IoTDeviceInfo](#iotdeviceinfo) (Required): Metadata of IoT device/IoT Edge device to be configured.
* **roleStatus**: 'Disabled' | 'Enabled' (Required): Local Edge Management Status
* **shareMappings**: [MountPointMap](#mountpointmap)[]: Mount points of shares in role(s).

## ComputeResource
### Properties
* **memoryInGB**: int (Required): Memory in GB
* **processorCount**: int (Required): Processor count

## IoTDeviceInfo
### Properties
* **authentication**: [Authentication](#authentication): Authentication mechanism for IoT devices.
* **deviceId**: string (Required): ID of the IoT device/edge device.
* **ioTHostHub**: string (Required): Host name for the IoT hub associated to the device.
* **ioTHostHubId**: string: Id for the IoT hub associated to the device.

## Authentication
### Properties
* **symmetricKey**: [SymmetricKey](#symmetrickey): Symmetric key for authentication.

## SymmetricKey
### Properties
* **connectionString**: [AsymmetricEncryptedSecret](#asymmetricencryptedsecret): Represent the secrets intended for encryption with asymmetric key pair.

## AsymmetricEncryptedSecret
### Properties
* **encryptionAlgorithm**: 'AES256' | 'None' | 'RSAES_PKCS1_v_1_5' (Required): The algorithm used to encrypt "Value".
* **encryptionCertThumbprint**: string: Thumbprint certificate used to encrypt \"Value\". If the value is unencrypted, it will be null.
* **value**: string (Required): The value of the secret.

## IoTEdgeAgentInfo
### Properties
* **imageName**: string (Required): Name of the IoT edge agent image.
* **imageRepository**: [ImageRepositoryCredential](#imagerepositorycredential): Image repository credential.
* **tag**: string (Required): Image Tag.

## ImageRepositoryCredential
### Properties
* **imageRepositoryUrl**: string (Required): Image repository url (e.g.: mcr.microsoft.com).
* **password**: [AsymmetricEncryptedSecret](#asymmetricencryptedsecret): Represent the secrets intended for encryption with asymmetric key pair.
* **userName**: string (Required): Repository user name.

## MountPointMap
### Properties
* **mountPoint**: string (ReadOnly): Mount point for the share.
* **mountType**: 'HostPath' | 'Volume' (ReadOnly): Mounting type.
* **roleId**: string (ReadOnly): ID of the role to which share is mounted.
* **roleType**: 'ASA' | 'CloudEdgeManagement' | 'Cognitive' | 'Functions' | 'IOT' | 'Kubernetes' | 'MEC' (ReadOnly)
* **shareId**: string (Required): ID of the share mounted to the role VM.

## KubernetesRoleProperties
### Properties
* **hostPlatform**: 'Linux' | 'Windows' (Required): Host OS supported by the Arc addon.
* **hostPlatformType**: 'KubernetesCluster' | 'LinuxVM' (ReadOnly): Platform where the runtime is hosted.
* **kubernetesClusterInfo**: [KubernetesClusterInfo](#kubernetesclusterinfo) (Required): Kubernetes cluster configuration
* **kubernetesRoleResources**: [KubernetesRoleResources](#kubernetesroleresources) (Required): Kubernetes role resources
* **provisioningState**: 'Created' | 'Creating' | 'Deleting' | 'Failed' | 'Invalid' | 'Reconfiguring' | 'Updating' (ReadOnly): State of Kubernetes deployment
* **roleStatus**: 'Disabled' | 'Enabled' (Required): Local Edge Management Status

## KubernetesClusterInfo
### Properties
* **etcdInfo**: [EtcdInfo](#etcdinfo) (ReadOnly): Etcd configuration
* **nodes**: [NodeInfo](#nodeinfo)[] (ReadOnly): Kubernetes cluster nodes
* **version**: string (Required): Kubernetes cluster version

## EtcdInfo
### Properties
* **type**: string (ReadOnly): Etcd type
* **version**: string (ReadOnly): Etcd version

## NodeInfo
### Properties
* **ipConfiguration**: [KubernetesIPConfiguration](#kubernetesipconfiguration)[]: IP Configuration of the Kubernetes node.
* **name**: string (ReadOnly): Node name.
* **type**: 'Invalid' | 'Master' | 'Worker' (ReadOnly): Node type - Master/Worker

## KubernetesIPConfiguration
### Properties
* **ipAddress**: string: IP address of the Kubernetes node.
* **port**: string (ReadOnly): Port of the Kubernetes node.

## KubernetesRoleResources
### Properties
* **compute**: [KubernetesRoleCompute](#kubernetesrolecompute) (Required): Kubernetes role compute resource
* **network**: [KubernetesRoleNetwork](#kubernetesrolenetwork) (ReadOnly): Kubernetes role network resource
* **storage**: [KubernetesRoleStorage](#kubernetesrolestorage): Kubernetes role storage resource

## KubernetesRoleCompute
### Properties
* **memoryInBytes**: int (ReadOnly): Memory in bytes
* **processorCount**: int (ReadOnly): Processor count
* **vmProfile**: string (Required): VM profile

## KubernetesRoleNetwork
### Properties
* **cniConfig**: [CniConfig](#cniconfig) (ReadOnly): Cni configuration
* **loadBalancerConfig**: [LoadBalancerConfig](#loadbalancerconfig) (ReadOnly): Load balancer configuration

## CniConfig
### Properties
* **podSubnet**: string (ReadOnly): Pod Subnet
* **serviceSubnet**: string (ReadOnly): Service subnet
* **type**: string (ReadOnly): Cni type
* **version**: string (ReadOnly): Cni version

## LoadBalancerConfig
### Properties
* **type**: string (ReadOnly): Load balancer type
* **version**: string (ReadOnly): Load balancer version

## KubernetesRoleStorage
### Properties
* **endpoints**: [MountPointMap](#mountpointmap)[]: Mount points of shares in role(s).
* **storageClasses**: [KubernetesRoleStorageClassInfo](#kubernetesrolestorageclassinfo)[] (ReadOnly): Kubernetes storage class info.

## KubernetesRoleStorageClassInfo
### Properties
* **name**: string (ReadOnly): Storage class name.
* **posixCompliant**: 'Disabled' | 'Enabled' | 'Invalid' (ReadOnly): If provisioned storage is posix compliant.
* **type**: string (ReadOnly): Storage class type.

## MECRoleProperties
### Properties
* **connectionString**: [AsymmetricEncryptedSecret](#asymmetricencryptedsecret): Represent the secrets intended for encryption with asymmetric key pair.
* **controllerEndpoint**: string: Controller Endpoint.
* **resourceUniqueId**: string: Unique Id of the Resource.
* **roleStatus**: 'Disabled' | 'Enabled' (Required): Local Edge Management Status

## ArcAddonProperties
### Properties
* **hostPlatform**: 'Linux' | 'Windows' (ReadOnly): Host OS supported by the Arc addon.
* **hostPlatformType**: 'KubernetesCluster' | 'LinuxVM' (ReadOnly): Platform where the runtime is hosted.
* **provisioningState**: 'Created' | 'Creating' | 'Deleting' | 'Failed' | 'Invalid' | 'Reconfiguring' | 'Updating' (ReadOnly): Addon Provisioning State
* **resourceGroupName**: string (Required): Arc resource group name
* **resourceLocation**: string (Required): Arc resource location
* **resourceName**: string (Required): Arc resource Name
* **subscriptionId**: string (Required): Arc resource subscription Id
* **version**: string (ReadOnly): Arc resource version

## IoTAddonProperties
### Properties
* **hostPlatform**: 'Linux' | 'Windows' (ReadOnly): Host OS supported by the Arc addon.
* **hostPlatformType**: 'KubernetesCluster' | 'LinuxVM' (ReadOnly): Platform where the runtime is hosted.
* **ioTDeviceDetails**: [IoTDeviceInfo](#iotdeviceinfo) (Required): Metadata of IoT device/IoT Edge device to be configured.
* **ioTEdgeDeviceDetails**: [IoTDeviceInfo](#iotdeviceinfo) (Required): Metadata of IoT device/IoT Edge device to be configured.
* **provisioningState**: 'Created' | 'Creating' | 'Deleting' | 'Failed' | 'Invalid' | 'Reconfiguring' | 'Updating' (ReadOnly): Addon Provisioning State
* **version**: string (ReadOnly): Version of IoT running on the appliance.

## MonitoringMetricConfigurationProperties
### Properties
* **metricConfigurations**: [MetricConfiguration](#metricconfiguration)[] (Required): The metrics configuration details

## MetricConfiguration
### Properties
* **counterSets**: [MetricCounterSet](#metriccounterset)[] (Required): Host name for the IoT hub associated to the device.
* **mdmAccount**: string: The MDM account to which the counters should be pushed.
* **metricNameSpace**: string: The MDM namespace to which the counters should be pushed. This is required if MDMAccount is specified
* **resourceId**: string (Required): The Resource ID on which the metrics should be pushed.

## MetricCounterSet
### Properties
* **counters**: [MetricCounter](#metriccounter)[] (Required): The counters that should be collected in this set.

## MetricCounter
### Properties
* **additionalDimensions**: [MetricDimension](#metricdimension)[]: The additional dimensions to be added to metric.
* **dimensionFilter**: [MetricDimension](#metricdimension)[]: The dimension filter.
* **instance**: string: The instance from which counter should be collected.
* **name**: string (Required): The counter name.

## MetricDimension
### Properties
* **sourceName**: string (Required): The dimension value.
* **sourceType**: string (Required): The dimension type.

## ShareProperties
### Properties
* **accessProtocol**: 'NFS' | 'SMB' (Required): Access protocol to be used by the share.
* **azureContainerInfo**: [AzureContainerInfo](#azurecontainerinfo): Azure container mapping of the endpoint.
* **clientAccessRights**: [ClientAccessRight](#clientaccessright)[]: List of IP addresses and corresponding access rights on the share(required for NFS protocol).
* **dataPolicy**: 'Cloud' | 'Local': Data policy of the share.
* **description**: string: Description for the share.
* **monitoringStatus**: 'Disabled' | 'Enabled' (Required): Current monitoring status of the share.
* **refreshDetails**: [RefreshDetails](#refreshdetails): Fields for tracking refresh job on the share or container.
* **shareMappings**: [MountPointMap](#mountpointmap)[] (ReadOnly): Share mount point to the role.
* **shareStatus**: 'NeedsAttention' | 'OK' | 'Offline' | 'Unknown' | 'Updating' (Required): Current status of the share.
* **userAccessRights**: [UserAccessRight](#useraccessright)[]: Mapping of users and corresponding access rights on the share (required for SMB protocol).

## AzureContainerInfo
### Properties
* **containerName**: string (Required): Container name (Based on the data format specified, this represents the name of Azure Files/Page blob/Block blob).
* **dataFormat**: 'AzureFile' | 'BlockBlob' | 'PageBlob' (Required): Storage format used for the file represented by the share.
* **storageAccountCredentialId**: string (Required): ID of the storage account credential used to access storage.

## ClientAccessRight
### Properties
* **accessPermission**: 'NoAccess' | 'ReadOnly' | 'ReadWrite' (Required): Type of access to be allowed for the client.
* **client**: string (Required): IP of the client.

## RefreshDetails
### Properties
* **errorManifestFile**: string: Indicates the relative path of the error xml for the last refresh job on this particular share or container, if any. This could be a failed job or a successful job.
* **inProgressRefreshJobId**: string: If a refresh job is currently in progress on this share or container, this field indicates the ARM resource ID of that job. The field is empty if no job is in progress.
* **lastCompletedRefreshJobTimeInUTC**: string: Indicates the completed time for the last refresh job on this particular share or container, if any.This could be a failed job or a successful job.
* **lastJob**: string: Indicates the id of the last refresh job on this particular share or container,if any. This could be a failed job or a successful job.

## UserAccessRight
### Properties
* **accessType**: 'Change' | 'Custom' | 'Read' (Required): Type of access to be allowed on the share for this user.
* **userId**: string (Required): User ID (already existing in the device).

## StorageAccountCredentialProperties
### Properties
* **accountKey**: [AsymmetricEncryptedSecret](#asymmetricencryptedsecret): Represent the secrets intended for encryption with asymmetric key pair.
* **accountType**: 'BlobStorage' | 'GeneralPurposeStorage' (Required): Type of storage accessed on the storage account.
* **alias**: string (Required): Alias for the storage account.
* **blobDomainName**: string: Blob end point for private clouds.
* **connectionString**: string: Connection string for the storage account. Use this string if username and account key are not specified.
* **sslStatus**: 'Disabled' | 'Enabled' (Required): Signifies whether SSL needs to be enabled or not.
* **storageAccountId**: string: Id of the storage account.
* **userName**: string: Username for the storage account.

## StorageAccountProperties
### Properties
* **blobEndpoint**: string (ReadOnly): BlobEndpoint of Storage Account
* **containerCount**: int (ReadOnly): The Container Count. Present only for Storage Accounts with DataPolicy set to Cloud.
* **dataPolicy**: 'Cloud' | 'Local' (Required): Data policy of the share.
* **description**: string: Description for the storage Account.
* **storageAccountCredentialId**: string: Storage Account Credential Id
* **storageAccountStatus**: 'NeedsAttention' | 'OK' | 'Offline' | 'Unknown' | 'Updating': Current status of the storage account

## ContainerProperties
### Properties
* **containerStatus**: 'NeedsAttention' | 'OK' | 'Offline' | 'Unknown' | 'Updating' (ReadOnly): Current status of the container.
* **createdDateTime**: string (ReadOnly): The UTC time when container got created.
* **dataFormat**: 'AzureFile' | 'BlockBlob' | 'PageBlob' (Required): Storage format used for the file represented by the share.
* **refreshDetails**: [RefreshDetails](#refreshdetails) (ReadOnly): Fields for tracking refresh job on the share or container.

## FileTriggerProperties
### Properties
* **customContextTag**: string: A custom context tag typically used to correlate the trigger against its usage. For example, if a periodic timer trigger is intended for certain specific IoT modules in the device, the tag can be the name or the image URL of the module.
* **sinkInfo**: [RoleSinkInfo](#rolesinkinfo) (Required): Compute role against which events will be raised.
* **sourceInfo**: [FileSourceInfo](#filesourceinfo) (Required): File source details.

## RoleSinkInfo
### Properties
* **roleId**: string (Required): Compute role ID.

## FileSourceInfo
### Properties
* **shareId**: string (Required): File share ID.

## PeriodicTimerProperties
### Properties
* **customContextTag**: string: A custom context tag typically used to correlate the trigger against its usage. For example, if a periodic timer trigger is intended for certain specific IoT modules in the device, the tag can be the name or the image URL of the module.
* **sinkInfo**: [RoleSinkInfo](#rolesinkinfo) (Required): Compute role against which events will be raised.
* **sourceInfo**: [PeriodicTimerSourceInfo](#periodictimersourceinfo) (Required): Periodic timer event source.

## PeriodicTimerSourceInfo
### Properties
* **schedule**: string (Required): Periodic frequency at which timer event needs to be raised. Supports daily, hourly, minutes, and seconds.
* **startTime**: string (Required): The time of the day that results in a valid trigger. Schedule is computed with reference to the time specified upto seconds. If timezone is not specified the time will considered to be in device timezone. The value will always be returned as UTC time.
* **topic**: string: Topic where periodic events are published to IoT device.

## UserProperties
### Properties
* **encryptedPassword**: [AsymmetricEncryptedSecret](#asymmetricencryptedsecret): Represent the secrets intended for encryption with asymmetric key pair.
* **shareAccessRights**: [ShareAccessRight](#shareaccessright)[] (ReadOnly): List of shares that the user has rights on. This field should not be specified during user creation.
* **userType**: 'ARM' | 'LocalManagement' | 'Share' (Required): Type of the user.

## ShareAccessRight
### Properties
* **accessType**: 'Change' | 'Custom' | 'Read' (Required): Type of access to be allowed on the share for this user.
* **shareId**: string (Required): The share ID.

