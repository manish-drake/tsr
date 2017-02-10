import { Injectable } from "@angular/core";

@Injectable()
export class LocalStorage {

    GetItem(key) {
        return localStorage.getItem(key);
    }

    SetItem(key, data) {
        localStorage.setItem(key, data);
    }

    keyForCurrentTheme(){
        return "tsrcurrenttheme";
    }

    keyForStartItems(){
        return "tsrstartitems";
    }

    keyForCurrentUser(){
        return "tsrcurrentuser";
    }

}