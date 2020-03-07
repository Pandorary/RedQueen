import { NgModule } from '@angular/core';

import {
    PanelMenuModule
} from 'primeng/panelmenu';
import { SliderModule } from 'primeng/slider';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';
import { EditorModule } from 'primeng/editor';
import { FocusTrapModule } from 'primeng/focustrap';

@NgModule({
    exports: [
        PanelMenuModule,
        SliderModule,
        TableModule,
        InputTextModule,
        ButtonModule,
        DialogModule,
        DropdownModule,
        AutoCompleteModule,
        CalendarModule,
        MultiSelectModule,
        EditorModule,
        FocusTrapModule,
    ]
})
export class PrimeNGModule { }