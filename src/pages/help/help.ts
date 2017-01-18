import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { ThemesService } from '../../services/themes/themes.service';
/*
  Generated class for the Help page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-help',
  templateUrl: 'help.html'
})
export class HelpPage {
  chosenTheme: String;
  constructor(public viewCtrl: ViewController, private _themes: ThemesService) {
    this._themes.getTheme().subscribe(val => this.chosenTheme = val);
  }

  ionViewDidLoad() {
    console.log('Hello HelpPage Page');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
