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

  constructor(private _themes: ThemesService) {
    this._themes.getTheme().subscribe(val => this.chosenTheme = val);
  }

  ionViewDidLoad() {
    console.log('Hello ConfigurationsPopover');
  }

}
