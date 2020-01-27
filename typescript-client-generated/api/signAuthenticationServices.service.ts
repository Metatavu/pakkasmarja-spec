import { BadRequest } from '../model/badRequest';
import { Forbidden } from '../model/forbidden';
import { InternalServerError } from '../model/internalServerError';
import { SignAuthenticationService } from '../model/signAuthenticationService';
import * as URI from "urijs";
import { ApiUtils } from "./api";

const COLLECTION_FORMATS = {
  'csv': ',',
  'tsv': '   ',
  'ssv': ' ',
  'pipes': '|'
}

export class SignAuthenticationServicesService {

  private token: string;
  private basePath: string;

  constructor(basePath: string, token: string) {
    this.token = token;
    this.basePath = basePath;
  }


  /**
   * List available sign authentication services
   * @summary List sign authentication services
  */
  public listSignAuthenticationServices():Promise<Array<SignAuthenticationService>> {
    const uri = new URI(`${this.basePath}/signAuthenticationServices`);
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