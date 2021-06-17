import { Body1 } from '../model/body1';
import { DeliveryLoan } from '../model/deliveryLoan';
export declare class DeliveryLoansService {
    private token;
    private basePath;
    constructor(basePath: string, token: string);
    /**
     * Creates delivery loan
     * @summary Create delivery loan
     * @param body Payload
    */
    createDeliveryLoan(body: Body1): Promise<Array<DeliveryLoan>>;
}
