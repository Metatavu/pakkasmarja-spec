import { BadRequest } from '../model/badRequest';
import { Forbidden } from '../model/forbidden';
import { InternalServerError } from '../model/internalServerError';
import { Operation } from '../model/operation';
import * as URI from "urijs";
import Api from "./api";

export class OperationsService {

  private token: string;
  private basePath: string;

  constructor(basePath: string, token: string) {
    this.token = token;
    this.basePath = basePath;
  }


  /**
   * Creates new operation
   * @summary Creates new operation
   * @param body Payload
  */
  public createOperation(body: Operation, ):Promise<Operation> {
    const uri = new URI(`${this.basePath}/operations`);
    const options = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`
      },
      body: JSON.stringify(body)
    };

    return fetch(uri.toString(), options).then((response) => {
      return Api.handleRespons(response);
    });
  }

}