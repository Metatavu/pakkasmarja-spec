"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var URI = require("urijs");
var api_1 = require("./api");
var PublicFilesService = /** @class */ (function () {
    function PublicFilesService(basePath, token) {
        this.token = token;
        this.basePath = basePath;
    }
    /**
     * Creates public file
     * @summary Create public file
     * @param body Payload
    */
    PublicFilesService.prototype.createPublicFile = function (body) {
        var uri = new URI(this.basePath + "/publicFiles");
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
     * Deletes public file
     * @summary Delete public file
     * @param publicFileId publicFile id id
    */
    PublicFilesService.prototype.deletePublicFile = function (publicFileId) {
        var uri = new URI(this.basePath + "/publicFiles/" + encodeURIComponent(String(publicFileId)));
        var options = {
            method: "delete",
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
     * Finds public file by id
     * @summary Find public file
     * @param publicFileId publicFile id id
    */
    PublicFilesService.prototype.findPublicFile = function (publicFileId) {
        var uri = new URI(this.basePath + "/publicFiles/" + encodeURIComponent(String(publicFileId)));
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
     * Lists public files
     * @summary Lists public files
     * @param firstResult Offset of first result. Defaults to 0
     * @param maxResults Max results. Defaults to 5
    */
    PublicFilesService.prototype.listPublicFiles = function (firstResult, maxResults) {
        var uri = new URI(this.basePath + "/publicFiles");
        if (firstResult !== undefined && firstResult !== null) {
            uri.addQuery('firstResult', firstResult);
        }
        if (maxResults !== undefined && maxResults !== null) {
            uri.addQuery('maxResults', maxResults);
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
     * Updates public file
     * @summary Update public file
     * @param body Payload
     * @param publicFileId publicFile id id
    */
    PublicFilesService.prototype.updatePublicFile = function (body, publicFileId) {
        var uri = new URI(this.basePath + "/publicFiles/" + encodeURIComponent(String(publicFileId)));
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
    return PublicFilesService;
}());
exports.PublicFilesService = PublicFilesService;
