import { Component, Input, Output, EventEmitter } from '@angular/core';

import { BrokerFactoryService } from '../../../services/broker/brokerFactory.service';
import { Factory } from '../../../services/objects/factory.service';


@Component({
  selector: 'detail-vehicles',
  templateUrl: 'detail-vehicles.html'
})
export class DetailVehiclesComp {

  @Input() vehicles: any;
  @Input() selectedVehicle: any;

  @Output() onVehicleSelected = new EventEmitter<any>();

  constructor(
    private _svcBroker: BrokerFactoryService,
    private _objectService: Factory
  ) { }



  ngOnInit() {
    // console.log(JSON.stringify(this.selectedVehicle));
    this.generateDataFields();
  }

  onVehicleSelect(e, i) {
    var ev = { e, i };
    this.onVehicleSelected.emit(ev);
  }

  dataFields: any;

  generateDataFields() {
    var aircraftVehicleData = this._objectService.CreateAircraftVehicleData();
    var aircraftVehicle = this._svcBroker.createVehicleData(aircraftVehicleData);
    this.dataFields = aircraftVehicle;
  }

}
