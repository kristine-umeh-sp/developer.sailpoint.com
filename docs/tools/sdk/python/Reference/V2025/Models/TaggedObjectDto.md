---
id: v2025-tagged-object-dto
title: TaggedObjectDto
pagination_label: TaggedObjectDto
sidebar_label: TaggedObjectDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'TaggedObjectDto', 'V2025TaggedObjectDto'] 
slug: /tools/sdk/python/v2025/models/tagged-object-dto
tags: ['SDK', 'Software Development Kit', 'TaggedObjectDto', 'V2025TaggedObjectDto']
---

# TaggedObjectDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'ACCESS_PROFILE',    'APPLICATION',    'CAMPAIGN',    'ENTITLEMENT',    'IDENTITY',    'ROLE',    'SOD_POLICY',    'SOURCE' ] | DTO type | [optional] 
**id** | **str** | ID of the object this reference applies to | [optional] 
**name** | **str** | Human-readable display name of the object this reference applies to | [optional] 
}

## Example

```python
from sailpoint.v2025.models.tagged_object_dto import TaggedObjectDto

tagged_object_dto = TaggedObjectDto(
type='IDENTITY',
id='2c91808568c529c60168cca6f90c1313',
name='William Wilson'
)

```
[[Back to top]](#) 

