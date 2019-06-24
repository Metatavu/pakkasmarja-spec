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
   * Lists delivery qualities
   * @summary Lists delivery qualities
   * @param itemGroupCategory filter by item group category
  */
  public listDeliveryQualities(itemGroupCategory?: ItemGroupCategory, ):Promise<Array<DeliveryQuality>> {
    const uri = new URI(`${this.basePath}/deliveryQualities`);
    if (itemGroupCategory !== undefined && itemGroupCategory !== null) {
        uri.addQuery('itemGroupCategory', <any>itemGroupCategory);
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