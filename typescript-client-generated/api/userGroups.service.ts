import { BadRequest } from '../model/badRequest';
import { Forbidden } from '../model/forbidden';
import { InternalServerError } from '../model/internalServerError';
import { UserGroup } from '../model/userGroup';
import * as URI from "urijs";
import { ApiUtils } from "./api";

export class UserGroupsService {

  private token: string;
  private basePath: string;

  constructor(basePath: string, token: string) {
    this.token = token;
    this.basePath = basePath;
  }


  /**
   * Lists user groups
   * @summary Lists user groups
  */
  public listUserGroups():Promise<Array<UserGroup>> {
    const uri = new URI(`${this.basePath}/userGroups`);
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