import { Component } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Generated class for the AviationCalCompPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'aviation-cal-comp',
  templateUrl: 'aviation-cal-comp.html',
})
export class AviationCalComp {

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
    console.log('ionViewDidLoad AviationCalCompPage');
  }

}
