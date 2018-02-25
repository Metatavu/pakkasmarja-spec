# PakkasmarjaRestClient.ContractsApi

All URIs are relative to *https://localhost/rest/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createContractDocumentSignRequest**](ContractsApi.md#createContractDocumentSignRequest) | **POST** /contracts/{id}/documents/{type}/signRequests | Requests contract document electronic signing
[**exportContract**](ContractsApi.md#exportContract) | **GET** /contracts/{id}/export | Export contract data
[**findContract**](ContractsApi.md#findContract) | **GET** /contracts/{id} | Find contract
[**getContractDocument**](ContractsApi.md#getContractDocument) | **GET** /contracts/{id}/documents/{type} | Returns contract document
[**listContracts**](ContractsApi.md#listContracts) | **GET** /contracts | Lists contracts
[**updateContract**](ContractsApi.md#updateContract) | **PUT** /contracts/{id} | Update contract


<a name="createContractDocumentSignRequest"></a>
# **createContractDocumentSignRequest**
> ContractDocumentSignRequest createContractDocumentSignRequest(id, type, body)

Requests contract document electronic signing

Requests contract document electronic signing

### Example
```javascript
var PakkasmarjaRestClient = require('pakkasmarja-rest-client');

var apiInstance = new PakkasmarjaRestClient.ContractsApi();

var id = "id_example"; // String | contract id

var type = "type_example"; // String | document type

var body = new PakkasmarjaRestClient.ContractDocumentSignRequest(); // ContractDocumentSignRequest | Payload

apiInstance.createContractDocumentSignRequest(id, type, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| contract id | 
 **type** | **String**| document type | 
 **body** | [**ContractDocumentSignRequest**](ContractDocumentSignRequest.md)| Payload | 

### Return type

[**ContractDocumentSignRequest**](ContractDocumentSignRequest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="exportContract"></a>
# **exportContract**
> &#39;Blob&#39; exportContract(id, format)

Export contract data

Exports contract&#39;s data in specified format

### Example
```javascript
var PakkasmarjaRestClient = require('pakkasmarja-rest-client');

var apiInstance = new PakkasmarjaRestClient.ContractsApi();

var id = "id_example"; // String | contract id

var format = "format_example"; // String | Export format (XLSX)

apiInstance.exportContract(id, format).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| contract id | 
 **format** | **String**| Export format (XLSX) | 

### Return type

**&#39;Blob&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="findContract"></a>
# **findContract**
> Contract findContract(id)

Find contract

Finds contract by id

### Example
```javascript
var PakkasmarjaRestClient = require('pakkasmarja-rest-client');

var apiInstance = new PakkasmarjaRestClient.ContractsApi();

var id = "id_example"; // String | contract id

apiInstance.findContract(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| contract id | 

### Return type

[**Contract**](Contract.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="getContractDocument"></a>
# **getContractDocument**
> &#39;Blob&#39; getContractDocument(id, type, format)

Returns contract document

Returns contract document by type

### Example
```javascript
var PakkasmarjaRestClient = require('pakkasmarja-rest-client');

var apiInstance = new PakkasmarjaRestClient.ContractsApi();

var id = "id_example"; // String | contract id

var type = "type_example"; // String | document type

var format = "format_example"; // String | document format (HTML or PDF)

apiInstance.getContractDocument(id, type, format).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| contract id | 
 **type** | **String**| document type | 
 **format** | **String**| document format (HTML or PDF) | 

### Return type

**&#39;Blob&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="listContracts"></a>
# **listContracts**
> [Contract] listContracts()

Lists contracts

Lists contracts

### Example
```javascript
var PakkasmarjaRestClient = require('pakkasmarja-rest-client');

var apiInstance = new PakkasmarjaRestClient.ContractsApi();
apiInstance.listContracts().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Contract]**](Contract.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="updateContract"></a>
# **updateContract**
> Contract updateContract(id, body)

Update contract

Updates single contract

### Example
```javascript
var PakkasmarjaRestClient = require('pakkasmarja-rest-client');

var apiInstance = new PakkasmarjaRestClient.ContractsApi();

var id = "id_example"; // String | contract id

var body = new PakkasmarjaRestClient.Contract(); // Contract | Payload

apiInstance.updateContract(id, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| contract id | 
 **body** | [**Contract**](Contract.md)| Payload | 

### Return type

[**Contract**](Contract.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

