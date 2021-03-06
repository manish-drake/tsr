import { Injectable } from '@angular/core';

import { Test } from '../../core/tests/test';
import { TestGroup } from '../../core/tests/testgroup';
import { Dictionary } from '../../common/dictionary';
import { Logger } from "../logging/logger";

@Injectable()
export class BrokerFactoryService {

    constructor(private _logger: Logger) { }

    createTestGroups(testGroups: TestGroup) {
        this._logger.Debug('Creating test groups..');
        var testGroupData = testGroups.Test.map(testgroup => {
            return {
                "name": testgroup.Name,
                "count": testgroup.Summaries.length,
                "isStartItem": testgroup.isStartItem,
                "isGuideAvailable": testgroup.isGuideAvailable
            };
        })
        return testGroupData;
    }

    createTestsDetail(testData: Test) {
        this._logger.Debug('Creating tests detail..');
        var testDS: any[] = [];
        testData.Summaries.forEach(summary => {
            var testD = {
                name: summary.Name,
                parent: testData.Name,
                rows: this.createParamsGrid(summary, testData.Styles)
            }
            testDS.push(testD);
        })
        return testDS;
    }

    createFooterResultStatus(footerData: Test) {
        this._logger.Debug('Creating footer result status..');
        var footerDS = {
            rows: this.createParamsGrid(footerData, footerData.Styles)
        }
        return footerDS;
    }

    createVehicleData(vehicleData: Test) {
        this._logger.Debug('Creating vehicle data..');
        var vehicleDS = {
            rows: this.createParamsGrid(vehicleData, vehicleData.Styles)
        }
        return vehicleDS;
    }

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