"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var URI = require("urijs");
var api_1 = require("./api");
var ProductsService = /** @class */ (function () {
    function ProductsService(basePath, token) {
        this.token = token;
        this.basePath = basePath;
    }
    /**
     * Creates product
     * @summary Create product
     * @param body Payload
    */
    ProductsService.prototype.createProduct = function (body) {
        var uri = new URI(this.basePath + "/products");
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
     * Deletes product
     * @summary Delete product
     * @param productId product id id
    */
    ProductsService.prototype.deleteProduct = function (productId) {
        var uri = new URI(this.basePath + "/products/" + encodeURIComponent(String(productId)));
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
     * Finds product by id
     * @summary Find product
     * @param productId product id id
    */
    ProductsService.prototype.findProduct = function (productId) {
        var uri = new URI(this.basePath + "/products/" + encodeURIComponent(String(productId)));
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
     * Lists products
     * @summary Lists products
     * @param itemGroupId filter by item group id
     * @param itemGroupCategory filter by item group id
     * @param contractUserId output only products what specified user has contract in
     * @param firstResult Offset of first result. Defaults to 0
     * @param maxResults Max results. Defaults to 5
    */
    ProductsService.prototype.listProducts = function (itemGroupId, itemGroupCategory, contractUserId, firstResult, maxResults) {
        var uri = new URI(this.basePath + "/products");
        if (itemGroupId !== undefined && itemGroupId !== null) {
            uri.addQuery('itemGroupId', itemGroupId);
        }
        if (itemGroupCategory !== undefined && itemGroupCategory !== null) {
            uri.addQuery('itemGroupCategory', itemGroupCategory);
        }
        if (contractUserId !== undefined && contractUserId !== null) {
            uri.addQuery('contractUserId', contractUserId);
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
     * Updates product
     * @summary Update product
     * @param body Payload
     * @param productId product id id
    */
    ProductsService.prototype.updateProduct = function (body, productId) {
        var uri = new URI(this.basePath + "/products/" + encodeURIComponent(String(productId)));
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
    return ProductsService;
}());
exports.ProductsService = ProductsService;
