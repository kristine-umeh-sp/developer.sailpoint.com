---
id: v2025-import-accounts-request
title: ImportAccountsRequest
pagination_label: ImportAccountsRequest
sidebar_label: ImportAccountsRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ImportAccountsRequest', 'V2025ImportAccountsRequest'] 
slug: /tools/sdk/python/v2025/models/import-accounts-request
tags: ['SDK', 'Software Development Kit', 'ImportAccountsRequest', 'V2025ImportAccountsRequest']
---

# ImportAccountsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file** | **bytearray** | The CSV file containing the source accounts to aggregate. | [optional] 
**disable_optimization** | **str** | Use this flag to reprocess every account whether or not the data has changed. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.import_accounts_request import ImportAccountsRequest

import_accounts_request = ImportAccountsRequest(
file=bytes(b'blah'),
disable_optimization='true'
)

```
[[Back to top]](#) 

