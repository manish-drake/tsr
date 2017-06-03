import { Component, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the MarkerControlPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'marker-actions',
  templateUrl: 'marker-actions.html',
})
export class MarkerControlComp {

  @Output() onMarkerAction = new EventEmitter<string>();

  constructor() { }

  controlsIndex: number = 0;

  switchControls() {
    switch (this.controlsIndex) {
      case 0:
        this.controlsIndex = 1;
        break;
      case 1:
        this.controlsIndex = 2;
        break;
      case 2:
        this.controlsIndex = 0;
        break;
    }
  }

  markerAction(e) {
    this.onMarkerAction.emit(e);
  }


}
