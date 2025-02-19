# Microsoft.Maps @ 2017-01-01-preview

## Resource Microsoft.Maps/accounts@2017-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MapsAccountProperties](#mapsaccountproperties) (ReadOnly): Additional Map account properties
* **sku**: [Sku](#sku) (Required): The SKU of the Maps Account.
* **tags**: [MapsAccountCreateParametersTags](#mapsaccountcreateparameterstags): Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters.
* **type**: 'Microsoft.Maps/accounts' (ReadOnly, DeployTimeConstant): The resource type

## MapsAccountProperties
### Properties
* **x-ms-client-id**: string (ReadOnly): A unique identifier for the maps account

## Sku
### Properties
* **name**: string (Required): The name of the SKU, in standard format (such as S0).
* **tier**: string (ReadOnly): Gets the sku tier. This is based on the SKU name.

## MapsAccountCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

