import { TestParam } from './testParam';
import { Dictionary } from '../../common/dictionary'

export class TestParamCell{
    private _Styles : Dictionary<string, string>;
    public get Styles() : Dictionary<string, string> {
        if(!this._Styles)
            this._Styles = new Dictionary<string, string>();
        return this._Styles;
    }
    private _TestParam : TestParam;
    public get TestParam() : TestParam {
        return this._TestParam;
    }
    public set TestParam(v : TestParam) {
        this._TestParam = v;
    }

    
    private _Row : number;
    public get Row() : number {
        return this._Row;
    }
    public set Row(v : number) {
        this._Row = v;
    }
    
    
    private _Column : number;
    public get Column() : number {
        return this._Column;
    }
    public set Column(v : number) {
        this._Column = v;
    }
    
    
    private _RowSpan : number;
    public get RowSpan() : number {
        return this._RowSpan;
    }
    public set RowSpan(v : number) {
        this._RowSpan = v;
    }
    
    
    private _ColSpan : number;
    public get ColSpan() : number {
        return this._ColSpan;
    }
    public set ColSpan(v : number) {
        this._ColSpan = v;
    }
    /**
     *
     */
    constructor(testParam: TestParam) {
        this._TestParam = testParam;
    }

}

