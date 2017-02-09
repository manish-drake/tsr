import { Component } from '@angular/core';
import { ThemesService } from '../../services/themes/themes.service'
import { UserService } from '../../services/test-set/user.service'

/*
  Generated class for the Configurations page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-configurations',
  templateUrl: 'configurations.html'
})
export class ConfigurationsPopover {

  chosenTheme: any;
  selectedUser: any;
  availableUsers: any;

  devices = [{ name: "TestSet#1" }, { name: "TestSet#2" }, { name: "TestSet#3" }, { name: "TestSet#4" }, { name: "TestSet#5" }];
  selectedDevice: string = "TestSet#5";

  brightnessValue: number = 7;
  distanceValue: number = 200;
  userSelectOptions = {title: 'Operator'};
  deviceSelectOptions = {title: 'TestSet Device'};


  constructor(private _themes: ThemesService,
    private _users: UserService) {
    this._themes.getTheme().subscribe(val => this.chosenTheme = val);
    this._users.getCurrentUser().subscribe(val => this.selectedUser = val);
    this.availableUsers = this._users.getAvailableUsers();
  }

  ionViewWillEnter() {
    console.log('Hello ConfigurationsPopover');
  }

  onUserChanged(e){
    this._users.setCurrentUser(e);
  }

  onSwitchTheme() {
    this._themes.switchTheme();
  }
}
