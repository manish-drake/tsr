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
 //------------------------UAT State Vector Test------------------------
                var svt = new TestSummary();
                svt.Name = "UAT State Vector Test";

                var add = new TestParam();
                add.Key = "Address:";
                var cAdd = new TestParamCell(add);
                cAdd.Row = 0;
                cAdd.Column = 0;

                var addQ = new TestParam();
                addQ.Key = "Addr Qual:";
                var cAddQ = new TestParamCell(addQ);
                cAddQ.Row = 0;
                cAddQ.Column = 1;

                var pld = new TestParam();
                pld.Key = "Payload:";
                var cPld = new TestParamCell(pld);
                cPld.Row = 1;
                cPld.Column = 0;

                var agst = new TestParam();
                agst.Key = "A/G State:";
                var cAgst = new TestParamCell(agst);
                cAgst.Row = 1;
                cAgst.Column = 1;

                var rfl = new TestParam();
                rfl.Key = "RF Link:";
                var cRfl = new TestParamCell(rfl);
                cRfl.Row = 2;
                cRfl.Column = 0;

                var gps = new TestParam();
                gps.Key = "GPS:";
                var cGps = new TestParamCell(gps);
                cGps.Row = 2;
                cGps.Column = 1;


                svt.TestParamCells.push(cAdd);
                svt.TestParamCells.push(cAddQ);
                svt.TestParamCells.push(cPld);
                svt.TestParamCells.push(cAgst);
                svt.TestParamCells.push(cRfl);
                svt.TestParamCells.push(cGps);

                testSection.Summaries.push(svt);
 //------------------------UAT AUX State Vector Test------------------------
                var asvt = new TestSummary();
                asvt.Name = "UAT AUX State Vector Test";

                var add1 = new TestParam();
                add1.Key = "Address:";
                var cAdd1 = new TestParamCell(add1);
                cAdd1.Row = 0;
                cAdd1.Column = 0;

                var addQ1 = new TestParam();
                addQ1.Key = "Addr Qual:";
                var cAddQ1 = new TestParamCell(addQ1);
                cAddQ1.Row = 0;
                cAddQ1.Column = 1;

                var pld1 = new TestParam();
                pld1.Key = "Payload:";
                var cPld1 = new TestParamCell(pld1);
                cPld1.Row = 1;
                cPld1.Column = 0;

                var alttp1 = new TestParam();
                alttp1.Key = "Alt Type:";
                var cAlttp1 = new TestParamCell(alttp1);
                cAlttp1.Row = 1;
                cAlttp1.Column = 1;

                var rfl1 = new TestParam();
                rfl1.Key = "RF Link:";
                var cRfl1 = new TestParamCell(rfl1);
                cRfl1.Row = 2;
                cRfl1.Column = 0;

                var gps1 = new TestParam();
                gps1.Key = "GPS:";
                var cGps1 = new TestParamCell(gps1);
                cGps1.Row = 2;
                cGps1.Column = 1;


                asvt.TestParamCells.push(cAdd1);
                asvt.TestParamCells.push(cAddQ1);
                asvt.TestParamCells.push(cPld1);
                asvt.TestParamCells.push(cAlttp1);
                asvt.TestParamCells.push(cRfl1);
                asvt.TestParamCells.push(cGps1);

                testSection.Summaries.push(asvt);

//------------------------UAT Mode Status Test-----------------------------
                var mst = new TestSummary();
                mst.Name = "UAT Mode Status Test";

                var add2 = new TestParam();
                add2.Key = "Address:";
                var cAdd2 = new TestParamCell(add2);
                cAdd2.Row = 0;
                cAdd2.Column = 0;

                var addQ2 = new TestParam();
                addQ2.Key = "Addr Qual:";
                var cAddQ2 = new TestParamCell(addQ2);
                cAddQ2.Row = 0;
                cAddQ2.Column = 1;

                var pld2 = new TestParam();
                pld2.Key = "Payload:";
                var cPld2 = new TestParamCell(pld2);
                cPld2.Row = 1;
                cPld2.Column = 0;

                var fid = new TestParam();
                fid.Key = "Flight ID:";
                var cFid = new TestParamCell(fid);
                cFid.Row = 1;
                cFid.Column = 1;

                var rfl2 = new TestParam();
                rfl2.Key = "RF Link:";
                var cRfl2 = new TestParamCell(rfl2);
                cRfl2.Row = 2;
                cRfl2.Column = 0;

                var gps2 = new TestParam();
                gps2.Key = "GPS:";
                var cGps2 = new TestParamCell(gps2);
                cGps2.Row = 2;
                cGps2.Column = 1;


                mst.TestParamCells.push(cAdd2);
                mst.TestParamCells.push(cAddQ2);
                mst.TestParamCells.push(cPld2);
                mst.TestParamCells.push(cFid);
                mst.TestParamCells.push(cRfl2);
                mst.TestParamCells.push(cGps2);

                testSection.Summaries.push(mst);

  //------------------------UAT RF Link Test-----------------------------
                var rft = new TestSummary();
                rft.Name = "UAT RF Test";

                var add3 = new TestParam();
                add3.Key = "Address:";
                var cAdd3 = new TestParamCell(add3);
                cAdd3.Row = 0;
                cAdd3.Column = 0;

                var addQ3 = new TestParam();
                addQ3.Key = "Addr Qual:";
                var cAddQ3 = new TestParamCell(addQ3);
                cAddQ3.Row = 0;
                cAddQ3.Column = 1;

                var pld3 = new TestParam();
                pld3.Key = "Payload:";
                var cPld3 = new TestParamCell(pld3);
                cPld3.Row = 1;
                cPld3.Column = 0;

                var pwr = new TestParam();
                pwr.Key = "Power:";
                var cPwr = new TestParamCell(pwr);
                cPwr.Row = 1;
                cPwr.Column = 1;

                var freq = new TestParam();
                freq.Key = "Freq:";
                var cFreq = new TestParamCell(freq);
                cFreq.Row = 2;
                cFreq.Column = 0;

                var gps3 = new TestParam();
                gps3.Key = "GPS:";
                var cGps3 = new TestParamCell(gps3);
                cGps3.Row = 2;
                cGps3.Column = 1;


                rft.TestParamCells.push(cAdd3);
                rft.TestParamCells.push(cAddQ3);
                rft.TestParamCells.push(cPld3);
                rft.TestParamCells.push(cPwr);
                rft.TestParamCells.push(cFreq);
                rft.TestParamCells.push(cGps3);

                testSection.Summaries.push(rft);      

//------------------------UAT Summary-----------------------------
                var summary = new TestSummary();
                summary.Name = "UAT Summary";

                var add4 = new TestParam();
                add4.Key = "Address:";
                var cAdd4 = new TestParamCell(add4);
                cAdd4.Row = 0;
                cAdd4.Column = 0;

                var addQ4 = new TestParam();
                addQ4.Key = "Addr Qual:";
                var cAddQ4 = new TestParamCell(addQ4);
                cAddQ4.Row = 0;
                cAddQ4.Column = 1;

                var pld4 = new TestParam();
                pld4.Key = "Payload:";
                var cPld4 = new TestParamCell(pld4);
                cPld4.Row = 1;
                cPld4.Column = 0;

                var agst4 = new TestParam();
                agst4.Key = "A/G State:";
                var cAgst4 = new TestParamCell(agst4);
                cAgst4.Row = 1;
                cAgst4.Column = 1;

                var rfl4 = new TestParam();
                rfl4.Key = "RF Link:";
                var cRfl4 = new TestParamCell(rfl4);
                cRfl4.Row = 2;
                cRfl4.Column = 0;

                var gps4 = new TestParam();
                gps4.Key = "GPS:";
                var cGps4 = new TestParamCell(gps4);
                cGps4.Row = 2;
                cGps4.Column = 1;


                summary.TestParamCells.push(cAdd4);
                summary.TestParamCells.push(cAddQ4);
                summary.TestParamCells.push(cPld4);
                summary.TestParamCells.push(cAgst4);
                summary.TestParamCells.push(cRfl4);
                summary.TestParamCells.push(cGps4);

                testSection.Summaries.push(summary);        
//------------------------UAT Target State Test-----------------------------
                var tst = new TestSummary();
                tst.Name = "UAT Target State Test";

                var add5 = new TestParam();
                add5.Key = "Address:";
                var cAdd5 = new TestParamCell(add5);
                cAdd5.Row = 0;
                cAdd5.Column = 0;

                var addQ5 = new TestParam();
                addQ5.Key = "Addr Qual:";
                var cAddQ5 = new TestParamCell(addQ5);
                cAddQ5.Row = 0;
                cAddQ5.Column = 1;

                var pld5 = new TestParam();
                pld5.Key = "Payload:";
                var cPld5 = new TestParamCell(pld5);
                cPld5.Row = 1;
                cPld5.Column = 0;

                var sat = new TestParam();
                sat.Key = "Sel Alt:";
                var cSat = new TestParamCell(sat);
                cSat.Row = 1;
                cSat.Column = 1;

                var rfl4 = new TestParam();
                rfl4.Key = "RF Link:";
                var cRfl5 = new TestParamCell(rfl4);
                cRfl5.Row = 2;
                cRfl5.Column = 0;

                var gps5 = new TestParam();
                gps5.Key = "GPS:";
                var cGps5 = new TestParamCell(gps5);
                cGps5.Row = 2;
                cGps5.Column = 1;


                tst.TestParamCells.push(cAdd5);
                tst.TestParamCells.push(cAddQ5);
                tst.TestParamCells.push(cPld5);
                tst.TestParamCells.push(cSat);
                tst.TestParamCells.push(cRfl5);
                tst.TestParamCells.push(cGps5);

                testSection.Summaries.push(tst);       

                //------------------------UAT Trajectory Change Test-----------------------------
                var tct = new TestSummary();
                tct.Name = "UAT Trajectory Change Test";

                var add6 = new TestParam();
                add6.Key = "Address:";
                var cAdd6 = new TestParamCell(add6);
                cAdd6.Row = 0;
                cAdd6.Column = 0;

                var addQ6 = new TestParam();
                addQ6.Key = "Addr Qual:";
                var cAddQ6 = new TestParamCell(addQ6);
                cAddQ5.Row = 0;
                cAddQ5.Column = 1;

                var pld6 = new TestParam();
                pld6.Key = "Payload:";
                var cPld6 = new TestParamCell(pld6);
                cPld6.Row = 1;
                cPld6.Column = 0;

                var tc = new TestParam();
                tc.Key = "Sel Alt:";
                var cTc = new TestParamCell(tc);
                cTc.Row = 1;
                cTc.Column = 1;

                var rfl6 = new TestParam();
                rfl6.Key = "RF Link:";
                var cRfl6 = new TestParamCell(rfl6);
                cRfl6.Row = 2;
                cRfl6.Column = 0;

                var gps6 = new TestParam();
                gps6.Key = "GPS:";
                var cGps6 = new TestParamCell(gps6);
                cGps6.Row = 2;
                cGps6.Column = 1;


                tct.TestParamCells.push(cAdd6);
                tct.TestParamCells.push(cAddQ6);
                tct.TestParamCells.push(cPld6);
                tct.TestParamCells.push(cTc);
                tct.TestParamCells.push(cRfl6);
                tct.TestParamCells.push(cGps6);

                testSection.Summaries.push(tct);    
            }
                break;
        }
        return testSection;
    }
}