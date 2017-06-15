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
    console.log('ionViewDidLoad GuidePage');
  }

  onClose() {
    this.viewCtrl.dismiss()
  }

}
