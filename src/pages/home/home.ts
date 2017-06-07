import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

import { HomeService } from '../../services/ui/home.service'
import { LanguageService } from '../../services/language/language-service';

// import {z} from 'zeromq'
// declare var zmq: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor(
    public platform: Platform,
    public navCtrl: NavController,
    private _svcHome: HomeService,
    private _srvLanguage: LanguageService) { }

  title: string;
  footerData: any;

  ngOnInit() {
    this._svcHome.TitleUpdated.subscribe(e => {
      this.title = e;
      if (!e) this.title = "Test Set Remote";
    })
    this._svcHome.FooterUpdated.subscribe(e => this.footerData = e);
    this._srvLanguage.getSavedLanguage();
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      // var sockt = z.socket('rep');
      // sockt.connect('tcp://192.168.1.104:6000');
      // sockt.on('message', function (msg) {
      //   alert('message');
      // });
    });
  }

}
