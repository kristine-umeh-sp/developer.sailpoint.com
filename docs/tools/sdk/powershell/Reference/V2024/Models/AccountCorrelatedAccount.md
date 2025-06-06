---
id: v2024-account-correlated-account
title: AccountCorrelatedAccount
pagination_label: AccountCorrelatedAccount
sidebar_label: AccountCorrelatedAccount
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountCorrelatedAccount', 'V2024AccountCorrelatedAccount'] 
slug: /tools/sdk/powershell/v2024/models/account-correlated-account
tags: ['SDK', 'Software Development Kit', 'AccountCorrelatedAccount', 'V2024AccountCorrelatedAccount']
---


# AccountCorrelatedAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "ACCOUNT" ] | The correlated account's DTO type. | [required]
**Id** | **String** | The correlated account's ID. | [required]
**Name** | **String** | The correlated account's display name. | [required]
**NativeIdentity** | **String** | Unique ID of the account on the source. | [required]
**Uuid** | **String** | The source's unique identifier for the account. UUID is generated by the source system. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountCorrelatedAccount = Initialize-V2024AccountCorrelatedAccount  -Type ACCOUNT `
 -Id 98da47c31df444558c211f9b205184f6 `
 -Name Brian Mendoza `
 -NativeIdentity cn=john.doe,ou=users,dc=acme,dc=com `
 -Uuid 1cb1f07d-3e5a-4431-becd-234fa4306108
```

- Convert the resource to JSON
```powershell
$AccountCorrelatedAccount | ConvertTo-JSON
```


[[Back to top]](#) 

