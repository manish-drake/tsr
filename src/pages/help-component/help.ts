import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-help',
  templateUrl: 'help.html'
})
export class HelpPage {

  constructor(public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('Hello HelpPage Page');
  }

  dismiss() {
        this.viewCtrl.dismiss();
    }


}
