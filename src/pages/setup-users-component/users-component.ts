import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/test-set/user.service';
import { Logger } from "../../services/logging/logger";

@Component({
  selector: 'users-component',
  templateUrl: 'users-component.html'
})
export class SetupUsersComp {

  constructor(
    public _router: Router,
    private route: ActivatedRoute,
    private _svcUser: UserService,
    private _logger: Logger) { }

  parent: string;
  selectedUser: any;
  availableUsers: any;

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.parent = (param as any).parent;
    });
    this._svcUser.getCurrentUser().subscribe(val => this.selectedUser = val);
    this.availableUsers = this._svcUser.getAvailableUsers();
  }

  ngAfterViewInit() {
    this._logger.Info("Setup_User component loaded");
  }

  onGoBack() {
    this._router.navigate(['setup', this.parent]);
  }

  onCardClick(user) {
    this._svcUser.setCurrentUser(user);
  }

}
