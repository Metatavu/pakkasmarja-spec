"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var URI = require("urijs");
var api_1 = require("./api");
var ChatMessagesService = /** @class */ (function () {
    function ChatMessagesService(basePath, token) {
        this.token = token;
        this.basePath = basePath;
    }
    /**
     * Creates new chat message
     * @summary Creates new chat message
     * @param body Payload
     * @param chatThreadId Chat thread
    */
    ChatMessagesService.prototype.createChatMessage = function (body, chatThreadId) {
        var uri = new URI(this.basePath + "/chatThreads/" + encodeURIComponent(String(chatThreadId)) + "/messages");
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
     * Deletes chat message
     * @summary Deletes chat message
     * @param chatThreadId Chat thread
     * @param messageId Chat message id
    */
    ChatMessagesService.prototype.deleteChatMessage = function (chatThreadId, messageId) {
        var uri = new URI(this.basePath + "/chatThreads/" + encodeURIComponent(String(chatThreadId)) + "/messages/" + encodeURIComponent(String(messageId)));
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
     * @summary Returns chat message
     * @param chatThreadId Chat thread
     * @param messageId Chat message id
    */
    ChatMessagesService.prototype.findChatMessage = function (chatThreadId, messageId) {
        var uri = new URI(this.basePath + "/chatThreads/" + encodeURIComponent(String(chatThreadId)) + "/messages/" + encodeURIComponent(String(messageId)));
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
     * Returns list of chat messages
     * @summary Returns list of chat messages
     * @param chatThreadId Chat thread
    */
    ChatMessagesService.prototype.listChatMessages = function (chatThreadId) {
        var uri = new URI(this.basePath + "/chatThreads/" + encodeURIComponent(String(chatThreadId)) + "/messages");
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
     * Update chat message
     * @summary Update chat message
     * @param chatThreadId Chat thread
     * @param messageId Chat message id
    */
    ChatMessagesService.prototype.updateChatMessage = function (chatThreadId, messageId) {
        var uri = new URI(this.basePath + "/chatThreads/" + encodeURIComponent(String(chatThreadId)) + "/messages/" + encodeURIComponent(String(messageId)));
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
    return ChatMessagesService;
}());
exports.ChatMessagesService = ChatMessagesService;