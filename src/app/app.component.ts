import { Component, ViewChild, OnInit } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { SectionsPage } from '../pages/sections/sections';

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
  rootPage = SectionsPage;
  
  public hb = new Hamburger();

  constructor(platform: Platform, private popoverService:PopoverService, private _svcHeader: HeaderService, private _router: Router, private _themes: ThemesService) {
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
  
  // moreActionPopover() {
  //   let popover = this.popoverCtrl.create(MoreActionsPopover);
  //   popover.present({ ev: event });
  // }

  onItemSelectionChanged(e){
    this._router.navigate(['section', e]);
  }
}
