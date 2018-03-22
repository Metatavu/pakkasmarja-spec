# PakkasmarjaRestClient.SignAuthenticationServicesApi

All URIs are relative to *https://localhost/rest/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listSignAuthenticationServices**](SignAuthenticationServicesApi.md#listSignAuthenticationServices) | **GET** /signAuthenticationServices | List sign authentication services


<a name="listSignAuthenticationServices"></a>
# **listSignAuthenticationServices**
> [SignAuthenticationService] listSignAuthenticationServices()

List sign authentication services

List available sign authentication services

### Example
```javascript
var PakkasmarjaRestClient = require('pakkasmarja-rest-client');
var defaultClient = PakkasmarjaRestClient.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new PakkasmarjaRestClient.SignAuthenticationServicesApi();
apiInstance.listSignAuthenticationServices().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[SignAuthenticationService]**](SignAuthenticationService.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

