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
var UnreadsService = /** @class */ (function () {
    function UnreadsService(basePath, token) {
        this.token = token;
        this.basePath = basePath;
    }
    /**
     * Deletes unread
     * @summary Delete unread
     * @param unreadId unread id
    */
    UnreadsService.prototype.deleteUnread = function (unreadId) {
        var uri = new URI(this.basePath + "/unreads/" + encodeURIComponent(String(unreadId)));
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
     * Lists unreads
     * @summary Lists unreads
     * @param pathPrefix filter unreads by path prefix
     * @param userId filter unreads by userId
    */
    UnreadsService.prototype.listUnreads = function (pathPrefix, userId) {
        var uri = new URI(this.basePath + "/unreads");
        if (pathPrefix !== undefined && pathPrefix !== null) {
            uri.addQuery('pathPrefix', pathPrefix);
        }
        if (userId !== undefined && userId !== null) {
            uri.addQuery('userId', userId);
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
    return UnreadsService;
}());
exports.UnreadsService = UnreadsService;
