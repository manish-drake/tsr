import { Injectable, ReflectiveInjector } from '@angular/core';
import { PopoverHub } from './popover.hub'

@Injectable()
export class PopoverService {
    
    constructor(private _popoverHub: PopoverHub) {
    }

    showMoreMenu(e) {
        this._popoverHub.showMoreMenu(e);
    }
    showHelp(e) {
        this._popoverHub.showHelp(e);
    }
    showSetup(e) {
        this._popoverHub.showSetup(e);
    }
    showConfiguration(e) {
        this._popoverHub.showConfigurations(e);
    }
}