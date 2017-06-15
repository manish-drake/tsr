import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { ThemeService } from '../../services/themes/themes.service'
import { UserService } from '../../services/test-set/user.service'
import { DevicesService } from '../../services/test-set/devices.service';
import { TestContextService } from '../../services/tests/testcontext.service';
import { LanguageService } from '../../services/language/language-service';
import { ConnectionService } from '../../services/test-set/connection.service';
import { Logger } from "../../services/logging/logger";

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
  languageSelectOptions = { title: 'Choose Language' };

  availableLanguages: any[];
  currentLanguage: any;


  constructor(
    private viewCtrl: ViewController,
    private _svcTheme: ThemeService,
    private _svcUser: UserService,
    private _svcDevices: DevicesService,
    private _svcTestContext: TestContextService,
    private _srvLanguage: LanguageService,
    private _svcConnection: ConnectionService,
    private _logger: Logger
  ) {
    this._svcTheme.getTheme().subscribe(val => this.chosenTheme = val);
    this.availableUsers = this._svcUser.getAvailableUsers();
    this._svcUser.getCurrentUser().subscribe(val => this.selectedUser = val);
    this.availableDevices = this._svcDevices.getAvailableDevices();
    this._svcDevices.getconnectedDevice().subscribe(val => this.connectedDevice = val);
    this.availableLanguages = this._srvLanguage.availableLanguages;
    this._srvLanguage.getCurrrentLanguage().subscribe(val => this.currentLanguage = val);
  }

  sectionBAvailable: boolean = false;

  ionViewWillEnter() {
    console.log('Hello ConfigurationsPopover');
    var currMenu = this._svcTestContext.currentMenu;
    if (currMenu == 'Start' || currMenu == "Transponder" || currMenu == "Mode S" || currMenu == "ADS-B") {
      this.sectionBAvailable = true;
    }
  }

  onUserChanged(e) {
    this._svcUser.setCurrentUser(e);
  }

  onDeviceChanged(e) {
    this._svcDevices.setConnectedDevice(e);
  }

  onSwitchTheme() {
    this._svcTheme.switchTheme();
  }

  onLanguageChanged(ev) {
    this._srvLanguage.changeLanguage(ev);
  }

  onScanDevices() {
    this._svcConnection.ScanDevices();
    this.viewCtrl.dismiss();
  }
}
