# PakkasmarjaRestClient.ChatThreadsApi

All URIs are relative to *https://localhost/rest/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getChatThreadReport**](ChatThreadsApi.md#getChatThreadReport) | **GET** /chatThreads/{threadId}/reports/{type} | Returns chat thread report
[**listChatThreads**](ChatThreadsApi.md#listChatThreads) | **GET** /chatThreads | Returns list of chat threads


<a name="getChatThreadReport"></a>
# **getChatThreadReport**
> &#39;Blob&#39; getChatThreadReport(threadId, type, opts)

Returns chat thread report

Returns chat thread report

### Example
```javascript
var PakkasmarjaRestClient = require('pakkasmarja-rest-client');
var defaultClient = PakkasmarjaRestClient.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new PakkasmarjaRestClient.ChatThreadsApi();

var threadId = 789; // Number | chat thread id

var type = "type_example"; // String | report type. Accepted values summaryReport

var opts = { 
  'accept': "accept_example" // String | Expected response format. Accepted values application/vnd.openxmlformats for Excel response
};
apiInstance.getChatThreadReport(threadId, type, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **threadId** | **Number**| chat thread id | 
 **type** | **String**| report type. Accepted values summaryReport | 
 **accept** | **String**| Expected response format. Accepted values application/vnd.openxmlformats for Excel response | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="listChatThreads"></a>
# **listChatThreads**
> [ChatThread] listChatThreads(opts)

Returns list of chat threads

Returns list of chat threads

### Example
```javascript
var PakkasmarjaRestClient = require('pakkasmarja-rest-client');
var defaultClient = PakkasmarjaRestClient.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new PakkasmarjaRestClient.ChatThreadsApi();

var opts = { 
  'originId': "originId_example" // String | Filter chat threads by origin id
};
apiInstance.listChatThreads(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **originId** | **String**| Filter chat threads by origin id | [optional] 

### Return type

[**[ChatThread]**](ChatThread.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

