import { BadRequest } from '../model/badRequest';
import { Forbidden } from '../model/forbidden';
import { InternalServerError } from '../model/internalServerError';
import { ItemGroup } from '../model/itemGroup';
import { ItemGroupDocumentTemplate } from '../model/itemGroupDocumentTemplate';
import { Price } from '../model/price';
import * as URI from "urijs";

export class ItemGroupsService {

  private token: string;
  private basePath: string;

  constructor(basePath: string, token: string) {
    this.token = token;
    this.basePath = basePath;
  }


  /**
   * Creates an item group price
   * @summary Creates item group price
   * @param body Payload
   * @param itemGroupId item group id
  */
  public createItemGroupPrice(body: Price, itemGroupId: string, ):Promise<Price> {
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
      return response.json();
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
      return response.json();
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
      return response.json();
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
      return response.json();
    });
  }


  /**
   * Finds a item group price
   * @summary Find item group price
   * @param itemGroupId item group id
   * @param priceId price id
  */
  public findItemGroupPrice(itemGroupId: string, priceId: string, ):Promise<Price> {
    const uri = new URI(`${this.basePath}/itemGroups/${encodeURIComponent(String(itemGroupId))}/prices/${encodeURIComponent(String(priceId))}`);
    const options = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`
      }
    };

    return fetch(uri.toString(), options).then((response) => {
      return response.json();
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
      return response.json();
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
  public listItemGroupPrices(itemGroupId: string, sortBy?: string, sortDir?: string, firstResult?: number, maxResults?: number, ):Promise<Array<Price>> {
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
      return response.json();
    });
  }


  /**
   * Lists item groups
   * @summary Lists item groups
  */
  public listItemGroups():Promise<Array<ItemGroup>> {
    const uri = new URI(`${this.basePath}/itemGroups`);
    const options = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`
      }
    };

    return fetch(uri.toString(), options).then((response) => {
      return response.json();
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
      return response.json();
    });
  }


  /**
   * Updates a item group price
   * @summary Update item group price
   * @param body Payload
   * @param itemGroupId item group id
   * @param priceId price id
  */
  public updateItemGroupPrice(body: Price, itemGroupId: string, priceId: string, ):Promise<Price> {
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
      return response.json();
    });
  }

}