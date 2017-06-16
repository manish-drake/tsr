import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from 'ionic-angular';
import { AviationHistoryModal } from "../../pages/aviation-history-modal/aviation-history-modal";
import { AviationHistoryService } from "../../services/antenna/aviationhistory.service";
import { GraphService } from '../../services/antenna/graph.service';
import { Logger } from "../../services/logging/logger";

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
    private _svcHistory: AviationHistoryService,
    private _svcGraph: GraphService,
    private _logger: Logger) { }

  markers: any[] = [{ markerval: 0.0 }];

  ngAfterViewInit() {
    this._logger.Info('aviation-dtf view loaded');
  }
  onClose() {
    this._router.navigate(['antenna', 'Antenna'])
      .then(succ => this._logger.Debug("Aviation dtf detail closed: " + succ))
      .catch(err => this._logger.Error("Error, closing aviation dtf detail: " + err));
  }

  isLengthUnitChecked: boolean;

  onLengthUnitChange(ev) {
    this.isSavedState = false;
    this.isLengthUnitChecked = ev;
  }

  HistoryFileName: string = "AviaitionDtfHistory";

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
    this.selectedCoaxIndex = data.coaxIndex;
    this.isGraphScaleChecked = data.range;
    this.isLengthUnitChecked = data.unit;
    this.markers = data.markers;
    this.graphdata = data.data;
  }

  selectedMarkerIndex: number = 0;

  onMarkerSelected(ev) {
    this.selectedMarkerIndex = ev;
  }

  onMarkerAction(ev) {
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
          this.markers[this.selectedMarkerIndex].markerval = this.markers[this.selectedMarkerIndex].markerval + 0.01;
        }
        break;
      case "decrease":
        if (this.markers[this.selectedMarkerIndex].markerval > 0) {
          this.markers[this.selectedMarkerIndex].markerval = this.markers[this.selectedMarkerIndex].markerval - 0.01;
        }
        break
    }
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
    this._svcHistory.saveDTFrecord(this.HistoryFileName, this.selectedCoaxIndex, this.isGraphScaleChecked, this.isLengthUnitChecked, this.markers, this.graphdata);
  }
}
