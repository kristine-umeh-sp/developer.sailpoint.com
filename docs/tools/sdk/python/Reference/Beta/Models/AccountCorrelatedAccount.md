---
id: beta-account-correlated-account
title: AccountCorrelatedAccount
pagination_label: AccountCorrelatedAccount
sidebar_label: AccountCorrelatedAccount
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountCorrelatedAccount', 'BetaAccountCorrelatedAccount'] 
slug: /tools/sdk/python/beta/models/account-correlated-account
tags: ['SDK', 'Software Development Kit', 'AccountCorrelatedAccount', 'BetaAccountCorrelatedAccount']
---

# AccountCorrelatedAccount

The correlated account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'ACCOUNT' ] | The correlated account's DTO type. | [required]
**id** | **str** | The correlated account's ID. | [required]
**name** | **str** | The correlated account's display name. | [required]
**native_identity** | **str** | Unique ID of the account on the source. | [required]
**uuid** | **str** | The source's unique identifier for the account. UUID is generated by the source system. | [optional] 
}

## Example

```python
from sailpoint.beta.models.account_correlated_account import AccountCorrelatedAccount

account_correlated_account = AccountCorrelatedAccount(
type='ACCOUNT',
id='98da47c31df444558c211f9b205184f6',
name='Brian Mendoza',
native_identity='cn=john.doe,ou=users,dc=acme,dc=com',
uuid='1cb1f07d-3e5a-4431-becd-234fa4306108'
)

```
[[Back to top]](#) 

