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

    getRows(): Array<TestParam[]>{
        var rows: Array<TestParam[]> = new Array<TestParam[]>();
        var maxRowIndex = 0, maxColIndex = 0;
        this.TestParamCells.forEach(cell => {
            maxRowIndex = maxRowIndex > cell.Row? maxRowIndex: cell.Row;  
            maxColIndex = maxColIndex > cell.Column? maxColIndex: cell.Column;          
        })
        
        for(let i = 0; i <= maxRowIndex; i++){
            var cols:TestParam[]=[];
            for(let j = 0; j <= maxColIndex; j++){
                cols.push(new TestParam(true))                
            }
            rows.push(cols);
        }
        
        this.TestParamCells.forEach(cell => {
            rows[cell.Row][cell.Column] = cell.TestParam;
        })
        
        return rows;
    }
}