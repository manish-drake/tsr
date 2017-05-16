import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GraphCompPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'graph-comp',
  templateUrl: 'graph-comp.html',
})
export class GraphComp {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GraphCompPage');
  }
 static isRtVswrenabled: boolean = false;

 RtVswr() {
    GraphComp.isRtVswrenabled = !GraphComp.isRtVswrenabled;
    return GraphComp.isRtVswrenabled;
  }

  isRtVswrclicked() {
    return GraphComp.isRtVswrenabled;
  }

}
