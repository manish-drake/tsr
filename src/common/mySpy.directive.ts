import { Directive, OnInit, OnDestroy, ElementRef } from '@angular/core'

@Directive({selector: '[mySpy]'})
export class SpyDirective implements OnInit, OnDestroy {

  constructor(private elem: ElementRef) { }

  ngOnInit()    { console.log(this.elem.nativeElement) }

  ngOnDestroy() { this.logIt(`onDestroy`); }

  private logIt(msg: string) {
    console.log(`Spy #${msg} ${msg}`);
  }
}
