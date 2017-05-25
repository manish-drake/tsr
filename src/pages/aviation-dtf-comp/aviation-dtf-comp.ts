import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, Platform, ToastController } from 'ionic-angular';
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
    private platform: Platform,
    private toastCtrl: ToastController) { }

  markers: any[] = [{ markerval: 0.0 }];

  onClose() {
    this._router.navigate(['antenna', 'Antenna'])
      .then(succ => console.log("Detail Closed: " + succ))
      .catch(err => console.log("Error Closing Detail: " + err));
  }

  isLengthUnitChecked: boolean;

  onLengthUnitChange(ev) {
    this.isLengthUnitChecked = ev;
  }

  HistoryFileName:string = "AviaitionDtfHistory";

  openHistory() {
    let modal = this.modalCtrl.create(AviationHistoryModal, { filename: this.HistoryFileName });
    modal.onDidDismiss(data => {
      if (data != undefined) this.showSavedData(data);
    })
    modal.present();
  }

  showSavedData(data: any) {
    this.selectedCoaxIndex = data.coaxIndex;
    this.isGraphScaleChecked = data.range;
    this.isLengthUnitChecked = data.unit;
    this.markers = data.markers;
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
          this.markers.push({ markerval: 0.0 });
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

  selectedCoaxIndex: number = 0;
  selectedCoax: any;

  onCoaxChanged(ev) {
    this.selectedCoaxIndex = ev.index;
    this.selectedCoax = ev.obj;
  }

  isGraphScaleChecked: boolean;

  onGraphScaleChecked(ev) {
    this.isGraphScaleChecked = ev;
  }

  saveRecord() {
    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        let collection: any[] = [];
        this._fileFactory.readAsText(this._fileFactory.dataDirectory(), this.HistoryFileName)
          .then(result => {
            console.log('file read success: ' + result);
            if (result != undefined) collection = JSON.parse(result);
            this.serializeData(collection);
          })
          .catch((error) => {
            console.log("file don't exists")
            this.serializeData(collection);
          })
      }
    });
  }


  serializeData(collection: any[]) {
    let dateTime = new Date();
    let userName: string;
    this._svcUser.getCurrentUser().subscribe(val => userName = val.name);
    let range: boolean = this.isGraphScaleChecked;
    let unit: boolean = this.isLengthUnitChecked;
    let data: any = "";
    let record: any = {
      datetime: dateTime,
      username: userName,
      markers: this.markers,
      range: range,
      unit: unit,
      coaxIndex: this.selectedCoaxIndex,
      data: data
    }
    collection.unshift(record);
    this._fileFactory.writeFile(this._fileFactory.dataDirectory(), this.HistoryFileName, JSON.stringify(collection))
      .then(() => {
        let toast = this.toastCtrl.create({ message: 'Record saved successfully', duration: 2000 });
        toast.present();
      });
  }
}
