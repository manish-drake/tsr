import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Section page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-section',
  templateUrl: 'section.html'
})
export class SectionPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello SectionPage Page');
  }

}
