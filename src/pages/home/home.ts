import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomeService } from '../../services/ui/home.service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController, private _svcHome: HomeService) { }
  
  Title: string;
  footerData:any;

  ngOnInit() {
    this._svcHome.TitleUpdated.subscribe(e => {
      this.Title = e;
      if (!this.Title) this.Title = "Test Set Remote";
    })
    this._svcHome.FooterUpdated.subscribe(e => this.footerData = e)
  }
}
