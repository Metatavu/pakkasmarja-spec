"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var URI = require("urijs");
var api_1 = require("./api");
var ChatThreadsService = /** @class */ (function () {
    function ChatThreadsService(basePath, token) {
        this.token = token;
        this.basePath = basePath;
    }
    /**
     * Creates new chat thread
     * @summary Creates new chat thread
     * @param body Payload
    */
    ChatThreadsService.prototype.createChatThread = function (body) {
        var uri = new URI(this.basePath + "/chatThreads");
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
     * Creates new chat thread group permission
     * @summary Creates new chat thread group permission
     * @param body Payload
     * @param chatThreadId Chat thread id
    */
    ChatThreadsService.prototype.createChatThreadGroupPermissions = function (body, chatThreadId) {
        var uri = new URI(this.basePath + "/chatThreads/" + encodeURIComponent(String(chatThreadId)) + "/groupPermissions");
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
     * Creates new chat thread user permission
     * @summary Creates new chat thread user permission
     * @param body Payload
     * @param chatThreadId Chat thread id
    */
    ChatThreadsService.prototype.createChatThreadUserPermission = function (body, chatThreadId) {
        var uri = new URI(this.basePath + "/chatThreads/" + encodeURIComponent(String(chatThreadId)) + "/userPermissions");
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
     * Deletes chat thread
     * @summary Deletes chat thread
     * @param chatThreadId Chat thread id
    */
    ChatThreadsService.prototype.deleteChatThread = function (chatThreadId) {
        var uri = new URI(this.basePath + "/chatThreads/" + encodeURIComponent(String(chatThreadId)));
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
     * Returns chat thread
     * @summary Returns chat thread
     * @param chatThreadId Chat thread id
    */
    ChatThreadsService.prototype.findChatThread = function (chatThreadId) {
        var uri = new URI(this.basePath + "/chatThreads/" + encodeURIComponent(String(chatThreadId)));
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
     * Find chat thread group permission
     * @summary Find chat thread group permission
     * @param chatThreadId Chat thread id
     * @param permissionId Permission id
    */
    ChatThreadsService.prototype.findChatThreadGroupPermission = function (chatThreadId, permissionId) {
        var uri = new URI(this.basePath + "/chatThreads/" + encodeURIComponent(String(chatThreadId)) + "/groupPermissions/" + encodeURIComponent(String(permissionId)));
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
     * Find chat thread user permission
     * @summary Find chat thread user permission
     * @param chatThreadId Chat thread id
     * @param permissionId Permission id
    */
    ChatThreadsService.prototype.findChatThreadUserPermission = function (chatThreadId, permissionId) {
        var uri = new URI(this.basePath + "/chatThreads/" + encodeURIComponent(String(chatThreadId)) + "/userPermissions/" + encodeURIComponent(String(permissionId)));
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
     * Returns chat thread report
     * @summary Returns chat thread report
     * @param threadId chat thread id
     * @param type report type. Accepted values summaryReport
     * @param accept Expected response format. Accepted values application/vnd.openxmlformats for Excel response
    */
    ChatThreadsService.prototype.getChatThreadReport = function (threadId, type, accept) {
        var uri = new URI(this.basePath + "/chatThreads/" + encodeURIComponent(String(threadId)) + "/reports/" + encodeURIComponent(String(type)));
        var options = {
            method: "get",
            headers: {
                "Accept": accept,
                "Content-Type": "application/json",
                "Authorization": "Bearer " + this.token
            }
        };
        return fetch(uri.toString(), options).then(function (response) {
            return api_1.ApiUtils.handleResponse(response);
        });
    };
    /**
     * Returns list of chat thread group permissions
     * @summary Returns list of chat thread group permissions
     * @param chatThreadId Chat thread id
    */
    ChatThreadsService.prototype.listChatThreadGroupPermissions = function (chatThreadId) {
        var uri = new URI(this.basePath + "/chatThreads/" + encodeURIComponent(String(chatThreadId)) + "/groupPermissions");
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
     * Returns list of chat thread user permissions
     * @summary Returns list of chat thread user permissions
     * @param chatThreadId Chat thread id
    */
    ChatThreadsService.prototype.listChatThreadUserPermissions = function (chatThreadId) {
        var uri = new URI(this.basePath + "/chatThreads/" + encodeURIComponent(String(chatThreadId)) + "/userPermissions");
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
     * Returns list of chat threads
     * @summary Returns list of chat threads
     * @param groupId Filter chat threads by group id
     * @param groupType Filter chat treads by group type
     * @param ownerId Filter chat treads by owner id
    */
    ChatThreadsService.prototype.listChatThreads = function (groupId, groupType, ownerId) {
        var uri = new URI(this.basePath + "/chatThreads");
        if (groupId !== undefined && groupId !== null) {
            uri.addQuery('groupId', groupId);
        }
        if (groupType !== undefined && groupType !== null) {
            uri.addQuery('groupType', groupType);
        }
        if (ownerId !== undefined && ownerId !== null) {
            uri.addQuery('ownerId', ownerId);
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
     * Update chat thread
     * @summary Update chat thread
     * @param body Payload
     * @param chatThreadId Chat thread id
    */
    ChatThreadsService.prototype.updateChatThread = function (body, chatThreadId) {
        var uri = new URI(this.basePath + "/chatThreads/" + encodeURIComponent(String(chatThreadId)));
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
     * Updates chat thread group permission
     * @summary Update chat thread group permission
     * @param body Payload
     * @param chatThreadId Chat thread id
     * @param permissionId Permission id
    */
    ChatThreadsService.prototype.updateChatThreadGroupPermission = function (body, chatThreadId, permissionId) {
        var uri = new URI(this.basePath + "/chatThreads/" + encodeURIComponent(String(chatThreadId)) + "/groupPermissions/" + encodeURIComponent(String(permissionId)));
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
     * Updates chat thread user permission
     * @summary Update chat thread user permission
     * @param body Payload
     * @param chatThreadId Chat thread id
     * @param permissionId Permission id
    */
    ChatThreadsService.prototype.updateChatThreadUserPermission = function (body, chatThreadId, permissionId) {
        var uri = new URI(this.basePath + "/chatThreads/" + encodeURIComponent(String(chatThreadId)) + "/userPermissions/" + encodeURIComponent(String(permissionId)));
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
    return ChatThreadsService;
}());
exports.ChatThreadsService = ChatThreadsService;
