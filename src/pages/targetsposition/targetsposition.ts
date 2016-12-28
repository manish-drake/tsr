import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-targetsposition',
  templateUrl: 'targetsposition.html'
})
export class TargetsPositionPage {

  circleobjs = [
    { cx: 510, cy: 510, r: 500 },
    { cx: 510, cy: 510, r: 400 },
    { cx: 510, cy: 510, r: 300 },
    { cx: 510, cy: 510, r: 200 },
    { cx: 510, cy: 510, r: 100 }
  ];
  objects = [
    { name: "AA323", latitude: 0, longitude: 0, color: "pink" },
    { name: "AA123", latitude: 30, longitude: 0, color: "red" },
    { name: "111BA", latitude: 60, longitude: 0, color: "blue" },
    { name: "131BA", latitude: -30, longitude: 0, color: "green" },
    { name: "121BA", latitude: 0, longitude: 90, color: "black" }
  ];

  constructor() { }

  getX(long) {
    var p = Math.PI / 180;
    var r = 525 - 15;
    var lgt = r - ((1000 / 2) * Math.log(1 + Math.sin(long * p) / (1 - Math.sin(long * p))) / 2);
    return lgt;
  }

  getY(lat) {
    var p = Math.PI / 180;
    var r = 525 - 15;
    var l = lat / 1.6;
    var lt = Math.round(r - (1000 / 2) * l * p);
    return lt;
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
}
