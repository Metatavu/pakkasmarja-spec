"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var URI = require("urijs");
var api_1 = require("./api");
var WeekDeliveryPredictionsService = /** @class */ (function () {
    function WeekDeliveryPredictionsService(basePath, token) {
        this.token = token;
        this.basePath = basePath;
    }
    /**
     * Creates week delivery prediction
     * @summary Create week delivery prediction
     * @param body Payload
    */
    WeekDeliveryPredictionsService.prototype.createWeekDeliveryPrediction = function (body) {
        var uri = new URI(this.basePath + "/weekDeliveryPredictions");
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
     * Deletes weekDeliveryPrediction
     * @summary Delete weekDeliveryPrediction
     * @param weekDeliveryPredictionId weekDeliveryPrediction id id
    */
    WeekDeliveryPredictionsService.prototype.deleteWeekDeliveryPrediction = function (weekDeliveryPredictionId) {
        var uri = new URI(this.basePath + "/weekDeliveryPredictions/" + encodeURIComponent(String(weekDeliveryPredictionId)));
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
     * Finds weekDeliveryPrediction by id
     * @summary Find weekDeliveryPrediction
     * @param weekDeliveryPredictionId weekDeliveryPrediction id id
    */
    WeekDeliveryPredictionsService.prototype.findWeekDeliveryPrediction = function (weekDeliveryPredictionId) {
        var uri = new URI(this.basePath + "/weekDeliveryPredictions/" + encodeURIComponent(String(weekDeliveryPredictionId)));
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
     * Lists weekDeliveryPredictions
     * @summary Lists weekDeliveryPredictions
     * @param itemGroupId filter by item group id
     * @param itemGroupCategory filter by item group id
     * @param userId filter by user id
     * @param weekNumber filter by week number
     * @param year filter by year
     * @param firstResult Offset of first result. Defaults to 0
     * @param maxResults Max results. Defaults to 5
    */
    WeekDeliveryPredictionsService.prototype.listWeekDeliveryPredictions = function (itemGroupId, itemGroupCategory, userId, weekNumber, year, firstResult, maxResults) {
        var uri = new URI(this.basePath + "/weekDeliveryPredictions");
        if (itemGroupId !== undefined && itemGroupId !== null) {
            uri.addQuery('itemGroupId', itemGroupId);
        }
        if (itemGroupCategory !== undefined && itemGroupCategory !== null) {
            uri.addQuery('itemGroupCategory', itemGroupCategory);
        }
        if (userId !== undefined && userId !== null) {
            uri.addQuery('userId', userId);
        }
        if (weekNumber !== undefined && weekNumber !== null) {
            uri.addQuery('weekNumber', weekNumber);
        }
        if (year !== undefined && year !== null) {
            uri.addQuery('year', year);
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
     * Updates weekDeliveryPrediction
     * @summary Update weekDeliveryPrediction
     * @param body Payload
     * @param weekDeliveryPredictionId weekDeliveryPrediction id id
    */
    WeekDeliveryPredictionsService.prototype.updateWeekDeliveryPrediction = function (body, weekDeliveryPredictionId) {
        var uri = new URI(this.basePath + "/weekDeliveryPredictions/" + encodeURIComponent(String(weekDeliveryPredictionId)));
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
    return WeekDeliveryPredictionsService;
}());
exports.WeekDeliveryPredictionsService = WeekDeliveryPredictionsService;
