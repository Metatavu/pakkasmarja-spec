import { BadRequest } from '../model/badRequest';
import { ChatGroupType } from '../model/chatGroupType';
import { ChatThread } from '../model/chatThread';
import { ChatThreadGroupPermission } from '../model/chatThreadGroupPermission';
import { ChatThreadUserPermission } from '../model/chatThreadUserPermission';
import { Forbidden } from '../model/forbidden';
import { InternalServerError } from '../model/internalServerError';
import * as URI from "urijs";
import { ApiUtils } from "./api";

export class ChatThreadsService {

  private token: string;
  private basePath: string;

  constructor(basePath: string, token: string) {
    this.token = token;
    this.basePath = basePath;
  }


  /**
   * Creates new chat thread
   * @summary Creates new chat thread
   * @param body Payload
  */
  public createChatThread(body: ChatThread, ):Promise<ChatThread> {
    const uri = new URI(`${this.basePath}/chatThreads`);
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
   * Creates new chat thread group permission
   * @summary Creates new chat thread group permission
   * @param body Payload
   * @param chatThreadId Chat thread id
  */
  public createChatThreadGroupPermissions(body: ChatThreadGroupPermission, chatThreadId: number, ):Promise<ChatThreadGroupPermission> {
    const uri = new URI(`${this.basePath}/chatThreads/${encodeURIComponent(String(chatThreadId))}/groupPermissions`);
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
   * Creates new chat thread user permission
   * @summary Creates new chat thread user permission
   * @param body Payload
   * @param chatThreadId Chat thread id
  */
  public createChatThreadUserPermission(body: ChatThreadUserPermission, chatThreadId: number, ):Promise<ChatThreadUserPermission> {
    const uri = new URI(`${this.basePath}/chatThreads/${encodeURIComponent(String(chatThreadId))}/userPermissions`);
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
   * Deletes chat thread
   * @summary Deletes chat thread
   * @param chatThreadId Chat thread id
  */
  public deleteChatThread(chatThreadId: number, ):Promise<any> {
    const uri = new URI(`${this.basePath}/chatThreads/${encodeURIComponent(String(chatThreadId))}`);
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
   * @summary Returns chat thread
   * @param chatThreadId Chat thread id
  */
  public findChatThread(chatThreadId: number, ):Promise<ChatThread> {
    const uri = new URI(`${this.basePath}/chatThreads/${encodeURIComponent(String(chatThreadId))}`);
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
   * Find chat thread group permission
   * @summary Find chat thread group permission
   * @param chatThreadId Chat thread id
   * @param permissionId Permission id
  */
  public findChatThreadGroupPermission(chatThreadId: number, permissionId: string, ):Promise<ChatThreadGroupPermission> {
    const uri = new URI(`${this.basePath}/chatThreads/${encodeURIComponent(String(chatThreadId))}/groupPermissions/${encodeURIComponent(String(permissionId))}`);
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
   * Find chat thread user permission
   * @summary Find chat thread user permission
   * @param chatThreadId Chat thread id
   * @param permissionId Permission id
  */
  public findChatThreadUserPermission(chatThreadId: number, permissionId: string, ):Promise<ChatThreadUserPermission> {
    const uri = new URI(`${this.basePath}/chatThreads/${encodeURIComponent(String(chatThreadId))}/userPermissions/${encodeURIComponent(String(permissionId))}`);
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
   * Returns chat thread report
   * @summary Returns chat thread report
   * @param threadId chat thread id
   * @param type report type. Accepted values summaryReport
   * @param accept Expected response format. Accepted values application/vnd.openxmlformats for Excel response
  */
  public getChatThreadReport(threadId: number, type: string, accept?: string, ):Promise<string> {
    const uri = new URI(`${this.basePath}/chatThreads/${encodeURIComponent(String(threadId))}/reports/${encodeURIComponent(String(type))}`);
    const options = {
      method: "get",
      headers: {
        "Accept" : accept,
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`
      }
    };

    return fetch(uri.toString(), options).then((response) => {
      return ApiUtils.handleResponse(response);
    });
  }


  /**
   * Returns list of chat thread group permissions
   * @summary Returns list of chat thread group permissions
   * @param chatThreadId Chat thread id
  */
  public listChatThreadGroupPermissions(chatThreadId: number, ):Promise<Array<ChatThreadGroupPermission>> {
    const uri = new URI(`${this.basePath}/chatThreads/${encodeURIComponent(String(chatThreadId))}/groupPermissions`);
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
   * Returns list of chat thread user permissions
   * @summary Returns list of chat thread user permissions
   * @param chatThreadId Chat thread id
  */
  public listChatThreadUserPermissions(chatThreadId: number, ):Promise<Array<ChatThreadUserPermission>> {
    const uri = new URI(`${this.basePath}/chatThreads/${encodeURIComponent(String(chatThreadId))}/userPermissions`);
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
   * Returns list of chat threads
   * @summary Returns list of chat threads
   * @param groupId Filter chat threads by group id
   * @param groupType Filter chat treads by group type
   * @param ownerId Filter chat treads by owner id
  */
  public listChatThreads(groupId?: number, groupType?: ChatGroupType, ownerId?: string, ):Promise<Array<ChatThread>> {
    const uri = new URI(`${this.basePath}/chatThreads`);
    if (groupId !== undefined && groupId !== null) {
        uri.addQuery('groupId', <any>groupId);
    }
    if (groupType !== undefined && groupType !== null) {
        uri.addQuery('groupType', <any>groupType);
    }
    if (ownerId !== undefined && ownerId !== null) {
        uri.addQuery('ownerId', <any>ownerId);
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
   * Update chat thread
   * @summary Update chat thread
   * @param body Payload
   * @param chatThreadId Chat thread id
  */
  public updateChatThread(body: ChatThread, chatThreadId: number, ):Promise<ChatThread> {
    const uri = new URI(`${this.basePath}/chatThreads/${encodeURIComponent(String(chatThreadId))}`);
    const options = {
      method: "put",
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
   * Updates chat thread group permission
   * @summary Update chat thread group permission
   * @param body Payload
   * @param chatThreadId Chat thread id
   * @param permissionId Permission id
  */
  public updateChatThreadGroupPermission(body: ChatThreadGroupPermission, chatThreadId: number, permissionId: string, ):Promise<ChatThreadGroupPermission> {
    const uri = new URI(`${this.basePath}/chatThreads/${encodeURIComponent(String(chatThreadId))}/groupPermissions/${encodeURIComponent(String(permissionId))}`);
    const options = {
      method: "put",
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
   * Updates chat thread user permission
   * @summary Update chat thread user permission
   * @param body Payload
   * @param chatThreadId Chat thread id
   * @param permissionId Permission id
  */
  public updateChatThreadUserPermission(body: ChatThreadUserPermission, chatThreadId: number, permissionId: string, ):Promise<ChatThreadUserPermission> {
    const uri = new URI(`${this.basePath}/chatThreads/${encodeURIComponent(String(chatThreadId))}/userPermissions/${encodeURIComponent(String(permissionId))}`);
    const options = {
      method: "put",
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

}