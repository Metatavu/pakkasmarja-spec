export * from './chatGroups.service';
import { ChatGroupsService } from './chatGroups.service';
export * from './chatMessages.service';
import { ChatMessagesService } from './chatMessages.service';
export * from './chatThreads.service';
import { ChatThreadsService } from './chatThreads.service';
export * from './contacts.service';
import { ContactsService } from './contacts.service';
export * from './contracts.service';
import { ContractsService } from './contracts.service';
export * from './dataSheets.service';
import { DataSheetsService } from './dataSheets.service';
export * from './deliveries.service';
import { DeliveriesService } from './deliveries.service';
export * from './deliveryLoans.service';
import { DeliveryLoansService } from './deliveryLoans.service';
export * from './deliveryPlaces.service';
import { DeliveryPlacesService } from './deliveryPlaces.service';
export * from './deliveryQualities.service';
import { DeliveryQualitiesService } from './deliveryQualities.service';
export * from './itemGroups.service';
import { ItemGroupsService } from './itemGroups.service';
export * from './newsArticles.service';
import { NewsArticlesService } from './newsArticles.service';
export * from './openingHours.service';
import { OpeningHoursService } from './openingHours.service';
export * from './operationReports.service';
import { OperationReportsService } from './operationReports.service';
export * from './operations.service';
import { OperationsService } from './operations.service';
export * from './productPrices.service';
import { ProductPricesService } from './productPrices.service';
export * from './products.service';
import { ProductsService } from './products.service';
export * from './publicFiles.service';
import { PublicFilesService } from './publicFiles.service';
export * from './reports.service';
import { ReportsService } from './reports.service';
export * from './sharedFiles.service';
import { SharedFilesService } from './sharedFiles.service';
export * from './signAuthenticationServices.service';
import { SignAuthenticationServicesService } from './signAuthenticationServices.service';
export * from './unreads.service';
import { UnreadsService } from './unreads.service';
export * from './userGroups.service';
import { UserGroupsService } from './userGroups.service';
export * from './weekDeliveryPredictions.service';
import { WeekDeliveryPredictionsService } from './weekDeliveryPredictions.service';
export declare class ApiUtils {
    /**
     * Handles response from API
     *
     * @param response response object
     */
    static handleResponse(response: any): any;
}
declare const _default: {
    apiUrl: string;
    /**
     * Configures api endpoint
     *
     */
    configure(baseUrl: string): void;
    getChatGroupsService(token: string): ChatGroupsService;
    getChatMessagesService(token: string): ChatMessagesService;
    getChatThreadsService(token: string): ChatThreadsService;
    getContactsService(token: string): ContactsService;
    getContractsService(token: string): ContractsService;
    getDataSheetsService(token: string): DataSheetsService;
    getDeliveriesService(token: string): DeliveriesService;
    getDeliveryLoansService(token: string): DeliveryLoansService;
    getDeliveryPlacesService(token: string): DeliveryPlacesService;
    getDeliveryQualitiesService(token: string): DeliveryQualitiesService;
    getItemGroupsService(token: string): ItemGroupsService;
    getNewsArticlesService(token: string): NewsArticlesService;
    getOpeningHoursService(token: string): OpeningHoursService;
    getOperationReportsService(token: string): OperationReportsService;
    getOperationsService(token: string): OperationsService;
    getProductPricesService(token: string): ProductPricesService;
    getProductsService(token: string): ProductsService;
    getPublicFilesService(token: string): PublicFilesService;
    getReportsService(token: string): ReportsService;
    getSharedFilesService(token: string): SharedFilesService;
    getSignAuthenticationServicesService(token: string): SignAuthenticationServicesService;
    getUnreadsService(token: string): UnreadsService;
    getUserGroupsService(token: string): UserGroupsService;
    getWeekDeliveryPredictionsService(token: string): WeekDeliveryPredictionsService;
};
export default _default;
