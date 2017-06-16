import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { AppVersion } from '@ionic-native/app-version';
import { Device } from '@ionic-native/device';
import { HomeService } from '../../services/ui/home.service'
import { LanguageService } from '../../services/language/language-service';
import { Router } from "@angular/router";
import { Logger } from '../../services/logging/logger';

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
    private appVersion: AppVersion,
    private device: Device,
    private _svcHome: HomeService,
    private _srvLanguage: LanguageService,
    private router: Router,
    private _logger: Logger
  ) { }

  title: string;
  footerData: any;

  ngOnInit() {
    this._svcHome.TitleUpdated.subscribe(e => {
      this.title = e;
      if (!e) this.title = "Test Set Remote";
    })
    this.router.navigate(['testgroup', 'Start']);
    this._svcHome.FooterUpdated.subscribe(e => this.footerData = e);
    this._srvLanguage.getSavedLanguage();
  }

  logDeviceInfo() {
    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        this.appVersion.getVersionNumber().then((ver) => {
          this._logger.Info('App Version: ', ver);
        });
        this._logger.Info('OS: ', this.device.platform + " " + this.device.version);
        this._logger.Info('Device: ', this.device.manufacturer.toUpperCase() + " " + this.device.model);
      }
    });
  }

}
