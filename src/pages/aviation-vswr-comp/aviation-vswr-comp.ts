import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from 'ionic-angular';
import { AviationHistoryModal } from "../../pages/aviation-history-modal/aviation-history-modal";
import { FileFactory } from "../../services/io/file-factory";
import { UserService } from '../../services/test-set/user.service';

@Component({
  selector: 'aviation-vswr-comp',
  templateUrl: 'aviation-vswr-comp.html'
})
export class AviationVSWRComp {

  constructor(
    private _router: Router,
    private modalCtrl: ModalController,
    private _fileFactory: FileFactory,
    private _svcUser: UserService
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
    let modal = this.modalCtrl.create(AviationHistoryModal, { filename: "AviaitionVSWRHistory" });
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

  isGraphScaleChecked: boolean;

  onGraphScaleChecked(ev) {
    this.isGraphScaleChecked = ev;
  }

  saveRecord() {
    let collection: any[] = [];
    this._fileFactory.readfile(this._fileFactory.dataDirectory(), "AviaitionVSWRHistory").map(result =>{
      collection = JSON.parse(result);
    });
    let dateTime = new Date();
    let userName: string;
    this._svcUser.getCurrentUser().subscribe(val => userName = val.name);
    let range: string = this.isGraphScaleChecked ? "-6,-18" : "0,-30";
    let data: any = "";
    let record: any = {
      datetime: dateTime,
      username: userName,
      markers: this.markers,
      range: range,
      band: this.selectedBand,
      data: data
    }
    collection.push(record);
    this._fileFactory.saveFile(this._fileFactory.dataDirectory(), "AviaitionVSWRHistory", JSON.stringify(collection));
  }

}
