import { Component, Input } from '@angular/core';
import { PopoverService } from '../../services/ui/popover.service';

@Component({
    selector: 'pop-button',
    template: `
        <button 
          ion-button 
          icon-only 
          clear
          (click)="onClick($event)">
            <ion-icon [name]="popSource.name"></ion-icon>
        </button>
    `
})
export class PopButtonComp{
  @Input()popSource;

  constructor(private _popoverService: PopoverService){}

    onClick(e){
        this._popoverService.show(e, this.popSource.target);
    }
}