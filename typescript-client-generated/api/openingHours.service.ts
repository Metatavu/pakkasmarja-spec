import { BadRequest } from '../model/badRequest';
import { Forbidden } from '../model/forbidden';
import { InternalServerError } from '../model/internalServerError';
import { OpeningHourException } from '../model/openingHourException';
import { OpeningHourPeriod } from '../model/openingHourPeriod';
import * as URI from "urijs";
import { ApiUtils } from "./api";

const COLLECTION_FORMATS = {
  'csv': ',',
  'tsv': '   ',
  'ssv': ' ',
  'pipes': '|'
}

export class OpeningHoursService {

  private token: string;
  private basePath: string;

  constructor(basePath: string, token: string) {
    this.token = token;
    this.basePath = basePath;
  }


  /**
   * Creates opening hour exception
   * @summary Create opening hour exception
   * @param body Payload
   * @param deliveryPlaceId delivery place id
  */
  public createOpeningHourException(body: OpeningHourException, deliveryPlaceId: string, ):Promise<OpeningHourException> {
    const uri = new URI(`${this.basePath}/openingHours/${encodeURIComponent(String(deliveryPlaceId))}/exceptions`);
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
   * Creates opening hour period
   * @summary Create opening hour period
   * @param body Payload
   * @param deliveryPlaceId delivery place id
  */
  public createOpeningHourPeriod(body: OpeningHourPeriod, deliveryPlaceId: string, ):Promise<OpeningHourPeriod> {
    const uri = new URI(`${this.basePath}/openingHours/${encodeURIComponent(String(deliveryPlaceId))}/periods`);
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
   * Deletes opening hour exception
   * @summary Delete opening hour exception
   * @param deliveryPlaceId delivery place id
   * @param exceptionId exception id
  */
  public deleteOpeningHourException(deliveryPlaceId: string, exceptionId: string, ):Promise<any> {
    const uri = new URI(`${this.basePath}/openingHours/${encodeURIComponent(String(deliveryPlaceId))}/exceptions/${encodeURIComponent(String(exceptionId))}`);
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
   * Deletes opening hour period
   * @summary Delete opening hour period
   * @param deliveryPlaceId delivery place id
   * @param periodId period id
  */
  public deleteOpeningHourPeriod(deliveryPlaceId: string, periodId: string, ):Promise<any> {
    const uri = new URI(`${this.basePath}/openingHours/${encodeURIComponent(String(deliveryPlaceId))}/periods/${encodeURIComponent(String(periodId))}`);
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
   * Finds opening hour period
   * @summary Find opening hour period
   * @param deliveryPlaceId delivery place id
   * @param periodId period id
  */
  public findOpeningHourPeriod(deliveryPlaceId: string, periodId: string, ):Promise<OpeningHourPeriod> {
    const uri = new URI(`${this.basePath}/openingHours/${encodeURIComponent(String(deliveryPlaceId))}/periods/${encodeURIComponent(String(periodId))}`);
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
   * Lists opening hour exceptions
   * @summary List opening hour exceptions
   * @param deliveryPlaceId delivery place id
  */
  public listOpeningHourExceptions(deliveryPlaceId: string, ):Promise<Array<OpeningHourException>> {
    const uri = new URI(`${this.basePath}/openingHours/${encodeURIComponent(String(deliveryPlaceId))}/exceptions`);
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
   * Lists opening hour periods
   * @summary List opening hour periods
   * @param deliveryPlaceId delivery place id
   * @param rangeStart list date range start
   * @param rangeEnd list date range end
   * @param firstResult Offset of first result. Defaults to 0
   * @param maxResults Max results. Defaults to unlimited
  */
  public listOpeningHourPeriods(deliveryPlaceId: string, rangeStart?: Date, rangeEnd?: Date, firstResult?: number, maxResults?: number, ):Promise<Array<OpeningHourPeriod>> {
    const uri = new URI(`${this.basePath}/openingHours/${encodeURIComponent(String(deliveryPlaceId))}/periods`);
    if (rangeStart !== undefined && rangeStart !== null) {
        uri.addQuery('rangeStart', <any>rangeStart.toISOString());
    }
    if (rangeEnd !== undefined && rangeEnd !== null) {
        uri.addQuery('rangeEnd', <any>rangeEnd.toISOString());
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


  /**
   * Updates opening hour exception
   * @summary Update opening hour exception
   * @param body Payload
   * @param deliveryPlaceId delivery place id
   * @param exceptionId exception id
  */
  public updateOpeningHourException(body: OpeningHourException, deliveryPlaceId: string, exceptionId: string, ):Promise<OpeningHourException> {
    const uri = new URI(`${this.basePath}/openingHours/${encodeURIComponent(String(deliveryPlaceId))}/exceptions/${encodeURIComponent(String(exceptionId))}`);
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


  /**
   * Updates opening hour period
   * @summary Update opening hour period
   * @param body Payload
   * @param deliveryPlaceId delivery place id
   * @param periodId period id
  */
  public updateOpeningHourPeriod(body: OpeningHourPeriod, deliveryPlaceId: string, periodId: string, ):Promise<OpeningHourPeriod> {
    const uri = new URI(`${this.basePath}/openingHours/${encodeURIComponent(String(deliveryPlaceId))}/periods/${encodeURIComponent(String(periodId))}`);
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