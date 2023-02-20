import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHtmlElement]'
})
export class HtmlElementDirective {
  @Input() description=''
  constructor(
    private _el: ElementRef
  ) { }

  ngOnInit(): void {
    this._el.nativeElement.innerHTML=this.description;  
  }


}
