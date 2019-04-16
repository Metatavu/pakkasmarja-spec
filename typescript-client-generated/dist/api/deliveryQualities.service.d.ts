import { DeliveryQuality } from '../model/deliveryQuality';
import { ItemGroupCategory } from '../model/itemGroupCategory';
export declare class DeliveryQualitiesService {
    private token;
    private basePath;
    constructor(basePath: string, token: string);
    /**
     * Lists delivery qualities
     * @summary Lists delivery qualities
     * @param itemGroupCategory filter by item group category
    */
    listDeliveryQualities(itemGroupCategory?: ItemGroupCategory): Promise<Array<DeliveryQuality>>;
}
