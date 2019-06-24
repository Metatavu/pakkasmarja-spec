import { UserGroup } from '../model/userGroup';
export declare class UserGroupsService {
    private token;
    private basePath;
    constructor(basePath: string, token: string);
    /**
     * Lists user groups
     * @summary Lists user groups
    */
    listUserGroups(): Promise<Array<UserGroup>>;
}
