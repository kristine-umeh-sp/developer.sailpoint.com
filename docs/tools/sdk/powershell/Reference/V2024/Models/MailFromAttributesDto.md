---
id: v2024-mail-from-attributes-dto
title: MailFromAttributesDto
pagination_label: MailFromAttributesDto
sidebar_label: MailFromAttributesDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MailFromAttributesDto', 'V2024MailFromAttributesDto'] 
slug: /tools/sdk/powershell/v2024/models/mail-from-attributes-dto
tags: ['SDK', 'Software Development Kit', 'MailFromAttributesDto', 'V2024MailFromAttributesDto']
---


# MailFromAttributesDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** | **String** | The identity or domain address | [optional] 
**MailFromDomain** | **String** | The new MAIL FROM domain of the identity. Must be a subdomain of the identity. | [optional] 

## Examples

- Prepare the resource
```powershell
$MailFromAttributesDto = Initialize-V2024MailFromAttributesDto  -Identity BobSmith@sailpoint.com `
 -MailFromDomain example.sailpoint.com
```

- Convert the resource to JSON
```powershell
$MailFromAttributesDto | ConvertTo-JSON
```


[[Back to top]](#) 

