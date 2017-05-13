import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-antenna-aviation',
  templateUrl: 'antenna-aviation.html'
})
export class AntennaAviationComp {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AntennaAviationPage');
  }

}
