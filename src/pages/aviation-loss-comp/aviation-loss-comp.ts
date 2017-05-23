import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from 'ionic-angular';
import { AviationHistoryModal } from "../../pages/aviation-history-modal/aviation-history-modal";
import { FileFactory } from "../../services/io/file-factory";
import { UserService } from '../../services/test-set/user.service';

/**
 * Generated class for the AviationLossCompPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'aviation-loss-comp',
  templateUrl: 'aviation-loss-comp.html',
})
export class AviationLossComp {

  constructor(
    private _router: Router,
    private modalCtrl: ModalController,
    private _svcUser: UserService,
    private _fileFactory: FileFactory,
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
    let modal = this.modalCtrl.create(AviationHistoryModal, { filename: "AviaitionLossHistory" });
    modal.present();
  }

  selectedMarkerIndex: number = 0;

  onMarkerSelected(ev) {
    this.selectedMarkerIndex = ev;
  }

  onMarkerAction(ev) {
    console.log(ev);
    switch (ev) {
      case "add":
        if (this.markers.length < 4) {
          this.markers.push({ name: this.selectedBand.name, start: this.selectedBand.start, stop: this.selectedBand.stop, middle: this.selectedBand.middle, markerval: this.selectedBand.start });
          this.selectedMarkerIndex = this.markers.length - 1;
        }
        break;
      case "remove":
        if (this.markers.length > 1) {
          this.markers.splice(this.selectedMarkerIndex, 1);
          this.selectedMarkerIndex = this.markers.length - 1;
        }
        break;
      case "increase":
        if (this.markers[this.selectedMarkerIndex].markerval < this.selectedBand.stop) {
          this.markers[this.selectedMarkerIndex].markerval = this.markers[this.selectedMarkerIndex].markerval + 1;
        }
        break;
      case "decrease":
        if (this.markers[this.selectedMarkerIndex].markerval > this.selectedBand.start) {
          this.markers[this.selectedMarkerIndex].markerval = this.markers[this.selectedMarkerIndex].markerval - 1;
        }
        break
    }
  }

  isRunning: boolean = false;

  onRun() {
    this.isRunning = !this.isRunning;
  }


  isGraphScaleChecked: boolean;

  onGraphScaleChecked(ev) {
    this.isGraphScaleChecked = ev;
  }

  saveRecord() {
    let collection: any[] = [];
    this._fileFactory.readfile(this._fileFactory.dataDirectory(), "AviaitionLossHistory").map(result => {
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
    this._fileFactory.saveFile(this._fileFactory.dataDirectory(), "AviaitionLossHistory", JSON.stringify(collection));
  }

}
