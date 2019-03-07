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
     * @param groupType Filter chat groups by group type
    */
    ChatThreadsService.prototype.listChatThreads = function (groupId, groupType) {
        var uri = new URI(this.basePath + "/chatThreads");
        if (groupId !== undefined && groupId !== null) {
            uri.addQuery('groupId', groupId);
        }
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
     * Update chat thread
     * @summary Update chat thread
     * @param chatThreadId Chat thread id
    */
    ChatThreadsService.prototype.updateChatThread = function (chatThreadId) {
        var uri = new URI(this.basePath + "/chatThreads/" + encodeURIComponent(String(chatThreadId)));
        var options = {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + this.token
            }
        };
        return fetch(uri.toString(), options).then(function (response) {
            return api_1.ApiUtils.handleResponse(response);
        });
    };
    return ChatThreadsService;
}());
exports.ChatThreadsService = ChatThreadsService;
