---
id: v2025-localized-message
title: LocalizedMessage
pagination_label: LocalizedMessage
sidebar_label: LocalizedMessage
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'LocalizedMessage', 'V2025LocalizedMessage'] 
slug: /tools/sdk/python/v2025/models/localized-message
tags: ['SDK', 'Software Development Kit', 'LocalizedMessage', 'V2025LocalizedMessage']
---

# LocalizedMessage

Localized error message to indicate a failed invocation or error if any.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locale** | **str** | Message locale | [required]
**message** | **str** | Message text | [required]
}

## Example

```python
from sailpoint.v2025.models.localized_message import LocalizedMessage

localized_message = LocalizedMessage(
locale='An error has occurred!',
message='Error has occurred!'
)

```
[[Back to top]](#) 

