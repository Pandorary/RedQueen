import { Component, Inject, forwardRef } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, AbstractControl, FormControl } from '@angular/forms'

@Component({
  selector: 'app-store-create',
  templateUrl: './store-create.component.html',
  styleUrls: ['./store-create.component.css']
})
export class StoreCreateComponent {
  constructor(
    @Inject(forwardRef(() => FormBuilder)) private formBuilder: FormBuilder
  ) {
  }
  
}

