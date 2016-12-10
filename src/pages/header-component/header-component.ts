import { Component, Input } from '@angular/core';
import { PopoverService } from '../../services/ui/popover.service'



/*
  Generated class for the HeaderComponent page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'header-component',
  templateUrl: 'header-component.html'
})
export class HeaderComponent {
  @Input() title: string;

  constructor(private _popoverService: PopoverService) { }

  ionViewDidLoad() {
  }

  moreActionPopover(e) {
    this._popoverService.showMoreMenu(e);
  }
  openConfigurations(e) {
    this._popoverService.showConfiguration(e);
  }

}
