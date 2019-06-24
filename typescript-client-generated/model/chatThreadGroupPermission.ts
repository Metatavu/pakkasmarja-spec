/**
 * Pakkasmarja REST API
 * REST API for Pakkasmarja
 *
 * OpenAPI spec version: 3.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { ChatThreadPermissionScope } from './chatThreadPermissionScope';


export interface ChatThreadGroupPermission { 
    readonly id?: string;
    chatThreadId: number;
    userGroupId: string;
    scope?: ChatThreadPermissionScope;
}
export interface ChatThreadGroupPermissionOpt { 
    readonly id?: string;
    chatThreadId?: number;
    userGroupId?: string;
    scope?: ChatThreadPermissionScope;
}
