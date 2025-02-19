# Microsoft.Elastic @ 2020-07-01

## Resource Microsoft.Elastic/monitors@2020-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [IdentityProperties](#identityproperties): Identity properties.
* **location**: string (Required): The location of the monitor resource
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MonitorProperties](#monitorproperties): Properties specific to the monitor resource.
* **sku**: [ResourceSku](#resourcesku): Microsoft.Elastic SKU.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [ElasticMonitorResourceTags](#elasticmonitorresourcetags): The tags of the monitor resource.
* **type**: 'Microsoft.Elastic/monitors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Elastic/monitors/tagRules@2020-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MonitoringTagRulesProperties](#monitoringtagrulesproperties): Definition of the properties for a TagRules resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Elastic/monitors/tagRules' (ReadOnly, DeployTimeConstant): The resource type

## IdentityProperties
### Properties
* **principalId**: string (ReadOnly): The identity ID.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'SystemAssigned': Managed Identity types.

## MonitorProperties
### Properties
* **elasticProperties**: [ElasticProperties](#elasticproperties): Elastic Resource Properties.
* **liftrResourceCategory**: 'MonitorLogs' | 'Unknown' (ReadOnly)
* **liftrResourcePreference**: int (ReadOnly): The priority of the resource.
* **monitoringStatus**: 'Disabled' | 'Enabled': Flag specifying if the resource monitoring is enabled or disabled.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating': Provisioning state of Elastic resource.
* **userInfo**: [UserInfo](#userinfo) (WriteOnly): User Information to be passed to partners.

## ElasticProperties
### Properties
* **elasticCloudDeployment**: [ElasticCloudDeployment](#elasticclouddeployment): Details of the user's elastic deployment associated with the monitor resource.
* **elasticCloudUser**: [ElasticCloudUser](#elasticclouduser): Details of the user's elastic account.

## ElasticCloudDeployment
### Properties
* **azureSubscriptionId**: string (ReadOnly): Associated Azure subscription Id for the elastic deployment.
* **deploymentId**: string (ReadOnly): Elastic deployment Id
* **elasticsearchRegion**: string (ReadOnly): Region where Deployment at Elastic side took place.
* **elasticsearchServiceUrl**: string (ReadOnly): Elasticsearch ingestion endpoint of the Elastic deployment.
* **kibanaServiceUrl**: string (ReadOnly): Kibana endpoint of the Elastic deployment.
* **kibanaSsoUrl**: string (ReadOnly): Kibana dashboard sso URL of the Elastic deployment.
* **name**: string (ReadOnly): Elastic deployment name

## ElasticCloudUser
### Properties
* **elasticCloudSsoDefaultUrl**: string (ReadOnly): Elastic cloud default dashboard sso URL of the Elastic user account.
* **emailAddress**: string (ReadOnly): Email of the Elastic User Account.
* **id**: string (ReadOnly): User Id of the elastic account of the User.

## UserInfo
### Properties
* **companyInfo**: [CompanyInfo](#companyinfo): Company information of the user to be passed to partners.
* **companyName**: string: Company name of the user
* **emailAddress**: string: Email of the user used by Elastic for contacting them if needed
* **firstName**: string: First name of the user
* **lastName**: string: Last name of the user

## CompanyInfo
### Properties
* **business**: string: Business of the company
* **country**: string: Country of the company location.
* **domain**: string: Domain of the company
* **employeesNumber**: string: Number of employees in the company
* **state**: string: State of the company location.

## ResourceSku
### Properties
* **name**: string (Required): Name of the SKU.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.

## ElasticMonitorResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MonitoringTagRulesProperties
### Properties
* **logRules**: [LogRules](#logrules): Set of rules for sending logs for the Monitor resource.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating': Provisioning state of Elastic resource.

## LogRules
### Properties
* **filteringTags**: [FilteringTag](#filteringtag)[]: List of filtering tags to be used for capturing logs. This only takes effect if SendActivityLogs flag is enabled. If empty, all resources will be captured. If only Exclude action is specified, the rules will apply to the list of all available resources. If Include actions are specified, the rules will only include resources with the associated tags.
* **sendAadLogs**: bool: Flag specifying if AAD logs should be sent for the Monitor resource.
* **sendActivityLogs**: bool: Flag specifying if activity logs from Azure resources should be sent for the Monitor resource.
* **sendSubscriptionLogs**: bool: Flag specifying if subscription logs should be sent for the Monitor resource.

## FilteringTag
### Properties
* **action**: 'Exclude' | 'Include': Valid actions for a filtering tag. Exclusion takes priority over inclusion.
* **name**: string: The name (also known as the key) of the tag.
* **value**: string: The value of the tag.

