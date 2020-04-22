import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';
import { TemplateCenterComponent } from '../template-center/template-center.component';
import { StoreHeroRoutingModule } from './store-hero-routing.module';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
@NgModule({
  declarations: [
    HeroDetailComponent,
    HeroComponent,
    ProductListComponent,
    TopBarComponent,
    TemplateCenterComponent
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
