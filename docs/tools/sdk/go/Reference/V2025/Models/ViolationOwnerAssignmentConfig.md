---
id: v2025-violation-owner-assignment-config
title: ViolationOwnerAssignmentConfig
pagination_label: ViolationOwnerAssignmentConfig
sidebar_label: ViolationOwnerAssignmentConfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ViolationOwnerAssignmentConfig', 'V2025ViolationOwnerAssignmentConfig'] 
slug: /tools/sdk/go/v2025/models/violation-owner-assignment-config
tags: ['SDK', 'Software Development Kit', 'ViolationOwnerAssignmentConfig', 'V2025ViolationOwnerAssignmentConfig']
---

# ViolationOwnerAssignmentConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AssignmentRule** | Pointer to **NullableString** | Details about the violations owner. MANAGER - identity's manager STATIC - Governance Group or Identity | [optional] 
**OwnerRef** | Pointer to [**NullableViolationOwnerAssignmentConfigOwnerRef**](violation-owner-assignment-config-owner-ref) |  | [optional] 

## Methods

### NewViolationOwnerAssignmentConfig

`func NewViolationOwnerAssignmentConfig() *ViolationOwnerAssignmentConfig`

NewViolationOwnerAssignmentConfig instantiates a new ViolationOwnerAssignmentConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewViolationOwnerAssignmentConfigWithDefaults

`func NewViolationOwnerAssignmentConfigWithDefaults() *ViolationOwnerAssignmentConfig`

NewViolationOwnerAssignmentConfigWithDefaults instantiates a new ViolationOwnerAssignmentConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAssignmentRule

`func (o *ViolationOwnerAssignmentConfig) GetAssignmentRule() string`

GetAssignmentRule returns the AssignmentRule field if non-nil, zero value otherwise.

### GetAssignmentRuleOk

`func (o *ViolationOwnerAssignmentConfig) GetAssignmentRuleOk() (*string, bool)`

GetAssignmentRuleOk returns a tuple with the AssignmentRule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssignmentRule

`func (o *ViolationOwnerAssignmentConfig) SetAssignmentRule(v string)`

SetAssignmentRule sets AssignmentRule field to given value.

### HasAssignmentRule

`func (o *ViolationOwnerAssignmentConfig) HasAssignmentRule() bool`

HasAssignmentRule returns a boolean if a field has been set.

### SetAssignmentRuleNil

`func (o *ViolationOwnerAssignmentConfig) SetAssignmentRuleNil(b bool)`

 SetAssignmentRuleNil sets the value for AssignmentRule to be an explicit nil

### UnsetAssignmentRule
`func (o *ViolationOwnerAssignmentConfig) UnsetAssignmentRule()`

UnsetAssignmentRule ensures that no value is present for AssignmentRule, not even an explicit nil
### GetOwnerRef

`func (o *ViolationOwnerAssignmentConfig) GetOwnerRef() ViolationOwnerAssignmentConfigOwnerRef`

GetOwnerRef returns the OwnerRef field if non-nil, zero value otherwise.

### GetOwnerRefOk

`func (o *ViolationOwnerAssignmentConfig) GetOwnerRefOk() (*ViolationOwnerAssignmentConfigOwnerRef, bool)`

GetOwnerRefOk returns a tuple with the OwnerRef field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerRef

`func (o *ViolationOwnerAssignmentConfig) SetOwnerRef(v ViolationOwnerAssignmentConfigOwnerRef)`

SetOwnerRef sets OwnerRef field to given value.

### HasOwnerRef

`func (o *ViolationOwnerAssignmentConfig) HasOwnerRef() bool`

HasOwnerRef returns a boolean if a field has been set.

### SetOwnerRefNil

`func (o *ViolationOwnerAssignmentConfig) SetOwnerRefNil(b bool)`

 SetOwnerRefNil sets the value for OwnerRef to be an explicit nil

### UnsetOwnerRef
`func (o *ViolationOwnerAssignmentConfig) UnsetOwnerRef()`

UnsetOwnerRef ensures that no value is present for OwnerRef, not even an explicit nil

