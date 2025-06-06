---
id: v2025-dimension-bulk-delete-request
title: DimensionBulkDeleteRequest
pagination_label: DimensionBulkDeleteRequest
sidebar_label: DimensionBulkDeleteRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DimensionBulkDeleteRequest', 'V2025DimensionBulkDeleteRequest'] 
slug: /tools/sdk/powershell/v2025/models/dimension-bulk-delete-request
tags: ['SDK', 'Software Development Kit', 'DimensionBulkDeleteRequest', 'V2025DimensionBulkDeleteRequest']
---


# DimensionBulkDeleteRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DimensionIds** | **[]String** | List of IDs of Dimensions to be deleted. | [required]

## Examples

- Prepare the resource
```powershell
$DimensionBulkDeleteRequest = Initialize-V2025DimensionBulkDeleteRequest  -DimensionIds [2c9180847812e0b1017817051919ecca, 2c9180887812e0b201781e129f151816]
```

- Convert the resource to JSON
```powershell
$DimensionBulkDeleteRequest | ConvertTo-JSON
```


[[Back to top]](#) 

