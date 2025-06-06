---
id: v2024-expression
title: Expression
pagination_label: Expression
sidebar_label: Expression
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Expression', 'V2024Expression'] 
slug: /tools/sdk/powershell/v2024/models/expression
tags: ['SDK', 'Software Development Kit', 'Expression', 'V2024Expression']
---


# Expression

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operator** |  **Enum** [  "AND",    "EQUALS" ] | Operator for the expression | [optional] 
**Attribute** | **String** | Name for the attribute | [optional] 
**Value** | [**Value**](value) |  | [optional] 
**Children** | [**[]ExpressionChildrenInner**](expression-children-inner) | List of expressions | [optional] 

## Examples

- Prepare the resource
```powershell
$Expression = Initialize-V2024Expression  -Operator EQUALS `
 -Attribute location `
 -Value null `
 -Children []
```

- Convert the resource to JSON
```powershell
$Expression | ConvertTo-JSON
```


[[Back to top]](#) 

