import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';
import { TranslateService } from 'ng2-translate';
import { LocalStorage } from '../../services/storage/local-storage'

@Injectable()
export class LanguageService {

    availableLanguages: any[] = [
        { title: "English", code: "en" },
        { title: "Spanish (Español)", code: "es" },
        { title: "German (Deutsche)", code: "de" },
        { title: "French (français)", code: "fr" },
        { title: "Russian (русский)", code: "ru" },
        { title: "Chinese (中文)", code: "zh" },
        { title: "Japanese (日本語)", code: "ja" },
        { title: "Korean (한국어)", code: "ko" },
        { title: "Portuguese (Português)", code: "pt" },
        { title: "Arabic (عربى)", code: "ar" }
    ]

    private currrentLanguage: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);

    constructor(
        private _localStorage: LocalStorage,
        private translateService: TranslateService
    ) { }

    getCurrrentLanguage() {
        return this.currrentLanguage.asObservable();
    }

    setCurrrentLanguage(val) {
        this.currrentLanguage.next(val);
    }

    changeLanguage(e) {
        this.translateService.use(e.code);
        this.setCurrrentLanguage(e);
        this.setSavedLanguage(e.code);
    }

    getSavedLanguage() {
        var currLanguage = this._localStorage.GetItem(this._localStorage.keyForcurrentLanguage());
        if (currLanguage != null) {
            this.availableLanguages.forEach(element => {
                if (element.code == currLanguage) this.changeLanguage(element);
            });
        }
        else this.currrentLanguage = new BehaviorSubject(this.availableLanguages[0]);
    }

    setSavedLanguage(e) {
        this._localStorage.SetItem(this._localStorage.keyForcurrentLanguage(), e);
    }
}