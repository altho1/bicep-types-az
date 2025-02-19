# Microsoft.DataBox @ 2021-08-01-preview

## Resource Microsoft.DataBox/jobs@2021-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ResourceIdentity](#resourceidentity): Msi identity details of the resource
* **location**: string (Required): The location of the resource. This will be one of the supported and registered Azure Regions (e.g. West US, East US, Southeast Asia, etc.). The region of a resource cannot be changed once it is created, but if an identical region is specified on update the request will succeed.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JobProperties](#jobproperties) (Required): Job Properties
* **sku**: [Sku](#sku) (Required): The Sku.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Provides details about resource creation and update time
* **tags**: [ResourceTags](#resourcetags): The list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups).
* **type**: 'Microsoft.DataBox/jobs' (ReadOnly, DeployTimeConstant): The resource type

## ResourceIdentity
### Properties
* **principalId**: string (ReadOnly): Service Principal Id backing the Msi
* **tenantId**: string (ReadOnly): Home Tenant Id
* **type**: string: Identity type
* **userAssignedIdentities**: [ResourceIdentityUserAssignedIdentities](#resourceidentityuserassignedidentities): User Assigned Identities

## ResourceIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string (ReadOnly): The client id of user assigned identity.
* **principalId**: string (ReadOnly): The principal id of user assigned identity.

## JobProperties
### Properties
* **cancellationReason**: string (ReadOnly): Reason for cancellation.
* **deliveryInfo**: [JobDeliveryInfo](#jobdeliveryinfo): Additional delivery info.
* **deliveryType**: 'NonScheduled' | 'Scheduled': Delivery type of Job.
* **details**: [JobDetails](#jobdetails): Job details.
* **error**: [CloudError](#clouderror) (ReadOnly): Cloud error.
* **isCancellable**: bool (ReadOnly): Describes whether the job is cancellable or not.
* **isCancellableWithoutFee**: bool (ReadOnly): Flag to indicate cancellation of scheduled job.
* **isDeletable**: bool (ReadOnly): Describes whether the job is deletable or not.
* **isPrepareToShipEnabled**: bool (ReadOnly): Is Prepare To Ship Enabled on this job
* **isShippingAddressEditable**: bool (ReadOnly): Describes whether the shipping address is editable or not.
* **startTime**: string (ReadOnly): Time at which the job was started in UTC ISO 8601 format.
* **status**: 'Aborted' | 'AtAzureDC' | 'AwaitingShipmentDetails' | 'Cancelled' | 'Completed' | 'CompletedWithErrors' | 'CompletedWithWarnings' | 'Created' | 'DataCopy' | 'Delivered' | 'DeviceOrdered' | 'DevicePrepared' | 'Dispatched' | 'Failed_IssueDetectedAtAzureDC' | 'Failed_IssueReportedAtCustomer' | 'PickedUp' | 'PreparingToShipFromAzureDC' | 'ReadyToDispatchFromAzureDC' | 'ReadyToReceiveAtAzureDC' | 'ShippedToAzureDC' | 'ShippedToCustomer' (ReadOnly): Name of the stage which is in progress.
* **transferType**: 'ExportFromAzure' | 'ImportToAzure' (Required): Type of the transfer.

## JobDeliveryInfo
### Properties
* **scheduledDateTime**: string: Scheduled date time.

## JobDetails
* **Discriminator**: jobDetailsType

### Base Properties
* **actions**: 'MoveToCleanUpDevice' | 'None' | 'Resume'[] (ReadOnly): Available actions on the job.
* **chainOfCustodySasKey**: string (ReadOnly): Shared access key to download the chain of custody logs
* **contactDetails**: [ContactDetails](#contactdetails) (Required): Contact Details.
* **copyLogDetails**: [CopyLogDetails](#copylogdetails)[] (ReadOnly): List of copy log details.
* **datacenterAddress**: [DatacenterAddressResponse](#datacenteraddressresponse) (ReadOnly): Datacenter address for given storage location.
* **dataCenterCode**: 'AM2' | 'AMS06' | 'AMS20' | 'AUH20' | 'AdHoc' | 'BJB' | 'BL20' | 'BL7' | 'BN1' | 'BOM01' | 'BY1' | 'BY2' | 'BY21' | 'BY24' | 'CBR20' | 'CH1' | 'CPQ02' | 'CPQ20' | 'CWL20' | 'CYS04' | 'DSM05' | 'FRA22' | 'HKG20' | 'Invalid' | 'JNB21' | 'JNB22' | 'LON24' | 'MAA01' | 'MEL23' | 'MNZ21' | 'MWH01' | 'ORK70' | 'OSA20' | 'PUS20' | 'SEL20' | 'SEL21' | 'SG2' | 'SHA03' | 'SIN20' | 'SN5' | 'SN8' | 'SSE90' | 'SYD03' | 'SYD23' | 'TYO01' | 'TYO22' | 'YQB20' | 'YTO20' | 'YTO21' | 'ZRH20' (ReadOnly): DataCenter code.
* **dataExportDetails**: [DataExportDetails](#dataexportdetails)[]: Details of the data to be exported from azure.
* **dataImportDetails**: [DataImportDetails](#dataimportdetails)[]: Details of the data to be imported into azure.
* **deliveryPackage**: [PackageShippingDetails](#packageshippingdetails) (ReadOnly): package shipping details
* **expectedDataSizeInTeraBytes**: int: The expected size of the data, which needs to be transferred in this job, in terabytes.
* **jobStages**: [JobStages](#jobstages)[] (ReadOnly): List of stages that run in the job.
* **keyEncryptionKey**: [KeyEncryptionKey](#keyencryptionkey): Encryption key containing details about key to encrypt different keys.
* **lastMitigationActionOnJob**: [LastMitigationActionOnJob](#lastmitigationactiononjob) (ReadOnly): Last Mitigation Action Performed On Job
* **preferences**: [Preferences](#preferences): Preferences related to the order
* **returnPackage**: [PackageShippingDetails](#packageshippingdetails) (ReadOnly): package shipping details
* **reverseShipmentLabelSasKey**: string (ReadOnly): Shared access key to download the return shipment label
* **shippingAddress**: [ShippingAddress](#shippingaddress): Shipping address where customer wishes to receive the device.
### DataBoxJobDetails
#### Properties
* **copyProgress**: [CopyProgress](#copyprogress)[] (ReadOnly): Copy progress per storage account.
* **devicePassword**: string: Set Device password for unlocking Databox. Should not be passed for TransferType:ExportFromAzure jobs. If this is not passed, the service will generate password itself. This will not be returned in Get Call. Password Requirements :  Password must be minimum of 12 and maximum of 64 characters. Password must have at least one uppercase alphabet, one number and one special character. Password cannot have the following characters : IilLoO0 Password can have only alphabets, numbers and these characters : @#\-$%^!+=;:_()]+
* **jobDetailsType**: 'DataBox' (Required): Indicates the type of job details.

### DataBoxCustomerDiskJobDetails
#### Properties
* **copyProgress**: [DataBoxCustomerDiskCopyProgress](#databoxcustomerdiskcopyprogress)[] (ReadOnly): Copy progress per disk.
* **deliverToDcPackageDetails**: [PackageCarrierInfo](#packagecarrierinfo) (ReadOnly): package carrier info
* **enableManifestBackup**: bool: Flag to indicate if disk manifest should be backed-up in the Storage Account.
* **exportDiskDetailsCollection**: [DataBoxCustomerDiskJobDetailsExportDiskDetailsCollection](#databoxcustomerdiskjobdetailsexportdiskdetailscollection) (ReadOnly): Contains the map of disk serial number to the disk details for export jobs.
* **importDiskDetailsCollection**: [DataBoxCustomerDiskJobDetailsImportDiskDetailsCollection](#databoxcustomerdiskjobdetailsimportdiskdetailscollection): Contains the map of disk serial number to the disk details for import jobs.
* **jobDetailsType**: 'DataBoxCustomerDisk' (Required): Indicates the type of job details.
* **returnToCustomerPackageDetails**: [PackageCarrierDetails](#packagecarrierdetails) (Required): Package carrier details.

### DataBoxDiskJobDetails
#### Properties
* **copyProgress**: [DataBoxDiskCopyProgress](#databoxdiskcopyprogress)[] (ReadOnly): Copy progress per disk.
* **disksAndSizeDetails**: [DataBoxDiskJobDetailsDisksAndSizeDetails](#databoxdiskjobdetailsdisksandsizedetails) (ReadOnly): Contains the map of disk serial number to the disk size being used for the job. Is returned only after the disks are shipped to the customer.
* **jobDetailsType**: 'DataBoxDisk' (Required): Indicates the type of job details.
* **passkey**: string: User entered passkey for DataBox Disk job.
* **preferredDisks**: [DataBoxDiskJobDetailsPreferredDisks](#databoxdiskjobdetailspreferreddisks): User preference on what size disks are needed for the job. The map is from the disk size in TB to the count. Eg. {2,5} means 5 disks of 2 TB size. Key is string but will be checked against an int.

### DataBoxHeavyJobDetails
#### Properties
* **copyProgress**: [CopyProgress](#copyprogress)[] (ReadOnly): Copy progress per account.
* **devicePassword**: string: Set Device password for unlocking Databox Heavy. Should not be passed for TransferType:ExportFromAzure jobs. If this is not passed, the service will generate password itself. This will not be returned in Get Call. Password Requirements :  Password must be minimum of 12 and maximum of 64 characters. Password must have at least one uppercase alphabet, one number and one special character. Password cannot have the following characters : IilLoO0 Password can have only alphabets, numbers and these characters : @#\-$%^!+=;:_()]+
* **jobDetailsType**: 'DataBoxHeavy' (Required): Indicates the type of job details.


## ContactDetails
### Properties
* **contactName**: string (Required): Contact name of the person.
* **emailList**: string[] (Required): List of Email-ids to be notified about job progress.
* **mobile**: string: Mobile number of the contact person.
* **notificationPreference**: [NotificationPreference](#notificationpreference)[]: Notification preference for a job stage.
* **phone**: string (Required): Phone number of the contact person.
* **phoneExtension**: string: Phone extension number of the contact person.

## NotificationPreference
### Properties
* **sendNotification**: bool (Required): Notification is required or not.
* **stageName**: 'AtAzureDC' | 'Created' | 'DataCopy' | 'Delivered' | 'DevicePrepared' | 'Dispatched' | 'PickedUp' | 'ShippedToCustomer' (Required): Name of the stage.

## CopyLogDetails
* **Discriminator**: copyLogDetailsType

### Base Properties
### DataBoxAccountCopyLogDetails
#### Properties
* **accountName**: string (ReadOnly): Account name.
* **copyLogDetailsType**: 'DataBox' (Required): Indicates the type of job details.
* **copyLogLink**: string (ReadOnly): Link for copy logs.
* **copyVerboseLogLink**: string (ReadOnly): Link for copy verbose logs. This will be set only when LogCollectionLevel is set to Verbose.

### DataBoxCustomerDiskCopyLogDetails
#### Properties
* **copyLogDetailsType**: 'DataBoxCustomerDisk' (Required): Indicates the type of job details.
* **errorLogLink**: string (ReadOnly): Link for copy error logs.
* **serialNumber**: string (ReadOnly): Disk Serial Number.
* **verboseLogLink**: string (ReadOnly): Link for copy verbose logs.

### DataBoxDiskCopyLogDetails
#### Properties
* **copyLogDetailsType**: 'DataBoxDisk' (Required): Indicates the type of job details.
* **diskSerialNumber**: string (ReadOnly): Disk Serial Number.
* **errorLogLink**: string (ReadOnly): Link for copy error logs.
* **verboseLogLink**: string (ReadOnly): Link for copy verbose logs.

### DataBoxHeavyAccountCopyLogDetails
#### Properties
* **accountName**: string (ReadOnly): Account name.
* **copyLogDetailsType**: 'DataBoxHeavy' (Required): Indicates the type of job details.
* **copyLogLink**: string[] (ReadOnly): Link for copy logs.
* **copyVerboseLogLink**: string[] (ReadOnly): Link for copy verbose logs. This will be set only when the LogCollectionLevel is set to verbose.


## DatacenterAddressResponse
* **Discriminator**: datacenterAddressType

### Base Properties
* **dataCenterAzureLocation**: string (ReadOnly): Azure Location where the Data Center serves primarily.
* **supportedCarriersForReturnShipment**: string[] (ReadOnly): List of supported carriers for return shipment.
### DatacenterAddressInstructionResponse
#### Properties
* **communicationInstruction**: string (ReadOnly): Data center communication instruction
* **datacenterAddressType**: 'DatacenterAddressInstruction' (Required): Data center address type

### DatacenterAddressLocationResponse
#### Properties
* **additionalShippingInformation**: string (ReadOnly): Special instruction for shipping
* **addressType**: string (ReadOnly): Address type
* **city**: string (ReadOnly): City name
* **company**: string (ReadOnly): Company name
* **contactPersonName**: string (ReadOnly): Contact person name
* **country**: string (ReadOnly): name of the country
* **datacenterAddressType**: 'DatacenterAddressLocation' (Required): Data center address type
* **phone**: string (ReadOnly): Phone number
* **phoneExtension**: string (ReadOnly): Phone extension
* **state**: string (ReadOnly): name of the state
* **street1**: string (ReadOnly): Street address line 1
* **street2**: string (ReadOnly): Street address line 2
* **street3**: string (ReadOnly): Street address line 3
* **zip**: string (ReadOnly): Zip code


## DataExportDetails
### Properties
* **accountDetails**: [DataAccountDetails](#dataaccountdetails) (Required): Account details of the data to be transferred
* **logCollectionLevel**: 'Error' | 'Verbose': Level of the logs to be collected.
* **transferConfiguration**: [TransferConfiguration](#transferconfiguration) (Required): Configuration for defining the transfer of data.

## DataAccountDetails
* **Discriminator**: dataAccountType

### Base Properties
* **sharePassword**: string (WriteOnly): Password for all the shares to be created on the device. Should not be passed for TransferType:ExportFromAzure jobs. If this is not passed, the service will generate password itself. This will not be returned in Get Call. Password Requirements :  Password must be minimum of 12 and maximum of 64 characters. Password must have at least one uppercase alphabet, one number and one special character. Password cannot have the following characters : IilLoO0 Password can have only alphabets, numbers and these characters : @#\-$%^!+=;:_()]+
### ManagedDiskDetails
#### Properties
* **dataAccountType**: 'ManagedDisk' (Required): Account Type of the data to be transferred.
* **resourceGroupId**: string (Required): Resource Group Id of the compute disks.
* **stagingStorageAccountId**: string (Required): Resource Id of the storage account that can be used to copy the vhd for staging.

### StorageAccountDetails
#### Properties
* **dataAccountType**: 'StorageAccount' (Required): Account Type of the data to be transferred.
* **storageAccountId**: string (Required): Storage Account Resource Id.


## TransferConfiguration
### Properties
* **transferAllDetails**: [TransferConfigurationTransferAllDetails](#transferconfigurationtransferalldetails): Map of filter type and the details to transfer all data. This field is required only if the TransferConfigurationType is given as TransferAll
* **transferConfigurationType**: 'TransferAll' | 'TransferUsingFilter' (Required): Type of the configuration for transfer.
* **transferFilterDetails**: [TransferConfigurationTransferFilterDetails](#transferconfigurationtransferfilterdetails): Map of filter type and the details to filter. This field is required only if the TransferConfigurationType is given as TransferUsingFilter.

## TransferConfigurationTransferAllDetails
### Properties
* **include**: [TransferAllDetails](#transferalldetails): Details to transfer all data.

## TransferAllDetails
### Properties
* **dataAccountType**: 'ManagedDisk' | 'StorageAccount' (Required): Type of the account.
* **transferAllBlobs**: bool: To indicate if all Azure blobs have to be transferred
* **transferAllFiles**: bool: To indicate if all Azure Files have to be transferred

## TransferConfigurationTransferFilterDetails
### Properties
* **include**: [TransferFilterDetails](#transferfilterdetails): Details of the filtering the transfer of data.

## TransferFilterDetails
### Properties
* **azureFileFilterDetails**: [AzureFileFilterDetails](#azurefilefilterdetails): Filter details to transfer Azure files
* **blobFilterDetails**: [BlobFilterDetails](#blobfilterdetails): Filter details to transfer Azure Blobs
* **dataAccountType**: 'ManagedDisk' | 'StorageAccount' (Required): Type of the account.
* **filterFileDetails**: [FilterFileDetails](#filterfiledetails)[]: Details of the filter files to be used for data transfer.

## AzureFileFilterDetails
### Properties
* **filePathList**: string[]: List of full path of the files to be transferred.
* **filePrefixList**: string[]: Prefix list of the Azure files to be transferred.
* **fileShareList**: string[]: List of file shares to be transferred.

## BlobFilterDetails
### Properties
* **blobPathList**: string[]: List of full path of the blobs to be transferred.
* **blobPrefixList**: string[]: Prefix list of the Azure blobs to be transferred.
* **containerList**: string[]: List of blob containers to be transferred.

## FilterFileDetails
### Properties
* **filterFilePath**: string (Required): Path of the file that contains the details of all items to transfer.
* **filterFileType**: 'AzureBlob' | 'AzureFile' (Required): Type of the filter file.

## DataImportDetails
### Properties
* **accountDetails**: [DataAccountDetails](#dataaccountdetails) (Required): Account details of the data to be transferred
* **logCollectionLevel**: 'Error' | 'Verbose': Level of the logs to be collected.

## PackageShippingDetails
### Properties
* **carrierName**: string (ReadOnly): Name of the carrier.
* **trackingId**: string (ReadOnly): Tracking Id of shipment.
* **trackingUrl**: string (ReadOnly): Url where shipment can be tracked.

## JobStages
### Properties
* **displayName**: string (ReadOnly): Display name of the job stage.
* **jobStageDetails**: any (ReadOnly): Any object
* **stageName**: 'Aborted' | 'AtAzureDC' | 'AwaitingShipmentDetails' | 'Cancelled' | 'Completed' | 'CompletedWithErrors' | 'CompletedWithWarnings' | 'Created' | 'DataCopy' | 'Delivered' | 'DeviceOrdered' | 'DevicePrepared' | 'Dispatched' | 'Failed_IssueDetectedAtAzureDC' | 'Failed_IssueReportedAtCustomer' | 'PickedUp' | 'PreparingToShipFromAzureDC' | 'ReadyToDispatchFromAzureDC' | 'ReadyToReceiveAtAzureDC' | 'ShippedToAzureDC' | 'ShippedToCustomer' (ReadOnly): Name of the stage which is in progress.
* **stageStatus**: 'Cancelled' | 'Cancelling' | 'CustomerActionPerformedForCleanUp' | 'Failed' | 'InProgress' | 'None' | 'Succeeded' | 'SucceededWithErrors' | 'SucceededWithWarnings' | 'WaitingForCustomerAction' | 'WaitingForCustomerActionForCleanUp' | 'WaitingForCustomerActionForKek' (ReadOnly): Status of the job stage.
* **stageTime**: string (ReadOnly): Time for the job stage in UTC ISO 8601 format.

## KeyEncryptionKey
### Properties
* **identityProperties**: [IdentityProperties](#identityproperties): Managed identity properties.
* **kekType**: 'CustomerManaged' | 'MicrosoftManaged' (Required): Type of encryption key used for key encryption.
* **kekUrl**: string: Key encryption key. It is required in case of Customer managed KekType.
* **kekVaultResourceID**: string: Kek vault resource id. It is required in case of Customer managed KekType.

## IdentityProperties
### Properties
* **type**: string: Managed service identity type.
* **userAssigned**: [UserAssignedProperties](#userassignedproperties): User assigned identity properties.

## UserAssignedProperties
### Properties
* **resourceId**: string: Arm resource id for user assigned identity to be used to fetch MSI token.

## LastMitigationActionOnJob
### Properties
* **actionDateTimeInUtc**: string: Action performed date time
* **customerResolution**: 'MoveToCleanUpDevice' | 'None' | 'Resume'
* **isPerformedByCustomer**: bool: Action performed by customer,
possibility is that mitigation might happen by customer or service or by ops

## Preferences
### Properties
* **encryptionPreferences**: [EncryptionPreferences](#encryptionpreferences): Preferences related to the Encryption.
* **preferredDataCenterRegion**: string[]: Preferred data center region.
* **transportPreferences**: [TransportPreferences](#transportpreferences): Preferences related to the shipment logistics of the sku

## EncryptionPreferences
### Properties
* **doubleEncryption**: 'Disabled' | 'Enabled': Defines secondary layer of software-based encryption enablement.

## TransportPreferences
### Properties
* **preferredShipmentType**: 'CustomerManaged' | 'MicrosoftManaged' (Required): Transport Shipment Type supported for given region.

## ShippingAddress
### Properties
* **addressType**: 'Commercial' | 'None' | 'Residential': Type of address.
* **city**: string: Name of the City.
* **companyName**: string: Name of the company.
* **country**: string (Required): Name of the Country.
* **postalCode**: string: Postal code.
* **stateOrProvince**: string: Name of the State or Province.
* **streetAddress1**: string (Required): Street Address line 1.
* **streetAddress2**: string: Street Address line 2.
* **streetAddress3**: string: Street Address line 3.
* **zipExtendedCode**: string: Extended Zip Code.

## CopyProgress
### Properties
* **accountId**: string (ReadOnly): Id of the account where the data needs to be uploaded.
* **bytesProcessed**: int (ReadOnly): To indicate bytes transferred.
* **dataAccountType**: 'ManagedDisk' | 'StorageAccount' (ReadOnly): Type of the account.
* **directoriesErroredOut**: int (ReadOnly): To indicate directories errored out in the job.
* **filesErroredOut**: int (ReadOnly): Number of files which could not be copied
* **filesProcessed**: int (ReadOnly): Number of files processed
* **invalidDirectoriesProcessed**: int (ReadOnly): To indicate directories renamed
* **invalidFileBytesUploaded**: int (ReadOnly): Total amount of data not adhering to azure naming conventions which were processed by automatic renaming
* **invalidFilesProcessed**: int (ReadOnly): Number of files not adhering to azure naming conventions which were processed by automatic renaming
* **isEnumerationInProgress**: bool (ReadOnly): To indicate if enumeration of data is in progress. 
Until this is true, the TotalBytesToProcess may not be valid.
* **renamedContainerCount**: int (ReadOnly): Number of folders not adhering to azure naming conventions which were processed by automatic renaming
* **storageAccountName**: string (ReadOnly): Name of the storage account. This will be empty for data account types other than storage account.
* **totalBytesToProcess**: int (ReadOnly): Total amount of data to be processed by the job.
* **totalFilesToProcess**: int (ReadOnly): Total files to process
* **transferType**: 'ExportFromAzure' | 'ImportToAzure' (ReadOnly): Type of the transfer.

## DataBoxCustomerDiskCopyProgress
### Properties
* **accountId**: string (ReadOnly): Id of the account where the data needs to be uploaded.
* **bytesProcessed**: int (ReadOnly): To indicate bytes transferred.
* **copyStatus**: 'Completed' | 'CompletedWithErrors' | 'DeviceFormatted' | 'DeviceMetadataModified' | 'DriveCorrupted' | 'DriveNotDetected' | 'DriveNotReceived' | 'Failed' | 'HardwareError' | 'InProgress' | 'MetadataFilesModifiedOrRemoved' | 'NotReturned' | 'NotStarted' | 'OtherServiceError' | 'OtherUserError' | 'StorageAccountNotAccessible' | 'UnsupportedData' | 'UnsupportedDrive' (ReadOnly): The Status of the copy
* **dataAccountType**: 'ManagedDisk' | 'StorageAccount' (ReadOnly): Type of the account.
* **directoriesErroredOut**: int (ReadOnly): To indicate directories errored out in the job.
* **filesErroredOut**: int (ReadOnly): Number of files which could not be copied
* **filesProcessed**: int (ReadOnly): Number of files processed
* **invalidDirectoriesProcessed**: int (ReadOnly): To indicate directories renamed
* **invalidFileBytesUploaded**: int (ReadOnly): Total amount of data not adhering to azure naming conventions which were processed by automatic renaming
* **invalidFilesProcessed**: int (ReadOnly): Number of files not adhering to azure naming conventions which were processed by automatic renaming
* **isEnumerationInProgress**: bool (ReadOnly): To indicate if enumeration of data is in progress. 
Until this is true, the TotalBytesToProcess may not be valid.
* **renamedContainerCount**: int (ReadOnly): Number of folders not adhering to azure naming conventions which were processed by automatic renaming
* **serialNumber**: string (ReadOnly): Disk Serial Number.
* **storageAccountName**: string (ReadOnly): Name of the storage account. This will be empty for data account types other than storage account.
* **totalBytesToProcess**: int (ReadOnly): Total amount of data to be processed by the job.
* **totalFilesToProcess**: int (ReadOnly): Total files to process
* **transferType**: 'ExportFromAzure' | 'ImportToAzure' (ReadOnly): Type of the transfer.

## PackageCarrierInfo
### Properties
* **carrierName**: string: Name of the carrier.
* **trackingId**: string: Tracking Id of shipment.

## DataBoxCustomerDiskJobDetailsExportDiskDetailsCollection
### Properties
### Additional Properties
* **Additional Properties Type**: [ExportDiskDetails](#exportdiskdetails)

## ExportDiskDetails
### Properties
* **backupManifestCloudPath**: string (ReadOnly): Path to backed up manifest, only returned if enableManifestBackup is true.
* **manifestFile**: string (ReadOnly): The relative path of the manifest file on the disk.
* **manifestHash**: string (ReadOnly): The Base16-encoded MD5 hash of the manifest file on the disk.

## DataBoxCustomerDiskJobDetailsImportDiskDetailsCollection
### Properties
### Additional Properties
* **Additional Properties Type**: [ImportDiskDetails](#importdiskdetails)

## ImportDiskDetails
### Properties
* **backupManifestCloudPath**: string (ReadOnly): Path to backed up manifest, only returned if enableManifestBackup is true.
* **bitLockerKey**: string (Required): BitLocker key used to encrypt the disk.
* **manifestFile**: string (Required): The relative path of the manifest file on the disk.
* **manifestHash**: string (Required): The Base16-encoded MD5 hash of the manifest file on the disk.

## PackageCarrierDetails
### Properties
* **carrierAccountNumber**: string: Carrier Account Number of customer for customer disk.
* **carrierName**: string: Name of the carrier.
* **trackingId**: string: Tracking Id of shipment.

## DataBoxDiskCopyProgress
### Properties
* **bytesCopied**: int (ReadOnly): Bytes copied during the copy of disk.
* **percentComplete**: int (ReadOnly): Indicates the percentage completed for the copy of the disk.
* **serialNumber**: string (ReadOnly): The serial number of the disk
* **status**: 'Completed' | 'CompletedWithErrors' | 'DeviceFormatted' | 'DeviceMetadataModified' | 'DriveCorrupted' | 'DriveNotDetected' | 'DriveNotReceived' | 'Failed' | 'HardwareError' | 'InProgress' | 'MetadataFilesModifiedOrRemoved' | 'NotReturned' | 'NotStarted' | 'OtherServiceError' | 'OtherUserError' | 'StorageAccountNotAccessible' | 'UnsupportedData' | 'UnsupportedDrive' (ReadOnly): The Status of the copy

## DataBoxDiskJobDetailsDisksAndSizeDetails
### Properties
### Additional Properties
* **Additional Properties Type**: int

## DataBoxDiskJobDetailsPreferredDisks
### Properties
### Additional Properties
* **Additional Properties Type**: int

## CloudError
### Properties
* **additionalInfo**: [AdditionalErrorInfo](#additionalerrorinfo)[] (ReadOnly): Cloud error additional info.
* **code**: string: Cloud error code.
* **details**: [CloudError](#clouderror)[] (ReadOnly): Cloud error details.
* **message**: string: Cloud error message.
* **target**: string: Cloud error target.

## AdditionalErrorInfo
### Properties
* **info**: any: Any object
* **type**: string: Additional error type.

## Sku
### Properties
* **displayName**: string: The display name of the sku.
* **family**: string: The sku family.
* **name**: 'DataBox' | 'DataBoxCustomerDisk' | 'DataBoxDisk' | 'DataBoxHeavy' (Required)

## SystemData
### Properties
* **createdAt**: string (ReadOnly): The timestamp of resource creation (UTC)
* **createdBy**: string (ReadOnly): A string identifier for the identity that created the resource
* **createdByType**: string (ReadOnly): The type of identity that created the resource: user, application, managedIdentity
* **lastModifiedAt**: string (ReadOnly): The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string (ReadOnly): A string identifier for the identity that last modified the resource
* **lastModifiedByType**: string (ReadOnly): The type of identity that last modified the resource: user, application, managedIdentity

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

