import { Delivery } from '../model/delivery';
import { DeliveryNote } from '../model/deliveryNote';
import { DeliveryStatus } from '../model/deliveryStatus';
import { ItemGroupCategory } from '../model/itemGroupCategory';
export declare class DeliveriesService {
    private token;
    private basePath;
    constructor(basePath: string, token: string);
    /**
     * Creates delivery
     * @summary Create delivery
     * @param body Payload
    */
    createDelivery(body: Delivery): Promise<Delivery>;
    /**
     * Creates delivery note
     * @summary Create delivery note
     * @param body Payload
     * @param deliveryId delivery id id
    */
    createDeliveryNote(body: DeliveryNote, deliveryId: string): Promise<DeliveryNote>;
    /**
     * Deletes delivery
     * @summary Delete delivery
     * @param deliveryId delivery id id
    */
    deleteDelivery(deliveryId: string): Promise<any>;
    /**
     * Deletes delivery note
     * @summary Delete delivery note
     * @param deliveryId delivery id id
     * @param deliveryNoteId delivery id id
    */
    deleteDeliveryNote(deliveryId: string, deliveryNoteId: string): Promise<any>;
    /**
     * Finds delivery by id
     * @summary Find delivery
     * @param deliveryId delivery id id
    */
    findDelivery(deliveryId: string): Promise<Delivery>;
    /**
     * Finds delivery note by id
     * @summary Find delivery note
     * @param deliveryId delivery id id
     * @param deliveryNoteId delivery id id
    */
    findDeliveryNote(deliveryId: string, deliveryNoteId: string): Promise<DeliveryNote>;
    /**
     * Lists deliveries
     * @summary Lists deliveries
     * @param userId filter by user id
     * @param status filter by status
     * @param itemGroupCategory filter by item group id
     * @param itemGroupId filter by item group id
     * @param productId filter by item group id
     * @param deliveryPlaceId filter by delivery place id
     * @param timeBefore filter by time before specified time
     * @param timeAfter filter by time after specified time
     * @param firstResult Offset of first result. Defaults to 0
     * @param maxResults Max results. Defaults to 5
    */
    listDeliveries(userId?: string, status?: DeliveryStatus, itemGroupCategory?: ItemGroupCategory, itemGroupId?: string, productId?: string, deliveryPlaceId?: string, timeBefore?: Date, timeAfter?: Date, firstResult?: number, maxResults?: number): Promise<Array<Delivery>>;
    /**
     * Lists deliveries notes
     * @summary Lists deliveries notes
     * @param deliveryId delivery id id
    */
    listDeliveryNotes(deliveryId: string): Promise<Array<DeliveryNote>>;
    /**
     * Updates delivery
     * @summary Update delivery
     * @param body Payload
     * @param deliveryId delivery id id
    */
    updateDelivery(body: Delivery, deliveryId: string): Promise<Delivery>;
    /**
     * Updates delivery note
     * @summary Update delivery note
     * @param body Payload
     * @param deliveryId delivery id id
     * @param deliveryNoteId delivery id id
    */
    updateDeliveryNote(body: DeliveryNote, deliveryId: string, deliveryNoteId: string): Promise<DeliveryNote>;
}
