import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'page-network-component',
  templateUrl: 'network-component.html'
})
export class SetupNetworkComp {

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
