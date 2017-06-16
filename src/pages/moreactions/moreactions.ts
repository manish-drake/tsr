import { Component, Input } from '@angular/core';
import { Platform, ViewController } from 'ionic-angular';
import { AppVersion } from '@ionic-native/app-version';

import { ThemeService } from '../../services/themes/themes.service';
import { LocalStorage } from '../../services/storage/local-storage';
import { MasterService } from '../../services/test-set/master.service';
import { TestGroupsService } from '../../services/tests/testgroups.service';
import { TestContextService } from '../../services/tests/testcontext.service';
import { Logger } from '../../services/logging/logger';
import { ShareLogsService } from '../../services/logging/share-logs'

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
    private appVersion: AppVersion,
    private _svcTheme: ThemeService,
    private _localStorage: LocalStorage,
    private _master: MasterService,
    private _svcTestGroups: TestGroupsService,
    private _svcTestContext: TestContextService,
    private _logger: Logger,
    private _svcShareLogs: ShareLogsService
  ) {
    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        this.appVersion.getVersionNumber().then((s) => {
          this.versionNumber = s;
        });
      }
    });

    this._svcTheme.getTheme().subscribe(val => this.chosenTheme = val);
    this._svcTestContext.getTestInContext().subscribe(val => this.testInContext = val);

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

  onClose() {
    this.viewCtrl.dismiss();
  }

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

  onStartSwitch(e) {
    this.onClose();
    if (e.isStartItem == false || e.isStartItem == undefined) {
      e.isStartItem = true;
      this.addToStart(e.name);
    }
    else {
      e.isStartItem = false;
      this.removeFromStart(e.name);
    }
  }

  addToStart(name) {
    var startItems = this._localStorage.GetItem(this._localStorage.keyForStartItems());
    var favColl = [];
    if (startItems == null) {
      favColl.push(name);
      this._localStorage.SetItem(this._localStorage.keyForStartItems(), JSON.stringify(favColl))
    }
    else {
      favColl = JSON.parse(startItems)
      favColl.push(name);
      this._localStorage.SetItem(this._localStorage.keyForStartItems(), JSON.stringify(favColl));
    }
    if (this._svcTestContext.currentMenu == 'Start') {
      this._svcTestGroups.generateTestGroups(this._svcTestContext.currentMenu);
    }
  }

  removeFromStart(testgroupname) {
    var startItems = this._localStorage.GetItem(this._localStorage.keyForStartItems());
    if (startItems != null) {
      var favColl = JSON.parse(startItems);
      favColl.forEach((element, index) => {
        if (testgroupname == element) {
          favColl.splice(index, 1);
        }
      });
      this._localStorage.SetItem(this._localStorage.keyForStartItems(), JSON.stringify(favColl));

      if (this._svcTestContext.currentMenu == 'Start') {
        this._svcTestGroups.generateTestGroups(this._svcTestContext.currentMenu);
      }
    }
  }

  onGuideSwitch(e) {
    if (e.isGuideDisabled == false || e.isGuideDisabled == undefined) {
      e.isGuideDisabled = true;
      this.addToGuideDisabled(e.name);
    }
    else {
      e.isGuideDisabled = false;
      this.removefromGuideDisabled(e.name);
    }
  }

  addToGuideDisabled(name) {
    var disabledGuides = this._localStorage.GetItem(this._localStorage.keyForDisabledGuides());
    var itemsColl = [];
    if (disabledGuides == null) {
      itemsColl.push(name);
      this._localStorage.SetItem(this._localStorage.keyForDisabledGuides(), JSON.stringify(itemsColl))
    }
    else {
      itemsColl = JSON.parse(disabledGuides)
      itemsColl.push(name);
      this._localStorage.SetItem(this._localStorage.keyForDisabledGuides(), JSON.stringify(itemsColl));
    }
  }

  removefromGuideDisabled(testgroupname) {
    var disabledGuides = this._localStorage.GetItem(this._localStorage.keyForDisabledGuides());
    if (disabledGuides != null) {
      var itemsColl = JSON.parse(disabledGuides);
      itemsColl.forEach((element, index) => {
        if (testgroupname == element) {
          itemsColl.splice(index, 1);
        }
      });
      this._localStorage.SetItem(this._localStorage.keyForDisabledGuides(), JSON.stringify(itemsColl));
    }
  }

  onSendLogs() {
    this.viewCtrl.dismiss();
    this._svcShareLogs.sendLogs();
  }

}
