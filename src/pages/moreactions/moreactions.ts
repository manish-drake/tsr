import { Component, Input } from '@angular/core';
import { Platform, ViewController} from 'ionic-angular';
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

  public setup: any;
  public help: any;
  versionNumber: any;

  constructor(
    private viewCtrl: ViewController,
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

    this.setup = this.createModalSource("settings", "SETUP TEST", "setup", this.viewCtrl);
    this.help = this.createModalSource("help-circle", "HELP", "help", this.viewCtrl);
  }

  createModalSource = function (name, label, target, viewctrl) {
    return {
      "name": name,
      "lable": label,
      "target": [
        target
      ],
      "viewctrl": viewctrl
    };
  };

  onSetupClick(e) {
  }

  onHelpClick(e) {
    alert("..");
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
}
