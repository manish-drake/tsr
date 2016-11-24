import { Component, ViewChild } from '@angular/core';
import { Platform, PopoverController, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { SectionsPage } from '../pages/sections/sections';

import { MoreActionsPopover } from '../pages/moreactions/moreactions';

@Component({
  templateUrl: `app.html`
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = SectionsPage;

  constructor(platform: Platform, private popoverCtrl: PopoverController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openSections() {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(SectionsPage);
  }

  moreActionPopover() {
    let popover = this.popoverCtrl.create(MoreActionsPopover);
    popover.present({ ev: event });
  }
}
