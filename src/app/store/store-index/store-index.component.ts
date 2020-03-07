import { Component } from '@angular/core';
import { IProductItem } from '../domain/store-model';
import { SelectItem } from '../api/selectitem';
import { FilterUtils } from '../utils/filterutils';

@Component({
  selector: 'app-store-index',
  templateUrl: './store-index.component.html',
  styleUrls: ['./store-index.component.css']
})
export class StoreIndexComponent {
  // allColumns = ['识别码', '名称', '分类名称', '品牌', '数量', '规格', '使用状态', '折旧时长', '使用频率', '满意度',
  //   '是否废弃', '能否替代', '可替代的物品', '可替代物品来源', '备注', '创建时间', '创建人', '修改时间', '修改人'];
  allColumns = [
    {width:'8em', field: 'identification', header: 'identification' },
    {width:'8em', field: 'name', header: 'name' },
    {width:'8em', field: 'categoryName', header: 'categoryName' },
    {width:'8em', field: 'brand', header: 'brand' },
    {width:'10em', field: 'quantity', header: 'quantity' },
    {width:'8em', field: 'specification', header: 'specification' },
    {width:'10em', field: 'status', header: 'status' },
    {width:'10em', field: 'depreciationDuration', header: 'depreciationDuration' },
    {width:'8em', field: 'frequency', header: 'frequency' },
    {width:'10em', field: 'satisfaction', header: 'satisfaction' },
    {width:'8em', field: 'isAbandon', header: 'isAbandon' },
    {width:'10em', field: 'canReplace', header: 'canReplace' },
    {width:'8em', field: 'replaceItem', header: 'replaceItem' },
    {width:'8em', field: 'replaceItemSource', header: 'replaceItemSource' },
    {width:'8em', field: 'remark', header: 'remark' },
    {width:'8em', field: 'createTime', header: 'createTime' },
    {width:'8em', field: 'createBy', header: 'createBy' },
    // {width:'8em', field: 'updateTime', header: 'updateTime' },
    // {width:'8em', field: 'updateBy', header: 'updateBy' }
  ];

  datas: IProductItem[];

  cols: any[];

  brands: SelectItem[];

  colors: SelectItem[];

  yearFilter: number;

  displayDialog: boolean;

  productItem: IProductItem = {};

  selectedProductItem: IProductItem;

  newProductItem: boolean;

  constructor() { }

  ngOnInit(): void {
    this.autoCreateData();

    this.brands = [
      { label: 'All Brands', value: null },
      { label: 'Audi', value: 'Audi' },
      { label: 'BMW', value: 'BMW' },
      { label: 'Fiat', value: 'Fiat' },
      { label: 'Honda', value: 'Honda' },
      { label: 'Jaguar', value: 'Jaguar' },
      { label: 'Mercedes', value: 'Mercedes' },
      { label: 'Renault', value: 'Renault' },
      { label: 'VW', value: 'VW' },
      { label: 'Volvo', value: 'Volvo' }
    ];

    this.colors = [
      { label: 'White', value: 'White' },
      { label: 'Green', value: 'Green' },
      { label: 'Silver', value: 'Silver' },
      { label: 'Black', value: 'Black' },
      { label: 'Red', value: 'Red' },
      { label: 'Maroon', value: 'Maroon' },
      { label: 'Brown', value: 'Brown' },
      { label: 'Orange', value: 'Orange' },
      { label: 'Blue', value: 'Blue' }
    ];

    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' },
      { field: 'price', header: 'Price' }
    ];
  }

  quatityFilter(value, filter, matchMode) {
    FilterUtils[matchMode] = (value, filter): boolean => {
      debugger;
      if (filter === undefined || filter === null || filter.trim() === '') {
        return true;
      }

      if (value === undefined || value === null) {
        return false;
      }

      return parseInt(filter) > value;
    }
  }

  autoCreateData() {
    let dataTemp = []
    for (let i = 0; i < 108; i++) {
      let productItem: IProductItem = {};
      productItem.identification = Math.round((Math.random() * 10000000)).toString();
      productItem.name = Math.round((Math.random() * 1000)) + 'abc';
      productItem.categoryName = '1';
      productItem.brand = Math.round((Math.random() * 1000)) + 'brand';
      productItem.quantity = Math.round(Math.random() * 100)
      productItem.specification = '1';
      productItem.status = 1;
      productItem.depreciationDuration = Math.round(Math.random() * 100);
      productItem.frequency = Math.round( Math.random() * 10);
      productItem.satisfaction = i;
      productItem.isAbandon = 0;
      productItem.canReplace = 0;
      productItem.replaceItem = '';
      productItem.replaceItemSource = '';
      productItem.remark = '1';
      productItem.createTime = new Date().toDateString();
      productItem.createBy = 'RedQueen';
      productItem.updateTime = new Date().toDateString();
      productItem.updateBy = 'RedQueen';
      dataTemp.push(productItem);
    }
    this.datas = dataTemp;
  }

  showDialogToAdd() {
    this.newProductItem = true;
    this.productItem = {};
    this.displayDialog = true;
  }

  save() {
    let datas = [...this.datas];
    if (this.newProductItem)
      datas.push(this.productItem);
    else
      datas[this.datas.indexOf(this.selectedProductItem)] = this.productItem;

    this.datas = datas;
    this.productItem = null;
    this.displayDialog = false;
  }

  delete() {
    let index = this.datas.indexOf(this.selectedProductItem);
    this.datas = this.datas.filter((val, i) => i != index);
    this.productItem = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newProductItem = false;
    this.productItem = this.cloneCar(event.datas);
    this.displayDialog = true;
  }

  cloneCar(c: IProductItem): IProductItem {
    let productItem = {};
    for (let prop in c) {
      productItem[prop] = c[prop];
    }
    return productItem;
  }
}




