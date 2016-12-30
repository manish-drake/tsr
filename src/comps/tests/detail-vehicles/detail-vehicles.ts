import { Component,Output,EventEmitter } from '@angular/core';

/*
  Generated class for the DetailVehicles page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'detail-vehicles',
  templateUrl: 'detail-vehicles.html'
})
export class DetailVehiclesComp {
 @Output() onNavigate = new EventEmitter<string>();

  circleobjs = [
    { cx: 525, cy: 525, r: 470 },
    { cx: 525, cy: 525, r: 370 },
    { cx: 525, cy: 525, r: 270 },
    { cx: 525, cy: 525, r: 170 },
    { cx: 525, cy: 525, r: 70 },
    { cx: 525, cy: 525, r: 0 }
  ];
  objects = [
   
    { name: "LON", latitude: 51.507351, longitude: -0.127758 },
    { name: "NYC", latitude: 40.712784, longitude: -74.005941 },
    { name: "RIO", latitude: -22.906847, longitude: -43.172896 },
    { name: "MSK", latitude: 55.755826, longitude: 37.6173 },
     { name: "SYD", latitude: -33.868820, longitude: 151.209296}
  ];

  constructor() { }  

    navigate(ev){
        this.onNavigate.emit(ev);
    }
  isRunnig: boolean = false;

  onRun() {
    this.isRunnig = !this.isRunnig;
  }
   isTargetposAvailable: boolean = false;

  selectAv() {
    this.isTargetposAvailable = !this.isTargetposAvailable;
  }

   ngAfterViewInit() {
    this.onResize(event);
  }

  isPortrait: boolean = true;
  onResize(event) {
    if (window.innerHeight > window.innerWidth) {
      this.isPortrait = true;
    }
    else if (window.innerHeight < window.innerWidth) {
      this.isPortrait = false;
    }
  }

  getY(lat, lon) {
    var containerMid = 525;
    var radius = 470;
    var objectsize = 30;
    var rad2deg = Math.PI / 180;
    var lony = (lat * (2 * radius) / 180)
    return containerMid - lony * (Math.cos(lon * rad2deg)) - (objectsize / 2);
  }

  getX(lat, lon) {
    var containerMid = 525;
    var radius = 470;
    var objectsize = 30;
    var rad2deg = Math.PI / 180;
    var latx = radius * Math.sin(lon * rad2deg);
    return containerMid + latx - (objectsize / 2);
  }

  selectedVehicleIndex = 1;

  onVehicleClick(index){
    this.selectedVehicleIndex = index;
  }
}
