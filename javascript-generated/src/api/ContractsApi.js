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
    define(['ApiClient', 'model/BadRequest', 'model/Contract', 'model/ContractDocumentSignRequest', 'model/ContractDocumentTemplate', 'model/Forbidden', 'model/InternalServerError', 'model/Price'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequest'), require('../model/Contract'), require('../model/ContractDocumentSignRequest'), require('../model/ContractDocumentTemplate'), require('../model/Forbidden'), require('../model/InternalServerError'), require('../model/Price'));
  } else {
    // Browser globals (root is window)
    if (!root.PakkasmarjaRestClient) {
      root.PakkasmarjaRestClient = {};
    }
    root.PakkasmarjaRestClient.ContractsApi = factory(root.PakkasmarjaRestClient.ApiClient, root.PakkasmarjaRestClient.BadRequest, root.PakkasmarjaRestClient.Contract, root.PakkasmarjaRestClient.ContractDocumentSignRequest, root.PakkasmarjaRestClient.ContractDocumentTemplate, root.PakkasmarjaRestClient.Forbidden, root.PakkasmarjaRestClient.InternalServerError, root.PakkasmarjaRestClient.Price);
  }
}(this, function(ApiClient, BadRequest, Contract, ContractDocumentSignRequest, ContractDocumentTemplate, Forbidden, InternalServerError, Price) {
  'use strict';

  /**
   * Contracts service.
   * @module api/ContractsApi
   * @version 0.0.9
   */

  /**
   * Constructs a new ContractsApi. 
   * @alias module:api/ContractsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create contract
     * Create new contract
     * @param {module:model/Contract} body Payload
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Contract} and HTTP response
     */
    this.createContractWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createContract");
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
      var returnType = Contract;

      return this.apiClient.callApi(
        '/contacts', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create contract
     * Create new contract
     * @param {module:model/Contract} body Payload
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Contract}
     */
    this.createContract = function(body) {
      return this.createContractWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Requests contract document electronic signing
     * Requests contract document electronic signing
     * @param {String} id contract id
     * @param {String} type document type
     * @param {String} ssn Social security number
     * @param {String} authService Used auth service name
     * @param {module:model/ContractDocumentSignRequest} body Payload
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ContractDocumentSignRequest} and HTTP response
     */
    this.createContractDocumentSignRequestWithHttpInfo = function(id, type, ssn, authService, body) {
      var postBody = body;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling createContractDocumentSignRequest");
      }

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling createContractDocumentSignRequest");
      }

      // verify the required parameter 'ssn' is set
      if (ssn === undefined || ssn === null) {
        throw new Error("Missing the required parameter 'ssn' when calling createContractDocumentSignRequest");
      }

      // verify the required parameter 'authService' is set
      if (authService === undefined || authService === null) {
        throw new Error("Missing the required parameter 'authService' when calling createContractDocumentSignRequest");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createContractDocumentSignRequest");
      }


      var pathParams = {
        'id': id,
        'type': type
      };
      var queryParams = {
        'ssn': ssn,
        'authService': authService,
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
      var returnType = ContractDocumentSignRequest;

      return this.apiClient.callApi(
        '/contracts/{id}/documents/{type}/signRequests', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Requests contract document electronic signing
     * Requests contract document electronic signing
     * @param {String} id contract id
     * @param {String} type document type
     * @param {String} ssn Social security number
     * @param {String} authService Used auth service name
     * @param {module:model/ContractDocumentSignRequest} body Payload
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ContractDocumentSignRequest}
     */
    this.createContractDocumentSignRequest = function(id, type, ssn, authService, body) {
      return this.createContractDocumentSignRequestWithHttpInfo(id, type, ssn, authService, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create contract document template
     * Create new contract document template
     * @param {String} contractId contract id
     * @param {module:model/ContractDocumentTemplate} body Payload
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ContractDocumentTemplate} and HTTP response
     */
    this.createContractDocumentTemplateWithHttpInfo = function(contractId, body) {
      var postBody = body;

      // verify the required parameter 'contractId' is set
      if (contractId === undefined || contractId === null) {
        throw new Error("Missing the required parameter 'contractId' when calling createContractDocumentTemplate");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createContractDocumentTemplate");
      }


      var pathParams = {
        'contractId': contractId
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
      var returnType = ContractDocumentTemplate;

      return this.apiClient.callApi(
        '/contracts/{contractId}/documentTemplates', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create contract document template
     * Create new contract document template
     * @param {String} contractId contract id
     * @param {module:model/ContractDocumentTemplate} body Payload
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ContractDocumentTemplate}
     */
    this.createContractDocumentTemplate = function(contractId, body) {
      return this.createContractDocumentTemplateWithHttpInfo(contractId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Find contract
     * Finds contract by id
     * @param {String} id contract id
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Expected response format. Accepted values application/json for JSON reponse (default) and application/vnd.openxmlformats-officedocument.spreadsheetml.sheet for Excel response
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Contract} and HTTP response
     */
    this.findContractWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling findContract");
      }


      var pathParams = {
        'id': id
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
      var returnType = Contract;

      return this.apiClient.callApi(
        '/contracts/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Find contract
     * Finds contract by id
     * @param {String} id contract id
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Expected response format. Accepted values application/json for JSON reponse (default) and application/vnd.openxmlformats-officedocument.spreadsheetml.sheet for Excel response
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Contract}
     */
    this.findContract = function(id, opts) {
      return this.findContractWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Find contract document template
     * Finds a contract templates
     * @param {String} contractId contract id
     * @param {String} contractDocumentTemplateId contract id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ContractDocumentTemplate} and HTTP response
     */
    this.findContractDocumentTemplateWithHttpInfo = function(contractId, contractDocumentTemplateId) {
      var postBody = null;

      // verify the required parameter 'contractId' is set
      if (contractId === undefined || contractId === null) {
        throw new Error("Missing the required parameter 'contractId' when calling findContractDocumentTemplate");
      }

      // verify the required parameter 'contractDocumentTemplateId' is set
      if (contractDocumentTemplateId === undefined || contractDocumentTemplateId === null) {
        throw new Error("Missing the required parameter 'contractDocumentTemplateId' when calling findContractDocumentTemplate");
      }


      var pathParams = {
        'contractId': contractId,
        'contractDocumentTemplateId': contractDocumentTemplateId
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
      var returnType = ContractDocumentTemplate;

      return this.apiClient.callApi(
        '/contracts/{contractId}/documentTemplates/{contractDocumentTemplateId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Find contract document template
     * Finds a contract templates
     * @param {String} contractId contract id
     * @param {String} contractDocumentTemplateId contract id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ContractDocumentTemplate}
     */
    this.findContractDocumentTemplate = function(contractId, contractDocumentTemplateId) {
      return this.findContractDocumentTemplateWithHttpInfo(contractId, contractDocumentTemplateId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns contract document
     * Returns contract document by type
     * @param {String} id contract id
     * @param {String} type document type
     * @param {String} format document format (HTML or PDF)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link 'Blob'} and HTTP response
     */
    this.getContractDocumentWithHttpInfo = function(id, type, format) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getContractDocument");
      }

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling getContractDocument");
      }

      // verify the required parameter 'format' is set
      if (format === undefined || format === null) {
        throw new Error("Missing the required parameter 'format' when calling getContractDocument");
      }


      var pathParams = {
        'id': id,
        'type': type
      };
      var queryParams = {
        'format': format,
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
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/contracts/{id}/documents/{type}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Returns contract document
     * Returns contract document by type
     * @param {String} id contract id
     * @param {String} type document type
     * @param {String} format document format (HTML or PDF)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link 'Blob'}
     */
    this.getContractDocument = function(id, type, format) {
      return this.getContractDocumentWithHttpInfo(id, type, format)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List contract document templates
     * Lists contract templates
     * @param {String} contractId contract id
     * @param {Object} opts Optional parameters
     * @param {String} opts.type Filter results by document template type
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ContractDocumentTemplate>} and HTTP response
     */
    this.listContractDocumentTemplatesWithHttpInfo = function(contractId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'contractId' is set
      if (contractId === undefined || contractId === null) {
        throw new Error("Missing the required parameter 'contractId' when calling listContractDocumentTemplates");
      }


      var pathParams = {
        'contractId': contractId
      };
      var queryParams = {
        'type': opts['type'],
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
      var returnType = [ContractDocumentTemplate];

      return this.apiClient.callApi(
        '/contracts/{contractId}/documentTemplates', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List contract document templates
     * Lists contract templates
     * @param {String} contractId contract id
     * @param {Object} opts Optional parameters
     * @param {String} opts.type Filter results by document template type
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ContractDocumentTemplate>}
     */
    this.listContractDocumentTemplates = function(contractId, opts) {
      return this.listContractDocumentTemplatesWithHttpInfo(contractId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List contract prices
     * Lists contract prices
     * @param {String} contractId contract id
     * @param {Object} opts Optional parameters
     * @param {String} opts.sortBy sort by (YEAR)
     * @param {String} opts.sortDir sort direction (ASC, DESC)
     * @param {Number} opts.firstResult Offset of first result. Defaults to 0
     * @param {Number} opts.maxResults Max results. Defaults to 5
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Price>} and HTTP response
     */
    this.listContractPricesWithHttpInfo = function(contractId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'contractId' is set
      if (contractId === undefined || contractId === null) {
        throw new Error("Missing the required parameter 'contractId' when calling listContractPrices");
      }


      var pathParams = {
        'contractId': contractId
      };
      var queryParams = {
        'sortBy': opts['sortBy'],
        'sortDir': opts['sortDir'],
        'firstResult': opts['firstResult'],
        'maxResults': opts['maxResults'],
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
      var returnType = [Price];

      return this.apiClient.callApi(
        '/contracts/{contractId}/prices', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List contract prices
     * Lists contract prices
     * @param {String} contractId contract id
     * @param {Object} opts Optional parameters
     * @param {String} opts.sortBy sort by (YEAR)
     * @param {String} opts.sortDir sort direction (ASC, DESC)
     * @param {Number} opts.firstResult Offset of first result. Defaults to 0
     * @param {Number} opts.maxResults Max results. Defaults to 5
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Price>}
     */
    this.listContractPrices = function(contractId, opts) {
      return this.listContractPricesWithHttpInfo(contractId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Lists contracts
     * Lists contracts
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Expected response format. Accepted values application/json for JSON reponse (default) and application/vnd.openxmlformats-officedocument.spreadsheetml.sheet for Excel response
     * @param {Boolean} opts.listAll Returns all contracts instead of just user&#39;s own contracts. User must have permission to do this.
     * @param {String} opts.itemGroupCategory Filters results by item group category.
     * @param {String} opts.itemGroupId Filters results by item group id.
     * @param {Number} opts.year Filters results by year.
     * @param {String} opts.status Filters results by status
     * @param {Number} opts.firstResult Offset of first result. Defaults to 0
     * @param {Number} opts.maxResults Max results. Defaults to 5
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Contract>} and HTTP response
     */
    this.listContractsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'listAll': opts['listAll'],
        'itemGroupCategory': opts['itemGroupCategory'],
        'itemGroupId': opts['itemGroupId'],
        'year': opts['year'],
        'status': opts['status'],
        'firstResult': opts['firstResult'],
        'maxResults': opts['maxResults'],
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
      var returnType = [Contract];

      return this.apiClient.callApi(
        '/contracts', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Lists contracts
     * Lists contracts
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Expected response format. Accepted values application/json for JSON reponse (default) and application/vnd.openxmlformats-officedocument.spreadsheetml.sheet for Excel response
     * @param {Boolean} opts.listAll Returns all contracts instead of just user&#39;s own contracts. User must have permission to do this.
     * @param {String} opts.itemGroupCategory Filters results by item group category.
     * @param {String} opts.itemGroupId Filters results by item group id.
     * @param {Number} opts.year Filters results by year.
     * @param {String} opts.status Filters results by status
     * @param {Number} opts.firstResult Offset of first result. Defaults to 0
     * @param {Number} opts.maxResults Max results. Defaults to 5
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Contract>}
     */
    this.listContracts = function(opts) {
      return this.listContractsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update contract
     * Updates single contract
     * @param {String} id contract id
     * @param {module:model/Contract} body Payload
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Contract} and HTTP response
     */
    this.updateContractWithHttpInfo = function(id, body) {
      var postBody = body;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateContract");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateContract");
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

      var authNames = ['bearer'];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = Contract;

      return this.apiClient.callApi(
        '/contracts/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update contract
     * Updates single contract
     * @param {String} id contract id
     * @param {module:model/Contract} body Payload
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Contract}
     */
    this.updateContract = function(id, body) {
      return this.updateContractWithHttpInfo(id, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Updates contract document template
     * Updates a contract templates
     * @param {String} contractId contract id
     * @param {String} contractDocumentTemplateId contract id
     * @param {module:model/ContractDocumentTemplate} body Payload
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ContractDocumentTemplate} and HTTP response
     */
    this.updateContractDocumentTemplateWithHttpInfo = function(contractId, contractDocumentTemplateId, body) {
      var postBody = body;

      // verify the required parameter 'contractId' is set
      if (contractId === undefined || contractId === null) {
        throw new Error("Missing the required parameter 'contractId' when calling updateContractDocumentTemplate");
      }

      // verify the required parameter 'contractDocumentTemplateId' is set
      if (contractDocumentTemplateId === undefined || contractDocumentTemplateId === null) {
        throw new Error("Missing the required parameter 'contractDocumentTemplateId' when calling updateContractDocumentTemplate");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateContractDocumentTemplate");
      }


      var pathParams = {
        'contractId': contractId,
        'contractDocumentTemplateId': contractDocumentTemplateId
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
      var returnType = ContractDocumentTemplate;

      return this.apiClient.callApi(
        '/contracts/{contractId}/documentTemplates/{contractDocumentTemplateId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Updates contract document template
     * Updates a contract templates
     * @param {String} contractId contract id
     * @param {String} contractDocumentTemplateId contract id
     * @param {module:model/ContractDocumentTemplate} body Payload
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ContractDocumentTemplate}
     */
    this.updateContractDocumentTemplate = function(contractId, contractDocumentTemplateId, body) {
      return this.updateContractDocumentTemplateWithHttpInfo(contractId, contractDocumentTemplateId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
