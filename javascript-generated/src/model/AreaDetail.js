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
    root.PakkasmarjaRestClient.AreaDetail = factory(root.PakkasmarjaRestClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AreaDetail model module.
   * @module model/AreaDetail
   * @version 0.0.14
   */

  /**
   * Constructs a new <code>AreaDetail</code>.
   * @alias module:model/AreaDetail
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>AreaDetail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AreaDetail} obj Optional instance to populate.
   * @return {module:model/AreaDetail} The populated <code>AreaDetail</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Number');
      }
      if (data.hasOwnProperty('species')) {
        obj['species'] = ApiClient.convertToType(data['species'], 'String');
      }
      if (data.hasOwnProperty('profitEstimation')) {
        obj['profitEstimation'] = ApiClient.convertToType(data['profitEstimation'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Number} size
   */
  exports.prototype['size'] = undefined;
  /**
   * @member {String} species
   */
  exports.prototype['species'] = undefined;
  /**
   * @member {Number} profitEstimation
   */
  exports.prototype['profitEstimation'] = undefined;



  return exports;
}));


