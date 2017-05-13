import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Router } from "@angular/router";

@Component({
  selector: 'page-antenna',
  templateUrl: 'antenna.html'
})
export class AntennaComp {
  titleName: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private _router: Router) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AntennaPage');
  }

}
