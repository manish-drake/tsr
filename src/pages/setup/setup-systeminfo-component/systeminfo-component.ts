import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Logger } from "../../../services/logging/logger";

@Component({
  selector: 'page-systeminfo-component',
  templateUrl: 'systeminfo-component.html'
})
export class SetupSystemInfoComp {

  constructor(
    public _router: Router,
    private route: ActivatedRoute,
    private _logger: Logger
  ) { }

  parent: string;

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.parent = (param as any).parent;
    });
  }

  ngAfterViewInit() {
    this._logger.Info("Setup_System_info component loaded");
  }

  onGoBack() {
    this._router.navigate(['setup', this.parent]);
  }

}
