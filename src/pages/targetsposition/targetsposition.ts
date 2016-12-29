import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-targetsposition',
  templateUrl: 'targetsposition.html'
})
export class TargetsPositionPage {

  circleobjs = [
    { cx: 525, cy: 525, r: 470 },
    { cx: 525, cy: 525, r: 370 },
    { cx: 525, cy: 525, r: 270 },
    { cx: 525, cy: 525, r: 170 },
    { cx: 525, cy: 525, r: 70 },
    { cx: 525, cy: 525, r: 0 }
  ];
  objects = [
    { name: "AA323", latitude: 0, longitude: 0, color: "pink" },
    { name: "AA123", latitude: 30, longitude: 30, color: "red" },
    { name: "111BA", latitude: 60, longitude: 60, color: "blue" },
    { name: "131BA", latitude: 90, longitude: 90, color: "green" },
    { name: "121BA", latitude: -90, longitude: -90, color: "black" }
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
}
