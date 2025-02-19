# Microsoft.DataLakeStore @ 2015-10-01-preview

## Resource Microsoft.DataLakeStore/accounts@2015-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [EncryptionIdentity](#encryptionidentity)
* **location**: string: the account regional location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DataLakeStoreAccountProperties](#datalakestoreaccountproperties): Data Lake Store account properties information
* **tags**: [DataLakeStoreAccountTags](#datalakestoreaccounttags): the value of custom properties.
* **type**: 'Microsoft.DataLakeStore/accounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataLakeStore/accounts/firewallRules@2015-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: the firewall rule's regional location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FirewallRuleProperties](#firewallruleproperties): Data Lake Store firewall rule properties information
* **type**: 'Microsoft.DataLakeStore/accounts/firewallRules' (ReadOnly, DeployTimeConstant): The resource type

## EncryptionIdentity
### Properties
* **principalId**: string (ReadOnly): The principal identifier associated with the encryption.
* **tenantId**: string (ReadOnly): The tenant identifier associated with the encryption.
* **type**: 'SystemAssigned': The type of encryption being used. Currently the only supported type is 'SystemAssigned'.

## DataLakeStoreAccountProperties
### Properties
* **creationTime**: string (ReadOnly): the account creation time.
* **defaultGroup**: string: the default owner group for all new folders and files created in the Data Lake Store account.
* **encryptionConfig**: [EncryptionConfig](#encryptionconfig)
* **encryptionProvisioningState**: 'Creating' | 'Succeeded' (ReadOnly): The current state of encryption provisioning for this Data Lake store account.
* **encryptionState**: 'Disabled' | 'Enabled': The current state of encryption for this Data Lake store account.
* **endpoint**: string: the gateway host.
* **lastModifiedTime**: string (ReadOnly): the account last modified time.
* **provisioningState**: 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Patching' | 'Resuming' | 'Running' | 'Succeeded' | 'Suspending' (ReadOnly): the status of the Data Lake Store account while being provisioned.
* **state**: 'active' | 'suspended' (ReadOnly): the status of the Data Lake Store account after provisioning has completed.

## EncryptionConfig
### Properties
* **keyVaultMetaInfo**: [KeyVaultMetaInfo](#keyvaultmetainfo)
* **type**: 'ServiceManaged' | 'UserManaged': The type of encryption configuration being used. Currently the only supported types are 'UserManaged' and 'ServiceManaged'.

## KeyVaultMetaInfo
### Properties
* **encryptionKeyName**: string: The name of the user managed encryption key.
* **encryptionKeyVersion**: string: The version of the user managed encryption key.
* **keyVaultResourceId**: string: The resource identifier for the user managed Key Vault being used to encrypt.

## DataLakeStoreAccountTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## FirewallRuleProperties
### Properties
* **endIpAddress**: string: the end IP address for the firewall rule.
* **startIpAddress**: string: the start IP address for the firewall rule.

