"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var URI = require("urijs");
var api_1 = require("./api");
var COLLECTION_FORMATS = {
    'csv': ',',
    'tsv': '   ',
    'ssv': ' ',
    'pipes': '|'
};
var OperationsService = /** @class */ (function () {
    function OperationsService(basePath, token) {
        this.token = token;
        this.basePath = basePath;
    }
    /**
     * Creates new operation
     * @summary Creates new operation
     * @param body Payload
    */
    OperationsService.prototype.createOperation = function (body) {
        var uri = new URI(this.basePath + "/operations");
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
    return OperationsService;
}());
exports.OperationsService = OperationsService;
