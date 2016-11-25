import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DetailPage } from '../detail/detail';
import { Master } from '../../services/test-set/master.service'
import { Dictionary } from '../../common/dictionary'

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

  constructor(public navCtrl: NavController, private master: Master) { }

  ionViewDidLoad() {
    console.log('Hello SectionsPage Page');

    var dic = new Dictionary<string, string>();
    dic.add("a","1");
    dic.add("b","2");
    dic.add("c","3");
    this.master.runTest("ads-b", dic);    
  }

  openDetail() {
    // Reset the NavController to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.setRoot(DetailPage);

  }

}
