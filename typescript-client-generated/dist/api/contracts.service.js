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
var ContractsService = /** @class */ (function () {
    function ContractsService(basePath, token) {
        this.token = token;
        this.basePath = basePath;
    }
    /**
     * Create new contract
     * @summary Create contract
     * @param body Payload
    */
    ContractsService.prototype.createContract = function (body) {
        var uri = new URI(this.basePath + "/contracts");
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
     * Requests contract document electronic signing
     * @summary Requests contract document electronic signing
     * @param body Payload
     * @param id contract id
     * @param type document type
     * @param ssn Social security number
     * @param authService Used auth service name
     * @param redirectUrl Redirect after succesfull signing
    */
    ContractsService.prototype.createContractDocumentSignRequest = function (body, id, type, ssn, authService, redirectUrl) {
        var uri = new URI(this.basePath + "/contracts/" + encodeURIComponent(String(id)) + "/documents/" + encodeURIComponent(String(type)) + "/signRequests");
        if (ssn !== undefined && ssn !== null) {
            uri.addQuery('ssn', ssn);
        }
        if (authService !== undefined && authService !== null) {
            uri.addQuery('authService', authService);
        }
        if (redirectUrl !== undefined && redirectUrl !== null) {
            uri.addQuery('redirectUrl', redirectUrl);
        }
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
     * Create new contract document template
     * @summary Create contract document template
     * @param body Payload
     * @param contractId contract id
    */
    ContractsService.prototype.createContractDocumentTemplate = function (body, contractId) {
        var uri = new URI(this.basePath + "/contracts/" + encodeURIComponent(String(contractId)) + "/documentTemplates");
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
     * Finds contract by id
     * @summary Find contract
     * @param id contract id
     * @param accept Expected response format. Accepted values application/json for JSON reponse (default) and application/vnd.openxmlformats-officedocument.spreadsheetml.sheet for Excel response
    */
    ContractsService.prototype.findContract = function (id, accept) {
        var uri = new URI(this.basePath + "/contracts/" + encodeURIComponent(String(id)));
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
     * Finds a contract templates
     * @summary Find contract document template
     * @param contractId contract id
     * @param contractDocumentTemplateId contract id
    */
    ContractsService.prototype.findContractDocumentTemplate = function (contractId, contractDocumentTemplateId) {
        var uri = new URI(this.basePath + "/contracts/" + encodeURIComponent(String(contractId)) + "/documentTemplates/" + encodeURIComponent(String(contractDocumentTemplateId)));
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
     * Returns contract document by type
     * @summary Returns contract document
     * @param id contract id
     * @param type document type
     * @param format document format (HTML or PDF)
    */
    ContractsService.prototype.getContractDocument = function (id, type, format) {
        var uri = new URI(this.basePath + "/contracts/" + encodeURIComponent(String(id)) + "/documents/" + encodeURIComponent(String(type)));
        if (format !== undefined && format !== null) {
            uri.addQuery('format', format);
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
     * Lists contract templates
     * @summary List contract document templates
     * @param contractId contract id
     * @param type Filter results by document template type
    */
    ContractsService.prototype.listContractDocumentTemplates = function (contractId, type) {
        var uri = new URI(this.basePath + "/contracts/" + encodeURIComponent(String(contractId)) + "/documentTemplates");
        if (type !== undefined && type !== null) {
            uri.addQuery('type', type);
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
     * Lists contract prices
     * @summary List contract prices
     * @param contractId contract id
     * @param sortBy sort by (YEAR)
     * @param sortDir sort direction (ASC, DESC)
     * @param firstResult Offset of first result. Defaults to 0
     * @param maxResults Max results. Defaults to 5
    */
    ContractsService.prototype.listContractPrices = function (contractId, sortBy, sortDir, firstResult, maxResults) {
        var uri = new URI(this.basePath + "/contracts/" + encodeURIComponent(String(contractId)) + "/prices");
        if (sortBy !== undefined && sortBy !== null) {
            uri.addQuery('sortBy', sortBy);
        }
        if (sortDir !== undefined && sortDir !== null) {
            uri.addQuery('sortDir', sortDir);
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
     * Lists contracts
     * @summary Lists contracts
     * @param accept Expected response format. Accepted values application/json for JSON reponse (default) and application/vnd.openxmlformats-officedocument.spreadsheetml.sheet for Excel response
     * @param listAll Returns all contracts instead of just user&#39;s own contracts. User must have permission to do this.
     * @param itemGroupCategory Filters results by item group category.
     * @param itemGroupId Filters results by item group id.
     * @param year Filters results by year.
     * @param status Filters results by status
     * @param firstResult Offset of first result. Defaults to 0
     * @param maxResults Max results. Defaults to 5
    */
    ContractsService.prototype.listContracts = function (accept, listAll, itemGroupCategory, itemGroupId, year, status, firstResult, maxResults) {
        var uri = new URI(this.basePath + "/contracts");
        if (listAll !== undefined && listAll !== null) {
            uri.addQuery('listAll', listAll);
        }
        if (itemGroupCategory !== undefined && itemGroupCategory !== null) {
            uri.addQuery('itemGroupCategory', itemGroupCategory);
        }
        if (itemGroupId !== undefined && itemGroupId !== null) {
            uri.addQuery('itemGroupId', itemGroupId);
        }
        if (year !== undefined && year !== null) {
            uri.addQuery('year', year);
        }
        if (status !== undefined && status !== null) {
            uri.addQuery('status', status);
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
     * Updates single contract
     * @summary Update contract
     * @param body Payload
     * @param id contract id
    */
    ContractsService.prototype.updateContract = function (body, id) {
        var uri = new URI(this.basePath + "/contracts/" + encodeURIComponent(String(id)));
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
     * Updates a contract templates
     * @summary Updates contract document template
     * @param body Payload
     * @param contractId contract id
     * @param contractDocumentTemplateId contract id
    */
    ContractsService.prototype.updateContractDocumentTemplate = function (body, contractId, contractDocumentTemplateId) {
        var uri = new URI(this.basePath + "/contracts/" + encodeURIComponent(String(contractId)) + "/documentTemplates/" + encodeURIComponent(String(contractDocumentTemplateId)));
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
    return ContractsService;
}());
exports.ContractsService = ContractsService;
