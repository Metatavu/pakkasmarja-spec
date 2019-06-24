"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var URI = require("urijs");
var api_1 = require("./api");
var DeliveriesService = /** @class */ (function () {
    function DeliveriesService(basePath, token) {
        this.token = token;
        this.basePath = basePath;
    }
    /**
     * Creates delivery
     * @summary Create delivery
     * @param body Payload
    */
    DeliveriesService.prototype.createDelivery = function (body) {
        var uri = new URI(this.basePath + "/deliveries");
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
     * Creates delivery note
     * @summary Create delivery note
     * @param body Payload
     * @param deliveryId delivery id id
    */
    DeliveriesService.prototype.createDeliveryNote = function (body, deliveryId) {
        var uri = new URI(this.basePath + "/deliveries/" + encodeURIComponent(String(deliveryId)) + "/notes");
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
     * Deletes delivery
     * @summary Delete delivery
     * @param deliveryId delivery id id
    */
    DeliveriesService.prototype.deleteDelivery = function (deliveryId) {
        var uri = new URI(this.basePath + "/deliveries/" + encodeURIComponent(String(deliveryId)));
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
     * Deletes delivery note
     * @summary Delete delivery note
     * @param deliveryId delivery id id
     * @param deliveryNoteId delivery id id
    */
    DeliveriesService.prototype.deleteDeliveryNote = function (deliveryId, deliveryNoteId) {
        var uri = new URI(this.basePath + "/deliveries/" + encodeURIComponent(String(deliveryId)) + "/notes/" + encodeURIComponent(String(deliveryNoteId)));
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
     * Finds delivery by id
     * @summary Find delivery
     * @param deliveryId delivery id id
    */
    DeliveriesService.prototype.findDelivery = function (deliveryId) {
        var uri = new URI(this.basePath + "/deliveries/" + encodeURIComponent(String(deliveryId)));
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
     * Finds delivery note by id
     * @summary Find delivery note
     * @param deliveryId delivery id id
     * @param deliveryNoteId delivery id id
    */
    DeliveriesService.prototype.findDeliveryNote = function (deliveryId, deliveryNoteId) {
        var uri = new URI(this.basePath + "/deliveries/" + encodeURIComponent(String(deliveryId)) + "/notes/" + encodeURIComponent(String(deliveryNoteId)));
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
     * Lists deliveries
     * @summary Lists deliveries
     * @param userId filter by user id
     * @param status filter by status
     * @param itemGroupCategory filter by item group id
     * @param itemGroupId filter by item group id
     * @param productId filter by item group id
     * @param deliveryPlaceId filter by delivery place id
     * @param timeBefore filter by time before specified time
     * @param timeAfter filter by time after specified time
     * @param firstResult Offset of first result. Defaults to 0
     * @param maxResults Max results. Defaults to 5
    */
    DeliveriesService.prototype.listDeliveries = function (userId, status, itemGroupCategory, itemGroupId, productId, deliveryPlaceId, timeBefore, timeAfter, firstResult, maxResults) {
        var uri = new URI(this.basePath + "/deliveries");
        if (userId !== undefined && userId !== null) {
            uri.addQuery('userId', userId);
        }
        if (status !== undefined && status !== null) {
            uri.addQuery('status', status);
        }
        if (itemGroupCategory !== undefined && itemGroupCategory !== null) {
            uri.addQuery('itemGroupCategory', itemGroupCategory);
        }
        if (itemGroupId !== undefined && itemGroupId !== null) {
            uri.addQuery('itemGroupId', itemGroupId);
        }
        if (productId !== undefined && productId !== null) {
            uri.addQuery('productId', productId);
        }
        if (deliveryPlaceId !== undefined && deliveryPlaceId !== null) {
            uri.addQuery('deliveryPlaceId', deliveryPlaceId);
        }
        if (timeBefore !== undefined && timeBefore !== null) {
            uri.addQuery('timeBefore', timeBefore.toISOString());
        }
        if (timeAfter !== undefined && timeAfter !== null) {
            uri.addQuery('timeAfter', timeAfter.toISOString());
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
     * Lists deliveries notes
     * @summary Lists deliveries notes
     * @param deliveryId delivery id id
    */
    DeliveriesService.prototype.listDeliveryNotes = function (deliveryId) {
        var uri = new URI(this.basePath + "/deliveries/" + encodeURIComponent(String(deliveryId)) + "/notes");
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
     * Updates delivery
     * @summary Update delivery
     * @param body Payload
     * @param deliveryId delivery id id
    */
    DeliveriesService.prototype.updateDelivery = function (body, deliveryId) {
        var uri = new URI(this.basePath + "/deliveries/" + encodeURIComponent(String(deliveryId)));
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
     * Updates delivery note
     * @summary Update delivery note
     * @param body Payload
     * @param deliveryId delivery id id
     * @param deliveryNoteId delivery id id
    */
    DeliveriesService.prototype.updateDeliveryNote = function (body, deliveryId, deliveryNoteId) {
        var uri = new URI(this.basePath + "/deliveries/" + encodeURIComponent(String(deliveryId)) + "/notes/" + encodeURIComponent(String(deliveryNoteId)));
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
    return DeliveriesService;
}());
exports.DeliveriesService = DeliveriesService;
