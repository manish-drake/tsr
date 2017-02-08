import { Component } from '@angular/core';
import { ThemesService } from '../../services/themes/themes.service'

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

  users = [{name: "Operator"},{name: "Operator 2"}];
  selectedUser:string = "Operator";

  devices = [{name: "TestSet#1"},{name: "TestSet#2"},{name: "TestSet#3"},{name: "TestSet#4"},{name: "TestSet#5"}];
  selectedDevice:string = "TestSet#5";

  brightnessValue: number = 7;
  distanceValue: number = 200;
  

  constructor(private _themes: ThemesService) {
    this._themes.getTheme().subscribe(val => this.chosenTheme = val);
  }

  ionViewDidLoad() {
    console.log('Hello ConfigurationsPopover');
  }

  onSwitchTheme(oldVal) {
    this._themes.switchTheme(oldVal);
  }
}
