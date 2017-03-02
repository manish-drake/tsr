import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/test-set/user.service';

@Component({
  selector: 'users-component',
  templateUrl: 'users-component.html'
})
export class SetupUsersComp {

  constructor(
    public _router: Router,
    private route: ActivatedRoute,
    private _svcUser: UserService) { }

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
  onGoBack() {
    this._router.navigate(['setup', this.parent]);
  }

  onCardClick(user) {
    this._svcUser.setCurrentUser(user);
  }

}
