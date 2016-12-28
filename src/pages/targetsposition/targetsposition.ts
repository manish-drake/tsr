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
    { cx: 510, cy: 510, r: 100 },
    { cx: 510, cy: 510, r: 30 }
  ];
  objects = [
    { name: "AA323", latitude: 0, longitude: 0, color: "pink" },
    { name: "AA123", latitude: 30, longitude: 0, color: "red" },
    { name: "111BA", latitude: 60, longitude: 0, color: "blue" },
    { name: "131BA", latitude: 90, longitude: 90, color: "green" },
    { name: "121BA", latitude: 90, longitude: -90, color: "black" }
  ];

  constructor() { }

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
    var containerRadius = 510 - 15;
    var lony = (lat * (2 * containerRadius) / 180)
    return containerRadius - lony;
  }

  getX(lat, lon) {
    var p = Math.PI / 180;
    var containerRadius = 510 - 15;
    var latx = containerRadius * Math.log(1 + Math.sin(lon * p) / (1 - Math.sin(lon * p))) / 2;
    return containerRadius - (latx);
  }
}
