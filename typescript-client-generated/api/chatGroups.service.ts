import { BadRequest } from '../model/badRequest';
import { ChatGroup } from '../model/chatGroup';
import { ChatGroupGroupPermission } from '../model/chatGroupGroupPermission';
import { ChatGroupType } from '../model/chatGroupType';
import { ChatThread } from '../model/chatThread';
import { Forbidden } from '../model/forbidden';
import { InternalServerError } from '../model/internalServerError';
import * as URI from "urijs";
import { ApiUtils } from "./api";

export class ChatGroupsService {

  private token: string;
  private basePath: string;

  constructor(basePath: string, token: string) {
    this.token = token;
    this.basePath = basePath;
  }


  /**
   * Creates new chat group
   * @summary Creates new chat group
   * @param body Payload
  */
  public createChatGroup(body: ChatThread, ):Promise<ChatGroup> {
    const uri = new URI(`${this.basePath}/chatGroups`);
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
   * Creates new chat group group permission
   * @summary Creates new chat group group permission
   * @param body Payload
   * @param chatGroupId Chat group id
  */
  public createChatGroupGroupPermissions(body: ChatGroupGroupPermission, chatGroupId: number, ):Promise<ChatGroupGroupPermission> {
    const uri = new URI(`${this.basePath}/chatGroups/${encodeURIComponent(String(chatGroupId))}/groupPermissions`);
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
   * Deletes a chat group
   * @summary Deletes a chat group
   * @param chatGroupId Chat group id
  */
  public deleteChatGroup(chatGroupId: number, ):Promise<any> {
    const uri = new URI(`${this.basePath}/chatGroups/${encodeURIComponent(String(chatGroupId))}`);
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
   * Deletes chat group group permission
   * @summary Delete chat group group permission
   * @param chatGroupId Chat group id
   * @param permissionId Permission id
  */
  public deleteChatGroupGroupPermission(chatGroupId: number, permissionId: string, ):Promise<any> {
    const uri = new URI(`${this.basePath}/chatGroups/${encodeURIComponent(String(chatGroupId))}/groupPermissions/${encodeURIComponent(String(permissionId))}`);
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
   * Returns a chat group
   * @summary Returns a chat group
   * @param chatGroupId Chat group id
  */
  public findChatGroup(chatGroupId: number, ):Promise<ChatGroup> {
    const uri = new URI(`${this.basePath}/chatGroups/${encodeURIComponent(String(chatGroupId))}`);
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
   * Find chat group group permission
   * @summary Find chat group group permission
   * @param chatGroupId Chat group id
   * @param permissionId Permission id
  */
  public findChatGroupGroupPermissions(chatGroupId: number, permissionId: string, ):Promise<ChatGroupGroupPermission> {
    const uri = new URI(`${this.basePath}/chatGroups/${encodeURIComponent(String(chatGroupId))}/groupPermissions/${encodeURIComponent(String(permissionId))}`);
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
   * Returns list of chat group group permissions
   * @summary Returns list of chat group group permissions
   * @param chatGroupId Chat group id
  */
  public listChatGroupGroupPermissions(chatGroupId: number, ):Promise<Array<ChatGroupGroupPermission>> {
    const uri = new URI(`${this.basePath}/chatGroups/${encodeURIComponent(String(chatGroupId))}/groupPermissions`);
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
   * Returns list of chat groups
   * @summary Returns list of chat groups
   * @param groupType Filter chat groups by group type
  */
  public listChatGroups(groupType?: ChatGroupType, ):Promise<Array<ChatGroup>> {
    const uri = new URI(`${this.basePath}/chatGroups`);
    if (groupType !== undefined && groupType !== null) {
        uri.addQuery('groupType', <any>groupType);
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
   * Update chat group
   * @summary Update chat group
   * @param body Payload
   * @param chatGroupId Chat group id
  */
  public updateChatGroup(body: ChatGroup, chatGroupId: number, ):Promise<ChatGroup> {
    const uri = new URI(`${this.basePath}/chatGroups/${encodeURIComponent(String(chatGroupId))}`);
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
   * Updates chat group group permission
   * @summary Update chat group group permission
   * @param body Payload
   * @param chatGroupId Chat group id
   * @param permissionId Permission id
  */
  public updateChatGroupGroupPermissions(body: ChatGroupGroupPermission, chatGroupId: number, permissionId: string, ):Promise<ChatGroupGroupPermission> {
    const uri = new URI(`${this.basePath}/chatGroups/${encodeURIComponent(String(chatGroupId))}/groupPermissions/${encodeURIComponent(String(permissionId))}`);
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