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
  ) {
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

}
