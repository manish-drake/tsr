import { TestParamCell } from './testParamCell';
import { TestParam } from './testParam';

export class TestSummary{
    
    
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
    
        
    constructor() {
                        
    }
    getParam(row:number, col:number): TestParam{
        this.TestParamCells.forEach(item=>{
            if((item.Row==row) && (item.Column==col))
                return  item.TestParam;
        });
        return new TestParam();
    }


    getRow(row:number): TestParam[]{
        var rowCells: TestParam[]=[];
        this.TestParamCells.forEach(cell => {
            if(cell.Row == row)
                rowCells.push(cell.TestParam);
        });
        return rowCells;
    }
}