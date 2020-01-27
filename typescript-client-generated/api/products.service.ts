import { BadRequest } from '../model/badRequest';
import { Forbidden } from '../model/forbidden';
import { InternalServerError } from '../model/internalServerError';
import { ItemGroupCategory } from '../model/itemGroupCategory';
import { Product } from '../model/product';
import * as URI from "urijs";
import { ApiUtils } from "./api";

const COLLECTION_FORMATS = {
  'csv': ',',
  'tsv': '   ',
  'ssv': ' ',
  'pipes': '|'
}

export class ProductsService {

  private token: string;
  private basePath: string;

  constructor(basePath: string, token: string) {
    this.token = token;
    this.basePath = basePath;
  }


  /**
   * Creates product
   * @summary Create product
   * @param body Payload
  */
  public createProduct(body: Product, ):Promise<Product> {
    const uri = new URI(`${this.basePath}/products`);
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
   * Deletes product
   * @summary Delete product
   * @param productId product id id
  */
  public deleteProduct(productId: string, ):Promise<any> {
    const uri = new URI(`${this.basePath}/products/${encodeURIComponent(String(productId))}`);
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
   * Finds product by id
   * @summary Find product
   * @param productId product id id
  */
  public findProduct(productId: string, ):Promise<Product> {
    const uri = new URI(`${this.basePath}/products/${encodeURIComponent(String(productId))}`);
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
   * Lists products
   * @summary Lists products
   * @param itemGroupId filter by item group id
   * @param itemGroupCategory filter by item group id
   * @param contractUserId output only products what specified user has contract in
   * @param firstResult Offset of first result. Defaults to 0
   * @param maxResults Max results. Defaults to 5
  */
  public listProducts(itemGroupId?: string, itemGroupCategory?: ItemGroupCategory, contractUserId?: string, firstResult?: number, maxResults?: number, ):Promise<Array<Product>> {
    const uri = new URI(`${this.basePath}/products`);
    if (itemGroupId !== undefined && itemGroupId !== null) {
        uri.addQuery('itemGroupId', <any>itemGroupId);
    }
    if (itemGroupCategory !== undefined && itemGroupCategory !== null) {
        uri.addQuery('itemGroupCategory', <any>itemGroupCategory);
    }
    if (contractUserId !== undefined && contractUserId !== null) {
        uri.addQuery('contractUserId', <any>contractUserId);
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
   * Updates product
   * @summary Update product
   * @param body Payload
   * @param productId product id id
  */
  public updateProduct(body: Product, productId: string, ):Promise<Product> {
    const uri = new URI(`${this.basePath}/products/${encodeURIComponent(String(productId))}`);
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