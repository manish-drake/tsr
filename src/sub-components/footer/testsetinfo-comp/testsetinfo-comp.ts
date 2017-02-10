import { Component } from '@angular/core';

@Component({
  selector: 'testsetinfo-comp',
  templateUrl: 'testsetinfo-comp.html'
})
export class TestsetinfoComp {

  batteryLevel: any = "80%";

  constructor() {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestsetinfoComp');
  }

}
