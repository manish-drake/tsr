import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { Logger } from "../../services/logging/logger";

@Component({
  selector: 'page-help',
  templateUrl: 'help.html'
})
export class HelpPage {

  constructor(
    public viewCtrl: ViewController,
    private _logger: Logger
  ) { }

  ionViewDidLoad() {
    console.log('Hello HelpPage Page');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


}
