import { Component, OnInit } from '@angular/core';
export interface Car {
  vin;
  year;
  brand;
  color;
}
@Component({
  selector: 'app-store-test',
  templateUrl: './store-test.component.html',
  styleUrls: ['./store-test.component.css']
})
export class StoreTestComponent implements OnInit {
  title = 'voyagerTest';
  cars: Car[];
  val1: number;

  val2: number = 50;

  val3: number;

  val4: number;

  val5: number;

  rangeValues: number[] = [20,80];
  constructor() { }

  ngOnInit() {
  }

}
