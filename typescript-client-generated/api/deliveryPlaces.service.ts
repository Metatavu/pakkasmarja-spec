import { BadRequest } from '../model/badRequest';
import { DeliveryPlace } from '../model/deliveryPlace';
import { Forbidden } from '../model/forbidden';
import { InternalServerError } from '../model/internalServerError';
import URI from "urijs";


export class DeliveryPlacesService {

  private token: string;
  private basePath: string;

  constructor(basePath: string, token: string) {
    this.token = token;
    this.basePath = basePath;
  }


  /**
   * Finds delivery place by id
   * @summary Find delivery place
   * @param id delivery place id
  */
  public findDeliveryPlace(id: string, ):Promise<DeliveryPlace> {
    const uri = new URI(`${this.basePath}/deliveryPlaces/${encodeURIComponent(String(id))}`);
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
   * Lists delivery places
   * @summary Lists delivery places
  */
  public listDeliveryPlaces():Promise<Array<DeliveryPlace>> {
    const uri = new URI(`${this.basePath}/deliveryPlaces`);
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

}