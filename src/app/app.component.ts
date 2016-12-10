import { Component, ViewChild, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Platform, PopoverController, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { SectionsPage } from '../pages/sections/sections';

import { MoreActionsPopover } from '../pages/moreactions/moreactions';
import { RouterOutlet, Router } from '@angular/router'
import { HeaderService } from '../services/ui/header.service'
import { Hamburger } from '../core/hamburgerMenu/hamburger';
import { ThemesService } from '../services/themes/themes.service'
@Component({
  templateUrl: `app.html`
})
export class MyApp implements OnInit {
  @ViewChild(Nav) content: Nav;

  chosenTheme: String;

  Title: string = "Title";

  rootPage = SectionsPage;

  public hb = new Hamburger();

  constructor(platform: Platform, private popoverCtrl: PopoverController, private _svcHeader: HeaderService, private _router: Router, private _themes: ThemesService) {
    // subscribe to theme changes and set a default chosen theme
    this._themes.getTheme().subscribe(val => this.chosenTheme = val);
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  ngOnInit(){
    this._svcHeader.TitleUpdated.subscribe(e =>{
      this.Title = e.title;
    })

  }

  openSections() {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    //this.nav.setRoot(SectionsPage);
  }

  moreActionPopover() {
    let popover = this.popoverCtrl.create(MoreActionsPopover);
    popover.present({ ev: event });
  }


  onItemSelectionChanged(e){
    this._router.navigate(['section', e.newItem]);
  }
}
