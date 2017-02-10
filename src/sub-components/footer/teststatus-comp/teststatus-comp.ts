import { Component } from '@angular/core';


@Component({
  selector: 'teststatus-comp',
  templateUrl: 'teststatus-comp.html'
})
export class TeststatusComp {

  testStatus:string = "beforerun"

  constructor() {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeststatusComp');
  }

}
