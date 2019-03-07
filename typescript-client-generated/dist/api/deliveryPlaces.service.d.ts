import { DeliveryPlace } from '../model/deliveryPlace';
export declare class DeliveryPlacesService {
    private token;
    private basePath;
    constructor(basePath: string, token: string);
    /**
     * Finds delivery place by id
     * @summary Find delivery place
     * @param id delivery place id
    */
    findDeliveryPlace(id: string): Promise<DeliveryPlace>;
    /**
     * Lists delivery places
     * @summary Lists delivery places
    */
    listDeliveryPlaces(): Promise<Array<DeliveryPlace>>;
}
