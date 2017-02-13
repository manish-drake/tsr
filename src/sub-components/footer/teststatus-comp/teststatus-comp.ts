import { Component, Input } from '@angular/core';

@Component({
  selector: 'teststatus-comp',
  templateUrl: 'teststatus-comp.html'
})
export class TeststatusComp {

  @Input() data: any;

  constructor() { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeststatusComp');
  }

}
