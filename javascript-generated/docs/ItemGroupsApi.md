# PakkasmarjaRestClient.ItemGroupsApi

All URIs are relative to *https://localhost/rest/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**findItemGroup**](ItemGroupsApi.md#findItemGroup) | **GET** /itemGroups/{id} | Find item group
[**listItemGroups**](ItemGroupsApi.md#listItemGroups) | **GET** /itemGroups | Lists itemGroups


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

<a name="listItemGroups"></a>
# **listItemGroups**
> [ItemGroup] listItemGroups()

Lists itemGroups

Lists itemGroups

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

