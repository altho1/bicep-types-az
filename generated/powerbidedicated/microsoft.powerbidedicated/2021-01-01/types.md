# Microsoft.PowerBIDedicated @ 2021-01-01

## Resource Microsoft.PowerBIDedicated/autoScaleVCores@2021-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Location of the PowerBI Dedicated resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AutoScaleVCoreProperties](#autoscalevcoreproperties): Properties of an auto scale v-core resource.
* **sku**: [AutoScaleVCoreSku](#autoscalevcoresku) (Required): Represents the SKU name and Azure pricing tier for auto scale v-core resource.
* **systemData**: [SystemData](#systemdata): Metadata pertaining to creation and last modification of the resource.
* **tags**: [ResourceTags](#resourcetags): Key-value pairs of additional resource provisioning properties.
* **type**: 'Microsoft.PowerBIDedicated/autoScaleVCores' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.PowerBIDedicated/capacities@2021-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Location of the PowerBI Dedicated resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DedicatedCapacityProperties](#dedicatedcapacityproperties): Properties of Dedicated Capacity resource.
* **sku**: [CapacitySku](#capacitysku) (Required): Represents the SKU name and Azure pricing tier for PowerBI Dedicated capacity resource.
* **systemData**: [SystemData](#systemdata): Metadata pertaining to creation and last modification of the resource.
* **tags**: [ResourceTags](#resourcetags): Key-value pairs of additional resource provisioning properties.
* **type**: 'Microsoft.PowerBIDedicated/capacities' (ReadOnly, DeployTimeConstant): The resource type

## AutoScaleVCoreProperties
### Properties
* **capacityLimit**: int: The maximum capacity of an auto scale v-core resource.
* **capacityObjectId**: string: The object ID of the capacity resource associated with the auto scale v-core resource.
* **provisioningState**: 'Succeeded' (ReadOnly): The current deployment state of an auto scale v-core resource. The provisioningState is to indicate states for resource provisioning.

## AutoScaleVCoreSku
### Properties
* **capacity**: int: The capacity of an auto scale v-core resource.
* **name**: string (Required): Name of the SKU level.
* **tier**: 'AutoScale': The name of the Azure pricing tier to which the SKU applies.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC)
* **createdBy**: string: An identifier for the identity that created the resource
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created/modified the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: An identifier for the identity that last modified the resource
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created/modified the resource.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DedicatedCapacityProperties
### Properties
* **administration**: [DedicatedCapacityAdministrators](#dedicatedcapacityadministrators): An array of administrator user identities
* **mode**: 'Gen1' | 'Gen2': Specifies the generation of the Power BI Embedded capacity. If no value is specified, the default value 'Gen2' is used. [Learn More](https://docs.microsoft.com/power-bi/developer/embedded/power-bi-embedded-generation-2)
* **provisioningState**: 'Deleting' | 'Failed' | 'Paused' | 'Pausing' | 'Preparing' | 'Provisioning' | 'Resuming' | 'Scaling' | 'Succeeded' | 'Suspended' | 'Suspending' | 'Updating' (ReadOnly): The current deployment state of PowerBI Dedicated resource. The provisioningState is to indicate states for resource provisioning.
* **state**: 'Deleting' | 'Failed' | 'Paused' | 'Pausing' | 'Preparing' | 'Provisioning' | 'Resuming' | 'Scaling' | 'Succeeded' | 'Suspended' | 'Suspending' | 'Updating' (ReadOnly): The current state of PowerBI Dedicated resource. The state is to indicate more states outside of resource provisioning.

## DedicatedCapacityAdministrators
### Properties
* **members**: string[]: An array of administrator user identities.

## CapacitySku
### Properties
* **name**: string (Required): Name of the SKU level.
* **tier**: 'AutoPremiumHost' | 'PBIE_Azure' | 'Premium': The name of the Azure pricing tier to which the SKU applies.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

