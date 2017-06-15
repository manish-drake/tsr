import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';
import { LocalStorage } from '../../services/storage/local-storage'
import { Logger } from "../logging/logger";

@Injectable()
export class UserService {

    private currentUser: BehaviorSubject<any> = new BehaviorSubject(undefined);

    availableUsers: any[] = [];



    constructor(
        private _localStorage: LocalStorage,
        private _logger: Logger) {
        var defaultUser = { name: "OPERATOR", language: "English" };

        this.availableUsers.push(
            defaultUser,
            { name: "KEN FILARDO", language: "English" },
            { name: "DAVE KLAMET", language: "English" },
            { name: "STEVE O'HARA", language: "English" }
        );

        this.currentUser = new BehaviorSubject(defaultUser);
    }

    getAvailableUsers() {
        return this.availableUsers;
    }

    getCurrentUser() {
        return this.currentUser.asObservable();
    }

    setCurrentUser(val) {
        this.currentUser.next(val);
    }
}