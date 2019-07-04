import { BadRequest } from '../model/badRequest';
import { Forbidden } from '../model/forbidden';
import { InternalServerError } from '../model/internalServerError';
import { OperationReport } from '../model/operationReport';
import { OperationReportItem } from '../model/operationReportItem';
import { OperationType } from '../model/operationType';
import * as URI from "urijs";
import { ApiUtils } from "./api";

export class OperationReportsService {

  private token: string;
  private basePath: string;

  constructor(basePath: string, token: string) {
    this.token = token;
    this.basePath = basePath;
  }


  /**
   * Find operation report by id
   * @summary Find operation report
   * @param id operation report id
  */
  public findOperationReport(id: string, ):Promise<OperationReport> {
    const uri = new URI(`${this.basePath}/operationReports/${encodeURIComponent(String(id))}`);
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
   * Lists operation report items
   * @summary List operation report items
   * @param id operation report id
  */
  public listOperationReportItems(id: string, ):Promise<Array<OperationReportItem>> {
    const uri = new URI(`${this.basePath}/operationReports/${encodeURIComponent(String(id))}/items`);
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
   * Lists operation reports
   * @summary List operation reports
   * @param type filter by type
   * @param sortBy sort by (CREATED)
   * @param sortDir sort direction (ASC, DESC)
   * @param firstResult Offset of first result. Defaults to 0
   * @param maxResults Max results. Defaults to 20
  */
  public listOperationReports(type?: OperationType, sortBy?: string, sortDir?: string, firstResult?: number, maxResults?: number, ):Promise<Array<OperationReport>> {
    const uri = new URI(`${this.basePath}/operationReports`);
    if (type !== undefined && type !== null) {
        uri.addQuery('type', <any>type);
    }
    if (sortBy !== undefined && sortBy !== null) {
        uri.addQuery('sortBy', <any>sortBy);
    }
    if (sortDir !== undefined && sortDir !== null) {
        uri.addQuery('sortDir', <any>sortDir);
    }
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

}