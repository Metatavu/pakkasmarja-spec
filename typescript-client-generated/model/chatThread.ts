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


export interface ChatThread { 
    id?: number;
    groupId: number;
    title: string;
    description?: string;
    imageUrl?: string;
    answerType: ChatThread.AnswerTypeEnum;
    pollAllowOther?: boolean;
    pollPredefinedTexts?: Array<string>;
    expiresAt?: Date;
}
export interface ChatThreadOpt { 
    id?: number;
    groupId?: number;
    title?: string;
    description?: string;
    imageUrl?: string;
    answerType?: ChatThread.AnswerTypeEnum;
    pollAllowOther?: boolean;
    pollPredefinedTexts?: Array<string>;
    expiresAt?: Date;
}
export namespace ChatThread {
    export type AnswerTypeEnum = 'TEXT' | 'POLL';
    export const AnswerTypeEnum = {
        TEXT: 'TEXT' as AnswerTypeEnum,
        POLL: 'POLL' as AnswerTypeEnum
    };
}