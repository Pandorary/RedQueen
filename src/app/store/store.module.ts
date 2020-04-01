import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';

import { StoreCenterComponent } from './store-center/store-center.component';
import { StoreIndexComponent } from './store-index/store-index.component';
import { RouterModule } from '@angular/router';
import { StoreRoutingModule } from './store-routing.module';
import { StoreCreateComponent } from './store-create/store-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreTestComponent } from './store-test/store-test.component';
import { IconService } from './service/iconservice';
import { EventService } from './service/eventservice';
import { CountryService } from './service/countryservice';
import { CarService } from './service/carservice';
import { LoginComponent } from './login/login.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { StoreTestService } from './store-test/store-test.service';


@NgModule({
  declarations: [
    StoreCenterComponent,
    StoreIndexComponent,
    StoreCreateComponent,
    StoreTestComponent,
    LoginComponent,
    StoreTestService
  ],
  imports: [
    CommonModule,
    RouterModule,
    StoreRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule
  ],
  exports:[
    // ReactiveFormsModule
  ],
  providers: [
    CarService, CountryService, EventService, IconService
  ],
})
export class StoreModule { }
