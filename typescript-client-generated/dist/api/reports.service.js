"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var URI = require("urijs");
var api_1 = require("./api");
var ReportsService = /** @class */ (function () {
    function ReportsService(basePath, token) {
        this.token = token;
        this.basePath = basePath;
    }
    /**
     * Returns report by type
     * @summary Returns report
     * @param type Report type
     * @param format document format (HTML or PDF)
     * @param startDate deliveries from
     * @param endDate deliveries to
     * @param productIds filter by product Ids
    */
    ReportsService.prototype.getReport = function (type, format, startDate, endDate, productIds) {
        var uri = new URI(this.basePath + "/reports/" + encodeURIComponent(String(type)));
        if (format !== undefined && format !== null) {
            uri.addQuery('format', format);
        }
        if (startDate !== undefined && startDate !== null) {
            uri.addQuery('startDate', startDate.toISOString());
        }
        if (endDate !== undefined && endDate !== null) {
            uri.addQuery('endDate', endDate.toISOString());
        }
        if (productIds) {
            uri.addQuery('productIds', productIds.join(COLLECTION_FORMATS['csv']));
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
    return ReportsService;
}());
exports.ReportsService = ReportsService;
