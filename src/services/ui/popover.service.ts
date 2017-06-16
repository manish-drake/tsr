import { Injectable } from '@angular/core';
import { PopoverController, PopoverOptions } from 'ionic-angular';

import { MoreActionsPopover } from '../../pages/moreactions/moreactions';
import { HelpPage } from '../../pages/test/help-component/help';
import { SetupTestPage } from '../../pages/test/setuptest/setuptest';
import { ConfigPanelPopover } from '../../pages/config-panel/config-panel'

@Injectable()
export class PopoverService {

    constructor(private _popoverCtrl: PopoverController) {
    }
    show(e, args: any[]) {
        switch (args[0]) {
            case 'more': {
                this.showMoreMenu(e);
                break;
            }
            case 'help': {
                this.showHelp(e);
                break;
            }
            case 'setup': {
                this.showSetup(e);
                break;
            }
            case 'config': {
                this.showConfigurations(e);
                break;
            }
            default:{break;}
        }
    }
    
    showSetup(e) {
        let popover = this._popoverCtrl.create(SetupTestPage);
        popover.present();
    }

    showMoreMenu(e) {
        let popover = this._popoverCtrl.create(MoreActionsPopover);
        popover.present({ ev: e });
    }
    showHelp(e) {
        let popover = this._popoverCtrl.create(HelpPage);
        popover.present();
    }

    showConfigurations(e) {
        var popoverOptions: PopoverOptions = {cssClass:"config-popover"}
        let popover = this._popoverCtrl.create(ConfigPanelPopover,{}, popoverOptions);
        popover.present({ ev: e });
    }
}