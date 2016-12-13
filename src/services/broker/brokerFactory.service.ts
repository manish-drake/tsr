import { TestSection } from '../../core/tests/testSection'
import { Test } from '../../core/tests/test'
import { Dictionary } from '../../common/dictionary';

export class BrokerFactoryService {
    /**
     *
     */
    constructor() {

    }
    createSectionDataSource(testSection: TestSection) {
        var tests: any[] = [];
        testSection.Summaries.forEach(summary => {
            var test = {
                name: summary.Name,
                parent: testSection.Name,
                rows: this.createParamsGrid(summary, testSection.Styles)
            }
            tests.push(test);
        })
        return { name: testSection.Name, tests: tests };
    }

    createTestDataSource(test: Test) {
        var testDS = {
            name: test.Name,
            rows: this.createParamsGrid(test, new Dictionary<string, string>())
        };
        return testDS;
    }
    /*
    <table style="table-layout: fixed ">
        <tr *ngFor="let row of test.rows">
            <td 
                *ngFor="let cell in row" 
                colspan="cell.colspan"
                rowspan="cell.rowspan">
                    <span [class]="cell.keyStyle">{{ cell.key }}</span>
                    <span [class]="cell.valueStyle">{{ cell.value }}</span>
            </td>
        </tr>
    </table>
    */
    private createParamsGrid(summary: Test, parentStyles: Dictionary<string, string>) {
        var maxRowIndex = 0, maxColIndex = 0;
        summary.TestParamCells.forEach(cell => {
            maxRowIndex = maxRowIndex > cell.Row ? maxRowIndex : cell.Row;
            maxColIndex = maxColIndex > cell.Column ? maxColIndex : cell.Column;
        })

        var createCell = function (
            key: string = "",
            value: string = "",
            keyStyle: string = "",
            valueStyle: string = "",
            colspan: number = 1,
            rowspan: number = 1,
            empty: boolean = true) {
            return {
                "keyStyle": keyStyle,
                "valueStyle": valueStyle,
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
                this.getFallbackValue("key", [cell.Styles, summary.Styles, parentStyles]),
                this.getFallbackValue("value", [cell.Styles, summary.Styles, parentStyles]),
                cell.ColSpan,
                cell.RowSpan,
                false)
        });

        return rows;
    }
    getFallbackValue(key: string, dict: Dictionary<string, string>[]) {
        var value = "";
        var flag = 0;


        dict.forEach(d => {
            if (d.containsKey(key)) {
                if (flag <= 0)
                    value = d.getValue(key);
                flag = 1;
            }
        })
        return value;
    }
} 