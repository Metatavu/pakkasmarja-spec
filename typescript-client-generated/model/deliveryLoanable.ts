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
import { DeliveryLoanableType } from './deliveryLoanableType';


export interface DeliveryLoanable { 
    type?: DeliveryLoanableType;
    amount?: number;
    /**
     * Whether loanable is a loan or loan return
     */
    _return?: boolean;
}
export interface DeliveryLoanableOpt { 
    type?: DeliveryLoanableType;
    amount?: number;
    /**
     * Whether loanable is a loan or loan return
     */
    _return?: boolean;
}
