# Microsoft.SecurityInsights @ 2019-01-01-preview

## Resource Microsoft.SecurityInsights/alertRules@2019-01-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'Fusion' | 'MLBehaviorAnalytics' | 'MicrosoftSecurityIncidentCreation' | 'Scheduled' | 'ThreatIntelligence' (Required): The kind of the alert rule
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.SecurityInsights/alertRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/alertRules/actions@2019-01-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ActionRequestProperties](#actionrequestproperties): Action property bag.
* **systemData**: [SystemData](#systemdata) (ReadOnly, WriteOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.SecurityInsights/alertRules/actions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/automationRules@2019-01-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AutomationRuleProperties](#automationruleproperties): Describes automation rule properties
* **type**: 'Microsoft.SecurityInsights/automationRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/bookmarks@2019-01-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BookmarkProperties](#bookmarkproperties): Describes bookmark properties
* **type**: 'Microsoft.SecurityInsights/bookmarks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/bookmarks/relations@2019-01-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RelationProperties](#relationproperties): Relation property bag.
* **type**: 'Microsoft.SecurityInsights/bookmarks/relations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/cases@2019-01-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CaseProperties](#caseproperties): Describes case properties
* **type**: 'Microsoft.SecurityInsights/cases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/cases/comments@2019-01-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CaseCommentProperties](#casecommentproperties): Case comment property bag.
* **type**: 'Microsoft.SecurityInsights/cases/comments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/cases/relations@2019-01-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: ETag for relation
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'CasesToBookmarks' (ReadOnly): The type of relation node
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RelationsModelInputProperties](#relationsmodelinputproperties): Relation input properties
* **type**: 'Microsoft.SecurityInsights/cases/relations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/dataConnectors@2019-01-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'AmazonWebServicesCloudTrail' | 'AzureActiveDirectory' | 'AzureAdvancedThreatProtection' | 'AzureSecurityCenter' | 'Dynamics365' | 'MicrosoftCloudAppSecurity' | 'MicrosoftDefenderAdvancedThreatProtection' | 'MicrosoftThreatIntelligence' | 'MicrosoftThreatProtection' | 'Office365' | 'OfficeATP' | 'ThreatIntelligence' | 'ThreatIntelligenceTaxii' (Required): The kind of the data connector
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.SecurityInsights/dataConnectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/incidents@2019-01-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IncidentProperties](#incidentproperties): Describes incident properties
* **type**: 'Microsoft.SecurityInsights/incidents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/incidents/comments@2019-01-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IncidentCommentProperties](#incidentcommentproperties): Incident comment property bag.
* **type**: 'Microsoft.SecurityInsights/incidents/comments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/incidents/relations@2019-01-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RelationProperties](#relationproperties): Relation property bag.
* **type**: 'Microsoft.SecurityInsights/incidents/relations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/settings@2019-01-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'Anomalies' | 'EntityAnalytics' | 'EyesOn' | 'Ueba' (Required): The kind of the setting
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.SecurityInsights/settings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/threatIntelligence/indicators@2019-01-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'indicator' (Required): The kind of the threat intelligence entity
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ThreatIntelligenceIndicatorProperties](#threatintelligenceindicatorproperties) (WriteOnly): Describes threat intelligence entity properties
* **type**: 'Microsoft.SecurityInsights/threatIntelligence/indicators' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/watchlists@2019-01-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WatchlistProperties](#watchlistproperties): Describes watchlist properties
* **type**: 'Microsoft.SecurityInsights/watchlists' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityInsights/watchlists/watchlistItems@2019-01-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WatchlistItemProperties](#watchlistitemproperties): Describes watchlist item properties
* **type**: 'Microsoft.SecurityInsights/watchlists/watchlistItems' (ReadOnly, DeployTimeConstant): The resource type

## ActionRequestProperties
### Properties
* **logicAppResourceId**: string (Required): Logic App Resource Id, /subscriptions/{my-subscription}/resourceGroups/{my-resource-group}/providers/Microsoft.Logic/workflows/{my-workflow-id}.
* **triggerUri**: string (Required, WriteOnly): Logic App Callback URL for this specific workflow.
* **workflowId**: string (ReadOnly): The name of the logic app's workflow.

## SystemData
### Properties
* **createdAt**: string (WriteOnly): The timestamp of resource creation (UTC).
* **createdBy**: string (WriteOnly): The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' (WriteOnly): The type of identity that created the resource.
* **lastModifiedAt**: string (WriteOnly): The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string (WriteOnly): The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' (WriteOnly): The type of identity that created the resource.

## AutomationRuleProperties
### Properties
* **actions**: [AutomationRuleAction](#automationruleaction)[] (Required): The actions to execute when the automation rule is triggered
* **createdBy**: [ClientInfo](#clientinfo) (ReadOnly): Information on the client (user or application) that made some action
* **createdTimeUtc**: string (ReadOnly): The time the automation rule was created
* **displayName**: string (Required): The display name of the automation  rule
* **lastModifiedBy**: [ClientInfo](#clientinfo) (ReadOnly): Information on the client (user or application) that made some action
* **lastModifiedTimeUtc**: string (ReadOnly): The last time the automation rule was updated
* **order**: int (Required): The order of execution of the automation rule
* **triggeringLogic**: [AutomationRuleTriggeringLogic](#automationruletriggeringlogic) (Required): Describes automation rule triggering logic

## AutomationRuleAction
* **Discriminator**: actionType

### Base Properties
* **order**: int (Required): The order of execution of the automation rule action
### AutomationRuleModifyPropertiesAction
#### Properties
* **actionConfiguration**: [AutomationRuleModifyPropertiesActionConfiguration](#automationrulemodifypropertiesactionconfiguration) (Required): The configuration of the modify properties automation rule action
* **actionType**: 'ModifyProperties' (Required): The type of the automation rule action

### AutomationRuleRunPlaybookAction
#### Properties
* **actionConfiguration**: [AutomationRuleRunPlaybookActionConfiguration](#automationrulerunplaybookactionconfiguration) (Required): The configuration of the run playbook automation rule action
* **actionType**: 'RunPlaybook' (Required): The type of the automation rule action


## AutomationRuleModifyPropertiesActionConfiguration
### Properties
* **classification**: 'BenignPositive' | 'FalsePositive' | 'TruePositive' | 'Undetermined': The reason the incident was closed
* **classificationComment**: string: Describes the reason the incident was closed
* **classificationReason**: 'InaccurateData' | 'IncorrectAlertLogic' | 'SuspiciousActivity' | 'SuspiciousButExpected': The classification reason the incident was closed with
* **labels**: [IncidentLabel](#incidentlabel)[]: List of labels to add to the incident
* **owner**: [IncidentOwnerInfo](#incidentownerinfo): Information on the user an incident is assigned to
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium': The severity of the incident
* **status**: 'Active' | 'Closed' | 'New': The status of the incident

## IncidentLabel
### Properties
* **labelName**: string (Required): The name of the label
* **labelType**: 'System' | 'User' (ReadOnly): The type of the label

## IncidentOwnerInfo
### Properties
* **assignedTo**: string: The name of the user the incident is assigned to.
* **email**: string: The email of the user the incident is assigned to.
* **objectId**: string: The object id of the user the incident is assigned to.
* **userPrincipalName**: string: The user principal name of the user the incident is assigned to.

## AutomationRuleRunPlaybookActionConfiguration
### Properties
* **logicAppResourceId**: string: The resource id of the playbook resource
* **tenantId**: string: The tenant id of the playbook resource

## ClientInfo
### Properties
* **email**: string: The email of the client.
* **name**: string: The name of the client.
* **objectId**: string: The object id of the client.
* **userPrincipalName**: string: The user principal name of the client.

## AutomationRuleTriggeringLogic
### Properties
* **conditions**: [AutomationRuleCondition](#automationrulecondition)[]: The conditions to evaluate to determine if the automation rule should be triggered on a given object
* **expirationTimeUtc**: string: Determines when the automation rule should automatically expire and be disabled.
* **isEnabled**: bool (Required): Determines whether the automation rule is enabled or disabled.
* **triggersOn**: 'Incidents' (Required): The type of object the automation rule triggers on
* **triggersWhen**: 'Created' (Required): The type of event the automation rule triggers on

## AutomationRuleCondition
* **Discriminator**: conditionType

### Base Properties
### AutomationRulePropertyValuesCondition
#### Properties
* **conditionProperties**: [AutomationRulePropertyValuesConditionProperties](#automationrulepropertyvaluesconditionproperties) (Required): The configuration of the automation rule condition
* **conditionType**: 'Property' (Required): The type of the automation rule condition


## AutomationRulePropertyValuesConditionProperties
### Properties
* **operator**: 'Contains' | 'EndsWith' | 'Equals' | 'NotContains' | 'NotEndsWith' | 'NotEquals' | 'NotStartsWith' | 'StartsWith': The operator to use for evaluation the condition
* **propertyName**: 'AccountAadTenantId' | 'AccountAadUserId' | 'AccountNTDomain' | 'AccountName' | 'AccountObjectGuid' | 'AccountPUID' | 'AccountSid' | 'AccountUPNSuffix' | 'AzureResourceResourceId' | 'AzureResourceSubscriptionId' | 'CloudApplicationAppId' | 'CloudApplicationAppName' | 'DNSDomainName' | 'FileDirectory' | 'FileHashValue' | 'FileName' | 'HostAzureID' | 'HostNTDomain' | 'HostName' | 'HostNetBiosName' | 'HostOSVersion' | 'IPAddress' | 'IncidentDescription' | 'IncidentProviderName' | 'IncidentRelatedAnalyticRuleIds' | 'IncidentSeverity' | 'IncidentStatus' | 'IncidentTactics' | 'IncidentTitle' | 'IoTDeviceId' | 'IoTDeviceModel' | 'IoTDeviceName' | 'IoTDeviceOperatingSystem' | 'IoTDeviceType' | 'IoTDeviceVendor' | 'MailMessageDeliveryAction' | 'MailMessageDeliveryLocation' | 'MailMessageP1Sender' | 'MailMessageP2Sender' | 'MailMessageRecipient' | 'MailMessageSenderIP' | 'MailMessageSubject' | 'MailboxDisplayName' | 'MailboxPrimaryAddress' | 'MailboxUPN' | 'MalwareCategory' | 'MalwareName' | 'ProcessCommandLine' | 'ProcessId' | 'RegistryKey' | 'RegistryValueData' | 'Url': The property to evaluate in an automation rule property condition
* **propertyValues**: string[]: The values to use for evaluating the condition

## BookmarkProperties
### Properties
* **created**: string: The time the bookmark was created
* **createdBy**: [UserInfo](#userinfo): User information that made some action
* **displayName**: string (Required): The display name of the bookmark
* **eventTime**: string: The bookmark event time
* **incidentInfo**: [IncidentInfo](#incidentinfo): Describes related incident information for the bookmark
* **labels**: string[]: List of labels relevant to this bookmark
* **notes**: string: The notes of the bookmark
* **query**: string (Required): The query of the bookmark.
* **queryEndTime**: string: The end time for the query
* **queryResult**: string: The query result of the bookmark.
* **queryStartTime**: string: The start time for the query
* **updated**: string: The last time the bookmark was updated
* **updatedBy**: [UserInfo](#userinfo): User information that made some action

## UserInfo
### Properties
* **email**: string (ReadOnly): The email of the user.
* **name**: string (ReadOnly): The name of the user.
* **objectId**: string: The object id of the user.

## IncidentInfo
### Properties
* **incidentId**: string: Incident Id
* **relationName**: string: Relation Name
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium': The severity of the incident
* **title**: string: The title of the incident

## RelationProperties
### Properties
* **relatedResourceId**: string (Required): The resource ID of the related resource
* **relatedResourceKind**: string (ReadOnly): The resource kind of the related resource
* **relatedResourceName**: string (ReadOnly): The name of the related resource
* **relatedResourceType**: string (ReadOnly): The resource type of the related resource

## CaseProperties
### Properties
* **caseNumber**: int (ReadOnly): a sequential number
* **closedReasonText**: string: the case close reason details
* **closeReason**: 'Dismissed' | 'FalsePositive' | 'Other' | 'Resolved' | 'TruePositive': The reason the case was closed
* **createdTimeUtc**: string (ReadOnly): The time the case was created
* **description**: string: The description of the case
* **endTimeUtc**: string: The end time of the case
* **labels**: string[]: List of labels relevant to this case
* **lastComment**: string (ReadOnly): the last comment in the case
* **lastUpdatedTimeUtc**: string (ReadOnly): The last time the case was updated
* **metrics**: [CasePropertiesMetrics](#casepropertiesmetrics) (ReadOnly): Dictionary of metrics, for example the number of alerts in the case
* **owner**: [UserInfo](#userinfo): User information that made some action
* **relatedAlertIds**: string[] (ReadOnly): List of related alert identifiers
* **relatedAlertProductNames**: string[] (ReadOnly): List of related alert product names
* **severity**: 'Critical' | 'High' | 'Informational' | 'Low' | 'Medium' (Required): The severity of the case
* **startTimeUtc**: string: The start time of the case
* **status**: 'Closed' | 'Draft' | 'InProgress' | 'New' (Required): The status of the case
* **tactics**: 'Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation'[] (ReadOnly): The tactics associated with case
* **title**: string (Required): The title of the case
* **totalComments**: int (ReadOnly): the number of total comments in the case

## CasePropertiesMetrics
### Properties
### Additional Properties
* **Additional Properties Type**: int

## CaseCommentProperties
### Properties
* **createdTimeUtc**: string (ReadOnly): The time the comment was created
* **message**: string (Required): The comment message
* **userInfo**: [UserInfo](#userinfo) (ReadOnly): User information that made some action

## RelationsModelInputProperties
### Properties
* **bookmarkId**: string (ReadOnly): The case related bookmark id
* **bookmarkName**: string (ReadOnly): The case related bookmark name
* **caseIdentifier**: string (ReadOnly): The case identifier
* **relationName**: string: Name of relation
* **sourceRelationNode**: [RelationNode](#relationnode) (WriteOnly): Relation node
* **targetRelationNode**: [RelationNode](#relationnode) (WriteOnly): Relation node

## RelationNode
### Properties
* **etag**: string (WriteOnly): Etag for relation node
* **relationAdditionalProperties**: [RelationNodeRelationAdditionalProperties](#relationnoderelationadditionalproperties) (WriteOnly): Additional set of properties
* **relationNodeId**: string (WriteOnly): Relation Node Id
* **relationNodeKind**: 'Bookmark' | 'Case' (ReadOnly, WriteOnly): The type of relation node

## RelationNodeRelationAdditionalProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IncidentProperties
### Properties
* **additionalData**: [IncidentAdditionalData](#incidentadditionaldata) (ReadOnly): Incident additional data property bag.
* **classification**: 'BenignPositive' | 'FalsePositive' | 'TruePositive' | 'Undetermined': The reason the incident was closed
* **classificationComment**: string: Describes the reason the incident was closed
* **classificationReason**: 'InaccurateData' | 'IncorrectAlertLogic' | 'SuspiciousActivity' | 'SuspiciousButExpected': The classification reason the incident was closed with
* **createdTimeUtc**: string (ReadOnly): The time the incident was created
* **description**: string: The description of the incident
* **firstActivityTimeUtc**: string: The time of the first activity in the incident
* **incidentNumber**: int (ReadOnly): A sequential number
* **incidentUrl**: string (ReadOnly): The deep-link url to the incident in Azure portal
* **labels**: [IncidentLabel](#incidentlabel)[]: List of labels relevant to this incident
* **lastActivityTimeUtc**: string: The time of the last activity in the incident
* **lastModifiedTimeUtc**: string (ReadOnly): The last time the incident was updated
* **owner**: [IncidentOwnerInfo](#incidentownerinfo): Information on the user an incident is assigned to
* **providerIncidentId**: string: The incident ID assigned by the incident provider
* **providerName**: string: The name of the source provider that generated the incident
* **relatedAnalyticRuleIds**: string[] (ReadOnly): List of resource ids of Analytic rules related to the incident
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' (Required): The severity of the incident
* **status**: 'Active' | 'Closed' | 'New' (Required): The status of the incident
* **title**: string (Required): The title of the incident

## IncidentAdditionalData
### Properties
* **alertProductNames**: string[] (ReadOnly): List of product names of alerts in the incident
* **alertsCount**: int (ReadOnly): The number of alerts in the incident
* **bookmarksCount**: int (ReadOnly): The number of bookmarks in the incident
* **commentsCount**: int (ReadOnly): The number of comments in the incident
* **tactics**: 'Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Impact' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation'[] (ReadOnly): The tactics associated with incident

## IncidentCommentProperties
### Properties
* **author**: [ClientInfo](#clientinfo) (ReadOnly): Information on the client (user or application) that made some action
* **createdTimeUtc**: string (ReadOnly): The time the comment was created
* **lastModifiedTimeUtc**: string (ReadOnly): The time the comment was updated
* **message**: string (Required): The comment message

## ThreatIntelligenceIndicatorProperties
### Properties
* **additionalData**: [EntityCommonPropertiesAdditionalData](#entitycommonpropertiesadditionaldata) (ReadOnly, WriteOnly): A bag of custom fields that should be part of the entity and will be presented to the user.
* **confidence**: int (WriteOnly): Confidence of threat intelligence entity
* **created**: string (WriteOnly): Created by
* **createdByRef**: string (WriteOnly): Created by reference of threat intelligence entity
* **defanged**: bool (WriteOnly): Is threat intelligence entity defanged
* **description**: string (WriteOnly): Description of a threat intelligence entity
* **displayName**: string (WriteOnly): Display name of a threat intelligence entity
* **extensions**: [ThreatIntelligenceIndicatorPropertiesExtensions](#threatintelligenceindicatorpropertiesextensions) (WriteOnly): Extensions map
* **externalId**: string (WriteOnly): External ID of threat intelligence entity
* **externalLastUpdatedTimeUtc**: string (WriteOnly): External last updated time in UTC
* **externalReferences**: [ThreatIntelligenceExternalReference](#threatintelligenceexternalreference)[] (WriteOnly): External References
* **friendlyName**: string (ReadOnly, WriteOnly): The graph item display name which is a short humanly readable description of the graph item instance. This property is optional and might be system generated.
* **granularMarkings**: [ThreatIntelligenceGranularMarkingModel](#threatintelligencegranularmarkingmodel)[] (WriteOnly): Granular Markings
* **indicatorTypes**: string[] (WriteOnly): Indicator types of threat intelligence entities
* **killChainPhases**: [ThreatIntelligenceKillChainPhase](#threatintelligencekillchainphase)[] (WriteOnly): Kill chain phases
* **labels**: string[] (WriteOnly): Labels  of threat intelligence entity
* **language**: string (WriteOnly): Language of threat intelligence entity
* **lastUpdatedTimeUtc**: string (WriteOnly): Last updated time in UTC
* **modified**: string (WriteOnly): Modified by
* **objectMarkingRefs**: string[] (WriteOnly): Threat intelligence entity object marking references
* **parsedPattern**: [ThreatIntelligenceParsedPattern](#threatintelligenceparsedpattern)[] (WriteOnly): Parsed patterns
* **pattern**: string (WriteOnly): Pattern of a threat intelligence entity
* **patternType**: string (WriteOnly): Pattern type of a threat intelligence entity
* **patternVersion**: string (WriteOnly): Pattern version of a threat intelligence entity
* **revoked**: bool (WriteOnly): Is threat intelligence entity revoked
* **source**: string (WriteOnly): Source of a threat intelligence entity
* **threatIntelligenceTags**: string[] (WriteOnly): List of tags
* **threatTypes**: string[] (WriteOnly): Threat types
* **validFrom**: string (WriteOnly): Valid from
* **validUntil**: string (WriteOnly): Valid until

## EntityCommonPropertiesAdditionalData
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ThreatIntelligenceIndicatorPropertiesExtensions
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ThreatIntelligenceExternalReference
### Properties
* **description**: string (WriteOnly): External reference description
* **externalId**: string (WriteOnly): External reference ID
* **hashes**: [ThreatIntelligenceExternalReferenceHashes](#threatintelligenceexternalreferencehashes) (WriteOnly): External reference hashes
* **sourceName**: string (WriteOnly): External reference source name
* **url**: string (WriteOnly): External reference URL

## ThreatIntelligenceExternalReferenceHashes
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ThreatIntelligenceGranularMarkingModel
### Properties
* **language**: string (WriteOnly): Language granular marking model
* **markingRef**: int (WriteOnly): marking reference granular marking model
* **selectors**: string[] (WriteOnly): granular marking model selectors

## ThreatIntelligenceKillChainPhase
### Properties
* **killChainName**: string (WriteOnly): Kill chainName name
* **phaseName**: string (WriteOnly): Phase name

## ThreatIntelligenceParsedPattern
### Properties
* **patternTypeKey**: string (WriteOnly): Pattern type key
* **patternTypeValues**: [ThreatIntelligenceParsedPatternTypeValue](#threatintelligenceparsedpatterntypevalue)[] (WriteOnly): Pattern type keys

## ThreatIntelligenceParsedPatternTypeValue
### Properties
* **value**: string (WriteOnly): Value of parsed pattern
* **valueType**: string (WriteOnly): Type of the value

## WatchlistProperties
### Properties
* **contentType**: string: The content type of the raw content. Example : text/csv or text/tsv
* **created**: string: The time the watchlist was created
* **createdBy**: [UserInfo](#userinfo): User information that made some action
* **defaultDuration**: string: The default duration of a watchlist (in ISO 8601 duration format)
* **description**: string: A description of the watchlist
* **displayName**: string (Required): The display name of the watchlist
* **isDeleted**: bool: A flag that indicates if the watchlist is deleted or not
* **labels**: string[]: List of labels relevant to this watchlist
* **numberOfLinesToSkip**: int: The number of lines in a csv/tsv content to skip before the header
* **provider**: string (Required): The provider of the watchlist
* **rawContent**: string: The raw content that represents to watchlist items to create. In case of csv/tsv content type, it's the content of the file that will parsed by the endpoint
* **source**: 'Local file' | 'Remote storage' (Required): The source of the watchlist
* **tenantId**: string: The tenantId where the watchlist belongs to
* **updated**: string: The last time the watchlist was updated
* **updatedBy**: [UserInfo](#userinfo): User information that made some action
* **uploadStatus**: string: The status of the Watchlist upload : New, InProgress or Complete. Pls note : When a Watchlist upload status is equal to InProgress, the Watchlist cannot be deleted
* **watchlistAlias**: string: The alias of the watchlist
* **watchlistId**: string: The id (a Guid) of the watchlist
* **watchlistItemsCount**: int: The number of Watchlist Items in the Watchlist
* **watchlistType**: string: The type of the watchlist

## WatchlistItemProperties
### Properties
* **created**: string: The time the watchlist item was created
* **createdBy**: [UserInfo](#userinfo): User information that made some action
* **entityMapping**: any: Any object
* **isDeleted**: bool: A flag that indicates if the watchlist item is deleted or not
* **itemsKeyValue**: any (Required): Any object
* **tenantId**: string: The tenantId to which the watchlist item belongs to
* **updated**: string: The last time the watchlist item was updated
* **updatedBy**: [UserInfo](#userinfo): User information that made some action
* **watchlistItemId**: string: The id (a Guid) of the watchlist item
* **watchlistItemType**: string: The type of the watchlist item

