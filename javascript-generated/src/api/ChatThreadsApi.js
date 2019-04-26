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
    define(['ApiClient', 'model/BadRequest', 'model/ChatThread', 'model/Forbidden', 'model/InternalServerError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequest'), require('../model/ChatThread'), require('../model/Forbidden'), require('../model/InternalServerError'));
  } else {
    // Browser globals (root is window)
    if (!root.PakkasmarjaRestClient) {
      root.PakkasmarjaRestClient = {};
    }
    root.PakkasmarjaRestClient.ChatThreadsApi = factory(root.PakkasmarjaRestClient.ApiClient, root.PakkasmarjaRestClient.BadRequest, root.PakkasmarjaRestClient.ChatThread, root.PakkasmarjaRestClient.Forbidden, root.PakkasmarjaRestClient.InternalServerError);
  }
}(this, function(ApiClient, BadRequest, ChatThread, Forbidden, InternalServerError) {
  'use strict';

  /**
   * ChatThreads service.
   * @module api/ChatThreadsApi
   * @version 0.0.14
   */

  /**
   * Constructs a new ChatThreadsApi. 
   * @alias module:api/ChatThreadsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Returns chat thread report
     * Returns chat thread report
     * @param {Number} threadId chat thread id
     * @param {String} type report type. Accepted values summaryReport
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Expected response format. Accepted values application/vnd.openxmlformats for Excel response
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link 'Blob'} and HTTP response
     */
    this.getChatThreadReportWithHttpInfo = function(threadId, type, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'threadId' is set
      if (threadId === undefined || threadId === null) {
        throw new Error("Missing the required parameter 'threadId' when calling getChatThreadReport");
      }

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling getChatThreadReport");
      }


      var pathParams = {
        'threadId': threadId,
        'type': type
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Accept': opts['accept']
      };
      var formParams = {
      };

      var authNames = ['bearer'];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/chatThreads/{threadId}/reports/{type}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Returns chat thread report
     * Returns chat thread report
     * @param {Number} threadId chat thread id
     * @param {String} type report type. Accepted values summaryReport
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Expected response format. Accepted values application/vnd.openxmlformats for Excel response
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link 'Blob'}
     */
    this.getChatThreadReport = function(threadId, type, opts) {
      return this.getChatThreadReportWithHttpInfo(threadId, type, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns list of chat threads
     * Returns list of chat threads
     * @param {Object} opts Optional parameters
     * @param {String} opts.originId Filter chat threads by origin id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ChatThread>} and HTTP response
     */
    this.listChatThreadsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'originId': opts['originId'],
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
      var returnType = [ChatThread];

      return this.apiClient.callApi(
        '/chatThreads', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Returns list of chat threads
     * Returns list of chat threads
     * @param {Object} opts Optional parameters
     * @param {String} opts.originId Filter chat threads by origin id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ChatThread>}
     */
    this.listChatThreads = function(opts) {
      return this.listChatThreadsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));