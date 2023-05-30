"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedFilesService = void 0;
var URI = require("urijs");
var api_1 = require("./api");
var COLLECTION_FORMATS = {
    'csv': ',',
    'tsv': '   ',
    'ssv': ' ',
    'pipes': '|'
};
var SharedFilesService = /** @class */ (function () {
    function SharedFilesService(basePath, token) {
        this.token = token;
        this.basePath = basePath;
    }
    /**
     * Deletes shared file from Amazon S3
     * @summary Delete shared file from S3
     * @param fileName File name
     * @param pathPrefix File path prefix
    */
    SharedFilesService.prototype.deleteSharedFile = function (fileName, pathPrefix) {
        var uri = new URI(this.basePath + "/sharedFiles");
        if (pathPrefix !== undefined && pathPrefix !== null) {
            uri.addQuery('pathPrefix', pathPrefix);
        }
        if (fileName !== undefined && fileName !== null) {
            uri.addQuery('fileName', fileName);
        }
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
     * Fetches shared file from Amazon S3
     * @summary Get shared file from S3
     * @param fileName File name
     * @param pathPrefix Path prefix
    */
    SharedFilesService.prototype.getSharedFile = function (fileName, pathPrefix) {
        var uri = new URI(this.basePath + "/sharedFiles/download");
        if (pathPrefix !== undefined && pathPrefix !== null) {
            uri.addQuery('pathPrefix', pathPrefix);
        }
        if (fileName !== undefined && fileName !== null) {
            uri.addQuery('fileName', fileName);
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
     * Lists shared files from Amazon S3
     * @summary List shared files from S3
     * @param pathPrefix Path prefix
    */
    SharedFilesService.prototype.listSharedFiles = function (pathPrefix) {
        var uri = new URI(this.basePath + "/sharedFiles");
        if (pathPrefix !== undefined && pathPrefix !== null) {
            uri.addQuery('pathPrefix', pathPrefix);
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
     * Uploads shared file to Amazon S3
     * @summary Upload shared file to S3
     * @param fileName File name
     * @param file
     * @param pathPrefix File path prefix
    */
    SharedFilesService.prototype.uploadSharedFile = function (fileName, file, pathPrefix) {
        var uri = new URI(this.basePath + "/sharedFiles/upload/file");
        if (pathPrefix !== undefined && pathPrefix !== null) {
            uri.addQuery('pathPrefix', pathPrefix);
        }
        if (fileName !== undefined && fileName !== null) {
            uri.addQuery('fileName', fileName);
        }
        var options = {
            method: "post",
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
     * Uploads shared folder to Amazon S3
     * @summary Upload shared folder to S3
     * @param folderName Folder name
     * @param pathPrefix Folder path prefix
    */
    SharedFilesService.prototype.uploadSharedFolder = function (folderName, pathPrefix) {
        var uri = new URI(this.basePath + "/sharedFiles/upload/folder");
        if (pathPrefix !== undefined && pathPrefix !== null) {
            uri.addQuery('pathPrefix', pathPrefix);
        }
        if (folderName !== undefined && folderName !== null) {
            uri.addQuery('folderName', folderName);
        }
        var options = {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + this.token
            }
        };
        return fetch(uri.toString(), options).then(function (response) {
            return api_1.ApiUtils.handleResponse(response);
        });
    };
    return SharedFilesService;
}());
exports.SharedFilesService = SharedFilesService;
