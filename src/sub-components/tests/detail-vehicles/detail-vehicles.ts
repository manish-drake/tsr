import { Component, Input, Output, EventEmitter } from '@angular/core';

import { MasterService } from '../../../services/test-set/master.service';
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
    // this.setVehicleResultStatus();
  }

  onVehicleSelect(e, i) {
    var ev = { e, i };
    this.onVehicleSelected.emit(ev);
  }

  // vehicledata: any;

  // setVehicleResultStatus() {
  //   var vehicleResultStatusData = this._objectService.CreateAircraftVehicleData();
  //   var vehicleResultStatus = this._svcBroker.createVehicleData(vehicleResultStatusData);
  //   console.log("sfhjf: "+ JSON.stringify(vehicleResultStatus));
  //   this.vehicledata =vehicleResultStatus;
  // }

}
