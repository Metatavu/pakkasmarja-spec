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
export * from './deliveryPlaces.service';
import { DeliveryPlacesService } from './deliveryPlaces.service';
export * from './itemGroups.service';
import { ItemGroupsService } from './itemGroups.service';
export * from './newsArticles.service';
import { NewsArticlesService } from './newsArticles.service';
export * from './operationReports.service';
import { OperationReportsService } from './operationReports.service';
export * from './operations.service';
import { OperationsService } from './operations.service';
export * from './signAuthenticationServices.service';
import { SignAuthenticationServicesService } from './signAuthenticationServices.service';
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
    getDeliveryPlacesService(token: string): DeliveryPlacesService;
    getItemGroupsService(token: string): ItemGroupsService;
    getNewsArticlesService(token: string): NewsArticlesService;
    getOperationReportsService(token: string): OperationReportsService;
    getOperationsService(token: string): OperationsService;
    getSignAuthenticationServicesService(token: string): SignAuthenticationServicesService;
};
export default _default;
