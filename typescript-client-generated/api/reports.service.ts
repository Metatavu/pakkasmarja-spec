import { BadRequest } from '../model/badRequest';
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

export class ReportsService {

  private token: string;
  private basePath: string;

  constructor(basePath: string, token: string) {
    this.token = token;
    this.basePath = basePath;
  }


  /**
   * Returns report by type
   * @summary Returns report
   * @param type Report type
   * @param format document format (HTML or PDF)
   * @param startDate deliveries from
   * @param endDate deliveries to
   * @param productIds filter by product Ids
  */
  public getReport(type: string, format: string, startDate?: Date, endDate?: Date, productIds?: Array<string>, ):Promise<string> {
    const uri = new URI(`${this.basePath}/reports/${encodeURIComponent(String(type))}`);
    if (format !== undefined && format !== null) {
        uri.addQuery('format', <any>format);
    }
    if (startDate !== undefined && startDate !== null) {
        uri.addQuery('startDate', <any>startDate.toISOString());
    }
    if (endDate !== undefined && endDate !== null) {
        uri.addQuery('endDate', <any>endDate.toISOString());
    }
    if (productIds) {
        uri.addQuery('productIds', productIds.join(COLLECTION_FORMATS['csv']));
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