import { Component, Input, Output, EventEmitter } from '@angular/core';

import { MasterService } from '../../../services/test-set/master.service'


@Component({
  selector: 'detail-vehicles',
  templateUrl: 'detail-vehicles.html'
})
export class DetailVehiclesComp {
  @Input() test: any;

  @Output() onVehicleSelected = new EventEmitter<any>();

  constructor(private masterService: MasterService) { }

  vehicles = [];

  ngAfterViewInit() {
    this.masterService.scanTest()
      .subscribe(data => {
        this.vehicles = [];
        this.vehicles = data.response.data.results;
      }, (rej) => { console.error("Could not load local data", rej) });
  }

  selectedVehicle: any;

  onVehicleSelect(e) {
    if (this.selectedVehicle != e) {
      this.selectedVehicle = e;
      this.onVehicleSelected.emit(e);
    }
  }

}
