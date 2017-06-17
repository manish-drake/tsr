import { Injectable } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { TestHelpPage } from '../../pages/test/test-help/test-help';
import { TestSetupPage } from '../../pages/test/test-setup/test-setup';

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
        let modal = this._modalCtrl.create(TestSetupPage);
        modal.present();
    }

    showHelp(e) {
        let modal = this._modalCtrl.create(TestHelpPage);
        modal.present();
    }

}