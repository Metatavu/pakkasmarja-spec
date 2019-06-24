import { BadRequest } from '../model/badRequest';
import { Forbidden } from '../model/forbidden';
import { InternalServerError } from '../model/internalServerError';
import { ProductPrice } from '../model/productPrice';
import * as URI from "urijs";
import { ApiUtils } from "./api";

export class ProductPricesService {

  private token: string;
  private basePath: string;

  constructor(basePath: string, token: string) {
    this.token = token;
    this.basePath = basePath;
  }


  /**
   * Creates product price
   * @summary Create product price
   * @param body Payload
   * @param productId product id id
  */
  public createProductPrice(body: ProductPrice, productId: string, ):Promise<ProductPrice> {
    const uri = new URI(`${this.basePath}/products/${encodeURIComponent(String(productId))}/prices`);
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
   * Deletes product price
   * @summary Delete product price
   * @param productId delivery id id
   * @param productPriceId delivery id id
  */
  public deleteProductPrice(productId: string, productPriceId: string, ):Promise<any> {
    const uri = new URI(`${this.basePath}/products/${encodeURIComponent(String(productId))}/prices/${encodeURIComponent(String(productPriceId))}`);
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
   * Finds product price
   * @summary Find product price
   * @param productId product id
   * @param productPriceId product price id
  */
  public findProductPrice(productId: string, productPriceId: string, ):Promise<ProductPrice> {
    const uri = new URI(`${this.basePath}/products/${encodeURIComponent(String(productId))}/prices/${encodeURIComponent(String(productPriceId))}`);
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
   * Lists product prices
   * @summary List product prices
   * @param productId product id
   * @param sort sort
   * @param firstResult Offset of first result. Defaults to 0
   * @param maxResults Max results. Defaults to 5
  */
  public listProductPrices(productId: string, sort?: string, firstResult?: number, maxResults?: number, ):Promise<Array<ProductPrice>> {
    const uri = new URI(`${this.basePath}/products/${encodeURIComponent(String(productId))}/prices`);
    if (sort !== undefined && sort !== null) {
        uri.addQuery('sort', <any>sort);
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
   * Updates product price
   * @summary Update product price
   * @param body Payload
   * @param productId product id id
   * @param productPriceId product price id
  */
  public updateProductPrice(body: ProductPrice, productId: string, productPriceId: string, ):Promise<ProductPrice> {
    const uri = new URI(`${this.basePath}/products/${encodeURIComponent(String(productId))}/prices/${encodeURIComponent(String(productPriceId))}`);
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