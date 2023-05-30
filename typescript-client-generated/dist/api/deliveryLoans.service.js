"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryLoansService = void 0;
var URI = require("urijs");
var api_1 = require("./api");
var COLLECTION_FORMATS = {
    'csv': ',',
    'tsv': '   ',
    'ssv': ' ',
    'pipes': '|'
};
var DeliveryLoansService = /** @class */ (function () {
    function DeliveryLoansService(basePath, token) {
        this.token = token;
        this.basePath = basePath;
    }
    /**
     * Creates delivery loan
     * @summary Create delivery loan
     * @param body Payload
    */
    DeliveryLoansService.prototype.createDeliveryLoan = function (body) {
        var uri = new URI(this.basePath + "/deliveryLoans");
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
    return DeliveryLoansService;
}());
exports.DeliveryLoansService = DeliveryLoansService;
