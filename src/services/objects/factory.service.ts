import { Injectable } from '@angular/core'
import { Test } from '../../core/tests/test'
import { Datum } from '../../core/tests/datum'
import { TestSection } from '../../core/tests/testSection'
import { TestSummary } from '../../core/tests/testSummary'
import { TestParam } from '../../core/tests/testParam'
import { TestParamCell } from '../../core/tests/testParamCell'
import { File } from '../io/file.service'

@Injectable()
export class Factory {

    constructor(private file: File) {

    }

    createTest(name: string): Test {
        var fileContent = this.file.getTextContents(name);
        var test = JSON.parse(fileContent);
        return test;
    }
    createSection(section: string, parent: string): TestSection {
        var testSection: TestSection = new TestSection();
        switch (section) {
            case 'UAT OUT': {
                testSection

                testSection.Name = section;

                var svt = new TestSummary();
                svt.Name = "UAT OUT State Vector Test";

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

                testSection.Summaries.push(svt);
            }
                break;
        }
        return testSection;
    }
}