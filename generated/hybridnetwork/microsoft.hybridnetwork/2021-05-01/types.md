# Microsoft.HybridNetwork @ 2021-05-01

## Resource Microsoft.HybridNetwork/devices@2021-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DevicePropertiesFormat](#devicepropertiesformat): Device properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.HybridNetwork/devices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridNetwork/locations/vendors/networkFunctions@2021-05-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VendorNetworkFunctionPropertiesFormat](#vendornetworkfunctionpropertiesformat): Vendor network function properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.HybridNetwork/locations/vendors/networkFunctions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridNetwork/networkFunctions@2021-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkFunctionPropertiesFormat](#networkfunctionpropertiesformat): Network function properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.HybridNetwork/networkFunctions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridNetwork/vendors@2021-05-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VendorPropertiesFormat](#vendorpropertiesformat): Vendor properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.HybridNetwork/vendors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridNetwork/vendors/vendorSkus@2021-05-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VendorSkuPropertiesFormat](#vendorskupropertiesformat): Sku properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.HybridNetwork/vendors/vendorSkus' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridNetwork/vendors/vendorSkus/previewSubscriptions@2021-05-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PreviewSubscriptionProperties](#previewsubscriptionproperties): PreviewSubscription properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.HybridNetwork/vendors/vendorSkus/previewSubscriptions' (ReadOnly, DeployTimeConstant): The resource type

## DevicePropertiesFormat
* **Discriminator**: deviceType

### Base Properties
* **networkFunctions**: [SubResource](#subresource)[] (ReadOnly): The list of network functions deployed on the device.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' (ReadOnly): The current provisioning state.
* **status**: 'Deleted' | 'NotRegistered' | 'Registered' | 'Unknown' (ReadOnly): The current device status.
### AzureStackEdgeFormat
#### Properties
* **azureStackEdge**: [SubResource](#subresource) (Required): Reference to another sub resource.
* **deviceType**: 'AzureStackEdge' (Required): The type of the device.


## SubResource
### Properties
* **id**: string: Resource ID.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VendorNetworkFunctionPropertiesFormat
### Properties
* **networkFunctionVendorConfigurations**: [NetworkFunctionVendorConfiguration](#networkfunctionvendorconfiguration)[]: An array of network function vendor configurations.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' (ReadOnly): The current provisioning state.
* **skuName**: string (ReadOnly): The name of the sku. Once set, it cannot be updated.
* **skuType**: 'EvolvedPacketCore' | 'Firewall' | 'SDWAN' | 'Unknown' (ReadOnly): Sku type.
* **vendorProvisioningState**: 'Deprovisioned' | 'NotProvisioned' | 'Provisioned' | 'Provisioning' | 'Unknown' | 'UserDataValidationFailed': The current vendor provisioning state.

## NetworkFunctionVendorConfiguration
### Properties
* **networkInterfaces**: [NetworkInterface](#networkinterface)[]: The network interface configurations.
* **osProfile**: [OsProfile](#osprofile): Specifies the operating system settings for the role instance.
* **roleName**: string: The name of the vendor network function role.
* **userDataParameters**: any (ReadOnly): Any object

## NetworkInterface
### Properties
* **ipConfigurations**: [NetworkInterfaceIPConfiguration](#networkinterfaceipconfiguration)[]: A list of IP configurations of the network interface.
* **macAddress**: string: The MAC address of the network interface.
* **networkInterfaceName**: string: The name of the network interface.
* **vmSwitchType**: 'Lan' | 'Management' | 'Unknown' | 'Wan': The type of the VM switch.

## NetworkInterfaceIPConfiguration
### Properties
* **dnsServers**: string[]: The list of DNS servers IP addresses.
* **gateway**: string: The value of the gateway.
* **ipAddress**: string: The value of the IP address.
* **ipAllocationMethod**: 'Dynamic' | 'Static' | 'Unknown': IP address allocation method.
* **ipVersion**: 'IPv4' | 'Unknown': IP address version.
* **subnet**: string: The value of the subnet.

## OsProfile
### Properties
* **adminUsername**: string: Specifies the name of the administrator account. <br><br> **Windows-only restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length (Linux):** 1  character <br><br> **Max-length (Linux):** 64 characters <br><br> **Max-length (Windows):** 20 characters  <br><br><li> For root access to the Linux VM, see [Using root privileges on Linux virtual machines in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-use-root-privileges?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json)<br><li> For a list of built-in system users on Linux that should not be used in this field, see [Selecting User Names for Linux on Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-usernames?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json).
* **customData**: string: Specifies a base-64 encoded string of custom data. The base-64 encoded string is decoded to a binary array that is saved as a file on the virtual machine. The maximum length of the binary array is 65535 bytes. <br><br> **Note: Do not pass any secrets or passwords in customData property** <br><br> This property cannot be updated after the VM is created. <br><br> customData is passed to the VM to be saved as a file. For more information see [Custom Data on Azure VMs](https://azure.microsoft.com/en-us/blog/custom-data-and-cloud-init-on-windows-azure/) <br><br> For using cloud-init for your Linux VM, see [Using cloud-init to customize a Linux VM during creation](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-using-cloud-init?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json)
* **customDataRequired**: bool: Indicates if custom data is required to deploy this role.
* **linuxConfiguration**: [LinuxConfiguration](#linuxconfiguration): Specifies the Linux operating system settings on the virtual machine.

## LinuxConfiguration
### Properties
* **ssh**: [SshConfiguration](#sshconfiguration): SSH configuration for Linux based VMs running on Azure

## SshConfiguration
### Properties
* **publicKeys**: [SshPublicKey](#sshpublickey)[]: The list of SSH public keys used to authenticate with linux based VMs.

## SshPublicKey
### Properties
* **keyData**: string: SSH public key certificate used to authenticate with the VM through ssh. The key needs to be at least 2048-bit and in ssh-rsa format. <br><br> For creating ssh keys, see [Create SSH keys on Linux and Mac for Linux VMs in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-mac-create-ssh-keys?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json).
* **path**: string: Specifies the full path on the created VM where ssh public key is stored. If the file already exists, the specified key is appended to the file. Example: /home/user/.ssh/authorized_keys

## NetworkFunctionPropertiesFormat
### Properties
* **device**: [SubResource](#subresource): Reference to another sub resource.
* **managedApplication**: [SubResource](#subresource) (ReadOnly): Reference to another sub resource.
* **managedApplicationParameters**: any: Any object
* **networkFunctionContainerConfigurations**: any: Any object
* **networkFunctionUserConfigurations**: [NetworkFunctionUserConfiguration](#networkfunctionuserconfiguration)[]: The network function configurations from the user.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' (ReadOnly): The current provisioning state.
* **serviceKey**: string (ReadOnly): The service key for the network function resource.
* **skuName**: string: The sku name for the network function. Once set, it cannot be updated.
* **skuType**: 'EvolvedPacketCore' | 'Firewall' | 'SDWAN' | 'Unknown' (ReadOnly): Sku type.
* **vendorName**: string: The vendor name for the network function. Once set, it cannot be updated.
* **vendorProvisioningState**: 'Deprovisioned' | 'NotProvisioned' | 'Provisioned' | 'Provisioning' | 'Unknown' | 'UserDataValidationFailed' (ReadOnly): The current vendor provisioning state.

## NetworkFunctionUserConfiguration
### Properties
* **networkInterfaces**: [NetworkInterface](#networkinterface)[]: The network interface configuration.
* **osProfile**: [NetworkFunctionUserConfigurationOsProfile](#networkfunctionuserconfigurationosprofile): Specifies the operating system settings for the role instance.
* **roleName**: string: The name of the network function role.
* **userDataParameters**: any: Any object

## NetworkFunctionUserConfigurationOsProfile
### Properties
* **customData**: string: Specifies a base-64 encoded string of custom data. The base-64 encoded string is decoded to a binary array that is saved as a file on the virtual machine. The maximum length of the binary array is 65535 bytes. <br><br> **Note: Do not pass any secrets or passwords in customData property** <br><br> This property cannot be updated after the VM is created. <br><br> customData is passed to the VM to be saved as a file. For more information see [Custom Data on Azure VMs](https://azure.microsoft.com/en-us/blog/custom-data-and-cloud-init-on-windows-azure/) <br><br> For using cloud-init for your Linux VM, see [Using cloud-init to customize a Linux VM during creation](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-using-cloud-init?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json)

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VendorPropertiesFormat
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' (ReadOnly): The current provisioning state.
* **skus**: [SubResource](#subresource)[] (ReadOnly): A list of IDs of the vendor skus offered by the vendor.

## VendorSkuPropertiesFormat
### Properties
* **deploymentMode**: 'Azure' | 'PrivateEdgeZone' | 'Unknown': The sku deployment mode.
* **managedApplicationParameters**: any: Any object
* **managedApplicationTemplate**: any: Any object
* **networkFunctionTemplate**: [NetworkFunctionTemplate](#networkfunctiontemplate): The network function template.
* **networkFunctionType**: 'ContainerizedNetworkFunction' | 'Unknown' | 'VirtualNetworkFunction': The network function type.
* **preview**: bool: Indicates if the vendor sku is in preview mode.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' (ReadOnly): The current provisioning state.
* **skuType**: 'EvolvedPacketCore' | 'Firewall' | 'SDWAN' | 'Unknown': Sku type.

## NetworkFunctionTemplate
### Properties
* **networkFunctionRoleConfigurations**: [NetworkFunctionRoleConfiguration](#networkfunctionroleconfiguration)[]: An array of network function role definitions.

## NetworkFunctionRoleConfiguration
### Properties
* **customProfile**: [CustomProfile](#customprofile): Specifies the custom settings for the virtual machine.
* **networkInterfaces**: [NetworkInterface](#networkinterface)[]: The network interface configurations.
* **osProfile**: [OsProfile](#osprofile): Specifies the operating system settings for the role instance.
* **roleName**: string: The name of the network function role.
* **roleType**: 'Unknown' | 'VirtualMachine': Role type.
* **storageProfile**: [StorageProfile](#storageprofile): Specifies the storage settings for the virtual machine disks.
* **userDataParameters**: any: Any object
* **userDataTemplate**: any: Any object
* **virtualMachineSize**: 'Standard_D11_v2' | 'Standard_D12_v2' | 'Standard_D13_v2' | 'Standard_D1_v2' | 'Standard_D2_v2' | 'Standard_D3_v2' | 'Standard_D4_v2' | 'Standard_D5_v2' | 'Standard_DS11_v2' | 'Standard_DS12_v2' | 'Standard_DS13_v2' | 'Standard_DS1_v2' | 'Standard_DS2_v2' | 'Standard_DS3_v2' | 'Standard_DS4_v2' | 'Standard_DS5_v2' | 'Standard_F1' | 'Standard_F16' | 'Standard_F16s' | 'Standard_F1s' | 'Standard_F2' | 'Standard_F2s' | 'Standard_F4' | 'Standard_F4s' | 'Standard_F8' | 'Standard_F8s' | 'Unknown': The size of the virtual machine.

## CustomProfile
### Properties
* **metadataConfigurationPath**: string: Path for metadata configuration.

## StorageProfile
### Properties
* **dataDisks**: [DataDisk](#datadisk)[]: Specifies the parameters that are used to add a data disk to a virtual machine.
* **imageReference**: [ImageReference](#imagereference): The image reference properties.
* **osDisk**: [OsDisk](#osdisk): Specifies information about the operating system disk used by the virtual machine. <br><br> For more information about disks, see [About disks and VHDs for Azure virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json).

## DataDisk
### Properties
* **createOption**: 'Empty' | 'Unknown': Specifies how the virtual machine should be created.
* **diskSizeGB**: int: Specifies the size of an empty disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image.
* **name**: string: The name of data disk.

## ImageReference
### Properties
* **exactVersion**: string: Specifies in decimal numbers, the exact version of image used to create the virtual machine.
* **offer**: string: Specifies the offer of the image used to create the virtual machine.
* **publisher**: string: The image publisher.
* **sku**: string: The image SKU.
* **version**: string: Specifies the version of the image used to create the virtual machine. The allowed formats are Major.Minor.Build or 'latest'. Major, Minor, and Build are decimal numbers. Specify 'latest' to use the latest version of an image available at deploy time. Even if you use 'latest', the VM image will not automatically update after deploy time even if a new version becomes available.

## OsDisk
### Properties
* **diskSizeGB**: int: Specifies the size of os disk in gigabytes. This is the fully expanded disk size needed of the VHD image on the ASE. This disk size should be greater than the size of the VHD provided in vhdUri.
* **name**: string: The VHD name.
* **osType**: 'Linux' | 'Unknown' | 'Windows': The OS type.
* **vhd**: [VirtualHardDisk](#virtualharddisk): Describes the uri of a disk.

## VirtualHardDisk
### Properties
* **uri**: string (WriteOnly): Specifies the virtual hard disk's uri.

## PreviewSubscriptionProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' (ReadOnly): The current provisioning state.

