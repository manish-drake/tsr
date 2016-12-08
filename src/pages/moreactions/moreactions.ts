import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { ThemesService } from '../../services/themes/themes.service'

/*
  Generated class for the Moreactions page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-moreactions',
  templateUrl: 'moreactions.html'
})
export class MoreActionsPopover {

  selected: String;
  availableThemes: { className: string, prettyName: string }[];

  constructor(public viewCtrl: ViewController, private _themes: ThemesService) {
    this._themes.getTheme().subscribe(val => this.selected = val);
    this.availableThemes = this._themes.availableThemes;
  }

  ionViewDidLoad() {
    console.log('Hello MoreactionsPopover');
  }

  onSwitchTheme(){
    if(this.selected == 'light-theme'){
      this._themes.setTheme('dark-theme');
    }
    else{
      this._themes.setTheme('light-theme');
    }
  }

}
