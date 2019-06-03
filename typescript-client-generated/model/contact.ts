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
import { Address } from './address';


export interface Contact { 
    id?: string;
    readonly displayName?: string;
    readonly avatarUrl?: string;
    sapId?: string;
    firstName?: string;
    lastName?: string;
    companyName?: string;
    phoneNumbers?: Array<string>;
    email?: string;
    addresses?: Array<Address>;
    BIC?: string;
    IBAN?: string;
    taxCode?: string;
    vatLiable?: Contact.VatLiableEnum;
    audit?: string;
}
export interface ContactOpt { 
    id?: string;
    readonly displayName?: string;
    readonly avatarUrl?: string;
    sapId?: string;
    firstName?: string;
    lastName?: string;
    companyName?: string;
    phoneNumbers?: Array<string>;
    email?: string;
    addresses?: Array<Address>;
    BIC?: string;
    IBAN?: string;
    taxCode?: string;
    vatLiable?: Contact.VatLiableEnum;
    audit?: string;
}
export namespace Contact {
    export type VatLiableEnum = 'true' | 'false' | 'EU';
    export const VatLiableEnum = {
        True: 'true' as VatLiableEnum,
        False: 'false' as VatLiableEnum,
        EU: 'EU' as VatLiableEnum
    };
}