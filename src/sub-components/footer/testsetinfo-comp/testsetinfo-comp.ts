import { Component } from '@angular/core';
import { UserService } from '../../../services/test-set/user.service';
import { ConnectionService } from '../../../services/test-set/connection.service'


@Component({
  selector: 'testsetinfo-comp',
  templateUrl: 'testsetinfo-comp.html'
})
export class TestsetinfoComp {

  userName:any;
  deviceName: any;
  batteryLevel: any = "80%";

  constructor(
    private _svcUser: UserService,
    private _svcConnection: ConnectionService
  ) { }

  ngOnInit() {
    this._svcUser.getCurrentUser().subscribe(val => this.userName = val.name);
    this._svcConnection.getconnectedDevice().subscribe(val => this.deviceName = val.name);
  }

}
