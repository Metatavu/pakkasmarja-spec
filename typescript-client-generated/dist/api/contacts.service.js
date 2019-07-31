"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var URI = require("urijs");
var api_1 = require("./api");
var ContactsService = /** @class */ (function () {
    function ContactsService(basePath, token) {
        this.token = token;
        this.basePath = basePath;
    }
    /**
     * Finds contact by id
     * @summary Find contact
     * @param id contact id
    */
    ContactsService.prototype.findContact = function (id) {
        var uri = new URI(this.basePath + "/contacts/" + encodeURIComponent(String(id)));
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
     * Lists contacts
     * @summary Lists contacts
     * @param search filter results by free text search
    */
    ContactsService.prototype.listContacts = function (search) {
        var uri = new URI(this.basePath + "/contacts");
        if (search !== undefined && search !== null) {
            uri.addQuery('search', search);
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
     * Updates single contact
     * @summary Update contact
     * @param body Payload
     * @param id contact id
    */
    ContactsService.prototype.updateContact = function (body, id) {
        var uri = new URI(this.basePath + "/contacts/" + encodeURIComponent(String(id)));
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
     * Updates single contact credentials
     * @summary Update contact credentials
     * @param body Payload
     * @param id contact id
    */
    ContactsService.prototype.updateContactCredentials = function (body, id) {
        var uri = new URI(this.basePath + "/contacts/" + encodeURIComponent(String(id)) + "/credentials");
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
    return ContactsService;
}());
exports.ContactsService = ContactsService;
