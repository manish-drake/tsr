import { Component, Input, Output, EventEmitter } from '@angular/core';

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

  @Input() selectedCoaxIndex: any;

  @Output() onCoaxChanged = new EventEmitter<{ index: number, obj: any }>();

  constructor() { }

  ngAfterViewInit() {
    this.onCoaxChange(0);
  }

  coaxTypes: any[] = [
    { name: "PE Solid", velocity: 0.66 },
    { name: "PE Foam", velocity: 0.85 },
    { name: "Teflon", velocity: 0.70 },
    { name: "Teflon foam", velocity: 0.80 },
    { name: "User", velocity: null }
  ]

  onCoaxChange(i) {
    let e = this.coaxTypes[i];
    this.onCoaxChanged.emit({ index: i, obj: e });
  }

}
