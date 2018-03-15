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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Address', 'model/BadRequest', 'model/Contact', 'model/Contract', 'model/ContractDocumentSignRequest', 'model/ContractDocumentTemplate', 'model/DeliveryPlace', 'model/Forbidden', 'model/InternalServerError', 'model/ItemGroup', 'model/ItemGroupDocumentTemplate', 'model/NotFound', 'model/NotImplemented', 'model/Operation', 'model/OperationReport', 'model/OperationReportItem', 'api/ContactsApi', 'api/ContractsApi', 'api/DeliveryPlacesApi', 'api/ItemGroupsApi', 'api/OperationReportsApi', 'api/OperationsApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Address'), require('./model/BadRequest'), require('./model/Contact'), require('./model/Contract'), require('./model/ContractDocumentSignRequest'), require('./model/ContractDocumentTemplate'), require('./model/DeliveryPlace'), require('./model/Forbidden'), require('./model/InternalServerError'), require('./model/ItemGroup'), require('./model/ItemGroupDocumentTemplate'), require('./model/NotFound'), require('./model/NotImplemented'), require('./model/Operation'), require('./model/OperationReport'), require('./model/OperationReportItem'), require('./api/ContactsApi'), require('./api/ContractsApi'), require('./api/DeliveryPlacesApi'), require('./api/ItemGroupsApi'), require('./api/OperationReportsApi'), require('./api/OperationsApi'));
  }
}(function(ApiClient, Address, BadRequest, Contact, Contract, ContractDocumentSignRequest, ContractDocumentTemplate, DeliveryPlace, Forbidden, InternalServerError, ItemGroup, ItemGroupDocumentTemplate, NotFound, NotImplemented, Operation, OperationReport, OperationReportItem, ContactsApi, ContractsApi, DeliveryPlacesApi, ItemGroupsApi, OperationReportsApi, OperationsApi) {
  'use strict';

  /**
   * REST_API_for_Pakkasmarja.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var PakkasmarjaRestClient = require('index'); // See note below*.
   * var xxxSvc = new PakkasmarjaRestClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new PakkasmarjaRestClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new PakkasmarjaRestClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new PakkasmarjaRestClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 0.0.6
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Address model constructor.
     * @property {module:model/Address}
     */
    Address: Address,
    /**
     * The BadRequest model constructor.
     * @property {module:model/BadRequest}
     */
    BadRequest: BadRequest,
    /**
     * The Contact model constructor.
     * @property {module:model/Contact}
     */
    Contact: Contact,
    /**
     * The Contract model constructor.
     * @property {module:model/Contract}
     */
    Contract: Contract,
    /**
     * The ContractDocumentSignRequest model constructor.
     * @property {module:model/ContractDocumentSignRequest}
     */
    ContractDocumentSignRequest: ContractDocumentSignRequest,
    /**
     * The ContractDocumentTemplate model constructor.
     * @property {module:model/ContractDocumentTemplate}
     */
    ContractDocumentTemplate: ContractDocumentTemplate,
    /**
     * The DeliveryPlace model constructor.
     * @property {module:model/DeliveryPlace}
     */
    DeliveryPlace: DeliveryPlace,
    /**
     * The Forbidden model constructor.
     * @property {module:model/Forbidden}
     */
    Forbidden: Forbidden,
    /**
     * The InternalServerError model constructor.
     * @property {module:model/InternalServerError}
     */
    InternalServerError: InternalServerError,
    /**
     * The ItemGroup model constructor.
     * @property {module:model/ItemGroup}
     */
    ItemGroup: ItemGroup,
    /**
     * The ItemGroupDocumentTemplate model constructor.
     * @property {module:model/ItemGroupDocumentTemplate}
     */
    ItemGroupDocumentTemplate: ItemGroupDocumentTemplate,
    /**
     * The NotFound model constructor.
     * @property {module:model/NotFound}
     */
    NotFound: NotFound,
    /**
     * The NotImplemented model constructor.
     * @property {module:model/NotImplemented}
     */
    NotImplemented: NotImplemented,
    /**
     * The Operation model constructor.
     * @property {module:model/Operation}
     */
    Operation: Operation,
    /**
     * The OperationReport model constructor.
     * @property {module:model/OperationReport}
     */
    OperationReport: OperationReport,
    /**
     * The OperationReportItem model constructor.
     * @property {module:model/OperationReportItem}
     */
    OperationReportItem: OperationReportItem,
    /**
     * The ContactsApi service constructor.
     * @property {module:api/ContactsApi}
     */
    ContactsApi: ContactsApi,
    /**
     * The ContractsApi service constructor.
     * @property {module:api/ContractsApi}
     */
    ContractsApi: ContractsApi,
    /**
     * The DeliveryPlacesApi service constructor.
     * @property {module:api/DeliveryPlacesApi}
     */
    DeliveryPlacesApi: DeliveryPlacesApi,
    /**
     * The ItemGroupsApi service constructor.
     * @property {module:api/ItemGroupsApi}
     */
    ItemGroupsApi: ItemGroupsApi,
    /**
     * The OperationReportsApi service constructor.
     * @property {module:api/OperationReportsApi}
     */
    OperationReportsApi: OperationReportsApi,
    /**
     * The OperationsApi service constructor.
     * @property {module:api/OperationsApi}
     */
    OperationsApi: OperationsApi
  };

  return exports;
}));
