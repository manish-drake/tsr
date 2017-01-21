import { Component, Input } from '@angular/core';
import { ModalService } from '../../services/ui/modal.service';

@Component({
    selector: 'modal-ionitem-comp',
    template: `
        <button ion-item (click)="onClick($event)">
            <ion-icon [name]="modalSource.name" item-left></ion-icon>
            <ion-label>{{ modalSource.lable }}</ion-label>
        </button>
    `
})
export class ModalIonItemComp{
  @Input()modalSource;

  constructor(private _modalService: ModalService){}

    onClick(e){
        this.modalSource.viewctrl.dismiss();
        this._modalService.show(e, this.modalSource.target);
    }
}