import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-targetsposition',
  templateUrl: 'targetsposition.html'
})
export class TargetsPositionPage {

  circleobjs = [
    { cx: 510, cy: 510, r: 495 },
    { cx: 510, cy: 510, r: 395 },
    { cx: 510, cy: 510, r: 295 },
    { cx: 510, cy: 510, r: 195 },
    { cx: 510, cy: 510, r: 95 },
    { cx: 510, cy: 510, r: 8 }
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
    var rad2deg = Math.PI / 180;
    var containerRadius = 510 - 15;
    var lony = (lat * (2 * containerRadius) / 180)
    return containerRadius - lony * (Math.cos(lon * rad2deg));
  }

  getX(lat, lon) {
    var rad2deg = Math.PI / 180;
    var containerRadius = 510 - 15;
    var latx = containerRadius *  Math.sin(lon * rad2deg);
    return containerRadius + latx;
  }
}
