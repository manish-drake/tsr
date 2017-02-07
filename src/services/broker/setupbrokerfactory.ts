import { Injectable } from '@angular/core';

import { Setup } from '../../core/setup/setup'
import { Dictionary } from '../../common/dictionary';

@Injectable()
export class SetupBrokerFactory {

    constructor() { }

    createSetupCard(data: Setup) {
        alert(data.Summaries)
        var ds: any[] = [];
        data.Summaries.forEach(summary => {
            var testD = {
                name: summary.Name,
                parent: data.Name,
                rows: this.createParamsGrid(summary, data.Styles)
            }
            ds.push(testD);
        })
        alert(JSON.stringify(ds))
        return ds;
    }

    private createParamsGrid(summary: Setup, parentStyles: Dictionary<string, string>) {
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