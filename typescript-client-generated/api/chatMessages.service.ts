import { BadRequest } from '../model/badRequest';
import { ChatMessage } from '../model/chatMessage';
import { Forbidden } from '../model/forbidden';
import { InternalServerError } from '../model/internalServerError';
import * as URI from "urijs";
import { ApiUtils } from "./api";

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
  */
  public listChatMessages(chatThreadId: number, ):Promise<Array<ChatMessage>> {
    const uri = new URI(`${this.basePath}/chatThreads/${encodeURIComponent(String(chatThreadId))}/messages`);
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