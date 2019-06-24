import { ItemGroup } from '../model/itemGroup';
import { ItemGroupDocumentTemplate } from '../model/itemGroupDocumentTemplate';
import { ItemGroupPrice } from '../model/itemGroupPrice';
export declare class ItemGroupsService {
    private token;
    private basePath;
    constructor(basePath: string, token: string);
    /**
     * Creates item group
     * @summary Creates item group
     * @param body Payload
    */
    createItemGroup(body: ItemGroup): Promise<ItemGroup>;
    /**
     * Creates an item group price
     * @summary Creates item group price
     * @param body Payload
     * @param itemGroupId item group id
    */
    createItemGroupPrice(body: ItemGroupPrice, itemGroupId: string): Promise<ItemGroupPrice>;
    /**
     * Deletes an item group price
     * @summary Delete item group price
     * @param itemGroupId item group id
     * @param priceId price id
    */
    deleteItemGroupPrice(itemGroupId: string, priceId: string): Promise<any>;
    /**
     * Finds item group by id
     * @summary Find item group
     * @param id item group id
    */
    findItemGroup(id: string): Promise<ItemGroup>;
    /**
     * Finds item group template
     * @summary Find item group document template
     * @param itemGroupId item group id
     * @param id template id
    */
    findItemGroupDocumentTemplate(itemGroupId: string, id: string): Promise<ItemGroupDocumentTemplate>;
    /**
     * Finds a item group price
     * @summary Find item group price
     * @param itemGroupId item group id
     * @param priceId price id
    */
    findItemGroupPrice(itemGroupId: string, priceId: string): Promise<ItemGroupPrice>;
    /**
     * Lists item group templates
     * @summary List item group document templates
     * @param itemGroupId item group id
    */
    listItemGroupDocumentTemplates(itemGroupId: string): Promise<Array<ItemGroupDocumentTemplate>>;
    /**
     * Lists item group prices
     * @summary List item group prices
     * @param itemGroupId item group id
     * @param sortBy sort by (YEAR)
     * @param sortDir sort direction (ASC, DESC)
     * @param firstResult Offset of first result. Defaults to 0
     * @param maxResults Max results. Defaults to 5
    */
    listItemGroupPrices(itemGroupId: string, sortBy?: string, sortDir?: string, firstResult?: number, maxResults?: number): Promise<Array<ItemGroupPrice>>;
    /**
     * Lists item groups
     * @summary Lists item groups
    */
    listItemGroups(): Promise<Array<ItemGroup>>;
    /**
     * Updated item group document template
     * @summary Updates item group document template
     * @param body Payload
     * @param itemGroupId item group id
     * @param id template id
    */
    updateItemGroupDocumentTemplate(body: ItemGroupDocumentTemplate, itemGroupId: string, id: string): Promise<ItemGroupDocumentTemplate>;
    /**
     * Updates a item group price
     * @summary Update item group price
     * @param body Payload
     * @param itemGroupId item group id
     * @param priceId price id
    */
    updateItemGroupPrice(body: ItemGroupPrice, itemGroupId: string, priceId: string): Promise<ItemGroupPrice>;
}
