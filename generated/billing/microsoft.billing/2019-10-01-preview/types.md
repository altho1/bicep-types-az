# Microsoft.Billing @ 2019-10-01-preview

## Resource Microsoft.Billing/billingAccounts/billingProfiles@2019-10-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **address**: [AddressDetails](#addressdetails) (WriteOnly): Address details.
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **displayName**: string (WriteOnly): The name of the billing profile.
* **enabledAzurePlans**: [AzurePlan](#azureplan)[] (WriteOnly): Enabled azure plans for the billing profile.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **invoiceEmailOptIn**: bool (WriteOnly): Flag controlling whether the invoices for the billing profile are sent through email.
* **name**: string (Required, DeployTimeConstant): The resource name
* **poNumber**: string (WriteOnly): The purchase order name that will appear on the invoices generated for the billing profile.
* **properties**: [BillingProfileProperties](#billingprofileproperties) (ReadOnly): The properties of the billing profile.
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingProfiles/instructions@2019-10-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [InstructionProperties](#instructionproperties): A billing instruction used during invoice generation.
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/instructions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections@2019-10-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **displayName**: string (WriteOnly): The name of the invoice section.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [InvoiceSectionProperties](#invoicesectionproperties) (ReadOnly): The properties of an invoice section.
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingProfiles/policies@2019-10-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [PolicyProperties](#policyproperties): The properties of a policy.
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/policies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingRoleAssignments@2019-10-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BillingRoleAssignmentProperties](#billingroleassignmentproperties): The properties of the role assignment.
* **type**: 'Microsoft.Billing/billingAccounts/billingRoleAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/customers/policies@2019-10-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [CustomerPolicyProperties](#customerpolicyproperties): The properties of a customer's policy.
* **type**: 'Microsoft.Billing/billingAccounts/customers/policies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/departments/billingRoleAssignments@2019-10-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BillingRoleAssignmentProperties](#billingroleassignmentproperties): The properties of the role assignment.
* **type**: 'Microsoft.Billing/billingAccounts/departments/billingRoleAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/enrollmentAccounts/billingRoleAssignments@2019-10-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BillingRoleAssignmentProperties](#billingroleassignmentproperties): The properties of the role assignment.
* **type**: 'Microsoft.Billing/billingAccounts/enrollmentAccounts/billingRoleAssignments' (ReadOnly, DeployTimeConstant): The resource type

## AddressDetails
### Properties
* **addressLine1**: string (WriteOnly): Address line 1.
* **addressLine2**: string (WriteOnly): Address line 2.
* **addressLine3**: string (WriteOnly): Address line 3.
* **city**: string (WriteOnly): Address city.
* **companyName**: string (WriteOnly): Company name.
* **country**: string (WriteOnly): Country code uses ISO2, 2-digit format.
* **firstName**: string (WriteOnly): First name.
* **lastName**: string (WriteOnly): Last name.
* **postalCode**: string (WriteOnly): Postal code.
* **region**: string (WriteOnly): Address region.

## AzurePlan
### Properties
* **skuDescription**: string (ReadOnly, WriteOnly): The sku description.
* **skuId**: string (WriteOnly): The sku id.

## BillingProfileProperties
### Properties
* **address**: [AddressDetails](#addressdetails) (ReadOnly): Address details.
* **billingRelationshipType**: 'CSPPartner' | 'Direct' | 'IndirectCustomer' | 'IndirectPartner' (ReadOnly): Identifies which services and purchases are paid by a billing profile.
* **currency**: string (ReadOnly): The currency in which the charges for the billing profile are billed.
* **displayName**: string (ReadOnly): The name of the billing profile.
* **enabledAzurePlans**: [AzurePlan](#azureplan)[] (ReadOnly): Information about the enabled azure plans.
* **indirectRelationshipInfo**: [IndirectRelationshipInfo](#indirectrelationshipinfo) (ReadOnly): The billing profile details of the partner of the customer for an indirect motion.
* **invoiceDay**: int (ReadOnly): The day of the month when the invoice for the billing profile is generated.
* **invoiceEmailOptIn**: bool (ReadOnly): Flag controlling whether the invoices for the billing profile are sent through email.
* **invoiceSections**: [InvoiceSection](#invoicesection)[] (ReadOnly): The invoice sections associated to the billing profile.
* **poNumber**: string (ReadOnly): The purchase order name that will appear on the invoices generated for the billing profile.
* **spendingLimit**: 'Off' | 'On' (ReadOnly): The billing profile spending limit.
* **status**: 'Active' | 'Disabled' | 'Warned' (ReadOnly): The status of the billing profile.
* **statusReasonCode**: 'PastDue' | 'SpendingLimitExpired' | 'SpendingLimitReached' (ReadOnly): Reason for the specified billing profile status.
* **targetClouds**: 'USGov' | 'USNat' | 'USSec'[] (ReadOnly): Identifies the cloud environments that are associated with a billing profile. This is a system managed optional field and gets updated as the billing profile gets associated with accounts in various clouds.

## IndirectRelationshipInfo
### Properties
* **billingAccountName**: string (ReadOnly): The billing account name of the partner or the customer for an indirect motion.
* **billingProfileName**: string (ReadOnly): The billing profile name of the partner or the customer for an indirect motion.
* **displayName**: string (ReadOnly): The display name of the partner or customer for an indirect motion.

## InvoiceSection
### Properties
* **id**: string (ReadOnly): Resource Id.
* **name**: string (ReadOnly): Resource name.
* **properties**: [InvoiceSectionProperties](#invoicesectionproperties) (ReadOnly): The properties of an invoice section.
* **type**: string (ReadOnly): Resource type.

## InvoiceSectionProperties
### Properties
* **displayName**: string (ReadOnly): The name of the invoice section.
* **state**: 'Active' | 'Restricted' (ReadOnly): Identifies the state of an invoice section.
* **targetCloud**: 'USGov' | 'USNat' | 'USSec' (ReadOnly): Possible cloud environments.

## InstructionProperties
### Properties
* **amount**: int (Required): The amount budgeted for this billing instruction.
* **creationDate**: string: The date this billing instruction was created.
* **endDate**: string (Required): The date this billing instruction is no longer in effect.
* **startDate**: string (Required): The date this billing instruction goes into effect.

## PolicyProperties
### Properties
* **marketplacePurchases**: 'AllAllowed' | 'NotAllowed' | 'OnlyFreeAllowed': The policy that controls whether Azure marketplace purchases are allowed for a billing profile.
* **reservationPurchases**: 'Allowed' | 'NotAllowed': The policy that controls whether Azure reservation purchases are allowed for a billing profile.
* **viewCharges**: 'Allowed' | 'NotAllowed': The policy that controls whether users with Azure RBAC access to a subscription can view its charges.

## BillingRoleAssignmentProperties
### Properties
* **createdByPrincipalId**: string (ReadOnly): The principal Id of the user who created the role assignment.
* **createdByPrincipalTenantId**: string (ReadOnly): The tenant Id of the user who created the role assignment.
* **createdByUserEmailAddress**: string (ReadOnly): The email address of the user who created the role assignment. This is supported only for billing accounts with agreement type Enterprise Agreement.
* **createdOn**: string (ReadOnly): The date the role assignment was created.
* **name**: string (ReadOnly): The name of the role assignment.
* **principalId**: string: The principal id of the user to whom the role was assigned.
* **principalTenantId**: string: The principal tenant id of the user to whom the role was assigned.
* **roleDefinitionId**: string: The ID of the role definition.
* **scope**: string (ReadOnly): The scope at which the role was assigned.
* **userAuthenticationType**: string: The authentication type of the user, whether Organization or MSA, of the user to whom the role was assigned. This is supported only for billing accounts with agreement type Enterprise Agreement.
* **userEmailAddress**: string: The email address of the user to whom the role was assigned. This is supported only for billing accounts with agreement type Enterprise Agreement.

## CustomerPolicyProperties
### Properties
* **viewCharges**: 'Allowed' | 'NotAllowed': The policy that controls whether the users in customer's organization can view charges at pay-as-you-go prices.

