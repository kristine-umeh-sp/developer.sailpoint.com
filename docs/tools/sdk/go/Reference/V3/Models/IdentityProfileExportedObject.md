---
id: identity-profile-exported-object
title: IdentityProfileExportedObject
pagination_label: IdentityProfileExportedObject
sidebar_label: IdentityProfileExportedObject
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentityProfileExportedObject', 'IdentityProfileExportedObject'] 
slug: /tools/sdk/go/v3/models/identity-profile-exported-object
tags: ['SDK', 'Software Development Kit', 'IdentityProfileExportedObject', 'IdentityProfileExportedObject']
---

# IdentityProfileExportedObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Version** | Pointer to **int32** | Version or object from the target service. | [optional] 
**Self** | Pointer to [**IdentityProfileExportedObjectSelf**](identity-profile-exported-object-self) |  | [optional] 
**Object** | Pointer to [**IdentityProfile**](identity-profile) |  | [optional] 

## Methods

### NewIdentityProfileExportedObject

`func NewIdentityProfileExportedObject() *IdentityProfileExportedObject`

NewIdentityProfileExportedObject instantiates a new IdentityProfileExportedObject object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityProfileExportedObjectWithDefaults

`func NewIdentityProfileExportedObjectWithDefaults() *IdentityProfileExportedObject`

NewIdentityProfileExportedObjectWithDefaults instantiates a new IdentityProfileExportedObject object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetVersion

`func (o *IdentityProfileExportedObject) GetVersion() int32`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *IdentityProfileExportedObject) GetVersionOk() (*int32, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *IdentityProfileExportedObject) SetVersion(v int32)`

SetVersion sets Version field to given value.

### HasVersion

`func (o *IdentityProfileExportedObject) HasVersion() bool`

HasVersion returns a boolean if a field has been set.

### GetSelf

`func (o *IdentityProfileExportedObject) GetSelf() IdentityProfileExportedObjectSelf`

GetSelf returns the Self field if non-nil, zero value otherwise.

### GetSelfOk

`func (o *IdentityProfileExportedObject) GetSelfOk() (*IdentityProfileExportedObjectSelf, bool)`

GetSelfOk returns a tuple with the Self field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSelf

`func (o *IdentityProfileExportedObject) SetSelf(v IdentityProfileExportedObjectSelf)`

SetSelf sets Self field to given value.

### HasSelf

`func (o *IdentityProfileExportedObject) HasSelf() bool`

HasSelf returns a boolean if a field has been set.

### GetObject

`func (o *IdentityProfileExportedObject) GetObject() IdentityProfile`

GetObject returns the Object field if non-nil, zero value otherwise.

### GetObjectOk

`func (o *IdentityProfileExportedObject) GetObjectOk() (*IdentityProfile, bool)`

GetObjectOk returns a tuple with the Object field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObject

`func (o *IdentityProfileExportedObject) SetObject(v IdentityProfile)`

SetObject sets Object field to given value.

### HasObject

`func (o *IdentityProfileExportedObject) HasObject() bool`

HasObject returns a boolean if a field has been set.


