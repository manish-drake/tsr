import { Component, Input } from '@angular/core';
import { Platform } from 'ionic-angular';
import { AppVersion } from 'ionic-native';
import { ThemesService } from '../../services/themes/themes.service';

@Component({
  selector: 'page-moreactions',
  templateUrl: 'moreactions.html',
  providers: [MoreActionsPopover]
})
export class MoreActionsPopover {

  @Input() main: MoreActionsPopover;
  chosenTheme: String;
  selected: String;
  availableThemes: { className: string, prettyName: string }[];

  public setup: any;
  public help: any;
  versionNumber: any;

  constructor(
    private platform: Platform,
    private _themes: ThemesService) {

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

  static isRunAllenabled: boolean = false;
  static isReapeatEnabled: boolean = false;
  static isSaveEnabled: boolean = false;

  runall() {
    MoreActionsPopover.isRunAllenabled = !MoreActionsPopover.isRunAllenabled;
    return MoreActionsPopover.isRunAllenabled;
  }

  isrun() {
    return MoreActionsPopover.isRunAllenabled
  }

  repeatTest() {
    MoreActionsPopover.isReapeatEnabled = !MoreActionsPopover.isReapeatEnabled;
    return MoreActionsPopover.isReapeatEnabled;
  }

  autoSave() {
    MoreActionsPopover.isSaveEnabled = !MoreActionsPopover.isSaveEnabled;
    return MoreActionsPopover.isSaveEnabled;
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
