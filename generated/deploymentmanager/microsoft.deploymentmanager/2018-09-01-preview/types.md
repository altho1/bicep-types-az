# Microsoft.DeploymentManager @ 2018-09-01-preview

## Resource Microsoft.DeploymentManager/artifactSources@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ArtifactSourceProperties](#artifactsourceproperties): The properties that define the artifact source.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DeploymentManager/artifactSources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DeploymentManager/rollouts@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity) (Required): Identity for the resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RolloutRequestProperties](#rolloutrequestproperties) (Required): The properties for defining a rollout.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DeploymentManager/rollouts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DeploymentManager/serviceTopologies@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServiceTopologyResourceProperties](#servicetopologyresourceproperties) (Required): The properties that define the service topology.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DeploymentManager/serviceTopologies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DeploymentManager/serviceTopologies/services@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServiceResourceProperties](#serviceresourceproperties) (Required): The properties that define a service in a service topology.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DeploymentManager/serviceTopologies/services' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DeploymentManager/serviceTopologies/services/serviceUnits@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServiceUnitResourceProperties](#serviceunitresourceproperties) (Required): The properties that define the service unit.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DeploymentManager/serviceTopologies/services/serviceUnits' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DeploymentManager/steps@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StepProperties](#stepproperties) (Required): The properties of a step resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DeploymentManager/steps' (ReadOnly, DeployTimeConstant): The resource type

## ArtifactSourceProperties
### Properties
* **artifactRoot**: string: The path from the location that the 'authentication' property [say, a SAS URI to the blob container] refers to, to the location of the artifacts. This can be used to differentiate different versions of the artifacts. Or, different types of artifacts like binaries or templates. The location referenced by the authentication property concatenated with this optional artifactRoot path forms the artifact source location where the artifacts are expected to be found.
* **authentication**: [Authentication](#authentication) (Required): Defines the authentication method and properties to access the artifacts.
* **sourceType**: string (Required): The type of artifact source used.

## Authentication
* **Discriminator**: type

### Base Properties
### SasAuthentication
#### Properties
* **properties**: [SasProperties](#sasproperties): The properties that define SAS authentication.
* **type**: 'Sas' (Required): The authentication type


## SasProperties
### Properties
* **sasUri**: string (Required): The SAS URI to the Azure Storage blob container. Any offset from the root of the container to where the artifacts are located can be defined in the artifactRoot.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Identity
### Properties
* **identityIds**: string[] (Required): The list of identities.
* **type**: string (Required): The identity type.

## RolloutRequestProperties
### Properties
* **artifactSourceId**: string: The reference to the artifact source resource Id where the payload is located.
* **buildVersion**: string (Required): The version of the build being deployed.
* **operationInfo**: [RolloutOperationInfo](#rolloutoperationinfo) (ReadOnly): Detailed runtime information of the rollout.
* **services**: [Service](#service)[] (ReadOnly): The detailed information on the services being deployed.
* **status**: string (ReadOnly): The current status of the rollout.
* **stepGroups**: [Step](#step)[] (Required): The list of step groups that define the orchestration.
* **targetServiceTopologyId**: string (Required): The resource Id of the service topology from which service units are being referenced in step groups to be deployed.
* **totalRetryAttempts**: int (ReadOnly): The cardinal count of total number of retries performed on the rollout at a given time.

## RolloutOperationInfo
### Properties
* **endTime**: string (ReadOnly): The start time of the rollout in UTC. This property will not be set if the rollout has not completed yet.
* **error**: [CloudErrorBody](#clouderrorbody) (ReadOnly): Detailed error information of any failure.
* **retryAttempt**: int (ReadOnly): The ordinal count of the number of retry attempts on a rollout. 0 if no retries of the rollout have been performed. If the rollout is updated with a PUT, this count is reset to 0.
* **skipSucceededOnRetry**: bool (ReadOnly): True, if all steps that succeeded on the previous run/attempt were chosen to be skipped in this retry attempt. False, otherwise.
* **startTime**: string (ReadOnly): The start time of the rollout in UTC.

## CloudErrorBody
### Properties
* **code**: string (ReadOnly): Error code string.
* **details**: [CloudErrorBody](#clouderrorbody)[] (ReadOnly): More detailed error information.
* **message**: string (ReadOnly): Descriptive error information.
* **target**: string (ReadOnly): Error target

## Service
### Properties
* **name**: string (ReadOnly): Name of the service.
* **serviceUnits**: [ServiceUnit](#serviceunit)[] (ReadOnly): The detailed information about the units that make up the service.
* **targetLocation**: string (ReadOnly): The Azure location to which the resources in the service belong to or should be deployed to.
* **targetSubscriptionId**: string (ReadOnly): The subscription to which the resources in the service belong to or should be deployed to.

## ServiceUnit
### Properties
* **artifacts**: [ServiceUnitArtifacts](#serviceunitartifacts) (ReadOnly): Defines the artifacts of a service unit.
* **deploymentMode**: 'Complete' | 'Incremental' (ReadOnly): Describes the type of ARM deployment to be performed on the resource.
* **name**: string (ReadOnly): Name of the service unit.
* **steps**: [RolloutStep](#rolloutstep)[] (ReadOnly): Detailed step information, if present.
* **targetResourceGroup**: string (ReadOnly): The Azure Resource Group to which the resources in the service unit belong to or should be deployed to.

## ServiceUnitArtifacts
### Properties
* **parametersArtifactSourceRelativePath**: string: The path to the ARM parameters file relative to the artifact source.
* **parametersUri**: string: The full URI of the ARM parameters file with the SAS token.
* **templateArtifactSourceRelativePath**: string: The path to the ARM template file relative to the artifact source.
* **templateUri**: string: The full URI of the ARM template file with the SAS token.

## RolloutStep
### Properties
* **messages**: [Message](#message)[] (ReadOnly): Supplementary informative messages during rollout.
* **name**: string (ReadOnly): Name of the step.
* **operationInfo**: [StepOperationInfo](#stepoperationinfo) (ReadOnly): Detailed information of a specific step run.
* **resourceOperations**: [ResourceOperation](#resourceoperation)[] (ReadOnly): Set of resource operations that were performed, if any, on an Azure resource.
* **status**: string (ReadOnly): Current state of the step.
* **stepGroup**: string (ReadOnly): The step group the current step is part of.

## Message
### Properties
* **message**: string (ReadOnly): The actual message text.
* **timeStamp**: string (ReadOnly): Time in UTC this message was provided.

## StepOperationInfo
### Properties
* **correlationId**: string (ReadOnly): Unique identifier to track the request for ARM-based resources.
* **deploymentName**: string (ReadOnly): The name of the ARM deployment initiated as part of the step.
* **endTime**: string (ReadOnly): End time of the action in UTC.
* **error**: [CloudErrorBody](#clouderrorbody) (ReadOnly): Detailed error information of any failure.
* **lastUpdatedTime**: string (ReadOnly): Last time in UTC this operation was updated.
* **startTime**: string (ReadOnly): Start time of the action in UTC.

## ResourceOperation
### Properties
* **operationId**: string (ReadOnly): Unique identifier of the operation. For ARM resources, this is the operationId obtained from ARM service.
* **provisioningState**: string (ReadOnly): State of the resource deployment. For ARM resources, this is the current provisioning state of the resource.
* **resourceName**: string (ReadOnly): Name of the resource as specified in the artifacts. For ARM resources, this is the name of the resource specified in the template.
* **resourceType**: string (ReadOnly): Type of the resource as specified in the artifacts. For ARM resources, this is the type of the resource specified in the template.
* **statusCode**: string (ReadOnly): Http status code of the operation.
* **statusMessage**: string (ReadOnly): Descriptive information of the resource operation.

## Step
### Properties
* **dependsOnStepGroups**: string[]: The list of step group names on which this step group depends on.
* **deploymentTargetId**: string (Required): The resource Id of service unit to be deployed. The service unit should be from the service topology referenced in targetServiceTopologyId
* **name**: string (Required): The name of the step group.
* **postDeploymentSteps**: [PrePostStep](#prepoststep)[]: The list of steps to be run after deploying the target.
* **preDeploymentSteps**: [PrePostStep](#prepoststep)[]: The list of steps to be run before deploying the target.

## PrePostStep
### Properties
* **stepId**: string (Required): The resource Id of the step to be run.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServiceTopologyResourceProperties
### Properties
* **artifactSourceId**: string: The resource Id of the artifact source that contains the artifacts that can be referenced in the service units.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServiceResourceProperties
### Properties
* **targetLocation**: string (Required): The Azure location to which the resources in the service belong to or should be deployed to.
* **targetSubscriptionId**: string (Required): The subscription to which the resources in the service belong to or should be deployed to.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServiceUnitResourceProperties
### Properties
* **artifacts**: [ServiceUnitArtifacts](#serviceunitartifacts): Defines the artifacts of a service unit.
* **deploymentMode**: 'Complete' | 'Incremental' (Required): Describes the type of ARM deployment to be performed on the resource.
* **targetResourceGroup**: string (Required): The Azure Resource Group to which the resources in the service unit belong to or should be deployed to.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StepProperties
* **Discriminator**: stepType

### Base Properties
### WaitStepProperties
#### Properties
* **attributes**: [WaitStepAttributes](#waitstepattributes): The parameters for the wait step.
* **stepType**: 'Wait' (Required): The type of step.


## WaitStepAttributes
### Properties
* **duration**: string (Required): The duration in ISO 8601 format of how long the wait should be.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

