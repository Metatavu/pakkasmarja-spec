import { ItemGroupType } from '../model/itemGroupType';
import { Product } from '../model/product';
export declare class ProductsService {
    private token;
    private basePath;
    constructor(basePath: string, token: string);
    /**
     * Creates product
     * @summary Create product
     * @param body Payload
    */
    createProduct(body: Product): Promise<Product>;
    /**
     * Deletes product
     * @summary Delete product
     * @param productId product id id
    */
    deleteProduct(productId: string): Promise<any>;
    /**
     * Finds product by id
     * @summary Find product
     * @param productId product id id
    */
    findProduct(productId: string): Promise<Product>;
    /**
     * Lists products
     * @summary Lists products
     * @param itemGroupId filter by item group id
     * @param itemGroupType filter by item group id
     * @param contractUserId output only products what specified user has contract in
     * @param firstResult Offset of first result. Defaults to 0
     * @param maxResults Max results. Defaults to 5
    */
    listProducts(itemGroupId?: string, itemGroupType?: ItemGroupType, contractUserId?: string, firstResult?: number, maxResults?: number): Promise<Array<Product>>;
    /**
     * Updates product
     * @summary Update product
     * @param body Payload
     * @param productId product id id
    */
    updateProduct(body: Product, productId: string): Promise<Product>;
}
