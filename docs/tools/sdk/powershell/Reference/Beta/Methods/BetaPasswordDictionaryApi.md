---
id: beta-password-dictionary
title: PasswordDictionary
pagination_label: PasswordDictionary
sidebar_label: PasswordDictionary
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PasswordDictionary', 'BetaPasswordDictionary'] 
slug: /tools/sdk/powershell/beta/methods/password-dictionary
tags: ['SDK', 'Software Development Kit', 'PasswordDictionary', 'BetaPasswordDictionary']
---

# PasswordDictionary
  Use this API to implement password dictionary functionality.
With this functionality in place, administrators can create password dictionaries to prevent users from using certain words or characters in their passwords.

A password dictionary is a list of words or characters that users are prevented from including in their passwords.
This can help protect users from themselves and force them to create passwords that are not easy to break.

A password dictionary must meet the following requirements to for the API to handle them correctly:

- It must be in .txt format.

- All characters must be UTF-8 characters.

- Each line must contain a single word or character with no spaces or whitespace characters.

- It must contain at least one line other than the locale string.

- Each line must not exceed 128 characters.

- The file must not exceed 2500 lines.

Administrators should also consider the following when they create their dictionaries:

- Lines starting with a # represent comments.

- All words in the password dictionary are case-insensitive.
For example, adding the word &quot;password&quot; to the dictionary also disallows the following: PASSWORD, Password, and PassWord.

- The dictionary uses substring matching.
For example, adding the word &quot;spring&quot; to the dictionary also disallows the following: Spring124, 345SprinG, and 8spring.
Users can then select &#39;Change Password&#39; to update their passwords.

Administrators must do the following to create a password dictionary:

- Create the text file that will contain the prohibited password values.

- If the dictionary is not in English, they must add a locale string to the top line: locale:&#x60;languageCode&#x60;_&#x60;countryCode&#x60;

The languageCode value refers to the language&#39;s 2-letter ISO 639-1 code.
The countryCode value refers to the country&#39;s 2-letter ISO 3166-1 code.

Refer to this list https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html to see all the available ISO 639-1 language codes and ISO 3166-1 country codes.

- Upload the .txt file to Identity Security Cloud with [Update Password Dictionary](https://developer.sailpoint.com/docs/api/beta/put-password-dictionary). Uploading a new file always overwrites the previous dictionary file.

Administrators can then specify which password policies check new passwords against the password dictionary by doing the following: In the Admin panel, they can use the Password Mgmt dropdown menu to select Policies, select the policy, and select the &#39;Prevent use of words in this site&#39;s password dictionary&#39; checkbox beside it.

Refer to [Configuring Advanced Password Management Options](https://documentation.sailpoint.com/saas/help/pwd/adv_config.html) for more information about password dictionaries.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-BetaPasswordDictionary**](#get-password-dictionary) | **GET** `/password-dictionary` | Get password dictionary
[**Send-BetaPasswordDictionary**](#put-password-dictionary) | **PUT** `/password-dictionary` | Update password dictionary


## get-password-dictionary
This gets password dictionary for the organization.
The password dictionary file can contain lines that are:
1. comment lines - the first character is '#', can be 128 Unicode codepoints in length, and are ignored during processing
2. empty lines
3. locale line - the first line that starts with "locale=" is considered to be locale line, the rest are treated as normal content lines
4. line containing the password dictionary word - it must start with non-whitespace character and only non-whitespace characters are allowed;
        maximum length of the line is 128 Unicode codepoints


Password dictionary file may not contain more than 2,500 lines (not counting whitespace lines, comment lines and locale line).
  Password dict file must contain UTF-8 characters only.

# Sample password text file

```

# Password dictionary small test file

locale=en_US

# Password dictionary prohibited words

qwerty
abcd
aaaaa
password
qazxsws

```

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-password-dictionary)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type
**String**

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A password dictionary response | String
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: text/plain, application/json

### Example
```powershell

# Get password dictionary

try {
    Get-BetaPasswordDictionary 
    
    # Below is a request that includes all optional parameters
    # Get-BetaPasswordDictionary  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaPasswordDictionary"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-password-dictionary
This updates password dictionary for the organization.
The password dictionary file can contain lines that are:
1. comment lines - the first character is '#', can be 128 Unicode codepoints in length, and are ignored during processing
2. empty lines
3. locale line - the first line that starts with "locale=" is considered to be locale line, the rest are treated as normal content lines
4. line containing the password dictionary word - it must start with non-whitespace character and only non-whitespace characters are allowed;
        maximum length of the line is 128 Unicode codepoints


Password dictionary file may not contain more than 2,500 lines (not counting whitespace lines, comment lines and locale line).
  Password dict file must contain UTF-8 characters only.

# Sample password text file

```

# Password dictionary small test file

locale=en_US

# Password dictionary prohibited words

qwerty
abcd
aaaaa
password
qazxsws

```

[API Spec](https://developer.sailpoint.com/docs/api/beta/put-password-dictionary)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | File | **System.IO.FileInfo** |   (optional) | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Successfully updated. | 
201 | Created. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example
```powershell
$File =  # System.IO.FileInfo |  (optional)

# Update password dictionary

try {
    Send-BetaPasswordDictionary 
    
    # Below is a request that includes all optional parameters
    # Send-BetaPasswordDictionary -File $File  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-BetaPasswordDictionary"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
