import { Component, OnInit } from '@angular/core';
import { Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Router } from '@angular/router'

import { HomePage } from '../pages/home/home';
import { PopoverService } from '../services/ui/popover.service'
import { Menu } from '../core/hamburgerMenu/menu';
import { ThemeService } from '../services/themes/themes.service';
import { TestContextService } from '../services/tests/testcontext.service';

@Component({
  templateUrl: `app.html`
})
export class MyApp implements OnInit {

  root = HomePage;

  constructor(private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private popoverService: PopoverService,
    private _router: Router,
    private _svcTheme: ThemeService,
    private _svcTestContext: TestContextService,
    private toastCtrl: ToastController
  ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      if (this.platform.is('android')) {
        //back button handle
        //Registration of push in Android
        var lastTimeBackPress = 0;
        var timePeriodToExit = 2000;

        this.platform.registerBackButtonAction(() => {
          //Double check to exit app
          if (new Date().getTime() - lastTimeBackPress < timePeriodToExit) {
            this.platform.exitApp(); //Exit from app
          } else {
            let toast = this.toastCtrl.create({
              message: 'Press again to exit..',
              duration: 3000,
              position: 'bottom'
            });
            toast.present();
            lastTimeBackPress = new Date().getTime();
          }
        });
      }
    });
  }

  public menu = new Menu();
  theme: any;
  isAndroid: boolean = true;

  ngOnInit() {
    this._svcTheme.getTheme().subscribe(val => this.theme = val);
    if (this.platform.is('cordova')) {
      if (!this.platform.is('android')) { this.isAndroid = false }
    }
  }

  onMenuChanged(e) {
    this._router.navigate([e.route, e.name]);
    this.evaluateShowSelection(e);
    this._svcTestContext.setTestInContext(undefined);
    this._svcTestContext.currentMenu = e.name;
  }

  evaluateShowSelection(e) {
    this.menu.headers.forEach(header => {
      if (header == e) {
        (<any>header).isSelected = true;
      }
      else {
        (<any>header).isSelected = false;
      }
    });
  }
}
