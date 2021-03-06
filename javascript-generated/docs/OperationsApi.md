# PakkasmarjaRestClient.OperationsApi

All URIs are relative to *https://localhost/rest/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOperation**](OperationsApi.md#createOperation) | **POST** /operations | Creates new operation


<a name="createOperation"></a>
# **createOperation**
> Operation createOperation(body)

Creates new operation

Creates new operation

### Example
```javascript
var PakkasmarjaRestClient = require('pakkasmarja-rest-client');
var defaultClient = PakkasmarjaRestClient.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new PakkasmarjaRestClient.OperationsApi();

var body = new PakkasmarjaRestClient.Operation(); // Operation | Payload

apiInstance.createOperation(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Operation**](Operation.md)| Payload | 

### Return type

[**Operation**](Operation.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

