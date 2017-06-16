import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { Logger } from "../../services/logging/logger";

@Component({
  selector: 'page-guide',
  templateUrl: 'guide.html'
})
export class GuidePage {

  paramName: any;

  constructor(
    private viewCtrl: ViewController,
    private params: NavParams,
    private _logger: Logger
  ) { this.paramName = params.get("param"); }

  ionViewDidLoad() {
    this._logger.Info('Guide page loaded');
  }

  onClose() {
    this.viewCtrl.dismiss();
  }

}
