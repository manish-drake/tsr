import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from 'ionic-angular';
import { AviationHistoryModal } from "../../pages/aviation-history-modal/aviation-history-modal";

@Component({
  selector: 'aviation-vswr-comp',
  templateUrl: 'aviation-vswr-comp.html'
})
export class AviationVSWRComp {

  constructor(
    private _router: Router,
    private modalCtrl: ModalController
  ) { }

  markers: any[] = [{ defaultmarker: 0 }]

  selectedBand: any;

  onBandSelected(ev) {
    this.selectedBand = ev;
  }

  onClose() {
    this._router.navigate(['antenna', 'Antenna'])
      .then(succ => console.log("Detail Closed: " + succ))
      .catch(err => console.log("Error Closing Detail: " + err));
  }

  openHistory() {
    let modal = this.modalCtrl.create(AviationHistoryModal);
    modal.present();
  }

  isRunning: boolean = false;

  onRun() {
    this.isRunning = !this.isRunning;
  }

  onMarkerAction1(ev) {
    console.log(ev);
    switch (ev) {
      case "add":
        this.markers.push({ name: this.selectedBand.name, start: this.selectedBand.start, stop: this.selectedBand.stop, middle: this.selectedBand.middle, defaultmarker: this.selectedBand.start });
      case "remove":
        this.markers.splice(this.markers.length - 1, 1);
    }
  }

}
