# PakkasmarjaRestClient.ContractsApi

All URIs are relative to *https://localhost/rest/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createContract**](ContractsApi.md#createContract) | **POST** /contracts | Create contract
[**createContractDocumentSignRequest**](ContractsApi.md#createContractDocumentSignRequest) | **POST** /contracts/{id}/documents/{type}/signRequests | Requests contract document electronic signing
[**createContractDocumentTemplate**](ContractsApi.md#createContractDocumentTemplate) | **POST** /contracts/{contractId}/documentTemplates | Create contract document template
[**findContract**](ContractsApi.md#findContract) | **GET** /contracts/{id} | Find contract
[**findContractDocumentTemplate**](ContractsApi.md#findContractDocumentTemplate) | **GET** /contracts/{contractId}/documentTemplates/{contractDocumentTemplateId} | Find contract document template
[**getContractDocument**](ContractsApi.md#getContractDocument) | **GET** /contracts/{id}/documents/{type} | Returns contract document
[**listContractDocumentTemplates**](ContractsApi.md#listContractDocumentTemplates) | **GET** /contracts/{contractId}/documentTemplates | List contract document templates
[**listContractPrices**](ContractsApi.md#listContractPrices) | **GET** /contracts/{contractId}/prices | List contract prices
[**listContracts**](ContractsApi.md#listContracts) | **GET** /contracts | Lists contracts
[**updateContract**](ContractsApi.md#updateContract) | **PUT** /contracts/{id} | Update contract
[**updateContractDocumentTemplate**](ContractsApi.md#updateContractDocumentTemplate) | **PUT** /contracts/{contractId}/documentTemplates/{contractDocumentTemplateId} | Updates contract document template


<a name="createContract"></a>
# **createContract**
> Contract createContract(body)

Create contract

Create new contract

### Example
```javascript
var PakkasmarjaRestClient = require('pakkasmarja-rest-client');
var defaultClient = PakkasmarjaRestClient.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new PakkasmarjaRestClient.ContractsApi();

var body = new PakkasmarjaRestClient.Contract(); // Contract | Payload

apiInstance.createContract(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Contract**](Contract.md)| Payload | 

### Return type

[**Contract**](Contract.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="createContractDocumentSignRequest"></a>
# **createContractDocumentSignRequest**
> ContractDocumentSignRequest createContractDocumentSignRequest(id, type, ssn, authService, body)

Requests contract document electronic signing

Requests contract document electronic signing

### Example
```javascript
var PakkasmarjaRestClient = require('pakkasmarja-rest-client');
var defaultClient = PakkasmarjaRestClient.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new PakkasmarjaRestClient.ContractsApi();

var id = "id_example"; // String | contract id

var type = "type_example"; // String | document type

var ssn = "ssn_example"; // String | Social security number

var authService = "authService_example"; // String | Used auth service name

var body = new PakkasmarjaRestClient.ContractDocumentSignRequest(); // ContractDocumentSignRequest | Payload

apiInstance.createContractDocumentSignRequest(id, type, ssn, authService, body).then(function(data) {
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
 **ssn** | **String**| Social security number | 
 **authService** | **String**| Used auth service name | 
 **body** | [**ContractDocumentSignRequest**](ContractDocumentSignRequest.md)| Payload | 

### Return type

[**ContractDocumentSignRequest**](ContractDocumentSignRequest.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="createContractDocumentTemplate"></a>
# **createContractDocumentTemplate**
> ContractDocumentTemplate createContractDocumentTemplate(contractId, body)

Create contract document template

Create new contract document template

### Example
```javascript
var PakkasmarjaRestClient = require('pakkasmarja-rest-client');
var defaultClient = PakkasmarjaRestClient.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new PakkasmarjaRestClient.ContractsApi();

var contractId = "contractId_example"; // String | contract id

var body = new PakkasmarjaRestClient.ContractDocumentTemplate(); // ContractDocumentTemplate | Payload

apiInstance.createContractDocumentTemplate(contractId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractId** | **String**| contract id | 
 **body** | [**ContractDocumentTemplate**](ContractDocumentTemplate.md)| Payload | 

### Return type

[**ContractDocumentTemplate**](ContractDocumentTemplate.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="findContract"></a>
# **findContract**
> Contract findContract(id, opts)

Find contract

Finds contract by id

### Example
```javascript
var PakkasmarjaRestClient = require('pakkasmarja-rest-client');
var defaultClient = PakkasmarjaRestClient.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new PakkasmarjaRestClient.ContractsApi();

var id = "id_example"; // String | contract id

var opts = { 
  'accept': "accept_example" // String | Expected response format. Accepted values application/json for JSON reponse (default) and application/vnd.openxmlformats-officedocument.spreadsheetml.sheet for Excel response
};
apiInstance.findContract(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| contract id | 
 **accept** | **String**| Expected response format. Accepted values application/json for JSON reponse (default) and application/vnd.openxmlformats-officedocument.spreadsheetml.sheet for Excel response | [optional] 

### Return type

[**Contract**](Contract.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="findContractDocumentTemplate"></a>
# **findContractDocumentTemplate**
> ContractDocumentTemplate findContractDocumentTemplate(contractId, contractDocumentTemplateId)

Find contract document template

Finds a contract templates

### Example
```javascript
var PakkasmarjaRestClient = require('pakkasmarja-rest-client');
var defaultClient = PakkasmarjaRestClient.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new PakkasmarjaRestClient.ContractsApi();

var contractId = "contractId_example"; // String | contract id

var contractDocumentTemplateId = "contractDocumentTemplateId_example"; // String | contract id

apiInstance.findContractDocumentTemplate(contractId, contractDocumentTemplateId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractId** | **String**| contract id | 
 **contractDocumentTemplateId** | **String**| contract id | 

### Return type

[**ContractDocumentTemplate**](ContractDocumentTemplate.md)

### Authorization

[bearer](../README.md#bearer)

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
var defaultClient = PakkasmarjaRestClient.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

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

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="listContractDocumentTemplates"></a>
# **listContractDocumentTemplates**
> [ContractDocumentTemplate] listContractDocumentTemplates(contractId, opts)

List contract document templates

Lists contract templates

### Example
```javascript
var PakkasmarjaRestClient = require('pakkasmarja-rest-client');
var defaultClient = PakkasmarjaRestClient.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new PakkasmarjaRestClient.ContractsApi();

var contractId = "contractId_example"; // String | contract id

var opts = { 
  'type': "type_example" // String | Filter results by document template type
};
apiInstance.listContractDocumentTemplates(contractId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractId** | **String**| contract id | 
 **type** | **String**| Filter results by document template type | [optional] 

### Return type

[**[ContractDocumentTemplate]**](ContractDocumentTemplate.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="listContractPrices"></a>
# **listContractPrices**
> [Price] listContractPrices(contractId, opts)

List contract prices

Lists contract prices

### Example
```javascript
var PakkasmarjaRestClient = require('pakkasmarja-rest-client');
var defaultClient = PakkasmarjaRestClient.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new PakkasmarjaRestClient.ContractsApi();

var contractId = "contractId_example"; // String | contract id

var opts = { 
  'sortBy': "sortBy_example", // String | sort by (YEAR)
  'sortDir': "sortDir_example", // String | sort direction (ASC, DESC)
  'firstResult': 789, // Number | Offset of first result. Defaults to 0
  'maxResults': 789 // Number | Max results. Defaults to 5
};
apiInstance.listContractPrices(contractId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractId** | **String**| contract id | 
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

<a name="listContracts"></a>
# **listContracts**
> [Contract] listContracts(opts)

Lists contracts

Lists contracts

### Example
```javascript
var PakkasmarjaRestClient = require('pakkasmarja-rest-client');
var defaultClient = PakkasmarjaRestClient.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new PakkasmarjaRestClient.ContractsApi();

var opts = { 
  'accept': "accept_example", // String | Expected response format. Accepted values application/json for JSON reponse (default) and application/vnd.openxmlformats-officedocument.spreadsheetml.sheet for Excel response
  'listAll': true, // Boolean | Returns all contracts instead of just user's own contracts. User must have permission to do this.
  'itemGroupCategory': "itemGroupCategory_example", // String | Filters results by item group category.
  'itemGroupId': "itemGroupId_example", // String | Filters results by item group id.
  'year': 56, // Number | Filters results by year.
  'status': "status_example", // String | Filters results by status
  'firstResult': 789, // Number | Offset of first result. Defaults to 0
  'maxResults': 789 // Number | Max results. Defaults to 5
};
apiInstance.listContracts(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | **String**| Expected response format. Accepted values application/json for JSON reponse (default) and application/vnd.openxmlformats-officedocument.spreadsheetml.sheet for Excel response | [optional] 
 **listAll** | **Boolean**| Returns all contracts instead of just user&#39;s own contracts. User must have permission to do this. | [optional] 
 **itemGroupCategory** | **String**| Filters results by item group category. | [optional] 
 **itemGroupId** | **String**| Filters results by item group id. | [optional] 
 **year** | **Number**| Filters results by year. | [optional] 
 **status** | **String**| Filters results by status | [optional] 
 **firstResult** | **Number**| Offset of first result. Defaults to 0 | [optional] 
 **maxResults** | **Number**| Max results. Defaults to 5 | [optional] 

### Return type

[**[Contract]**](Contract.md)

### Authorization

[bearer](../README.md#bearer)

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
var defaultClient = PakkasmarjaRestClient.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

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

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="updateContractDocumentTemplate"></a>
# **updateContractDocumentTemplate**
> ContractDocumentTemplate updateContractDocumentTemplate(contractId, contractDocumentTemplateId, body)

Updates contract document template

Updates a contract templates

### Example
```javascript
var PakkasmarjaRestClient = require('pakkasmarja-rest-client');
var defaultClient = PakkasmarjaRestClient.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new PakkasmarjaRestClient.ContractsApi();

var contractId = "contractId_example"; // String | contract id

var contractDocumentTemplateId = "contractDocumentTemplateId_example"; // String | contract id

var body = new PakkasmarjaRestClient.ContractDocumentTemplate(); // ContractDocumentTemplate | Payload

apiInstance.updateContractDocumentTemplate(contractId, contractDocumentTemplateId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractId** | **String**| contract id | 
 **contractDocumentTemplateId** | **String**| contract id | 
 **body** | [**ContractDocumentTemplate**](ContractDocumentTemplate.md)| Payload | 

### Return type

[**ContractDocumentTemplate**](ContractDocumentTemplate.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

