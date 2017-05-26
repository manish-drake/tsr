import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from 'ionic-angular';
import { AviationHistoryModal } from "../../pages/aviation-history-modal/aviation-history-modal";
import { AviationHistoryService } from "../../services/antenna/aviationhistory.service";
import { GraphService } from '../../services/antenna/graph.service';

@Component({
  selector: 'aviation-vswr-comp',
  templateUrl: 'aviation-vswr-comp.html'
})
export class AviationVSWRComp {

  constructor(
    private _router: Router,
    private modalCtrl: ModalController,
    private _svcHistory: AviationHistoryService,
    private _svcGraph: GraphService) { }

  markers: any[] = [{ markerval: 0 }]

  selectedBandIndex: number = 0;
  selectedBand: any;

  onBandSelected(ev) {
    this.selectedBandIndex = ev.index;
    this.selectedBand = ev.obj;
    if (!this.isSavedState) {
      this.markers[0] = ev.obj;
    }
    else {
      this.isSavedState = false;
    }

  }

  onClose() {
    this._router.navigate(['antenna', 'Antenna'])
      .then(succ => console.log("Detail Closed: " + succ))
      .catch(err => console.log("Error Closing Detail: " + err));
  }

  HistoryFileName: string = "AviaitionVSWRHistory";

  openHistory() {
    let modal = this.modalCtrl.create(AviationHistoryModal, { filename: this.HistoryFileName });
    modal.onDidDismiss(data => {
      if (data != undefined) this.showSavedData(data);
    })
    modal.present();
  }

  isSavedState: boolean;

  showSavedData(data: any) {
    this.isSavedState = true;
    this.selectedBandIndex = data.bandIndex;
    this.isGraphScaleChecked = data.range;
    this.graphdata = data.data;
    this.markers = data.markers;
  }

  graphdata: any[];

  isRunning: boolean = false;

  dataInterval: any;

  onRun() {
    this.isRunning = !this.isRunning;
    if (this.isRunning) {
      this.dataInterval = setInterval(() => {
        this.graphdata = this._svcGraph.generateRandomPointsList();
      }, 200);
    }
    else {
      clearInterval(this.dataInterval);
    }
  }

  selectedMarkerIndex: number = 0;

  onMarkerSelected(ev) {
    this.selectedMarkerIndex = ev;
  }

  onMarkerAction(ev) {
    switch (ev) {
      case "add":
        if (this.markers.length < 4) {
          this.markers.push({ name: this.selectedBand.name, start: this.selectedBand.start, middle: this.selectedBand.middle, stop: this.selectedBand.stop, markerval: this.selectedBand.start });
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

  isGraphScaleChecked: boolean;

  onGraphScaleChecked(ev) {
    this.isGraphScaleChecked = ev;
  }

  saveRecord() {
    this._svcHistory.saveVSWRorLOSSrecord(this.HistoryFileName, this.selectedBandIndex, this.isGraphScaleChecked, this.markers, this.graphdata);
  }

}
