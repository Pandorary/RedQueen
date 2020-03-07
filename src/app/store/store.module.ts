import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';

import { StoreCenterComponent } from './store-center/store-center.component';
import { StoreIndexComponent } from './store-index/store-index.component';
import { RouterModule } from '@angular/router';
import { StoreRoutingModule } from './store-routing.module';
import { StoreCreateComponent } from './store-create/store-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreTestComponent } from './store-test/store-test.component';
import { PrimeNGModule } from '../primeng.module';
import { IconService } from './service/iconservice';
import { NodeService } from './service/nodeservice';
import { EventService } from './service/eventservice';
import { CountryService } from './service/countryservice';
import { CarService } from './service/carservice';


@NgModule({
  declarations: [
    StoreCenterComponent,
    StoreIndexComponent,
    StoreCreateComponent,
    StoreTestComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    StoreRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNGModule
  ],
  // providers: [
  //   { provide: LocationStrategy, useClass: HashLocationStrategy },
  //   CarService, CountryService, EventService, NodeService, IconService
  // ],
  providers: [
    CarService, CountryService, EventService, NodeService, IconService
  ],
})
export class StoreModule { }
