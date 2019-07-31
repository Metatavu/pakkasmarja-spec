import { DeliveryQuality } from '../model/deliveryQuality';
import { ItemGroupCategory } from '../model/itemGroupCategory';
export declare class DeliveryQualitiesService {
    private token;
    private basePath;
    constructor(basePath: string, token: string);
    /**
     * Creates delivery quality
     * @summary Create delivery quality
     * @param body Payload
    */
    createDeliveryQuality(body: DeliveryQuality): Promise<DeliveryQuality>;
    /**
     * Finds delivery quality
     * @summary Find delivery quality
     * @param deliveryQualityId delivery quality id
    */
    findDeliveryQuality(deliveryQualityId: string): Promise<DeliveryQuality>;
    /**
     * Lists delivery qualities
     * @summary Lists delivery qualities
     * @param itemGroupCategory filter by item group category
     * @param productId filter by product Id
    */
    listDeliveryQualities(itemGroupCategory?: ItemGroupCategory, productId?: string): Promise<Array<DeliveryQuality>>;
    /**
     * Updates delivery quality
     * @summary Update delivery quality
     * @param body Payload
     * @param deliveryQualityId delivery quality id
    */
    updateDeliveryQuality(body: DeliveryQuality, deliveryQualityId: string): Promise<DeliveryQuality>;
}
