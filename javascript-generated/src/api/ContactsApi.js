/**
 * Pakkasmarja REST API
 * REST API for Pakkasmarja
 *
 * OpenAPI spec version: 0.0.2
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BadRequest', 'model/Contact', 'model/Forbidden', 'model/InternalServerError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequest'), require('../model/Contact'), require('../model/Forbidden'), require('../model/InternalServerError'));
  } else {
    // Browser globals (root is window)
    if (!root.SoteapiClient) {
      root.SoteapiClient = {};
    }
    root.SoteapiClient.ContactsApi = factory(root.SoteapiClient.ApiClient, root.SoteapiClient.BadRequest, root.SoteapiClient.Contact, root.SoteapiClient.Forbidden, root.SoteapiClient.InternalServerError);
  }
}(this, function(ApiClient, BadRequest, Contact, Forbidden, InternalServerError) {
  'use strict';

  /**
   * Contacts service.
   * @module api/ContactsApi
   * @version 0.0.1
   */

  /**
   * Constructs a new ContactsApi. 
   * @alias module:api/ContactsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Find contact
     * Finds contact by id
     * @param {String} id contact id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Contact} and HTTP response
     */
    this.findContactWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling findContact");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = Contact;

      return this.apiClient.callApi(
        '/contacts/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Find contact
     * Finds contact by id
     * @param {String} id contact id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Contact}
     */
    this.findContact = function(id) {
      return this.findContactWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Lists contacts
     * Lists contacts
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Contact>} and HTTP response
     */
    this.listContactsWithHttpInfo = function() {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = [Contact];

      return this.apiClient.callApi(
        '/contacts', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Lists contacts
     * Lists contacts
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Contact>}
     */
    this.listContacts = function() {
      return this.listContactsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update contact
     * Updates single contact
     * @param {String} id contact id
     * @param {module:model/Contact} body Payload
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Contact} and HTTP response
     */
    this.updateContactWithHttpInfo = function(id, body) {
      var postBody = body;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateContact");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateContact");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = Contact;

      return this.apiClient.callApi(
        '/contacts/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update contact
     * Updates single contact
     * @param {String} id contact id
     * @param {module:model/Contact} body Payload
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Contact}
     */
    this.updateContact = function(id, body) {
      return this.updateContactWithHttpInfo(id, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
