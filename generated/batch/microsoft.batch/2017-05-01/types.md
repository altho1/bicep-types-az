# Microsoft.Batch @ 2017-05-01

## Resource Microsoft.Batch/batchAccounts@2017-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The region in which to create the account.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BatchAccountCreateProperties](#batchaccountcreateproperties): The properties of a Batch account.
* **tags**: [BatchAccountCreateParametersTags](#batchaccountcreateparameterstags): The user-specified tags associated with the account.
* **type**: 'Microsoft.Batch/batchAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Batch/batchAccounts/applications@2017-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **allowUpdates**: bool: A value indicating whether packages within the application may be overwritten using the same version string.
* **apiVersion**: '2017-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **defaultVersion**: string (ReadOnly): The package to use if a client requests the application but does not specify a version.
* **displayName**: string: The display name for the application.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **packages**: [ApplicationPackage](#applicationpackage)[] (ReadOnly): The list of packages under this application.
* **type**: 'Microsoft.Batch/batchAccounts/applications' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Batch/batchAccounts/applications/versions@2017-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **format**: string (ReadOnly): The format of the application package, if the package is active.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **lastActivationTime**: string (ReadOnly): The time at which the package was last activated, if the package is active.
* **name**: string (Required, DeployTimeConstant): The resource name
* **state**: 'active' | 'pending' | 'unmapped' (ReadOnly): The current state of the application package.
* **storageUrl**: string (ReadOnly): The URL for the application package in Azure Storage.
* **storageUrlExpiry**: string (ReadOnly): The UTC time at which the Azure Storage URL will expire.
* **type**: 'Microsoft.Batch/batchAccounts/applications/versions' (ReadOnly, DeployTimeConstant): The resource type
* **version**: string (ReadOnly): The version of the application package.

## BatchAccountCreateProperties
### Properties
* **accountEndpoint**: string (ReadOnly): The account endpoint used to interact with the Batch service.
* **activeJobAndJobScheduleQuota**: int (ReadOnly): The active job and job schedule quota for this Batch account.
* **autoStorage**: [AutoStorageBaseProperties](#autostoragebaseproperties): The properties related to the auto-storage account.
* **dedicatedCoreQuota**: int (ReadOnly): The dedicated core quota for this Batch account.
* **keyVaultReference**: [KeyVaultReference](#keyvaultreference): Identifies the Azure key vault associated with a Batch account.
* **lowPriorityCoreQuota**: int (ReadOnly): The low-priority core quota for this Batch account.
* **poolAllocationMode**: 'BatchService' | 'UserSubscription': The allocation mode for creating pools in the Batch account.
* **poolQuota**: int (ReadOnly): The pool quota for this Batch account.
* **provisioningState**: 'Cancelled' | 'Creating' | 'Deleting' | 'Failed' | 'Invalid' | 'Succeeded' (ReadOnly): The provisioned state of the resource

## AutoStorageBaseProperties
### Properties
* **lastKeySync**: string (ReadOnly): The UTC time at which storage keys were last synchronized with the Batch account.
* **storageAccountId**: string (Required): The resource ID of the storage account to be used for auto-storage account.

## KeyVaultReference
### Properties
* **id**: string (Required): The resource ID of the Azure key vault associated with the Batch account.
* **url**: string (Required): The URL of the Azure key vault associated with the Batch account.

## BatchAccountCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApplicationPackage
### Properties
* **format**: string (ReadOnly): The format of the application package, if the package is active.
* **id**: string (ReadOnly): The ID of the application.
* **lastActivationTime**: string (ReadOnly): The time at which the package was last activated, if the package is active.
* **state**: 'active' | 'pending' | 'unmapped' (ReadOnly): The current state of the application package.
* **storageUrl**: string (ReadOnly): The URL for the application package in Azure Storage.
* **storageUrlExpiry**: string (ReadOnly): The UTC time at which the Azure Storage URL will expire.
* **version**: string (ReadOnly): The version of the application package.

