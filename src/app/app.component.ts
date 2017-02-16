import { Component, ViewChild, OnInit } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
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

  rootPage = HomePage;

  constructor(private platform: Platform,
    private popoverService: PopoverService,
    private _router: Router,
    private _svcTheme: ThemeService,
    private _svcTestContext: TestContextService
  ) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  public menu = new Menu();
  theme: any;
  isAndroid: boolean = false;

  ngOnInit() {
    this._svcTheme.getTheme().subscribe(val => this.theme = val);
    if (this.platform.is('android')) { this.isAndroid = true }
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
