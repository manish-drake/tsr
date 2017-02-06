import { Component, ViewChild, OnInit } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

// import { SectionsPage } from '../pages/sections/sections';
import { HomePage } from '../pages/home/home';

import { Router } from '@angular/router'
import { HeaderService } from '../services/ui/header.service'
import { PopoverService } from '../services/ui/popover.service'
import { Hamburger } from '../core/hamburgerMenu/hamburger';
import { ThemesService } from '../services/themes/themes.service'
@Component({
  templateUrl: `app.html`
})
export class MyApp implements OnInit {
  @ViewChild(Nav) content: Nav;

  chosenTheme: String;
  Title: string = "Title";
  rootPage = HomePage;

  public menu = new Hamburger();

  constructor(private platform: Platform,
    private popoverService: PopoverService,
    private _svcHeader: HeaderService,
    private _router: Router,
    private _themes: ThemesService) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });

    // subscribe to theme changes and set a default chosen theme
    this._themes.getTheme().subscribe(val => this.chosenTheme = val);
  }

  isAndroid: boolean = true;

  ngOnInit() {
    this._svcHeader.TitleUpdated.subscribe(e => {
      this.Title = e.title;
    });

    if (this.platform.is('cordova')) {
      if (!this.platform.is('android')) {
        this.isAndroid = false;
      }
    }
  }

  onItemSelectionChanged(e) {
    this._router.navigate(['testgroup', e.name]);

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
