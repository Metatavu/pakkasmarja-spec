import { BadRequest } from '../model/badRequest';
import { Contract } from '../model/contract';
import { ContractDocumentSignRequest } from '../model/contractDocumentSignRequest';
import { ContractDocumentTemplate } from '../model/contractDocumentTemplate';
import { ContractPreviewData } from '../model/contractPreviewData';
import { ContractQuantities } from '../model/contractQuantities';
import { Forbidden } from '../model/forbidden';
import { InternalServerError } from '../model/internalServerError';
import { ItemGroupPrice } from '../model/itemGroupPrice';
import * as URI from "urijs";
import { ApiUtils } from "./api";

const COLLECTION_FORMATS = {
  'csv': ',',
  'tsv': '   ',
  'ssv': ' ',
  'pipes': '|'
}

export class ContractsService {

  private token: string;
  private basePath: string;

  constructor(basePath: string, token: string) {
    this.token = token;
    this.basePath = basePath;
  }


  /**
   * Create new contract
   * @summary Create contract
   * @param body Payload
  */
  public createContract(body: Contract, ):Promise<Contract> {
    const uri = new URI(`${this.basePath}/contracts`);
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
   * Requests contract document electronic signing
   * @summary Requests contract document electronic signing
   * @param body Payload
   * @param id contract id
   * @param type document type
   * @param ssn Social security number
   * @param authService Used auth service name
   * @param redirectUrl Redirect after succesfull signing
  */
  public createContractDocumentSignRequest(body: ContractDocumentSignRequest, id: string, type: string, ssn: string, authService: string, redirectUrl?: string, ):Promise<ContractDocumentSignRequest> {
    const uri = new URI(`${this.basePath}/contracts/${encodeURIComponent(String(id))}/documents/${encodeURIComponent(String(type))}/signRequests`);
    if (ssn !== undefined && ssn !== null) {
        uri.addQuery('ssn', <any>ssn);
    }
    if (authService !== undefined && authService !== null) {
        uri.addQuery('authService', <any>authService);
    }
    if (redirectUrl !== undefined && redirectUrl !== null) {
        uri.addQuery('redirectUrl', <any>redirectUrl);
    }
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
   * Create new contract document template
   * @summary Create contract document template
   * @param body Payload
   * @param contractId contract id
  */
  public createContractDocumentTemplate(body: ContractDocumentTemplate, contractId: string, ):Promise<ContractDocumentTemplate> {
    const uri = new URI(`${this.basePath}/contracts/${encodeURIComponent(String(contractId))}/documentTemplates`);
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
   * Creates contract previews via XLSX file
   * @summary create contract previews via XLSX file
   * @param file 
  */
  public createContractPreviews(file?: string, ):Promise<Array<ContractPreviewData>> {
    const uri = new URI(`${this.basePath}/contractPreviews`);
    const options = {
      method: "post",
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
   * Finds contract by id
   * @summary Find contract
   * @param id contract id
   * @param accept Expected response format. Accepted values application/json for JSON reponse (default) and application/vnd.openxmlformats-officedocument.spreadsheetml.sheet for Excel response
  */
  public findContract(id: string, accept?: string, ):Promise<Contract> {
    const uri = new URI(`${this.basePath}/contracts/${encodeURIComponent(String(id))}`);
    const options = {
      method: "get",
      headers: {
        "Accept" : accept,
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`
      }
    };

    return fetch(uri.toString(), options).then((response) => {
      return ApiUtils.handleResponse(response);
    });
  }


  /**
   * Finds a contract templates
   * @summary Find contract document template
   * @param contractId contract id
   * @param contractDocumentTemplateId contract id
  */
  public findContractDocumentTemplate(contractId: string, contractDocumentTemplateId: string, ):Promise<ContractDocumentTemplate> {
    const uri = new URI(`${this.basePath}/contracts/${encodeURIComponent(String(contractId))}/documentTemplates/${encodeURIComponent(String(contractDocumentTemplateId))}`);
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
   * Returns contract document by type
   * @summary Returns contract document
   * @param id contract id
   * @param type document type
   * @param format document format (HTML or PDF)
  */
  public getContractDocument(id: string, type: string, format: string, ):Promise<string> {
    const uri = new URI(`${this.basePath}/contracts/${encodeURIComponent(String(id))}/documents/${encodeURIComponent(String(type))}`);
    if (format !== undefined && format !== null) {
        uri.addQuery('format', <any>format);
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
   * Lists contract templates
   * @summary List contract document templates
   * @param contractId contract id
   * @param type Filter results by document template type
  */
  public listContractDocumentTemplates(contractId: string, type?: string, ):Promise<Array<ContractDocumentTemplate>> {
    const uri = new URI(`${this.basePath}/contracts/${encodeURIComponent(String(contractId))}/documentTemplates`);
    if (type !== undefined && type !== null) {
        uri.addQuery('type', <any>type);
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
   * Lists contract prices
   * @summary List contract prices
   * @param contractId contract id
   * @param sortBy sort by (YEAR)
   * @param sortDir sort direction (ASC, DESC)
   * @param firstResult Offset of first result. Defaults to 0
   * @param maxResults Max results. Defaults to 5
  */
  public listContractPrices(contractId: string, sortBy?: string, sortDir?: string, firstResult?: number, maxResults?: number, ):Promise<Array<ItemGroupPrice>> {
    const uri = new URI(`${this.basePath}/contracts/${encodeURIComponent(String(contractId))}/prices`);
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
      return ApiUtils.handleResponse(response);
    });
  }


  /**
   * Lists contracts quantities
   * @summary Lists contracts quantities
   * @param itemGroupId Filters results by item group id.
   * @param contactId Filters results by contact id.
  */
  public listContractQuantities(itemGroupId: string, contactId: string, ):Promise<Array<ContractQuantities>> {
    const uri = new URI(`${this.basePath}/contractQuantities`);
    if (itemGroupId !== undefined && itemGroupId !== null) {
        uri.addQuery('itemGroupId', <any>itemGroupId);
    }
    if (contactId !== undefined && contactId !== null) {
        uri.addQuery('contactId', <any>contactId);
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
   * Lists contracts
   * @summary Lists contracts
   * @param accept Expected response format. Accepted values application/json for JSON reponse (default) and application/vnd.openxmlformats-officedocument.spreadsheetml.sheet for Excel response
   * @param listAll Returns all contracts instead of just user&#39;s own contracts. User must have permission to do this.
   * @param itemGroupCategory Filters results by item group category.
   * @param itemGroupId Filters results by item group id.
   * @param year Filters results by year.
   * @param status Filters results by status
   * @param firstResult Offset of first result. Defaults to 0
   * @param maxResults Max results. Defaults to 5
  */
  public listContracts(accept?: string, listAll?: boolean, itemGroupCategory?: string, itemGroupId?: string, year?: number, status?: string, firstResult?: number, maxResults?: number, ):Promise<Array<Contract>> {
    const uri = new URI(`${this.basePath}/contracts`);
    if (listAll !== undefined && listAll !== null) {
        uri.addQuery('listAll', <any>listAll);
    }
    if (itemGroupCategory !== undefined && itemGroupCategory !== null) {
        uri.addQuery('itemGroupCategory', <any>itemGroupCategory);
    }
    if (itemGroupId !== undefined && itemGroupId !== null) {
        uri.addQuery('itemGroupId', <any>itemGroupId);
    }
    if (year !== undefined && year !== null) {
        uri.addQuery('year', <any>year);
    }
    if (status !== undefined && status !== null) {
        uri.addQuery('status', <any>status);
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
        "Accept" : accept,
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`
      }
    };

    return fetch(uri.toString(), options).then((response) => {
      return ApiUtils.handleResponse(response);
    });
  }


  /**
   * Updates single contract
   * @summary Update contract
   * @param body Payload
   * @param id contract id
  */
  public updateContract(body: Contract, id: string, ):Promise<Contract> {
    const uri = new URI(`${this.basePath}/contracts/${encodeURIComponent(String(id))}`);
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


  /**
   * Updates a contract templates
   * @summary Updates contract document template
   * @param body Payload
   * @param contractId contract id
   * @param contractDocumentTemplateId contract id
  */
  public updateContractDocumentTemplate(body: ContractDocumentTemplate, contractId: string, contractDocumentTemplateId: string, ):Promise<ContractDocumentTemplate> {
    const uri = new URI(`${this.basePath}/contracts/${encodeURIComponent(String(contractId))}/documentTemplates/${encodeURIComponent(String(contractDocumentTemplateId))}`);
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