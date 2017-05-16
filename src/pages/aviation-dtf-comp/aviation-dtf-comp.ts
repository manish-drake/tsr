import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
  isDTFmodeEnabled: boolean = true;
  constructor(
    private _router: Router
  ) {
  }

  onClose() {
    this._router.navigate(['antenna', 'Antenna'])
      .then(succ => console.log("Detail Closed: " + succ))
      .catch(err => console.log("Error Closing Detail: " + err));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AviationDtfCompPage');
  }

}
