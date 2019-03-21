"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./chatGroups.service"));
var chatGroups_service_1 = require("./chatGroups.service");
__export(require("./chatMessages.service"));
var chatMessages_service_1 = require("./chatMessages.service");
__export(require("./chatThreads.service"));
var chatThreads_service_1 = require("./chatThreads.service");
__export(require("./contacts.service"));
var contacts_service_1 = require("./contacts.service");
__export(require("./contracts.service"));
var contracts_service_1 = require("./contracts.service");
__export(require("./deliveries.service"));
var deliveries_service_1 = require("./deliveries.service");
__export(require("./deliveryPlaces.service"));
var deliveryPlaces_service_1 = require("./deliveryPlaces.service");
__export(require("./itemGroups.service"));
var itemGroups_service_1 = require("./itemGroups.service");
__export(require("./newsArticles.service"));
var newsArticles_service_1 = require("./newsArticles.service");
__export(require("./operationReports.service"));
var operationReports_service_1 = require("./operationReports.service");
__export(require("./operations.service"));
var operations_service_1 = require("./operations.service");
__export(require("./products.service"));
var products_service_1 = require("./products.service");
__export(require("./publicFiles.service"));
var publicFiles_service_1 = require("./publicFiles.service");
__export(require("./signAuthenticationServices.service"));
var signAuthenticationServices_service_1 = require("./signAuthenticationServices.service");
__export(require("./weekDeliveryPredictions.service"));
var weekDeliveryPredictions_service_1 = require("./weekDeliveryPredictions.service");
var ApiUtils = /** @class */ (function () {
    function ApiUtils() {
    }
    /**
     * Handles response from API
     *
     * @param response response object
     */
    ApiUtils.handleResponse = function (response) {
        switch (response.status) {
            case 204:
                return {};
            default:
                return response.json();
        }
    };
    return ApiUtils;
}());
exports.ApiUtils = ApiUtils;
exports.default = new /** @class */ (function () {
    function Api() {
        this.apiUrl = "http://localhost";
    }
    /**
     * Configures api endpoint
     *
     */
    Api.prototype.configure = function (baseUrl) {
        this.apiUrl = baseUrl;
    };
    Api.prototype.getChatGroupsService = function (token) {
        return new chatGroups_service_1.ChatGroupsService(this.apiUrl, token);
    };
    Api.prototype.getChatMessagesService = function (token) {
        return new chatMessages_service_1.ChatMessagesService(this.apiUrl, token);
    };
    Api.prototype.getChatThreadsService = function (token) {
        return new chatThreads_service_1.ChatThreadsService(this.apiUrl, token);
    };
    Api.prototype.getContactsService = function (token) {
        return new contacts_service_1.ContactsService(this.apiUrl, token);
    };
    Api.prototype.getContractsService = function (token) {
        return new contracts_service_1.ContractsService(this.apiUrl, token);
    };
    Api.prototype.getDeliveriesService = function (token) {
        return new deliveries_service_1.DeliveriesService(this.apiUrl, token);
    };
    Api.prototype.getDeliveryPlacesService = function (token) {
        return new deliveryPlaces_service_1.DeliveryPlacesService(this.apiUrl, token);
    };
    Api.prototype.getItemGroupsService = function (token) {
        return new itemGroups_service_1.ItemGroupsService(this.apiUrl, token);
    };
    Api.prototype.getNewsArticlesService = function (token) {
        return new newsArticles_service_1.NewsArticlesService(this.apiUrl, token);
    };
    Api.prototype.getOperationReportsService = function (token) {
        return new operationReports_service_1.OperationReportsService(this.apiUrl, token);
    };
    Api.prototype.getOperationsService = function (token) {
        return new operations_service_1.OperationsService(this.apiUrl, token);
    };
    Api.prototype.getProductsService = function (token) {
        return new products_service_1.ProductsService(this.apiUrl, token);
    };
    Api.prototype.getPublicFilesService = function (token) {
        return new publicFiles_service_1.PublicFilesService(this.apiUrl, token);
    };
    Api.prototype.getSignAuthenticationServicesService = function (token) {
        return new signAuthenticationServices_service_1.SignAuthenticationServicesService(this.apiUrl, token);
    };
    Api.prototype.getWeekDeliveryPredictionsService = function (token) {
        return new weekDeliveryPredictions_service_1.WeekDeliveryPredictionsService(this.apiUrl, token);
    };
    return Api;
}());
