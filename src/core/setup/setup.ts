import { TestParamCell } from '../tests/testParamCell';
import { Dictionary } from '../../common/dictionary'

export class Setup{
    
    private _Styles : Dictionary<string, string>;
    public get Styles() : Dictionary<string, string> {
        if(!this._Styles)
            this._Styles = new Dictionary<string, string>();
        return this._Styles;
    }
    
    private _Name : string;
    public get Name() : string {
        return this._Name;
    }
    public set Name(v : string) {
        this._Name = v;
    }

    private _Summaries : Setup[];
    public get Summaries() : Setup[] {
        if(!this._Summaries)
            this._Summaries = [];
        return this._Summaries;
    }
    public set Summaries(v : Setup[]) {
        this._Summaries = v;
    }
    
    private _TestParamCells : TestParamCell[];
    public get TestParamCells() : TestParamCell[] {
        if(!this._TestParamCells)
            this._TestParamCells = [];
        return this._TestParamCells;
    }
    public set TestParamCells(v : TestParamCell[]) {
        this._TestParamCells = v;
    }
}