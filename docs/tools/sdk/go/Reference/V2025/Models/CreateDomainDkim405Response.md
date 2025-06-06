---
id: v2025-create-domain-dkim405-response
title: CreateDomainDkim405Response
pagination_label: CreateDomainDkim405Response
sidebar_label: CreateDomainDkim405Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CreateDomainDkim405Response', 'V2025CreateDomainDkim405Response'] 
slug: /tools/sdk/go/v2025/models/create-domain-dkim405-response
tags: ['SDK', 'Software Development Kit', 'CreateDomainDkim405Response', 'V2025CreateDomainDkim405Response']
---

# CreateDomainDkim405Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ErrorName** | Pointer to **map[string]interface{}** | A message describing the error | [optional] 
**ErrorMessage** | Pointer to **map[string]interface{}** | Description of the error | [optional] 
**TrackingId** | Pointer to **string** | Unique tracking id for the error. | [optional] 

## Methods

### NewCreateDomainDkim405Response

`func NewCreateDomainDkim405Response() *CreateDomainDkim405Response`

NewCreateDomainDkim405Response instantiates a new CreateDomainDkim405Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateDomainDkim405ResponseWithDefaults

`func NewCreateDomainDkim405ResponseWithDefaults() *CreateDomainDkim405Response`

NewCreateDomainDkim405ResponseWithDefaults instantiates a new CreateDomainDkim405Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetErrorName

`func (o *CreateDomainDkim405Response) GetErrorName() map[string]interface{}`

GetErrorName returns the ErrorName field if non-nil, zero value otherwise.

### GetErrorNameOk

`func (o *CreateDomainDkim405Response) GetErrorNameOk() (*map[string]interface{}, bool)`

GetErrorNameOk returns a tuple with the ErrorName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorName

`func (o *CreateDomainDkim405Response) SetErrorName(v map[string]interface{})`

SetErrorName sets ErrorName field to given value.

### HasErrorName

`func (o *CreateDomainDkim405Response) HasErrorName() bool`

HasErrorName returns a boolean if a field has been set.

### GetErrorMessage

`func (o *CreateDomainDkim405Response) GetErrorMessage() map[string]interface{}`

GetErrorMessage returns the ErrorMessage field if non-nil, zero value otherwise.

### GetErrorMessageOk

`func (o *CreateDomainDkim405Response) GetErrorMessageOk() (*map[string]interface{}, bool)`

GetErrorMessageOk returns a tuple with the ErrorMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorMessage

`func (o *CreateDomainDkim405Response) SetErrorMessage(v map[string]interface{})`

SetErrorMessage sets ErrorMessage field to given value.

### HasErrorMessage

`func (o *CreateDomainDkim405Response) HasErrorMessage() bool`

HasErrorMessage returns a boolean if a field has been set.

### GetTrackingId

`func (o *CreateDomainDkim405Response) GetTrackingId() string`

GetTrackingId returns the TrackingId field if non-nil, zero value otherwise.

### GetTrackingIdOk

`func (o *CreateDomainDkim405Response) GetTrackingIdOk() (*string, bool)`

GetTrackingIdOk returns a tuple with the TrackingId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrackingId

`func (o *CreateDomainDkim405Response) SetTrackingId(v string)`

SetTrackingId sets TrackingId field to given value.

### HasTrackingId

`func (o *CreateDomainDkim405Response) HasTrackingId() bool`

HasTrackingId returns a boolean if a field has been set.


