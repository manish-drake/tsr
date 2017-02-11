import { Injectable } from '@angular/core'

import { Setup } from '../../core/setup/setup'
import { TestParam } from '../../core/tests/testParam'
import { TestParamCell } from '../../core/tests/testParamCell'


@Injectable()
export class SetupFactory {

    constructor() { }

    createAllSetupData() {
        var allsetup: any;
        allsetup = [
            this.createSetupData("USER"),
            this.createSetupData("DISPLAY"),
            this.createSetupData("GPS"),
            this.createSetupData("NETWORK"),
            this.createSetupData("SYSTEM INFO"),
            this.createSetupData("CONNECTION")
        ];
        return allsetup
    }

    createSetupData(name: string): Setup {
        var _setup: Setup = new Setup();
        switch (name) {
            case 'USER': {
                _setup.Name = name;

                var smry = new Setup();

                var add1 = new TestParam();
                add1.Key = "CURRENT USER:";
                add1.Value = "Operator";
                var cAdd1 = new TestParamCell(add1);
                cAdd1.Row = 0;
                cAdd1.Column = 0;
                cAdd1.Styles.add("key", "detailLabel");
                cAdd1.Styles.add("value", "detailResult");

                smry.TestParamCells.push(cAdd1);

                var add2 = new TestParam();
                add2.Key = "Language:";
                add2.Value = "English";
                var cAdd2 = new TestParamCell(add2);
                cAdd2.Row = 1;
                cAdd2.Column = 0;
                cAdd2.Styles.add("key", "detailLabel");
                cAdd2.Styles.add("value", "detailResult");

                smry.TestParamCells.push(cAdd2);

                _setup.Summaries.push(smry);
            }
                break;
            case 'DISPLAY': {
                _setup.Name = name;
            }
                break;
            case 'GPS': {
                _setup.Name = name;
            }
                break;
            case 'NETWORK': {
                _setup.Name = name;
            }
                break;
            case 'SYSTEM INFO': {
                _setup.Name = name;
            }
                break;
            case 'CONNECTION': {
                _setup.Name = name;
            }
                break;
        }
        return _setup;
    }
}