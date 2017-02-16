import { Component } from '@angular/core';
import { ThemeService } from '../../services/themes/themes.service'
import { UserService } from '../../services/test-set/user.service'
import { ConnectionService } from '../../services/test-set/connection.service'
import { MasterService } from '../../services/test-set/master.service';

@Component({
  selector: 'page-configurations',
  templateUrl: 'configurations.html'
})
export class ConfigurationsPopover {

  chosenTheme: any;

  selectedUser: any;
  availableUsers: any;

  availableDevices: any;
  connectedDevice: any;

  brightnessValue: number = 7;
  distanceValue: number = 200;
  userSelectOptions = { title: 'Operator' };
  deviceSelectOptions = { title: 'TestSet Device' };


  constructor(
    private _svcTheme: ThemeService,
    private _svcUser: UserService,
    private _svcConnection: ConnectionService,
    private _svcMaster: MasterService
  ) {
    this._svcTheme.getTheme().subscribe(val => this.chosenTheme = val);
    this.availableUsers = this._svcUser.getAvailableUsers();
    this._svcUser.getCurrentUser().subscribe(val => this.selectedUser = val);
    this.availableDevices = this._svcConnection.getAvailableDevices();
    this._svcConnection.getconnectedDevice().subscribe(val => this.connectedDevice = val);
  }

  sectionBAvailable: boolean = false;

  ionViewWillEnter() {
    console.log('Hello ConfigurationsPopover');
    var currMenu = this._svcMaster.routeName;
    if (currMenu == 'Start' || currMenu == "Transponder" || currMenu == "Mode S" || currMenu == "ADS-B") {
      this.sectionBAvailable = true;
    }
  }

  onUserChanged(e) {
    this._svcUser.setCurrentUser(e);
  }

  onDeviceChanged(e) {
    this._svcConnection.setConnectedDevice(e);
  }

  onSwitchTheme() {
    this._svcTheme.switchTheme();
  }
}
