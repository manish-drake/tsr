import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the FooterComponent page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'footer-component',
  templateUrl: 'footer-component.html'
})
export class FooterComponent {

  constructor(public navCtrl: NavController) {
    
  }

  ngAfterViewInit(){
    this.getTime();
    setInterval(() => {
      this.getTime();
    }, 1000);
  }

  displaydate:any;

  getTime() {
    var checkTime = function (i) {
      return (i < 10) ? "0" + i : i;
    }
    var today = new Date(),
      h = checkTime(today.getHours()),
      m = checkTime(today.getMinutes()),
      s = checkTime(today.getSeconds());
    this.displaydate = Date();
  }

}
