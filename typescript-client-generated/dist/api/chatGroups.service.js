"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var URI = require("urijs");
var api_1 = require("./api");
var ChatGroupsService = /** @class */ (function () {
    function ChatGroupsService(basePath, token) {
        this.token = token;
        this.basePath = basePath;
    }
    /**
     * Creates new chat group
     * @summary Creates new chat group
     * @param body Payload
    */
    ChatGroupsService.prototype.createChatGroup = function (body) {
        var uri = new URI(this.basePath + "/chatGroups");
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
     * Creates new chat group group permission
     * @summary Creates new chat group group permission
     * @param body Payload
     * @param chatGroupId Chat group id
    */
    ChatGroupsService.prototype.createChatGroupGroupPermissions = function (body, chatGroupId) {
        var uri = new URI(this.basePath + "/chatGroups/" + encodeURIComponent(String(chatGroupId)) + "/groupPermissions");
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
     * Deletes a chat group
     * @summary Deletes a chat group
     * @param chatGroupId Chat group id
    */
    ChatGroupsService.prototype.deleteChatGroup = function (chatGroupId) {
        var uri = new URI(this.basePath + "/chatGroups/" + encodeURIComponent(String(chatGroupId)));
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
     * Deletes chat group group permission
     * @summary Delete chat group group permission
     * @param chatGroupId Chat group id
     * @param permissionId Permission id
    */
    ChatGroupsService.prototype.deleteChatGroupGroupPermission = function (chatGroupId, permissionId) {
        var uri = new URI(this.basePath + "/chatGroups/" + encodeURIComponent(String(chatGroupId)) + "/groupPermissions/" + encodeURIComponent(String(permissionId)));
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
     * Returns a chat group
     * @summary Returns a chat group
     * @param chatGroupId Chat group id
    */
    ChatGroupsService.prototype.findChatGroup = function (chatGroupId) {
        var uri = new URI(this.basePath + "/chatGroups/" + encodeURIComponent(String(chatGroupId)));
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
     * Find chat group group permission
     * @summary Find chat group group permission
     * @param chatGroupId Chat group id
     * @param permissionId Permission id
    */
    ChatGroupsService.prototype.findChatGroupGroupPermissions = function (chatGroupId, permissionId) {
        var uri = new URI(this.basePath + "/chatGroups/" + encodeURIComponent(String(chatGroupId)) + "/groupPermissions/" + encodeURIComponent(String(permissionId)));
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
     * Returns list of chat group group permissions
     * @summary Returns list of chat group group permissions
     * @param chatGroupId Chat group id
    */
    ChatGroupsService.prototype.listChatGroupGroupPermissions = function (chatGroupId) {
        var uri = new URI(this.basePath + "/chatGroups/" + encodeURIComponent(String(chatGroupId)) + "/groupPermissions");
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
     * Returns list of chat groups
     * @summary Returns list of chat groups
     * @param groupType Filter chat groups by group type
    */
    ChatGroupsService.prototype.listChatGroups = function (groupType) {
        var uri = new URI(this.basePath + "/chatGroups");
        if (groupType !== undefined && groupType !== null) {
            uri.addQuery('groupType', groupType);
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
     * Update chat group
     * @summary Update chat group
     * @param body Payload
     * @param chatGroupId Chat group id
    */
    ChatGroupsService.prototype.updateChatGroup = function (body, chatGroupId) {
        var uri = new URI(this.basePath + "/chatGroups/" + encodeURIComponent(String(chatGroupId)));
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
     * Updates chat group group permission
     * @summary Update chat group group permission
     * @param body Payload
     * @param chatGroupId Chat group id
     * @param permissionId Permission id
    */
    ChatGroupsService.prototype.updateChatGroupGroupPermissions = function (body, chatGroupId, permissionId) {
        var uri = new URI(this.basePath + "/chatGroups/" + encodeURIComponent(String(chatGroupId)) + "/groupPermissions/" + encodeURIComponent(String(permissionId)));
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
    return ChatGroupsService;
}());
exports.ChatGroupsService = ChatGroupsService;
