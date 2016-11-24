import { Component } from '@angular/core';
import { Factory } from '../../services/objects/factory.service'

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private factory: Factory) {
     var test = factory.createTest("");
     console.log(test);
  }

}
