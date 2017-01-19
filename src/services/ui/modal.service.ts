import { Injectable } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { HelpPage } from '../../pages/help/help';
import { SetupPage } from '../../pages/setup/setup';

@Injectable()
export class ModalService {

    constructor(private _modalCtrl: ModalController) { }

    show(e, args: any[]) {
        switch (args[0]) {
            case 'help': {
                this.showHelp(e);
                break;
            }
            case 'setup': {
                this.showSetup(e);
                break;
            }
            default:{break;}
        }
    }
    
    showSetup(e) {
        let modal = this._modalCtrl.create(SetupPage);
        modal.present();
    }

    showHelp(e) {
        let modal = this._modalCtrl.create(HelpPage);
        modal.present();
    }

}