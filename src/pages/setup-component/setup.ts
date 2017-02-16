import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../../services/test-set/user.service';
import { ThemeService } from '../../services/themes/themes.service';
import { HomeService } from '../../services/ui/home.service'

@Component({
  selector: 'page-setup',
  templateUrl: 'setup.html'
})
export class SetupComp {

  constructor(
    private route: ActivatedRoute,
    private _router: Router,
    private _svcUser: UserService,
    private _svcTheme: ThemeService,
    private _svcHome: HomeService) { }

  titleName: string;
  currentUser: any;
  currentTheme: any;

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.titleName = (param as any).name;
      this._svcHome.title = (param as any).name;
    });
    this._svcUser.getCurrentUser().subscribe(val => this.currentUser = val);
    this._svcTheme.getTheme().subscribe(val => this.currentTheme = val);
  }
  
  openDetail(e) {
    this._router.navigate([e, this.titleName]);
  }

}
