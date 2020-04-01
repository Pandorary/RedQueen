import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreCenterComponent } from './store/store-center/store-center.component';


const routes: Routes = [
  {
    path:'store',
    component:StoreCenterComponent,
    loadChildren:'./store/store.module#StoreModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
