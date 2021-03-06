/**
 * Pakkasmarja REST API
 * REST API for Pakkasmarja
 *
 * OpenAPI spec version: 3.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Contract } from './contract';
import { ImportedContract } from './importedContract';
import { ImportedContractError } from './importedContractError';
export interface ContractPreviewData {
    contract: Contract;
    importedContract?: ImportedContract;
    errors: Array<ImportedContractError>;
}
export interface ContractPreviewDataOpt {
    contract?: Contract;
    importedContract?: ImportedContract;
    errors?: Array<ImportedContractError>;
}
