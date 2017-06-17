import { Component } from '@angular/core';
import { UserService } from '../../../services/test-set/user.service';
import { DevicesService } from '../../../services/test-set/devices.service';


@Component({
  selector: 'testsetinfo-comp',
  templateUrl: 'testsetinfo-comp.html'
})
export class TestsetinfoComp {

  userName:any;
  connectedDevice: any;
  batteryLevel: any = "80%";

  constructor(
    private _svcUser: UserService,
    private _svcDevices: DevicesService
) { }

  ngOnInit() {
    this._svcUser.getCurrentUser().subscribe(val => this.userName = val.name);
    this._svcDevices.getconnectedDevice().subscribe(val => this.connectedDevice = val);
  }

}
