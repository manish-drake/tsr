import { TestSummary } from './testSummary';
import { TestParam } from './testParam';
import { TestParamCell } from './testParamCell';

export class TestSection{
    
    private _Name : string;
    public get Name() : string {
        return this._Name;
    }
    public set Name(v : string) {
        this._Name = v;
    }
    
    private _Summaries : TestSummary[];
    public get Summaries() : TestSummary[] {
        if(!this._Summaries)
            this._Summaries = [];
        return this._Summaries;
    }
    public set Summaries(v : TestSummary[]) {
        this._Summaries = v;
    }
    
}