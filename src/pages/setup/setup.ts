import { Component } from '@angular/core';
import { ThemesService } from '../../services/themes/themes.service';

/*
  Generated class for the Setup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-setup',
  templateUrl: 'setup.html'
})
export class SetupPage {
  chosenTheme: String;
  constructor(private _themes: ThemesService) {
    this._themes.getTheme().subscribe(val => this.chosenTheme = val);
  }

  pwrValue: any;
  ionViewDidLoad() {
    this.pwrValue = -39.0
    console.log('Hello SetupPage Page');
  }
  isPowerClicked: boolean = false;

  power() {
    this.isPowerClicked = !this.isPowerClicked;
  }

}
