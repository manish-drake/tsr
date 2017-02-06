import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';

import { LocalStorage } from '../../services/storage/local-storage'

@Injectable()
export class ThemesService {
    private theme: BehaviorSubject<String>;
    availableThemes: { className: string, prettyName: string }[];

    constructor(private _localStorage: LocalStorage) {
        var savedTheme = _localStorage.GetItem(this._localStorage.keyForCurrentTheme());
        if (savedTheme != null) this.theme = new BehaviorSubject(savedTheme);
        else this.theme = new BehaviorSubject('indoor-theme');
        this.availableThemes = [
            { className: 'indoor-theme', prettyName: 'Indoor' },
            { className: 'outdoor-theme', prettyName: 'Outdoor' }
        ];
    }

    setTheme(val) {
        this.theme.next(val);
    }

    getTheme() {
        return this.theme.asObservable();
    }
}