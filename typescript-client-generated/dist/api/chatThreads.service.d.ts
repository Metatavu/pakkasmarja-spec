import { ChatGroupType } from '../model/chatGroupType';
import { ChatThread } from '../model/chatThread';
import { ChatThreadGroupPermission } from '../model/chatThreadGroupPermission';
import { ChatThreadUserPermission } from '../model/chatThreadUserPermission';
export declare class ChatThreadsService {
    private token;
    private basePath;
    constructor(basePath: string, token: string);
    /**
     * Creates new chat thread
     * @summary Creates new chat thread
     * @param body Payload
    */
    createChatThread(body: ChatThread): Promise<ChatThread>;
    /**
     * Creates new chat thread group permission
     * @summary Creates new chat thread group permission
     * @param body Payload
     * @param chatThreadId Chat thread id
    */
    createChatThreadGroupPermissions(body: ChatThreadGroupPermission, chatThreadId: number): Promise<ChatThreadGroupPermission>;
    /**
     * Creates new chat thread user permission
     * @summary Creates new chat thread user permission
     * @param body Payload
     * @param chatThreadId Chat thread id
    */
    createChatThreadUserPermission(body: ChatThreadUserPermission, chatThreadId: number): Promise<ChatThreadUserPermission>;
    /**
     * Deletes chat thread
     * @summary Deletes chat thread
     * @param chatThreadId Chat thread id
    */
    deleteChatThread(chatThreadId: number): Promise<any>;
    /**
     * Returns chat thread
     * @summary Returns chat thread
     * @param chatThreadId Chat thread id
    */
    findChatThread(chatThreadId: number): Promise<ChatThread>;
    /**
     * Find chat thread group permission
     * @summary Find chat thread group permission
     * @param chatThreadId Chat thread id
     * @param permissionId Permission id
    */
    findChatThreadGroupPermission(chatThreadId: number, permissionId: string): Promise<ChatThreadGroupPermission>;
    /**
     * Find chat thread user permission
     * @summary Find chat thread user permission
     * @param chatThreadId Chat thread id
     * @param permissionId Permission id
    */
    findChatThreadUserPermission(chatThreadId: number, permissionId: string): Promise<ChatThreadUserPermission>;
    /**
     * Returns chat thread report
     * @summary Returns chat thread report
     * @param threadId chat thread id
     * @param type report type. Accepted values summaryReport
     * @param accept Expected response format. Accepted values application/vnd.openxmlformats for Excel response
    */
    getChatThreadReport(threadId: number, type: string, accept?: string): Promise<string>;
    /**
     * Returns list of chat thread group permissions
     * @summary Returns list of chat thread group permissions
     * @param chatThreadId Chat thread id
    */
    listChatThreadGroupPermissions(chatThreadId: number): Promise<Array<ChatThreadGroupPermission>>;
    /**
     * Returns list of chat thread user permissions
     * @summary Returns list of chat thread user permissions
     * @param chatThreadId Chat thread id
    */
    listChatThreadUserPermissions(chatThreadId: number): Promise<Array<ChatThreadUserPermission>>;
    /**
     * Returns list of chat threads
     * @summary Returns list of chat threads
     * @param groupId Filter chat threads by group id
     * @param groupType Filter chat treads by group type
     * @param ownerId Filter chat treads by owner id
    */
    listChatThreads(groupId?: number, groupType?: ChatGroupType, ownerId?: string): Promise<Array<ChatThread>>;
    /**
     * Update chat thread
     * @summary Update chat thread
     * @param body Payload
     * @param chatThreadId Chat thread id
    */
    updateChatThread(body: ChatThread, chatThreadId: number): Promise<ChatThread>;
    /**
     * Updates chat thread group permission
     * @summary Update chat thread group permission
     * @param body Payload
     * @param chatThreadId Chat thread id
     * @param permissionId Permission id
    */
    updateChatThreadGroupPermission(body: ChatThreadGroupPermission, chatThreadId: number, permissionId: string): Promise<ChatThreadGroupPermission>;
    /**
     * Updates chat thread user permission
     * @summary Update chat thread user permission
     * @param body Payload
     * @param chatThreadId Chat thread id
     * @param permissionId Permission id
    */
    updateChatThreadUserPermission(body: ChatThreadUserPermission, chatThreadId: number, permissionId: string): Promise<ChatThreadUserPermission>;
}
