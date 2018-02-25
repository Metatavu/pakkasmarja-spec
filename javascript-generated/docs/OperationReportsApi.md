# PakkasmarjaRestClient.OperationReportsApi

All URIs are relative to *https://localhost/rest/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**findOperationReport**](OperationReportsApi.md#findOperationReport) | **GET** /operationReports/{id} | Find operation report
[**listOperationReportItems**](OperationReportsApi.md#listOperationReportItems) | **GET** /operationReports/{id}/items | List operation report items
[**listOperationReports**](OperationReportsApi.md#listOperationReports) | **GET** /operationReports | List operation reports


<a name="findOperationReport"></a>
# **findOperationReport**
> OperationReport findOperationReport(id)

Find operation report

Find operation report by id

### Example
```javascript
var PakkasmarjaRestClient = require('pakkasmarja-rest-client');

var apiInstance = new PakkasmarjaRestClient.OperationReportsApi();

var id = "id_example"; // String | operation report id

apiInstance.findOperationReport(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| operation report id | 

### Return type

[**OperationReport**](OperationReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="listOperationReportItems"></a>
# **listOperationReportItems**
> OperationReportItem listOperationReportItems(id)

List operation report items

Lists operation report items

### Example
```javascript
var PakkasmarjaRestClient = require('pakkasmarja-rest-client');

var apiInstance = new PakkasmarjaRestClient.OperationReportsApi();

var id = "id_example"; // String | operation report id

apiInstance.listOperationReportItems(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| operation report id | 

### Return type

[**OperationReportItem**](OperationReportItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="listOperationReports"></a>
# **listOperationReports**
> [OperationReport] listOperationReports(opts)

List operation reports

Lists operation reports

### Example
```javascript
var PakkasmarjaRestClient = require('pakkasmarja-rest-client');

var apiInstance = new PakkasmarjaRestClient.OperationReportsApi();

var opts = { 
  'type': "type_example", // String | filter by type
  'sortBy': "sortBy_example", // String | sort by (CREATED)
  'sortDir': "sortDir_example", // String | sort direction (ASC, DESC)
  'firstResult': 789, // Number | Offset of first result. Defaults to 0
  'maxResults': 789 // Number | Max results. Defaults to 20
};
apiInstance.listOperationReports(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| filter by type | [optional] 
 **sortBy** | **String**| sort by (CREATED) | [optional] 
 **sortDir** | **String**| sort direction (ASC, DESC) | [optional] 
 **firstResult** | **Number**| Offset of first result. Defaults to 0 | [optional] 
 **maxResults** | **Number**| Max results. Defaults to 20 | [optional] 

### Return type

[**[OperationReport]**](OperationReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

