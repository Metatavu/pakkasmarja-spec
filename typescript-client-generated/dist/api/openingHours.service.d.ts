import { OpeningHourException } from '../model/openingHourException';
import { OpeningHourPeriod } from '../model/openingHourPeriod';
export declare class OpeningHoursService {
    private token;
    private basePath;
    constructor(basePath: string, token: string);
    /**
     * Creates opening hour exception
     * @summary Create opening hour exception
     * @param body Payload
     * @param deliveryPlaceId delivery place id
    */
    createOpeningHourException(body: OpeningHourException, deliveryPlaceId: string): Promise<OpeningHourException>;
    /**
     * Creates opening hour period
     * @summary Create opening hour period
     * @param body Payload
     * @param deliveryPlaceId delivery place id
    */
    createOpeningHourPeriod(body: OpeningHourPeriod, deliveryPlaceId: string): Promise<OpeningHourPeriod>;
    /**
     * Deletes opening hour exception
     * @summary Delete opening hour exception
     * @param deliveryPlaceId delivery place id
     * @param exceptionId exception id
    */
    deleteOpeningHourException(deliveryPlaceId: string, exceptionId: string): Promise<any>;
    /**
     * Deletes opening hour period
     * @summary Delete opening hour period
     * @param deliveryPlaceId delivery place id
     * @param periodId period id
    */
    deleteOpeningHourPeriod(deliveryPlaceId: string, periodId: string): Promise<any>;
    /**
     * Finds opening hour period
     * @summary Find opening hour period
     * @param deliveryPlaceId delivery place id
     * @param periodId period id
    */
    findOpeningHourPeriod(deliveryPlaceId: string, periodId: string): Promise<OpeningHourPeriod>;
    /**
     * Lists opening hour exceptions
     * @summary List opening hour exceptions
     * @param deliveryPlaceId delivery place id
    */
    listOpeningHourExceptions(deliveryPlaceId: string): Promise<Array<OpeningHourException>>;
    /**
     * Lists opening hour periods
     * @summary List opening hour periods
     * @param deliveryPlaceId delivery place id
     * @param rangeStart list date range start
     * @param rangeEnd list date range end
     * @param firstResult Offset of first result. Defaults to 0
     * @param maxResults Max results. Defaults to unlimited
    */
    listOpeningHourPeriods(deliveryPlaceId: string, rangeStart?: Date, rangeEnd?: Date, firstResult?: number, maxResults?: number): Promise<Array<OpeningHourPeriod>>;
    /**
     * Updates opening hour exception
     * @summary Update opening hour exception
     * @param body Payload
     * @param deliveryPlaceId delivery place id
     * @param exceptionId exception id
    */
    updateOpeningHourException(body: OpeningHourException, deliveryPlaceId: string, exceptionId: string): Promise<OpeningHourException>;
    /**
     * Updates opening hour period
     * @summary Update opening hour period
     * @param body Payload
     * @param deliveryPlaceId delivery place id
     * @param periodId period id
    */
    updateOpeningHourPeriod(body: OpeningHourPeriod, deliveryPlaceId: string, periodId: string): Promise<OpeningHourPeriod>;
}
