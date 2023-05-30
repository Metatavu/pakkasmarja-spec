"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryPlacesService = void 0;
var URI = require("urijs");
var api_1 = require("./api");
var COLLECTION_FORMATS = {
    'csv': ',',
    'tsv': '   ',
    'ssv': ' ',
    'pipes': '|'
};
var DeliveryPlacesService = /** @class */ (function () {
    function DeliveryPlacesService(basePath, token) {
        this.token = token;
        this.basePath = basePath;
    }
    /**
     * Finds delivery place by id
     * @summary Find delivery place
     * @param id delivery place id
    */
    DeliveryPlacesService.prototype.findDeliveryPlace = function (id) {
        var uri = new URI(this.basePath + "/deliveryPlaces/" + encodeURIComponent(String(id)));
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
     * Lists delivery places
     * @summary Lists delivery places
    */
    DeliveryPlacesService.prototype.listDeliveryPlaces = function () {
        var uri = new URI(this.basePath + "/deliveryPlaces");
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
    return DeliveryPlacesService;
}());
exports.DeliveryPlacesService = DeliveryPlacesService;
