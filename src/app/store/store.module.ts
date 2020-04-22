import { NgModule } from '@angular/core';
import { StoreCenterComponent } from './store-center/store-center.component';
import { StoreIndexComponent } from './store-index/store-index.component';
import { StoreRoutingModule } from './store-routing.module';
import { StoreCreateComponent } from './store-create/store-create.component';
import { IconService } from './service/iconservice';
import { EventService } from './service/eventservice';
import { CountryService } from './service/countryservice';
import { CarService } from './service/carservice';
import { LoginComponent } from './login/login.component';
import { DirectiveTestDirective } from './directives/directive-test.directive';
import { CoreModule } from '../common/common-module/core.module';

@NgModule({
  declarations: [
    StoreCenterComponent,
    StoreIndexComponent,
    StoreCreateComponent,
    LoginComponent,
    DirectiveTestDirective,
  ],
  imports: [
    StoreRoutingModule,
    CoreModule,
  ],
  exports:[
    // ReactiveFormsModule
  ],
  providers: [
    CarService, CountryService, EventService, IconService
  ],
})
export class StoreModule { }
