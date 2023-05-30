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
var OperationReportsService = /** @class */ (function () {
    function OperationReportsService(basePath, token) {
        this.token = token;
        this.basePath = basePath;
    }
    /**
     * Find operation report by id
     * @summary Find operation report
     * @param id operation report id
    */
    OperationReportsService.prototype.findOperationReport = function (id) {
        var uri = new URI(this.basePath + "/operationReports/" + encodeURIComponent(String(id)));
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
     * Lists operation report items
     * @summary List operation report items
     * @param id operation report id
    */
    OperationReportsService.prototype.listOperationReportItems = function (id) {
        var uri = new URI(this.basePath + "/operationReports/" + encodeURIComponent(String(id)) + "/items");
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
     * Lists operation reports
     * @summary List operation reports
     * @param type filter by type
     * @param sortBy sort by (CREATED)
     * @param sortDir sort direction (ASC, DESC)
     * @param firstResult Offset of first result. Defaults to 0
     * @param maxResults Max results. Defaults to 20
    */
    OperationReportsService.prototype.listOperationReports = function (type, sortBy, sortDir, firstResult, maxResults) {
        var uri = new URI(this.basePath + "/operationReports");
        if (type !== undefined && type !== null) {
            uri.addQuery('type', type);
        }
        if (sortBy !== undefined && sortBy !== null) {
            uri.addQuery('sortBy', sortBy);
        }
        if (sortDir !== undefined && sortDir !== null) {
            uri.addQuery('sortDir', sortDir);
        }
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
    return OperationReportsService;
}());
exports.OperationReportsService = OperationReportsService;
