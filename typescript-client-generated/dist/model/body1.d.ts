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
import { DeliveryLoan } from './deliveryLoan';
export interface Body1 {
    contactId: string;
    comment: string;
    loans: Array<DeliveryLoan>;
}
export interface Body1Opt {
    contactId?: string;
    comment?: string;
    loans?: Array<DeliveryLoan>;
}
