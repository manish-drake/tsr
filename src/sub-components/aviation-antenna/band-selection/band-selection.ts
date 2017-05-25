import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the BandSelectionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'band-selection',
  templateUrl: 'band-selection.html',
})
export class BandSelectionComp {
  @Input() selectedBandIndex: any;

  @Output() onBandSelected = new EventEmitter<{ index: number, obj: any }>();

  constructor() { }

  bands: any[] = [
    { name: "ILS", start: 50, stop: 350, middle: 150, markerval: 150 },
    { name: "MB", start: 50, stop: 100, middle: 75, markerval: 75 },
    { name: "VHF NAV COM", start: 100, stop: 150, middle: 125, markerval: 125 },
    { name: "GS", start: 310, stop: 360, middle: 335, markerval: 360 },
    { name: "UHF COM", start: 200, stop: 450, middle: 325, markerval: 450 },
    { name: "DME/TACAN", start: 900, stop: 1300, middle: 1100, markerval: 1100 },
    { name: "XPNDR/UAT", start: 1000, stop: 1120, middle: 1060, markerval: 1060 },
    { name: "GPS/GNSS", start: 1500, stop: 1650, middle: 1575, markerval: 1575 },
    { name: "FULL", start: 50, stop: 2000, middle: 1025, markerval: 1025 }
  ]


  ngAfterViewInit() {
    this.onBandChange(0);
  }

  onBandChange(i) {
    let e = this.bands[i];
    this.onBandSelected.emit({ index: i, obj: e })
  }

}
