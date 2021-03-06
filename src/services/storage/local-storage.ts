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

    keyForDisabledGuides(){
        return "tsrdisabledguides";
    }

    keyForcurrentLanguage(){
        return "tsrcurrentlanguage";
    }

    keyForAviationMode(){
        return "tsraviationmode";
    }

}