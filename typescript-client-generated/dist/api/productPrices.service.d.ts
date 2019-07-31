import { ProductPrice } from '../model/productPrice';
export declare class ProductPricesService {
    private token;
    private basePath;
    constructor(basePath: string, token: string);
    /**
     * Creates product price
     * @summary Create product price
     * @param body Payload
     * @param productId product id id
    */
    createProductPrice(body: ProductPrice, productId: string): Promise<ProductPrice>;
    /**
     * Deletes product price
     * @summary Delete product price
     * @param productId delivery id id
     * @param productPriceId delivery id id
    */
    deleteProductPrice(productId: string, productPriceId: string): Promise<any>;
    /**
     * Finds product price
     * @summary Find product price
     * @param productId product id
     * @param productPriceId product price id
    */
    findProductPrice(productId: string, productPriceId: string): Promise<ProductPrice>;
    /**
     * Lists product prices
     * @summary List product prices
     * @param productId product id
     * @param sort sort
     * @param firstResult Offset of first result. Defaults to 0
     * @param maxResults Max results. Defaults to 5
    */
    listProductPrices(productId: string, sort?: string, firstResult?: number, maxResults?: number): Promise<Array<ProductPrice>>;
    /**
     * Updates product price
     * @summary Update product price
     * @param body Payload
     * @param productId product id id
     * @param productPriceId product price id
    */
    updateProductPrice(body: ProductPrice, productId: string, productPriceId: string): Promise<ProductPrice>;
}
