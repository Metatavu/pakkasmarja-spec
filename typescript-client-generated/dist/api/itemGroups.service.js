"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemGroupsService = void 0;
var URI = require("urijs");
var api_1 = require("./api");
var COLLECTION_FORMATS = {
    'csv': ',',
    'tsv': '   ',
    'ssv': ' ',
    'pipes': '|'
};
var ItemGroupsService = /** @class */ (function () {
    function ItemGroupsService(basePath, token) {
        this.token = token;
        this.basePath = basePath;
    }
    /**
     * Creates item group
     * @summary Creates item group
     * @param body Payload
    */
    ItemGroupsService.prototype.createItemGroup = function (body) {
        var uri = new URI(this.basePath + "/itemGroups");
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
     * Creates an item group price
     * @summary Creates item group price
     * @param body Payload
     * @param itemGroupId item group id
    */
    ItemGroupsService.prototype.createItemGroupPrice = function (body, itemGroupId) {
        var uri = new URI(this.basePath + "/itemGroups/" + encodeURIComponent(String(itemGroupId)) + "/prices");
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
     * Deletes an item group price
     * @summary Delete item group price
     * @param itemGroupId item group id
     * @param priceId price id
    */
    ItemGroupsService.prototype.deleteItemGroupPrice = function (itemGroupId, priceId) {
        var uri = new URI(this.basePath + "/itemGroups/" + encodeURIComponent(String(itemGroupId)) + "/prices/" + encodeURIComponent(String(priceId)));
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
     * Finds item group by id
     * @summary Find item group
     * @param id item group id
    */
    ItemGroupsService.prototype.findItemGroup = function (id) {
        var uri = new URI(this.basePath + "/itemGroups/" + encodeURIComponent(String(id)));
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
     * Finds item group template
     * @summary Find item group document template
     * @param itemGroupId item group id
     * @param id template id
    */
    ItemGroupsService.prototype.findItemGroupDocumentTemplate = function (itemGroupId, id) {
        var uri = new URI(this.basePath + "/itemGroups/" + encodeURIComponent(String(itemGroupId)) + "/documentTemplates/" + encodeURIComponent(String(id)));
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
     * Finds a item group price
     * @summary Find item group price
     * @param itemGroupId item group id
     * @param priceId price id
    */
    ItemGroupsService.prototype.findItemGroupPrice = function (itemGroupId, priceId) {
        var uri = new URI(this.basePath + "/itemGroups/" + encodeURIComponent(String(itemGroupId)) + "/prices/" + encodeURIComponent(String(priceId)));
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
     * Lists item group templates
     * @summary List item group document templates
     * @param itemGroupId item group id
    */
    ItemGroupsService.prototype.listItemGroupDocumentTemplates = function (itemGroupId) {
        var uri = new URI(this.basePath + "/itemGroups/" + encodeURIComponent(String(itemGroupId)) + "/documentTemplates");
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
     * Lists item group prices
     * @summary List item group prices
     * @param itemGroupId item group id
     * @param sortBy sort by (YEAR)
     * @param sortDir sort direction (ASC, DESC)
     * @param firstResult Offset of first result. Defaults to 0
     * @param maxResults Max results. Defaults to 5
    */
    ItemGroupsService.prototype.listItemGroupPrices = function (itemGroupId, sortBy, sortDir, firstResult, maxResults) {
        var uri = new URI(this.basePath + "/itemGroups/" + encodeURIComponent(String(itemGroupId)) + "/prices");
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
    /**
     * Lists item groups
     * @summary Lists item groups
     * @param contractUserId contract user id
    */
    ItemGroupsService.prototype.listItemGroups = function (contractUserId) {
        var uri = new URI(this.basePath + "/itemGroups");
        if (contractUserId !== undefined && contractUserId !== null) {
            uri.addQuery('contractUserId', contractUserId);
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
     * Updated item group document template
     * @summary Updates item group document template
     * @param body Payload
     * @param itemGroupId item group id
     * @param id template id
    */
    ItemGroupsService.prototype.updateItemGroupDocumentTemplate = function (body, itemGroupId, id) {
        var uri = new URI(this.basePath + "/itemGroups/" + encodeURIComponent(String(itemGroupId)) + "/documentTemplates/" + encodeURIComponent(String(id)));
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
     * Updates a item group price
     * @summary Update item group price
     * @param body Payload
     * @param itemGroupId item group id
     * @param priceId price id
    */
    ItemGroupsService.prototype.updateItemGroupPrice = function (body, itemGroupId, priceId) {
        var uri = new URI(this.basePath + "/itemGroups/" + encodeURIComponent(String(itemGroupId)) + "/prices/" + encodeURIComponent(String(priceId)));
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
    return ItemGroupsService;
}());
exports.ItemGroupsService = ItemGroupsService;
