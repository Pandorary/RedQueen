import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TemplateCenterComponent } from './template-center/template-center.component';


const routes: Routes = [
  {
    path: 'hero',
    // component: TemplateCenterComponent,
    loadChildren: './hero/store-hero.module#StoreHeroModule'
  }

];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
