import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-guide',
  templateUrl: 'guide.html'
})
export class GuidePage {

  paramName: any;

  constructor(private viewCtrl: ViewController, private params: NavParams) {
    this.paramName = params.get("param");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GuidePage');
  }

  onClose(){
    this.viewCtrl.dismiss()
  }

}
