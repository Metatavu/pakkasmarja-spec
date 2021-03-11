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
import { OpeningHourInterval } from './openingHourInterval';
import { WeekdayType } from './weekdayType';
export interface OpeningHourWeekday {
    id?: string;
    dayType: WeekdayType;
    hours: Array<OpeningHourInterval>;
}
export interface OpeningHourWeekdayOpt {
    id?: string;
    dayType?: WeekdayType;
    hours?: Array<OpeningHourInterval>;
}
