import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'graph-comp',
  templateUrl: 'graph-comp.html',
})
export class GraphComp {

  @Input() isDTFmode: boolean;
  @Input() isCalmode: boolean;
  @Input() SelectedBand: any;
  @Input() markers: any[];
  @Input() selectedMarkerIndex: number;
  @Input() isGraphScaleChecked: boolean;
  @Input() isLengthUnitChecked: boolean;
  @Input() graphdata: any;

  @Output() onGraphScaleChecked = new EventEmitter<boolean>();
  @Output() onLengthUnitChange = new EventEmitter<boolean>();
  @Output() onMarkerSelected = new EventEmitter<number>();


  constructor() { }

  ngOnChanges(changes) {
    this.changeLengthUnit();
    this.changeGraphScale();
    if (changes.isLengthUnitChecked) {
      if (!changes.isLengthUnitChecked.firstChange) {
        this.onUnitChange();
      }
    }
  }

  @ViewChild('markercontainer') markerCont: ElementRef;

  getMarkerLblLeft(marker) {
    let factor = ((marker.markerval - marker.start) / (marker.stop - marker.start)) * this.markerCont.nativeElement.clientWidth;
    return factor + "px";
  }

  getMarkerLblLeftDTF(val) {
    let max = this.isLengthUnitChecked ? 49.21 : 15;
    let factor = (val / max) * this.markerCont.nativeElement.clientWidth;
    return factor + "px";
  }

  getLinePoints(data: any[]) {
    let linePoints: any[] = [];
    data.forEach((point, i) => {
      linePoints.push(i, point);
    });
    return linePoints;
  }

  markerSelected(i) {
    this.onMarkerSelected.emit(i);

  }

  graphScaleSwitch() {
    this.changeGraphScale();
    this.onGraphScaleChecked.emit(!this.isGraphScaleChecked);
  }

  changeGraphScale() {
    if (!this.isGraphScaleChecked) {
      this.currentRlScale = this.rlScaleValues;
      this.currentVswrScale = this.vswrScaleValues;
    }
    else {
      this.currentRlScale = this.rlScaleValues2;
      this.currentVswrScale = this.vswrScaleValues2;
    }
  }

  LengthUnitSwitch() {
    this.changeLengthUnit();
    this.onLengthUnitChange.emit(!this.isLengthUnitChecked);
  }

  changeLengthUnit() {
    if (!this.isLengthUnitChecked)
      this.currentLengthScale = this.lengthScaleValues;
    else
      this.currentLengthScale = this.lengthScaleValues2;
  }

  onUnitChange() {
    this.markers.forEach(marker => {
      if (this.isLengthUnitChecked) {
        var val = marker.markerval * 3.28084;
        marker.markerval = val.toFixed(2);
      }
      else {
        var val = marker.markerval / 3.28084;
        marker.markerval = val.toFixed(2);
      }
    });
  }

  rlScaleValues = [
    { val: "0dB" },
    { val: "-5" },
    { val: "-10" },
    { val: "-15" },
    { val: "-20" },
    { val: "-25" },
    { val: "-30" }
  ]
  rlScaleValues2 = [
    { val: "-6dB" },
    { val: "-8" },
    { val: "-10" },
    { val: "-12" },
    { val: "-14" },
    { val: "-16" },
    { val: "-18" }
  ]

  currentRlScale: any[] = this.rlScaleValues;

  vswrScaleValues = [
    { val: "" },
    { val: "3.6" },
    { val: "1.9" },
    { val: "1.4" },
    { val: "1.2" },
    { val: "1.1" },
    { val: "1.0" }
  ]
  vswrScaleValues2 = [
    { val: "" },
    { val: "2.4" },
    { val: "1.9" },
    { val: "1.6" },
    { val: "1.4" },
    { val: "1.3" },
    { val: "1.2" }
  ]
  currentVswrScale: any[] = this.vswrScaleValues;

  lengthScaleValues = [
    { val: "0" },
    { val: "5" },
    { val: "10" },
    { val: "15" }
  ]

  lengthScaleValues2 = [
    { val: "0" },
    { val: "16" },
    { val: "33" },
    { val: "49" }
  ]
  currentLengthScale: any[] = this.lengthScaleValues;
}
