import { PublicFile } from '../model/publicFile';
export declare class PublicFilesService {
    private token;
    private basePath;
    constructor(basePath: string, token: string);
    /**
     * Creates public file
     * @summary Create public file
     * @param body Payload
    */
    createPublicFile(body: PublicFile): Promise<PublicFile>;
    /**
     * Deletes public file
     * @summary Delete public file
     * @param publicFileId publicFile id id
    */
    deletePublicFile(publicFileId: string): Promise<any>;
    /**
     * Finds public file by id
     * @summary Find public file
     * @param publicFileId publicFile id id
    */
    findPublicFile(publicFileId: string): Promise<PublicFile>;
    /**
     * Lists public files
     * @summary Lists public files
     * @param firstResult Offset of first result. Defaults to 0
     * @param maxResults Max results. Defaults to 5
    */
    listPublicFiles(firstResult?: number, maxResults?: number): Promise<Array<PublicFile>>;
    /**
     * Updates public file
     * @summary Update public file
     * @param body Payload
     * @param publicFileId publicFile id id
    */
    updatePublicFile(body: PublicFile, publicFileId: string): Promise<PublicFile>;
}
