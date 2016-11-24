import { Component, Input } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';

import { MoreActionsPopover } from '../moreactions/moreactions';

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

  constructor(public navCtrl: NavController,
    private popoverCtrl: PopoverController) { }

  ionViewDidLoad() {
    console.log('Hello HeaderComponentPage');
  }

  moreActionPopover() {
    let popover = this.popoverCtrl.create(MoreActionsPopover);
    popover.present({ ev: event });
  }

}
