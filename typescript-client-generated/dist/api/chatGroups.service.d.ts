import { ChatGroup } from '../model/chatGroup';
import { ChatGroupType } from '../model/chatGroupType';
import { ChatThread } from '../model/chatThread';
export declare class ChatGroupsService {
    private token;
    private basePath;
    constructor(basePath: string, token: string);
    /**
     * Creates new chat group
     * @summary Creates new chat group
     * @param body Payload
    */
    createChatGroup(body: ChatThread): Promise<ChatGroup>;
    /**
     * Deletes a chat group
     * @summary Deletes a chat group
     * @param chatGroupId Chat group id
    */
    deleteChatGroup(chatGroupId: number): Promise<any>;
    /**
     * Returns a chat group
     * @summary Returns a chat group
     * @param chatGroupId Chat group id
    */
    findChatGroup(chatGroupId: number): Promise<ChatGroup>;
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
    updateChatGroup(body: ChatThread, chatGroupId: number): Promise<ChatGroup>;
}
