import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/*
  Generated class for the Configurations page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-configurations',
  templateUrl: 'configurations.html'
})
export class ConfigurationsPopover {

  constructor(public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('Hello ConfigurationsPopover');
  }

}
