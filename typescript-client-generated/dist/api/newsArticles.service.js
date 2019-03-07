"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var URI = require("urijs");
var api_1 = require("./api");
var NewsArticlesService = /** @class */ (function () {
    function NewsArticlesService(basePath, token) {
        this.token = token;
        this.basePath = basePath;
    }
    /**
     * Creates news article
     * @summary Create news article
     * @param body Payload
    */
    NewsArticlesService.prototype.createNewsArticle = function (body) {
        var uri = new URI(this.basePath + "/newsArticles");
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
     * Deletes news article
     * @summary Delete news article
     * @param newsArticleId news article id id
    */
    NewsArticlesService.prototype.deleteNewsArticle = function (newsArticleId) {
        var uri = new URI(this.basePath + "/newsArticles/" + encodeURIComponent(String(newsArticleId)));
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
     * Finds news article by id
     * @summary Find news article
     * @param newsArticleId news article id id
    */
    NewsArticlesService.prototype.findNewsArticle = function (newsArticleId) {
        var uri = new URI(this.basePath + "/newsArticles/" + encodeURIComponent(String(newsArticleId)));
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
     * Lists news articles
     * @summary Lists news articles
    */
    NewsArticlesService.prototype.listNewsArticles = function () {
        var uri = new URI(this.basePath + "/newsArticles");
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
     * Updates news article
     * @summary Update news article
     * @param body Payload
     * @param newsArticleId news article id id
    */
    NewsArticlesService.prototype.updateNewsArticle = function (body, newsArticleId) {
        var uri = new URI(this.basePath + "/newsArticles/" + encodeURIComponent(String(newsArticleId)));
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
    return NewsArticlesService;
}());
exports.NewsArticlesService = NewsArticlesService;
