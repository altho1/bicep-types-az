# Microsoft.AAD @ 2021-03-01

## Resource Microsoft.AAD/domainServices@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Resource etag
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DomainServiceProperties](#domainserviceproperties): Properties of the Domain Service.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.AAD/domainServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Aad/domainServices/ouContainer@2021-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **accountName**: string (WriteOnly): The account name
* **apiVersion**: '2021-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource etag
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **password**: string (WriteOnly): The account password
* **properties**: [OuContainerProperties](#oucontainerproperties) (ReadOnly): Properties of the OuContainer.
* **spn**: string (WriteOnly): The account spn
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags
* **type**: 'Microsoft.Aad/domainServices/ouContainer' (ReadOnly, DeployTimeConstant): The resource type

## DomainServiceProperties
### Properties
* **deploymentId**: string (ReadOnly): Deployment Id
* **domainConfigurationType**: string: Domain Configuration Type
* **domainName**: string: The name of the Azure domain that the user would like to deploy Domain Services to.
* **domainSecuritySettings**: [DomainSecuritySettings](#domainsecuritysettings): Domain Security Settings
* **filteredSync**: 'Disabled' | 'Enabled': Enabled or Disabled flag to turn on Group-based filtered sync
* **ldapsSettings**: [LdapsSettings](#ldapssettings): Secure LDAP Settings
* **migrationProperties**: [MigrationProperties](#migrationproperties) (ReadOnly): Migration Properties
* **notificationSettings**: [NotificationSettings](#notificationsettings): Settings for notification
* **provisioningState**: string (ReadOnly): the current deployment or provisioning state, which only appears in the response.
* **replicaSets**: [ReplicaSet](#replicaset)[]: List of ReplicaSets
* **resourceForestSettings**: [ResourceForestSettings](#resourceforestsettings): Settings for Resource Forest
* **sku**: string: Sku Type
* **syncOwner**: string (ReadOnly): SyncOwner ReplicaSet Id
* **tenantId**: string (ReadOnly): Azure Active Directory Tenant Id
* **version**: int (ReadOnly): Data Model Version

## DomainSecuritySettings
### Properties
* **kerberosArmoring**: 'Disabled' | 'Enabled': A flag to determine whether or not KerberosArmoring is enabled or disabled.
* **kerberosRc4Encryption**: 'Disabled' | 'Enabled': A flag to determine whether or not KerberosRc4Encryption is enabled or disabled.
* **ntlmV1**: 'Disabled' | 'Enabled': A flag to determine whether or not NtlmV1 is enabled or disabled.
* **syncKerberosPasswords**: 'Disabled' | 'Enabled': A flag to determine whether or not SyncKerberosPasswords is enabled or disabled.
* **syncNtlmPasswords**: 'Disabled' | 'Enabled': A flag to determine whether or not SyncNtlmPasswords is enabled or disabled.
* **syncOnPremPasswords**: 'Disabled' | 'Enabled': A flag to determine whether or not SyncOnPremPasswords is enabled or disabled.
* **tlsV1**: 'Disabled' | 'Enabled': A flag to determine whether or not TlsV1 is enabled or disabled.

## LdapsSettings
### Properties
* **certificateNotAfter**: string (ReadOnly): NotAfter DateTime of configure ldaps certificate.
* **certificateThumbprint**: string (ReadOnly): Thumbprint of configure ldaps certificate.
* **externalAccess**: 'Disabled' | 'Enabled': A flag to determine whether or not Secure LDAP access over the internet is enabled or disabled.
* **ldaps**: 'Disabled' | 'Enabled': A flag to determine whether or not Secure LDAP is enabled or disabled.
* **pfxCertificate**: string: The certificate required to configure Secure LDAP. The parameter passed here should be a base64encoded representation of the certificate pfx file.
* **pfxCertificatePassword**: string: The password to decrypt the provided Secure LDAP certificate pfx file.
* **publicCertificate**: string (ReadOnly): Public certificate used to configure secure ldap.

## MigrationProperties
### Properties
* **migrationProgress**: [MigrationProgress](#migrationprogress) (ReadOnly): Migration Progress
* **oldSubnetId**: string (ReadOnly): Old Subnet Id
* **oldVnetSiteId**: string (ReadOnly): Old Vnet Site Id

## MigrationProgress
### Properties
* **completionPercentage**: int: Completion Percentage
* **progressMessage**: string: Progress Message

## NotificationSettings
### Properties
* **additionalRecipients**: string[]: The list of additional recipients
* **notifyDcAdmins**: 'Disabled' | 'Enabled': Should domain controller admins be notified
* **notifyGlobalAdmins**: 'Disabled' | 'Enabled': Should global admins be notified

## ReplicaSet
### Properties
* **domainControllerIpAddress**: string[] (ReadOnly): List of Domain Controller IP Address
* **externalAccessIpAddress**: string (ReadOnly): External access ip address.
* **healthAlerts**: [HealthAlert](#healthalert)[] (ReadOnly): List of Domain Health Alerts
* **healthLastEvaluated**: string (ReadOnly): Last domain evaluation run DateTime
* **healthMonitors**: [HealthMonitor](#healthmonitor)[] (ReadOnly): List of Domain Health Monitors
* **location**: string: Virtual network location
* **replicaSetId**: string (ReadOnly): ReplicaSet Id
* **serviceStatus**: string (ReadOnly): Status of Domain Service instance
* **subnetId**: string: The name of the virtual network that Domain Services will be deployed on. The id of the subnet that Domain Services will be deployed on. /virtualNetwork/vnetName/subnets/subnetName.
* **vnetSiteId**: string (ReadOnly): Virtual network site id

## HealthAlert
### Properties
* **id**: string (ReadOnly): Health Alert Id
* **issue**: string (ReadOnly): Health Alert Issue
* **lastDetected**: string (ReadOnly): Health Alert Last Detected DateTime
* **name**: string (ReadOnly): Health Alert Name
* **raised**: string (ReadOnly): Health Alert Raised DateTime
* **resolutionUri**: string (ReadOnly): Health Alert TSG Link
* **severity**: string (ReadOnly): Health Alert Severity

## HealthMonitor
### Properties
* **details**: string (ReadOnly): Health Monitor Details
* **id**: string (ReadOnly): Health Monitor Id
* **name**: string (ReadOnly): Health Monitor Name

## ResourceForestSettings
### Properties
* **resourceForest**: string: Resource Forest
* **settings**: [ForestTrust](#foresttrust)[]: List of settings for Resource Forest

## ForestTrust
### Properties
* **friendlyName**: string: Friendly Name
* **remoteDnsIps**: string: Remote Dns ips
* **trustDirection**: string: Trust Direction
* **trustedDomainFqdn**: string: Trusted Domain FQDN
* **trustPassword**: string: Trust Password

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## OuContainerProperties
### Properties
* **accounts**: [ContainerAccount](#containeraccount)[] (ReadOnly): The list of container accounts
* **containerId**: string (ReadOnly): The OuContainer name
* **deploymentId**: string (ReadOnly): The Deployment id
* **distinguishedName**: string (ReadOnly): Distinguished Name of OuContainer instance
* **domainName**: string (ReadOnly): The domain name of Domain Services.
* **provisioningState**: string (ReadOnly): The current deployment or provisioning state, which only appears in the response.
* **serviceStatus**: string (ReadOnly): Status of OuContainer instance
* **tenantId**: string (ReadOnly): Azure Active Directory tenant id

## ContainerAccount
### Properties
* **accountName**: string (ReadOnly): The account name
* **password**: string (ReadOnly): The account password
* **spn**: string (ReadOnly): The account spn

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

