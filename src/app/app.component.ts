import { Component, ViewChild, OnInit } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Router } from '@angular/router'

import { HomePage } from '../pages/home/home';
import { HomeService } from '../services/ui/home.service'
import { PopoverService } from '../services/ui/popover.service'
import { Menu } from '../core/hamburgerMenu/menu';
import { ThemeService } from '../services/themes/themes.service';
import { MasterService } from '../services/test-set/master.service';

@Component({
  templateUrl: `app.html`
})
export class MyApp implements OnInit {
  @ViewChild(Nav) content: Nav;

  chosenTheme: any;
  Title: string = "Title";
  FooterStatus: string = "FooterStatus";
  rootPage = HomePage;

  public menu = new Menu();

  constructor(private platform: Platform,
    private popoverService: PopoverService,
    private _svcHome: HomeService,
    private _router: Router,
    private _svcTheme: ThemeService,
    private _master: MasterService) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });

    // subscribe to theme changes and set a default chosen theme
    this._svcTheme.getTheme().subscribe(val => this.chosenTheme = val);
  }

  isAndroid: boolean = true;

  ngOnInit() {
    this._svcHome.TitleUpdated.subscribe(e => {
      this.Title = e.title;
    });

    if (this.platform.is('cordova')) {
      if (!this.platform.is('android')) {
        this.isAndroid = false;
      }
    }
  }

  onItemSelectionChanged(e) {
    this._router.navigate([e.route, e.name]);
    this._master.setTestInContext(undefined);
    this._master.routeName = e.name;
    this.evaluateShowSelection(e);
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
