# Microsoft.Compute @ 2021-07-01

## Resource Microsoft.Compute/availabilitySets@2021-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AvailabilitySetProperties](#availabilitysetproperties): The instance view of a resource.
* **sku**: [Sku](#sku): Describes a virtual machine scale set sku. NOTE: If the new VM SKU is not supported on the hardware the scale set is currently on, you need to deallocate the VMs in the scale set before you modify the SKU name.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/availabilitySets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/capacityReservationGroups@2021-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CapacityReservationGroupProperties](#capacityreservationgroupproperties): capacity reservation group Properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/capacityReservationGroups' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: Availability Zones to use for this capacity reservation group. The zones can be assigned only during creation. If not provided, the group supports only regional resources in the region. If provided, enforces each capacity reservation in the group to be in one of the zones.

## Resource Microsoft.Compute/capacityReservationGroups/capacityReservations@2021-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CapacityReservationProperties](#capacityreservationproperties): Properties of the Capacity reservation.
* **sku**: [Sku](#sku) (Required): Describes a virtual machine scale set sku. NOTE: If the new VM SKU is not supported on the hardware the scale set is currently on, you need to deallocate the VMs in the scale set before you modify the SKU name.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/capacityReservationGroups/capacityReservations' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: Availability Zone to use for this capacity reservation. The zone has to be single value and also should be part for the list of zones specified during the capacity reservation group creation. The zone can be assigned only during creation. If not provided, the reservation supports only non-zonal deployments. If provided, enforces VM/VMSS using this capacity reservation to be in same zone.

## Resource Microsoft.Compute/galleries@2021-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GalleryProperties](#galleryproperties): Describes the properties of a Shared Image Gallery.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/galleries' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/galleries/applications@2021-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GalleryApplicationProperties](#galleryapplicationproperties): Describes the properties of a gallery Application Definition.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/galleries/applications' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/galleries/applications/versions@2021-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GalleryApplicationVersionProperties](#galleryapplicationversionproperties): Describes the properties of a gallery image version.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/galleries/applications/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/galleries/images@2021-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GalleryImageProperties](#galleryimageproperties): Describes the properties of a gallery image definition.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/galleries/images' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/galleries/images/versions@2021-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GalleryImageVersionProperties](#galleryimageversionproperties): Describes the properties of a gallery image version.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/galleries/images/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/hostGroups@2021-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DedicatedHostGroupProperties](#dedicatedhostgroupproperties): Dedicated Host Group Properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/hostGroups' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: Availability Zone to use for this host group. Only single zone is supported. The zone can be assigned only during creation. If not provided, the group supports all zones in the region. If provided, enforces each host in the group to be in the same zone.

## Resource Microsoft.Compute/hostGroups/hosts@2021-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DedicatedHostProperties](#dedicatedhostproperties): Properties of the dedicated host.
* **sku**: [Sku](#sku) (Required): Describes a virtual machine scale set sku. NOTE: If the new VM SKU is not supported on the hardware the scale set is currently on, you need to deallocate the VMs in the scale set before you modify the SKU name.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/hostGroups/hosts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/images@2021-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The complex type of the extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ImageProperties](#imageproperties): Describes the properties of an Image.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/images' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/proximityPlacementGroups@2021-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProximityPlacementGroupProperties](#proximityplacementgroupproperties): Describes the properties of a Proximity Placement Group.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/proximityPlacementGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/restorePointCollections@2021-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RestorePointCollectionProperties](#restorepointcollectionproperties): The restore point collection properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/restorePointCollections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/restorePointCollections/restorePoints@2021-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RestorePointProperties](#restorepointproperties): The restore point properties.
* **type**: 'Microsoft.Compute/restorePointCollections/restorePoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/sshPublicKeys@2021-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SshPublicKeyResourceProperties](#sshpublickeyresourceproperties): Properties of the SSH public key.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/sshPublicKeys' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/virtualMachines@2021-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The complex type of the extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [VirtualMachineIdentity](#virtualmachineidentity): Identity for the virtual machine.
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **plan**: [Plan](#plan): Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**.
* **properties**: [VirtualMachineProperties](#virtualmachineproperties): Describes the properties of a Virtual Machine.
* **resources**: [VirtualMachineExtension](#virtualmachineextension)[] (ReadOnly): The virtual machine child extension resources.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/virtualMachines' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: The virtual machine zones.

## Resource Microsoft.Compute/virtualMachines/extensions@2021-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualMachineExtensionProperties](#virtualmachineextensionproperties): Describes the properties of a Virtual Machine Extension.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/virtualMachines/extensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/virtualMachines/runCommands@2021-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualMachineRunCommandProperties](#virtualmachineruncommandproperties): Describes the properties of a Virtual Machine run command.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/virtualMachines/runCommands' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/virtualMachineScaleSets@2021-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation): The complex type of the extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [VirtualMachineScaleSetIdentity](#virtualmachinescalesetidentity): Identity for the virtual machine scale set.
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **plan**: [Plan](#plan): Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**.
* **properties**: [VirtualMachineScaleSetProperties](#virtualmachinescalesetproperties): Describes the properties of a Virtual Machine Scale Set.
* **sku**: [Sku](#sku): Describes a virtual machine scale set sku. NOTE: If the new VM SKU is not supported on the hardware the scale set is currently on, you need to deallocate the VMs in the scale set before you modify the SKU name.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/virtualMachineScaleSets' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: The virtual machine scale set zones. NOTE: Availability zones can only be set when you create the scale set

## Resource Microsoft.Compute/virtualMachineScaleSets/extensions@2021-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualMachineScaleSetExtensionProperties](#virtualmachinescalesetextensionproperties): Describes the properties of a Virtual Machine Scale Set Extension.
* **type**: 'Microsoft.Compute/virtualMachineScaleSets/extensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/virtualMachineScaleSets/virtualmachines@2021-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **instanceId**: string (ReadOnly): The virtual machine instance ID.
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **plan**: [Plan](#plan): Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**.
* **properties**: [VirtualMachineScaleSetVMProperties](#virtualmachinescalesetvmproperties): Describes the properties of a virtual machine scale set virtual machine.
* **resources**: [VirtualMachineExtension](#virtualmachineextension)[] (ReadOnly): The virtual machine child extension resources.
* **sku**: [Sku](#sku) (ReadOnly): Describes a virtual machine scale set sku. NOTE: If the new VM SKU is not supported on the hardware the scale set is currently on, you need to deallocate the VMs in the scale set before you modify the SKU name.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/virtualMachineScaleSets/virtualmachines' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[] (ReadOnly): The virtual machine zones.

## Resource Microsoft.Compute/virtualMachineScaleSets/virtualMachines/extensions@2021-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualMachineExtensionProperties](#virtualmachineextensionproperties): Describes the properties of a Virtual Machine Extension.
* **type**: 'Microsoft.Compute/virtualMachineScaleSets/virtualMachines/extensions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Compute/virtualMachineScaleSets/virtualMachines/runCommands@2021-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VirtualMachineRunCommandProperties](#virtualmachineruncommandproperties): Describes the properties of a Virtual Machine run command.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Compute/virtualMachineScaleSets/virtualMachines/runCommands' (ReadOnly, DeployTimeConstant): The resource type

## AvailabilitySetProperties
### Properties
* **platformFaultDomainCount**: int: Fault Domain count.
* **platformUpdateDomainCount**: int: Update Domain count.
* **proximityPlacementGroup**: [SubResource](#subresource)
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[] (ReadOnly): The resource status information.
* **virtualMachines**: [SubResource](#subresource)[]: A list of references to all virtual machines in the availability set.

## SubResource
### Properties
* **id**: string: Resource Id

## InstanceViewStatus
### Properties
* **code**: string: The status code.
* **displayStatus**: string: The short localizable label for the status.
* **level**: 'Error' | 'Info' | 'Warning': The level code.
* **message**: string: The detailed status message, including for alerts and error messages.
* **time**: string: The time of the status.

## Sku
### Properties
* **capacity**: int: Specifies the number of virtual machines in the scale set.
* **name**: string: The sku name.
* **tier**: string: Specifies the tier of virtual machines in a scale set.<br /><br /> Possible Values:<br /><br /> **Standard**<br /><br /> **Basic**

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CapacityReservationGroupProperties
### Properties
* **capacityReservations**: [SubResourceReadOnly](#subresourcereadonly)[] (ReadOnly): A list of all capacity reservation resource ids that belong to capacity reservation group.
* **instanceView**: [CapacityReservationGroupInstanceView](#capacityreservationgroupinstanceview) (ReadOnly)
* **virtualMachinesAssociated**: [SubResourceReadOnly](#subresourcereadonly)[] (ReadOnly): A list of references to all virtual machines associated to the capacity reservation group.

## SubResourceReadOnly
### Properties
* **id**: string (ReadOnly): Resource Id

## CapacityReservationGroupInstanceView
### Properties
* **capacityReservations**: [CapacityReservationInstanceViewWithName](#capacityreservationinstanceviewwithname)[] (ReadOnly): List of instance view of the capacity reservations under the capacity reservation group.

## CapacityReservationInstanceViewWithName
### Properties
* **name**: string (ReadOnly): The name of the capacity reservation.
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[]: The resource status information.
* **utilizationInfo**: [CapacityReservationUtilization](#capacityreservationutilization): Represents the capacity reservation utilization in terms of resources allocated.

## CapacityReservationUtilization
### Properties
* **virtualMachinesAllocated**: [SubResourceReadOnly](#subresourcereadonly)[] (ReadOnly): A list of all virtual machines resource ids allocated against the capacity reservation.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CapacityReservationProperties
### Properties
* **instanceView**: [CapacityReservationInstanceView](#capacityreservationinstanceview) (ReadOnly): The instance view of a capacity reservation that provides as snapshot of the runtime properties of the capacity reservation that is managed by the platform and can change outside of control plane operations.
* **provisioningState**: string (ReadOnly): The provisioning state, which only appears in the response.
* **provisioningTime**: string (ReadOnly): The date time when the capacity reservation was last updated.
* **reservationId**: string (ReadOnly): A unique id generated and assigned to the capacity reservation by the platform which does not change throughout the lifetime of the resource.
* **virtualMachinesAssociated**: [SubResourceReadOnly](#subresourcereadonly)[] (ReadOnly): A list of all virtual machine resource ids that are associated with the capacity reservation.

## CapacityReservationInstanceView
### Properties
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[]: The resource status information.
* **utilizationInfo**: [CapacityReservationUtilization](#capacityreservationutilization): Represents the capacity reservation utilization in terms of resources allocated.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GalleryProperties
### Properties
* **description**: string: The description of this Shared Image Gallery resource. This property is updatable.
* **identifier**: [GalleryIdentifier](#galleryidentifier): Describes the gallery unique name.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Migrating' | 'Succeeded' | 'Updating' (ReadOnly): The provisioning state, which only appears in the response.
* **sharingProfile**: [SharingProfile](#sharingprofile): Profile for gallery sharing to subscription or tenant
* **softDeletePolicy**: [SoftDeletePolicy](#softdeletepolicy): Contains information about the soft deletion policy of the gallery.

## GalleryIdentifier
### Properties
* **uniqueName**: string (ReadOnly): The unique name of the Shared Image Gallery. This name is generated automatically by Azure.

## SharingProfile
### Properties
* **groups**: [SharingProfileGroup](#sharingprofilegroup)[] (ReadOnly): A list of sharing profile groups.
* **permissions**: 'Groups' | 'Private': This property allows you to specify the permission of sharing gallery. <br><br> Possible values are: <br><br> **Private** <br><br> **Groups**

## SharingProfileGroup
### Properties
* **ids**: string[]: A list of subscription/tenant ids the gallery is aimed to be shared to.
* **type**: 'AADTenants' | 'Subscriptions': This property allows you to specify the type of sharing group. <br><br> Possible values are: <br><br> **Subscriptions** <br><br> **AADTenants**

## SoftDeletePolicy
### Properties
* **isSoftDeleteEnabled**: bool: Enables soft-deletion for resources in this gallery, allowing them to be recovered within retention time.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GalleryApplicationProperties
### Properties
* **description**: string: The description of this gallery Application Definition resource. This property is updatable.
* **endOfLifeDate**: string: The end of life date of the gallery Application Definition. This property can be used for decommissioning purposes. This property is updatable.
* **eula**: string: The Eula agreement for the gallery Application Definition.
* **privacyStatementUri**: string: The privacy statement uri.
* **releaseNoteUri**: string: The release note uri.
* **supportedOSType**: 'Linux' | 'Windows' (Required): The operating system of the osDiskImage.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GalleryApplicationVersionProperties
### Properties
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Migrating' | 'Succeeded' | 'Updating' (ReadOnly): The provisioning state, which only appears in the response.
* **publishingProfile**: [GalleryApplicationVersionPublishingProfile](#galleryapplicationversionpublishingprofile) (Required): The publishing profile of a gallery image version.
* **replicationStatus**: [ReplicationStatus](#replicationstatus) (ReadOnly): This is the replication status of the gallery image version.

## GalleryApplicationVersionPublishingProfile
### Properties
* **enableHealthCheck**: bool: Optional. Whether or not this application reports health.
* **endOfLifeDate**: string: The end of life date of the gallery image version. This property can be used for decommissioning purposes. This property is updatable.
* **excludeFromLatest**: bool: If set to true, Virtual Machines deployed from the latest version of the Image Definition won't use this Image Version.
* **manageActions**: [UserArtifactManage](#userartifactmanage)
* **publishedDate**: string (ReadOnly): The timestamp for when the gallery image version is published.
* **replicaCount**: int: The number of replicas of the Image Version to be created per region. This property would take effect for a region when regionalReplicaCount is not specified. This property is updatable.
* **replicationMode**: 'Full' | 'Shallow': Optional parameter which specifies the mode to be used for replication. This property is not updatable.
* **source**: [UserArtifactSource](#userartifactsource) (Required): The source image from which the Image Version is going to be created.
* **storageAccountType**: 'Premium_LRS' | 'Standard_LRS' | 'Standard_ZRS': Specifies the storage account type to be used to store the image. This property is not updatable.
* **targetRegions**: [TargetRegion](#targetregion)[]: The target regions where the Image Version is going to be replicated to. This property is updatable.

## UserArtifactManage
### Properties
* **install**: string (Required): Required. The path and arguments to install the gallery application. This is limited to 4096 characters.
* **remove**: string (Required): Required. The path and arguments to remove the gallery application. This is limited to 4096 characters.
* **update**: string: Optional. The path and arguments to update the gallery application. If not present, then update operation will invoke remove command on the previous version and install command on the current version of the gallery application. This is limited to 4096 characters.

## UserArtifactSource
### Properties
* **defaultConfigurationLink**: string: Optional. The defaultConfigurationLink of the artifact, must be a readable storage page blob.
* **mediaLink**: string (Required): Required. The mediaLink of the artifact, must be a readable storage page blob.

## TargetRegion
### Properties
* **encryption**: [EncryptionImages](#encryptionimages): Optional. Allows users to provide customer managed keys for encrypting the OS and data disks in the gallery artifact.
* **name**: string (Required): The name of the region.
* **regionalReplicaCount**: int: The number of replicas of the Image Version to be created per region. This property is updatable.
* **storageAccountType**: 'Premium_LRS' | 'Standard_LRS' | 'Standard_ZRS': Specifies the storage account type to be used to store the image. This property is not updatable.

## EncryptionImages
### Properties
* **dataDiskImages**: [DataDiskImageEncryption](#datadiskimageencryption)[]: A list of encryption specifications for data disk images.
* **osDiskImage**: [OSDiskImageEncryption](#osdiskimageencryption): Contains encryption settings for an OS disk image.

## DataDiskImageEncryption
### Properties
* **diskEncryptionSetId**: string: A relative URI containing the resource ID of the disk encryption set.
* **lun**: int (Required): This property specifies the logical unit number of the data disk. This value is used to identify data disks within the Virtual Machine and therefore must be unique for each data disk attached to the Virtual Machine.

## OSDiskImageEncryption
### Properties
* **diskEncryptionSetId**: string: A relative URI containing the resource ID of the disk encryption set.

## ReplicationStatus
### Properties
* **aggregatedState**: 'Completed' | 'Failed' | 'InProgress' | 'Unknown' (ReadOnly): This is the aggregated replication status based on all the regional replication status flags.
* **summary**: [RegionalReplicationStatus](#regionalreplicationstatus)[] (ReadOnly): This is a summary of replication status for each region.

## RegionalReplicationStatus
### Properties
* **details**: string (ReadOnly): The details of the replication status.
* **progress**: int (ReadOnly): It indicates progress of the replication job.
* **region**: string (ReadOnly): The region to which the gallery image version is being replicated to.
* **state**: 'Completed' | 'Failed' | 'Replicating' | 'Unknown' (ReadOnly): This is the regional replication state.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GalleryImageProperties
### Properties
* **description**: string: The description of this gallery image definition resource. This property is updatable.
* **disallowed**: [Disallowed](#disallowed): Describes the disallowed disk types.
* **endOfLifeDate**: string: The end of life date of the gallery image definition. This property can be used for decommissioning purposes. This property is updatable.
* **eula**: string: The Eula agreement for the gallery image definition.
* **features**: [GalleryImageFeature](#galleryimagefeature)[]: A list of gallery image features.
* **hyperVGeneration**: 'V1' | 'V2': The hypervisor generation of the Virtual Machine. Applicable to OS disks only.
* **identifier**: [GalleryImageIdentifier](#galleryimageidentifier) (Required): This is the gallery image definition identifier.
* **osState**: 'Generalized' | 'Specialized' (Required): The OS State.
* **osType**: 'Linux' | 'Windows' (Required): The operating system of the osDiskImage.
* **privacyStatementUri**: string: The privacy statement uri.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Migrating' | 'Succeeded' | 'Updating' (ReadOnly): The provisioning state, which only appears in the response.
* **purchasePlan**: [ImagePurchasePlan](#imagepurchaseplan): Describes the gallery image definition purchase plan. This is used by marketplace images.
* **recommended**: [RecommendedMachineConfiguration](#recommendedmachineconfiguration): The properties describe the recommended machine configuration for this Image Definition. These properties are updatable.
* **releaseNoteUri**: string: The release note uri.

## Disallowed
### Properties
* **diskTypes**: string[]: A list of disk types.

## GalleryImageFeature
### Properties
* **name**: string: The name of the gallery image feature.
* **value**: string: The value of the gallery image feature.

## GalleryImageIdentifier
### Properties
* **offer**: string (Required): The name of the gallery image definition offer.
* **publisher**: string (Required): The name of the gallery image definition publisher.
* **sku**: string (Required): The name of the gallery image definition SKU.

## ImagePurchasePlan
### Properties
* **name**: string: The plan ID.
* **product**: string: The product ID.
* **publisher**: string: The publisher ID.

## RecommendedMachineConfiguration
### Properties
* **memory**: [ResourceRange](#resourcerange): Describes the resource range.
* **vCPUs**: [ResourceRange](#resourcerange): Describes the resource range.

## ResourceRange
### Properties
* **max**: int: The maximum number of the resource.
* **min**: int: The minimum number of the resource.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GalleryImageVersionProperties
### Properties
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Migrating' | 'Succeeded' | 'Updating' (ReadOnly): The provisioning state, which only appears in the response.
* **publishingProfile**: [GalleryImageVersionPublishingProfile](#galleryimageversionpublishingprofile): The publishing profile of a gallery image Version.
* **replicationStatus**: [ReplicationStatus](#replicationstatus) (ReadOnly): This is the replication status of the gallery image version.
* **storageProfile**: [GalleryImageVersionStorageProfile](#galleryimageversionstorageprofile) (Required): This is the storage profile of a Gallery Image Version.

## GalleryImageVersionPublishingProfile
### Properties
* **endOfLifeDate**: string: The end of life date of the gallery image version. This property can be used for decommissioning purposes. This property is updatable.
* **excludeFromLatest**: bool: If set to true, Virtual Machines deployed from the latest version of the Image Definition won't use this Image Version.
* **publishedDate**: string (ReadOnly): The timestamp for when the gallery image version is published.
* **replicaCount**: int: The number of replicas of the Image Version to be created per region. This property would take effect for a region when regionalReplicaCount is not specified. This property is updatable.
* **replicationMode**: 'Full' | 'Shallow': Optional parameter which specifies the mode to be used for replication. This property is not updatable.
* **storageAccountType**: 'Premium_LRS' | 'Standard_LRS' | 'Standard_ZRS': Specifies the storage account type to be used to store the image. This property is not updatable.
* **targetRegions**: [TargetRegion](#targetregion)[]: The target regions where the Image Version is going to be replicated to. This property is updatable.

## GalleryImageVersionStorageProfile
### Properties
* **dataDiskImages**: [GalleryDataDiskImage](#gallerydatadiskimage)[]: A list of data disk images.
* **osDiskImage**: [GalleryOSDiskImage](#galleryosdiskimage): This is the OS disk image.
* **source**: [GalleryArtifactVersionSource](#galleryartifactversionsource): The gallery artifact version source.

## GalleryDataDiskImage
### Properties
* **hostCaching**: 'None' | 'ReadOnly' | 'ReadWrite': The host caching of the disk. Valid values are 'None', 'ReadOnly', and 'ReadWrite'
* **lun**: int (Required): This property specifies the logical unit number of the data disk. This value is used to identify data disks within the Virtual Machine and therefore must be unique for each data disk attached to the Virtual Machine.
* **sizeInGB**: int (ReadOnly): This property indicates the size of the VHD to be created.
* **source**: [GalleryArtifactVersionSource](#galleryartifactversionsource): The gallery artifact version source.

## GalleryArtifactVersionSource
### Properties
* **id**: string: The id of the gallery artifact version source. Can specify a disk uri, snapshot uri, user image or storage account resource.
* **uri**: string: The uri of the gallery artifact version source. Currently used to specify vhd/blob source.

## GalleryOSDiskImage
### Properties
* **hostCaching**: 'None' | 'ReadOnly' | 'ReadWrite': The host caching of the disk. Valid values are 'None', 'ReadOnly', and 'ReadWrite'
* **sizeInGB**: int (ReadOnly): This property indicates the size of the VHD to be created.
* **source**: [GalleryArtifactVersionSource](#galleryartifactversionsource): The gallery artifact version source.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DedicatedHostGroupProperties
### Properties
* **hosts**: [SubResourceReadOnly](#subresourcereadonly)[] (ReadOnly): A list of references to all dedicated hosts in the dedicated host group.
* **instanceView**: [DedicatedHostGroupInstanceView](#dedicatedhostgroupinstanceview) (ReadOnly)
* **platformFaultDomainCount**: int (Required): Number of fault domains that the host group can span.
* **supportAutomaticPlacement**: bool: Specifies whether virtual machines or virtual machine scale sets can be placed automatically on the dedicated host group. Automatic placement means resources are allocated on dedicated hosts, that are chosen by Azure, under the dedicated host group. The value is defaulted to 'false' when not provided. <br><br>Minimum api-version: 2020-06-01.

## DedicatedHostGroupInstanceView
### Properties
* **hosts**: [DedicatedHostInstanceViewWithName](#dedicatedhostinstanceviewwithname)[]: List of instance view of the dedicated hosts under the dedicated host group.

## DedicatedHostInstanceViewWithName
### Properties
* **assetId**: string (ReadOnly): Specifies the unique id of the dedicated physical machine on which the dedicated host resides.
* **availableCapacity**: [DedicatedHostAvailableCapacity](#dedicatedhostavailablecapacity): Dedicated host unutilized capacity.
* **name**: string (ReadOnly): The name of the dedicated host.
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[]: The resource status information.

## DedicatedHostAvailableCapacity
### Properties
* **allocatableVMs**: [DedicatedHostAllocatableVM](#dedicatedhostallocatablevm)[]: The unutilized capacity of the dedicated host represented in terms of each VM size that is allowed to be deployed to the dedicated host.

## DedicatedHostAllocatableVM
### Properties
* **count**: int: Maximum number of VMs of size vmSize that can fit in the dedicated host's remaining capacity.
* **vmSize**: string: VM size in terms of which the unutilized capacity is represented.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DedicatedHostProperties
### Properties
* **autoReplaceOnFailure**: bool: Specifies whether the dedicated host should be replaced automatically in case of a failure. The value is defaulted to 'true' when not provided.
* **hostId**: string (ReadOnly): A unique id generated and assigned to the dedicated host by the platform. <br><br> Does not change throughout the lifetime of the host.
* **instanceView**: [DedicatedHostInstanceView](#dedicatedhostinstanceview) (ReadOnly): The instance view of a dedicated host.
* **licenseType**: 'None' | 'Windows_Server_Hybrid' | 'Windows_Server_Perpetual': Specifies the software license type that will be applied to the VMs deployed on the dedicated host. <br><br> Possible values are: <br><br> **None** <br><br> **Windows_Server_Hybrid** <br><br> **Windows_Server_Perpetual** <br><br> Default: **None**
* **platformFaultDomain**: int: Fault domain of the dedicated host within a dedicated host group.
* **provisioningState**: string (ReadOnly): The provisioning state, which only appears in the response.
* **provisioningTime**: string (ReadOnly): The date when the host was first provisioned.
* **virtualMachines**: [SubResourceReadOnly](#subresourcereadonly)[] (ReadOnly): A list of references to all virtual machines in the Dedicated Host.

## DedicatedHostInstanceView
### Properties
* **assetId**: string (ReadOnly): Specifies the unique id of the dedicated physical machine on which the dedicated host resides.
* **availableCapacity**: [DedicatedHostAvailableCapacity](#dedicatedhostavailablecapacity): Dedicated host unutilized capacity.
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[]: The resource status information.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ExtendedLocation
### Properties
* **name**: string: The name of the extended location.
* **type**: 'EdgeZone': The type of extendedLocation.

## ImageProperties
### Properties
* **hyperVGeneration**: 'V1' | 'V2': Specifies the HyperVGeneration Type
* **provisioningState**: string (ReadOnly): The provisioning state.
* **sourceVirtualMachine**: [SubResource](#subresource)
* **storageProfile**: [ImageStorageProfile](#imagestorageprofile): Describes a storage profile.

## ImageStorageProfile
### Properties
* **dataDisks**: [ImageDataDisk](#imagedatadisk)[]: Specifies the parameters that are used to add a data disk to a virtual machine. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/managed-disks-overview).
* **osDisk**: [ImageOSDisk](#imageosdisk): Describes an Operating System disk.
* **zoneResilient**: bool: Specifies whether an image is zone resilient or not. Default is false. Zone resilient images can be created only in regions that provide Zone Redundant Storage (ZRS).

## ImageDataDisk
### Properties
* **blobUri**: string: The Virtual Hard Disk.
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite': Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage**
* **diskEncryptionSet**: [DiskEncryptionSetParameters](#diskencryptionsetparameters): Describes the parameter of customer managed disk encryption set resource id that can be specified for disk. <br><br> NOTE: The disk encryption set resource id can only be specified for managed disk. Please refer https://aka.ms/mdssewithcmkoverview for more details.
* **diskSizeGB**: int: Specifies the size of empty data disks in gigabytes. This element can be used to overwrite the name of the disk in a virtual machine image. <br><br> This value cannot be larger than 1023 GB
* **lun**: int (Required): Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
* **managedDisk**: [SubResource](#subresource)
* **snapshot**: [SubResource](#subresource)
* **storageAccountType**: 'Premium_LRS' | 'Premium_ZRS' | 'StandardSSD_LRS' | 'StandardSSD_ZRS' | 'Standard_LRS' | 'UltraSSD_LRS': Specifies the storage account type for the managed disk. Managed OS disk storage account type can only be set when you create the scale set. NOTE: UltraSSD_LRS can only be used with data disks. It cannot be used with OS Disk. Standard_LRS uses Standard HDD. StandardSSD_LRS uses Standard SSD. Premium_LRS uses Premium SSD. UltraSSD_LRS uses Ultra disk. Premium_ZRS uses Premium SSD zone redundant storage. StandardSSD_ZRS uses Standard SSD zone redundant storage. For more information regarding disks supported for Windows Virtual Machines, refer to https://docs.microsoft.com/azure/virtual-machines/windows/disks-types and, for Linux Virtual Machines, refer to https://docs.microsoft.com/azure/virtual-machines/linux/disks-types

## DiskEncryptionSetParameters
### Properties
* **id**: string: Resource Id

## ImageOSDisk
### Properties
* **blobUri**: string: The Virtual Hard Disk.
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite': Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage**
* **diskEncryptionSet**: [DiskEncryptionSetParameters](#diskencryptionsetparameters): Describes the parameter of customer managed disk encryption set resource id that can be specified for disk. <br><br> NOTE: The disk encryption set resource id can only be specified for managed disk. Please refer https://aka.ms/mdssewithcmkoverview for more details.
* **diskSizeGB**: int: Specifies the size of empty data disks in gigabytes. This element can be used to overwrite the name of the disk in a virtual machine image. <br><br> This value cannot be larger than 1023 GB
* **managedDisk**: [SubResource](#subresource)
* **osState**: 'Generalized' | 'Specialized' (Required): The OS State.
* **osType**: 'Linux' | 'Windows' (Required): The operating system of the osDiskImage.
* **snapshot**: [SubResource](#subresource)
* **storageAccountType**: 'Premium_LRS' | 'Premium_ZRS' | 'StandardSSD_LRS' | 'StandardSSD_ZRS' | 'Standard_LRS' | 'UltraSSD_LRS': Specifies the storage account type for the managed disk. Managed OS disk storage account type can only be set when you create the scale set. NOTE: UltraSSD_LRS can only be used with data disks. It cannot be used with OS Disk. Standard_LRS uses Standard HDD. StandardSSD_LRS uses Standard SSD. Premium_LRS uses Premium SSD. UltraSSD_LRS uses Ultra disk. Premium_ZRS uses Premium SSD zone redundant storage. StandardSSD_ZRS uses Standard SSD zone redundant storage. For more information regarding disks supported for Windows Virtual Machines, refer to https://docs.microsoft.com/azure/virtual-machines/windows/disks-types and, for Linux Virtual Machines, refer to https://docs.microsoft.com/azure/virtual-machines/linux/disks-types

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProximityPlacementGroupProperties
### Properties
* **availabilitySets**: [SubResourceWithColocationStatus](#subresourcewithcolocationstatus)[] (ReadOnly): A list of references to all availability sets in the proximity placement group.
* **colocationStatus**: [InstanceViewStatus](#instanceviewstatus): Instance view status.
* **proximityPlacementGroupType**: 'Standard' | 'Ultra': Specifies the type of the proximity placement group. <br><br> Possible values are: <br><br> **Standard** : Co-locate resources within an Azure region or Availability Zone. <br><br> **Ultra** : For future use.
* **virtualMachines**: [SubResourceWithColocationStatus](#subresourcewithcolocationstatus)[] (ReadOnly): A list of references to all virtual machines in the proximity placement group.
* **virtualMachineScaleSets**: [SubResourceWithColocationStatus](#subresourcewithcolocationstatus)[] (ReadOnly): A list of references to all virtual machine scale sets in the proximity placement group.

## SubResourceWithColocationStatus
### Properties
* **colocationStatus**: [InstanceViewStatus](#instanceviewstatus): Instance view status.
* **id**: string: Resource Id

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RestorePointCollectionProperties
### Properties
* **provisioningState**: string (ReadOnly): The provisioning state of the restore point collection.
* **restorePointCollectionId**: string (ReadOnly): The unique id of the restore point collection.
* **restorePoints**: [RestorePoint](#restorepoint)[] (ReadOnly): A list containing all restore points created under this restore point collection.
* **source**: [RestorePointCollectionSourceProperties](#restorepointcollectionsourceproperties): The properties of the source resource that this restore point collection is created from.

## RestorePoint
### Properties
* **id**: string (ReadOnly): Resource Id
* **name**: string (ReadOnly): Resource name
* **properties**: [RestorePointProperties](#restorepointproperties): The restore point properties.
* **type**: string (ReadOnly): Resource type

## RestorePointProperties
### Properties
* **consistencyMode**: 'ApplicationConsistent' | 'CrashConsistent' | 'FileSystemConsistent' (ReadOnly): Gets the consistency mode for the restore point. Please refer to https://aka.ms/RestorePoints for more details.
* **excludeDisks**: [ApiEntityReference](#apientityreference)[]: List of disk resource ids that the customer wishes to exclude from the restore point. If no disks are specified, all disks will be included.
* **provisioningDetails**: [RestorePointProvisioningDetails](#restorepointprovisioningdetails) (ReadOnly): Restore Point Provisioning details.
* **provisioningState**: string (ReadOnly): Gets the provisioning state of the restore point.
* **sourceMetadata**: [RestorePointSourceMetadata](#restorepointsourcemetadata) (ReadOnly): Describes the properties of the Virtual Machine for which the restore point was created. The properties provided are a subset and the snapshot of the overall Virtual Machine properties captured at the time of the restore point creation.

## ApiEntityReference
### Properties
* **id**: string: The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/...

## RestorePointProvisioningDetails
### Properties
* **creationTime**: string: Gets the creation time of the restore point.
* **statusCode**: int: Gets the status of the Create restore point operation.
* **statusMessage**: string: Gets the status message of the Create restore point operation.
* **totalUsedSizeInBytes**: int: Gets the total size of the data in all the disks which are part of the restore point.

## RestorePointSourceMetadata
### Properties
* **diagnosticsProfile**: [DiagnosticsProfile](#diagnosticsprofile): Specifies the boot diagnostic settings state. <br><br>Minimum api-version: 2015-06-15.
* **hardwareProfile**: [HardwareProfile](#hardwareprofile): Specifies the hardware settings for the virtual machine.
* **licenseType**: string: Gets the license type, which is for bring your own license scenario.
* **location**: string: Location of the VM from which the restore point was created.
* **osProfile**: [OSProfile](#osprofile): Specifies the operating system settings for the virtual machine. Some of the settings cannot be changed once VM is provisioned.
* **securityProfile**: [SecurityProfile](#securityprofile): Specifies the Security profile settings for the virtual machine or virtual machine scale set.
* **storageProfile**: [RestorePointSourceVMStorageProfile](#restorepointsourcevmstorageprofile): Describes the storage profile.
* **vmId**: string: Gets the virtual machine unique id.

## DiagnosticsProfile
### Properties
* **bootDiagnostics**: [BootDiagnostics](#bootdiagnostics): Boot Diagnostics is a debugging feature which allows you to view Console Output and Screenshot to diagnose VM status. <br><br> You can easily view the output of your console log. <br><br> Azure also enables you to see a screenshot of the VM from the hypervisor.

## BootDiagnostics
### Properties
* **enabled**: bool: Whether boot diagnostics should be enabled on the Virtual Machine.
* **storageUri**: string: Uri of the storage account to use for placing the console output and screenshot. <br><br>If storageUri is not specified while enabling boot diagnostics, managed storage will be used.

## HardwareProfile
### Properties
* **vmSize**: 'Basic_A0' | 'Basic_A1' | 'Basic_A2' | 'Basic_A3' | 'Basic_A4' | 'Standard_A0' | 'Standard_A1' | 'Standard_A10' | 'Standard_A11' | 'Standard_A1_v2' | 'Standard_A2' | 'Standard_A2_v2' | 'Standard_A2m_v2' | 'Standard_A3' | 'Standard_A4' | 'Standard_A4_v2' | 'Standard_A4m_v2' | 'Standard_A5' | 'Standard_A6' | 'Standard_A7' | 'Standard_A8' | 'Standard_A8_v2' | 'Standard_A8m_v2' | 'Standard_A9' | 'Standard_B1ms' | 'Standard_B1s' | 'Standard_B2ms' | 'Standard_B2s' | 'Standard_B4ms' | 'Standard_B8ms' | 'Standard_D1' | 'Standard_D11' | 'Standard_D11_v2' | 'Standard_D12' | 'Standard_D12_v2' | 'Standard_D13' | 'Standard_D13_v2' | 'Standard_D14' | 'Standard_D14_v2' | 'Standard_D15_v2' | 'Standard_D16_v3' | 'Standard_D16s_v3' | 'Standard_D1_v2' | 'Standard_D2' | 'Standard_D2_v2' | 'Standard_D2_v3' | 'Standard_D2s_v3' | 'Standard_D3' | 'Standard_D32_v3' | 'Standard_D32s_v3' | 'Standard_D3_v2' | 'Standard_D4' | 'Standard_D4_v2' | 'Standard_D4_v3' | 'Standard_D4s_v3' | 'Standard_D5_v2' | 'Standard_D64_v3' | 'Standard_D64s_v3' | 'Standard_D8_v3' | 'Standard_D8s_v3' | 'Standard_DS1' | 'Standard_DS11' | 'Standard_DS11_v2' | 'Standard_DS12' | 'Standard_DS12_v2' | 'Standard_DS13' | 'Standard_DS13-2_v2' | 'Standard_DS13-4_v2' | 'Standard_DS13_v2' | 'Standard_DS14' | 'Standard_DS14-4_v2' | 'Standard_DS14-8_v2' | 'Standard_DS14_v2' | 'Standard_DS15_v2' | 'Standard_DS1_v2' | 'Standard_DS2' | 'Standard_DS2_v2' | 'Standard_DS3' | 'Standard_DS3_v2' | 'Standard_DS4' | 'Standard_DS4_v2' | 'Standard_DS5_v2' | 'Standard_E16_v3' | 'Standard_E16s_v3' | 'Standard_E2_v3' | 'Standard_E2s_v3' | 'Standard_E32-16_v3' | 'Standard_E32-8s_v3' | 'Standard_E32_v3' | 'Standard_E32s_v3' | 'Standard_E4_v3' | 'Standard_E4s_v3' | 'Standard_E64-16s_v3' | 'Standard_E64-32s_v3' | 'Standard_E64_v3' | 'Standard_E64s_v3' | 'Standard_E8_v3' | 'Standard_E8s_v3' | 'Standard_F1' | 'Standard_F16' | 'Standard_F16s' | 'Standard_F16s_v2' | 'Standard_F1s' | 'Standard_F2' | 'Standard_F2s' | 'Standard_F2s_v2' | 'Standard_F32s_v2' | 'Standard_F4' | 'Standard_F4s' | 'Standard_F4s_v2' | 'Standard_F64s_v2' | 'Standard_F72s_v2' | 'Standard_F8' | 'Standard_F8s' | 'Standard_F8s_v2' | 'Standard_G1' | 'Standard_G2' | 'Standard_G3' | 'Standard_G4' | 'Standard_G5' | 'Standard_GS1' | 'Standard_GS2' | 'Standard_GS3' | 'Standard_GS4' | 'Standard_GS4-4' | 'Standard_GS4-8' | 'Standard_GS5' | 'Standard_GS5-16' | 'Standard_GS5-8' | 'Standard_H16' | 'Standard_H16m' | 'Standard_H16mr' | 'Standard_H16r' | 'Standard_H8' | 'Standard_H8m' | 'Standard_L16s' | 'Standard_L32s' | 'Standard_L4s' | 'Standard_L8s' | 'Standard_M128-32ms' | 'Standard_M128-64ms' | 'Standard_M128ms' | 'Standard_M128s' | 'Standard_M64-16ms' | 'Standard_M64-32ms' | 'Standard_M64ms' | 'Standard_M64s' | 'Standard_NC12' | 'Standard_NC12s_v2' | 'Standard_NC12s_v3' | 'Standard_NC24' | 'Standard_NC24r' | 'Standard_NC24rs_v2' | 'Standard_NC24rs_v3' | 'Standard_NC24s_v2' | 'Standard_NC24s_v3' | 'Standard_NC6' | 'Standard_NC6s_v2' | 'Standard_NC6s_v3' | 'Standard_ND12s' | 'Standard_ND24rs' | 'Standard_ND24s' | 'Standard_ND6s' | 'Standard_NV12' | 'Standard_NV24' | 'Standard_NV6': Specifies the size of the virtual machine. <br><br> The enum data type is currently deprecated and will be removed by December 23rd 2023. <br><br> Recommended way to get the list of available sizes is using these APIs: <br><br> [List all available virtual machine sizes in an availability set](https://docs.microsoft.com/rest/api/compute/availabilitysets/listavailablesizes) <br><br> [List all available virtual machine sizes in a region]( https://docs.microsoft.com/rest/api/compute/resourceskus/list) <br><br> [List all available virtual machine sizes for resizing](https://docs.microsoft.com/rest/api/compute/virtualmachines/listavailablesizes). For more information about virtual machine sizes, see [Sizes for virtual machines](https://docs.microsoft.com/azure/virtual-machines/sizes). <br><br> The available VM sizes depend on region and availability set.
* **vmSizeProperties**: [VMSizeProperties](#vmsizeproperties): Specifies VM Size Property settings on the virtual machine.

## VMSizeProperties
### Properties
* **vCPUsAvailable**: int: Specifies the number of vCPUs available for the VM. <br><br> When this property is not specified in the request body the default behavior is to set it to the value of vCPUs available for that VM size exposed in api response of [List all available virtual machine sizes in a region](https://docs.microsoft.com/en-us/rest/api/compute/resource-skus/list) .
* **vCPUsPerCore**: int: Specifies the vCPU to physical core ratio. <br><br> When this property is not specified in the request body the default behavior is set to the value of vCPUsPerCore for the VM Size exposed in api response of [List all available virtual machine sizes in a region](https://docs.microsoft.com/en-us/rest/api/compute/resource-skus/list) <br><br> Setting this property to 1 also means that hyper-threading is disabled.

## OSProfile
### Properties
* **adminPassword**: string: Specifies the password of the administrator account. <br><br> **Minimum-length (Windows):** 8 characters <br><br> **Minimum-length (Linux):** 6 characters <br><br> **Max-length (Windows):** 123 characters <br><br> **Max-length (Linux):** 72 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!" <br><br> For resetting the password, see [How to reset the Remote Desktop service or its login password in a Windows VM](https://docs.microsoft.com/troubleshoot/azure/virtual-machines/reset-rdp) <br><br> For resetting root password, see [Manage users, SSH, and check or repair disks on Azure Linux VMs using the VMAccess Extension](https://docs.microsoft.com/troubleshoot/azure/virtual-machines/troubleshoot-ssh-connection)
* **adminUsername**: string: Specifies the name of the administrator account. <br><br> This property cannot be updated after the VM is created. <br><br> **Windows-only restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length (Linux):** 1  character <br><br> **Max-length (Linux):** 64 characters <br><br> **Max-length (Windows):** 20 characters.
* **allowExtensionOperations**: bool: Specifies whether extension operations should be allowed on the virtual machine. <br><br>This may only be set to False when no extensions are present on the virtual machine.
* **computerName**: string: Specifies the host OS name of the virtual machine. <br><br> This name cannot be updated after the VM is created. <br><br> **Max-length (Windows):** 15 characters <br><br> **Max-length (Linux):** 64 characters. <br><br> For naming conventions and restrictions see [Azure infrastructure services implementation guidelines](https://docs.microsoft.com/azure/azure-resource-manager/management/resource-name-rules).
* **customData**: string: Specifies a base-64 encoded string of custom data. The base-64 encoded string is decoded to a binary array that is saved as a file on the Virtual Machine. The maximum length of the binary array is 65535 bytes. <br><br> **Note: Do not pass any secrets or passwords in customData property** <br><br> This property cannot be updated after the VM is created. <br><br> customData is passed to the VM to be saved as a file, for more information see [Custom Data on Azure VMs](https://azure.microsoft.com/blog/custom-data-and-cloud-init-on-windows-azure/) <br><br> For using cloud-init for your Linux VM, see [Using cloud-init to customize a Linux VM during creation](https://docs.microsoft.com/azure/virtual-machines/linux/using-cloud-init)
* **linuxConfiguration**: [LinuxConfiguration](#linuxconfiguration): Specifies the Linux operating system settings on the virtual machine. <br><br>For a list of supported Linux distributions, see [Linux on Azure-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/linux/endorsed-distros).
* **requireGuestProvisionSignal**: bool: Specifies whether the guest provision signal is required to infer provision success of the virtual machine.  **Note: This property is for private testing only, and all customers must not set the property to false.**
* **secrets**: [VaultSecretGroup](#vaultsecretgroup)[]: Specifies set of certificates that should be installed onto the virtual machine. To install certificates on a virtual machine it is recommended to use the [Azure Key Vault virtual machine extension for Linux](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-linux) or the [Azure Key Vault virtual machine extension for Windows](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-windows).
* **windowsConfiguration**: [WindowsConfiguration](#windowsconfiguration): Specifies Windows operating system settings on the virtual machine.

## LinuxConfiguration
### Properties
* **disablePasswordAuthentication**: bool: Specifies whether password authentication should be disabled.
* **patchSettings**: [LinuxPatchSettings](#linuxpatchsettings): Specifies settings related to VM Guest Patching on Linux.
* **provisionVMAgent**: bool: Indicates whether virtual machine agent should be provisioned on the virtual machine. <br><br> When this property is not specified in the request body, default behavior is to set it to true.  This will ensure that VM Agent is installed on the VM so that extensions can be added to the VM later.
* **ssh**: [SshConfiguration](#sshconfiguration): SSH configuration for Linux based VMs running on Azure

## LinuxPatchSettings
### Properties
* **assessmentMode**: 'AutomaticByPlatform' | 'ImageDefault': Specifies the mode of VM Guest Patch Assessment for the IaaS virtual machine.<br /><br /> Possible values are:<br /><br /> **ImageDefault** - You control the timing of patch assessments on a virtual machine. <br /><br /> **AutomaticByPlatform** - The platform will trigger periodic patch assessments. The property provisionVMAgent must be true.
* **patchMode**: 'AutomaticByPlatform' | 'ImageDefault': Specifies the mode of VM Guest Patching to IaaS virtual machine or virtual machines associated to virtual machine scale set with OrchestrationMode as Flexible.<br /><br /> Possible values are:<br /><br /> **ImageDefault** - The virtual machine's default patching configuration is used. <br /><br /> **AutomaticByPlatform** - The virtual machine will be automatically updated by the platform. The property provisionVMAgent must be true

## SshConfiguration
### Properties
* **publicKeys**: [SshPublicKey](#sshpublickey)[]: The list of SSH public keys used to authenticate with linux based VMs.

## SshPublicKey
### Properties
* **keyData**: string: SSH public key certificate used to authenticate with the VM through ssh. The key needs to be at least 2048-bit and in ssh-rsa format. <br><br> For creating ssh keys, see [Create SSH keys on Linux and Mac for Linux VMs in Azure]https://docs.microsoft.com/azure/virtual-machines/linux/create-ssh-keys-detailed).
* **path**: string: Specifies the full path on the created VM where ssh public key is stored. If the file already exists, the specified key is appended to the file. Example: /home/user/.ssh/authorized_keys

## VaultSecretGroup
### Properties
* **sourceVault**: [SubResource](#subresource)
* **vaultCertificates**: [VaultCertificate](#vaultcertificate)[]: The list of key vault references in SourceVault which contain certificates.

## VaultCertificate
### Properties
* **certificateStore**: string: For Windows VMs, specifies the certificate store on the Virtual Machine to which the certificate should be added. The specified certificate store is implicitly in the LocalMachine account. <br><br>For Linux VMs, the certificate file is placed under the /var/lib/waagent directory, with the file name &lt;UppercaseThumbprint&gt;.crt for the X509 certificate file and &lt;UppercaseThumbprint&gt;.prv for private key. Both of these files are .pem formatted.
* **certificateUrl**: string: This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, see [Add a key or secret to the key vault](https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add). In this case, your certificate needs to be It is the Base64 encoding of the following JSON Object which is encoded in UTF-8: <br><br> {<br>  "data":"<Base64-encoded-certificate>",<br>  "dataType":"pfx",<br>  "password":"<pfx-file-password>"<br>} <br> To install certificates on a virtual machine it is recommended to use the [Azure Key Vault virtual machine extension for Linux](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-linux) or the [Azure Key Vault virtual machine extension for Windows](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-windows).

## WindowsConfiguration
### Properties
* **additionalUnattendContent**: [AdditionalUnattendContent](#additionalunattendcontent)[]: Specifies additional base-64 encoded XML formatted information that can be included in the Unattend.xml file, which is used by Windows Setup.
* **enableAutomaticUpdates**: bool: Indicates whether Automatic Updates is enabled for the Windows virtual machine. Default value is true. <br><br> For virtual machine scale sets, this property can be updated and updates will take effect on OS reprovisioning.
* **patchSettings**: [PatchSettings](#patchsettings): Specifies settings related to VM Guest Patching on Windows.
* **provisionVMAgent**: bool: Indicates whether virtual machine agent should be provisioned on the virtual machine. <br><br> When this property is not specified in the request body, default behavior is to set it to true.  This will ensure that VM Agent is installed on the VM so that extensions can be added to the VM later.
* **timeZone**: string: Specifies the time zone of the virtual machine. e.g. "Pacific Standard Time". <br><br> Possible values can be [TimeZoneInfo.Id](https://docs.microsoft.com/dotnet/api/system.timezoneinfo.id?#System_TimeZoneInfo_Id) value from time zones returned by [TimeZoneInfo.GetSystemTimeZones](https://docs.microsoft.com/dotnet/api/system.timezoneinfo.getsystemtimezones).
* **winRM**: [WinRMConfiguration](#winrmconfiguration): Describes Windows Remote Management configuration of the VM

## AdditionalUnattendContent
### Properties
* **componentName**: 'Microsoft-Windows-Shell-Setup': The component name. Currently, the only allowable value is Microsoft-Windows-Shell-Setup.
* **content**: string: Specifies the XML formatted content that is added to the unattend.xml file for the specified path and component. The XML must be less than 4KB and must include the root element for the setting or feature that is being inserted.
* **passName**: 'OobeSystem': The pass name. Currently, the only allowable value is OobeSystem.
* **settingName**: 'AutoLogon' | 'FirstLogonCommands': Specifies the name of the setting to which the content applies. Possible values are: FirstLogonCommands and AutoLogon.

## PatchSettings
### Properties
* **assessmentMode**: 'AutomaticByPlatform' | 'ImageDefault': Specifies the mode of VM Guest patch assessment for the IaaS virtual machine.<br /><br /> Possible values are:<br /><br /> **ImageDefault** - You control the timing of patch assessments on a virtual machine.<br /><br /> **AutomaticByPlatform** - The platform will trigger periodic patch assessments. The property provisionVMAgent must be true.
* **enableHotpatching**: bool: Enables customers to patch their Azure VMs without requiring a reboot. For enableHotpatching, the 'provisionVMAgent' must be set to true and 'patchMode' must be set to 'AutomaticByPlatform'.
* **patchMode**: 'AutomaticByOS' | 'AutomaticByPlatform' | 'Manual': Specifies the mode of VM Guest Patching to IaaS virtual machine or virtual machines associated to virtual machine scale set with OrchestrationMode as Flexible.<br /><br /> Possible values are:<br /><br /> **Manual** - You  control the application of patches to a virtual machine. You do this by applying patches manually inside the VM. In this mode, automatic updates are disabled; the property WindowsConfiguration.enableAutomaticUpdates must be false<br /><br /> **AutomaticByOS** - The virtual machine will automatically be updated by the OS. The property WindowsConfiguration.enableAutomaticUpdates must be true. <br /><br /> **AutomaticByPlatform** - the virtual machine will automatically updated by the platform. The properties provisionVMAgent and WindowsConfiguration.enableAutomaticUpdates must be true

## WinRMConfiguration
### Properties
* **listeners**: [WinRMListener](#winrmlistener)[]: The list of Windows Remote Management listeners

## WinRMListener
### Properties
* **certificateUrl**: string: This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, see [Add a key or secret to the key vault](https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add). In this case, your certificate needs to be It is the Base64 encoding of the following JSON Object which is encoded in UTF-8: <br><br> {<br>  "data":"<Base64-encoded-certificate>",<br>  "dataType":"pfx",<br>  "password":"<pfx-file-password>"<br>} <br> To install certificates on a virtual machine it is recommended to use the [Azure Key Vault virtual machine extension for Linux](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-linux) or the [Azure Key Vault virtual machine extension for Windows](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-windows).
* **protocol**: 'Http' | 'Https': Specifies the protocol of WinRM listener. <br><br> Possible values are: <br>**http** <br><br> **https**

## SecurityProfile
### Properties
* **encryptionAtHost**: bool: This property can be used by user in the request to enable or disable the Host Encryption for the virtual machine or virtual machine scale set. This will enable the encryption for all the disks including Resource/Temp disk at host itself. <br><br> Default: The Encryption at host will be disabled unless this property is set to true for the resource.
* **securityType**: 'TrustedLaunch': Specifies the SecurityType of the virtual machine. It is set as TrustedLaunch to enable UefiSettings. <br><br> Default: UefiSettings will not be enabled unless this property is set as TrustedLaunch.
* **uefiSettings**: [UefiSettings](#uefisettings): Specifies the security settings like secure boot and vTPM used while creating the virtual machine. <br><br>Minimum api-version: 2020-12-01

## UefiSettings
### Properties
* **secureBootEnabled**: bool: Specifies whether secure boot should be enabled on the virtual machine. <br><br>Minimum api-version: 2020-12-01
* **vTpmEnabled**: bool: Specifies whether vTPM should be enabled on the virtual machine. <br><br>Minimum api-version: 2020-12-01

## RestorePointSourceVMStorageProfile
### Properties
* **dataDisks**: [RestorePointSourceVMDataDisk](#restorepointsourcevmdatadisk)[]: Gets the data disks of the VM captured at the time of the restore point creation.
* **osDisk**: [RestorePointSourceVmosDisk](#restorepointsourcevmosdisk): Describes an Operating System disk.

## RestorePointSourceVMDataDisk
### Properties
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite': Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage**
* **diskRestorePoint**: [ApiEntityReference](#apientityreference): The API entity reference.
* **diskSizeGB**: int: Gets the initial disk size in GB for blank data disks, and the new desired size for existing OS and Data disks.
* **lun**: int: Gets the logical unit number.
* **managedDisk**: [ManagedDiskParameters](#manageddiskparameters): The parameters of a managed disk.
* **name**: string: Gets the disk name.

## ManagedDiskParameters
### Properties
* **diskEncryptionSet**: [DiskEncryptionSetParameters](#diskencryptionsetparameters): Describes the parameter of customer managed disk encryption set resource id that can be specified for disk. <br><br> NOTE: The disk encryption set resource id can only be specified for managed disk. Please refer https://aka.ms/mdssewithcmkoverview for more details.
* **id**: string: Resource Id
* **storageAccountType**: 'Premium_LRS' | 'Premium_ZRS' | 'StandardSSD_LRS' | 'StandardSSD_ZRS' | 'Standard_LRS' | 'UltraSSD_LRS': Specifies the storage account type for the managed disk. Managed OS disk storage account type can only be set when you create the scale set. NOTE: UltraSSD_LRS can only be used with data disks. It cannot be used with OS Disk. Standard_LRS uses Standard HDD. StandardSSD_LRS uses Standard SSD. Premium_LRS uses Premium SSD. UltraSSD_LRS uses Ultra disk. Premium_ZRS uses Premium SSD zone redundant storage. StandardSSD_ZRS uses Standard SSD zone redundant storage. For more information regarding disks supported for Windows Virtual Machines, refer to https://docs.microsoft.com/azure/virtual-machines/windows/disks-types and, for Linux Virtual Machines, refer to https://docs.microsoft.com/azure/virtual-machines/linux/disks-types

## RestorePointSourceVmosDisk
### Properties
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite': Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage**
* **diskRestorePoint**: [ApiEntityReference](#apientityreference): The API entity reference.
* **diskSizeGB**: int: Gets the disk size in GB.
* **encryptionSettings**: [DiskEncryptionSettings](#diskencryptionsettings): Describes a Encryption Settings for a Disk
* **managedDisk**: [ManagedDiskParameters](#manageddiskparameters): The parameters of a managed disk.
* **name**: string: Gets the disk name.
* **osType**: 'Linux' | 'Windows': Gets the Operating System type.

## DiskEncryptionSettings
### Properties
* **diskEncryptionKey**: [KeyVaultSecretReference](#keyvaultsecretreference): Describes a reference to Key Vault Secret
* **enabled**: bool: Specifies whether disk encryption should be enabled on the virtual machine.
* **keyEncryptionKey**: [KeyVaultKeyReference](#keyvaultkeyreference): Describes a reference to Key Vault Key

## KeyVaultSecretReference
### Properties
* **secretUrl**: string (Required): The URL referencing a secret in a Key Vault.
* **sourceVault**: [SubResource](#subresource) (Required)

## KeyVaultKeyReference
### Properties
* **keyUrl**: string (Required): The URL referencing a key encryption key in Key Vault.
* **sourceVault**: [SubResource](#subresource) (Required)

## RestorePointCollectionSourceProperties
### Properties
* **id**: string: Resource Id of the source resource used to create this restore point collection
* **location**: string (ReadOnly): Location of the source resource used to create this restore point collection.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SshPublicKeyResourceProperties
### Properties
* **publicKey**: string: SSH public key used to authenticate to a virtual machine through ssh. If this property is not initially provided when the resource is created, the publicKey property will be populated when generateKeyPair is called. If the public key is provided upon resource creation, the provided public key needs to be at least 2048-bit and in ssh-rsa format.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VirtualMachineIdentity
### Properties
* **principalId**: string (ReadOnly): The principal id of virtual machine identity. This property will only be provided for a system assigned identity.
* **tenantId**: string (ReadOnly): The tenant id associated with the virtual machine. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned': The type of identity used for the virtual machine. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine.
* **userAssignedIdentities**: [VirtualMachineIdentityUserAssignedIdentities](#virtualmachineidentityuserassignedidentities): The list of user identities associated with the Virtual Machine. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## VirtualMachineIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentitiesValue](#userassignedidentitiesvalue)

## UserAssignedIdentitiesValue
### Properties
* **clientId**: string (ReadOnly): The client id of user assigned identity.
* **principalId**: string (ReadOnly): The principal id of user assigned identity.

## Plan
### Properties
* **name**: string: The plan ID.
* **product**: string: Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element.
* **promotionCode**: string: The promotion code.
* **publisher**: string: The publisher ID.

## VirtualMachineProperties
### Properties
* **additionalCapabilities**: [AdditionalCapabilities](#additionalcapabilities): Enables or disables a capability on the virtual machine or virtual machine scale set.
* **applicationProfile**: [ApplicationProfile](#applicationprofile): Contains the list of gallery applications that should be made available to the VM/VMSS
* **availabilitySet**: [SubResource](#subresource)
* **billingProfile**: [BillingProfile](#billingprofile): Specifies the billing related details of a Azure Spot VM or VMSS. <br><br>Minimum api-version: 2019-03-01.
* **capacityReservation**: [CapacityReservationProfile](#capacityreservationprofile): The parameters of a capacity reservation Profile.
* **diagnosticsProfile**: [DiagnosticsProfile](#diagnosticsprofile): Specifies the boot diagnostic settings state. <br><br>Minimum api-version: 2015-06-15.
* **evictionPolicy**: 'Deallocate' | 'Delete': Specifies the eviction policy for the Azure Spot VM/VMSS
* **extensionsTimeBudget**: string: Specifies the time alloted for all extensions to start. The time duration should be between 15 minutes and 120 minutes (inclusive) and should be specified in ISO 8601 format. The default value is 90 minutes (PT1H30M). <br><br> Minimum api-version: 2020-06-01
* **hardwareProfile**: [HardwareProfile](#hardwareprofile): Specifies the hardware settings for the virtual machine.
* **host**: [SubResource](#subresource)
* **hostGroup**: [SubResource](#subresource)
* **instanceView**: [VirtualMachineInstanceView](#virtualmachineinstanceview) (ReadOnly): The instance view of a virtual machine.
* **licenseType**: string: Specifies that the image or disk that is being used was licensed on-premises. <br><br> Possible values for Windows Server operating system are: <br><br> Windows_Client <br><br> Windows_Server <br><br> Possible values for Linux Server operating system are: <br><br> RHEL_BYOS (for RHEL) <br><br> SLES_BYOS (for SUSE) <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/windows/hybrid-use-benefit-licensing) <br><br> [Azure Hybrid Use Benefit for Linux Server](https://docs.microsoft.com/azure/virtual-machines/linux/azure-hybrid-benefit-linux) <br><br> Minimum api-version: 2015-06-15
* **networkProfile**: [NetworkProfile](#networkprofile): Specifies the network interfaces or the networking configuration of the virtual machine.
* **osProfile**: [OSProfile](#osprofile): Specifies the operating system settings for the virtual machine. Some of the settings cannot be changed once VM is provisioned.
* **platformFaultDomain**: int: Specifies the scale set logical fault domain into which the Virtual Machine will be created. By default, the Virtual Machine will by automatically assigned to a fault domain that best maintains balance across available fault domains.<br><li>This is applicable only if the 'virtualMachineScaleSet' property of this Virtual Machine is set.<li>The Virtual Machine Scale Set that is referenced, must have 'platformFaultDomainCount' &gt; 1.<li>This property cannot be updated once the Virtual Machine is created.<li>Fault domain assignment can be viewed in the Virtual Machine Instance View.<br><br>Minimum api‐version: 2020‐12‐01
* **priority**: 'Low' | 'Regular' | 'Spot': Specifies the priority for a standalone virtual machine or the virtual machines in the scale set. <br><br> 'Low' enum will be deprecated in the future, please use 'Spot' as the enum to deploy Azure Spot VM/VMSS.
* **provisioningState**: string (ReadOnly): The provisioning state, which only appears in the response.
* **proximityPlacementGroup**: [SubResource](#subresource)
* **scheduledEventsProfile**: [ScheduledEventsProfile](#scheduledeventsprofile)
* **securityProfile**: [SecurityProfile](#securityprofile): Specifies the Security profile settings for the virtual machine or virtual machine scale set.
* **storageProfile**: [StorageProfile](#storageprofile): Specifies the storage settings for the virtual machine disks.
* **userData**: string: UserData for the VM, which must be base-64 encoded. Customer should not pass any secrets in here. <br><br>Minimum api-version: 2021-03-01
* **virtualMachineScaleSet**: [SubResource](#subresource)
* **vmId**: string (ReadOnly): Specifies the VM unique ID which is a 128-bits identifier that is encoded and stored in all Azure IaaS VMs SMBIOS and can be read using platform BIOS commands.

## AdditionalCapabilities
### Properties
* **hibernationEnabled**: bool: The flag that enables or disables hibernation capability on the VM.
* **ultraSSDEnabled**: bool: The flag that enables or disables a capability to have one or more managed data disks with UltraSSD_LRS storage account type on the VM or VMSS. Managed disks with storage account type UltraSSD_LRS can be added to a virtual machine or virtual machine scale set only if this property is enabled.

## ApplicationProfile
### Properties
* **galleryApplications**: [VMGalleryApplication](#vmgalleryapplication)[]: Specifies the gallery applications that should be made available to the VM/VMSS

## VMGalleryApplication
### Properties
* **configurationReference**: string: Optional, Specifies the uri to an azure blob that will replace the default configuration for the package if provided
* **order**: int: Optional, Specifies the order in which the packages have to be installed
* **packageReferenceId**: string (Required): Specifies the GalleryApplicationVersion resource id on the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{application}/versions/{version}
* **tags**: string: Optional, Specifies a passthrough value for more generic context.

## BillingProfile
### Properties
* **maxPrice**: int: Specifies the maximum price you are willing to pay for a Azure Spot VM/VMSS. This price is in US Dollars. <br><br> This price will be compared with the current Azure Spot price for the VM size. Also, the prices are compared at the time of create/update of Azure Spot VM/VMSS and the operation will only succeed if  the maxPrice is greater than the current Azure Spot price. <br><br> The maxPrice will also be used for evicting a Azure Spot VM/VMSS if the current Azure Spot price goes beyond the maxPrice after creation of VM/VMSS. <br><br> Possible values are: <br><br> - Any decimal value greater than zero. Example: 0.01538 <br><br> -1 – indicates default price to be up-to on-demand. <br><br> You can set the maxPrice to -1 to indicate that the Azure Spot VM/VMSS should not be evicted for price reasons. Also, the default max price is -1 if it is not provided by you. <br><br>Minimum api-version: 2019-03-01.

## CapacityReservationProfile
### Properties
* **capacityReservationGroup**: [SubResource](#subresource)

## VirtualMachineInstanceView
### Properties
* **assignedHost**: string (ReadOnly): Resource id of the dedicated host, on which the virtual machine is allocated through automatic placement, when the virtual machine is associated with a dedicated host group that has automatic placement enabled. <br><br>Minimum api-version: 2020-06-01.
* **bootDiagnostics**: [BootDiagnosticsInstanceView](#bootdiagnosticsinstanceview): The instance view of a virtual machine boot diagnostics.
* **computerName**: string: The computer name assigned to the virtual machine.
* **disks**: [DiskInstanceView](#diskinstanceview)[]: The virtual machine disk information.
* **extensions**: [VirtualMachineExtensionInstanceView](#virtualmachineextensioninstanceview)[]: The extensions information.
* **hyperVGeneration**: 'V1' | 'V2': Specifies the HyperVGeneration Type associated with a resource
* **maintenanceRedeployStatus**: [MaintenanceRedeployStatus](#maintenanceredeploystatus): Maintenance Operation Status.
* **osName**: string: The Operating System running on the virtual machine.
* **osVersion**: string: The version of Operating System running on the virtual machine.
* **patchStatus**: [VirtualMachinePatchStatus](#virtualmachinepatchstatus): The status of virtual machine patch operations.
* **platformFaultDomain**: int: Specifies the fault domain of the virtual machine.
* **platformUpdateDomain**: int: Specifies the update domain of the virtual machine.
* **rdpThumbPrint**: string: The Remote desktop certificate thumbprint.
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[]: The resource status information.
* **vmAgent**: [VirtualMachineAgentInstanceView](#virtualmachineagentinstanceview): The instance view of the VM Agent running on the virtual machine.
* **vmHealth**: [VirtualMachineHealthStatus](#virtualmachinehealthstatus) (ReadOnly): The health status of the VM.

## BootDiagnosticsInstanceView
### Properties
* **consoleScreenshotBlobUri**: string (ReadOnly): The console screenshot blob URI. <br><br>NOTE: This will **not** be set if boot diagnostics is currently enabled with managed storage.
* **serialConsoleLogBlobUri**: string (ReadOnly): The serial console log blob Uri. <br><br>NOTE: This will **not** be set if boot diagnostics is currently enabled with managed storage.
* **status**: [InstanceViewStatus](#instanceviewstatus) (ReadOnly): Instance view status.

## DiskInstanceView
### Properties
* **encryptionSettings**: [DiskEncryptionSettings](#diskencryptionsettings)[]: Specifies the encryption settings for the OS Disk. <br><br> Minimum api-version: 2015-06-15
* **name**: string: The disk name.
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[]: The resource status information.

## VirtualMachineExtensionInstanceView
### Properties
* **name**: string: The virtual machine extension name.
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[]: The resource status information.
* **substatuses**: [InstanceViewStatus](#instanceviewstatus)[]: The resource status information.
* **type**: string: Specifies the type of the extension; an example is "CustomScriptExtension".
* **typeHandlerVersion**: string: Specifies the version of the script handler.

## MaintenanceRedeployStatus
### Properties
* **isCustomerInitiatedMaintenanceAllowed**: bool: True, if customer is allowed to perform Maintenance.
* **lastOperationMessage**: string: Message returned for the last Maintenance Operation.
* **lastOperationResultCode**: 'MaintenanceAborted' | 'MaintenanceCompleted' | 'None' | 'RetryLater': The Last Maintenance Operation Result Code.
* **maintenanceWindowEndTime**: string: End Time for the Maintenance Window.
* **maintenanceWindowStartTime**: string: Start Time for the Maintenance Window.
* **preMaintenanceWindowEndTime**: string: End Time for the Pre Maintenance Window.
* **preMaintenanceWindowStartTime**: string: Start Time for the Pre Maintenance Window.

## VirtualMachinePatchStatus
### Properties
* **availablePatchSummary**: [AvailablePatchSummary](#availablepatchsummary): Describes the properties of an virtual machine instance view for available patch summary.
* **configurationStatuses**: [InstanceViewStatus](#instanceviewstatus)[] (ReadOnly): The enablement status of the specified patchMode
* **lastPatchInstallationSummary**: [LastPatchInstallationSummary](#lastpatchinstallationsummary): Describes the properties of the last installed patch summary.

## AvailablePatchSummary
### Properties
* **assessmentActivityId**: string (ReadOnly): The activity ID of the operation that produced this result. It is used to correlate across CRP and extension logs.
* **criticalAndSecurityPatchCount**: int (ReadOnly): The number of critical or security patches that have been detected as available and not yet installed.
* **error**: [ApiError](#apierror) (ReadOnly): Api error.
* **lastModifiedTime**: string (ReadOnly): The UTC timestamp when the operation began.
* **otherPatchCount**: int (ReadOnly): The number of all available patches excluding critical and security.
* **rebootPending**: bool (ReadOnly): The overall reboot status of the VM. It will be true when partially installed patches require a reboot to complete installation but the reboot has not yet occurred.
* **startTime**: string (ReadOnly): The UTC timestamp when the operation began.
* **status**: 'CompletedWithWarnings' | 'Failed' | 'InProgress' | 'Succeeded' | 'Unknown' (ReadOnly): The overall success or failure status of the operation. It remains "InProgress" until the operation completes. At that point it will become "Unknown", "Failed", "Succeeded", or "CompletedWithWarnings."

## ApiError
### Properties
* **code**: string: The error code.
* **details**: [ApiErrorBase](#apierrorbase)[]: The Api error details
* **innererror**: [InnerError](#innererror): Inner error details.
* **message**: string: The error message.
* **target**: string: The target of the particular error.

## ApiErrorBase
### Properties
* **code**: string: The error code.
* **message**: string: The error message.
* **target**: string: The target of the particular error.

## InnerError
### Properties
* **errordetail**: string: The internal error message or exception dump.
* **exceptiontype**: string: The exception type.

## LastPatchInstallationSummary
### Properties
* **error**: [ApiError](#apierror) (ReadOnly): Api error.
* **excludedPatchCount**: int (ReadOnly): The number of all available patches but excluded explicitly by a customer-specified exclusion list match.
* **failedPatchCount**: int (ReadOnly): The count of patches that failed installation.
* **installationActivityId**: string (ReadOnly): The activity ID of the operation that produced this result. It is used to correlate across CRP and extension logs.
* **installedPatchCount**: int (ReadOnly): The count of patches that successfully installed.
* **lastModifiedTime**: string (ReadOnly): The UTC timestamp when the operation began.
* **maintenanceWindowExceeded**: bool (ReadOnly): Describes whether the operation ran out of time before it completed all its intended actions
* **notSelectedPatchCount**: int (ReadOnly): The number of all available patches but not going to be installed because it didn't match a classification or inclusion list entry.
* **pendingPatchCount**: int (ReadOnly): The number of all available patches expected to be installed over the course of the patch installation operation.
* **startTime**: string (ReadOnly): The UTC timestamp when the operation began.
* **status**: 'CompletedWithWarnings' | 'Failed' | 'InProgress' | 'Succeeded' | 'Unknown' (ReadOnly): The overall success or failure status of the operation. It remains "InProgress" until the operation completes. At that point it will become "Unknown", "Failed", "Succeeded", or "CompletedWithWarnings."

## VirtualMachineAgentInstanceView
### Properties
* **extensionHandlers**: [VirtualMachineExtensionHandlerInstanceView](#virtualmachineextensionhandlerinstanceview)[]: The virtual machine extension handler instance view.
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[]: The resource status information.
* **vmAgentVersion**: string: The VM Agent full version.

## VirtualMachineExtensionHandlerInstanceView
### Properties
* **status**: [InstanceViewStatus](#instanceviewstatus): Instance view status.
* **type**: string: Specifies the type of the extension; an example is "CustomScriptExtension".
* **typeHandlerVersion**: string: Specifies the version of the script handler.

## VirtualMachineHealthStatus
### Properties
* **status**: [InstanceViewStatus](#instanceviewstatus) (ReadOnly): Instance view status.

## NetworkProfile
### Properties
* **networkApiVersion**: '2020-11-01': specifies the Microsoft.Network API version used when creating networking resources in the Network Interface Configurations
* **networkInterfaceConfigurations**: [VirtualMachineNetworkInterfaceConfiguration](#virtualmachinenetworkinterfaceconfiguration)[]: Specifies the networking configurations that will be used to create the virtual machine networking resources.
* **networkInterfaces**: [NetworkInterfaceReference](#networkinterfacereference)[]: Specifies the list of resource Ids for the network interfaces associated with the virtual machine.

## VirtualMachineNetworkInterfaceConfiguration
### Properties
* **name**: string (Required): The network interface configuration name.
* **properties**: [VirtualMachineNetworkInterfaceConfigurationProperties](#virtualmachinenetworkinterfaceconfigurationproperties): Describes a virtual machine network profile's IP configuration.

## VirtualMachineNetworkInterfaceConfigurationProperties
### Properties
* **deleteOption**: 'Delete' | 'Detach': Specify what happens to the network interface when the VM is deleted
* **dnsSettings**: [VirtualMachineNetworkInterfaceDnsSettingsConfiguration](#virtualmachinenetworkinterfacednssettingsconfiguration): Describes a virtual machines network configuration's DNS settings.
* **dscpConfiguration**: [SubResource](#subresource)
* **enableAcceleratedNetworking**: bool: Specifies whether the network interface is accelerated networking-enabled.
* **enableFpga**: bool: Specifies whether the network interface is FPGA networking-enabled.
* **enableIPForwarding**: bool: Whether IP forwarding enabled on this NIC.
* **ipConfigurations**: [VirtualMachineNetworkInterfaceIPConfiguration](#virtualmachinenetworkinterfaceipconfiguration)[] (Required): Specifies the IP configurations of the network interface.
* **networkSecurityGroup**: [SubResource](#subresource)
* **primary**: bool: Specifies the primary network interface in case the virtual machine has more than 1 network interface.

## VirtualMachineNetworkInterfaceDnsSettingsConfiguration
### Properties
* **dnsServers**: string[]: List of DNS servers IP addresses

## VirtualMachineNetworkInterfaceIPConfiguration
### Properties
* **name**: string (Required): The IP configuration name.
* **properties**: [VirtualMachineNetworkInterfaceIPConfigurationProperties](#virtualmachinenetworkinterfaceipconfigurationproperties): Describes a virtual machine network interface IP configuration properties.

## VirtualMachineNetworkInterfaceIPConfigurationProperties
### Properties
* **applicationGatewayBackendAddressPools**: [SubResource](#subresource)[]: Specifies an array of references to backend address pools of application gateways. A virtual machine can reference backend address pools of multiple application gateways. Multiple virtual machines cannot use the same application gateway.
* **applicationSecurityGroups**: [SubResource](#subresource)[]: Specifies an array of references to application security group.
* **loadBalancerBackendAddressPools**: [SubResource](#subresource)[]: Specifies an array of references to backend address pools of load balancers. A virtual machine can reference backend address pools of one public and one internal load balancer. [Multiple virtual machines cannot use the same basic sku load balancer].
* **primary**: bool: Specifies the primary network interface in case the virtual machine has more than 1 network interface.
* **privateIPAddressVersion**: 'IPv4' | 'IPv6': Available from Api-Version 2019-07-01 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4. Possible values are: 'IPv4' and 'IPv6'.
* **publicIPAddressConfiguration**: [VirtualMachinePublicIPAddressConfiguration](#virtualmachinepublicipaddressconfiguration): Describes a virtual machines IP Configuration's PublicIPAddress configuration
* **subnet**: [SubResource](#subresource)

## VirtualMachinePublicIPAddressConfiguration
### Properties
* **name**: string (Required): The publicIP address configuration name.
* **properties**: [VirtualMachinePublicIPAddressConfigurationProperties](#virtualmachinepublicipaddressconfigurationproperties): Describes a virtual machines IP Configuration's PublicIPAddress configuration
* **sku**: [PublicIPAddressSku](#publicipaddresssku): Describes the public IP Sku

## VirtualMachinePublicIPAddressConfigurationProperties
### Properties
* **deleteOption**: 'Delete' | 'Detach': Specify what happens to the network interface when the VM is deleted
* **dnsSettings**: [VirtualMachinePublicIPAddressDnsSettingsConfiguration](#virtualmachinepublicipaddressdnssettingsconfiguration): Describes a virtual machines network configuration's DNS settings.
* **idleTimeoutInMinutes**: int: The idle timeout of the public IP address.
* **ipTags**: [VirtualMachineIpTag](#virtualmachineiptag)[]: The list of IP tags associated with the public IP address.
* **publicIPAddressVersion**: 'IPv4' | 'IPv6': Available from Api-Version 2019-07-01 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4. Possible values are: 'IPv4' and 'IPv6'.
* **publicIPAllocationMethod**: 'Dynamic' | 'Static': Specify the public IP allocation type
* **publicIPPrefix**: [SubResource](#subresource)

## VirtualMachinePublicIPAddressDnsSettingsConfiguration
### Properties
* **domainNameLabel**: string (Required): The Domain name label prefix of the PublicIPAddress resources that will be created. The generated name label is the concatenation of the domain name label and vm network profile unique ID.

## VirtualMachineIpTag
### Properties
* **ipTagType**: string: IP tag type. Example: FirstPartyUsage.
* **tag**: string: IP tag associated with the public IP. Example: SQL, Storage etc.

## PublicIPAddressSku
### Properties
* **name**: 'Basic' | 'Standard': Specify public IP sku name
* **tier**: 'Global' | 'Regional': Specify public IP sku tier

## NetworkInterfaceReference
### Properties
* **id**: string: Resource Id
* **properties**: [NetworkInterfaceReferenceProperties](#networkinterfacereferenceproperties): Describes a network interface reference properties.

## NetworkInterfaceReferenceProperties
### Properties
* **deleteOption**: 'Delete' | 'Detach': Specify what happens to the network interface when the VM is deleted
* **primary**: bool: Specifies the primary network interface in case the virtual machine has more than 1 network interface.

## ScheduledEventsProfile
### Properties
* **terminateNotificationProfile**: [TerminateNotificationProfile](#terminatenotificationprofile)

## TerminateNotificationProfile
### Properties
* **enable**: bool: Specifies whether the Terminate Scheduled event is enabled or disabled.
* **notBeforeTimeout**: string: Configurable length of time a Virtual Machine being deleted will have to potentially approve the Terminate Scheduled Event before the event is auto approved (timed out). The configuration must be specified in ISO 8601 format, the default value is 5 minutes (PT5M)

## StorageProfile
### Properties
* **dataDisks**: [DataDisk](#datadisk)[]: Specifies the parameters that are used to add a data disk to a virtual machine. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/managed-disks-overview).
* **imageReference**: [ImageReference](#imagereference): Specifies information about the image to use. You can specify information about platform images, marketplace images, or virtual machine images. This element is required when you want to use a platform image, marketplace image, or virtual machine image, but is not used in other creation operations. NOTE: Image reference publisher and offer can only be set when you create the scale set.
* **osDisk**: [OSDisk](#osdisk): Specifies information about the operating system disk used by the virtual machine. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/managed-disks-overview).

## DataDisk
### Properties
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite': Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage**
* **createOption**: 'Attach' | 'Empty' | 'FromImage' (Required): Specifies how the virtual machine should be created.<br><br> Possible values are:<br><br> **Attach** \u2013 This value is used when you are using a specialized disk to create the virtual machine.<br><br> **FromImage** \u2013 This value is used when you are using an image to create the virtual machine. If you are using a platform image, you also use the imageReference element described above. If you are using a marketplace image, you  also use the plan element previously described.
* **deleteOption**: 'Delete' | 'Detach': Specifies the behavior of the managed disk when the VM gets deleted i.e whether the managed disk is deleted or detached. Supported values:<br><br> **Delete** If this value is used, the managed disk is deleted when VM gets deleted.<br><br> **Detach** If this value is used, the managed disk is retained after VM gets deleted.<br><br> Minimum api-version: 2021-03-01
* **detachOption**: 'ForceDetach': Specifies the detach behavior to be used while detaching a disk or which is already in the process of detachment from the virtual machine. Supported values: **ForceDetach**. <br><br> detachOption: **ForceDetach** is applicable only for managed data disks. If a previous detachment attempt of the data disk did not complete due to an unexpected failure from the virtual machine and the disk is still not released then use force-detach as a last resort option to detach the disk forcibly from the VM. All writes might not have been flushed when using this detach behavior. <br><br> This feature is still in preview mode and is not supported for VirtualMachineScaleSet. To force-detach a data disk update toBeDetached to 'true' along with setting detachOption: 'ForceDetach'.
* **diskIOPSReadWrite**: int (ReadOnly): Specifies the Read-Write IOPS for the managed disk when StorageAccountType is UltraSSD_LRS. Returned only for VirtualMachine ScaleSet VM disks. Can be updated only via updates to the VirtualMachine Scale Set.
* **diskMBpsReadWrite**: int (ReadOnly): Specifies the bandwidth in MB per second for the managed disk when StorageAccountType is UltraSSD_LRS. Returned only for VirtualMachine ScaleSet VM disks. Can be updated only via updates to the VirtualMachine Scale Set.
* **diskSizeGB**: int: Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. <br><br> This value cannot be larger than 1023 GB
* **image**: [VirtualHardDisk](#virtualharddisk): Describes the uri of a disk.
* **lun**: int (Required): Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
* **managedDisk**: [ManagedDiskParameters](#manageddiskparameters): The parameters of a managed disk.
* **name**: string: The disk name.
* **toBeDetached**: bool: Specifies whether the data disk is in process of detachment from the VirtualMachine/VirtualMachineScaleset
* **vhd**: [VirtualHardDisk](#virtualharddisk): Describes the uri of a disk.
* **writeAcceleratorEnabled**: bool: Specifies whether writeAccelerator should be enabled or disabled on the disk.

## VirtualHardDisk
### Properties
* **uri**: string: Specifies the virtual hard disk's uri.

## ImageReference
### Properties
* **exactVersion**: string (ReadOnly): Specifies in decimal numbers, the version of platform image or marketplace image used to create the virtual machine. This readonly field differs from 'version', only if the value specified in 'version' field is 'latest'.
* **id**: string: Resource Id
* **offer**: string: Specifies the offer of the platform image or marketplace image used to create the virtual machine.
* **publisher**: string: The image publisher.
* **sharedGalleryImageId**: string: Specified the shared gallery image unique id for vm deployment. This can be fetched from shared gallery image GET call.
* **sku**: string: The image SKU.
* **version**: string: Specifies the version of the platform image or marketplace image used to create the virtual machine. The allowed formats are Major.Minor.Build or 'latest'. Major, Minor, and Build are decimal numbers. Specify 'latest' to use the latest version of an image available at deploy time. Even if you use 'latest', the VM image will not automatically update after deploy time even if a new version becomes available.

## OSDisk
### Properties
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite': Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage**
* **createOption**: 'Attach' | 'Empty' | 'FromImage' (Required): Specifies how the virtual machine should be created.<br><br> Possible values are:<br><br> **Attach** \u2013 This value is used when you are using a specialized disk to create the virtual machine.<br><br> **FromImage** \u2013 This value is used when you are using an image to create the virtual machine. If you are using a platform image, you also use the imageReference element described above. If you are using a marketplace image, you  also use the plan element previously described.
* **deleteOption**: 'Delete' | 'Detach': Specifies the behavior of the managed disk when the VM gets deleted i.e whether the managed disk is deleted or detached. Supported values:<br><br> **Delete** If this value is used, the managed disk is deleted when VM gets deleted.<br><br> **Detach** If this value is used, the managed disk is retained after VM gets deleted.<br><br> Minimum api-version: 2021-03-01
* **diffDiskSettings**: [DiffDiskSettings](#diffdisksettings): Describes the parameters of ephemeral disk settings that can be specified for operating system disk. <br><br> NOTE: The ephemeral disk settings can only be specified for managed disk.
* **diskSizeGB**: int: Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. <br><br> This value cannot be larger than 1023 GB
* **encryptionSettings**: [DiskEncryptionSettings](#diskencryptionsettings): Describes a Encryption Settings for a Disk
* **image**: [VirtualHardDisk](#virtualharddisk): Describes the uri of a disk.
* **managedDisk**: [ManagedDiskParameters](#manageddiskparameters): The parameters of a managed disk.
* **name**: string: The disk name.
* **osType**: 'Linux' | 'Windows': The operating system of the osDiskImage.
* **vhd**: [VirtualHardDisk](#virtualharddisk): Describes the uri of a disk.
* **writeAcceleratorEnabled**: bool: Specifies whether writeAccelerator should be enabled or disabled on the disk.

## DiffDiskSettings
### Properties
* **option**: 'Local': Specifies the ephemeral disk option for operating system disk.
* **placement**: 'CacheDisk' | 'ResourceDisk': Specifies the ephemeral disk placement for operating system disk. This property can be used by user in the request to choose the location i.e, cache disk or resource disk space for Ephemeral OS disk provisioning. For more information on Ephemeral OS disk size requirements, please refer Ephemeral OS disk size requirements for Windows VM at https://docs.microsoft.com/azure/virtual-machines/windows/ephemeral-os-disks#size-requirements and Linux VM at https://docs.microsoft.com/azure/virtual-machines/linux/ephemeral-os-disks#size-requirements

## VirtualMachineExtension
### Properties
* **id**: string (ReadOnly): Resource Id
* **location**: string (Required): Resource location
* **name**: string (ReadOnly): Resource name
* **properties**: [VirtualMachineExtensionProperties](#virtualmachineextensionproperties): Describes the properties of a Virtual Machine Extension.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: string (ReadOnly): Resource type

## VirtualMachineExtensionProperties
### Properties
* **autoUpgradeMinorVersion**: bool: Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
* **enableAutomaticUpgrade**: bool: Indicates whether the extension should be automatically upgraded by the platform if there is a newer version of the extension available.
* **forceUpdateTag**: string: How the extension handler should be forced to update even if the extension configuration has not changed.
* **instanceView**: [VirtualMachineExtensionInstanceView](#virtualmachineextensioninstanceview): The instance view of a virtual machine extension.
* **protectedSettings**: any: Any object
* **provisioningState**: string (ReadOnly): The provisioning state, which only appears in the response.
* **publisher**: string: The name of the extension handler publisher.
* **settings**: any: Any object
* **suppressFailures**: bool: Indicates whether failures stemming from the extension will be suppressed (Operational failures such as not connecting to the VM will not be suppressed regardless of this value). The default is false.
* **type**: string: Specifies the type of the extension; an example is "CustomScriptExtension".
* **typeHandlerVersion**: string: Specifies the version of the script handler.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VirtualMachineRunCommandProperties
### Properties
* **asyncExecution**: bool: Optional. If set to true, provisioning will complete as soon as the script starts and will not wait for script to complete.
* **errorBlobUri**: string: Specifies the Azure storage blob where script error stream will be uploaded.
* **instanceView**: [VirtualMachineRunCommandInstanceView](#virtualmachineruncommandinstanceview) (ReadOnly): The instance view of a virtual machine run command.
* **outputBlobUri**: string: Specifies the Azure storage blob where script output stream will be uploaded.
* **parameters**: [RunCommandInputParameter](#runcommandinputparameter)[]: The parameters used by the script.
* **protectedParameters**: [RunCommandInputParameter](#runcommandinputparameter)[]: The parameters used by the script.
* **provisioningState**: string (ReadOnly): The provisioning state, which only appears in the response.
* **runAsPassword**: string: Specifies the user account password on the VM when executing the run command.
* **runAsUser**: string: Specifies the user account on the VM when executing the run command.
* **source**: [VirtualMachineRunCommandScriptSource](#virtualmachineruncommandscriptsource): Describes the script sources for run command.
* **timeoutInSeconds**: int: The timeout in seconds to execute the run command.

## VirtualMachineRunCommandInstanceView
### Properties
* **endTime**: string: Script end time.
* **error**: string: Script error stream.
* **executionMessage**: string: Communicate script configuration errors or execution messages.
* **executionState**: 'Canceled' | 'Failed' | 'Pending' | 'Running' | 'Succeeded' | 'TimedOut' | 'Unknown': Script execution status.
* **exitCode**: int: Exit code returned from script execution.
* **output**: string: Script output stream.
* **startTime**: string: Script start time.
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[]: The resource status information.

## RunCommandInputParameter
### Properties
* **name**: string (Required): The run command parameter name.
* **value**: string (Required): The run command parameter value.

## VirtualMachineRunCommandScriptSource
### Properties
* **commandId**: string: Specifies a commandId of predefined built-in script.
* **script**: string: Specifies the script content to be executed on the VM.
* **scriptUri**: string: Specifies the script download location.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VirtualMachineScaleSetIdentity
### Properties
* **principalId**: string (ReadOnly): The principal id of virtual machine scale set identity. This property will only be provided for a system assigned identity.
* **tenantId**: string (ReadOnly): The tenant id associated with the virtual machine scale set. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned': The type of identity used for the virtual machine. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine.
* **userAssignedIdentities**: [VirtualMachineScaleSetIdentityUserAssignedIdentities](#virtualmachinescalesetidentityuserassignedidentities): The list of user identities associated with the virtual machine scale set. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## VirtualMachineScaleSetIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [VirtualMachineScaleSetIdentityUserAssignedIdentitiesValue](#virtualmachinescalesetidentityuserassignedidentitiesvalue)

## VirtualMachineScaleSetIdentityUserAssignedIdentitiesValue
### Properties
* **clientId**: string (ReadOnly): The client id of user assigned identity.
* **principalId**: string (ReadOnly): The principal id of user assigned identity.

## VirtualMachineScaleSetProperties
### Properties
* **additionalCapabilities**: [AdditionalCapabilities](#additionalcapabilities): Enables or disables a capability on the virtual machine or virtual machine scale set.
* **automaticRepairsPolicy**: [AutomaticRepairsPolicy](#automaticrepairspolicy): Specifies the configuration parameters for automatic repairs on the virtual machine scale set.
* **doNotRunExtensionsOnOverprovisionedVMs**: bool: When Overprovision is enabled, extensions are launched only on the requested number of VMs which are finally kept. This property will hence ensure that the extensions do not run on the extra overprovisioned VMs.
* **hostGroup**: [SubResource](#subresource)
* **orchestrationMode**: 'Flexible' | 'Uniform': Specifies the orchestration mode for the virtual machine scale set.
* **overprovision**: bool: Specifies whether the Virtual Machine Scale Set should be overprovisioned.
* **platformFaultDomainCount**: int: Fault Domain count for each placement group.
* **provisioningState**: string (ReadOnly): The provisioning state, which only appears in the response.
* **proximityPlacementGroup**: [SubResource](#subresource)
* **scaleInPolicy**: [ScaleInPolicy](#scaleinpolicy): Describes a scale-in policy for a virtual machine scale set.
* **singlePlacementGroup**: bool: When true this limits the scale set to a single placement group, of max size 100 virtual machines. NOTE: If singlePlacementGroup is true, it may be modified to false. However, if singlePlacementGroup is false, it may not be modified to true.
* **spotRestorePolicy**: [SpotRestorePolicy](#spotrestorepolicy): Specifies the Spot-Try-Restore properties for the virtual machine scale set. <br><br> With this property customer can enable or disable automatic restore of the evicted Spot VMSS VM instances opportunistically based on capacity availability and pricing constraint.
* **uniqueId**: string (ReadOnly): Specifies the ID which uniquely identifies a Virtual Machine Scale Set.
* **upgradePolicy**: [UpgradePolicy](#upgradepolicy): Describes an upgrade policy - automatic, manual, or rolling.
* **virtualMachineProfile**: [VirtualMachineScaleSetVMProfile](#virtualmachinescalesetvmprofile): Describes a virtual machine scale set virtual machine profile.
* **zoneBalance**: bool: Whether to force strictly even Virtual Machine distribution cross x-zones in case there is zone outage. zoneBalance property can only be set if the zones property of the scale set contains more than one zone. If there are no zones or only one zone specified, then zoneBalance property should not be set.

## AutomaticRepairsPolicy
### Properties
* **enabled**: bool: Specifies whether automatic repairs should be enabled on the virtual machine scale set. The default value is false.
* **gracePeriod**: string: The amount of time for which automatic repairs are suspended due to a state change on VM. The grace time starts after the state change has completed. This helps avoid premature or accidental repairs. The time duration should be specified in ISO 8601 format. The minimum allowed grace period is 30 minutes (PT30M), which is also the default value. The maximum allowed grace period is 90 minutes (PT90M).

## ScaleInPolicy
### Properties
* **forceDeletion**: bool: This property allows you to specify if virtual machines chosen for removal have to be force deleted when a virtual machine scale set is being scaled-in.(Feature in Preview)
* **rules**: 'Default' | 'NewestVM' | 'OldestVM'[]: The rules to be followed when scaling-in a virtual machine scale set. <br><br> Possible values are: <br><br> **Default** When a virtual machine scale set is scaled in, the scale set will first be balanced across zones if it is a zonal scale set. Then, it will be balanced across Fault Domains as far as possible. Within each Fault Domain, the virtual machines chosen for removal will be the newest ones that are not protected from scale-in. <br><br> **OldestVM** When a virtual machine scale set is being scaled-in, the oldest virtual machines that are not protected from scale-in will be chosen for removal. For zonal virtual machine scale sets, the scale set will first be balanced across zones. Within each zone, the oldest virtual machines that are not protected will be chosen for removal. <br><br> **NewestVM** When a virtual machine scale set is being scaled-in, the newest virtual machines that are not protected from scale-in will be chosen for removal. For zonal virtual machine scale sets, the scale set will first be balanced across zones. Within each zone, the newest virtual machines that are not protected will be chosen for removal. <br><br>

## SpotRestorePolicy
### Properties
* **enabled**: bool: Enables the Spot-Try-Restore feature where evicted VMSS SPOT instances will be tried to be restored opportunistically based on capacity availability and pricing constraints
* **restoreTimeout**: string: Timeout value expressed as an ISO 8601 time duration after which the platform will not try to restore the VMSS SPOT instances

## UpgradePolicy
### Properties
* **automaticOSUpgradePolicy**: [AutomaticOSUpgradePolicy](#automaticosupgradepolicy): The configuration parameters used for performing automatic OS upgrade.
* **mode**: 'Automatic' | 'Manual' | 'Rolling': Specifies the mode of an upgrade to virtual machines in the scale set.<br /><br /> Possible values are:<br /><br /> **Manual** - You  control the application of updates to virtual machines in the scale set. You do this by using the manualUpgrade action.<br /><br /> **Automatic** - All virtual machines in the scale set are  automatically updated at the same time.
* **rollingUpgradePolicy**: [RollingUpgradePolicy](#rollingupgradepolicy): The configuration parameters used while performing a rolling upgrade.

## AutomaticOSUpgradePolicy
### Properties
* **disableAutomaticRollback**: bool: Whether OS image rollback feature should be disabled. Default value is false.
* **enableAutomaticOSUpgrade**: bool: Indicates whether OS upgrades should automatically be applied to scale set instances in a rolling fashion when a newer version of the OS image becomes available. Default value is false. <br><br> If this is set to true for Windows based scale sets, [enableAutomaticUpdates](https://docs.microsoft.com/dotnet/api/microsoft.azure.management.compute.models.windowsconfiguration.enableautomaticupdates?view=azure-dotnet) is automatically set to false and cannot be set to true.

## RollingUpgradePolicy
### Properties
* **enableCrossZoneUpgrade**: bool: Allow VMSS to ignore AZ boundaries when constructing upgrade batches. Take into consideration the Update Domain and maxBatchInstancePercent to determine the batch size.
* **maxBatchInstancePercent**: int: The maximum percent of total virtual machine instances that will be upgraded simultaneously by the rolling upgrade in one batch. As this is a maximum, unhealthy instances in previous or future batches can cause the percentage of instances in a batch to decrease to ensure higher reliability. The default value for this parameter is 20%.
* **maxUnhealthyInstancePercent**: int: The maximum percentage of the total virtual machine instances in the scale set that can be simultaneously unhealthy, either as a result of being upgraded, or by being found in an unhealthy state by the virtual machine health checks before the rolling upgrade aborts. This constraint will be checked prior to starting any batch. The default value for this parameter is 20%.
* **maxUnhealthyUpgradedInstancePercent**: int: The maximum percentage of upgraded virtual machine instances that can be found to be in an unhealthy state. This check will happen after each batch is upgraded. If this percentage is ever exceeded, the rolling update aborts. The default value for this parameter is 20%.
* **pauseTimeBetweenBatches**: string: The wait time between completing the update for all virtual machines in one batch and starting the next batch. The time duration should be specified in ISO 8601 format. The default value is 0 seconds (PT0S).
* **prioritizeUnhealthyInstances**: bool: Upgrade all unhealthy instances in a scale set before any healthy instances.

## VirtualMachineScaleSetVMProfile
### Properties
* **applicationProfile**: [ApplicationProfile](#applicationprofile): Contains the list of gallery applications that should be made available to the VM/VMSS
* **billingProfile**: [BillingProfile](#billingprofile): Specifies the billing related details of a Azure Spot VM or VMSS. <br><br>Minimum api-version: 2019-03-01.
* **capacityReservation**: [CapacityReservationProfile](#capacityreservationprofile): The parameters of a capacity reservation Profile.
* **diagnosticsProfile**: [DiagnosticsProfile](#diagnosticsprofile): Specifies the boot diagnostic settings state. <br><br>Minimum api-version: 2015-06-15.
* **evictionPolicy**: 'Deallocate' | 'Delete': Specifies the eviction policy for the Azure Spot VM/VMSS
* **extensionProfile**: [VirtualMachineScaleSetExtensionProfile](#virtualmachinescalesetextensionprofile): Describes a virtual machine scale set extension profile.
* **licenseType**: string: Specifies that the image or disk that is being used was licensed on-premises. <br><br> Possible values for Windows Server operating system are: <br><br> Windows_Client <br><br> Windows_Server <br><br> Possible values for Linux Server operating system are: <br><br> RHEL_BYOS (for RHEL) <br><br> SLES_BYOS (for SUSE) <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/windows/hybrid-use-benefit-licensing) <br><br> [Azure Hybrid Use Benefit for Linux Server](https://docs.microsoft.com/azure/virtual-machines/linux/azure-hybrid-benefit-linux) <br><br> Minimum api-version: 2015-06-15
* **networkProfile**: [VirtualMachineScaleSetNetworkProfile](#virtualmachinescalesetnetworkprofile): Describes a virtual machine scale set network profile.
* **osProfile**: [VirtualMachineScaleSetOSProfile](#virtualmachinescalesetosprofile): Describes a virtual machine scale set OS profile.
* **priority**: 'Low' | 'Regular' | 'Spot': Specifies the priority for a standalone virtual machine or the virtual machines in the scale set. <br><br> 'Low' enum will be deprecated in the future, please use 'Spot' as the enum to deploy Azure Spot VM/VMSS.
* **scheduledEventsProfile**: [ScheduledEventsProfile](#scheduledeventsprofile)
* **securityProfile**: [SecurityProfile](#securityprofile): Specifies the Security profile settings for the virtual machine or virtual machine scale set.
* **storageProfile**: [VirtualMachineScaleSetStorageProfile](#virtualmachinescalesetstorageprofile): Describes a virtual machine scale set storage profile.
* **userData**: string: UserData for the virtual machines in the scale set, which must be base-64 encoded. Customer should not pass any secrets in here. <br><br>Minimum api-version: 2021-03-01

## VirtualMachineScaleSetExtensionProfile
### Properties
* **extensions**: [VirtualMachineScaleSetExtension](#virtualmachinescalesetextension)[]: The virtual machine scale set child extension resources.
* **extensionsTimeBudget**: string: Specifies the time alloted for all extensions to start. The time duration should be between 15 minutes and 120 minutes (inclusive) and should be specified in ISO 8601 format. The default value is 90 minutes (PT1H30M). <br><br> Minimum api-version: 2020-06-01

## VirtualMachineScaleSetExtension
### Properties
* **id**: string (ReadOnly): Resource Id
* **name**: string: The name of the extension.
* **properties**: [VirtualMachineScaleSetExtensionProperties](#virtualmachinescalesetextensionproperties): Describes the properties of a Virtual Machine Scale Set Extension.
* **type**: string (ReadOnly): Resource type

## VirtualMachineScaleSetExtensionProperties
### Properties
* **autoUpgradeMinorVersion**: bool: Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
* **enableAutomaticUpgrade**: bool: Indicates whether the extension should be automatically upgraded by the platform if there is a newer version of the extension available.
* **forceUpdateTag**: string: If a value is provided and is different from the previous value, the extension handler will be forced to update even if the extension configuration has not changed.
* **protectedSettings**: any: Any object
* **provisionAfterExtensions**: string[]: Collection of extension names after which this extension needs to be provisioned.
* **provisioningState**: string (ReadOnly): The provisioning state, which only appears in the response.
* **publisher**: string: The name of the extension handler publisher.
* **settings**: any: Any object
* **suppressFailures**: bool: Indicates whether failures stemming from the extension will be suppressed (Operational failures such as not connecting to the VM will not be suppressed regardless of this value). The default is false.
* **type**: string: Specifies the type of the extension; an example is "CustomScriptExtension".
* **typeHandlerVersion**: string: Specifies the version of the script handler.

## VirtualMachineScaleSetNetworkProfile
### Properties
* **healthProbe**: [ApiEntityReference](#apientityreference): The API entity reference.
* **networkApiVersion**: '2020-11-01': specifies the Microsoft.Network API version used when creating networking resources in the Network Interface Configurations
* **networkInterfaceConfigurations**: [VirtualMachineScaleSetNetworkConfiguration](#virtualmachinescalesetnetworkconfiguration)[]: The list of network configurations.

## VirtualMachineScaleSetNetworkConfiguration
### Properties
* **id**: string: Resource Id
* **name**: string (Required): The network configuration name.
* **properties**: [VirtualMachineScaleSetNetworkConfigurationProperties](#virtualmachinescalesetnetworkconfigurationproperties): Describes a virtual machine scale set network profile's IP configuration.

## VirtualMachineScaleSetNetworkConfigurationProperties
### Properties
* **deleteOption**: 'Delete' | 'Detach': Specify what happens to the network interface when the VM is deleted
* **dnsSettings**: [VirtualMachineScaleSetNetworkConfigurationDnsSettings](#virtualmachinescalesetnetworkconfigurationdnssettings): Describes a virtual machines scale sets network configuration's DNS settings.
* **enableAcceleratedNetworking**: bool: Specifies whether the network interface is accelerated networking-enabled.
* **enableFpga**: bool: Specifies whether the network interface is FPGA networking-enabled.
* **enableIPForwarding**: bool: Whether IP forwarding enabled on this NIC.
* **ipConfigurations**: [VirtualMachineScaleSetIPConfiguration](#virtualmachinescalesetipconfiguration)[] (Required): Specifies the IP configurations of the network interface.
* **networkSecurityGroup**: [SubResource](#subresource)
* **primary**: bool: Specifies the primary network interface in case the virtual machine has more than 1 network interface.

## VirtualMachineScaleSetNetworkConfigurationDnsSettings
### Properties
* **dnsServers**: string[]: List of DNS servers IP addresses

## VirtualMachineScaleSetIPConfiguration
### Properties
* **id**: string: Resource Id
* **name**: string (Required): The IP configuration name.
* **properties**: [VirtualMachineScaleSetIPConfigurationProperties](#virtualmachinescalesetipconfigurationproperties): Describes a virtual machine scale set network profile's IP configuration properties.

## VirtualMachineScaleSetIPConfigurationProperties
### Properties
* **applicationGatewayBackendAddressPools**: [SubResource](#subresource)[]: Specifies an array of references to backend address pools of application gateways. A scale set can reference backend address pools of multiple application gateways. Multiple scale sets cannot use the same application gateway.
* **applicationSecurityGroups**: [SubResource](#subresource)[]: Specifies an array of references to application security group.
* **loadBalancerBackendAddressPools**: [SubResource](#subresource)[]: Specifies an array of references to backend address pools of load balancers. A scale set can reference backend address pools of one public and one internal load balancer. Multiple scale sets cannot use the same basic sku load balancer.
* **loadBalancerInboundNatPools**: [SubResource](#subresource)[]: Specifies an array of references to inbound Nat pools of the load balancers. A scale set can reference inbound nat pools of one public and one internal load balancer. Multiple scale sets cannot use the same basic sku load balancer.
* **primary**: bool: Specifies the primary network interface in case the virtual machine has more than 1 network interface.
* **privateIPAddressVersion**: 'IPv4' | 'IPv6': Available from Api-Version 2017-03-30 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.  Possible values are: 'IPv4' and 'IPv6'.
* **publicIPAddressConfiguration**: [VirtualMachineScaleSetPublicIPAddressConfiguration](#virtualmachinescalesetpublicipaddressconfiguration): Describes a virtual machines scale set IP Configuration's PublicIPAddress configuration
* **subnet**: [ApiEntityReference](#apientityreference): The API entity reference.

## VirtualMachineScaleSetPublicIPAddressConfiguration
### Properties
* **name**: string (Required): The publicIP address configuration name.
* **properties**: [VirtualMachineScaleSetPublicIPAddressConfigurationProperties](#virtualmachinescalesetpublicipaddressconfigurationproperties): Describes a virtual machines scale set IP Configuration's PublicIPAddress configuration
* **sku**: [PublicIPAddressSku](#publicipaddresssku): Describes the public IP Sku

## VirtualMachineScaleSetPublicIPAddressConfigurationProperties
### Properties
* **deleteOption**: 'Delete' | 'Detach': Specify what happens to the network interface when the VM is deleted
* **dnsSettings**: [VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings](#virtualmachinescalesetpublicipaddressconfigurationdnssettings): Describes a virtual machines scale sets network configuration's DNS settings.
* **idleTimeoutInMinutes**: int: The idle timeout of the public IP address.
* **ipTags**: [VirtualMachineScaleSetIpTag](#virtualmachinescalesetiptag)[]: The list of IP tags associated with the public IP address.
* **publicIPAddressVersion**: 'IPv4' | 'IPv6': Available from Api-Version 2017-03-30 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.  Possible values are: 'IPv4' and 'IPv6'.
* **publicIPPrefix**: [SubResource](#subresource)

## VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings
### Properties
* **domainNameLabel**: string (Required): The Domain name label.The concatenation of the domain name label and vm index will be the domain name labels of the PublicIPAddress resources that will be created

## VirtualMachineScaleSetIpTag
### Properties
* **ipTagType**: string: IP tag type. Example: FirstPartyUsage.
* **tag**: string: IP tag associated with the public IP. Example: SQL, Storage etc.

## VirtualMachineScaleSetOSProfile
### Properties
* **adminPassword**: string: Specifies the password of the administrator account. <br><br> **Minimum-length (Windows):** 8 characters <br><br> **Minimum-length (Linux):** 6 characters <br><br> **Max-length (Windows):** 123 characters <br><br> **Max-length (Linux):** 72 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!" <br><br> For resetting the password, see [How to reset the Remote Desktop service or its login password in a Windows VM](https://docs.microsoft.com/troubleshoot/azure/virtual-machines/reset-rdp) <br><br> For resetting root password, see [Manage users, SSH, and check or repair disks on Azure Linux VMs using the VMAccess Extension](https://docs.microsoft.com/troubleshoot/azure/virtual-machines/troubleshoot-ssh-connection)
* **adminUsername**: string: Specifies the name of the administrator account. <br><br> **Windows-only restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length (Linux):** 1  character <br><br> **Max-length (Linux):** 64 characters <br><br> **Max-length (Windows):** 20 characters
* **computerNamePrefix**: string: Specifies the computer name prefix for all of the virtual machines in the scale set. Computer name prefixes must be 1 to 15 characters long.
* **customData**: string: Specifies a base-64 encoded string of custom data. The base-64 encoded string is decoded to a binary array that is saved as a file on the Virtual Machine. The maximum length of the binary array is 65535 bytes. <br><br> For using cloud-init for your VM, see [Using cloud-init to customize a Linux VM during creation](https://docs.microsoft.com/azure/virtual-machines/linux/using-cloud-init)
* **linuxConfiguration**: [LinuxConfiguration](#linuxconfiguration): Specifies the Linux operating system settings on the virtual machine. <br><br>For a list of supported Linux distributions, see [Linux on Azure-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/linux/endorsed-distros).
* **secrets**: [VaultSecretGroup](#vaultsecretgroup)[]: Specifies set of certificates that should be installed onto the virtual machines in the scale set. To install certificates on a virtual machine it is recommended to use the [Azure Key Vault virtual machine extension for Linux](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-linux) or the [Azure Key Vault virtual machine extension for Windows](https://docs.microsoft.com/azure/virtual-machines/extensions/key-vault-windows).
* **windowsConfiguration**: [WindowsConfiguration](#windowsconfiguration): Specifies Windows operating system settings on the virtual machine.

## VirtualMachineScaleSetStorageProfile
### Properties
* **dataDisks**: [VirtualMachineScaleSetDataDisk](#virtualmachinescalesetdatadisk)[]: Specifies the parameters that are used to add data disks to the virtual machines in the scale set. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/managed-disks-overview).
* **imageReference**: [ImageReference](#imagereference): Specifies information about the image to use. You can specify information about platform images, marketplace images, or virtual machine images. This element is required when you want to use a platform image, marketplace image, or virtual machine image, but is not used in other creation operations. NOTE: Image reference publisher and offer can only be set when you create the scale set.
* **osDisk**: [VirtualMachineScaleSetOSDisk](#virtualmachinescalesetosdisk): Describes a virtual machine scale set operating system disk.

## VirtualMachineScaleSetDataDisk
### Properties
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite': Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage**
* **createOption**: 'Attach' | 'Empty' | 'FromImage' (Required): Specifies how the virtual machine should be created.<br><br> Possible values are:<br><br> **Attach** \u2013 This value is used when you are using a specialized disk to create the virtual machine.<br><br> **FromImage** \u2013 This value is used when you are using an image to create the virtual machine. If you are using a platform image, you also use the imageReference element described above. If you are using a marketplace image, you  also use the plan element previously described.
* **diskIOPSReadWrite**: int: Specifies the Read-Write IOPS for the managed disk. Should be used only when StorageAccountType is UltraSSD_LRS. If not specified, a default value would be assigned based on diskSizeGB.
* **diskMBpsReadWrite**: int: Specifies the bandwidth in MB per second for the managed disk. Should be used only when StorageAccountType is UltraSSD_LRS. If not specified, a default value would be assigned based on diskSizeGB.
* **diskSizeGB**: int: Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. <br><br> This value cannot be larger than 1023 GB
* **lun**: int (Required): Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
* **managedDisk**: [VirtualMachineScaleSetManagedDiskParameters](#virtualmachinescalesetmanageddiskparameters): Describes the parameters of a ScaleSet managed disk.
* **name**: string: The disk name.
* **writeAcceleratorEnabled**: bool: Specifies whether writeAccelerator should be enabled or disabled on the disk.

## VirtualMachineScaleSetManagedDiskParameters
### Properties
* **diskEncryptionSet**: [DiskEncryptionSetParameters](#diskencryptionsetparameters): Describes the parameter of customer managed disk encryption set resource id that can be specified for disk. <br><br> NOTE: The disk encryption set resource id can only be specified for managed disk. Please refer https://aka.ms/mdssewithcmkoverview for more details.
* **storageAccountType**: 'Premium_LRS' | 'Premium_ZRS' | 'StandardSSD_LRS' | 'StandardSSD_ZRS' | 'Standard_LRS' | 'UltraSSD_LRS': Specifies the storage account type for the managed disk. Managed OS disk storage account type can only be set when you create the scale set. NOTE: UltraSSD_LRS can only be used with data disks. It cannot be used with OS Disk. Standard_LRS uses Standard HDD. StandardSSD_LRS uses Standard SSD. Premium_LRS uses Premium SSD. UltraSSD_LRS uses Ultra disk. Premium_ZRS uses Premium SSD zone redundant storage. StandardSSD_ZRS uses Standard SSD zone redundant storage. For more information regarding disks supported for Windows Virtual Machines, refer to https://docs.microsoft.com/azure/virtual-machines/windows/disks-types and, for Linux Virtual Machines, refer to https://docs.microsoft.com/azure/virtual-machines/linux/disks-types

## VirtualMachineScaleSetOSDisk
### Properties
* **caching**: 'None' | 'ReadOnly' | 'ReadWrite': Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage**
* **createOption**: 'Attach' | 'Empty' | 'FromImage' (Required): Specifies how the virtual machine should be created.<br><br> Possible values are:<br><br> **Attach** \u2013 This value is used when you are using a specialized disk to create the virtual machine.<br><br> **FromImage** \u2013 This value is used when you are using an image to create the virtual machine. If you are using a platform image, you also use the imageReference element described above. If you are using a marketplace image, you  also use the plan element previously described.
* **diffDiskSettings**: [DiffDiskSettings](#diffdisksettings): Describes the parameters of ephemeral disk settings that can be specified for operating system disk. <br><br> NOTE: The ephemeral disk settings can only be specified for managed disk.
* **diskSizeGB**: int: Specifies the size of the operating system disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. <br><br> This value cannot be larger than 1023 GB
* **image**: [VirtualHardDisk](#virtualharddisk): Describes the uri of a disk.
* **managedDisk**: [VirtualMachineScaleSetManagedDiskParameters](#virtualmachinescalesetmanageddiskparameters): Describes the parameters of a ScaleSet managed disk.
* **name**: string: The disk name.
* **osType**: 'Linux' | 'Windows': The operating system of the osDiskImage.
* **vhdContainers**: string[]: Specifies the container urls that are used to store operating system disks for the scale set.
* **writeAcceleratorEnabled**: bool: Specifies whether writeAccelerator should be enabled or disabled on the disk.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VirtualMachineScaleSetVMProperties
### Properties
* **additionalCapabilities**: [AdditionalCapabilities](#additionalcapabilities): Enables or disables a capability on the virtual machine or virtual machine scale set.
* **availabilitySet**: [SubResource](#subresource)
* **diagnosticsProfile**: [DiagnosticsProfile](#diagnosticsprofile): Specifies the boot diagnostic settings state. <br><br>Minimum api-version: 2015-06-15.
* **hardwareProfile**: [HardwareProfile](#hardwareprofile): Specifies the hardware settings for the virtual machine.
* **instanceView**: [VirtualMachineScaleSetVMInstanceView](#virtualmachinescalesetvminstanceview) (ReadOnly): The instance view of a virtual machine scale set VM.
* **latestModelApplied**: bool (ReadOnly): Specifies whether the latest model has been applied to the virtual machine.
* **licenseType**: string: Specifies that the image or disk that is being used was licensed on-premises. <br><br> Possible values for Windows Server operating system are: <br><br> Windows_Client <br><br> Windows_Server <br><br> Possible values for Linux Server operating system are: <br><br> RHEL_BYOS (for RHEL) <br><br> SLES_BYOS (for SUSE) <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/windows/hybrid-use-benefit-licensing) <br><br> [Azure Hybrid Use Benefit for Linux Server](https://docs.microsoft.com/azure/virtual-machines/linux/azure-hybrid-benefit-linux) <br><br> Minimum api-version: 2015-06-15
* **modelDefinitionApplied**: string (ReadOnly): Specifies whether the model applied to the virtual machine is the model of the virtual machine scale set or the customized model for the virtual machine.
* **networkProfile**: [NetworkProfile](#networkprofile): Specifies the network interfaces or the networking configuration of the virtual machine.
* **networkProfileConfiguration**: [VirtualMachineScaleSetVMNetworkProfileConfiguration](#virtualmachinescalesetvmnetworkprofileconfiguration): Describes a virtual machine scale set VM network profile.
* **osProfile**: [OSProfile](#osprofile): Specifies the operating system settings for the virtual machine. Some of the settings cannot be changed once VM is provisioned.
* **protectionPolicy**: [VirtualMachineScaleSetVMProtectionPolicy](#virtualmachinescalesetvmprotectionpolicy): The protection policy of a virtual machine scale set VM.
* **provisioningState**: string (ReadOnly): The provisioning state, which only appears in the response.
* **securityProfile**: [SecurityProfile](#securityprofile): Specifies the Security profile settings for the virtual machine or virtual machine scale set.
* **storageProfile**: [StorageProfile](#storageprofile): Specifies the storage settings for the virtual machine disks.
* **userData**: string: UserData for the VM, which must be base-64 encoded. Customer should not pass any secrets in here. <br><br>Minimum api-version: 2021-03-01
* **vmId**: string (ReadOnly): Azure VM unique ID.

## VirtualMachineScaleSetVMInstanceView
### Properties
* **assignedHost**: string (ReadOnly): Resource id of the dedicated host, on which the virtual machine is allocated through automatic placement, when the virtual machine is associated with a dedicated host group that has automatic placement enabled. <br><br>Minimum api-version: 2020-06-01.
* **bootDiagnostics**: [BootDiagnosticsInstanceView](#bootdiagnosticsinstanceview): The instance view of a virtual machine boot diagnostics.
* **disks**: [DiskInstanceView](#diskinstanceview)[]: The disks information.
* **extensions**: [VirtualMachineExtensionInstanceView](#virtualmachineextensioninstanceview)[]: The extensions information.
* **maintenanceRedeployStatus**: [MaintenanceRedeployStatus](#maintenanceredeploystatus): Maintenance Operation Status.
* **placementGroupId**: string: The placement group in which the VM is running. If the VM is deallocated it will not have a placementGroupId.
* **platformFaultDomain**: int: The Fault Domain count.
* **platformUpdateDomain**: int: The Update Domain count.
* **rdpThumbPrint**: string: The Remote desktop certificate thumbprint.
* **statuses**: [InstanceViewStatus](#instanceviewstatus)[]: The resource status information.
* **vmAgent**: [VirtualMachineAgentInstanceView](#virtualmachineagentinstanceview): The instance view of the VM Agent running on the virtual machine.
* **vmHealth**: [VirtualMachineHealthStatus](#virtualmachinehealthstatus) (ReadOnly): The health status of the VM.

## VirtualMachineScaleSetVMNetworkProfileConfiguration
### Properties
* **networkInterfaceConfigurations**: [VirtualMachineScaleSetNetworkConfiguration](#virtualmachinescalesetnetworkconfiguration)[]: The list of network configurations.

## VirtualMachineScaleSetVMProtectionPolicy
### Properties
* **protectFromScaleIn**: bool: Indicates that the virtual machine scale set VM shouldn't be considered for deletion during a scale-in operation.
* **protectFromScaleSetActions**: bool: Indicates that model updates or actions (including scale-in) initiated on the virtual machine scale set should not be applied to the virtual machine scale set VM.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

