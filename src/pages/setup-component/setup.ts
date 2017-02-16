import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services/ui/home.service'


@Component({
  selector: 'page-setup',
  templateUrl: 'setup.html'
})
export class SetupComp {

  constructor(
    private route: ActivatedRoute,
    private _svcHome: HomeService) { }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SetupComp');
  }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this._svcHome.title = (param as any).name;
    })
  }

}
