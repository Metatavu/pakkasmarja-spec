# PakkasmarjaRestClient.DeliveryPlacesApi

All URIs are relative to *https://localhost/rest/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**findDeliveryPlace**](DeliveryPlacesApi.md#findDeliveryPlace) | **GET** /deliveryPlaces/{id} | Find delivery place
[**listDeliveryPlaces**](DeliveryPlacesApi.md#listDeliveryPlaces) | **GET** /deliveryPlaces | Lists delivery places


<a name="findDeliveryPlace"></a>
# **findDeliveryPlace**
> DeliveryPlace findDeliveryPlace(id)

Find delivery place

Finds delivery place by id

### Example
```javascript
var PakkasmarjaRestClient = require('pakkasmarja-rest-client');
var defaultClient = PakkasmarjaRestClient.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new PakkasmarjaRestClient.DeliveryPlacesApi();

var id = "id_example"; // String | delivery place id

apiInstance.findDeliveryPlace(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| delivery place id | 

### Return type

[**DeliveryPlace**](DeliveryPlace.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="listDeliveryPlaces"></a>
# **listDeliveryPlaces**
> [DeliveryPlace] listDeliveryPlaces()

Lists delivery places

Lists delivery places

### Example
```javascript
var PakkasmarjaRestClient = require('pakkasmarja-rest-client');
var defaultClient = PakkasmarjaRestClient.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new PakkasmarjaRestClient.DeliveryPlacesApi();
apiInstance.listDeliveryPlaces().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[DeliveryPlace]**](DeliveryPlace.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

