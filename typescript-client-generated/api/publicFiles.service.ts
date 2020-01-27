import { BadRequest } from '../model/badRequest';
import { Forbidden } from '../model/forbidden';
import { InternalServerError } from '../model/internalServerError';
import { PublicFile } from '../model/publicFile';
import * as URI from "urijs";
import { ApiUtils } from "./api";

const COLLECTION_FORMATS = {
  'csv': ',',
  'tsv': '   ',
  'ssv': ' ',
  'pipes': '|'
}

export class PublicFilesService {

  private token: string;
  private basePath: string;

  constructor(basePath: string, token: string) {
    this.token = token;
    this.basePath = basePath;
  }


  /**
   * Creates public file
   * @summary Create public file
   * @param body Payload
  */
  public createPublicFile(body: PublicFile, ):Promise<PublicFile> {
    const uri = new URI(`${this.basePath}/publicFiles`);
    const options = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`
      },
      body: JSON.stringify(body)
    };

    return fetch(uri.toString(), options).then((response) => {
      return ApiUtils.handleResponse(response);
    });
  }


  /**
   * Deletes public file
   * @summary Delete public file
   * @param publicFileId publicFile id id
  */
  public deletePublicFile(publicFileId: string, ):Promise<any> {
    const uri = new URI(`${this.basePath}/publicFiles/${encodeURIComponent(String(publicFileId))}`);
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
   * Finds public file by id
   * @summary Find public file
   * @param publicFileId publicFile id id
  */
  public findPublicFile(publicFileId: string, ):Promise<PublicFile> {
    const uri = new URI(`${this.basePath}/publicFiles/${encodeURIComponent(String(publicFileId))}`);
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
   * Lists public files
   * @summary Lists public files
   * @param firstResult Offset of first result. Defaults to 0
   * @param maxResults Max results. Defaults to 5
  */
  public listPublicFiles(firstResult?: number, maxResults?: number, ):Promise<Array<PublicFile>> {
    const uri = new URI(`${this.basePath}/publicFiles`);
    if (firstResult !== undefined && firstResult !== null) {
        uri.addQuery('firstResult', <any>firstResult);
    }
    if (maxResults !== undefined && maxResults !== null) {
        uri.addQuery('maxResults', <any>maxResults);
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
   * Updates public file
   * @summary Update public file
   * @param body Payload
   * @param publicFileId publicFile id id
  */
  public updatePublicFile(body: PublicFile, publicFileId: string, ):Promise<PublicFile> {
    const uri = new URI(`${this.basePath}/publicFiles/${encodeURIComponent(String(publicFileId))}`);
    const options = {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`
      },
      body: JSON.stringify(body)
    };

    return fetch(uri.toString(), options).then((response) => {
      return ApiUtils.handleResponse(response);
    });
  }

}