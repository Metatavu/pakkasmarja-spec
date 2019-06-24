import { BadRequest } from '../model/badRequest';
import { Forbidden } from '../model/forbidden';
import { InternalServerError } from '../model/internalServerError';
import { Unread } from '../model/unread';
import * as URI from "urijs";
import { ApiUtils } from "./api";

export class UnreadsService {

  private token: string;
  private basePath: string;

  constructor(basePath: string, token: string) {
    this.token = token;
    this.basePath = basePath;
  }


  /**
   * Deletes unread
   * @summary Delete unread
   * @param unreadId unread id
  */
  public deleteUnread(unreadId: string, ):Promise<any> {
    const uri = new URI(`${this.basePath}/unreads/${encodeURIComponent(String(unreadId))}`);
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
   * Lists unreads
   * @summary Lists unreads
   * @param pathPrefix filter unreads by path prefix
   * @param userId filter unreads by userId
  */
  public listUnreads(pathPrefix?: string, userId?: string, ):Promise<Array<Unread>> {
    const uri = new URI(`${this.basePath}/unreads`);
    if (pathPrefix !== undefined && pathPrefix !== null) {
        uri.addQuery('pathPrefix', <any>pathPrefix);
    }
    if (userId !== undefined && userId !== null) {
        uri.addQuery('userId', <any>userId);
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