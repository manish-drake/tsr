import { Component, Input } from '@angular/core';

import { MasterService } from '../../../services/test-set/master.service'


@Component({
  selector: 'detail-radar',
  templateUrl: 'detail-radar.html'
})
export class DetailRadarComp {
  @Input() vehicles: any;
  @Input() selectedVehicle: any;

  constructor(private masterService: MasterService) { }

  circleobjs = [
    { cx: 525, cy: 525, r: 470 },
    { cx: 525, cy: 525, r: 370 },
    { cx: 525, cy: 525, r: 270 },
    { cx: 525, cy: 525, r: 170 },
    { cx: 525, cy: 525, r: 70 },
    { cx: 525, cy: 525, r: 0 }
  ];

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
