import { BadRequest } from '../model/badRequest';
import { Forbidden } from '../model/forbidden';
import { InternalServerError } from '../model/internalServerError';
import { SharedFile } from '../model/sharedFile';
import * as URI from "urijs";
import { ApiUtils } from "./api";

const COLLECTION_FORMATS = {
  'csv': ',',
  'tsv': '   ',
  'ssv': ' ',
  'pipes': '|'
}

export class SharedFilesService {

  private token: string;
  private basePath: string;

  constructor(basePath: string, token: string) {
    this.token = token;
    this.basePath = basePath;
  }


  /**
   * Deletes shared file from Amazon S3
   * @summary Delete shared file from S3
   * @param fileName File name
   * @param pathPrefix File path prefix
  */
  public deleteSharedFile(fileName: string, pathPrefix?: string, ):Promise<any> {
    const uri = new URI(`${this.basePath}/sharedFiles`);
    if (pathPrefix !== undefined && pathPrefix !== null) {
        uri.addQuery('pathPrefix', <any>pathPrefix);
    }
    if (fileName !== undefined && fileName !== null) {
        uri.addQuery('fileName', <any>fileName);
    }
    const options = {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`
      }
    };

    return fetch(uri.toString(), options).then((response) => {
      return ApiUtils.handleResponse(response);
    });
  }


  /**
   * Fetches shared file from Amazon S3
   * @summary Get shared file from S3
   * @param fileName File name
   * @param pathPrefix Path prefix
  */
  public getSharedFile(fileName: string, pathPrefix?: string, ):Promise<string> {
    const uri = new URI(`${this.basePath}/sharedFiles/download`);
    if (pathPrefix !== undefined && pathPrefix !== null) {
        uri.addQuery('pathPrefix', <any>pathPrefix);
    }
    if (fileName !== undefined && fileName !== null) {
        uri.addQuery('fileName', <any>fileName);
    }
    const options = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`
      }
    };

    return fetch(uri.toString(), options).then((response) => {
      return ApiUtils.handleResponse(response);
    });
  }


  /**
   * Lists shared files from Amazon S3
   * @summary List shared files from S3
   * @param pathPrefix Path prefix
  */
  public listSharedFiles(pathPrefix?: string, ):Promise<Array<SharedFile>> {
    const uri = new URI(`${this.basePath}/sharedFiles`);
    if (pathPrefix !== undefined && pathPrefix !== null) {
        uri.addQuery('pathPrefix', <any>pathPrefix);
    }
    const options = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`
      }
    };

    return fetch(uri.toString(), options).then((response) => {
      return ApiUtils.handleResponse(response);
    });
  }


  /**
   * Uploads shared file to Amazon S3
   * @summary Upload shared file to S3
   * @param fileName File name
   * @param file 
   * @param pathPrefix File path prefix
  */
  public uploadSharedFile(fileName: string, file?: string, pathPrefix?: string, ):Promise<SharedFile> {
    const uri = new URI(`${this.basePath}/sharedFiles/upload/file`);
    if (pathPrefix !== undefined && pathPrefix !== null) {
        uri.addQuery('pathPrefix', <any>pathPrefix);
    }
    if (fileName !== undefined && fileName !== null) {
        uri.addQuery('fileName', <any>fileName);
    }
    const options = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`
      }
    };

    return fetch(uri.toString(), options).then((response) => {
      return ApiUtils.handleResponse(response);
    });
  }


  /**
   * Uploads shared folder to Amazon S3
   * @summary Upload shared folder to S3
   * @param folderName Folder name
   * @param pathPrefix Folder path prefix
  */
  public uploadSharedFolder(folderName: string, pathPrefix?: string, ):Promise<SharedFile> {
    const uri = new URI(`${this.basePath}/sharedFiles/upload/folder`);
    if (pathPrefix !== undefined && pathPrefix !== null) {
        uri.addQuery('pathPrefix', <any>pathPrefix);
    }
    if (folderName !== undefined && folderName !== null) {
        uri.addQuery('folderName', <any>folderName);
    }
    const options = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`
      }
    };

    return fetch(uri.toString(), options).then((response) => {
      return ApiUtils.handleResponse(response);
    });
  }

}