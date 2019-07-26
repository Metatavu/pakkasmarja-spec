import { BadRequest } from '../model/badRequest';
import { DeliveryQuality } from '../model/deliveryQuality';
import { Forbidden } from '../model/forbidden';
import { InternalServerError } from '../model/internalServerError';
import { ItemGroupCategory } from '../model/itemGroupCategory';
import * as URI from "urijs";
import { ApiUtils } from "./api";

export class DeliveryQualitiesService {

  private token: string;
  private basePath: string;

  constructor(basePath: string, token: string) {
    this.token = token;
    this.basePath = basePath;
  }


  /**
   * Creates delivery quality
   * @summary Create delivery quality
   * @param body Payload
  */
  public createDeliveryQuality(body: DeliveryQuality, ):Promise<DeliveryQuality> {
    const uri = new URI(`${this.basePath}/deliveryQualities`);
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
   * Finds delivery quality
   * @summary Find delivery quality
   * @param deliveryQualityId delivery quality id
  */
  public findDeliveryQuality(deliveryQualityId: string, ):Promise<DeliveryQuality> {
    const uri = new URI(`${this.basePath}/deliveryQualities/${encodeURIComponent(String(deliveryQualityId))}`);
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
   * Lists delivery qualities
   * @summary Lists delivery qualities
   * @param itemGroupCategory filter by item group category
   * @param productId filter by product Id
  */
  public listDeliveryQualities(itemGroupCategory?: ItemGroupCategory, productId?: string, ):Promise<Array<DeliveryQuality>> {
    const uri = new URI(`${this.basePath}/deliveryQualities`);
    if (itemGroupCategory !== undefined && itemGroupCategory !== null) {
        uri.addQuery('itemGroupCategory', <any>itemGroupCategory);
    }
    if (productId !== undefined && productId !== null) {
        uri.addQuery('productId', <any>productId);
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
   * Updates delivery quality
   * @summary Update delivery quality
   * @param body Payload
   * @param deliveryQualityId delivery quality id
  */
  public updateDeliveryQuality(body: DeliveryQuality, deliveryQualityId: string, ):Promise<DeliveryQuality> {
    const uri = new URI(`${this.basePath}/deliveryQualities/${encodeURIComponent(String(deliveryQualityId))}`);
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