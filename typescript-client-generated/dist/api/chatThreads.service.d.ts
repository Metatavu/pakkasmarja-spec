import { ChatGroupType } from '../model/chatGroupType';
import { ChatThread } from '../model/chatThread';
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
     * Returns chat thread report
     * @summary Returns chat thread report
     * @param threadId chat thread id
     * @param type report type. Accepted values summaryReport
     * @param accept Expected response format. Accepted values application/vnd.openxmlformats for Excel response
    */
    getChatThreadReport(threadId: number, type: string, accept?: string): Promise<string>;
    /**
     * Returns list of chat threads
     * @summary Returns list of chat threads
     * @param groupId Filter chat threads by group id
     * @param groupType Filter chat groups by group type
    */
    listChatThreads(groupId?: number, groupType?: ChatGroupType): Promise<Array<ChatThread>>;
    /**
     * Update chat thread
     * @summary Update chat thread
     * @param chatThreadId Chat thread id
    */
    updateChatThread(chatThreadId: number): Promise<ChatThread>;
}
