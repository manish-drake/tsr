import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { Logger } from "../../../services/logging/logger";

@Component({
  selector: 'test-help',
  templateUrl: 'test-help.html'
})
export class TestHelpPage {

  constructor(
    public viewCtrl: ViewController,
    private _logger: Logger
  ) { }

  ionViewDidLoad() {
    this._logger.Info('Help page loaded');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


}
