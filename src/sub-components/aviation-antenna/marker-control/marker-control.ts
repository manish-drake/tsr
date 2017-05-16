import { Component } from '@angular/core';

/**
 * Generated class for the MarkerControlPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'marker-control',
  templateUrl: 'marker-control.html',
})
export class MarkerControlComp {

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

  abc(){
    
  }

}
