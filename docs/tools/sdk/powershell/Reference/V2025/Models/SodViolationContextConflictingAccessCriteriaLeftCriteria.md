---
id: v2025-sod-violation-context-conflicting-access-criteria-left-criteria
title: SodViolationContextConflictingAccessCriteriaLeftCriteria
pagination_label: SodViolationContextConflictingAccessCriteriaLeftCriteria
sidebar_label: SodViolationContextConflictingAccessCriteriaLeftCriteria
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SodViolationContextConflictingAccessCriteriaLeftCriteria', 'V2025SodViolationContextConflictingAccessCriteriaLeftCriteria'] 
slug: /tools/sdk/powershell/v2025/models/sod-violation-context-conflicting-access-criteria-left-criteria
tags: ['SDK', 'Software Development Kit', 'SodViolationContextConflictingAccessCriteriaLeftCriteria', 'V2025SodViolationContextConflictingAccessCriteriaLeftCriteria']
---


# SodViolationContextConflictingAccessCriteriaLeftCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CriteriaList** | [**[]SodExemptCriteria**](sod-exempt-criteria) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SodViolationContextConflictingAccessCriteriaLeftCriteria = Initialize-V2025SodViolationContextConflictingAccessCriteriaLeftCriteria  -CriteriaList null
```

- Convert the resource to JSON
```powershell
$SodViolationContextConflictingAccessCriteriaLeftCriteria | ConvertTo-JSON
```


[[Back to top]](#) 

