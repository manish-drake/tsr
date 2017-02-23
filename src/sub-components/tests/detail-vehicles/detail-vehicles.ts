import { Component, Input, Output, EventEmitter } from '@angular/core';

import { MasterService } from '../../../services/test-set/master.service';
import { BrokerFactoryService } from '../../../services/broker/brokerFactory.service';
import { Factory } from '../../../services/objects/factory.service';


@Component({
  selector: 'detail-vehicles',
  templateUrl: 'detail-vehicles.html'
})
export class DetailVehiclesComp {
  @Input() test: any;
  @Input() vehicle: any;

  @Output() onVehicleSelected = new EventEmitter<any>();

  constructor(private masterService: MasterService, private _svcBroker: BrokerFactoryService,
    private _objectService: Factory) { }

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

  setVehicleResultStatus(_case) {
    var vehicleResultStatusData = this._objectService.createFooterResultStatusData(_case);
    var vehicleResultStatus = this._svcBroker.createFooterResultStatus(vehicleResultStatusData);
  }

}
