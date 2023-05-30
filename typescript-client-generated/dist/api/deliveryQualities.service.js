"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryQualitiesService = void 0;
var URI = require("urijs");
var api_1 = require("./api");
var COLLECTION_FORMATS = {
    'csv': ',',
    'tsv': '   ',
    'ssv': ' ',
    'pipes': '|'
};
var DeliveryQualitiesService = /** @class */ (function () {
    function DeliveryQualitiesService(basePath, token) {
        this.token = token;
        this.basePath = basePath;
    }
    /**
     * Creates delivery quality
     * @summary Create delivery quality
     * @param body Payload
    */
    DeliveryQualitiesService.prototype.createDeliveryQuality = function (body) {
        var uri = new URI(this.basePath + "/deliveryQualities");
        var options = {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + this.token
            },
            body: JSON.stringify(body)
        };
        return fetch(uri.toString(), options).then(function (response) {
            return api_1.ApiUtils.handleResponse(response);
        });
    };
    /**
     * Finds delivery quality
     * @summary Find delivery quality
     * @param deliveryQualityId delivery quality id
    */
    DeliveryQualitiesService.prototype.findDeliveryQuality = function (deliveryQualityId) {
        var uri = new URI(this.basePath + "/deliveryQualities/" + encodeURIComponent(String(deliveryQualityId)));
        var options = {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + this.token
            }
        };
        return fetch(uri.toString(), options).then(function (response) {
            return api_1.ApiUtils.handleResponse(response);
        });
    };
    /**
     * Lists delivery qualities
     * @summary Lists delivery qualities
     * @param itemGroupCategory filter by item group category
     * @param productId filter by product Id
    */
    DeliveryQualitiesService.prototype.listDeliveryQualities = function (itemGroupCategory, productId) {
        var uri = new URI(this.basePath + "/deliveryQualities");
        if (itemGroupCategory !== undefined && itemGroupCategory !== null) {
            uri.addQuery('itemGroupCategory', itemGroupCategory);
        }
        if (productId !== undefined && productId !== null) {
            uri.addQuery('productId', productId);
        }
        var options = {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + this.token
            }
        };
        return fetch(uri.toString(), options).then(function (response) {
            return api_1.ApiUtils.handleResponse(response);
        });
    };
    /**
     * Updates delivery quality
     * @summary Update delivery quality
     * @param body Payload
     * @param deliveryQualityId delivery quality id
    */
    DeliveryQualitiesService.prototype.updateDeliveryQuality = function (body, deliveryQualityId) {
        var uri = new URI(this.basePath + "/deliveryQualities/" + encodeURIComponent(String(deliveryQualityId)));
        var options = {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + this.token
            },
            body: JSON.stringify(body)
        };
        return fetch(uri.toString(), options).then(function (response) {
            return api_1.ApiUtils.handleResponse(response);
        });
    };
    return DeliveryQualitiesService;
}());
exports.DeliveryQualitiesService = DeliveryQualitiesService;
