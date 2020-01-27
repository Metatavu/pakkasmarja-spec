import { BadRequest } from '../model/badRequest';
import { DataSheet } from '../model/dataSheet';
import { Forbidden } from '../model/forbidden';
import { InternalServerError } from '../model/internalServerError';
import * as URI from "urijs";
import { ApiUtils } from "./api";

const COLLECTION_FORMATS = {
  'csv': ',',
  'tsv': '   ',
  'ssv': ' ',
  'pipes': '|'
}

export class DataSheetsService {

  private token: string;
  private basePath: string;

  constructor(basePath: string, token: string) {
    this.token = token;
    this.basePath = basePath;
  }


  /**
   * Creates data sheet
   * @summary Create data sheet
   * @param body Payload
  */
  public createDataSheet(body: DataSheet, ):Promise<DataSheet> {
    const uri = new URI(`${this.basePath}/dataSheets`);
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
   * Deletes data sheet
   * @summary Delete data sheet
   * @param dataSheetId dataSheet id id
  */
  public deleteDataSheet(dataSheetId: string, ):Promise<any> {
    const uri = new URI(`${this.basePath}/dataSheets/${encodeURIComponent(String(dataSheetId))}`);
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
   * Finds data sheet by id
   * @summary Find data sheet
   * @param dataSheetId dataSheet id id
  */
  public findDataSheet(dataSheetId: string, ):Promise<DataSheet> {
    const uri = new URI(`${this.basePath}/dataSheets/${encodeURIComponent(String(dataSheetId))}`);
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
   * Lists data sheets
   * @summary Lists data sheets
   * @param name Filter by name
  */
  public listDataSheets(name?: string, ):Promise<Array<DataSheet>> {
    const uri = new URI(`${this.basePath}/dataSheets`);
    if (name !== undefined && name !== null) {
        uri.addQuery('name', <any>name);
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
   * Updates data sheet
   * @summary Update data sheet
   * @param body Payload
   * @param dataSheetId dataSheet id id
  */
  public updateDataSheet(body: DataSheet, dataSheetId: string, ):Promise<DataSheet> {
    const uri = new URI(`${this.basePath}/dataSheets/${encodeURIComponent(String(dataSheetId))}`);
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