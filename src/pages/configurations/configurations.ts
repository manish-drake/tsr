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

  chosenTheme: String;
  selected: String;
  availableThemes: { className: string, prettyName: string }[];

  distanceValue: any = 230;

  constructor(private _themes: ThemesService) {
    this._themes.getTheme().subscribe(val => this.chosenTheme = val);
    this._themes.getTheme().subscribe(val => this.selected = val);
    this.availableThemes = this._themes.availableThemes;
  }

  ionViewDidLoad() {
    console.log('Hello ConfigurationsPopover');
  }

  onSwitchTheme() {
    if (this.selected == 'light-theme') {
      this._themes.setTheme('dark-theme');
      localStorage.setItem("tsrtheme", "dark-theme");
    }
    else {
      this._themes.setTheme('light-theme');
      localStorage.setItem("tsrtheme", "light-theme");
    }
  }
}
