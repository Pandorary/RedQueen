import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// import { PrimeNGModule } from './primeng.module';
import { StoreModule } from './store/store.module';


import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { CarService } from './store/service/carservice';
import { CountryService } from './store/service/countryservice';
import { EventService } from './store/service/eventservice';
import { NodeService } from './store/service/nodeservice';
import { IconService } from './store/service/iconservice';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    StoreModule
  ],
  // providers: [
  //   CarService, CountryService, EventService, NodeService, IconService
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
