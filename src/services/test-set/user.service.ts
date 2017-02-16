import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';
import { LocalStorage } from '../../services/storage/local-storage'

@Injectable()
export class UserService {

    private currentUser: BehaviorSubject<any> = new BehaviorSubject(undefined);

    availableUsers: any[] = [];

    defaultUser = { name: "OPERATOR", language: "English" };

    constructor(private _localStorage: LocalStorage) {
        this.availableUsers.push(this.defaultUser);

        this.availableUsers.push(
            { name: "KEN FILARDO", language: "English" },
            { name: "DAVE KLAMET", language: "English" },
            { name: "STEVE O'HARA", language: "English" }
        );

        var savedCurrentUser = _localStorage.GetItem(this._localStorage.keyForCurrentUser());
        // if (savedCurrentUser != null || savedCurrentUser != undefined) {
        //     alert("1: "+ savedCurrentUser)
        //     this.currentUser = new BehaviorSubject(JSON.parse(savedCurrentUser));
        //     alert(JSON.stringify(this.currentUser))
        // }
        // else {
        //     alert("2: "+ savedCurrentUser)
            this.currentUser = new BehaviorSubject(this.defaultUser);
        // }
    }

    getAvailableUsers() {
        return this.availableUsers;
    }

    getCurrentUser() {
        return this.currentUser.asObservable();
    }

    setCurrentUser(val) {
        this.currentUser.next(val);
        this.saveCurrentUser(val);
    }

    saveCurrentUser(val) {
        this._localStorage.SetItem(this._localStorage.keyForCurrentUser(), JSON.stringify(val));
    }
}