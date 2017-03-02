import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-setuptest',
  templateUrl: 'setuptest.html'
})
export class SetupTestPage {

  constructor(public viewCtrl: ViewController) { }

  pwrValue: any;
  ionViewDidLoad() {
    this.pwrValue =-39.0
    console.log('Hello SetupPage Page');
  }
  isPowerClicked: boolean = false;

  power() {
    this.isPowerClicked = !this.isPowerClicked;
  }

  dismiss() {
        this.viewCtrl.dismiss();
    }

}
