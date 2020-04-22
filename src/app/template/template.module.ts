import { NgModule } from '@angular/core';
import { CoreModule } from '../common/common-module/core.module';
import { StoreHeroModule } from './hero/store-hero.module';
import { TemplateRoutingModule } from './template-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CoreModule,
    TemplateRoutingModule,
    StoreHeroModule,
  ]
})
export class TemplateModule { }
