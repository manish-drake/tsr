import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Group page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-group',
  templateUrl: 'group.html'
})
export class GroupPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello GroupPage Page');
  }

}
