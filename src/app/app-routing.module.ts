import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreCenterComponent } from './store/store-center/store-center.component';
import { StoreTestComponent } from './test/store-test.component';


const routes: Routes = [
  {
    path:'store',
    component:StoreCenterComponent,
    loadChildren:'./store/store.module#StoreModule'
  },
  {
    path:'template',
    // component:StoreHeroComponent,
    loadChildren:'./template/template.module#TemplateModule'
  },
  {
    path:'test',
    component:StoreTestComponent,
    loadChildren:'./test/test.module#TestModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
