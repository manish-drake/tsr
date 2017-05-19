import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from 'ionic-angular';
import { AviationHistoryModal } from "../../pages/aviation-history-modal/aviation-history-modal";

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
    private modalCtrl: ModalController
  ) { }

  markers: any[] = [{ min: 0, max: 15, val: 0 },{ min: 0, max: 15, val: 0 }];

  onClose() {
    this._router.navigate(['antenna', 'Antenna'])
      .then(succ => console.log("Detail Closed: " + succ))
      .catch(err => console.log("Error Closing Detail: " + err));
  }

  openHistory() {
    let modal = this.modalCtrl.create(AviationHistoryModal);
    modal.present();
  }

  onMarkerAction3(ev) {
    console.log(ev);
    switch (ev) {
      case "add":
        this.markers.push({ min: 0, max: 15, val: 0 });
        console.log(JSON.stringify(this.markers));
      case "remove":
        this.markers.splice(this.markers.length - 1, 1);
    }
  }
}
