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
    
    constructor() {
        this.Name = "UAT OUT";
        
        var svt = new TestSummary();
        svt.Name="UAT OUT State Vector Test";
        
        var add = new TestParam();
        add.Key = "Address";
        var cAdd = new TestParamCell(add);
        cAdd.Row = 0;
        cAdd.Column = 0;

        var addQ = new TestParam();
        addQ.Key = "Addr Qual";
        var cAddQ = new TestParamCell(addQ);
        cAddQ.Row = 0;
        cAddQ.Column = 1; 
        
        var pld = new TestParam();
        pld.Key = "Payload";
        var cPld = new TestParamCell(pld);
        cPld.Row = 1;
        cPld.Column = 0;

        svt.TestParamCells.push(cAdd);
        svt.TestParamCells.push(cAddQ);
        svt.TestParamCells.push(cPld);

        this.Summaries.push(svt);
    }
}