import { Component, Input } from '@angular/core';
import { PopoverService } from '../../services/ui/popover.service';

@Component({
    selector: 'popover-button-comp',
    template: `
        <button ion-button icon-only clear (click)="onClick($event)">
            <ion-icon [name]="popoverSource.name"></ion-icon>
        </button>
    `
})
export class PopOverButtonComp{
  @Input()popoverSource;

  constructor(private _popoverService: PopoverService){}

    onClick(e){
        this._popoverService.show(e, this.popoverSource.target);
    }
}