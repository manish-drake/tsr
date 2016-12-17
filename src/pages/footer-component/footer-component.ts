import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'footer-component',
  templateUrl: 'footer-component.html'
})
export class FooterComponent {

  constructor(public navCtrl: NavController) {
    
  }

  displaydate:any;

  ngAfterViewInit(){
    this.displaydate = Date();
    setInterval(() => {
      this.displaydate = Date();
    }, 1000);
  }

}