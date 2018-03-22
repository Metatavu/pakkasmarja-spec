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
    define(['ApiClient', 'model/BadRequest', 'model/Forbidden', 'model/InternalServerError', 'model/SignAuthenticationService'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequest'), require('../model/Forbidden'), require('../model/InternalServerError'), require('../model/SignAuthenticationService'));
  } else {
    // Browser globals (root is window)
    if (!root.PakkasmarjaRestClient) {
      root.PakkasmarjaRestClient = {};
    }
    root.PakkasmarjaRestClient.SignAuthenticationServicesApi = factory(root.PakkasmarjaRestClient.ApiClient, root.PakkasmarjaRestClient.BadRequest, root.PakkasmarjaRestClient.Forbidden, root.PakkasmarjaRestClient.InternalServerError, root.PakkasmarjaRestClient.SignAuthenticationService);
  }
}(this, function(ApiClient, BadRequest, Forbidden, InternalServerError, SignAuthenticationService) {
  'use strict';

  /**
   * SignAuthenticationServices service.
   * @module api/SignAuthenticationServicesApi
   * @version 0.0.7
   */

  /**
   * Constructs a new SignAuthenticationServicesApi. 
   * @alias module:api/SignAuthenticationServicesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * List sign authentication services
     * List available sign authentication services
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/SignAuthenticationService>} and HTTP response
     */
    this.listSignAuthenticationServicesWithHttpInfo = function() {
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

      var authNames = ['bearer'];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = [SignAuthenticationService];

      return this.apiClient.callApi(
        '/signAuthenticationServices', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List sign authentication services
     * List available sign authentication services
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/SignAuthenticationService>}
     */
    this.listSignAuthenticationServices = function() {
      return this.listSignAuthenticationServicesWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
