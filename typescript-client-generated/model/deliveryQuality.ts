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
import { ItemGroupCategory } from './itemGroupCategory';


export interface DeliveryQuality { 
    id?: string;
    itemGroupCategory: ItemGroupCategory;
    name: string;
    priceBonus: number;
    color: string;
    displayName: string;
    deliveryQualityProductIds: Array<string>;
}
export interface DeliveryQualityOpt { 
    id?: string;
    itemGroupCategory?: ItemGroupCategory;
    name?: string;
    priceBonus?: number;
    color?: string;
    displayName?: string;
    deliveryQualityProductIds?: Array<string>;
}
