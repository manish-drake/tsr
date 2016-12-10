import { Injectable, Output, EventEmitter } from '@angular/core';


@Injectable()
export class HeaderService {
    @Output() TitleUpdated = new EventEmitter();


    private _title: string;
    public get title(): string {
        return this._title;
    }
    public set title(v: string) {
        this._title = v;
        this.TitleUpdated.emit({
            title: v
        });
    }
    constructor() {
        this.TitleUpdated.emit(
            { title: this.title }
        )
    }

}