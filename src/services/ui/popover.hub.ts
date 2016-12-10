import { Injectable, Output, EventEmitter, Inject } from '@angular/core';
// import { MoreActionsPopover } from '../../pages/moreactions/moreactions';
import { HelpPage } from '../../pages/help/help';
import { SetupPage } from '../../pages/setup/setup';
import { Platform, PopoverController } from 'ionic-angular';
import { ConfigurationsPopover } from '../../pages/configurations/configurations'

@Injectable()
export class PopoverHub {

    constructor(private _popoverCtrl: PopoverController) {
    }

    showMoreMenu(e) {
        // let popover = this._popoverCtrl.create(MoreActionsPopover);
        // popover.present({ ev: e });
    }
    showHelp(e) {
        let popover = this._popoverCtrl.create(HelpPage);
        popover.present({ ev: e });
    }
    showSetup(e) {
        let popover = this._popoverCtrl.create(SetupPage);
        popover.present({ ev: e });
    }

    showConfigurations(e) {
        let popover = this._popoverCtrl.create(ConfigurationsPopover);
        popover.present({ ev: e });
    }
}