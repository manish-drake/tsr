import { Component } from '@angular/core';
import { ViewController, Platform } from 'ionic-angular';
import { AppVersion } from 'ionic-native';
import { ThemesService } from '../../services/themes/themes.service';
import { Router } from '@angular/router';
import { LatlonglocatorPage } from '../../pages/latlonglocator/latlonglocator';

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

  chosenTheme: String;
  selected: String;
  availableThemes: { className: string, prettyName: string }[];

  public setup: any;
  public help: any;
  versionNumber: any;

  constructor(
    public viewCtrl: ViewController,
    private platform: Platform,
    private _themes: ThemesService,
    private _router: Router) {

    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        AppVersion.getVersionNumber().then((s) => {
          this.versionNumber = s;
        });
      }
    });

    this._themes.getTheme().subscribe(val => this.chosenTheme = val);
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

  onSetupClick(e) {
  }

  onHelpClick(e) {
  }

  isRunAllenabled: boolean = false;
  isReapeatEnabled: boolean = false;
  isSaveEnabled: boolean = false;

  runall() {
    this.isRunAllenabled = !this.isRunAllenabled;
  }

  repeatTest() {
    this.isReapeatEnabled = !this.isReapeatEnabled;
  }

  autoSave() {
    this.isSaveEnabled = !this.isSaveEnabled;
  }
  latlonginfo() {
    this._router.navigate(['latlonglocator', LatlonglocatorPage]);
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
