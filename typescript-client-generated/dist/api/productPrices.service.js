"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var URI = require("urijs");
var api_1 = require("./api");
var ProductPricesService = /** @class */ (function () {
    function ProductPricesService(basePath, token) {
        this.token = token;
        this.basePath = basePath;
    }
    /**
     * Creates product price
     * @summary Create product price
     * @param body Payload
     * @param productId product id id
    */
    ProductPricesService.prototype.createProductPrice = function (body, productId) {
        var uri = new URI(this.basePath + "/products/" + encodeURIComponent(String(productId)) + "/prices");
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
     * Deletes product price
     * @summary Delete product price
     * @param productId delivery id id
     * @param productPriceId delivery id id
    */
    ProductPricesService.prototype.deleteProductPrice = function (productId, productPriceId) {
        var uri = new URI(this.basePath + "/products/" + encodeURIComponent(String(productId)) + "/prices/" + encodeURIComponent(String(productPriceId)));
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
     * Finds product price
     * @summary Find product price
     * @param productId product id
     * @param productPriceId product price id
    */
    ProductPricesService.prototype.findProductPrice = function (productId, productPriceId) {
        var uri = new URI(this.basePath + "/products/" + encodeURIComponent(String(productId)) + "/prices/" + encodeURIComponent(String(productPriceId)));
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
     * Lists product prices
     * @summary List product prices
     * @param productId product id
     * @param sort sort
     * @param atTime sort
     * @param firstResult Offset of first result. Defaults to 0
     * @param maxResults Max results. Defaults to 5
    */
    ProductPricesService.prototype.listProductPrices = function (productId, sort, atTime, firstResult, maxResults) {
        var uri = new URI(this.basePath + "/products/" + encodeURIComponent(String(productId)) + "/prices");
        if (sort !== undefined && sort !== null) {
            uri.addQuery('sort', sort);
        }
        if (atTime !== undefined && atTime !== null) {
            uri.addQuery('atTime', atTime.toISOString());
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
     * Updates product price
     * @summary Update product price
     * @param body Payload
     * @param productId product id id
     * @param productPriceId product price id
    */
    ProductPricesService.prototype.updateProductPrice = function (body, productId, productPriceId) {
        var uri = new URI(this.basePath + "/products/" + encodeURIComponent(String(productId)) + "/prices/" + encodeURIComponent(String(productPriceId)));
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
    return ProductPricesService;
}());
exports.ProductPricesService = ProductPricesService;
