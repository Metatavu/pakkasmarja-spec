import { OperationReport } from '../model/operationReport';
import { OperationReportItem } from '../model/operationReportItem';
import { OperationType } from '../model/operationType';
export declare class OperationReportsService {
    private token;
    private basePath;
    constructor(basePath: string, token: string);
    /**
     * Find operation report by id
     * @summary Find operation report
     * @param id operation report id
    */
    findOperationReport(id: string): Promise<OperationReport>;
    /**
     * Lists operation report items
     * @summary List operation report items
     * @param id operation report id
    */
    listOperationReportItems(id: string): Promise<Array<OperationReportItem>>;
    /**
     * Lists operation reports
     * @summary List operation reports
     * @param type filter by type
     * @param sortBy sort by (CREATED)
     * @param sortDir sort direction (ASC, DESC)
     * @param firstResult Offset of first result. Defaults to 0
     * @param maxResults Max results. Defaults to 20
    */
    listOperationReports(type?: OperationType, sortBy?: string, sortDir?: string, firstResult?: number, maxResults?: number): Promise<Array<OperationReport>>;
}
