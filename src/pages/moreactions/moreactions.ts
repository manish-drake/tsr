import { Component, ReflectiveInjector  } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { ThemesService } from '../../services/themes/themes.service';

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
  
  private setup:any;
  private help: any;
  
  constructor(
    public viewCtrl: ViewController, 
    private _themes: ThemesService) {
    this._themes.getTheme().subscribe(val => this.selected = val);
    this.availableThemes = this._themes.availableThemes;
    
    this.setup = this.createPopSource("settings", "SETUP TEST", "setup");
    this.help = this.createPopSource("help-circle", "HELP", "help");
  }
  
  createPopSource = function (name, label, target) {
    return {
      "name": name,
      "lable": label,
      "target": [
        target
      ]
    };
  };
  
  onSetupClick(e){
  }
  
  onHelpClick(e){
  }

  ionViewDidLoad() {
    console.log('Hello MoreactionsPopover');
  }

  onSwitchTheme(){
    if(this.selected == 'light-theme'){
      this._themes.setTheme('dark-theme');
      localStorage.setItem("tsrtheme","dark-theme");
    }
    else{
      this._themes.setTheme('light-theme');
      localStorage.setItem("tsrtheme","light-theme");
    }
  }

}
