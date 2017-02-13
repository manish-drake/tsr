import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { HeaderService } from '../../services/ui/header.service'

@Component({
  selector: 'page-setup',
  templateUrl: 'setup.html'
})
export class SetupComp {

  constructor(private route: ActivatedRoute,
  private _svcHeader: HeaderService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetupComp');
  }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this._svcHeader.title = (param as any).name;
    })
  }

}
