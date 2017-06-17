import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { Logger } from "../../../services/logging/logger";

@Component({
  selector: 'test-setup',
  templateUrl: 'test-setup.html'
})
export class TestSetupPage {

  constructor(
    public viewCtrl: ViewController,
    private _logger: Logger
  ) { }

  pwrValue: any;
  ionViewDidLoad() {
    this._logger.Info('Setup page loaded');
    this.pwrValue = -39.0
  }
  isPowerClicked: boolean = false;

  power() {
    this.isPowerClicked = !this.isPowerClicked;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
