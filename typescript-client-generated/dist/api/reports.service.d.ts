export declare class ReportsService {
    private token;
    private basePath;
    constructor(basePath: string, token: string);
    /**
     * Returns report by type
     * @summary Returns report
     * @param type Report type
     * @param format document format (HTML or PDF)
     * @param startDate deliveries from
     * @param endDate deliveries to
     * @param productIds filter by product Ids
    */
    getReport(type: string, format: string, startDate?: Date, endDate?: Date, productIds?: Array<string>): Promise<string>;
}
