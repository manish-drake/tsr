import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from 'ionic-angular';
import { AviationHistoryModal } from "../../pages/aviation-history-modal/aviation-history-modal";
import { FileFactory } from "../../services/io/file-factory";
import { UserService } from '../../services/test-set/user.service';

/**
 * Generated class for the AviationDtfCompPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'aviation-dtf-comp',
  templateUrl: 'aviation-dtf-comp.html',
})
export class AviationDtfComp {

  constructor(
    private _router: Router,
    private modalCtrl: ModalController,
    private _svcUser: UserService,
    private _fileFactory: FileFactory,
  ) { }

  markers: any[] = [{ markerval: 0 }];

  onClose() {
    this._router.navigate(['antenna', 'Antenna'])
      .then(succ => console.log("Detail Closed: " + succ))
      .catch(err => console.log("Error Closing Detail: " + err));
  }

  isLengthUnitChecked: boolean;

  onLengthUnitChange(ev) {
    this.isLengthUnitChecked = ev;
  }

  openHistory() {
    let modal = this.modalCtrl.create(AviationHistoryModal, { filename: "AviaitionDtfHistory" });
    modal.present();
  }

  selectedMarkerIndex: number = 0;

  onMarkerSelected(ev) {
    this.selectedMarkerIndex = ev;
    alert(this.selectedMarkerIndex);
  }

  onMarkerAction(ev) {
    console.log(ev);
    switch (ev) {
      case "add":
        if (this.markers.length < 4) {
          this.markers.push({ markerval: 0 });
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
        let max: number = this.isLengthUnitChecked ? 49 : 15;
        if (this.markers[this.selectedMarkerIndex].markerval < max) {
          this.markers[this.selectedMarkerIndex].markerval = this.markers[this.selectedMarkerIndex].markerval + 1;
        }
        break;
      case "decrease":
        if (this.markers[this.selectedMarkerIndex].markerval > 0) {
          this.markers[this.selectedMarkerIndex].markerval = this.markers[this.selectedMarkerIndex].markerval - 1;
        }
        break
    }
  }

  isRunning: boolean = false;

  onRun() {
    this.isRunning = !this.isRunning;
  }

  selectedCoax: any;

  onCoaxChanged(ev) {
    this.selectedCoax = ev;
  }

  isGraphScaleChecked: boolean;

  onGraphScaleChecked(ev) {
    this.isGraphScaleChecked = ev;
  }

  saveRecord() {
    let collection: any[] = [];
    this._fileFactory.readfile(this._fileFactory.dataDirectory(), "AviaitionDtfHistory").map(result => {
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
      coax: this.selectedCoax,
      data: data
    }
    collection.push(record);
    this._fileFactory.saveFile(this._fileFactory.dataDirectory(), "AviaitionDtfHistory", JSON.stringify(collection));
  }
}
