import { Unread } from '../model/unread';
export declare class UnreadsService {
    private token;
    private basePath;
    constructor(basePath: string, token: string);
    /**
     * Deletes unread
     * @summary Delete unread
     * @param unreadId unread id
    */
    deleteUnread(unreadId: string): Promise<any>;
    /**
     * Lists unreads
     * @summary Lists unreads
     * @param pathPrefix filter unreads by path prefix
     * @param userId filter unreads by userId
    */
    listUnreads(pathPrefix?: string, userId?: string): Promise<Array<Unread>>;
}
