# Microsoft.GuestConfiguration @ 2020-06-25

## Resource Microsoft.GuestConfiguration/guestConfigurationAssignments@2020-06-25
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2020-06-25' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Region where the VM is located.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GuestConfigurationAssignmentProperties](#guestconfigurationassignmentproperties): Guest configuration assignment properties.
* **type**: 'Microsoft.GuestConfiguration/guestConfigurationAssignments' (ReadOnly, DeployTimeConstant): The resource type

## GuestConfigurationAssignmentProperties
### Properties
* **assignmentHash**: string (ReadOnly): Combined hash of the configuration package and parameters.
* **complianceStatus**: 'Compliant' | 'NonCompliant' | 'Pending' (ReadOnly): A value indicating compliance status of the machine for the assigned guest configuration.
* **context**: string: The source which initiated the guest configuration assignment. Ex: Azure Policy
* **guestConfiguration**: [GuestConfigurationNavigation](#guestconfigurationnavigation): Guest configuration is an artifact that encapsulates DSC configuration and its dependencies. The artifact is a zip file containing DSC configuration (as MOF) and dependent resources and other dependencies like modules.
* **lastComplianceStatusChecked**: string (ReadOnly): Date and time when last compliance status was checked.
* **latestAssignmentReport**: [AssignmentReport](#assignmentreport)
* **latestReportId**: string (ReadOnly): Id of the latest report for the guest configuration assignment.
* **parameterHash**: string (ReadOnly): parameter hash for the guest configuration assignment.
* **provisioningState**: 'Canceled' | 'Created' | 'Failed' | 'Succeeded' (ReadOnly): The provisioning state, which only appears in the response.
* **resourceType**: string (ReadOnly): Type of the resource - VMSS / VM
* **targetResourceId**: string (ReadOnly): VM resource Id.
* **vmssVMList**: [VmssvmInfo](#vmssvminfo)[]: The list of VM Compliance data for VMSS

## GuestConfigurationNavigation
### Properties
* **assignmentType**: 'ApplyAndAutoCorrect' | 'ApplyAndMonitor' | 'Audit' | 'DeployAndAutoCorrect': Specifies the assignment type and execution of the configuration. Possible values are Audit, DeployAndAutoCorrect, ApplyAndAutoCorrect and ApplyAndMonitor.
* **configurationParameter**: [ConfigurationParameter](#configurationparameter)[]: The configuration parameters for the guest configuration.
* **configurationProtectedParameter**: [ConfigurationParameter](#configurationparameter)[]: The protected configuration parameters for the guest configuration.
* **configurationSetting**: [ConfigurationSetting](#configurationsetting): Configuration setting of LCM (Local Configuration Manager).
* **contentHash**: string: Combined hash of the guest configuration package and configuration parameters.
* **contentType**: string (ReadOnly): Specifies the content type of the configuration. Possible values could be Builtin or Custom.
* **contentUri**: string: Uri of the storage where guest configuration package is uploaded.
* **kind**: 'DSC': Kind of the guest configuration. For example:DSC
* **name**: string: Name of the guest configuration.
* **version**: string: Version of the guest configuration.

## ConfigurationParameter
### Properties
* **name**: string: Name of the configuration parameter.
* **value**: string: Value of the configuration parameter.

## ConfigurationSetting
### Properties
* **actionAfterReboot**: 'ContinueConfiguration' | 'StopConfiguration': Specifies what happens after a reboot during the application of a configuration. The possible values are ContinueConfiguration and StopConfiguration
* **allowModuleOverwrite**: bool: If true - new configurations downloaded from the pull service are allowed to overwrite the old ones on the target node. Otherwise, false
* **configurationMode**: 'ApplyAndAutoCorrect' | 'ApplyAndMonitor' | 'ApplyOnly': Specifies how the LCM(Local Configuration Manager) actually applies the configuration to the target nodes. Possible values are ApplyOnly, ApplyAndMonitor, and ApplyAndAutoCorrect.
* **configurationModeFrequencyMins**: int: How often, in minutes, the current configuration is checked and applied. This property is ignored if the ConfigurationMode property is set to ApplyOnly. The default value is 15.
* **rebootIfNeeded**: bool: Set this to true to automatically reboot the node after a configuration that requires reboot is applied. Otherwise, you will have to manually reboot the node for any configuration that requires it. The default value is false. To use this setting when a reboot condition is enacted by something other than DSC (such as Windows Installer), combine this setting with the xPendingReboot module.
* **refreshFrequencyMins**: int: The time interval, in minutes, at which the LCM checks a pull service to get updated configurations. This value is ignored if the LCM is not configured in pull mode. The default value is 30.

## AssignmentReport
### Properties
* **assignment**: [AssignmentInfo](#assignmentinfo): Information about the guest configuration assignment.
* **complianceStatus**: 'Compliant' | 'NonCompliant' | 'Pending' (ReadOnly): A value indicating compliance status of the machine for the assigned guest configuration.
* **endTime**: string (ReadOnly): End date and time of the guest configuration assignment compliance status check.
* **id**: string (ReadOnly): ARM resource id of the report for the guest configuration assignment.
* **operationType**: 'Consistency' | 'Initial' (ReadOnly): Type of report, Consistency or Initial
* **reportId**: string (ReadOnly): GUID that identifies the guest configuration assignment report under a subscription, resource group.
* **resources**: [AssignmentReportResource](#assignmentreportresource)[]: The list of resources for which guest configuration assignment compliance is checked.
* **startTime**: string (ReadOnly): Start date and time of the guest configuration assignment compliance status check.
* **vm**: [VMInfo](#vminfo): Information about the VM.

## AssignmentInfo
### Properties
* **configuration**: [ConfigurationInfo](#configurationinfo): Information about the configuration.
* **name**: string (ReadOnly): Name of the guest configuration assignment.

## ConfigurationInfo
### Properties
* **name**: string (ReadOnly): Name of the configuration.
* **version**: string (ReadOnly): Version of the configuration.

## AssignmentReportResource
### Properties
* **complianceStatus**: 'Compliant' | 'NonCompliant' | 'Pending' (ReadOnly): A value indicating compliance status of the machine for the assigned guest configuration.
* **properties**: any (ReadOnly): Any object
* **reasons**: [AssignmentReportResourceComplianceReason](#assignmentreportresourcecompliancereason)[]: Compliance reason and reason code for a resource.
* **resourceId**: string (ReadOnly): Name of the guest configuration assignment resource setting.

## AssignmentReportResourceComplianceReason
### Properties
* **code**: string (ReadOnly): Code for the compliance of the guest configuration assignment resource.
* **phrase**: string (ReadOnly): Reason for the compliance of the guest configuration assignment resource.

## VMInfo
### Properties
* **id**: string (ReadOnly): Azure resource Id of the VM.
* **uuid**: string (ReadOnly): UUID(Universally Unique Identifier) of the VM.

## VmssvmInfo
### Properties
* **complianceStatus**: 'Compliant' | 'NonCompliant' | 'Pending' (ReadOnly): A value indicating compliance status of the machine for the assigned guest configuration.
* **lastComplianceChecked**: string (ReadOnly): Date and time when last compliance status was checked.
* **latestReportId**: string (ReadOnly): Id of the latest report for the guest configuration assignment.
* **vmId**: string (ReadOnly): UUID of the VM.
* **vmResourceId**: string (ReadOnly): Azure resource Id of the VM.

