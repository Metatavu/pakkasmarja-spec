import { BadRequest } from '../model/badRequest';
import { Body1 } from '../model/body1';
import { DeliveryLoan } from '../model/deliveryLoan';
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

export class DeliveryLoansService {

  private token: string;
  private basePath: string;

  constructor(basePath: string, token: string) {
    this.token = token;
    this.basePath = basePath;
  }


  /**
   * Creates delivery loan
   * @summary Create delivery loan
   * @param body Payload
  */
  public createDeliveryLoan(body: Body1, ):Promise<Array<DeliveryLoan>> {
    const uri = new URI(`${this.basePath}/deliveryLoans`);
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

}