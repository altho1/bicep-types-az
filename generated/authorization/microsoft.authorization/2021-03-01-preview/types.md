# Microsoft.Authorization @ 2021-03-01-preview

## Resource Microsoft.Authorization/accessReviewScheduleDefinitions@2021-03-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **backupReviewers**: [AccessReviewReviewer](#accessreviewreviewer)[] (WriteOnly): This is the collection of backup reviewers.
* **createdBy**: [AccessReviewActorIdentity](#accessreviewactoridentity) (ReadOnly, WriteOnly): Details of the actor identity
* **descriptionForAdmins**: string (WriteOnly): The description provided by the access review creator and visible to admins.
* **descriptionForReviewers**: string (WriteOnly): The description provided by the access review creator to be shown to reviewers.
* **displayName**: string (WriteOnly): The display name for the schedule definition.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **instances**: [AccessReviewInstance](#accessreviewinstance)[] (WriteOnly): This is the collection of instances returned when one does an expand on it.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AccessReviewScheduleDefinitionProperties](#accessreviewscheduledefinitionproperties) (ReadOnly): Access Review.
* **reviewers**: [AccessReviewReviewer](#accessreviewreviewer)[] (WriteOnly): This is the collection of reviewers.
* **reviewersType**: 'Assigned' | 'Managers' | 'Self' (ReadOnly, WriteOnly): This field specifies the type of reviewers for a review. Usually for a review, reviewers are explicitly assigned. However, in some cases, the reviewers may not be assigned and instead be chosen dynamically. For example managers review or self review.
* **scope**: [AccessReviewScope](#accessreviewscope) (ReadOnly, WriteOnly): Descriptor for what needs to be reviewed
* **settings**: [AccessReviewScheduleSettings](#accessreviewschedulesettings) (WriteOnly): Settings of an Access Review.
* **status**: 'Applied' | 'Applying' | 'AutoReviewed' | 'AutoReviewing' | 'Completed' | 'Completing' | 'InProgress' | 'Initializing' | 'NotStarted' | 'Scheduled' | 'Starting' (ReadOnly, WriteOnly): This read-only field specifies the status of an accessReview.
* **type**: 'Microsoft.Authorization/accessReviewScheduleDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Authorization/accessReviewScheduleSettings@2021-03-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **autoApplyDecisionsEnabled**: bool (WriteOnly): Flag to indicate whether auto-apply capability, to automatically change the target object access resource, is enabled. If not enabled, a user must, after the review completes, apply the access review.
* **defaultDecision**: 'Approve' | 'Deny' | 'Recommendation' (WriteOnly): This specifies the behavior for the autoReview feature when an access review completes.
* **defaultDecisionEnabled**: bool (WriteOnly): Flag to indicate whether reviewers are required to provide a justification when reviewing access.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **instanceDurationInDays**: int (WriteOnly): The duration in days for an instance.
* **justificationRequiredOnApproval**: bool (WriteOnly): Flag to indicate whether the reviewer is required to pass justification when recording a decision.
* **mailNotificationsEnabled**: bool (WriteOnly): Flag to indicate whether sending mails to reviewers and the review creator is enabled.
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [AccessReviewScheduleSettings](#accessreviewschedulesettings) (ReadOnly): Settings of an Access Review.
* **recommendationsEnabled**: bool (WriteOnly): Flag to indicate whether showing recommendations to reviewers is enabled.
* **recurrence**: [AccessReviewRecurrenceSettings](#accessreviewrecurrencesettings) (WriteOnly): Recurrence Settings of an Access Review Schedule Definition.
* **reminderNotificationsEnabled**: bool (WriteOnly): Flag to indicate whether sending reminder emails to reviewers are enabled.
* **type**: 'Microsoft.Authorization/accessReviewScheduleSettings' (ReadOnly, DeployTimeConstant): The resource type

## AccessReviewReviewer
### Properties
* **principalId**: string (WriteOnly): The id of the reviewer(user/servicePrincipal)
* **principalType**: 'servicePrincipal' | 'user' (ReadOnly, WriteOnly): The identity type : user/servicePrincipal

## AccessReviewActorIdentity
### Properties
* **principalId**: string (ReadOnly, WriteOnly): The identity id
* **principalName**: string (ReadOnly, WriteOnly): The identity display name
* **principalType**: 'servicePrincipal' | 'user' (ReadOnly, WriteOnly): The identity type : user/servicePrincipal
* **userPrincipalName**: string (ReadOnly, WriteOnly): The user principal name(if valid)

## AccessReviewInstance
### Properties
* **id**: string (ReadOnly, WriteOnly): The access review instance id.
* **name**: string (ReadOnly, WriteOnly): The access review instance name.
* **properties**: [AccessReviewInstanceProperties](#accessreviewinstanceproperties) (WriteOnly): Access Review Instance properties.
* **type**: string (ReadOnly, WriteOnly): The resource type.

## AccessReviewInstanceProperties
### Properties
* **endDateTime**: string (WriteOnly): The DateTime when the review instance is scheduled to end.
* **startDateTime**: string (WriteOnly): The DateTime when the review instance is scheduled to be start.
* **status**: 'Applied' | 'Applying' | 'AutoReviewed' | 'AutoReviewing' | 'Completed' | 'Completing' | 'InProgress' | 'Initializing' | 'NotStarted' | 'Scheduled' | 'Starting' (ReadOnly, WriteOnly): This read-only field specifies the status of an access review instance.

## AccessReviewScheduleDefinitionProperties
### Properties
* **backupReviewers**: [AccessReviewReviewer](#accessreviewreviewer)[] (ReadOnly): This is the collection of backup reviewers.
* **createdBy**: [AccessReviewActorIdentity](#accessreviewactoridentity) (ReadOnly): Details of the actor identity
* **descriptionForAdmins**: string (ReadOnly): The description provided by the access review creator and visible to admins.
* **descriptionForReviewers**: string (ReadOnly): The description provided by the access review creator to be shown to reviewers.
* **displayName**: string (ReadOnly): The display name for the schedule definition.
* **instances**: [AccessReviewInstance](#accessreviewinstance)[] (ReadOnly): This is the collection of instances returned when one does an expand on it.
* **reviewers**: [AccessReviewReviewer](#accessreviewreviewer)[] (ReadOnly): This is the collection of reviewers.
* **reviewersType**: 'Assigned' | 'Managers' | 'Self' (ReadOnly): This field specifies the type of reviewers for a review. Usually for a review, reviewers are explicitly assigned. However, in some cases, the reviewers may not be assigned and instead be chosen dynamically. For example managers review or self review.
* **scope**: [AccessReviewScope](#accessreviewscope) (ReadOnly): Descriptor for what needs to be reviewed
* **settings**: [AccessReviewScheduleSettings](#accessreviewschedulesettings) (ReadOnly): Settings of an Access Review.
* **status**: 'Applied' | 'Applying' | 'AutoReviewed' | 'AutoReviewing' | 'Completed' | 'Completing' | 'InProgress' | 'Initializing' | 'NotStarted' | 'Scheduled' | 'Starting' (ReadOnly): This read-only field specifies the status of an accessReview.

## AccessReviewScope
### Properties
* **assignmentState**: 'active' | 'eligible' (ReadOnly, WriteOnly): The role assignment state eligible/active to review
* **inactiveDuration**: string (WriteOnly): Duration users are inactive for. The value should be in ISO  8601 format (http://en.wikipedia.org/wiki/ISO_8601#Durations).This code can be used to convert TimeSpan to a valid interval string: XmlConvert.ToString(new TimeSpan(hours, minutes, seconds))
* **principalType**: 'guestUser' | 'servicePrincipal' | 'user' (ReadOnly, WriteOnly): The identity type user/servicePrincipal to review
* **resourceId**: string (ReadOnly, WriteOnly): ResourceId in which this review is getting created
* **roleDefinitionId**: string (ReadOnly, WriteOnly): This is used to indicate the role being reviewed

## AccessReviewScheduleSettings
### Properties
* **autoApplyDecisionsEnabled**: bool (WriteOnly): Flag to indicate whether auto-apply capability, to automatically change the target object access resource, is enabled. If not enabled, a user must, after the review completes, apply the access review.
* **defaultDecision**: 'Approve' | 'Deny' | 'Recommendation' (WriteOnly): This specifies the behavior for the autoReview feature when an access review completes.
* **defaultDecisionEnabled**: bool (WriteOnly): Flag to indicate whether reviewers are required to provide a justification when reviewing access.
* **instanceDurationInDays**: int (WriteOnly): The duration in days for an instance.
* **justificationRequiredOnApproval**: bool (WriteOnly): Flag to indicate whether the reviewer is required to pass justification when recording a decision.
* **mailNotificationsEnabled**: bool (WriteOnly): Flag to indicate whether sending mails to reviewers and the review creator is enabled.
* **recommendationsEnabled**: bool (WriteOnly): Flag to indicate whether showing recommendations to reviewers is enabled.
* **recurrence**: [AccessReviewRecurrenceSettings](#accessreviewrecurrencesettings) (WriteOnly): Recurrence Settings of an Access Review Schedule Definition.
* **reminderNotificationsEnabled**: bool (WriteOnly): Flag to indicate whether sending reminder emails to reviewers are enabled.

## AccessReviewRecurrenceSettings
### Properties
* **pattern**: [AccessReviewRecurrencePattern](#accessreviewrecurrencepattern) (WriteOnly): Recurrence Pattern of an Access Review Schedule Definition.
* **range**: [AccessReviewRecurrenceRange](#accessreviewrecurrencerange) (WriteOnly): Recurrence Range of an Access Review Schedule Definition.

## AccessReviewRecurrencePattern
### Properties
* **interval**: int (WriteOnly): The interval for recurrence. For a quarterly review, the interval is 3 for type : absoluteMonthly.
* **type**: 'absoluteMonthly' | 'weekly' (WriteOnly): The recurrence type : weekly, monthly, etc.

## AccessReviewRecurrenceRange
### Properties
* **endDate**: string (WriteOnly): The DateTime when the review is scheduled to end. Required if type is endDate
* **numberOfOccurrences**: int (WriteOnly): The number of times to repeat the access review. Required and must be positive if type is numbered.
* **startDate**: string (WriteOnly): The DateTime when the review is scheduled to be start. This could be a date in the future. Required on create.
* **type**: 'endDate' | 'noEnd' | 'numbered' (WriteOnly): The recurrence range type. The possible values are: endDate, noEnd, numbered.

