import { Injectable } from '@angular/core';

import { VehicleSection } from '../../core/tests/vehicleSection';
import { Test } from '../../core/tests/test';
import { TestGroup } from '../../core/tests/testgroup';
import { Dictionary } from '../../common/dictionary';
import { BehaviorSubject } from 'Rxjs';
import { Factory } from '../../services/objects/factory.service';

@Injectable()
export class BrokerFactoryService {
    /**
     *
     */
    constructor(private objectService: Factory) { }

    private testgroups = new BehaviorSubject<any[]>([]);

    getTestgroups() {
        return this.testgroups.asObservable();
    }
    setTestgroups(e) {
        this.testgroups.next(e);
    }

    createTestGroups(testGroups: TestGroup) {
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

    generateTestGroups(headername) {
        var testGroupsData = this.objectService.createTestGroupsData(headername);
        this.setTestgroups(this.createTestGroups(testGroupsData));
    }

    createVehicleSection(summaryData: VehicleSection) {
        var tests: any[] = [];
        summaryData.Summaries.forEach(summary => {
            var test = {
                name: summary.Name,
                parent: summaryData.Name,
                rows: this.createParamsGrid(summary, summaryData.Styles)
            }
            tests.push(test)
        })
        return { name: summaryData.Name, tests: tests };
    }

    private testDetail = new BehaviorSubject<any[]>([]);

    getTestsDetail() {
        return this.testDetail.asObservable();
    }
    setTestsDetail(e) {
        this.testDetail.next(e);

    }

    createTestsDetail(testData: Test) {
        var testDS: any[] = [];
        testData.Summaries.forEach(summary => {
            // var testE = [];
            // summary.Summaries.forEach(subSummary => {
            //     console.log(JSON.stringify(subSummary));
            //     var testE = this.createParamsGrid(subSummary, summary.Styles)
            // }
            // )
            // console.log(JSON.stringify(testE));
            var testD = {
                name: summary.Name,
                parent: testData.Name,
                rows: this.createParamsGrid(summary, testData.Styles)
            }
            testDS.push(testD);
        })
        return testDS;
    }

    generateTestsDetail(testName) {
        var testsData = this.objectService.createTestsData(testName);
        this.setTestsDetail(this.createTestsDetail(testsData));
    }

    private footerResultStatus = new BehaviorSubject<any[]>([]);

    getFooterResultStatus() {
        return this.footerResultStatus.asObservable();
    }
    setFooterResultStatus(e) {
        this.footerResultStatus.next(e);

    }
    createFooterResultStatus(footerData: Test) {
        var testDS: any[] = [];
        footerData.Summaries.forEach(summary => {
            var testD = {
                name: summary.Name,
                parent: footerData.Name,
                rows: this.createParamsGrid(summary, footerData.Styles)
            }
            testDS.push(testD);
        })
        return testDS;
    }

    generateFooterResultStatus(_case){
        var footerResultStatusData = this.objectService.createFooterResultStatusData(_case);
        var footerResultStatus = this.createFooterResultStatus(footerResultStatusData);
        this.setFooterResultStatus(footerResultStatus);
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