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
import { WeekDeliveryPredictionDays } from './weekDeliveryPredictionDays';
export interface WeekDeliveryPrediction {
    id?: string;
    itemGroupId: string;
    userId: string;
    amount: number;
    weekNumber: number;
    year: number;
    days: WeekDeliveryPredictionDays;
}
export interface WeekDeliveryPredictionOpt {
    id?: string;
    itemGroupId?: string;
    userId?: string;
    amount?: number;
    weekNumber?: number;
    year?: number;
    days?: WeekDeliveryPredictionDays;
}
