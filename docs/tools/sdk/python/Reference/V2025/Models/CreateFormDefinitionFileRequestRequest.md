---
id: v2025-create-form-definition-file-request-request
title: CreateFormDefinitionFileRequestRequest
pagination_label: CreateFormDefinitionFileRequestRequest
sidebar_label: CreateFormDefinitionFileRequestRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CreateFormDefinitionFileRequestRequest', 'V2025CreateFormDefinitionFileRequestRequest'] 
slug: /tools/sdk/python/v2025/models/create-form-definition-file-request-request
tags: ['SDK', 'Software Development Kit', 'CreateFormDefinitionFileRequestRequest', 'V2025CreateFormDefinitionFileRequestRequest']
---

# CreateFormDefinitionFileRequestRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file** | **bytearray** | File specifying the multipart | [required]
}

## Example

```python
from sailpoint.v2025.models.create_form_definition_file_request_request import CreateFormDefinitionFileRequestRequest

create_form_definition_file_request_request = CreateFormDefinitionFileRequestRequest(
file=bytes(b'blah')
)

```
[[Back to top]](#) 

