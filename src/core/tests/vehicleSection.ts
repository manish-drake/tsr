import { Test } from './test';
import { Dictionary } from '../../common/dictionary'

export class VehicleSection{
    
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
    
    private _Summaries : Test[];
    public get Summaries() : Test[] {
        if(!this._Summaries)
            this._Summaries = [];
        return this._Summaries;
    }
    public set Summaries(v : Test[]) {
        this._Summaries = v;
    }
    
}