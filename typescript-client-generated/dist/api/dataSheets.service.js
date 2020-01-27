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
var DataSheetsService = /** @class */ (function () {
    function DataSheetsService(basePath, token) {
        this.token = token;
        this.basePath = basePath;
    }
    /**
     * Creates data sheet
     * @summary Create data sheet
     * @param body Payload
    */
    DataSheetsService.prototype.createDataSheet = function (body) {
        var uri = new URI(this.basePath + "/dataSheets");
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
     * Deletes data sheet
     * @summary Delete data sheet
     * @param dataSheetId dataSheet id id
    */
    DataSheetsService.prototype.deleteDataSheet = function (dataSheetId) {
        var uri = new URI(this.basePath + "/dataSheets/" + encodeURIComponent(String(dataSheetId)));
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
     * Finds data sheet by id
     * @summary Find data sheet
     * @param dataSheetId dataSheet id id
    */
    DataSheetsService.prototype.findDataSheet = function (dataSheetId) {
        var uri = new URI(this.basePath + "/dataSheets/" + encodeURIComponent(String(dataSheetId)));
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
     * Lists data sheets
     * @summary Lists data sheets
     * @param name Filter by name
    */
    DataSheetsService.prototype.listDataSheets = function (name) {
        var uri = new URI(this.basePath + "/dataSheets");
        if (name !== undefined && name !== null) {
            uri.addQuery('name', name);
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
     * Updates data sheet
     * @summary Update data sheet
     * @param body Payload
     * @param dataSheetId dataSheet id id
    */
    DataSheetsService.prototype.updateDataSheet = function (body, dataSheetId) {
        var uri = new URI(this.basePath + "/dataSheets/" + encodeURIComponent(String(dataSheetId)));
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
    return DataSheetsService;
}());
exports.DataSheetsService = DataSheetsService;
