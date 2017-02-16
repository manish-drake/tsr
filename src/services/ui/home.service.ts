import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class HomeService {

    constructor() {}

    TitleUpdated:  EventEmitter<any> = new EventEmitter(undefined);
    FooterUpdated: EventEmitter<any> = new EventEmitter(undefined);

    private _title: string;
    public get title(): string {
        return this._title;
    }
    public set title(v: string) {
        this._title = v;
        this.TitleUpdated.emit(v);
    }

    private _footerData: any;
    public get footerData(): any {
        return this._footerData;
    }
    public set footerData(v: any) {
        this._footerData = v;
        this.FooterUpdated.emit(v);
    }
    
}