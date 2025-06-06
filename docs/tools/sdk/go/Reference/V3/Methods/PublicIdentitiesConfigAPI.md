---
id: public-identities-config
title: PublicIdentitiesConfig
pagination_label: PublicIdentitiesConfig
sidebar_label: PublicIdentitiesConfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PublicIdentitiesConfig', 'PublicIdentitiesConfig'] 
slug: /tools/sdk/go/v3/methods/public-identities-config
tags: ['SDK', 'Software Development Kit', 'PublicIdentitiesConfig', 'PublicIdentitiesConfig']
---

# PublicIdentitiesConfigAPI
  Use this API to implement public identity configuration functionality. 
With this functionality in place, administrators can make up to 5 identity attributes publicly visible so other non-administrator users can see the relevant information they need to make decisions. 
This can be helpful for approvers making approvals, certification reviewers, managers viewing their direct reports&#39; access, and source owners viewing their tasks.

By default, non-administrators can select an identity and view the following attributes: email, lifecycle state, and manager. 
However, it may be helpful for a non-administrator reviewer to see other identity attributes like department, region, title, etc.
Administrators can use this API to make those necessary identity attributes public to non-administrators. 

For example, a non-administrator deciding whether to approve another identity&#39;s request for access to the Workday application, whose access may be restricted to members of the HR department, would want to know whether the identity is a member of the HR department. 
If an administrator has used [Update Public Identity Config](https://developer.sailpoint.com/docs/api/v3/update-public-identity-config/) to make the &quot;department&quot; attribute public, the approver can see the department and make a decision without requesting any more information.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-public-identity-config**](#get-public-identity-config) | **Get** `/public-identities-config` | Get the public identities configuration
[**update-public-identity-config**](#update-public-identity-config) | **Put** `/public-identities-config` | Update the public identities configuration


## get-public-identity-config
Get the public identities configuration
Returns the publicly visible attributes of an identity available to request approvers for Access Requests and Certification Campaigns.

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-public-identity-config)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetPublicIdentityConfigRequest struct via the builder pattern


### Return type

[**PublicIdentityConfig**](../models/public-identity-config)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.PublicIdentitiesConfigAPI.GetPublicIdentityConfig(context.Background()).Execute()
	  //resp, r, err := apiClient.V3.PublicIdentitiesConfigAPI.GetPublicIdentityConfig(context.Background()).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PublicIdentitiesConfigAPI.GetPublicIdentityConfig``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPublicIdentityConfig`: PublicIdentityConfig
    fmt.Fprintf(os.Stdout, "Response from `PublicIdentitiesConfigAPI.GetPublicIdentityConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## update-public-identity-config
Update the public identities configuration
Updates the publicly visible attributes of an identity available to request approvers for Access Requests and Certification Campaigns.

[API Spec](https://developer.sailpoint.com/docs/api/v3/update-public-identity-config)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdatePublicIdentityConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **publicIdentityConfig** | [**PublicIdentityConfig**](../models/public-identity-config) |  | 

### Return type

[**PublicIdentityConfig**](../models/public-identity-config)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    publicidentityconfig := []byte(`{
          "modified" : "2018-06-25T20:22:28.104Z",
          "attributes" : [ {
            "name" : "Country",
            "key" : "country"
          }, {
            "name" : "Country",
            "key" : "country"
          } ],
          "modifiedBy" : {
            "name" : "Thomas Edison",
            "id" : "2c9180a46faadee4016fb4e018c20639",
            "type" : "IDENTITY"
          }
        }`) // PublicIdentityConfig | 

    var publicIdentityConfig v3.PublicIdentityConfig
    if err := json.Unmarshal(publicidentityconfig, &publicIdentityConfig); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.PublicIdentitiesConfigAPI.UpdatePublicIdentityConfig(context.Background()).PublicIdentityConfig(publicIdentityConfig).Execute()
	  //resp, r, err := apiClient.V3.PublicIdentitiesConfigAPI.UpdatePublicIdentityConfig(context.Background()).PublicIdentityConfig(publicIdentityConfig).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PublicIdentitiesConfigAPI.UpdatePublicIdentityConfig``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdatePublicIdentityConfig`: PublicIdentityConfig
    fmt.Fprintf(os.Stdout, "Response from `PublicIdentitiesConfigAPI.UpdatePublicIdentityConfig`: %v\n", resp)
}
```

[[Back to top]](#)

