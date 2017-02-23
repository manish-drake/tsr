import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ThemeService } from '../../services/themes/themes.service';

@Component({
  selector: 'page-display-component',
  templateUrl: 'display-component.html'
})
export class SetupDisplayComp {

  constructor(
    public _router: Router,
    private route: ActivatedRoute,
    private _svcTheme: ThemeService
  ) {}

  parent: string;
  currentTheme: any;

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.parent = (param as any).parent;
    });
    this._svcTheme.getTheme().subscribe(val => this.currentTheme = val);
  }

  onGoBack() {
    this._router.navigate(['setup', this.parent]);
  }

  onThemeChange(){
    this._svcTheme.switchTheme()
  }

}