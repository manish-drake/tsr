import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'page-gps-component',
  templateUrl: 'gps-component.html'
})
export class SetupGPSComp {

  constructor(
    public _router: Router,
    private route: ActivatedRoute
  ) {}

  parent: string;

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.parent = (param as any).parent;
    });
  }

  onGoBack() {
    this._router.navigate(['setup', this.parent]);
  }

}
