# Microsoft.Web @ 2016-09-01

## Resource Microsoft.Web/hostingEnvironments@2016-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **location**: string (Required): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AppServiceEnvironment](#appserviceenvironment): Description of an App Service Environment.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Web/hostingEnvironments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/hostingEnvironments/multiRolePools@2016-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [WorkerPool](#workerpool): Worker pool of an App Service Environment.
* **sku**: [SkuDescription](#skudescription): Description of a SKU for a scalable resource.
* **type**: 'Microsoft.Web/hostingEnvironments/multiRolePools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/hostingEnvironments/workerPools@2016-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkerPool](#workerpool): Worker pool of an App Service Environment.
* **sku**: [SkuDescription](#skudescription): Description of a SKU for a scalable resource.
* **type**: 'Microsoft.Web/hostingEnvironments/workerPools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/serverfarms@2016-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **location**: string (Required): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AppServicePlanProperties](#appserviceplanproperties): AppServicePlan resource specific properties
* **sku**: [SkuDescription](#skudescription): Description of a SKU for a scalable resource.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Web/serverfarms' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/serverfarms/virtualNetworkConnections/gateways@2016-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VnetGatewayProperties](#vnetgatewayproperties): VnetGateway resource specific properties
* **type**: 'Microsoft.Web/serverfarms/virtualNetworkConnections/gateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Web/serverfarms/virtualNetworkConnections/routes@2016-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (WriteOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VnetRouteProperties](#vnetrouteproperties) (WriteOnly): VnetRoute resource specific properties
* **type**: 'Microsoft.Web/serverfarms/virtualNetworkConnections/routes' (ReadOnly, DeployTimeConstant): The resource type

## AppServiceEnvironment
### Properties
* **allowedMultiSizes**: string (ReadOnly): List of comma separated strings describing which VM sizes are allowed for front-ends.
* **allowedWorkerSizes**: string (ReadOnly): List of comma separated strings describing which VM sizes are allowed for workers.
* **apiManagementAccountId**: string: API Management Account associated with the App Service Environment.
* **clusterSettings**: [NameValuePair](#namevaluepair)[]: Custom settings for changing the behavior of the App Service Environment.
* **databaseEdition**: string (ReadOnly): Edition of the metadata database for the App Service Environment, e.g. "Standard".
* **databaseServiceObjective**: string (ReadOnly): Service objective of the metadata database for the App Service Environment, e.g. "S0".
* **defaultFrontEndScaleFactor**: int (ReadOnly): Default Scale Factor for FrontEnds.
* **dnsSuffix**: string: DNS suffix of the App Service Environment.
* **dynamicCacheEnabled**: bool: True/false indicating whether the App Service Environment is suspended. The environment can be suspended e.g. when the management endpoint is no longer available
(most likely because NSG blocked the incoming traffic).
* **environmentCapacities**: [StampCapacity](#stampcapacity)[] (ReadOnly): Current total, used, and available worker capacities.
* **environmentIsHealthy**: bool (ReadOnly): True/false indicating whether the App Service Environment is healthy.
* **environmentStatus**: string (ReadOnly): Detailed message about with results of the last check of the App Service Environment.
* **frontEndScaleFactor**: int: Scale factor for front-ends.
* **internalLoadBalancingMode**: 'None' | 'Publishing' | 'Web': Specifies which endpoints to serve internally in the Virtual Network for the App Service Environment.
* **ipsslAddressCount**: int: Number of IP SSL addresses reserved for the App Service Environment.
* **lastAction**: string (ReadOnly): Last deployment action on the App Service Environment.
* **lastActionResult**: string (ReadOnly): Result of the last deployment action on the App Service Environment.
* **location**: string (Required): Location of the App Service Environment, e.g. "West US".
* **maximumNumberOfMachines**: int (ReadOnly): Maximum number of VMs in the App Service Environment.
* **multiRoleCount**: int: Number of front-end instances.
* **multiSize**: string: Front-end VM size, e.g. "Medium", "Large".
* **name**: string (Required): Name of the App Service Environment.
* **networkAccessControlList**: [NetworkAccessControlEntry](#networkaccesscontrolentry)[]: Access control list for controlling traffic to the App Service Environment.
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' (ReadOnly): Provisioning state of the App Service Environment.
* **resourceGroup**: string (ReadOnly): Resource group of the App Service Environment.
* **status**: 'Deleting' | 'Preparing' | 'Ready' | 'Scaling' (ReadOnly): Current status of the App Service Environment.
* **subscriptionId**: string (ReadOnly): Subscription of the App Service Environment.
* **suspended**: bool: <code>true</code> if the App Service Environment is suspended; otherwise, <code>false</code>. The environment can be suspended, e.g. when the management endpoint is no longer available
 (most likely because NSG blocked the incoming traffic).
* **upgradeDomains**: int (ReadOnly): Number of upgrade domains of the App Service Environment.
* **userWhitelistedIpRanges**: string[]: User added ip ranges to whitelist on ASE db
* **vipMappings**: [VirtualIPMapping](#virtualipmapping)[] (ReadOnly): Description of IP SSL mapping for the App Service Environment.
* **virtualNetwork**: [VirtualNetworkProfile](#virtualnetworkprofile) (Required): Specification for using a Virtual Network.
* **vnetName**: string: Name of the Virtual Network for the App Service Environment.
* **vnetResourceGroupName**: string: Resource group of the Virtual Network.
* **vnetSubnetName**: string: Subnet of the Virtual Network.
* **workerPools**: [WorkerPool](#workerpool)[] (Required): Description of worker pools with worker size IDs, VM sizes, and number of workers in each pool.

## NameValuePair
### Properties
* **name**: string: Pair name.
* **value**: string: Pair value.

## StampCapacity
### Properties
* **availableCapacity**: int: Available capacity (# of machines, bytes of storage etc...).
* **computeMode**: 'Dedicated' | 'Dynamic' | 'Shared': Shared/dedicated workers.
* **excludeFromCapacityAllocation**: bool: If <code>true</code>, it includes basic apps.
Basic apps are not used for capacity allocation.
* **isApplicableForAllComputeModes**: bool: <code>true</code> if capacity is applicable for all apps; otherwise, <code>false</code>.
* **name**: string: Name of the stamp.
* **siteMode**: string: Shared or Dedicated.
* **totalCapacity**: int: Total capacity (# of machines, bytes of storage etc...).
* **unit**: string: Name of the unit.
* **workerSize**: 'D1' | 'D2' | 'D3' | 'Default' | 'Large' | 'Medium' | 'Small': Size of the machines.
* **workerSizeId**: int: Size ID of machines: 
0 - Small
1 - Medium
2 - Large

## NetworkAccessControlEntry
### Properties
* **action**: 'Deny' | 'Permit': Action object.
* **description**: string: Description of network access control entry.
* **order**: int: Order of precedence.
* **remoteSubnet**: string: Remote subnet.

## VirtualIPMapping
### Properties
* **internalHttpPort**: int: Internal HTTP port.
* **internalHttpsPort**: int: Internal HTTPS port.
* **inUse**: bool: Is virtual IP mapping in use.
* **virtualIP**: string: Virtual IP address.

## VirtualNetworkProfile
### Properties
* **id**: string: Resource id of the Virtual Network.
* **name**: string (ReadOnly): Name of the Virtual Network (read-only).
* **subnet**: string: Subnet within the Virtual Network.
* **type**: string (ReadOnly): Resource type of the Virtual Network (read-only).

## WorkerPool
### Properties
* **computeMode**: 'Dedicated' | 'Dynamic' | 'Shared': Shared/dedicated workers.
* **instanceNames**: string[] (ReadOnly): Names of all instances in the worker pool (read only).
* **workerCount**: int: Number of instances in the worker pool.
* **workerSize**: string: VM size of the worker pool instances.
* **workerSizeId**: int: Worker size ID for referencing this worker pool.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SkuDescription
### Properties
* **capabilities**: [Capability](#capability)[]: Capabilities of the SKU, e.g., is traffic manager enabled?
* **capacity**: int: Current number of instances assigned to the resource.
* **family**: string: Family code of the resource SKU.
* **locations**: string[]: Locations of the SKU.
* **name**: string: Name of the resource SKU.
* **size**: string: Size specifier of the resource SKU.
* **skuCapacity**: [SkuCapacity](#skucapacity): Description of the App Service plan scale options.
* **tier**: string: Service tier of the resource SKU.

## Capability
### Properties
* **name**: string: Name of the SKU capability.
* **reason**: string: Reason of the SKU capability.
* **value**: string: Value of the SKU capability.

## SkuCapacity
### Properties
* **default**: int: Default number of workers for this App Service plan SKU.
* **maximum**: int: Maximum number of workers for this App Service plan SKU.
* **minimum**: int: Minimum number of workers for this App Service plan SKU.
* **scaleType**: string: Available scale configurations for an App Service plan.

## AppServicePlanProperties
### Properties
* **adminSiteName**: string: App Service plan administration site.
* **geoRegion**: string (ReadOnly): Geographical location for the App Service plan.
* **hostingEnvironmentProfile**: [HostingEnvironmentProfile](#hostingenvironmentprofile): Specification for an App Service Environment to use for this resource.
* **isSpot**: bool: If <code>true</code>, this App Service Plan owns spot instances.
* **maximumNumberOfWorkers**: int (ReadOnly): Maximum number of instances that can be assigned to this App Service plan.
* **name**: string (Required): Name for the App Service plan.
* **numberOfSites**: int (ReadOnly): Number of apps assigned to this App Service plan.
* **perSiteScaling**: bool: If <code>true</code>, apps assigned to this App Service plan can be scaled independently.
If <code>false</code>, apps assigned to this App Service plan will scale to all instances of the plan.
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' (ReadOnly): Provisioning state of the App Service Environment.
* **reserved**: bool: If Linux app service plan <code>true</code>, <code>false</code> otherwise.
* **resourceGroup**: string (ReadOnly): Resource group of the App Service plan.
* **spotExpirationTime**: string: The time when the server farm expires. Valid only if it is a spot server farm.
* **status**: 'Creating' | 'Pending' | 'Ready' (ReadOnly): App Service plan status.
* **subscription**: string (ReadOnly): App Service plan subscription.
* **targetWorkerCount**: int: Scaling worker count.
* **targetWorkerSizeId**: int: Scaling worker size ID.
* **workerTierName**: string: Target worker tier assigned to the App Service plan.

## HostingEnvironmentProfile
### Properties
* **id**: string: Resource ID of the App Service Environment.
* **name**: string (ReadOnly): Name of the App Service Environment.
* **type**: string (ReadOnly): Resource type of the App Service Environment.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VnetGatewayProperties
### Properties
* **vnetName**: string: The Virtual Network name.
* **vpnPackageUri**: string (Required, WriteOnly): The URI where the VPN package can be downloaded.

## VnetRouteProperties
### Properties
* **endAddress**: string (WriteOnly): The ending address for this route. If the start address is specified in CIDR notation, this must be omitted.
* **name**: string (WriteOnly): The name of this route. This is only returned by the server and does not need to be set by the client.
* **routeType**: 'DEFAULT' | 'INHERITED' | 'STATIC' (WriteOnly): The type of route this is:
DEFAULT - By default, every app has routes to the local address ranges specified by RFC1918
INHERITED - Routes inherited from the real Virtual Network routes
STATIC - Static route set on the app only

These values will be used for syncing an app's routes with those from a Virtual Network.
* **startAddress**: string (WriteOnly): The starting address for this route. This may also include a CIDR notation, in which case the end address must not be specified.

