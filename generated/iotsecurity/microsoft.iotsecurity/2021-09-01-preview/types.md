# Microsoft.IoTSecurity @ 2021-09-01-preview

## Resource Microsoft.IoTSecurity/locations/sites@2021-09-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SiteProperties](#siteproperties): IoT site properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.IoTSecurity/locations/sites' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.IoTSecurity/locations/sites/sensors@2021-09-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SensorProperties](#sensorproperties): IoT sensor properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.IoTSecurity/locations/sites/sensors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.IoTSecurity/sensors@2021-09-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2021-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SensorProperties](#sensorproperties): IoT sensor properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.IoTSecurity/sensors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.IoTSecurity/sites@2021-09-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2021-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [SiteProperties](#siteproperties): IoT site properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.IoTSecurity/sites' (ReadOnly, DeployTimeConstant): The resource type

## SiteProperties
### Properties
* **displayName**: string (Required): Display name of the IoT site
* **tags**: [SitePropertiesTags](#sitepropertiestags): Tags of the IoT site

## SitePropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.

## SensorProperties
### Properties
* **connectivityTime**: string (ReadOnly): Last connectivity time of the IoT sensor
* **dynamicLearning**: bool (ReadOnly): Dynamic mode status of the IoT sensor
* **learningMode**: bool (ReadOnly): Learning mode status of the IoT sensor
* **sensorStatus**: 'Disconnected' | 'Ok' | 'Unavailable' (ReadOnly): Status of the IoT sensor
* **sensorType**: 'Enterprise' | 'Ot': Type of sensor
* **sensorVersion**: string (ReadOnly): Version of the IoT sensor
* **tiAutomaticUpdates**: bool: TI Automatic mode status of the IoT sensor
* **tiStatus**: 'Failed' | 'InProgress' | 'Ok' | 'UpdateAvailable' (ReadOnly): TI Status of the IoT sensor
* **tiVersion**: string (ReadOnly): TI Version of the IoT sensor
* **zone**: string: Zone of the IoT sensor

