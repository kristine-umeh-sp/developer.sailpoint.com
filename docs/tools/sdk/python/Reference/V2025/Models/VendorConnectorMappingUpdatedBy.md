---
id: v2025-vendor-connector-mapping-updated-by
title: VendorConnectorMappingUpdatedBy
pagination_label: VendorConnectorMappingUpdatedBy
sidebar_label: VendorConnectorMappingUpdatedBy
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'VendorConnectorMappingUpdatedBy', 'V2025VendorConnectorMappingUpdatedBy'] 
slug: /tools/sdk/python/v2025/models/vendor-connector-mapping-updated-by
tags: ['SDK', 'Software Development Kit', 'VendorConnectorMappingUpdatedBy', 'V2025VendorConnectorMappingUpdatedBy']
---

# VendorConnectorMappingUpdatedBy

An object representing the nullable identifier of the user who last updated the mapping.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**string** | **str** | The identifier of the user who last updated the mapping, if available. | [optional] 
**valid** | **bool** | A flag indicating if the 'String' field is set and valid. | [optional] [default to False]
}

## Example

```python
from sailpoint.v2025.models.vendor_connector_mapping_updated_by import VendorConnectorMappingUpdatedBy

vendor_connector_mapping_updated_by = VendorConnectorMappingUpdatedBy(
string='user-67891',
valid=True
)

```
[[Back to top]](#) 

