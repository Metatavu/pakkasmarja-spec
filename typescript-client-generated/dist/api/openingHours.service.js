"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpeningHoursService = void 0;
var URI = require("urijs");
var api_1 = require("./api");
var COLLECTION_FORMATS = {
    'csv': ',',
    'tsv': '   ',
    'ssv': ' ',
    'pipes': '|'
};
var OpeningHoursService = /** @class */ (function () {
    function OpeningHoursService(basePath, token) {
        this.token = token;
        this.basePath = basePath;
    }
    /**
     * Creates opening hour exception
     * @summary Create opening hour exception
     * @param body Payload
     * @param deliveryPlaceId delivery place id
    */
    OpeningHoursService.prototype.createOpeningHourException = function (body, deliveryPlaceId) {
        var uri = new URI(this.basePath + "/openingHours/" + encodeURIComponent(String(deliveryPlaceId)) + "/exceptions");
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
     * Creates opening hour period
     * @summary Create opening hour period
     * @param body Payload
     * @param deliveryPlaceId delivery place id
    */
    OpeningHoursService.prototype.createOpeningHourPeriod = function (body, deliveryPlaceId) {
        var uri = new URI(this.basePath + "/openingHours/" + encodeURIComponent(String(deliveryPlaceId)) + "/periods");
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
     * Deletes opening hour exception
     * @summary Delete opening hour exception
     * @param deliveryPlaceId delivery place id
     * @param exceptionId exception id
    */
    OpeningHoursService.prototype.deleteOpeningHourException = function (deliveryPlaceId, exceptionId) {
        var uri = new URI(this.basePath + "/openingHours/" + encodeURIComponent(String(deliveryPlaceId)) + "/exceptions/" + encodeURIComponent(String(exceptionId)));
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
     * Deletes opening hour period
     * @summary Delete opening hour period
     * @param deliveryPlaceId delivery place id
     * @param periodId period id
    */
    OpeningHoursService.prototype.deleteOpeningHourPeriod = function (deliveryPlaceId, periodId) {
        var uri = new URI(this.basePath + "/openingHours/" + encodeURIComponent(String(deliveryPlaceId)) + "/periods/" + encodeURIComponent(String(periodId)));
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
     * Finds opening hour period
     * @summary Find opening hour period
     * @param deliveryPlaceId delivery place id
     * @param periodId period id
    */
    OpeningHoursService.prototype.findOpeningHourPeriod = function (deliveryPlaceId, periodId) {
        var uri = new URI(this.basePath + "/openingHours/" + encodeURIComponent(String(deliveryPlaceId)) + "/periods/" + encodeURIComponent(String(periodId)));
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
     * Lists opening hour exceptions
     * @summary List opening hour exceptions
     * @param deliveryPlaceId delivery place id
    */
    OpeningHoursService.prototype.listOpeningHourExceptions = function (deliveryPlaceId) {
        var uri = new URI(this.basePath + "/openingHours/" + encodeURIComponent(String(deliveryPlaceId)) + "/exceptions");
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
     * Lists opening hour periods
     * @summary List opening hour periods
     * @param deliveryPlaceId delivery place id
     * @param rangeStart list date range start
     * @param rangeEnd list date range end
     * @param firstResult Offset of first result. Defaults to 0
     * @param maxResults Max results. Defaults to unlimited
    */
    OpeningHoursService.prototype.listOpeningHourPeriods = function (deliveryPlaceId, rangeStart, rangeEnd, firstResult, maxResults) {
        var uri = new URI(this.basePath + "/openingHours/" + encodeURIComponent(String(deliveryPlaceId)) + "/periods");
        if (rangeStart !== undefined && rangeStart !== null) {
            uri.addQuery('rangeStart', rangeStart.toISOString());
        }
        if (rangeEnd !== undefined && rangeEnd !== null) {
            uri.addQuery('rangeEnd', rangeEnd.toISOString());
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
    /**
     * Updates opening hour exception
     * @summary Update opening hour exception
     * @param body Payload
     * @param deliveryPlaceId delivery place id
     * @param exceptionId exception id
    */
    OpeningHoursService.prototype.updateOpeningHourException = function (body, deliveryPlaceId, exceptionId) {
        var uri = new URI(this.basePath + "/openingHours/" + encodeURIComponent(String(deliveryPlaceId)) + "/exceptions/" + encodeURIComponent(String(exceptionId)));
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
    /**
     * Updates opening hour period
     * @summary Update opening hour period
     * @param body Payload
     * @param deliveryPlaceId delivery place id
     * @param periodId period id
    */
    OpeningHoursService.prototype.updateOpeningHourPeriod = function (body, deliveryPlaceId, periodId) {
        var uri = new URI(this.basePath + "/openingHours/" + encodeURIComponent(String(deliveryPlaceId)) + "/periods/" + encodeURIComponent(String(periodId)));
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
    return OpeningHoursService;
}());
exports.OpeningHoursService = OpeningHoursService;
