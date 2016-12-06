import { TestSection } from '../../core/tests/testSection'
import { TestParamCell } from '../../core/tests/testParamCell'
import { TestParam } from '../../core/tests/testParam'
import { TestSummary } from '../../core/tests/testSummary'

export class BrokerFactoryService {
    /**
     *
     */
    constructor() {

    }
    createSectionDataSource(testSection: TestSection) {
        var tests: any[] = [];
        testSection.Summaries.forEach(summary => {
            var test = { name: summary.Name, rows: this.createParamsGrid(summary) }
            tests.push(test);
        })
        return { name: testSection.Name, tests: tests };
    }

    /*
    <table style="table-layout: fixed ">
        <tr *ngFor="let row of test.rows">
            <td 
                *ngFor="let cell in row.cells" 
                [class]="cell.style"
                colspan="cell.colspan"
                rowspan="cell.rowspan">
                    <span>{{ cell.key }}</span>
                    <span>{{ cell.value }}</span>
            </td>
        </tr>
    </table>
    */
    private createParamsGrid(summary: TestSummary) {
        var maxRowIndex = 0, maxColIndex = 0;
        summary.TestParamCells.forEach(cell => {
            maxRowIndex = maxRowIndex > cell.Row ? maxRowIndex : cell.Row;
            maxColIndex = maxColIndex > cell.Column ? maxColIndex : cell.Column;
        })

        var createCell = function (
            key: string = "", 
            value: string = "", 
            style: string = "", 
            colspan: number = 1, 
            rowspan: number = 1,
            empty:boolean = true) {
            return {
                "style": style,
                "colspan": colspan,
                "rowspan": rowspan,
                "key": key,
                "value": value,
                "empty": empty
            };
        }

        var rows: any[] = [];
        for (let i = 0; i <= maxRowIndex; i++) {
            var cells: any[] = [];
            for (let j = 0; j <= maxColIndex; j++) {
                cells.push(createCell())
            }
            rows.push(cells);
        }

        summary.TestParamCells.forEach(cell => {            
            rows[cell.Row][cell.Column] = createCell(
                cell.TestParam.Key, 
                cell.TestParam.Value, 
                cell.TestParam.Style, 
                cell.ColSpan, 
                cell.RowSpan,
                false)
        });

        return rows;
    }
} 