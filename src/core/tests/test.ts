import { TestParamCell } from './testParamCell';
import { Dictionary } from '../../common/dictionary'

export class Test{
    
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

    private _isFavorite : boolean;
    public get isFavorite() : boolean {
        return this._isFavorite;
    }
    public set isFavorite(v : boolean) {
        this._isFavorite = v;
    }

    private _Summaries : Test[];
    public get Summaries() : Test[] {
        if(!this._Summaries)
            this._Summaries = [];
        return this._Summaries;
    }
    public set Summaries(v : Test[]) {
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