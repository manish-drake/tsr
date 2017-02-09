import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';

import { LocalStorage } from '../../services/storage/local-storage'

@Injectable()
export class ThemesService {
    private theme: BehaviorSubject<any>;

    indoorTheme: any;
    outdoorTheme: any;

    constructor(private _localStorage: LocalStorage) {
        this.indoorTheme = { className: 'indoor-theme', themeName: 'Indoor' };
        this.outdoorTheme = { className: 'outdoor-theme', themeName: 'Outdoor' };

        var savedTheme = _localStorage.GetItem(this._localStorage.keyForCurrentTheme());
        if (savedTheme != null) this.theme = new BehaviorSubject(JSON.parse(savedTheme));
        else this.theme = new BehaviorSubject(this.indoorTheme);
    }

    getTheme() {
        return this.theme.asObservable();
    }

    setTheme(val) {
        this.theme.next(val);
        this.saveTheme(val);
    }

    switchTheme() {
        var currentTheme;
        this.getTheme().subscribe(val => currentTheme = val);
        if (JSON.stringify(currentTheme) == JSON.stringify(this.indoorTheme)){
            this.setTheme(this.outdoorTheme);
        }
        else{
            this.setTheme(this.indoorTheme);
        }
    }

    saveTheme(val) {
        this._localStorage.SetItem(this._localStorage.keyForCurrentTheme(), JSON.stringify(val));
    }
}