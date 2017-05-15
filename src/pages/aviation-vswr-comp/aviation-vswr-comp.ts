import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'aviation-vswr-comp',
  templateUrl: 'aviation-vswr-comp.html'
})
export class AviationVSWRComp {

  constructor(
    private _router: Router,
  ) { }

  onClose() {
    this._router.navigate(['antenna','Antenna'])
      .then(succ => console.log("Detail Closed: " + succ))
      .catch(err => console.log("Error Closing Detail: " + err));
  }


}
