"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var URI = require("urijs");
var api_1 = require("./api");
var DeliveryQualitiesService = /** @class */ (function () {
    function DeliveryQualitiesService(basePath, token) {
        this.token = token;
        this.basePath = basePath;
    }
    /**
     * Lists delivery qualities
     * @summary Lists delivery qualities
     * @param itemGroupCategory filter by item group category
    */
    DeliveryQualitiesService.prototype.listDeliveryQualities = function (itemGroupCategory) {
        var uri = new URI(this.basePath + "/deliveryQualities");
        if (itemGroupCategory !== undefined && itemGroupCategory !== null) {
            uri.addQuery('itemGroupCategory', itemGroupCategory);
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
    return DeliveryQualitiesService;
}());
exports.DeliveryQualitiesService = DeliveryQualitiesService;
