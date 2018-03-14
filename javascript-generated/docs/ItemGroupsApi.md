# PakkasmarjaRestClient.ItemGroupsApi

All URIs are relative to *https://localhost/rest/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**findItemGroup**](ItemGroupsApi.md#findItemGroup) | **GET** /itemGroups/{id} | Find item group
[**findItemGroupDocumentTemplate**](ItemGroupsApi.md#findItemGroupDocumentTemplate) | **GET** /itemGroups/{itemGroupId}/documentTemplates/{id} | Find item group document template
[**listItemGroupDocumentTemplates**](ItemGroupsApi.md#listItemGroupDocumentTemplates) | **GET** /itemGroups/{itemGroupId}/documentTemplates | List item group document templates
[**listItemGroups**](ItemGroupsApi.md#listItemGroups) | **GET** /itemGroups | Lists item groups
[**updateItemGroupDocumentTemplate**](ItemGroupsApi.md#updateItemGroupDocumentTemplate) | **PUT** /itemGroups/{itemGroupId}/documentTemplates/{id} | Updates item group document template


<a name="findItemGroup"></a>
# **findItemGroup**
> ItemGroup findItemGroup(id)

Find item group

Finds item group by id

### Example
```javascript
var PakkasmarjaRestClient = require('pakkasmarja-rest-client');
var defaultClient = PakkasmarjaRestClient.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new PakkasmarjaRestClient.ItemGroupsApi();

var id = "id_example"; // String | item group id

apiInstance.findItemGroup(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| item group id | 

### Return type

[**ItemGroup**](ItemGroup.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="findItemGroupDocumentTemplate"></a>
# **findItemGroupDocumentTemplate**
> ItemGroupDocumentTemplate findItemGroupDocumentTemplate(itemGroupId, id)

Find item group document template

Finds item group template

### Example
```javascript
var PakkasmarjaRestClient = require('pakkasmarja-rest-client');
var defaultClient = PakkasmarjaRestClient.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new PakkasmarjaRestClient.ItemGroupsApi();

var itemGroupId = "itemGroupId_example"; // String | item group id

var id = "id_example"; // String | template id

apiInstance.findItemGroupDocumentTemplate(itemGroupId, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemGroupId** | **String**| item group id | 
 **id** | **String**| template id | 

### Return type

[**ItemGroupDocumentTemplate**](ItemGroupDocumentTemplate.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="listItemGroupDocumentTemplates"></a>
# **listItemGroupDocumentTemplates**
> [ItemGroupDocumentTemplate] listItemGroupDocumentTemplates(itemGroupId)

List item group document templates

Lists item group templates

### Example
```javascript
var PakkasmarjaRestClient = require('pakkasmarja-rest-client');
var defaultClient = PakkasmarjaRestClient.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new PakkasmarjaRestClient.ItemGroupsApi();

var itemGroupId = "itemGroupId_example"; // String | item group id

apiInstance.listItemGroupDocumentTemplates(itemGroupId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemGroupId** | **String**| item group id | 

### Return type

[**[ItemGroupDocumentTemplate]**](ItemGroupDocumentTemplate.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="listItemGroups"></a>
# **listItemGroups**
> [ItemGroup] listItemGroups()

Lists item groups

Lists item groups

### Example
```javascript
var PakkasmarjaRestClient = require('pakkasmarja-rest-client');
var defaultClient = PakkasmarjaRestClient.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new PakkasmarjaRestClient.ItemGroupsApi();
apiInstance.listItemGroups().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[ItemGroup]**](ItemGroup.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="updateItemGroupDocumentTemplate"></a>
# **updateItemGroupDocumentTemplate**
> ItemGroupDocumentTemplate updateItemGroupDocumentTemplate(itemGroupId, id, body)

Updates item group document template

Updated item group document template

### Example
```javascript
var PakkasmarjaRestClient = require('pakkasmarja-rest-client');
var defaultClient = PakkasmarjaRestClient.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new PakkasmarjaRestClient.ItemGroupsApi();

var itemGroupId = "itemGroupId_example"; // String | item group id

var id = "id_example"; // String | template id

var body = new PakkasmarjaRestClient.ItemGroupDocumentTemplate(); // ItemGroupDocumentTemplate | Payload

apiInstance.updateItemGroupDocumentTemplate(itemGroupId, id, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemGroupId** | **String**| item group id | 
 **id** | **String**| template id | 
 **body** | [**ItemGroupDocumentTemplate**](ItemGroupDocumentTemplate.md)| Payload | 

### Return type

[**ItemGroupDocumentTemplate**](ItemGroupDocumentTemplate.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

