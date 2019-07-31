import { BadRequest } from '../model/badRequest';
import { Delivery } from '../model/delivery';
import { DeliveryNote } from '../model/deliveryNote';
import { DeliveryStatus } from '../model/deliveryStatus';
import { Forbidden } from '../model/forbidden';
import { InternalServerError } from '../model/internalServerError';
import { ItemGroupCategory } from '../model/itemGroupCategory';
import * as URI from "urijs";
import { ApiUtils } from "./api";

export class DeliveriesService {

  private token: string;
  private basePath: string;

  constructor(basePath: string, token: string) {
    this.token = token;
    this.basePath = basePath;
  }


  /**
   * Creates delivery
   * @summary Create delivery
   * @param body Payload
  */
  public createDelivery(body: Delivery, ):Promise<Delivery> {
    const uri = new URI(`${this.basePath}/deliveries`);
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
   * Creates delivery note
   * @summary Create delivery note
   * @param body Payload
   * @param deliveryId delivery id id
  */
  public createDeliveryNote(body: DeliveryNote, deliveryId: string, ):Promise<DeliveryNote> {
    const uri = new URI(`${this.basePath}/deliveries/${encodeURIComponent(String(deliveryId))}/notes`);
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
   * Deletes delivery
   * @summary Delete delivery
   * @param deliveryId delivery id id
  */
  public deleteDelivery(deliveryId: string, ):Promise<any> {
    const uri = new URI(`${this.basePath}/deliveries/${encodeURIComponent(String(deliveryId))}`);
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
   * Deletes delivery note
   * @summary Delete delivery note
   * @param deliveryId delivery id id
   * @param deliveryNoteId delivery id id
  */
  public deleteDeliveryNote(deliveryId: string, deliveryNoteId: string, ):Promise<any> {
    const uri = new URI(`${this.basePath}/deliveries/${encodeURIComponent(String(deliveryId))}/notes/${encodeURIComponent(String(deliveryNoteId))}`);
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
   * Finds delivery by id
   * @summary Find delivery
   * @param deliveryId delivery id id
  */
  public findDelivery(deliveryId: string, ):Promise<Delivery> {
    const uri = new URI(`${this.basePath}/deliveries/${encodeURIComponent(String(deliveryId))}`);
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
   * Finds delivery note by id
   * @summary Find delivery note
   * @param deliveryId delivery id id
   * @param deliveryNoteId delivery id id
  */
  public findDeliveryNote(deliveryId: string, deliveryNoteId: string, ):Promise<DeliveryNote> {
    const uri = new URI(`${this.basePath}/deliveries/${encodeURIComponent(String(deliveryId))}/notes/${encodeURIComponent(String(deliveryNoteId))}`);
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
   * Returns deliveries document by type
   * @summary Returns deliveries document
   * @param type document format (HTML or PDF)
   * @param startDate deliveries from
   * @param endDate deliveries to
   * @param productIds filter by product Ids
  */
  public getDeliveriesDocument(type: string, startDate: Date, endDate: Date, productIds?: Array<string>, ):Promise<string> {
    const uri = new URI(`${this.basePath}/deliveries/documents/${encodeURIComponent(String(type))}`);
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


  /**
   * Lists deliveries
   * @summary Lists deliveries
   * @param userId filter by user id
   * @param status filter by status
   * @param itemGroupCategory filter by item group id
   * @param itemGroupId filter by item group id
   * @param productId filter by item group id
   * @param deliveryPlaceId filter by delivery place id
   * @param timeBefore filter by time before specified time
   * @param timeAfter filter by time after specified time
   * @param firstResult Offset of first result. Defaults to 0
   * @param maxResults Max results. Defaults to 5
  */
  public listDeliveries(userId?: string, status?: DeliveryStatus, itemGroupCategory?: ItemGroupCategory, itemGroupId?: string, productId?: string, deliveryPlaceId?: string, timeBefore?: Date, timeAfter?: Date, firstResult?: number, maxResults?: number, ):Promise<Array<Delivery>> {
    const uri = new URI(`${this.basePath}/deliveries`);
    if (userId !== undefined && userId !== null) {
        uri.addQuery('userId', <any>userId);
    }
    if (status !== undefined && status !== null) {
        uri.addQuery('status', <any>status);
    }
    if (itemGroupCategory !== undefined && itemGroupCategory !== null) {
        uri.addQuery('itemGroupCategory', <any>itemGroupCategory);
    }
    if (itemGroupId !== undefined && itemGroupId !== null) {
        uri.addQuery('itemGroupId', <any>itemGroupId);
    }
    if (productId !== undefined && productId !== null) {
        uri.addQuery('productId', <any>productId);
    }
    if (deliveryPlaceId !== undefined && deliveryPlaceId !== null) {
        uri.addQuery('deliveryPlaceId', <any>deliveryPlaceId);
    }
    if (timeBefore !== undefined && timeBefore !== null) {
        uri.addQuery('timeBefore', <any>timeBefore.toISOString());
    }
    if (timeAfter !== undefined && timeAfter !== null) {
        uri.addQuery('timeAfter', <any>timeAfter.toISOString());
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
   * Lists deliveries notes
   * @summary Lists deliveries notes
   * @param deliveryId delivery id id
  */
  public listDeliveryNotes(deliveryId: string, ):Promise<Array<DeliveryNote>> {
    const uri = new URI(`${this.basePath}/deliveries/${encodeURIComponent(String(deliveryId))}/notes`);
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
   * Updates delivery
   * @summary Update delivery
   * @param body Payload
   * @param deliveryId delivery id id
  */
  public updateDelivery(body: Delivery, deliveryId: string, ):Promise<Delivery> {
    const uri = new URI(`${this.basePath}/deliveries/${encodeURIComponent(String(deliveryId))}`);
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
   * Updates delivery note
   * @summary Update delivery note
   * @param body Payload
   * @param deliveryId delivery id id
   * @param deliveryNoteId delivery id id
  */
  public updateDeliveryNote(body: DeliveryNote, deliveryId: string, deliveryNoteId: string, ):Promise<DeliveryNote> {
    const uri = new URI(`${this.basePath}/deliveries/${encodeURIComponent(String(deliveryId))}/notes/${encodeURIComponent(String(deliveryNoteId))}`);
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