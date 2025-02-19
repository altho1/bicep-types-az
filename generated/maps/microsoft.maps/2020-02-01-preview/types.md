# Microsoft.Maps @ 2020-02-01-preview

## Resource Microsoft.Maps/accounts@2020-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MapsAccountProperties](#mapsaccountproperties) (ReadOnly): Additional Map account properties
* **sku**: [Sku](#sku) (Required): The SKU of the Maps Account.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [MapsAccountCreateParametersTags](#mapsaccountcreateparameterstags): Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). Each tag must have a key no greater than 128 characters and value no greater than 256 characters.
* **type**: 'Microsoft.Maps/accounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Maps/accounts/creators@2020-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreatorProperties](#creatorproperties) (ReadOnly): Creator resource properties
* **tags**: [CreatorCreateParametersTags](#creatorcreateparameterstags): Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters.
* **type**: 'Microsoft.Maps/accounts/creators' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Maps/accounts/privateAtlases@2020-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateAtlasProperties](#privateatlasproperties) (ReadOnly): Private Atlas resource properties
* **tags**: [PrivateAtlasCreateParametersTags](#privateatlascreateparameterstags): Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters.
* **type**: 'Microsoft.Maps/accounts/privateAtlases' (ReadOnly, DeployTimeConstant): The resource type

## MapsAccountProperties
### Properties
* **x-ms-client-id**: string (ReadOnly): A unique identifier for the maps account

## Sku
### Properties
* **name**: string (Required): The name of the SKU, in standard format (such as S0).
* **tier**: string (ReadOnly): Gets the sku tier. This is based on the SKU name.

## SystemData
### Properties
* **createdAt**: string (ReadOnly): The timestamp of resource creation (UTC).
* **createdBy**: string (ReadOnly): The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' (ReadOnly): The type of identity that created the resource.
* **lastModifiedAt**: string (ReadOnly): The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string (ReadOnly): The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' (ReadOnly): The type of identity that created the resource.

## MapsAccountCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CreatorProperties
### Properties
* **provisioningState**: string (ReadOnly): The state of the resource provisioning, terminal states: Succeeded, Failed, Canceled

## CreatorCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PrivateAtlasProperties
### Properties
* **provisioningState**: string (ReadOnly): The state of the resource provisioning, terminal states: Succeeded, Failed, Canceled

## PrivateAtlasCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

