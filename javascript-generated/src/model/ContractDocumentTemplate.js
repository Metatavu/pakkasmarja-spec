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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.PakkasmarjaRestClient) {
      root.PakkasmarjaRestClient = {};
    }
    root.PakkasmarjaRestClient.ContractDocumentTemplate = factory(root.PakkasmarjaRestClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ContractDocumentTemplate model module.
   * @module model/ContractDocumentTemplate
   * @version 0.0.4
   */

  /**
   * Constructs a new <code>ContractDocumentTemplate</code>.
   * @alias module:model/ContractDocumentTemplate
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>ContractDocumentTemplate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContractDocumentTemplate} obj Optional instance to populate.
   * @return {module:model/ContractDocumentTemplate} The populated <code>ContractDocumentTemplate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('contractId')) {
        obj['contractId'] = ApiClient.convertToType(data['contractId'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('contents')) {
        obj['contents'] = ApiClient.convertToType(data['contents'], 'String');
      }
      if (data.hasOwnProperty('header')) {
        obj['header'] = ApiClient.convertToType(data['header'], 'String');
      }
      if (data.hasOwnProperty('footer')) {
        obj['footer'] = ApiClient.convertToType(data['footer'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} contractId
   */
  exports.prototype['contractId'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} contents
   */
  exports.prototype['contents'] = undefined;
  /**
   * @member {String} header
   */
  exports.prototype['header'] = undefined;
  /**
   * @member {String} footer
   */
  exports.prototype['footer'] = undefined;



  return exports;
}));


