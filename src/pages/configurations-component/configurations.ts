import { Component } from '@angular/core';
import { ThemesService } from '../../services/themes/themes.service'
import { LocalStorage } from '../../services/storage/local-storage'

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

  constructor(private _themes: ThemesService,
  private _localStorage: LocalStorage) {
    this._themes.getTheme().subscribe(val => this.chosenTheme = val);
    this._themes.getTheme().subscribe(val => this.selected = val);
    this.availableThemes = this._themes.availableThemes;
  }

  ionViewDidLoad() {
    console.log('Hello ConfigurationsPopover');
  }

  onSwitchTheme() {
    if (this.selected == 'indoor-theme') {
      this._themes.setTheme('outdoor-theme');
      this._localStorage.SetItem(this._localStorage.keyForCurrentTheme(), "outdoor-theme");
    }
    else {
      this._themes.setTheme('indoor-theme');
      this._localStorage.SetItem(this._localStorage.keyForCurrentTheme(), "indoor-theme");
    }
  }
}
