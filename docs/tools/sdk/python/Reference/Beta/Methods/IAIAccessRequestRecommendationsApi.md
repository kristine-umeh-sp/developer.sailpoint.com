---
id: beta-iai-access-request-recommendations
title: IAI_Access_Request_Recommendations
pagination_label: IAI_Access_Request_Recommendations
sidebar_label: IAI_Access_Request_Recommendations
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IAI_Access_Request_Recommendations', 'BetaIAI_Access_Request_Recommendations'] 
slug: /tools/sdk/python/beta/methods/iai-access-request-recommendations
tags: ['SDK', 'Software Development Kit', 'IAI_Access_Request_Recommendations', 'BetaIAI_Access_Request_Recommendations']
---

# sailpoint.beta.IAIAccessRequestRecommendationsApi
   
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add-access-request-recommendations-ignored-item**](#add-access-request-recommendations-ignored-item) | **POST** `/ai-access-request-recommendations/ignored-items` | Ignore access request recommendation
[**add-access-request-recommendations-requested-item**](#add-access-request-recommendations-requested-item) | **POST** `/ai-access-request-recommendations/requested-items` | Accept access request recommendation
[**add-access-request-recommendations-viewed-item**](#add-access-request-recommendations-viewed-item) | **POST** `/ai-access-request-recommendations/viewed-items` | Mark viewed access request recommendations
[**add-access-request-recommendations-viewed-items**](#add-access-request-recommendations-viewed-items) | **POST** `/ai-access-request-recommendations/viewed-items/bulk-create` | Bulk mark viewed access request recommendations
[**get-access-request-recommendations**](#get-access-request-recommendations) | **GET** `/ai-access-request-recommendations` | Identity access request recommendations
[**get-access-request-recommendations-ignored-items**](#get-access-request-recommendations-ignored-items) | **GET** `/ai-access-request-recommendations/ignored-items` | List ignored access request recommendations
[**get-access-request-recommendations-requested-items**](#get-access-request-recommendations-requested-items) | **GET** `/ai-access-request-recommendations/requested-items` | List accepted access request recommendations
[**get-access-request-recommendations-viewed-items**](#get-access-request-recommendations-viewed-items) | **GET** `/ai-access-request-recommendations/viewed-items` | List viewed access request recommendations


## add-access-request-recommendations-ignored-item
Ignore access request recommendation
This API ignores a recommended access request item. Once an item is ignored, it will be marked as ignored=true if it is still a recommended item. The consumer can decide to hide ignored recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/beta/add-access-request-recommendations-ignored-item)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | access_request_recommendation_action_item_dto | [**AccessRequestRecommendationActionItemDto**](../models/access-request-recommendation-action-item-dto) | True  | The recommended access item to ignore for an identity.

### Return type
[**AccessRequestRecommendationActionItemResponseDto**](../models/access-request-recommendation-action-item-response-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Recommendation successfully stored as ignored. | AccessRequestRecommendationActionItemResponseDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.iai_access_request_recommendations_api import IAIAccessRequestRecommendationsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.access_request_recommendation_action_item_dto import AccessRequestRecommendationActionItemDto
from sailpoint.beta.models.access_request_recommendation_action_item_response_dto import AccessRequestRecommendationActionItemResponseDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    access_request_recommendation_action_item_dto = '''{
          "access" : {
            "id" : "2c9180835d2e5168015d32f890ca1581",
            "type" : "ACCESS_PROFILE"
          },
          "identityId" : "2c91808570313110017040b06f344ec9"
        }''' # AccessRequestRecommendationActionItemDto | The recommended access item to ignore for an identity.

    try:
        # Ignore access request recommendation
        new_access_request_recommendation_action_item_dto = AccessRequestRecommendationActionItemDto.from_json(access_request_recommendation_action_item_dto)
        results = IAIAccessRequestRecommendationsApi(api_client).add_access_request_recommendations_ignored_item(access_request_recommendation_action_item_dto=new_access_request_recommendation_action_item_dto)
        # Below is a request that includes all optional parameters
        # results = IAIAccessRequestRecommendationsApi(api_client).add_access_request_recommendations_ignored_item(new_access_request_recommendation_action_item_dto)
        print("The response of IAIAccessRequestRecommendationsApi->add_access_request_recommendations_ignored_item:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIAccessRequestRecommendationsApi->add_access_request_recommendations_ignored_item: %s\n" % e)
```



[[Back to top]](#) 

## add-access-request-recommendations-requested-item
Accept access request recommendation
This API consumes a notification that a recommended access request item was requested. This API does not actually make the request, it is just a notification. This will help provide feedback in order to improve our recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/beta/add-access-request-recommendations-requested-item)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | access_request_recommendation_action_item_dto | [**AccessRequestRecommendationActionItemDto**](../models/access-request-recommendation-action-item-dto) | True  | The recommended access item that was requested for an identity.

### Return type
[**AccessRequestRecommendationActionItemResponseDto**](../models/access-request-recommendation-action-item-response-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Notification successfully acknowledged. | AccessRequestRecommendationActionItemResponseDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.iai_access_request_recommendations_api import IAIAccessRequestRecommendationsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.access_request_recommendation_action_item_dto import AccessRequestRecommendationActionItemDto
from sailpoint.beta.models.access_request_recommendation_action_item_response_dto import AccessRequestRecommendationActionItemResponseDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    access_request_recommendation_action_item_dto = '''{
          "access" : {
            "id" : "2c9180835d2e5168015d32f890ca1581",
            "type" : "ACCESS_PROFILE"
          },
          "identityId" : "2c91808570313110017040b06f344ec9"
        }''' # AccessRequestRecommendationActionItemDto | The recommended access item that was requested for an identity.

    try:
        # Accept access request recommendation
        new_access_request_recommendation_action_item_dto = AccessRequestRecommendationActionItemDto.from_json(access_request_recommendation_action_item_dto)
        results = IAIAccessRequestRecommendationsApi(api_client).add_access_request_recommendations_requested_item(access_request_recommendation_action_item_dto=new_access_request_recommendation_action_item_dto)
        # Below is a request that includes all optional parameters
        # results = IAIAccessRequestRecommendationsApi(api_client).add_access_request_recommendations_requested_item(new_access_request_recommendation_action_item_dto)
        print("The response of IAIAccessRequestRecommendationsApi->add_access_request_recommendations_requested_item:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIAccessRequestRecommendationsApi->add_access_request_recommendations_requested_item: %s\n" % e)
```



[[Back to top]](#) 

## add-access-request-recommendations-viewed-item
Mark viewed access request recommendations
This API consumes a notification that a recommended access request item was viewed. Future recommendations with this item will be marked with viewed=true. This can be useful for the consumer to determine if there are any new/unviewed recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/beta/add-access-request-recommendations-viewed-item)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | access_request_recommendation_action_item_dto | [**AccessRequestRecommendationActionItemDto**](../models/access-request-recommendation-action-item-dto) | True  | The recommended access that was viewed for an identity.

### Return type
[**AccessRequestRecommendationActionItemResponseDto**](../models/access-request-recommendation-action-item-response-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Recommendation successfully stored as viewed. | AccessRequestRecommendationActionItemResponseDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.iai_access_request_recommendations_api import IAIAccessRequestRecommendationsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.access_request_recommendation_action_item_dto import AccessRequestRecommendationActionItemDto
from sailpoint.beta.models.access_request_recommendation_action_item_response_dto import AccessRequestRecommendationActionItemResponseDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    access_request_recommendation_action_item_dto = '''{
          "access" : {
            "id" : "2c9180835d2e5168015d32f890ca1581",
            "type" : "ACCESS_PROFILE"
          },
          "identityId" : "2c91808570313110017040b06f344ec9"
        }''' # AccessRequestRecommendationActionItemDto | The recommended access that was viewed for an identity.

    try:
        # Mark viewed access request recommendations
        new_access_request_recommendation_action_item_dto = AccessRequestRecommendationActionItemDto.from_json(access_request_recommendation_action_item_dto)
        results = IAIAccessRequestRecommendationsApi(api_client).add_access_request_recommendations_viewed_item(access_request_recommendation_action_item_dto=new_access_request_recommendation_action_item_dto)
        # Below is a request that includes all optional parameters
        # results = IAIAccessRequestRecommendationsApi(api_client).add_access_request_recommendations_viewed_item(new_access_request_recommendation_action_item_dto)
        print("The response of IAIAccessRequestRecommendationsApi->add_access_request_recommendations_viewed_item:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIAccessRequestRecommendationsApi->add_access_request_recommendations_viewed_item: %s\n" % e)
```



[[Back to top]](#) 

## add-access-request-recommendations-viewed-items
Bulk mark viewed access request recommendations
This API consumes a notification that a set of recommended access request item were viewed. Future recommendations with these items will be marked with viewed=true. This can be useful for the consumer to determine if there are any new/unviewed recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/beta/add-access-request-recommendations-viewed-items)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | access_request_recommendation_action_item_dto | [**[]AccessRequestRecommendationActionItemDto**](../models/access-request-recommendation-action-item-dto) | True  | The recommended access items that were viewed for an identity.

### Return type
[**List[AccessRequestRecommendationActionItemResponseDto]**](../models/access-request-recommendation-action-item-response-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Recommendations successfully stored as viewed. | List[AccessRequestRecommendationActionItemResponseDto] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.iai_access_request_recommendations_api import IAIAccessRequestRecommendationsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.access_request_recommendation_action_item_dto import AccessRequestRecommendationActionItemDto
from sailpoint.beta.models.access_request_recommendation_action_item_response_dto import AccessRequestRecommendationActionItemResponseDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    access_request_recommendation_action_item_dto = '''[sailpoint.beta.AccessRequestRecommendationActionItemDto()]''' # List[AccessRequestRecommendationActionItemDto] | The recommended access items that were viewed for an identity.

    try:
        # Bulk mark viewed access request recommendations
        new_access_request_recommendation_action_item_dto = AccessRequestRecommendationActionItemDto.from_json(access_request_recommendation_action_item_dto)
        results = IAIAccessRequestRecommendationsApi(api_client).add_access_request_recommendations_viewed_items(access_request_recommendation_action_item_dto=new_access_request_recommendation_action_item_dto)
        # Below is a request that includes all optional parameters
        # results = IAIAccessRequestRecommendationsApi(api_client).add_access_request_recommendations_viewed_items(new_access_request_recommendation_action_item_dto)
        print("The response of IAIAccessRequestRecommendationsApi->add_access_request_recommendations_viewed_items:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIAccessRequestRecommendationsApi->add_access_request_recommendations_viewed_items: %s\n" % e)
```



[[Back to top]](#) 

## get-access-request-recommendations
Identity access request recommendations
This API returns the access request recommendations for the specified identity. The default identity is *me* which indicates the current user.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-access-request-recommendations)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | identity_id | **str** |   (optional) (default to 'me') | Get access request recommendations for an identityId. *me* indicates the current user.
  Query | limit | **int** |   (optional) (default to 15) | Max number of results to return.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | include_translation_messages | **bool** |   (optional) (default to False) | If *true* it will populate a list of translation messages in the response.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.name**: *co*  **access.type**: *eq, in*  **access.description**: *co, eq, in*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.name, access.type**  By default the recommendations are sorted by highest confidence first.

### Return type
[**List[AccessRequestRecommendationItemDetail]**](../models/access-request-recommendation-item-detail)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of access request recommendations for the identityId | List[AccessRequestRecommendationItemDetail] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.iai_access_request_recommendations_api import IAIAccessRequestRecommendationsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.access_request_recommendation_item_detail import AccessRequestRecommendationItemDetail
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    identity_id = 'me' # str | Get access request recommendations for an identityId. *me* indicates the current user. (optional) (default to 'me') # str | Get access request recommendations for an identityId. *me* indicates the current user. (optional) (default to 'me')
    limit = 15 # int | Max number of results to return. (optional) (default to 15) # int | Max number of results to return. (optional) (default to 15)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    include_translation_messages = False # bool | If *true* it will populate a list of translation messages in the response. (optional) (default to False) # bool | If *true* it will populate a list of translation messages in the response. (optional) (default to False)
    filters = 'access.name co \"admin\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.name**: *co*  **access.type**: *eq, in*  **access.description**: *co, eq, in* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.name**: *co*  **access.type**: *eq, in*  **access.description**: *co, eq, in* (optional)
    sorters = 'access.name' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.name, access.type**  By default the recommendations are sorted by highest confidence first. (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.name, access.type**  By default the recommendations are sorted by highest confidence first. (optional)

    try:
        # Identity access request recommendations
        
        results = IAIAccessRequestRecommendationsApi(api_client).get_access_request_recommendations()
        # Below is a request that includes all optional parameters
        # results = IAIAccessRequestRecommendationsApi(api_client).get_access_request_recommendations(identity_id, limit, offset, count, include_translation_messages, filters, sorters)
        print("The response of IAIAccessRequestRecommendationsApi->get_access_request_recommendations:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIAccessRequestRecommendationsApi->get_access_request_recommendations: %s\n" % e)
```



[[Back to top]](#) 

## get-access-request-recommendations-ignored-items
List ignored access request recommendations
This API returns the list of ignored access request recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-access-request-recommendations-ignored-items)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp**

### Return type
[**List[AccessRequestRecommendationActionItemResponseDto]**](../models/access-request-recommendation-action-item-response-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Returns list of ignored access request recommendations. | List[AccessRequestRecommendationActionItemResponseDto] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.iai_access_request_recommendations_api import IAIAccessRequestRecommendationsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.access_request_recommendation_action_item_response_dto import AccessRequestRecommendationActionItemResponseDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'identityId eq \"2c9180846b0a0583016b299f210c1314\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in* (optional)
    sorters = 'access.id' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp** (optional)

    try:
        # List ignored access request recommendations
        
        results = IAIAccessRequestRecommendationsApi(api_client).get_access_request_recommendations_ignored_items()
        # Below is a request that includes all optional parameters
        # results = IAIAccessRequestRecommendationsApi(api_client).get_access_request_recommendations_ignored_items(limit, offset, count, filters, sorters)
        print("The response of IAIAccessRequestRecommendationsApi->get_access_request_recommendations_ignored_items:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIAccessRequestRecommendationsApi->get_access_request_recommendations_ignored_items: %s\n" % e)
```



[[Back to top]](#) 

## get-access-request-recommendations-requested-items
List accepted access request recommendations
This API returns a list of requested access request recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-access-request-recommendations-requested-items)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp**

### Return type
[**List[AccessRequestRecommendationActionItemResponseDto]**](../models/access-request-recommendation-action-item-response-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Returns the list of requested access request recommendations. | List[AccessRequestRecommendationActionItemResponseDto] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.iai_access_request_recommendations_api import IAIAccessRequestRecommendationsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.access_request_recommendation_action_item_response_dto import AccessRequestRecommendationActionItemResponseDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'access.id eq \"2c9180846b0a0583016b299f210c1314\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in* (optional)
    sorters = 'access.id' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp** (optional)

    try:
        # List accepted access request recommendations
        
        results = IAIAccessRequestRecommendationsApi(api_client).get_access_request_recommendations_requested_items()
        # Below is a request that includes all optional parameters
        # results = IAIAccessRequestRecommendationsApi(api_client).get_access_request_recommendations_requested_items(limit, offset, count, filters, sorters)
        print("The response of IAIAccessRequestRecommendationsApi->get_access_request_recommendations_requested_items:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIAccessRequestRecommendationsApi->get_access_request_recommendations_requested_items: %s\n" % e)
```



[[Back to top]](#) 

## get-access-request-recommendations-viewed-items
List viewed access request recommendations
This API returns the list of viewed access request recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-access-request-recommendations-viewed-items)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp**

### Return type
[**List[AccessRequestRecommendationActionItemResponseDto]**](../models/access-request-recommendation-action-item-response-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Returns list of viewed access request recommendations. | List[AccessRequestRecommendationActionItemResponseDto] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.iai_access_request_recommendations_api import IAIAccessRequestRecommendationsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.access_request_recommendation_action_item_response_dto import AccessRequestRecommendationActionItemResponseDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'access.id eq \"2c9180846b0a0583016b299f210c1314\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in* (optional)
    sorters = 'access.id' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp** (optional)

    try:
        # List viewed access request recommendations
        
        results = IAIAccessRequestRecommendationsApi(api_client).get_access_request_recommendations_viewed_items()
        # Below is a request that includes all optional parameters
        # results = IAIAccessRequestRecommendationsApi(api_client).get_access_request_recommendations_viewed_items(limit, offset, count, filters, sorters)
        print("The response of IAIAccessRequestRecommendationsApi->get_access_request_recommendations_viewed_items:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IAIAccessRequestRecommendationsApi->get_access_request_recommendations_viewed_items: %s\n" % e)
```



[[Back to top]](#) 



