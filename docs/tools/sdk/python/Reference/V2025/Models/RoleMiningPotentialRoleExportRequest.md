---
id: v2025-role-mining-potential-role-export-request
title: RoleMiningPotentialRoleExportRequest
pagination_label: RoleMiningPotentialRoleExportRequest
sidebar_label: RoleMiningPotentialRoleExportRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RoleMiningPotentialRoleExportRequest', 'V2025RoleMiningPotentialRoleExportRequest'] 
slug: /tools/sdk/python/v2025/models/role-mining-potential-role-export-request
tags: ['SDK', 'Software Development Kit', 'RoleMiningPotentialRoleExportRequest', 'V2025RoleMiningPotentialRoleExportRequest']
---

# RoleMiningPotentialRoleExportRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**min_entitlement_popularity** | **int** | The minimum popularity among identities in the role which an entitlement must have to be included in the report | [optional] 
**include_common_access** | **bool** | If false, do not include entitlements that are highly popular among the entire orginization | [optional] 
}

## Example

```python
from sailpoint.v2025.models.role_mining_potential_role_export_request import RoleMiningPotentialRoleExportRequest

role_mining_potential_role_export_request = RoleMiningPotentialRoleExportRequest(
min_entitlement_popularity=0,
include_common_access=True
)

```
[[Back to top]](#) 

