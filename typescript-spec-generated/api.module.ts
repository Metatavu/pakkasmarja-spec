import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { ChatThreadsService } from './api/chatThreads.service';
import { ContactsService } from './api/contacts.service';
import { ContractsService } from './api/contracts.service';
import { DeliveryPlacesService } from './api/deliveryPlaces.service';
import { ItemGroupsService } from './api/itemGroups.service';
import { OperationReportsService } from './api/operationReports.service';
import { OperationsService } from './api/operations.service';
import { SignAuthenticationServicesService } from './api/signAuthenticationServices.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    ChatThreadsService,
    ContactsService,
    ContractsService,
    DeliveryPlacesService,
    ItemGroupsService,
    OperationReportsService,
    OperationsService,
    SignAuthenticationServicesService ]
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
