import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-center',
  templateUrl: './template-center.component.html',
  styleUrls: ['./template-center.component.css']
})
export class TemplateCenterComponent implements OnInit {
  title='MyHeroes';
  constructor() { }

  ngOnInit(): void {
  }

}
