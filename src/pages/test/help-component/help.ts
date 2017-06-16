import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { Logger } from "../../../services/logging/logger";

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
    this._logger.Info('Help page loaded');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


}
