import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from '../../services/ui/header.service';
import { UserService } from '../../services/test-set/user.service';
import { ThemeService } from '../../services/themes/themes.service';

@Component({
  selector: 'page-setup',
  templateUrl: 'setup.html'
})
export class SetupComp {

  constructor(
    private route: ActivatedRoute,
    private _router: Router,
    private _svcHeader: HeaderService,
    private _svcUser: UserService,
    private _svcTheme: ThemeService) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetupComp');
  }

  titleName: string;
  currentUser: any;
  currentTheme: any;

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.titleName = (param as any).name;
      this._svcHeader.title = this.titleName;
    });
    this._svcUser.getCurrentUser().subscribe(val => this.currentUser = val);
    this._svcTheme.getTheme().subscribe(val => this.currentTheme = val);
  }

  openDetail(e) {
    this._router.navigate([e, this.titleName]);
  }

}
