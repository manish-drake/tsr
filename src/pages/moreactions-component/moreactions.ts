import { Component, Input } from '@angular/core';
import { Platform, ViewController } from 'ionic-angular';
import { AppVersion } from 'ionic-native';
import { ThemesService } from '../../services/themes/themes.service';
import { MasterService } from '../../services/test-set/master.service'

@Component({
  selector: 'page-moreactions',
  templateUrl: 'moreactions.html',
  providers: [MoreActionsPopover]
})
export class MoreActionsPopover {

  @Input() main: MoreActionsPopover;

  public setup: any;
  public help: any;
  versionNumber: any;

  chosenTheme: any;

  testInContext: any;

  constructor(
    private viewCtrl: ViewController,
    private platform: Platform,
    private _themes: ThemesService,
    private _master: MasterService) {
    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        AppVersion.getVersionNumber().then((s) => {
          this.versionNumber = s;
        });
      }
    });

    this._themes.getTheme().subscribe(val => this.chosenTheme = val);
    this._master.getTestInContext().subscribe(val => this.testInContext = val);

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
  }

  static isRunAllenabled: boolean = false;
  static isReapeatEnabled: boolean = false;
  static isSaveEnabled: boolean = false;
  
  static isGuide: boolean = false;

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

  onStartSwitch(e){
    this._master.onStartSwitch(e);
  }
  
  guide(){
    MoreActionsPopover.isGuide = !MoreActionsPopover.isGuide;
    return MoreActionsPopover.isGuide;
  }
}
