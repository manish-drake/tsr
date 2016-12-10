import { Component, Input } from '@angular/core';
import { PopoverService } from '../../services/ui/popover.service';

@Component({
    selector: 'pop-menu-item',
    template: `
        <button ion-item (click)="onClick($event)">
            <ion-icon [name]="popSource.name" item-left></ion-icon>
            <ion-label>{{ popSource.lable }}</ion-label>
        </button>
    `
})
export class PopMenuItemComp{
  @Input()popSource;

  constructor(private _popoverService: PopoverService){}

    onClick(e){
        this._popoverService.show(e, this.popSource.target);
    }
}