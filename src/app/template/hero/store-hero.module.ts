import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';
import { TemplateCenterComponent } from '../template-center/template-center.component';
import { StoreHeroRoutingModule } from './store-hero-routing.module';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [
    HeroDetailComponent,
    HeroesComponent,
    ProductListComponent,
    TopBarComponent,
    TemplateCenterComponent,
    DashboardComponent
  ],
  imports: [
    HttpClientModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    StoreHeroRoutingModule,
    CommonModule
  ]
})
export class StoreHeroModule { }
