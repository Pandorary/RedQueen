import { Component, OnInit } from '@angular/core';
import { isObject } from 'util';

@Component({
  selector: 'app-store-demo1',
  templateUrl: './store-demo1.component.html',
  styleUrls: ['./store-demo1.component.css']
})
export class StoreDemo1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let n1 = this.test;
    let n3 = this.test.test2(3);
    let n2 = this.test.getValue();
    // 柯里化
    let s = this.add(4)(5);
    let ss = this.add(4, 5)(6);
    // 测试数字是否为object
    alert("数字是object?"+isObject(3));
    alert("string是object?"+isObject('我爱你'));
    alert([2,3,4].reduce((a,b)=>{
      return a+b
    }));
  }

  public test = (function () {
    let value = 0;
    return {
      test2: function (params: any) {
        value += typeof params === 'number' ? params : 1;
      },
      getValue: function () {
        return value;
      }
    }
  }())

  testcallbacknumber = 8;

  // 回调函数
  dianji() {
    let i = 1;
    let x = [1, 2];
    x.push(i++);
    let that = this;//必须用that接收this再传给回调函数
    // this.test2(x, function (result) {
    //   // alert(result + this.testcallbacknumber); 回调函数受闭包影响,this不能指向全局
    //   alert(result + that.testcallbacknumber);
    // });
    this.test2(x,this.demotemp);
  }
  test2(counts: Array<any>, demoTemp) {
    demoTemp(3 + counts[0],[this.testcallbacknumber,20]);
  }

  demotemp(result,...args){
    args.forEach(item =>{
      alert(result+=item);
    })
  }

  //  科里化
  add(n, ...args) {
    var _args = Array.prototype.slice.call(arguments);
    return function (...args) {
      _args.push(...arguments);
      return _args.reduce(function (a, b) {
        return a + b;
      })
    }
  }

  // 测试join
  testJoin(){
    let testJoin=[
      'number = 1',
      'age = 16',
      "sex = '男'"
    ].join("&")
    
  
  }
 
}
