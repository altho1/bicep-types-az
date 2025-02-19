# Microsoft.DesktopVirtualization @ 2021-07-12

## Resource Microsoft.DesktopVirtualization/applicationGroups@2021-07-12
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-12' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): The etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ResourceModelWithAllowedPropertySetIdentity](#resourcemodelwithallowedpropertysetidentity)
* **kind**: string: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
* **location**: string: The geo-location where the resource lives
* **managedBy**: string: The fully qualified resource ID of the resource that manages this resource. Indicates if this resource is managed by another Azure resource. If this is present, complete mode deployment will not delete the resource if it is removed from the template since it is managed by another resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **plan**: [ResourceModelWithAllowedPropertySetPlan](#resourcemodelwithallowedpropertysetplan)
* **properties**: [ApplicationGroupProperties](#applicationgroupproperties) (Required): Schema for ApplicationGroup properties.
* **sku**: [ResourceModelWithAllowedPropertySetSku](#resourcemodelwithallowedpropertysetsku)
* **tags**: [ResourceModelWithAllowedPropertySetTags](#resourcemodelwithallowedpropertysettags): Resource tags.
* **type**: 'Microsoft.DesktopVirtualization/applicationGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DesktopVirtualization/applicationGroups/applications@2021-07-12
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-12' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationProperties](#applicationproperties) (Required): Schema for Application properties.
* **type**: 'Microsoft.DesktopVirtualization/applicationGroups/applications' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DesktopVirtualization/hostPools@2021-07-12
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-12' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): The etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ResourceModelWithAllowedPropertySetIdentity](#resourcemodelwithallowedpropertysetidentity)
* **kind**: string: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
* **location**: string: The geo-location where the resource lives
* **managedBy**: string: The fully qualified resource ID of the resource that manages this resource. Indicates if this resource is managed by another Azure resource. If this is present, complete mode deployment will not delete the resource if it is removed from the template since it is managed by another resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **plan**: [ResourceModelWithAllowedPropertySetPlan](#resourcemodelwithallowedpropertysetplan)
* **properties**: [HostPoolProperties](#hostpoolproperties) (Required): Properties of HostPool.
* **sku**: [ResourceModelWithAllowedPropertySetSku](#resourcemodelwithallowedpropertysetsku)
* **tags**: [ResourceModelWithAllowedPropertySetTags](#resourcemodelwithallowedpropertysettags): Resource tags.
* **type**: 'Microsoft.DesktopVirtualization/hostPools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DesktopVirtualization/hostPools/msixPackages@2021-07-12
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-12' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MsixPackageProperties](#msixpackageproperties) (Required): Schema for MSIX Package properties.
* **type**: 'Microsoft.DesktopVirtualization/hostPools/msixPackages' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DesktopVirtualization/scalingPlans@2021-07-12
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-12' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): The etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ResourceModelWithAllowedPropertySetIdentity](#resourcemodelwithallowedpropertysetidentity)
* **kind**: string: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
* **location**: string: The geo-location where the resource lives
* **managedBy**: string: The fully qualified resource ID of the resource that manages this resource. Indicates if this resource is managed by another Azure resource. If this is present, complete mode deployment will not delete the resource if it is removed from the template since it is managed by another resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **plan**: [ResourceModelWithAllowedPropertySetPlan](#resourcemodelwithallowedpropertysetplan)
* **properties**: [ScalingPlanProperties](#scalingplanproperties): Scaling plan properties.
* **sku**: [ResourceModelWithAllowedPropertySetSku](#resourcemodelwithallowedpropertysetsku)
* **tags**: [ResourceModelWithAllowedPropertySetTags](#resourcemodelwithallowedpropertysettags): Resource tags.
* **type**: 'Microsoft.DesktopVirtualization/scalingPlans' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DesktopVirtualization/workspaces@2021-07-12
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-12' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): The etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ResourceModelWithAllowedPropertySetIdentity](#resourcemodelwithallowedpropertysetidentity)
* **kind**: string: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
* **location**: string: The geo-location where the resource lives
* **managedBy**: string: The fully qualified resource ID of the resource that manages this resource. Indicates if this resource is managed by another Azure resource. If this is present, complete mode deployment will not delete the resource if it is removed from the template since it is managed by another resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **plan**: [ResourceModelWithAllowedPropertySetPlan](#resourcemodelwithallowedpropertysetplan)
* **properties**: [WorkspaceProperties](#workspaceproperties): Schema for Workspace properties.
* **sku**: [ResourceModelWithAllowedPropertySetSku](#resourcemodelwithallowedpropertysetsku)
* **tags**: [ResourceModelWithAllowedPropertySetTags](#resourcemodelwithallowedpropertysettags): Resource tags.
* **type**: 'Microsoft.DesktopVirtualization/workspaces' (ReadOnly, DeployTimeConstant): The resource type

## ResourceModelWithAllowedPropertySetIdentity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'SystemAssigned': The identity type.

## ResourceModelWithAllowedPropertySetPlan
### Properties
* **name**: string (Required): A user defined name of the 3rd Party Artifact that is being procured.
* **product**: string (Required): The 3rd Party artifact that is being procured. E.g. NewRelic. Product maps to the OfferID specified for the artifact at the time of Data Market onboarding.
* **promotionCode**: string: A publisher provided promotion code as provisioned in Data Market for the said product/artifact.
* **publisher**: string (Required): The publisher of the 3rd Party Artifact that is being bought. E.g. NewRelic
* **version**: string: The version of the desired product/artifact.

## ApplicationGroupProperties
### Properties
* **applicationGroupType**: 'Desktop' | 'RemoteApp' (Required): Resource Type of ApplicationGroup.
* **cloudPcResource**: bool (ReadOnly): Is cloud pc resource.
* **description**: string: Description of ApplicationGroup.
* **friendlyName**: string: Friendly name of ApplicationGroup.
* **hostPoolArmPath**: string (Required): HostPool arm path of ApplicationGroup.
* **migrationRequest**: [MigrationRequestProperties](#migrationrequestproperties): Properties for arm migration.
* **objectId**: string (ReadOnly): ObjectId of ApplicationGroup. (internal use)
* **workspaceArmPath**: string (ReadOnly): Workspace arm path of ApplicationGroup.

## MigrationRequestProperties
### Properties
* **migrationPath**: string: The path to the legacy object to migrate.
* **operation**: 'Complete' | 'Hide' | 'Revoke' | 'Start' | 'Unhide': The type of operation for migration.

## ResourceModelWithAllowedPropertySetSku
### Properties
* **capacity**: int: If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
* **family**: string: If the service has different generations of hardware, for the same SKU, then that can be captured here.
* **name**: string (Required): The name of the SKU. Ex - P3. It is typically a letter+number code
* **size**: string: The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
* **tier**: 'Basic' | 'Free' | 'Premium' | 'Standard': This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.

## ResourceModelWithAllowedPropertySetTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApplicationProperties
### Properties
* **applicationType**: 'InBuilt' | 'MsixApplication': Resource Type of Application.
* **commandLineArguments**: string: Command Line Arguments for Application.
* **commandLineSetting**: 'Allow' | 'DoNotAllow' | 'Require' (Required): Specifies whether this published application can be launched with command line arguments provided by the client, command line arguments specified at publish time, or no command line arguments at all.
* **description**: string: Description of Application.
* **filePath**: string: Specifies a path for the executable file for the application.
* **friendlyName**: string: Friendly name of Application.
* **iconContent**: any (ReadOnly): the icon a 64 bit string as a byte array.
* **iconHash**: string (ReadOnly): Hash of the icon.
* **iconIndex**: int: Index of the icon.
* **iconPath**: string: Path to icon.
* **msixPackageApplicationId**: string: Specifies the package application Id for MSIX applications
* **msixPackageFamilyName**: string: Specifies the package family name for MSIX applications
* **objectId**: string (ReadOnly): ObjectId of Application. (internal use)
* **showInPortal**: bool: Specifies whether to show the RemoteApp program in the RD Web Access server.

## HostPoolProperties
### Properties
* **applicationGroupReferences**: string[] (ReadOnly): List of applicationGroup links.
* **cloudPcResource**: bool (ReadOnly): Is cloud pc resource.
* **customRdpProperty**: string: Custom rdp property of HostPool.
* **description**: string: Description of HostPool.
* **friendlyName**: string: Friendly name of HostPool.
* **hostPoolType**: 'BYODesktop' | 'Personal' | 'Pooled' (Required): HostPool type for desktop.
* **loadBalancerType**: 'BreadthFirst' | 'DepthFirst' | 'Persistent' (Required): The type of the load balancer.
* **maxSessionLimit**: int: The max session limit of HostPool.
* **migrationRequest**: [MigrationRequestProperties](#migrationrequestproperties): Properties for arm migration.
* **objectId**: string (ReadOnly): ObjectId of HostPool. (internal use)
* **personalDesktopAssignmentType**: 'Automatic' | 'Direct': PersonalDesktopAssignment type for HostPool.
* **preferredAppGroupType**: 'Desktop' | 'None' | 'RailApplications' (Required): The type of preferred application group type, default to Desktop Application Group
* **registrationInfo**: [RegistrationInfo](#registrationinfo): Represents a RegistrationInfo definition.
* **ring**: int: The ring number of HostPool.
* **ssoadfsAuthority**: string: URL to customer ADFS server for signing WVD SSO certificates.
* **ssoClientId**: string: ClientId for the registered Relying Party used to issue WVD SSO certificates.
* **ssoClientSecretKeyVaultPath**: string: Path to Azure KeyVault storing the secret used for communication to ADFS.
* **ssoSecretType**: 'Certificate' | 'CertificateInKeyVault' | 'SharedKey' | 'SharedKeyInKeyVault': The type of single sign on Secret Type.
* **startVMOnConnect**: bool: The flag to turn on/off StartVMOnConnect feature.
* **validationEnvironment**: bool: Is validation environment.
* **vmTemplate**: string: VM template for sessionhosts configuration within hostpool.

## RegistrationInfo
### Properties
* **expirationTime**: string: Expiration time of registration token.
* **registrationTokenOperation**: 'Delete' | 'None' | 'Update': The type of resetting the token.
* **token**: string: The registration token base64 encoded string.

## ResourceModelWithAllowedPropertySetTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MsixPackageProperties
### Properties
* **displayName**: string: User friendly Name to be displayed in the portal.
* **imagePath**: string: VHD/CIM image path on Network Share.
* **isActive**: bool: Make this version of the package the active one across the hostpool.
* **isRegularRegistration**: bool: Specifies how to register Package in feed.
* **lastUpdated**: string: Date Package was last updated, found in the appxmanifest.xml.
* **packageApplications**: [MsixPackageApplications](#msixpackageapplications)[]: List of package applications.
* **packageDependencies**: [MsixPackageDependencies](#msixpackagedependencies)[]: List of package dependencies.
* **packageFamilyName**: string: Package Family Name from appxmanifest.xml. Contains Package Name and Publisher name.
* **packageName**: string: Package Name from appxmanifest.xml.
* **packageRelativePath**: string: Relative Path to the package inside the image.
* **version**: string: Package Version found in the appxmanifest.xml.

## MsixPackageApplications
### Properties
* **appId**: string: Package Application Id, found in appxmanifest.xml.
* **appUserModelID**: string: Used to activate Package Application. Consists of Package Name and ApplicationID. Found in appxmanifest.xml.
* **description**: string: Description of Package Application.
* **friendlyName**: string: User friendly name.
* **iconImageName**: string: User friendly name.
* **rawIcon**: any: the icon a 64 bit string as a byte array.
* **rawPng**: any: the icon a 64 bit string as a byte array.

## MsixPackageDependencies
### Properties
* **dependencyName**: string: Name of package dependency.
* **minVersion**: string: Dependency version required.
* **publisher**: string: Name of dependency publisher.

## ScalingPlanProperties
### Properties
* **description**: string: Description of scaling plan.
* **exclusionTag**: string: Exclusion tag for scaling plan.
* **friendlyName**: string: User friendly name of scaling plan.
* **hostPoolReferences**: [ScalingHostPoolReference](#scalinghostpoolreference)[]: List of ScalingHostPoolReference definitions.
* **hostPoolType**: 'BYODesktop' | 'Personal' | 'Pooled': HostPool type for desktop.
* **objectId**: string (ReadOnly): ObjectId of scaling plan. (internal use)
* **schedules**: [ScalingSchedule](#scalingschedule)[]: List of ScalingSchedule definitions.
* **timeZone**: string: Timezone of the scaling plan.

## ScalingHostPoolReference
### Properties
* **hostPoolArmPath**: string: Arm path of referenced hostpool.
* **scalingPlanEnabled**: bool: Is the scaling plan enabled for this hostpool.

## ScalingSchedule
### Properties
* **daysOfWeek**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[]: Set of days of the week on which this schedule is active.
* **name**: string: Name of the scaling schedule.
* **offPeakLoadBalancingAlgorithm**: 'BreadthFirst' | 'DepthFirst': Load balancing algorithm for ramp up period.
* **offPeakStartTime**: string: Starting time for off-peak period.
* **peakLoadBalancingAlgorithm**: 'BreadthFirst' | 'DepthFirst': Load balancing algorithm for ramp up period.
* **peakStartTime**: string: Starting time for peak period.
* **rampDownCapacityThresholdPct**: int: Capacity threshold for ramp down period.
* **rampDownForceLogoffUsers**: bool: Should users be logged off forcefully from hosts.
* **rampDownLoadBalancingAlgorithm**: 'BreadthFirst' | 'DepthFirst': Load balancing algorithm for ramp up period.
* **rampDownMinimumHostsPct**: int: Minimum host percentage for ramp down period.
* **rampDownNotificationMessage**: string: Notification message for users during ramp down period.
* **rampDownStartTime**: string: Starting time for ramp down period.
* **rampDownStopHostsWhen**: 'ZeroActiveSessions' | 'ZeroSessions': Specifies when to stop hosts during ramp down period.
* **rampDownWaitTimeMinutes**: int: Number of minutes to wait to stop hosts during ramp down period.
* **rampUpCapacityThresholdPct**: int: Capacity threshold for ramp up period.
* **rampUpLoadBalancingAlgorithm**: 'BreadthFirst' | 'DepthFirst': Load balancing algorithm for ramp up period.
* **rampUpMinimumHostsPct**: int: Minimum host percentage for ramp up period.
* **rampUpStartTime**: string: Starting time for ramp up period.

## ResourceModelWithAllowedPropertySetTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WorkspaceProperties
### Properties
* **applicationGroupReferences**: string[]: List of applicationGroup resource Ids.
* **cloudPcResource**: bool (ReadOnly): Is cloud pc resource.
* **description**: string: Description of Workspace.
* **friendlyName**: string: Friendly name of Workspace.
* **objectId**: string (ReadOnly): ObjectId of Workspace. (internal use)

## ResourceModelWithAllowedPropertySetTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

