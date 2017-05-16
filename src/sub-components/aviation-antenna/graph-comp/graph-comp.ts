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
  static isMeterenabled: boolean = true;
  isDTFmodeEnabled: boolean = true;

  RtVswr() {
    GraphComp.isRtVswrenabled = !GraphComp.isRtVswrenabled;
    return GraphComp.isRtVswrenabled;
  }

  isRtVswrclicked() {
    return GraphComp.isRtVswrenabled;
  }

  MeterFt() {
    GraphComp.isMeterenabled = !GraphComp.isMeterenabled;
    return GraphComp.isMeterenabled;
  }

  isMeterEnabled() {
    return GraphComp.isMeterenabled;
  }

  rLValsModel: any[] = [
    { val: "0dB" },
    { val: "-5" },
    { val: "-10" },
    { val: "-15" },
    { val: "-20" },
    { val: "-25" },
    { val: "-30" }
  ]
  rLVals2Model: any[] = [
    { val: "-6dB" },
    { val: "-8" },
    { val: "-10" },
    { val: "-12" },
    { val: "-14" },
    { val: "-16" },
    { val: "-18" }
  ]

  vswrValsModel: any[] = [
    { val: "" },
    { val: "3.6" },
    { val: "1.9" },
    { val: "1.4" },
    { val: "1.2" },
    { val: "1.1" },
    { val: "1.0" }
  ]
  vswrVals2Model: any[] = [
    { val: "" },
    { val: "2.4" },
    { val: "1.9" },
    { val: "1.6" },
    { val: "1.4" },
    { val: "1.3" },
    { val: "1.2" }
  ]

  meterScaleList: any[] = [
    { val: "0" },
    { val: "5" },
    { val: "10" },
    { val: "15" }
  ]

  feetScaleList: any[] = [
    { val: "0" },
    { val: "16" },
    { val: "33" },
    { val: "49" }
  ]
}
