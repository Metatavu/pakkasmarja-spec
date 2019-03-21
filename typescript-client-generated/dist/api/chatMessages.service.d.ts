import { ChatMessage } from '../model/chatMessage';
export declare class ChatMessagesService {
    private token;
    private basePath;
    constructor(basePath: string, token: string);
    /**
     * Creates new chat message
     * @summary Creates new chat message
     * @param body Payload
     * @param chatThreadId Chat thread
    */
    createChatMessage(body: ChatMessage, chatThreadId: number): Promise<ChatMessage>;
    /**
     * Deletes chat message
     * @summary Deletes chat message
     * @param chatThreadId Chat thread
     * @param messageId Chat message id
    */
    deleteChatMessage(chatThreadId: number, messageId: number): Promise<any>;
    /**
     * Returns chat thread
     * @summary Returns chat message
     * @param chatThreadId Chat thread
     * @param messageId Chat message id
    */
    findChatMessage(chatThreadId: number, messageId: number): Promise<ChatMessage>;
    /**
     * Returns list of chat messages
     * @summary Returns list of chat messages
     * @param chatThreadId Chat thread
     * @param createdBefore Messages created before given time
     * @param createdAfter Messages created after given time
     * @param firstResult Offset of first result. Defaults to 0
     * @param maxResults Max results. Defaults to 5
    */
    listChatMessages(chatThreadId: number, createdBefore?: Date, createdAfter?: Date, firstResult?: number, maxResults?: number): Promise<Array<ChatMessage>>;
    /**
     * Update chat message
     * @summary Update chat message
     * @param chatThreadId Chat thread
     * @param messageId Chat message id
    */
    updateChatMessage(chatThreadId: number, messageId: number): Promise<ChatMessage>;
}
