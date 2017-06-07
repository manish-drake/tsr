import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomeService } from '../../services/ui/home.service'
import { LanguageService } from '../../services/language/language-service';
import { Router } from "@angular/router";
import { TestGroupComp } from '../../pages/testgroup-component/testgroup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor(
    public navCtrl: NavController,
    private _svcHome: HomeService,
    private _srvLanguage: LanguageService,
    private router: Router) { }

  title: string;
  footerData: any;

  ngOnInit() {
    this._svcHome.TitleUpdated.subscribe(e => {
      this.title = e;
      if (!e) this.title = "Test Set Remote";
    })
    this.router.navigate(['testgroup','Start']);
    // this._router.navigateByUrl('testgroup/Start'); 
    this._svcHome.FooterUpdated.subscribe(e => this.footerData = e);
    this._srvLanguage.getSavedLanguage();
  }
}
