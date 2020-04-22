import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/** 配置 angular i18n **/
import { registerLocaleData, CommonModule } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { CoreModule } from './common/common-module/core.module';
import { ShareModule } from './common/common-module/share.module';
import { ManageModule } from './common/common-module/manage.module';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    ShareModule,
    ManageModule,
    BrowserModule, // 父组件加载后子组件不用加载
    BrowserAnimationsModule // 父组件加载后子组件不用加载
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
