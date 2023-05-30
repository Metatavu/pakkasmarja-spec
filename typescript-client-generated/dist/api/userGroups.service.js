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
var UserGroupsService = /** @class */ (function () {
    function UserGroupsService(basePath, token) {
        this.token = token;
        this.basePath = basePath;
    }
    /**
     * Lists user groups
     * @summary Lists user groups
    */
    UserGroupsService.prototype.listUserGroups = function () {
        var uri = new URI(this.basePath + "/userGroups");
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
    return UserGroupsService;
}());
exports.UserGroupsService = UserGroupsService;
