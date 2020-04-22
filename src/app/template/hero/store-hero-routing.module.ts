import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent } from './hero.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CommonModule } from '@angular/common';
import { TemplateCenterComponent } from '../template-center/template-center.component';


const routes: Routes = [
  {
    path: '',
    component: TemplateCenterComponent,
    children: [
      {
        path: 'productList',
        component: ProductListComponent
      },
      {
        path: 'storeHero',
        component: HeroComponent
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreHeroRoutingModule { }
