import { BadRequest } from '../model/badRequest';
import { Forbidden } from '../model/forbidden';
import { InternalServerError } from '../model/internalServerError';
import { ItemGroup } from '../model/itemGroup';
import { ItemGroupDocumentTemplate } from '../model/itemGroupDocumentTemplate';
import { ItemGroupPrice } from '../model/itemGroupPrice';
import * as URI from "urijs";
import { ApiUtils } from "./api";

export class ItemGroupsService {

  private token: string;
  private basePath: string;

  constructor(basePath: string, token: string) {
    this.token = token;
    this.basePath = basePath;
  }


  /**
   * Creates item group
   * @summary Creates item group
   * @param body Payload
  */
  public createItemGroup(body: ItemGroup, ):Promise<ItemGroup> {
    const uri = new URI(`${this.basePath}/itemGroups`);
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
   * Creates an item group price
   * @summary Creates item group price
   * @param body Payload
   * @param itemGroupId item group id
  */
  public createItemGroupPrice(body: ItemGroupPrice, itemGroupId: string, ):Promise<ItemGroupPrice> {
    const uri = new URI(`${this.basePath}/itemGroups/${encodeURIComponent(String(itemGroupId))}/prices`);
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
   * Deletes an item group price
   * @summary Delete item group price
   * @param itemGroupId item group id
   * @param priceId price id
  */
  public deleteItemGroupPrice(itemGroupId: string, priceId: string, ):Promise<any> {
    const uri = new URI(`${this.basePath}/itemGroups/${encodeURIComponent(String(itemGroupId))}/prices/${encodeURIComponent(String(priceId))}`);
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
   * Finds item group by id
   * @summary Find item group
   * @param id item group id
  */
  public findItemGroup(id: string, ):Promise<ItemGroup> {
    const uri = new URI(`${this.basePath}/itemGroups/${encodeURIComponent(String(id))}`);
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
   * Finds item group template
   * @summary Find item group document template
   * @param itemGroupId item group id
   * @param id template id
  */
  public findItemGroupDocumentTemplate(itemGroupId: string, id: string, ):Promise<ItemGroupDocumentTemplate> {
    const uri = new URI(`${this.basePath}/itemGroups/${encodeURIComponent(String(itemGroupId))}/documentTemplates/${encodeURIComponent(String(id))}`);
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
   * Finds a item group price
   * @summary Find item group price
   * @param itemGroupId item group id
   * @param priceId price id
  */
  public findItemGroupPrice(itemGroupId: string, priceId: string, ):Promise<ItemGroupPrice> {
    const uri = new URI(`${this.basePath}/itemGroups/${encodeURIComponent(String(itemGroupId))}/prices/${encodeURIComponent(String(priceId))}`);
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
   * Lists item group templates
   * @summary List item group document templates
   * @param itemGroupId item group id
  */
  public listItemGroupDocumentTemplates(itemGroupId: string, ):Promise<Array<ItemGroupDocumentTemplate>> {
    const uri = new URI(`${this.basePath}/itemGroups/${encodeURIComponent(String(itemGroupId))}/documentTemplates`);
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
   * Lists item group prices
   * @summary List item group prices
   * @param itemGroupId item group id
   * @param sortBy sort by (YEAR)
   * @param sortDir sort direction (ASC, DESC)
   * @param firstResult Offset of first result. Defaults to 0
   * @param maxResults Max results. Defaults to 5
  */
  public listItemGroupPrices(itemGroupId: string, sortBy?: string, sortDir?: string, firstResult?: number, maxResults?: number, ):Promise<Array<ItemGroupPrice>> {
    const uri = new URI(`${this.basePath}/itemGroups/${encodeURIComponent(String(itemGroupId))}/prices`);
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


  /**
   * Lists item groups
   * @summary Lists item groups
   * @param contractUserId contract user id
  */
  public listItemGroups(contractUserId: string, ):Promise<Array<ItemGroup>> {
    const uri = new URI(`${this.basePath}/itemGroups`);
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
   * Updated item group document template
   * @summary Updates item group document template
   * @param body Payload
   * @param itemGroupId item group id
   * @param id template id
  */
  public updateItemGroupDocumentTemplate(body: ItemGroupDocumentTemplate, itemGroupId: string, id: string, ):Promise<ItemGroupDocumentTemplate> {
    const uri = new URI(`${this.basePath}/itemGroups/${encodeURIComponent(String(itemGroupId))}/documentTemplates/${encodeURIComponent(String(id))}`);
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
   * Updates a item group price
   * @summary Update item group price
   * @param body Payload
   * @param itemGroupId item group id
   * @param priceId price id
  */
  public updateItemGroupPrice(body: ItemGroupPrice, itemGroupId: string, priceId: string, ):Promise<ItemGroupPrice> {
    const uri = new URI(`${this.basePath}/itemGroups/${encodeURIComponent(String(itemGroupId))}/prices/${encodeURIComponent(String(priceId))}`);
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