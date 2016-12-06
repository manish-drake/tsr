export class TestParam{
    
    private _Key : string;
    public get Key() : string {
        return this._Key;
    }
    public set Key(v : string) {
        this._Key = v;
    }
    
    private _Value : string;
    public get Value() : string {
        return this._Value;
    }
    public set Value(v : string) {
        this._Value = v;
    }
    
    private _Unit : string;
    public get Unit() : string {
        return this._Unit;
    }
    public set Unit(v : string) {
        this._Unit = v;
    }
    
    private _Alignment : number;
    public get Alignment() : number {
        return this._Alignment;
    }
    public set Alignment(v : number) {
        this._Alignment = v;
    }

    
    private _Style : string;
    public get Style() : string {
        return this._Style;
    }
    public set Style(v : string) {
        this._Style = v;
    }
    
    
    private _IsEmpty : boolean;
    public get IsEmpty() : boolean {
        return this._IsEmpty;
    }
    
    /**
     *
     */
    constructor(isEmpty:boolean = false) {
        this._IsEmpty = false;
    }
}