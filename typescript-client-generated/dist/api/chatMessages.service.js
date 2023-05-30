"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatMessagesService = void 0;
var URI = require("urijs");
var api_1 = require("./api");
var COLLECTION_FORMATS = {
    'csv': ',',
    'tsv': '   ',
    'ssv': ' ',
    'pipes': '|'
};
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
     * Returns whether message has been read
     * @summary Returns whether message has been read
     * @param chatThreadId Chat thread
     * @param messageId Chat message id
    */
    ChatMessagesService.prototype.getMessageRead = function (chatThreadId, messageId) {
        var uri = new URI(this.basePath + "/chatThreads/" + encodeURIComponent(String(chatThreadId)) + "/messages/" + encodeURIComponent(String(messageId)) + "/read");
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
     * Returns amount of users who have read message as string
     * @summary Returns amount of users who have read message as string
     * @param chatThreadId Chat thread
     * @param messageId Chat message id
    */
    ChatMessagesService.prototype.getMessageReadAmount = function (chatThreadId, messageId) {
        var uri = new URI(this.basePath + "/chatThreads/" + encodeURIComponent(String(chatThreadId)) + "/messages/" + encodeURIComponent(String(messageId)) + "/read/amount");
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
     * @param createdBefore Messages created before given time
     * @param createdAfter Messages created after given time
     * @param userId Messages created by given user
     * @param firstResult Offset of first result. Defaults to 0
     * @param maxResults Max results. Defaults to 5
    */
    ChatMessagesService.prototype.listChatMessages = function (chatThreadId, createdBefore, createdAfter, userId, firstResult, maxResults) {
        var uri = new URI(this.basePath + "/chatThreads/" + encodeURIComponent(String(chatThreadId)) + "/messages");
        if (createdBefore !== undefined && createdBefore !== null) {
            uri.addQuery('createdBefore', createdBefore.toISOString());
        }
        if (createdAfter !== undefined && createdAfter !== null) {
            uri.addQuery('createdAfter', createdAfter.toISOString());
        }
        if (userId !== undefined && userId !== null) {
            uri.addQuery('userId', userId);
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
