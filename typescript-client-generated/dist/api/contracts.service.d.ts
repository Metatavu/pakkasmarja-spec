import { Contract } from '../model/contract';
import { ContractDocumentSignRequest } from '../model/contractDocumentSignRequest';
import { ContractDocumentTemplate } from '../model/contractDocumentTemplate';
import { ItemGroupPrice } from '../model/itemGroupPrice';
export declare class ContractsService {
    private token;
    private basePath;
    constructor(basePath: string, token: string);
    /**
     * Create new contract
     * @summary Create contract
     * @param body Payload
    */
    createContract(body: Contract): Promise<Contract>;
    /**
     * Requests contract document electronic signing
     * @summary Requests contract document electronic signing
     * @param body Payload
     * @param id contract id
     * @param type document type
     * @param ssn Social security number
     * @param authService Used auth service name
    */
    createContractDocumentSignRequest(body: ContractDocumentSignRequest, id: string, type: string, ssn: string, authService: string): Promise<ContractDocumentSignRequest>;
    /**
     * Create new contract document template
     * @summary Create contract document template
     * @param body Payload
     * @param contractId contract id
    */
    createContractDocumentTemplate(body: ContractDocumentTemplate, contractId: string): Promise<ContractDocumentTemplate>;
    /**
     * Finds contract by id
     * @summary Find contract
     * @param id contract id
     * @param accept Expected response format. Accepted values application/json for JSON reponse (default) and application/vnd.openxmlformats-officedocument.spreadsheetml.sheet for Excel response
    */
    findContract(id: string, accept?: string): Promise<Contract>;
    /**
     * Finds a contract templates
     * @summary Find contract document template
     * @param contractId contract id
     * @param contractDocumentTemplateId contract id
    */
    findContractDocumentTemplate(contractId: string, contractDocumentTemplateId: string): Promise<ContractDocumentTemplate>;
    /**
     * Returns contract document by type
     * @summary Returns contract document
     * @param id contract id
     * @param type document type
     * @param format document format (HTML or PDF)
    */
    getContractDocument(id: string, type: string, format: string): Promise<string>;
    /**
     * Lists contract templates
     * @summary List contract document templates
     * @param contractId contract id
     * @param type Filter results by document template type
    */
    listContractDocumentTemplates(contractId: string, type?: string): Promise<Array<ContractDocumentTemplate>>;
    /**
     * Lists contract prices
     * @summary List contract prices
     * @param contractId contract id
     * @param sortBy sort by (YEAR)
     * @param sortDir sort direction (ASC, DESC)
     * @param firstResult Offset of first result. Defaults to 0
     * @param maxResults Max results. Defaults to 5
    */
    listContractPrices(contractId: string, sortBy?: string, sortDir?: string, firstResult?: number, maxResults?: number): Promise<Array<ItemGroupPrice>>;
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
    listContracts(accept?: string, listAll?: boolean, itemGroupCategory?: string, itemGroupId?: string, year?: number, status?: string, firstResult?: number, maxResults?: number): Promise<Array<Contract>>;
    /**
     * Updates single contract
     * @summary Update contract
     * @param body Payload
     * @param id contract id
    */
    updateContract(body: Contract, id: string): Promise<Contract>;
    /**
     * Updates a contract templates
     * @summary Updates contract document template
     * @param body Payload
     * @param contractId contract id
     * @param contractDocumentTemplateId contract id
    */
    updateContractDocumentTemplate(body: ContractDocumentTemplate, contractId: string, contractDocumentTemplateId: string): Promise<ContractDocumentTemplate>;
}
