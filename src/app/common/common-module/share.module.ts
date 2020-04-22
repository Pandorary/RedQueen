import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { StoreModule } from '../../store/store.module';
import { TemplateModule } from '../../template/template.module';
import { TestModule } from '../../test/test.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule,
    TemplateModule,
    TestModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN }
  ],
})
export class ShareModule { }
