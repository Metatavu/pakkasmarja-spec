import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { ChatGroupsService } from './api/chatGroups.service';
import { ChatMessagesService } from './api/chatMessages.service';
import { ChatThreadsService } from './api/chatThreads.service';
import { ContactsService } from './api/contacts.service';
import { ContractsService } from './api/contracts.service';
import { DeliveriesService } from './api/deliveries.service';
import { DeliveryPlacesService } from './api/deliveryPlaces.service';
import { DeliveryQualitiesService } from './api/deliveryQualities.service';
import { ItemGroupsService } from './api/itemGroups.service';
import { NewsArticlesService } from './api/newsArticles.service';
import { OperationReportsService } from './api/operationReports.service';
import { OperationsService } from './api/operations.service';
import { ProductPricesService } from './api/productPrices.service';
import { ProductsService } from './api/products.service';
import { PublicFilesService } from './api/publicFiles.service';
import { SignAuthenticationServicesService } from './api/signAuthenticationServices.service';
import { UnreadsService } from './api/unreads.service';
import { UserGroupsService } from './api/userGroups.service';
import { WeekDeliveryPredictionsService } from './api/weekDeliveryPredictions.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    ChatGroupsService,
    ChatMessagesService,
    ChatThreadsService,
    ContactsService,
    ContractsService,
    DeliveriesService,
    DeliveryPlacesService,
    DeliveryQualitiesService,
    ItemGroupsService,
    NewsArticlesService,
    OperationReportsService,
    OperationsService,
    ProductPricesService,
    ProductsService,
    PublicFilesService,
    SignAuthenticationServicesService,
    UnreadsService,
    UserGroupsService,
    WeekDeliveryPredictionsService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
