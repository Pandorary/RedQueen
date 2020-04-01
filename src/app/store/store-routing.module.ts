import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreCenterComponent } from './store-center/store-center.component';
import { CommonModule } from '@angular/common';
import { StoreIndexComponent } from './store-index/store-index.component';
import { StoreCreateComponent } from './store-create/store-create.component';
import { StoreTestComponent } from './store-test/store-test.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'',
    component:StoreCenterComponent,
    children:[
    {
      path:'storeIndex',
      component:StoreIndexComponent
    },
    {
      path:'storeTest',
      component:StoreTestComponent
    },
    {
      path:'storeCreate',
      component:StoreCreateComponent
    },
    {
      path:'login',
      component:LoginComponent
    }
  ]
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports: []
})
export class StoreRoutingModule { }
