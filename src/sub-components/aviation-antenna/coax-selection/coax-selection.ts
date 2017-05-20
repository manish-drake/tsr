import { Component, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the CoaxSelectionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'coax-selection',
  templateUrl: 'coax-selection.html',
})
export class CoaxSelectionComp {

  @Output() onCoaxChanged = new EventEmitter<any>();

  constructor() { }

  ngAfterViewInit() {
    this.onCoaxChanged.emit(this.coaxTypes[0]);
  }

  coaxTypes: any[] = [
    { name: "PE Solid", velocity: 0.66 },
    { name: "PE Foam", velocity: 0.85 },
    { name: "Teflon", velocity: 0.70 },
    { name: "Teflon foam", velocity: 0.80 },
    { name: "User", velocity: null }
  ]

  selectedCoax: any = this.coaxTypes[0];

  onCoaxChange(ev) {
    this.selectedCoax = ev;
    this.onCoaxChanged.emit(ev);
  }

}
