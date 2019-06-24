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
export * from './deliveryPlaces.service';
import { DeliveryPlacesService } from './deliveryPlaces.service';
export * from './deliveryQualities.service';
import { DeliveryQualitiesService } from './deliveryQualities.service';
export * from './itemGroups.service';
import { ItemGroupsService } from './itemGroups.service';
export * from './newsArticles.service';
import { NewsArticlesService } from './newsArticles.service';
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
export * from './signAuthenticationServices.service';
import { SignAuthenticationServicesService } from './signAuthenticationServices.service';
export * from './unreads.service';
import { UnreadsService } from './unreads.service';
export * from './userGroups.service';
import { UserGroupsService } from './userGroups.service';
export * from './weekDeliveryPredictions.service';
import { WeekDeliveryPredictionsService } from './weekDeliveryPredictions.service';

export class ApiUtils {
  /**
   * Handles response from API
   * 
   * @param response response object
   */
  public static handleResponse(response: any) {
    switch (response.status) {
      case 204:
        return {};
      default:
        return response.json();
    }
  }
}

export default new class Api {

  private apiUrl = "http://localhost";

  /**
   * Configures api endpoint
   *
   */
  public configure(baseUrl: string) {
    this.apiUrl = baseUrl;
  }

  
  public getChatGroupsService(token: string): ChatGroupsService {
    return new ChatGroupsService(this.apiUrl, token);
  }
  
  public getChatMessagesService(token: string): ChatMessagesService {
    return new ChatMessagesService(this.apiUrl, token);
  }
  
  public getChatThreadsService(token: string): ChatThreadsService {
    return new ChatThreadsService(this.apiUrl, token);
  }
  
  public getContactsService(token: string): ContactsService {
    return new ContactsService(this.apiUrl, token);
  }
  
  public getContractsService(token: string): ContractsService {
    return new ContractsService(this.apiUrl, token);
  }
  
  public getDataSheetsService(token: string): DataSheetsService {
    return new DataSheetsService(this.apiUrl, token);
  }
  
  public getDeliveriesService(token: string): DeliveriesService {
    return new DeliveriesService(this.apiUrl, token);
  }
  
  public getDeliveryPlacesService(token: string): DeliveryPlacesService {
    return new DeliveryPlacesService(this.apiUrl, token);
  }
  
  public getDeliveryQualitiesService(token: string): DeliveryQualitiesService {
    return new DeliveryQualitiesService(this.apiUrl, token);
  }
  
  public getItemGroupsService(token: string): ItemGroupsService {
    return new ItemGroupsService(this.apiUrl, token);
  }
  
  public getNewsArticlesService(token: string): NewsArticlesService {
    return new NewsArticlesService(this.apiUrl, token);
  }
  
  public getOperationReportsService(token: string): OperationReportsService {
    return new OperationReportsService(this.apiUrl, token);
  }
  
  public getOperationsService(token: string): OperationsService {
    return new OperationsService(this.apiUrl, token);
  }
  
  public getProductPricesService(token: string): ProductPricesService {
    return new ProductPricesService(this.apiUrl, token);
  }
  
  public getProductsService(token: string): ProductsService {
    return new ProductsService(this.apiUrl, token);
  }
  
  public getPublicFilesService(token: string): PublicFilesService {
    return new PublicFilesService(this.apiUrl, token);
  }
  
  public getSignAuthenticationServicesService(token: string): SignAuthenticationServicesService {
    return new SignAuthenticationServicesService(this.apiUrl, token);
  }
  
  public getUnreadsService(token: string): UnreadsService {
    return new UnreadsService(this.apiUrl, token);
  }
  
  public getUserGroupsService(token: string): UserGroupsService {
    return new UserGroupsService(this.apiUrl, token);
  }
  
  public getWeekDeliveryPredictionsService(token: string): WeekDeliveryPredictionsService {
    return new WeekDeliveryPredictionsService(this.apiUrl, token);
  }
  
}
