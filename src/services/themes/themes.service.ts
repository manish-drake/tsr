import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class ThemesService {
    private theme: BehaviorSubject<String>;
    availableThemes: { className: string, prettyName: string }[];

    constructor() {
        var savedTheme = localStorage.getItem("tsrtheme")
        if (savedTheme != null) this.theme = new BehaviorSubject(savedTheme);
        else this.theme = new BehaviorSubject('light-theme');
        this.availableThemes = [
            { className: 'light-theme', prettyName: 'Light' },
            { className: 'dark-theme', prettyName: 'Dark' }
        ];
    }

    setTheme(val) {
        this.theme.next(val);
    }

    getTheme() {
        return this.theme.asObservable();
    }
}