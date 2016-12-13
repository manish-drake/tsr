import { Injectable } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { MoreActionsPopover } from '../../pages/moreactions/moreactions';
import { HelpPage } from '../../pages/help/help';
import { SetupPage } from '../../pages/setup/setup';
import { ConfigurationsPopover } from '../../pages/configurations/configurations'

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
        let popover = this._popoverCtrl.create(SetupPage);
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
        let popover = this._popoverCtrl.create(ConfigurationsPopover);
        popover.present({ ev: e });
    }
}