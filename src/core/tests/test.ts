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