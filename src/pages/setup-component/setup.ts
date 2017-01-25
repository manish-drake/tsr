import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-setup',
  templateUrl: 'setup.html'
})
export class SetupPage {

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
