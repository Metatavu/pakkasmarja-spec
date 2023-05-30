"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiUtils = void 0;
__exportStar(require("./chatGroups.service"), exports);
var chatGroups_service_1 = require("./chatGroups.service");
__exportStar(require("./chatMessages.service"), exports);
var chatMessages_service_1 = require("./chatMessages.service");
__exportStar(require("./chatThreads.service"), exports);
var chatThreads_service_1 = require("./chatThreads.service");
__exportStar(require("./contacts.service"), exports);
var contacts_service_1 = require("./contacts.service");
__exportStar(require("./contracts.service"), exports);
var contracts_service_1 = require("./contracts.service");
__exportStar(require("./dataSheets.service"), exports);
var dataSheets_service_1 = require("./dataSheets.service");
__exportStar(require("./deliveries.service"), exports);
var deliveries_service_1 = require("./deliveries.service");
__exportStar(require("./deliveryLoans.service"), exports);
var deliveryLoans_service_1 = require("./deliveryLoans.service");
__exportStar(require("./deliveryPlaces.service"), exports);
var deliveryPlaces_service_1 = require("./deliveryPlaces.service");
__exportStar(require("./deliveryQualities.service"), exports);
var deliveryQualities_service_1 = require("./deliveryQualities.service");
__exportStar(require("./itemGroups.service"), exports);
var itemGroups_service_1 = require("./itemGroups.service");
__exportStar(require("./newsArticles.service"), exports);
var newsArticles_service_1 = require("./newsArticles.service");
__exportStar(require("./openingHours.service"), exports);
var openingHours_service_1 = require("./openingHours.service");
__exportStar(require("./operationReports.service"), exports);
var operationReports_service_1 = require("./operationReports.service");
__exportStar(require("./operations.service"), exports);
var operations_service_1 = require("./operations.service");
__exportStar(require("./productPrices.service"), exports);
var productPrices_service_1 = require("./productPrices.service");
__exportStar(require("./products.service"), exports);
var products_service_1 = require("./products.service");
__exportStar(require("./publicFiles.service"), exports);
var publicFiles_service_1 = require("./publicFiles.service");
__exportStar(require("./reports.service"), exports);
var reports_service_1 = require("./reports.service");
__exportStar(require("./sharedFiles.service"), exports);
var sharedFiles_service_1 = require("./sharedFiles.service");
__exportStar(require("./signAuthenticationServices.service"), exports);
var signAuthenticationServices_service_1 = require("./signAuthenticationServices.service");
__exportStar(require("./unreads.service"), exports);
var unreads_service_1 = require("./unreads.service");
__exportStar(require("./userGroups.service"), exports);
var userGroups_service_1 = require("./userGroups.service");
__exportStar(require("./weekDeliveryPredictions.service"), exports);
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
    Api.prototype.getDataSheetsService = function (token) {
        return new dataSheets_service_1.DataSheetsService(this.apiUrl, token);
    };
    Api.prototype.getDeliveriesService = function (token) {
        return new deliveries_service_1.DeliveriesService(this.apiUrl, token);
    };
    Api.prototype.getDeliveryLoansService = function (token) {
        return new deliveryLoans_service_1.DeliveryLoansService(this.apiUrl, token);
    };
    Api.prototype.getDeliveryPlacesService = function (token) {
        return new deliveryPlaces_service_1.DeliveryPlacesService(this.apiUrl, token);
    };
    Api.prototype.getDeliveryQualitiesService = function (token) {
        return new deliveryQualities_service_1.DeliveryQualitiesService(this.apiUrl, token);
    };
    Api.prototype.getItemGroupsService = function (token) {
        return new itemGroups_service_1.ItemGroupsService(this.apiUrl, token);
    };
    Api.prototype.getNewsArticlesService = function (token) {
        return new newsArticles_service_1.NewsArticlesService(this.apiUrl, token);
    };
    Api.prototype.getOpeningHoursService = function (token) {
        return new openingHours_service_1.OpeningHoursService(this.apiUrl, token);
    };
    Api.prototype.getOperationReportsService = function (token) {
        return new operationReports_service_1.OperationReportsService(this.apiUrl, token);
    };
    Api.prototype.getOperationsService = function (token) {
        return new operations_service_1.OperationsService(this.apiUrl, token);
    };
    Api.prototype.getProductPricesService = function (token) {
        return new productPrices_service_1.ProductPricesService(this.apiUrl, token);
    };
    Api.prototype.getProductsService = function (token) {
        return new products_service_1.ProductsService(this.apiUrl, token);
    };
    Api.prototype.getPublicFilesService = function (token) {
        return new publicFiles_service_1.PublicFilesService(this.apiUrl, token);
    };
    Api.prototype.getReportsService = function (token) {
        return new reports_service_1.ReportsService(this.apiUrl, token);
    };
    Api.prototype.getSharedFilesService = function (token) {
        return new sharedFiles_service_1.SharedFilesService(this.apiUrl, token);
    };
    Api.prototype.getSignAuthenticationServicesService = function (token) {
        return new signAuthenticationServices_service_1.SignAuthenticationServicesService(this.apiUrl, token);
    };
    Api.prototype.getUnreadsService = function (token) {
        return new unreads_service_1.UnreadsService(this.apiUrl, token);
    };
    Api.prototype.getUserGroupsService = function (token) {
        return new userGroups_service_1.UserGroupsService(this.apiUrl, token);
    };
    Api.prototype.getWeekDeliveryPredictionsService = function (token) {
        return new weekDeliveryPredictions_service_1.WeekDeliveryPredictionsService(this.apiUrl, token);
    };
    return Api;
}());
