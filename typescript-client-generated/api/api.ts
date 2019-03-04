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

export default new class Api {

  private apiUrl = "http://localhost";
  public configure(baseUrl: string) {
    this.apiUrl = baseUrl;
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
  
  public getDeliveryPlacesService(token: string): DeliveryPlacesService {
    return new DeliveryPlacesService(this.apiUrl, token);
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
  
  public getSignAuthenticationServicesService(token: string): SignAuthenticationServicesService {
    return new SignAuthenticationServicesService(this.apiUrl, token);
  }
  
}