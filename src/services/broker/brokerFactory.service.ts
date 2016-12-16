import { TestSection } from '../../core/tests/testSection'
import { Test } from '../../core/tests/test'
import { Group } from '../../core/tests/group'
import { Dictionary } from '../../common/dictionary';

export class BrokerFactoryService {
    /**
     *
     */
    constructor() {

    }
    createSectionsSummary(summaryData: TestSection) {
        var tests: any[] = [];
        summaryData.Summaries.forEach(summary => {
            var test = {
                name: summary.Name,
                parent: summaryData.Name,
                rows: this.createParamsGrid(summary, summaryData.Styles)
            }
            tests.push(test);
        })
        return { name: summaryData.Name, tests: tests };
    }

    createSectionsDetail(detailData: Test) {
        var testDS: any[] = [];
        detailData.Summaries.forEach(summary => {
            var testD = {
                name: summary.Name,
                parent:detailData.Name,
                rows: this.createParamsGrid(summary, detailData.Styles)
            }
            testDS.push(testD);
        })
         return { name: detailData.Name, tests: testDS };
    }

    createGroupDatasource(group: Group) {
        var groupDS = {
            "name": group.Name,
            "sections": group.Sections.map(section => {
                return {
                    "name": section.Name,
                    "count": section.Summaries.length
                };
            })
        };
        return groupDS;
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
                    <span [class]="cell.unitStyle">{{ cell.unit }}</span>
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
            unit: string = "",
            keyStyle: string = "",
            valueStyle: string = "",
            unitStyle: string = "",
            colspan: number = 1,
            rowspan: number = 1,
            empty: boolean = true) {
            return {
                "keyStyle": keyStyle,
                "valueStyle": valueStyle,
                "unitStyle": unitStyle,
                "colspan": colspan,
                "rowspan": rowspan,
                "key": key,
                "value": value,
                "unit": unit,
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
                cell.TestParam.Unit,
                this.getFallbackValue("key", [cell.Styles, summary.Styles, parentStyles]),
                this.getFallbackValue("value", [cell.Styles, summary.Styles, parentStyles]),
                this.getFallbackValue("unit", [cell.Styles, summary.Styles, parentStyles]),
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