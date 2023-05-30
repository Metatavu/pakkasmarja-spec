import { SharedFile } from '../model/sharedFile';
export declare class SharedFilesService {
    private token;
    private basePath;
    constructor(basePath: string, token: string);
    /**
     * Deletes shared file from Amazon S3
     * @summary Delete shared file from S3
     * @param fileName File name
     * @param pathPrefix File path prefix
    */
    deleteSharedFile(fileName: string, pathPrefix?: string): Promise<any>;
    /**
     * Fetches shared file from Amazon S3
     * @summary Get shared file from S3
     * @param fileName File name
     * @param pathPrefix Path prefix
    */
    getSharedFile(fileName: string, pathPrefix?: string): Promise<string>;
    /**
     * Lists shared files from Amazon S3
     * @summary List shared files from S3
     * @param pathPrefix Path prefix
    */
    listSharedFiles(pathPrefix?: string): Promise<Array<SharedFile>>;
    /**
     * Uploads shared file to Amazon S3
     * @summary Upload shared file to S3
     * @param fileName File name
     * @param file
     * @param pathPrefix File path prefix
    */
    uploadSharedFile(fileName: string, file?: string, pathPrefix?: string): Promise<SharedFile>;
    /**
     * Uploads shared folder to Amazon S3
     * @summary Upload shared folder to S3
     * @param folderName Folder name
     * @param pathPrefix Folder path prefix
    */
    uploadSharedFolder(folderName: string, pathPrefix?: string): Promise<SharedFile>;
}
