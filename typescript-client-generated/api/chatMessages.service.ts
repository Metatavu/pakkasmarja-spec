import { BadRequest } from '../model/badRequest';
import { ChatMessage } from '../model/chatMessage';
import { Forbidden } from '../model/forbidden';
import { InternalServerError } from '../model/internalServerError';
import * as URI from "urijs";
import { ApiUtils } from "./api";

const COLLECTION_FORMATS = {
  'csv': ',',
  'tsv': '   ',
  'ssv': ' ',
  'pipes': '|'
}

export class ChatMessagesService {

  private token: string;
  private basePath: string;

  constructor(basePath: string, token: string) {
    this.token = token;
    this.basePath = basePath;
  }


  /**
   * Creates new chat message
   * @summary Creates new chat message
   * @param body Payload
   * @param chatThreadId Chat thread
  */
  public createChatMessage(body: ChatMessage, chatThreadId: number, ):Promise<ChatMessage> {
    const uri = new URI(`${this.basePath}/chatThreads/${encodeURIComponent(String(chatThreadId))}/messages`);
    const options = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`
      },
      body: JSON.stringify(body)
    };

    return fetch(uri.toString(), options).then((response) => {
      return ApiUtils.handleResponse(response);
    });
  }


  /**
   * Deletes chat message
   * @summary Deletes chat message
   * @param chatThreadId Chat thread
   * @param messageId Chat message id
  */
  public deleteChatMessage(chatThreadId: number, messageId: number, ):Promise<any> {
    const uri = new URI(`${this.basePath}/chatThreads/${encodeURIComponent(String(chatThreadId))}/messages/${encodeURIComponent(String(messageId))}`);
    const options = {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`
      }
    };

    return fetch(uri.toString(), options).then((response) => {
      return ApiUtils.handleResponse(response);
    });
  }


  /**
   * Returns chat thread
   * @summary Returns chat message
   * @param chatThreadId Chat thread
   * @param messageId Chat message id
  */
  public findChatMessage(chatThreadId: number, messageId: number, ):Promise<ChatMessage> {
    const uri = new URI(`${this.basePath}/chatThreads/${encodeURIComponent(String(chatThreadId))}/messages/${encodeURIComponent(String(messageId))}`);
    const options = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`
      }
    };

    return fetch(uri.toString(), options).then((response) => {
      return ApiUtils.handleResponse(response);
    });
  }


  /**
   * Returns list of chat messages
   * @summary Returns list of chat messages
   * @param chatThreadId Chat thread
   * @param createdBefore Messages created before given time
   * @param createdAfter Messages created after given time
   * @param userId Messages created by given user
   * @param firstResult Offset of first result. Defaults to 0
   * @param maxResults Max results. Defaults to 5
  */
  public listChatMessages(chatThreadId: number, createdBefore?: Date, createdAfter?: Date, userId?: string, firstResult?: number, maxResults?: number, ):Promise<Array<ChatMessage>> {
    const uri = new URI(`${this.basePath}/chatThreads/${encodeURIComponent(String(chatThreadId))}/messages`);
    if (createdBefore !== undefined && createdBefore !== null) {
        uri.addQuery('createdBefore', <any>createdBefore.toISOString());
    }
    if (createdAfter !== undefined && createdAfter !== null) {
        uri.addQuery('createdAfter', <any>createdAfter.toISOString());
    }
    if (userId !== undefined && userId !== null) {
        uri.addQuery('userId', <any>userId);
    }
    if (firstResult !== undefined && firstResult !== null) {
        uri.addQuery('firstResult', <any>firstResult);
    }
    if (maxResults !== undefined && maxResults !== null) {
        uri.addQuery('maxResults', <any>maxResults);
    }
    const options = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`
      }
    };

    return fetch(uri.toString(), options).then((response) => {
      return ApiUtils.handleResponse(response);
    });
  }


  /**
   * Update chat message
   * @summary Update chat message
   * @param chatThreadId Chat thread
   * @param messageId Chat message id
  */
  public updateChatMessage(chatThreadId: number, messageId: number, ):Promise<ChatMessage> {
    const uri = new URI(`${this.basePath}/chatThreads/${encodeURIComponent(String(chatThreadId))}/messages/${encodeURIComponent(String(messageId))}`);
    const options = {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`
      }
    };

    return fetch(uri.toString(), options).then((response) => {
      return ApiUtils.handleResponse(response);
    });
  }

}