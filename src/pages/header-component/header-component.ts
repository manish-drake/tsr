import { Component, Input } from '@angular/core';

import { PopoverService } from '../../services/ui/popover.service'


@Component({
  selector: 'header-component',
  templateUrl: 'header-component.html'
})
export class HeaderComponent {
  @Input() title: string;
  public more: any;
  public config: any;

  constructor(private _popoverService: PopoverService) {
    this.more = this.createPopOverSource("more", "MORE", "more");
    this.config = this.createPopOverSource("arrow-dropdown-circle", "CONFIG", "config");    
  }

  createPopOverSource = function (name, label, target) {
    return {
      "name": name,
      "lable": label,
      "target": [
        target
      ]
    };
  };

  openConfigurations(e) {
    this._popoverService.showConfigurations(e);
  }

}
