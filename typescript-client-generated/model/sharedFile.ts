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
import { FileType } from './fileType';


export interface SharedFile { 
    name: string;
    pathPrefix?: string;
    fileType: FileType;
}
export interface SharedFileOpt { 
    name?: string;
    pathPrefix?: string;
    fileType?: FileType;
}
