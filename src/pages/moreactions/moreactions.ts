import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/*
  Generated class for the Moreactions page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-moreactions',
  templateUrl: 'moreactions.html'
})
export class MoreActionsPopover {

  constructor(public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('Hello MoreactionsPopover');
  }

}
