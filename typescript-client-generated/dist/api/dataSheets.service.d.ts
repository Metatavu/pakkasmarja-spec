import { DataSheet } from '../model/dataSheet';
export declare class DataSheetsService {
    private token;
    private basePath;
    constructor(basePath: string, token: string);
    /**
     * Creates data sheet
     * @summary Create data sheet
     * @param body Payload
    */
    createDataSheet(body: DataSheet): Promise<DataSheet>;
    /**
     * Deletes data sheet
     * @summary Delete data sheet
     * @param dataSheetId dataSheet id id
    */
    deleteDataSheet(dataSheetId: string): Promise<any>;
    /**
     * Finds data sheet by id
     * @summary Find data sheet
     * @param dataSheetId dataSheet id id
    */
    findDataSheet(dataSheetId: string): Promise<DataSheet>;
    /**
     * Lists data sheets
     * @summary Lists data sheets
     * @param name Filter by name
    */
    listDataSheets(name?: string): Promise<Array<DataSheet>>;
    /**
     * Updates data sheet
     * @summary Update data sheet
     * @param body Payload
     * @param dataSheetId dataSheet id id
    */
    updateDataSheet(body: DataSheet, dataSheetId: string): Promise<DataSheet>;
}
