# SoteapiClient.ContactsApi

All URIs are relative to *https://localhost/rest/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**findContact**](ContactsApi.md#findContact) | **GET** /contacts/{id} | Find contact
[**listContacts**](ContactsApi.md#listContacts) | **GET** /contacts | Lists contacts
[**updateContact**](ContactsApi.md#updateContact) | **PUT** /contacts/{id} | Update contact


<a name="findContact"></a>
# **findContact**
> Contact findContact(id)

Find contact

Finds contact by id

### Example
```javascript
var SoteapiClient = require('soteapi-client');

var apiInstance = new SoteapiClient.ContactsApi();

var id = "id_example"; // String | contact id

apiInstance.findContact(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| contact id | 

### Return type

[**Contact**](Contact.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="listContacts"></a>
# **listContacts**
> [Contact] listContacts()

Lists contacts

Lists contacts

### Example
```javascript
var SoteapiClient = require('soteapi-client');

var apiInstance = new SoteapiClient.ContactsApi();
apiInstance.listContacts().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Contact]**](Contact.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="updateContact"></a>
# **updateContact**
> Contact updateContact(id, body)

Update contact

Updates single contact

### Example
```javascript
var SoteapiClient = require('soteapi-client');

var apiInstance = new SoteapiClient.ContactsApi();

var id = "id_example"; // String | contact id

var body = new SoteapiClient.Contact(); // Contact | Payload

apiInstance.updateContact(id, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| contact id | 
 **body** | [**Contact**](Contact.md)| Payload | 

### Return type

[**Contact**](Contact.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

