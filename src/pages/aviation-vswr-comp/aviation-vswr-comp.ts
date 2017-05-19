import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from 'ionic-angular';
import { AviationHistoryModal } from "../../pages/aviation-history-modal/aviation-history-modal";
import { FileFactory } from "../../services/io/file-factory"

@Component({
  selector: 'aviation-vswr-comp',
  templateUrl: 'aviation-vswr-comp.html'
})
export class AviationVSWRComp {

  constructor(
    private _router: Router,
    private modalCtrl: ModalController,
    private _fileFactory: FileFactory
  ) { }

  markers: any[] = [{ markerval: 0 }]

  selectedBand: any;

  onBandSelected(ev) {
    this.selectedBand = ev;
    this.markers[0].markerval = ev.markerval;
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

  onMarkerAction(ev) {
    switch (ev) {
      case "add":
        if (this.markers.length < 4) {
          this.markers.push({ name: this.selectedBand.name, start: this.selectedBand.start, stop: this.selectedBand.stop, middle: this.selectedBand.middle, markerval: this.selectedBand.start });
        }
        break;
      case "remove":
        if (this.markers.length > 1) {
          this.markers.splice(this.markers.length - 1, 1);
        }
        break;
      case "increase":
        if (this.markers[0].markerval < this.selectedBand.stop) {
          this.markers[0].markerval = this.markers[0].markerval + 1;
        }
        break;
      case "decrease":
        if (this.markers[0].markerval > this.selectedBand.start) {
          this.markers[0].markerval = this.markers[0].markerval - 1;
        }
        break
    }
  }

  saveRecord() {
    this._fileFactory.saveFile("", "AviaitionVSWRHistory", "[{}]");
  }

}
