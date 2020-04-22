import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDirectiveTest]'
})
export class DirectiveTestDirective {
@Input('appDirectiveTest') color:string;
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.setBackgroundColor(this.color);
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setBackgroundColor(null);
  }

  setBackgroundColor(color:string){
    this.el.nativeElement.style.backgroundColor = color;
  }
}
