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
var SignAuthenticationServicesService = /** @class */ (function () {
    function SignAuthenticationServicesService(basePath, token) {
        this.token = token;
        this.basePath = basePath;
    }
    /**
     * List available sign authentication services
     * @summary List sign authentication services
    */
    SignAuthenticationServicesService.prototype.listSignAuthenticationServices = function () {
        var uri = new URI(this.basePath + "/signAuthenticationServices");
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
    return SignAuthenticationServicesService;
}());
exports.SignAuthenticationServicesService = SignAuthenticationServicesService;
