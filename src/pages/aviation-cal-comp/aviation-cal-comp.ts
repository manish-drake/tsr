import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Logger } from "../../services/logging/logger";

/**
 * Generated class for the AviationCalCompPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'aviation-cal-comp',
  templateUrl: 'aviation-cal-comp.html',
})
export class AviationCalComp {

  constructor(
    private _router: Router,
    private _logger: Logger
  ) { }

  calTypes: any[] = [
    { name: "SHORT", status: "UNCAL", date: "--/--/--" },
    { name: "OPEN", status: "UNCAL", date: "--/--/--" },
    { name: "LOAD", status: "UNCAL", date: "--/--/--" },
    { name: "THRU", status: "UNCAL", date: "--/--/--" }
  ]


  onClose() {
    this._router.navigate(['antenna', 'Antenna'])
      .then(succ => this._logger.Debug("Detail Closed: " + succ))
      .catch(err => this._logger.Error("Error Closing Detail: " + err));
  }

  ionViewDidLoad() {
    this._logger.Info('ionViewDidLoad AviationCalCompPage');
  }

  selectedType: any = this.calTypes[0];

  onTypeChanged(ev) {
    this.selectedType = ev;
  }

  onTypeCardSelected(e) {
    this.selectedType = e;
  }

  isRunning: boolean = false;

  onRun() {
    this.isRunning = !this.isRunning;
  }
}
