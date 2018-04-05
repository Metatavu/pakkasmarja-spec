/**
 * Pakkasmarja REST API
 * REST API for Pakkasmarja
 *
 * OpenAPI spec version: 0.0.3
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
    define(['ApiClient', 'model/BadRequest', 'model/Forbidden', 'model/InternalServerError', 'model/Operation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequest'), require('../model/Forbidden'), require('../model/InternalServerError'), require('../model/Operation'));
  } else {
    // Browser globals (root is window)
    if (!root.PakkasmarjaRestClient) {
      root.PakkasmarjaRestClient = {};
    }
    root.PakkasmarjaRestClient.OperationsApi = factory(root.PakkasmarjaRestClient.ApiClient, root.PakkasmarjaRestClient.BadRequest, root.PakkasmarjaRestClient.Forbidden, root.PakkasmarjaRestClient.InternalServerError, root.PakkasmarjaRestClient.Operation);
  }
}(this, function(ApiClient, BadRequest, Forbidden, InternalServerError, Operation) {
  'use strict';

  /**
   * Operations service.
   * @module api/OperationsApi
   * @version 0.0.11
   */

  /**
   * Constructs a new OperationsApi. 
   * @alias module:api/OperationsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Creates new operation
     * Creates new operation
     * @param {module:model/Operation} body Payload
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Operation} and HTTP response
     */
    this.createOperationWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createOperation");
      }


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

      var authNames = ['bearer'];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = Operation;

      return this.apiClient.callApi(
        '/operations', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Creates new operation
     * Creates new operation
     * @param {module:model/Operation} body Payload
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Operation}
     */
    this.createOperation = function(body) {
      return this.createOperationWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
