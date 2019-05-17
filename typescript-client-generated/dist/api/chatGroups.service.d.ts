import { ChatGroup } from '../model/chatGroup';
import { ChatGroupGroupPermission } from '../model/chatGroupGroupPermission';
import { ChatGroupType } from '../model/chatGroupType';
export declare class ChatGroupsService {
    private token;
    private basePath;
    constructor(basePath: string, token: string);
    /**
     * Creates new chat group
     * @summary Creates new chat group
     * @param body Payload
    */
    createChatGroup(body: ChatGroup): Promise<ChatGroup>;
    /**
     * Creates new chat group group permission
     * @summary Creates new chat group group permission
     * @param body Payload
     * @param chatGroupId Chat group id
    */
    createChatGroupGroupPermissions(body: ChatGroupGroupPermission, chatGroupId: number): Promise<ChatGroupGroupPermission>;
    /**
     * Deletes a chat group
     * @summary Deletes a chat group
     * @param chatGroupId Chat group id
    */
    deleteChatGroup(chatGroupId: number): Promise<any>;
    /**
     * Deletes chat group group permission
     * @summary Delete chat group group permission
     * @param chatGroupId Chat group id
     * @param permissionId Permission id
    */
    deleteChatGroupGroupPermission(chatGroupId: number, permissionId: string): Promise<any>;
    /**
     * Returns a chat group
     * @summary Returns a chat group
     * @param chatGroupId Chat group id
    */
    findChatGroup(chatGroupId: number): Promise<ChatGroup>;
    /**
     * Find chat group group permission
     * @summary Find chat group group permission
     * @param chatGroupId Chat group id
     * @param permissionId Permission id
    */
    findChatGroupGroupPermissions(chatGroupId: number, permissionId: string): Promise<ChatGroupGroupPermission>;
    /**
     * Returns list of chat group group permissions
     * @summary Returns list of chat group group permissions
     * @param chatGroupId Chat group id
    */
    listChatGroupGroupPermissions(chatGroupId: number): Promise<Array<ChatGroupGroupPermission>>;
    /**
     * Returns list of chat groups
     * @summary Returns list of chat groups
     * @param groupType Filter chat groups by group type
    */
    listChatGroups(groupType?: ChatGroupType): Promise<Array<ChatGroup>>;
    /**
     * Update chat group
     * @summary Update chat group
     * @param body Payload
     * @param chatGroupId Chat group id
    */
    updateChatGroup(body: ChatGroup, chatGroupId: number): Promise<ChatGroup>;
    /**
     * Updates chat group group permission
     * @summary Update chat group group permission
     * @param body Payload
     * @param chatGroupId Chat group id
     * @param permissionId Permission id
    */
    updateChatGroupGroupPermissions(body: ChatGroupGroupPermission, chatGroupId: number, permissionId: string): Promise<ChatGroupGroupPermission>;
}
