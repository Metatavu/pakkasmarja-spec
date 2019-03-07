import { Operation } from '../model/operation';
export declare class OperationsService {
    private token;
    private basePath;
    constructor(basePath: string, token: string);
    /**
     * Creates new operation
     * @summary Creates new operation
     * @param body Payload
    */
    createOperation(body: Operation): Promise<Operation>;
}
