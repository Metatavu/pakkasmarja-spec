# PakkasmarjaRestClient.ItemGroupsApi

All URIs are relative to *https://localhost/rest/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createItemGroupPrice**](ItemGroupsApi.md#createItemGroupPrice) | **POST** /itemGroups/{itemGroupId}/prices | Creates item group price
[**findItemGroup**](ItemGroupsApi.md#findItemGroup) | **GET** /itemGroups/{id} | Find item group
[**findItemGroupDocumentTemplate**](ItemGroupsApi.md#findItemGroupDocumentTemplate) | **GET** /itemGroups/{itemGroupId}/documentTemplates/{id} | Find item group document template
[**findItemGroupPrice**](ItemGroupsApi.md#findItemGroupPrice) | **GET** /itemGroups/{itemGroupId}/prices/{priceId} | Find item group price
[**listItemGroupDocumentTemplates**](ItemGroupsApi.md#listItemGroupDocumentTemplates) | **GET** /itemGroups/{itemGroupId}/documentTemplates | List item group document templates
[**listItemGroupPrices**](ItemGroupsApi.md#listItemGroupPrices) | **GET** /itemGroups/{itemGroupId}/prices | List item group prices
[**listItemGroups**](ItemGroupsApi.md#listItemGroups) | **GET** /itemGroups | Lists item groups
[**updateItemGroupDocumentTemplate**](ItemGroupsApi.md#updateItemGroupDocumentTemplate) | **PUT** /itemGroups/{itemGroupId}/documentTemplates/{id} | Updates item group document template
[**updateItemGroupPrice**](ItemGroupsApi.md#updateItemGroupPrice) | **PUT** /itemGroups/{itemGroupId}/prices/{priceId} | Update item group price


<a name="createItemGroupPrice"></a>
# **createItemGroupPrice**
> Price createItemGroupPrice(itemGroupId, body)

Creates item group price

Creates an item group price

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

var body = new PakkasmarjaRestClient.Price(); // Price | Payload

apiInstance.createItemGroupPrice(itemGroupId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemGroupId** | **String**| item group id | 
 **body** | [**Price**](Price.md)| Payload | 

### Return type

[**Price**](Price.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

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

<a name="findItemGroupPrice"></a>
# **findItemGroupPrice**
> Price findItemGroupPrice(itemGroupId, priceId)

Find item group price

Finds a item group price

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

var priceId = "priceId_example"; // String | price id

apiInstance.findItemGroupPrice(itemGroupId, priceId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemGroupId** | **String**| item group id | 
 **priceId** | **String**| price id | 

### Return type

[**Price**](Price.md)

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

<a name="listItemGroupPrices"></a>
# **listItemGroupPrices**
> [Price] listItemGroupPrices(itemGroupId, opts)

List item group prices

Lists item group prices

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

var opts = { 
  'sortBy': "sortBy_example", // String | sort by (YEAR)
  'sortDir': "sortDir_example", // String | sort direction (ASC, DESC)
  'firstResult': 789, // Number | Offset of first result. Defaults to 0
  'maxResults': 789 // Number | Max results. Defaults to 5
};
apiInstance.listItemGroupPrices(itemGroupId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemGroupId** | **String**| item group id | 
 **sortBy** | **String**| sort by (YEAR) | [optional] 
 **sortDir** | **String**| sort direction (ASC, DESC) | [optional] 
 **firstResult** | **Number**| Offset of first result. Defaults to 0 | [optional] 
 **maxResults** | **Number**| Max results. Defaults to 5 | [optional] 

### Return type

[**[Price]**](Price.md)

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

<a name="updateItemGroupPrice"></a>
# **updateItemGroupPrice**
> Price updateItemGroupPrice(itemGroupId, priceId, body)

Update item group price

Updates a item group price

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

var priceId = "priceId_example"; // String | price id

var body = new PakkasmarjaRestClient.Price(); // Price | Payload

apiInstance.updateItemGroupPrice(itemGroupId, priceId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemGroupId** | **String**| item group id | 
 **priceId** | **String**| price id | 
 **body** | [**Price**](Price.md)| Payload | 

### Return type

[**Price**](Price.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

