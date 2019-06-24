import { ItemGroupCategory } from '../model/itemGroupCategory';
import { WeekDeliveryPrediction } from '../model/weekDeliveryPrediction';
export declare class WeekDeliveryPredictionsService {
    private token;
    private basePath;
    constructor(basePath: string, token: string);
    /**
     * Creates week delivery prediction
     * @summary Create week delivery prediction
     * @param body Payload
    */
    createWeekDeliveryPrediction(body: WeekDeliveryPrediction): Promise<WeekDeliveryPrediction>;
    /**
     * Deletes weekDeliveryPrediction
     * @summary Delete weekDeliveryPrediction
     * @param weekDeliveryPredictionId weekDeliveryPrediction id id
    */
    deleteWeekDeliveryPrediction(weekDeliveryPredictionId: string): Promise<any>;
    /**
     * Finds weekDeliveryPrediction by id
     * @summary Find weekDeliveryPrediction
     * @param weekDeliveryPredictionId weekDeliveryPrediction id id
    */
    findWeekDeliveryPrediction(weekDeliveryPredictionId: string): Promise<WeekDeliveryPrediction>;
    /**
     * Lists weekDeliveryPredictions
     * @summary Lists weekDeliveryPredictions
     * @param itemGroupId filter by item group id
     * @param itemGroupCategory filter by item group id
     * @param userId filter by user id
     * @param weekNumber filter by week number
     * @param year filter by year
     * @param firstResult Offset of first result. Defaults to 0
     * @param maxResults Max results. Defaults to 5
    */
    listWeekDeliveryPredictions(itemGroupId?: string, itemGroupCategory?: ItemGroupCategory, userId?: string, weekNumber?: number, year?: number, firstResult?: number, maxResults?: number): Promise<Array<WeekDeliveryPrediction>>;
    /**
     * Updates weekDeliveryPrediction
     * @summary Update weekDeliveryPrediction
     * @param body Payload
     * @param weekDeliveryPredictionId weekDeliveryPrediction id id
    */
    updateWeekDeliveryPrediction(body: WeekDeliveryPrediction, weekDeliveryPredictionId: string): Promise<WeekDeliveryPrediction>;
}
