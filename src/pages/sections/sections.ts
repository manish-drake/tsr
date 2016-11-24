import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DetailPage } from '../detail/detail';

/*
  Generated class for the Sections page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sections',
  templateUrl: 'sections.html'
})
export class SectionsPage {

  constructor(public navCtrl: NavController) { }

  ionViewDidLoad() {
    console.log('Hello SectionsPage Page');
  }

  openDetail() {
    // Reset the NavController to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.setRoot(DetailPage);
  }

}
