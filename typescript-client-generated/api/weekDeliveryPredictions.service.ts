import { BadRequest } from '../model/badRequest';
import { Forbidden } from '../model/forbidden';
import { InternalServerError } from '../model/internalServerError';
import { ItemGroupType } from '../model/itemGroupType';
import { WeekDeliveryPrediction } from '../model/weekDeliveryPrediction';
import * as URI from "urijs";
import { ApiUtils } from "./api";

export class WeekDeliveryPredictionsService {

  private token: string;
  private basePath: string;

  constructor(basePath: string, token: string) {
    this.token = token;
    this.basePath = basePath;
  }


  /**
   * Creates week delivery prediction
   * @summary Create week delivery prediction
   * @param body Payload
  */
  public createWeekDeliveryPrediction(body: WeekDeliveryPrediction, ):Promise<WeekDeliveryPrediction> {
    const uri = new URI(`${this.basePath}/weekDeliveryPredictions`);
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
   * Deletes weekDeliveryPrediction
   * @summary Delete weekDeliveryPrediction
   * @param weekDeliveryPredictionId weekDeliveryPrediction id id
  */
  public deleteWeekDeliveryPrediction(weekDeliveryPredictionId: string, ):Promise<any> {
    const uri = new URI(`${this.basePath}/weekDeliveryPredictions/${encodeURIComponent(String(weekDeliveryPredictionId))}`);
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
   * Finds weekDeliveryPrediction by id
   * @summary Find weekDeliveryPrediction
   * @param weekDeliveryPredictionId weekDeliveryPrediction id id
  */
  public findWeekDeliveryPrediction(weekDeliveryPredictionId: string, ):Promise<WeekDeliveryPrediction> {
    const uri = new URI(`${this.basePath}/weekDeliveryPredictions/${encodeURIComponent(String(weekDeliveryPredictionId))}`);
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
   * Lists weekDeliveryPredictions
   * @summary Lists weekDeliveryPredictions
   * @param itemGroupId filter by item group id
   * @param itemGroupType filter by item group id
   * @param userId filter by user id
   * @param weekNumber filter by week number
   * @param year filter by year
   * @param firstResult Offset of first result. Defaults to 0
   * @param maxResults Max results. Defaults to 5
  */
  public listWeekDeliveryPredictions(itemGroupId?: string, itemGroupType?: ItemGroupType, userId?: string, weekNumber?: number, year?: number, firstResult?: number, maxResults?: number, ):Promise<Array<WeekDeliveryPrediction>> {
    const uri = new URI(`${this.basePath}/weekDeliveryPredictions`);
    if (itemGroupId !== undefined && itemGroupId !== null) {
        uri.addQuery('itemGroupId', <any>itemGroupId);
    }
    if (itemGroupType !== undefined && itemGroupType !== null) {
        uri.addQuery('itemGroupType', <any>itemGroupType);
    }
    if (userId !== undefined && userId !== null) {
        uri.addQuery('userId', <any>userId);
    }
    if (weekNumber !== undefined && weekNumber !== null) {
        uri.addQuery('weekNumber', <any>weekNumber);
    }
    if (year !== undefined && year !== null) {
        uri.addQuery('year', <any>year);
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
   * Updates weekDeliveryPrediction
   * @summary Update weekDeliveryPrediction
   * @param body Payload
   * @param weekDeliveryPredictionId weekDeliveryPrediction id id
  */
  public updateWeekDeliveryPrediction(body: WeekDeliveryPrediction, weekDeliveryPredictionId: string, ):Promise<WeekDeliveryPrediction> {
    const uri = new URI(`${this.basePath}/weekDeliveryPredictions/${encodeURIComponent(String(weekDeliveryPredictionId))}`);
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