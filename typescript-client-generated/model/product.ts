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


export interface Product { 
    id?: string;
    itemGroupId: string;
    name: string;
    units: number;
    unitSize: number;
    unitName: string;
    sapItemCode: string;
    active: boolean;
}
export interface ProductOpt { 
    id?: string;
    itemGroupId?: string;
    name?: string;
    units?: number;
    unitSize?: number;
    unitName?: string;
    sapItemCode?: string;
    active?: boolean;
}
