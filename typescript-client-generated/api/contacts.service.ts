import { BadRequest } from '../model/badRequest';
import { Contact } from '../model/contact';
import { Credentials } from '../model/credentials';
import { Forbidden } from '../model/forbidden';
import { InternalServerError } from '../model/internalServerError';
import { URI } from "urijs";


export class ContactsService {

  private token: string;
  private basePath: string;

  constructor(basePath: string, token: string) {
    this.token = token;
    this.basePath = basePath;
  }


  /**
   * Finds contact by id
   * @summary Find contact
   * @param id contact id
  */
  public findContact(id: string, ):Promise<Contact> {
    const uri = new URI(`${this.basePath}/contacts/${encodeURIComponent(String(id))}`);
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
   * Lists contacts
   * @summary Lists contacts
   * @param search filter results by free text search
  */
  public listContacts(search?: string, ):Promise<Array<Contact>> {
    const uri = new URI(`${this.basePath}/contacts`);
    if (search !== undefined && search !== null) {
        uri.addQuery('search', <any>search);
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
   * Updates single contact
   * @summary Update contact
   * @param body Payload
   * @param id contact id
  */
  public updateContact(body: Contact, id: string, ):Promise<Contact> {
    const uri = new URI(`${this.basePath}/contacts/${encodeURIComponent(String(id))}`);
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
   * Updates single contact credentials
   * @summary Update contact credentials
   * @param body Payload
   * @param id contact id
  */
  public updateContactCredentials(body: Credentials, id: string, ):Promise<any> {
    const uri = new URI(`${this.basePath}/contacts/${encodeURIComponent(String(id))}/credentials`);
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