import { Injectable } from '@angular/core'
// import { TestSection } from '../../core/tests/testSection'
import { Test } from '../../core/tests/test'
import { TestParam } from '../../core/tests/testParam'
import { TestParamCell } from '../../core/tests/testParamCell'
// import { FileIOService } from '../io/file-io.service'
import { Group } from '../../core/tests/group'

@Injectable()
export class Factory {


    constructor() {

    }

    createGroup(groupName: string): Group {
        var group:Group = new Group();
        switch (groupName) {
            case 'UAT': {
                // group.Sections = [
                //     this.createSectionsSummaryData("UAT ADS-B OUT"),
                //     this.createSectionsSummaryData("UAT ADS-B IN"),
                //     this.createSectionsSummaryData("UAT RF"),
                //     this.createSectionsSummaryData("VSWR")
                // ];
                group.Test = [
                    this.createSectionsDetailData("UAT ADS-B OUT"),
                    this.createSectionsDetailData("UAT ADS-B IN"),
                    this.createSectionsDetailData("UAT RF"),
                    this.createSectionsDetailData("VSWR")
                ];
                break;
            }
            default: {
                break;
            }
        }
        return group
    }

    // createSectionsSummaryData(section: string): TestSection {
    //     var testSection: TestSection = new TestSection();
    //     switch (section) {
    //         case 'UAT ADS-B OUT': {

    //             testSection.Styles.add("key", "sectionLabel");
    //             testSection.Styles.add("value", "sectionResult");

    //             testSection.Name = section;
    //             //------------------------UAT Filter Target------------------------
    //             var uft = new Test();
    //             uft.Name = "UAT Filter Target";

    //             var add1 = new TestParam();
    //             add1.Key = "ADDRESS:";
    //             // add1.Value = "2345AA (H) / 23734510 (O) [N1246W]";
    //             var cAdd1 = new TestParamCell(add1);
    //             cAdd1.Row = 0;
    //             cAdd1.Column = 0;
    //             cAdd1.ColSpan = 2;

    //             uft.TestParamCells.push(cAdd1);

    //             var q1 = new TestParam();
    //             q1.Key = "Qualifier:";
    //             // q1.Value = "0 (ADS-B ICAO)";
    //             var cQ1 = new TestParamCell(q1);
    //             cQ1.Row = 1;
    //             cQ1.Column = 0;
    //             cQ1.ColSpan = 2;

    //             uft.TestParamCells.push(cQ1);

    //             var pld1 = new TestParam();
    //             pld1.Key = "Payload Rcvd:";
    //             // pld1.Value = "1,0,2,0";
    //             var cPld1 = new TestParamCell(pld1);
    //             cPld1.Row = 2;
    //             cPld1.Column = 0;

    //             uft.TestParamCells.push(cPld1);

    //             var agst1 = new TestParam();
    //             agst1.Key = "RF Level:";
    //             // agst1.Value = "Strong";
    //             var cAgst1 = new TestParamCell(agst1);
    //             cAgst1.Row = 2;
    //             cAgst1.Column = 1;

    //             uft.TestParamCells.push(cAgst1);

    //             testSection.Summaries.push(uft);
    //             //------------------------UAT Mode Status Test-----------------------------
    //             var mst = new Test();
    //             mst.Name = "UAT Mode Status Test";

    //             var add2 = new TestParam();
    //             add2.Key = "ADDRESS:";
    //             // add2.Value = "CA310A (H) / 74361202 (O) [----------]";
    //             var cAdd2 = new TestParamCell(add2);
    //             cAdd2.Row = 0;
    //             cAdd2.Column = 0;
    //             cAdd2.ColSpan = 2;

    //             mst.TestParamCells.push(cAdd2);

    //             var q2 = new TestParam();
    //             q2.Key = "Qualifier:";
    //             // q2.Value = "4 (Surface Vehicle)";
    //             var cQ2 = new TestParamCell(q2);
    //             cQ2.Row = 1;
    //             cQ2.Column = 0;
    //             cQ2.ColSpan = 2;

    //             mst.TestParamCells.push(cQ2);

    //             var pld2 = new TestParam();
    //             pld2.Key = "Payload Rcvd:";
    //             // pld2.Value = "1,0,0,0";
    //             var cPld2 = new TestParamCell(pld2);
    //             cPld2.Row = 2;
    //             cPld2.Column = 0;

    //             mst.TestParamCells.push(cPld2);

    //             var agst2 = new TestParam();
    //             agst2.Key = "RF Level:";
    //             // agst2.Value = "Medium";
    //             var cAgst2 = new TestParamCell(agst2);
    //             cAgst2.Row = 2;
    //             cAgst2.Column = 1;

    //             mst.TestParamCells.push(cAgst2);

    //             testSection.Summaries.push(mst);

    //             //------------------------UAT State Vector Test-----------------------------
    //             var usvt = new Test();
    //             usvt.Name = "UAT State Vector Test";

    //             var add3 = new TestParam();
    //             add3.Key = "ADDRESS:";
    //             // add3.Value ="9CDA34 (H) / 47800213 (O) [N32DL]";
    //             var cAdd3 = new TestParamCell(add3);
    //             cAdd3.Row = 0;
    //             cAdd3.Column = 0;
    //             cAdd3.ColSpan = 2;

    //             usvt.TestParamCells.push(cAdd3);

    //             var q3 = new TestParam();
    //             q3.Key = "Qualifier:";
    //             // q3.Value = "1 (ADS-B self-addr)";
    //             var cQ3 = new TestParamCell(q3);
    //             cQ3.Row = 1;
    //             cQ3.Column = 0;
    //             cQ3.ColSpan = 2;

    //             usvt.TestParamCells.push(cQ3);

    //             var pld3 = new TestParam();
    //             pld3.Key = "Payload Rcvd:";
    //             // pld3.Value ="1,4,4,4 ";
    //             var cPld3 = new TestParamCell(pld3);
    //             cPld3.Row = 2;
    //             cPld3.Column = 0;

    //             usvt.TestParamCells.push(cPld3);

    //             var agst3 = new TestParam();
    //             agst3.Key = "RF Level:";
    //             // agst3.Value ="Weak";
    //             var cAgst3 = new TestParamCell(agst3);
    //             cAgst3.Row = 2;
    //             cAgst3.Column = 1;

    //             usvt.TestParamCells.push(cAgst3);

    //             testSection.Summaries.push(usvt);

    //             //------------------------UAT Target State Test-----------------------------
    //             var tst = new Test();
    //             tst.Name = "UAT Target State Test";

    //             var add4 = new TestParam();
    //             add4.Key = "ADDRESS:";
    //             var cAdd4 = new TestParamCell(add4);
    //             cAdd4.Row = 0;
    //             cAdd4.Column = 0;
    //             cAdd4.ColSpan = 2;

    //             tst.TestParamCells.push(cAdd4);

    //             var q4 = new TestParam();
    //             q4.Key = "Qualifier:";
    //             var cQ4 = new TestParamCell(q4);
    //             cQ4.Row = 1;
    //             cQ4.Column = 0;
    //             cQ4.ColSpan = 2;

    //             tst.TestParamCells.push(cQ4);

    //             var pld4 = new TestParam();
    //             pld4.Key = "Payload Rcvd:";
    //             var cPld4 = new TestParamCell(pld4);
    //             cPld4.Row = 2;
    //             cPld4.Column = 0;

    //             tst.TestParamCells.push(cPld4);

    //             var agst4 = new TestParam();
    //             agst4.Key = "RF Level:";
    //             var cAgst4 = new TestParamCell(agst4);
    //             cAgst4.Row = 2;
    //             cAgst4.Column = 1;

    //             tst.TestParamCells.push(cAgst4);

    //             testSection.Summaries.push(tst);

    //             //------------------------UAT Trajectory Change Test-----------------------------
    //             // var tct = new Test();
    //             // tct.Name = "UAT Trajectory Change Test";

    //             // var add5 = new TestParam();
    //             // add5.Key = "ADDRESS:";
    //             // var cAdd5 = new TestParamCell(add5);
    //             // cAdd5.Row = 0;
    //             // cAdd5.Column = 0;
    //             // cAdd5.Colspan = 2;

    //             // tct.TestParamCells.push(cAdd5);

    //             // var q5 = new TestParam();
    //             // q5.Key = "Qualifier:";
    //             // var cQ5 = new TestParamCell(q5);
    //             // cQ5.Row = 1;
    //             // cQ5.Column = 0;
    //             // cQ5.Colspan = 2;

    //             // tct.TestParamCells.push(cQ5);

    //             // var pld5 = new TestParam();
    //             // pld5.Key = "Payload Rcvd:";
    //             // var cPld5 = new TestParamCell(pld5);
    //             // cPld5.Row = 2;
    //             // cPld5.Column = 0;

    //             // tst.TestParamCells.push(cPld5);

    //             // var agst5 = new TestParam();
    //             // agst5.Key = "RF Level:";
    //             // var cAgst5 = new TestParamCell(agst5);
    //             // cAgst5.Row = 2;
    //             // cAgst5.Column = 1;

    //             // tst.TestParamCells.push(cAgst5);

    //             // testSection.Summaries.push(tst);
    //             //------------------------UAT Payload Timing-----------------------------
    //             var rft = new Test();
    //             rft.Name = "UAT Payload Timing";

    //             var add6 = new TestParam();
    //             add6.Key = "ADDRESS:";
    //             var cAdd6 = new TestParamCell(add6);
    //             cAdd6.Row = 0;
    //             cAdd6.Column = 0;
    //             cAdd6.ColSpan = 2;

    //             rft.TestParamCells.push(cAdd6);

    //             var q6 = new TestParam();
    //             q6.Key = "Qualifier:";
    //             var cQ6 = new TestParamCell(q6);
    //             cQ6.Row = 1;
    //             cQ6.Column = 0;
    //             cQ6.ColSpan = 2;

    //             rft.TestParamCells.push(cQ6);

    //             var pld6 = new TestParam();
    //             pld6.Key = "Payload Rcvd:";
    //             var cPld6 = new TestParamCell(pld6);
    //             cPld6.Row = 2;
    //             cPld6.Column = 0;

    //             rft.TestParamCells.push(cPld6);

    //             var agst6 = new TestParam();
    //             agst6.Key = "RF Level:";
    //             var cAgst6 = new TestParamCell(agst6);
    //             cAgst6.Row = 2;
    //             cAgst6.Column = 1;

    //             rft.TestParamCells.push(cAgst6);

    //             testSection.Summaries.push(rft);
    //         }
    //             break;
    //         case 'UAT ADS-B IN': {

    //             testSection.Styles.add("key", "sectionLabel");
    //             testSection.Styles.add("value", "sectionResult");

    //             testSection.Name = section;
    //             //------------------------UAT State Vector Test------------------------
    //             var uati = new Test();
    //             uati.Name = "UAT In";

    //             var add7 = new TestParam();
    //             add7.Key = "ADDRESS:";
    //             var cAdd7 = new TestParamCell(add7);
    //             cAdd7.Row = 0;
    //             cAdd7.Column = 0;
    //             cAdd7.ColSpan = 2;

    //             uati.TestParamCells.push(cAdd7);

    //             var q7 = new TestParam();
    //             q7.Key = "Qualifier:";
    //             var cQ7 = new TestParamCell(q7);
    //             cQ7.Row = 1;
    //             cQ7.Column = 0;
    //             cQ7.ColSpan = 2;

    //             uati.TestParamCells.push(cQ7);

    //             var pld7 = new TestParam();
    //             pld7.Key = "Payload Rcvd:";
    //             var cPld7 = new TestParamCell(pld7);
    //             cPld7.Row = 2;
    //             cPld7.Column = 0;

    //             uati.TestParamCells.push(cPld7);

    //             var agst7 = new TestParam();
    //             agst7.Key = "RF Level:";
    //             var cAgst7 = new TestParamCell(agst7);
    //             cAgst7.Row = 2;
    //             cAgst7.Column = 1;

    //             uati.TestParamCells.push(cAgst7);

    //             testSection.Summaries.push(uati);

    //             //------------------------UAT Mode Status Test-----------------------------
    //             var tisb = new Test();
    //             tisb.Name = "TIS-B";

    //             var add8 = new TestParam();
    //             add8.Key = "ADDRESS:";
    //             var cAdd8 = new TestParamCell(add8);
    //             cAdd8.Row = 0;
    //             cAdd8.Column = 0;
    //             cAdd8.ColSpan = 2;

    //             tisb.TestParamCells.push(cAdd8);

    //             var q8 = new TestParam();
    //             q8.Key = "Qualifier:";
    //             var cQ8 = new TestParamCell(q8);
    //             cQ8.Row = 1;
    //             cQ8.Column = 0;
    //             cQ8.ColSpan = 2;

    //             tisb.TestParamCells.push(cQ8);

    //             var pld8 = new TestParam();
    //             pld8.Key = "Payload Rcvd:";
    //             var cPld8 = new TestParamCell(pld8);
    //             cPld8.Row = 2;
    //             cPld8.Column = 0;

    //             tisb.TestParamCells.push(cPld8);

    //             var agst8 = new TestParam();
    //             agst8.Key = "RF Level:";
    //             var cAgst8 = new TestParamCell(agst8);
    //             cAgst8.Row = 2;
    //             cAgst8.Column = 1;

    //             tisb.TestParamCells.push(cAgst8);

    //             testSection.Summaries.push(tisb);

    //             //------------------------UAT RF Link Test-----------------------------
    //             var fisb = new Test();
    //             fisb.Name = "FIS-B";

    //             var add9 = new TestParam();
    //             add9.Key = "ADDRESS:";
    //             var cAdd9 = new TestParamCell(add9);
    //             cAdd9.Row = 0;
    //             cAdd9.Column = 0;
    //             cAdd9.ColSpan = 2;

    //             fisb.TestParamCells.push(cAdd9);

    //             var q9 = new TestParam();
    //             q9.Key = "Qualifier:";
    //             var cQ9 = new TestParamCell(q9);
    //             cQ9.Row = 1;
    //             cQ9.Column = 0;
    //             cQ9.ColSpan = 2;

    //             fisb.TestParamCells.push(cQ9);

    //             var pld9 = new TestParam();
    //             pld9.Key = "Payload Rcvd:";
    //             var cPld9 = new TestParamCell(pld9);
    //             cPld9.Row = 2;
    //             cPld9.Column = 0;

    //             fisb.TestParamCells.push(cPld9);

    //             var agst9 = new TestParam();
    //             agst9.Key = "RF Level:";
    //             var cAgst9 = new TestParamCell(agst9);
    //             cAgst9.Row = 2;
    //             cAgst9.Column = 1;

    //             fisb.TestParamCells.push(cAgst9);

    //             testSection.Summaries.push(fisb);
    //         }
    //             break;
    //         case 'UAT RF': {

    //             testSection.Styles.add("key", "sectionLabel");
    //             testSection.Styles.add("value", "sectionResult");

    //             testSection.Name = section;

    //             //------------------------UAT RF Link Test-----------------------------
    //             var urfl = new Test();
    //             urfl.Name = "UAT RF Link";

    //             var add10 = new TestParam();
    //             add10.Key = "ADDRESS:";
    //             var cAdd10 = new TestParamCell(add10);
    //             cAdd10.Row = 0;
    //             cAdd10.Column = 0;
    //             cAdd10.ColSpan = 2;

    //             urfl.TestParamCells.push(cAdd10);

    //             var q10 = new TestParam();
    //             q10.Key = "Qualifier:";
    //             var cQ10 = new TestParamCell(q10);
    //             cQ10.Row = 1;
    //             cQ10.Column = 0;
    //             cQ10.ColSpan = 2;

    //             urfl.TestParamCells.push(cQ10);

    //             var pld10 = new TestParam();
    //             pld10.Key = "Payload Rcvd:";
    //             var cPld10 = new TestParamCell(pld10);
    //             cPld10.Row = 2;
    //             cPld10.Column = 0;

    //             urfl.TestParamCells.push(cPld10);

    //             var agst10 = new TestParam();
    //             agst10.Key = "RF Level:";
    //             var cAgst10 = new TestParamCell(agst10);
    //             cAgst10.Row = 2;
    //             cAgst10.Column = 1;

    //             urfl.TestParamCells.push(cAgst10);

    //             testSection.Summaries.push(urfl);

    //             //------------------------GPS Status-----------------------------
    //             var gpss = new Test();
    //             gpss.Name = "GPS Status";

    //             var add11 = new TestParam();
    //             add11.Key = "ADDRESS:";
    //             var cAdd11 = new TestParamCell(add11);
    //             cAdd11.Row = 0;
    //             cAdd11.Column = 0;
    //             cAdd11.ColSpan = 2;

    //             gpss.TestParamCells.push(cAdd11);

    //             var q11 = new TestParam();
    //             q11.Key = "Qualifier:";
    //             var cQ11 = new TestParamCell(q11);
    //             cQ11.Row = 1;
    //             cQ11.Column = 0;
    //             cQ11.ColSpan = 2;

    //             gpss.TestParamCells.push(cQ11);

    //             var pld11 = new TestParam();
    //             pld11.Key = "Payload Rcvd:";
    //             var cPld11 = new TestParamCell(pld11);
    //             cPld11.Row = 2;
    //             cPld11.Column = 0;

    //             gpss.TestParamCells.push(cPld11);

    //             var agst11 = new TestParam();
    //             agst11.Key = "RF Level:";
    //             var cAgst11 = new TestParamCell(agst11);
    //             cAgst11.Row = 2;
    //             cAgst11.Column = 1;

    //             gpss.TestParamCells.push(cAgst11);
    //             testSection.Summaries.push(gpss);
    //         }
    //             break;
    //         case 'VSWR': {

    //             testSection.Styles.add("key", "sectionLabel");
    //             testSection.Styles.add("value", "sectionResult");

    //             testSection.Name = section;
    //             //------------------------VSWR------------------------
    //             var vswr = new Test();
    //             vswr.Name = "VSWR";

    //             var add12 = new TestParam();
    //             add12.Key = "ADDRESS:";
    //             var cAdd12 = new TestParamCell(add12);
    //             cAdd12.Row = 0;
    //             cAdd12.Column = 0;
    //             cAdd12.ColSpan = 2;

    //             vswr.TestParamCells.push(cAdd12);

    //             var q12 = new TestParam();
    //             q12.Key = "Qualifier:";
    //             var cQ12 = new TestParamCell(q12);
    //             cQ12.Row = 1;
    //             cQ12.Column = 0;
    //             cQ12.ColSpan = 2;

    //             vswr.TestParamCells.push(cQ12);

    //             var pld12 = new TestParam();
    //             pld12.Key = "Payload Rcvd:";
    //             var cPld12 = new TestParamCell(pld12);
    //             cPld12.Row = 2;
    //             cPld12.Column = 0;

    //             vswr.TestParamCells.push(cPld12);

    //             var agst12 = new TestParam();
    //             agst12.Key = "RF Level:";
    //             var cAgst12 = new TestParamCell(agst12);
    //             cAgst12.Row = 2;
    //             cAgst12.Column = 1;

    //             vswr.TestParamCells.push(cAgst12);

    //             testSection.Summaries.push(vswr);
    //         }
    //             break;
    //     }

    //     return testSection;
    // }

    createSectionsDetailData(test: string): Test {
        console.log('test Name:::  ' + test);
        var newTest: Test = new Test();
        switch (test) {
            case 'UAT ADS-B OUT': {
                newTest.Styles.add("key", "detailLabel");
                newTest.Styles.add("value", "detailResult2");
                newTest.Styles.add("unit", "detailUnit");

                newTest.Name = test;

                // //------------------------UAT Filter Target------------------------
                // var uft = new Test();
                // uft.Name = "UAT Filter Target";

                // newTest.Summaries.push(uft);
                //------------------------UAT Mode Status Test-----------------------------
                var mst = new Test();
                mst.Name = "UAT Mode Status Test";

                var add3 = new TestParam();
                add3.Key = "ADDRESS:";
                // add3.Value = "2345AA (H) / 23734510 (O) [N1246W]";
                var cAdd3 = new TestParamCell(add3);
                cAdd3.Row = 0;
                cAdd3.Column = 0;
                cAdd3.ColSpan = 4;
                cAdd3.Styles.add("key", "detailLabel");
                cAdd3.Styles.add("value", "detailResult");

                mst.TestParamCells.push(cAdd3);

                var addQ3 = new TestParam();
                addQ3.Key = "Qualifier:";
                // addQ3.Value = "0 (ADS-B ICAO)";
                var cAddQ3 = new TestParamCell(addQ3);
                cAddQ3.Row = 1;
                cAddQ3.Column = 0;
                cAddQ3.ColSpan = 4;
                cAddQ3.Styles.add("key", "detailLabel");
                cAddQ3.Styles.add("value", "detailResult");

                mst.TestParamCells.push(cAddQ3);

                var pld3 = new TestParam();
                pld3.Key = "Payload Rcvd:";
                // pld3.Value = "1,0,2,0";
                var cPld3 = new TestParamCell(pld3);
                cPld3.Row = 2;
                cPld3.Column = 0;
                cPld3.Styles.add("key", "detailLabel");
                cPld3.Styles.add("value", "detailResult2");

                mst.TestParamCells.push(cPld3);

                var eqc3 = new TestParam();
                eqc3.Key = "RF Level:";
                // eqc3.Value = "Strong";
                var cEqc3 = new TestParamCell(eqc3);
                cEqc3.Row = 2;
                cEqc3.Column = 1;
                cEqc3.Styles.add("key", "detailLabel");
                cEqc3.Styles.add("value", "detailResult2");

                mst.TestParamCells.push(cEqc3);

                var esd3 = new TestParam();
                esd3.Key = "Mode Status Element (MS)";
                var cEsd3 = new TestParamCell(esd3);
                cEsd3.Row = 4;
                cEsd3.Column = 0;
                cEsd3.ColSpan = 4;
                cEsd3.Styles.add("key", "detailheading1");
                cEsd3.Styles.add("value", "detailResult1");

                mst.TestParamCells.push(cEsd3);

                var avi3 = new TestParam();
                avi3.Key = "Aircraft/Vehicle Info:";
                var cAvi3 = new TestParamCell(avi3);
                cAvi3.Row = 5;
                cAvi3.Column = 0;
                cAvi3.Styles.add("key", "detailLabel1");
                cAvi3.Styles.add("value", "detailResult1");

                mst.TestParamCells.push(cAvi3);

                var fid3 = new TestParam();
                fid3.Key = "Flight ID:";
                // fid3.Value = "1536";
                var cFid3 = new TestParamCell(fid3);
                cFid3.Row = 6;
                cFid3.Column = 0;

                mst.TestParamCells.push(cFid3);

                var csid3 = new TestParam();
                csid3.Key = "CSID:";
                // csid3.Value = "0 (Flight Plan ID)";
                var cCsid3 = new TestParamCell(csid3);
                cCsid3.Row = 6;
                cCsid3.Column = 1;

                mst.TestParamCells.push(cCsid3);

                var ec3 = new TestParam();
                ec3.Key = "Emitter Cat:";
                // ec3.Value = "3 (Large) ";
                var cEc3 = new TestParamCell(ec3);
                cEc3.Row = 7;
                cEc3.Column = 0;

                mst.TestParamCells.push(cEc3);

                var acd3 = new TestParam();
                acd3.Key = "3/A Code:";
                // acd3.Value = "1536";
                var cAcd3 = new TestParamCell(acd3);
                cAcd3.Row = 7;
                cAcd3.Column = 1;

                mst.TestParamCells.push(cAcd3);

                var ep3 = new TestParam();
                ep3.Key = "Emg/Prty:";
                // ep3.Value = "0 (No Emerg)";
                var cEp3 = new TestParamCell(ep3);
                cEp3.Row = 8;
                cEp3.Column = 0;
                cEp3.ColSpan = 4;
                cEp3.Styles.add("value", "detailResult");


                mst.TestParamCells.push(cEp3);

                var cc3 = new TestParam();
                cc3.Key = "Capability Codes:";
                var cCc3 = new TestParamCell(cc3);
                cCc3.Row = 9;
                cCc3.Column = 0;
                cCc3.Styles.add("key", "detailLabel1");
                cCc3.Styles.add("value", "detailResult1");

                mst.TestParamCells.push(cCc3);

                var uatin3 = new TestParam();
                uatin3.Key = "UAT IN:";
                // uatin3.Value = "1 (Y)";
                var cUatin3 = new TestParamCell(uatin3);
                cUatin3.Row = 10;
                cUatin3.Column = 0;

                mst.TestParamCells.push(cUatin3);

                var tcasp3 = new TestParam();
                tcasp3.Key = "TCAS Op:";
                // tcasp3.Value = "1 (Y)";
                var cTcasp3 = new TestParamCell(tcasp3);
                cTcasp3.Row = 10;
                cTcasp3.Column = 1;

                mst.TestParamCells.push(cTcasp3);

                var es3 = new TestParam();
                es3.Key = "1090ES IN:";
                // es3.Value = "0 (N)";
                var cEs3 = new TestParamCell(es3);
                cEs3.Row = 11;
                cEs3.Column = 0;
                cEs3.ColSpan = 4;
                cEs3.Styles.add("value", "detailResult");

                mst.TestParamCells.push(cEs3);

                var om3 = new TestParam();
                om3.Key = "Operational Modes:";
                var cOm3 = new TestParamCell(om3);
                cOm3.Row = 12;
                cOm3.Column = 0;
                cOm3.ColSpan = 4;
                cOm3.Styles.add("key", "detailLabel1");
                cOm3.Styles.add("value", "detailResult1");

                mst.TestParamCells.push(cOm3);

                var atcs3 = new TestParam();
                atcs3.Key = "ATC Svcs:";
                // atcs3.Value = "0 (N)";
                var cAtcs3 = new TestParamCell(atcs3);
                cAtcs3.Row = 13;
                cAtcs3.Column = 0;

                mst.TestParamCells.push(cAtcs3);

                var idt3 = new TestParam();
                idt3.Key = "IDENT:";
                // idt3.Value = "1 (Y)";
                var cIdt3 = new TestParamCell(idt3);
                cIdt3.Row = 13;
                cIdt3.Column = 1;

                mst.TestParamCells.push(cIdt3);

                var tcasra3 = new TestParam();
                tcasra3.Key = "TCAS RA:";
                // tcasra3.Value = "0 (N)";
                var cTcasra3 = new TestParamCell(tcasra3);
                cTcasra3.Row = 14;
                cTcasra3.Column = 0;
                cTcasra3.ColSpan = 4;
                cTcasra3.Styles.add("value", "detailResult");

                mst.TestParamCells.push(cTcasra3);

                var ofd3 = new TestParam();
                ofd3.Key = "Other Fields:";
                var cOfd3 = new TestParamCell(ofd3);
                cOfd3.Row = 15;
                cOfd3.Column = 0;
                cOfd3.Styles.add("key", "detailLabel1");
                cOfd3.Styles.add("value", "detailResult1");

                mst.TestParamCells.push(cOfd3);

                var nacp3 = new TestParam();
                nacp3.Key = "NACp:";
                // nacp3.Value = "3 (< 2nm) ";
                var cNacp3 = new TestParamCell(nacp3);
                cNacp3.Row = 16;
                cNacp3.Column = 0;

                mst.TestParamCells.push(cNacp3);
                var trnmso3 = new TestParam();
                trnmso3.Key = "Transmit MSO:";
                // trnmso3.Value = "16";
                var cTrnmso3 = new TestParamCell(trnmso3);
                cTrnmso3.Row = 16;
                cTrnmso3.Column = 1;

                mst.TestParamCells.push(cTrnmso3);

                var nacv3 = new TestParam();
                nacv3.Key = "NACv:";
                // nacv3.Value = "2";
                var cNacv3 = new TestParamCell(nacv3);
                cNacv3.Row = 17;
                cNacv3.Column = 0;

                mst.TestParamCells.push(cNacv3);

                var sil3 = new TestParam();
                sil3.Key = "SIL:";
                // sil3.Value = "1 (< 10 -3 )";
                var cSil3 = new TestParamCell(sil3);
                cSil3.Row = 17;
                cSil3.Column = 1;

                mst.TestParamCells.push(cSil3);

                var sda3 = new TestParam();
                sda3.Key = "SDA:";
                // sda3.Value = "2";
                var cSda3 = new TestParamCell(sda3);
                cSda3.Row = 18;
                cSda3.Column = 0;

                mst.TestParamCells.push(cSda3);

                var gva3 = new TestParam();
                gva3.Key = "GVA:";
                // gva3.Key = "2 (< 45m)";
                var cGva3 = new TestParamCell(gva3);
                cGva3.Row = 18;
                cGva3.Column = 1;

                mst.TestParamCells.push(cGva3);

                var mops3 = new TestParam();
                mops3.Key = "MOPS:";
                // mops3.Value = "2 (DO-282B)";
                var cMops3 = new TestParamCell(mops3);
                cMops3.Row = 19;
                cMops3.Column = 0;

                mst.TestParamCells.push(cMops3);

                var sils3 = new TestParam();
                sils3.Key = "SIL Sup:";
                // sils3.Value = "1 (per sample) ";
                var cSils3 = new TestParamCell(sils3);
                cSils3.Row = 19;
                cSils3.Column = 1;

                mst.TestParamCells.push(cSils3);

                var sgla3 = new TestParam();
                sgla3.Key = "Sgl Ant:";
                // sgla3.Value = "0 (Diversity)";
                var cSgla3 = new TestParamCell(sgla3);
                cSgla3.Row = 20;
                cSgla3.Column = 0;

                mst.TestParamCells.push(cSgla3);

                var nicb3 = new TestParam();
                nicb3.Key = "NICbaro:";
                // nicb3.Value = "0 (No X-chk";
                var cNicb3 = new TestParamCell(nicb3);
                cNicb3.Row = 20;
                cNicb3.Column = 1;

                mst.TestParamCells.push(cNicb3);

                var nicsup3 = new TestParam();
                nicsup3.Key = "NICsup:";
                // nicsup3.Value = "0";
                var cNicsup3 = new TestParamCell(nicsup3);
                cNicsup3.Row = 21;
                cNicsup3.Column = 0;
                cNicsup3.ColSpan = 4;
                cNicsup3.Styles.add("value", "detailResult");

                mst.TestParamCells.push(cNicsup3);

                newTest.Summaries.push(mst);

                //------------------------UAT State Vector Test-----------------------------
                var usvt = new Test();
                usvt.Name = "UAT State Vector Test";

                var addr1 = new TestParam();
                addr1.Key = "ADDRESS:";
                // addr1.Value = "2345AA (H)/ 237345109O) [N1246W]"
                var cAddr1 = new TestParamCell(addr1);
                cAddr1.Row = 0;
                cAddr1.Column = 0;
                cAddr1.ColSpan = 2;
                cAddr1.Styles.add("value", "detailResult");

                usvt.TestParamCells.push(cAddr1);

                var aQ1 = new TestParam();
                aQ1.Key = "Qualifier:";
                // aQ1.Value = "0 (ADS-B ICAO)";
                var cAq1 = new TestParamCell(aQ1);
                cAq1.Row = 1;
                cAq1.Column = 0;
                cAq1.ColSpan = 2;
                cAq1.Styles.add("value", "detailResult");

                usvt.TestParamCells.push(cAq1);

                var pldr1 = new TestParam();
                pldr1.Key = "Payload Rcvd:";
                // pldr1.Value = "1,0,2,0";
                var cPldr1 = new TestParamCell(pldr1);
                cPldr1.Row = 2;
                cPldr1.Column = 0;
                cPldr1.Styles.add("key", "detailLabel");

                usvt.TestParamCells.push(cPldr1);

                var rflev1 = new TestParam();
                rflev1.Key = "RF Level:";
                // rflev1.Value = "Strong";
                var cRflev1 = new TestParamCell(rflev1);
                cRflev1.Row = 2;
                cRflev1.Column = 1;
                cRflev1.Styles.add("key", "detailLabel2");

                usvt.TestParamCells.push(cRflev1);

                var sv1 = new TestParam();
                sv1.Key = "State Vector Element (SV)";
                var cSv1 = new TestParamCell(sv1);
                cSv1.Styles.add("key", "detailheading1");
                cSv1.Styles.add("value", "detailResult1");
                cSv1.Row = 3;
                cSv1.Column = 0;
                cSv1.ColSpan = 2;

                usvt.TestParamCells.push(cSv1);

                var posv1 = new TestParam();
                posv1.Key = "Position & Velocity:";
                var cPosv1 = new TestParamCell(posv1);
                cPosv1.Row = 4;
                cPosv1.Column = 0;
                cPosv1.ColSpan = 2;
                cPosv1.Styles.add("key", "detailLabel1");
                cPosv1.Styles.add("value", "detailResult1");

                usvt.TestParamCells.push(cPosv1);

                var agst1 = new TestParam();
                agst1.Key = "A/G State:";
                // agst1.Value = "AIR - Subsonic"
                var cAgst1 = new TestParamCell(agst1);
                cAgst1.Row = 5;
                cAgst1.Column = 0;
                cAgst1.ColSpan = 2;
                cAgst1.Styles.add("value", "detailResult");

                usvt.TestParamCells.push(cAgst1);

                var latd1 = new TestParam();
                latd1.Key = "Latitude:";
                // latd1.Value = "17⁰ 19 21.00 N";
                var cLatd1 = new TestParamCell(latd1);
                cLatd1.Row = 6;
                cLatd1.Column = 0;
                cLatd1.ColSpan = 2;
                cLatd1.Styles.add("value", "detailResult");

                usvt.TestParamCells.push(cLatd1);

                var lagd1 = new TestParam();
                lagd1.Key = "Longitude:";
                // lagd1.Value = "90⁰ 15 30.00 W";
                var cLagd1 = new TestParamCell(lagd1);
                cLagd1.Row = 7;
                cLagd1.Column = 0;
                cLagd1.ColSpan = 2;
                cLagd1.Styles.add("value", "detailResult");

                usvt.TestParamCells.push(cLagd1);

                var alti1 = new TestParam();
                alti1.Key = "Altitude:";
                // alti1.Value = "10,000 ft "
                var cAlti1 = new TestParamCell(alti1);
                cAlti1.Row = 8;
                cAlti1.Column = 0;

                usvt.TestParamCells.push(cAlti1);

                var typ1 = new TestParam();
                typ1.Key = "Type:";
                // typ1.Value = "0 (Pressure)"
                var cTyp1 = new TestParamCell(typ1);
                cTyp1.Row = 8;
                cTyp1.Column = 1;
                cTyp1.Styles.add("key", "detailLabel2");

                usvt.TestParamCells.push(cTyp1);

                var horv1 = new TestParam();
                horv1.Key = "Horizontal Velocity:";
                // horv1.Value = "300 kts N 157 kts W"
                var cHorv1 = new TestParamCell(horv1);
                cHorv1.Row = 9;
                cHorv1.Column = 0;
                cHorv1.ColSpan = 2;
                cHorv1.Styles.add("key", "detailLabel3");
                cHorv1.Styles.add("value", "detailResult");

                usvt.TestParamCells.push(cHorv1);

                var verv1 = new TestParam();
                verv1.Key = "Vert. Velocity:";
                // verv1.Value = "+1,000 fpm"
                var cVerv1 = new TestParamCell(verv1);
                cVerv1.Row = 10;
                cVerv1.Column = 0;
                cVerv1.Styles.add("key", "detailLabel3");

                usvt.TestParamCells.push(cVerv1);

                var src1 = new TestParam();
                src1.Key = "Source:";
                // src1.Value = "1 (Baro)"
                var cSrc1 = new TestParamCell(src1);
                cSrc1.Row = 10;
                cSrc1.Column = 1;
                cSrc1.Styles.add("key", "detailLabel2");

                usvt.TestParamCells.push(cSrc1);

                var ofld1 = new TestParam();
                ofld1.Key = "Other Fields:";
                var cOfld1 = new TestParamCell(ofld1);
                cOfld1.Row = 11;
                cOfld1.Column = 0;
                cOfld1.ColSpan = 2;
                cOfld1.Styles.add("key", "detailLabel1");
                cOfld1.Styles.add("value", "detailResult1");

                usvt.TestParamCells.push(cOfld1);

                var ni1 = new TestParam();
                ni1.Key = "NIC:";
                // ni1.Value = "9 (< 75m)";
                var cNi1 = new TestParamCell(ni1);
                cNi1.Row = 12;
                cNi1.Column = 0;
                cNi1.Styles.add("key", "detailLabel3");

                usvt.TestParamCells.push(cNi1);

                var ut1 = new TestParam();
                ut1.Key = "UTC:";
                // ut1.Value = "1 (Coupled)"
                var cUt1 = new TestParamCell(ut1);
                cUt1.Row = 12;
                cUt1.Column = 1;
                cUt1.Styles.add("key", "detailLabel2");

                usvt.TestParamCells.push(cUt1);

                var upfb1 = new TestParam();
                upfb1.Key = "Uplink Feedback:";
                // upfb1.Value = "6 (Score=31)"
                var cUpfb1 = new TestParamCell(upfb1);
                cUpfb1.Row = 13;
                cUpfb1.Column = 0;
                cUpfb1.ColSpan = 2;
                cUpfb1.Styles.add("key", "detailLabel3");
                cUpfb1.Styles.add("value", "detailResult");

                usvt.TestParamCells.push(cUpfb1);

                var auxsve1 = new TestParam();
                auxsve1.Key = "Aux.State Vector Element (AUX SV)";
                var cAuxsve1 = new TestParamCell(auxsve1);
                cAuxsve1.Row = 14;
                cAuxsve1.Column = 0;
                cAuxsve1.ColSpan = 2;
                cAuxsve1.Styles.add("key", "detailLabel1");
                cAuxsve1.Styles.add("value", "detailResult1");


                usvt.TestParamCells.push(cAuxsve1);

                var seca1 = new TestParam();
                seca1.Key = "Secondary Altitude:";
                // seca1.Value = "10,000 ft"
                var cSeca1 = new TestParamCell(seca1);
                cSeca1.Row = 15;
                cSeca1.Column = 0;
                cSeca1.ColSpan = 2;
                cSeca1.Styles.add("key", "detailLabel3");
                cSeca1.Styles.add("value", "detailResult");

                usvt.TestParamCells.push(cSeca1);

                newTest.Summaries.push(usvt);

                //------------------------UAT Target State Test-----------------------------
                var tst = new Test();
                tst.Name = "UAT Target State Test";

                var add6 = new TestParam();
                add6.Key = "ADDRESS:";
                var cAdd6 = new TestParamCell(add6);
                cAdd6.Row = 0;
                cAdd6.Column = 0;
                cAdd6.ColSpan = 2;
                cAdd6.Styles.add("value", "detailResult");

                tst.TestParamCells.push(cAdd6);

                var addQ6 = new TestParam();
                addQ6.Key = "Qualifier:";
                var cAddQ6 = new TestParamCell(addQ6);
                cAddQ6.Row = 1;
                cAddQ6.Column = 0;
                cAddQ6.ColSpan = 2;
                cAddQ6.Styles.add("key", "detailLabel");
                cAddQ6.Styles.add("value", "detailResult");

                tst.TestParamCells.push(cAddQ6);

                var pld6 = new TestParam();
                pld6.Key = "Payload Rcvd:";
                var cPld6 = new TestParamCell(pld6);
                cPld6.Row = 2;
                cPld6.Column = 0;
                cPld6.Styles.add("key", "detailLabel");

                tst.TestParamCells.push(cPld6);

                var rfle6 = new TestParam();
                rfle6.Key = "RF Level:";
                var cRfle6 = new TestParamCell(rfle6);
                cRfle6.Row = 2;
                cRfle6.Column = 1;
                cRfle6.Styles.add("key", "detailLabel2");

                tst.TestParamCells.push(cRfle6);

                var tse6 = new TestParam();
                tse6.Key = "Target State Element (TS)";
                var cTse6 = new TestParamCell(tse6);
                cTse6.Row = 3;
                cTse6.Column = 0;
                cTse6.ColSpan = 3;
                cTse6.Styles.add("key", "detailheading1");
                cTse6.Styles.add("value", "detailResult1");

                tst.TestParamCells.push(cTse6);

                var sat6 = new TestParam();
                sat6.Key = "Sel. Altitude:";
                var cSat6 = new TestParamCell(sat6);
                cSat6.Row = 4;
                cSat6.Column = 0;
                cSat6.Styles.add("key", "detailLabel2");

                tst.TestParamCells.push(cSat6);

                var typ6 = new TestParam();
                typ6.Key = "Type:";
                var cTyp6 = new TestParamCell(typ6);
                cTyp6.Row = 4;
                cTyp6.Column = 1;
                cTyp6.Styles.add("key", "detailLabel2");

                tst.TestParamCells.push(cTyp6);

                var bps6 = new TestParam();
                bps6.Key = "Baro Setting:";
                var cBps6 = new TestParamCell(bps6);
                cBps6.Row = 5;
                cBps6.Column = 0;
                cBps6.ColSpan = 2;
                cBps6.Styles.add("key", "detailLabel2");
                cBps6.Styles.add("value", "detailResult");

                tst.TestParamCells.push(cBps6);

                var seh6 = new TestParam();
                seh6.Key = "Sel. Heading:";
                var cSeh6 = new TestParamCell(seh6);
                cSeh6.Row = 6;
                cSeh6.Column = 0;
                cSeh6.ColSpan = 2;
                cSeh6.Styles.add("key", "detailLabel2");
                cSeh6.Styles.add("value", "detailResult");

                tst.TestParamCells.push(cSeh6);

                var mfms6 = new TestParam();
                mfms6.Key = "AutoPilot Modes";
                var cMfms6 = new TestParamCell(mfms6);
                cMfms6.Row = 9;
                cMfms6.Column = 0;
                cMfms6.ColSpan = 2;
                cMfms6.Styles.add("key", "detailLabel1");
                cMfms6.Styles.add("value", "detailResult1");

                tst.TestParamCells.push(cMfms6);

                var ap6 = new TestParam();
                ap6.Key = "Mode bits status:";
                var cAp6 = new TestParamCell(ap6);
                cAp6.Row = 10;
                cAp6.Column = 0;
                cAp6.ColSpan = 2;
                cAp6.Styles.add("key", "detailLabel3");
                cAp6.Styles.add("value", "detailResult");

                tst.TestParamCells.push(cAp6);

                var vnav6 = new TestParam();
                vnav6.Key = "AutoPilot (AP):";
                var cVnav6 = new TestParamCell(vnav6);
                cVnav6.Row = 11;
                cVnav6.Column = 0;
                cVnav6.ColSpan = 2;
                cVnav6.Styles.add("key", "detailLabel3");
                cVnav6.Styles.add("value", "detailResult");

                tst.TestParamCells.push(cVnav6);

                var alth6 = new TestParam();
                alth6.Key = "VNAV:";
                var cAlth6 = new TestParamCell(alth6);
                cAlth6.Row = 12;
                cAlth6.Column = 0;
                cAlth6.ColSpan = 2;
                cAlth6.Styles.add("key", "detailLabel3");
                cAlth6.Styles.add("value", "detailResult");

                tst.TestParamCells.push(cAlth6);

                var appm6 = new TestParam();
                appm6.Key = "Alt. Hold (ALT):";
                var cAppm6 = new TestParamCell(appm6);
                cAppm6.Row = 13;
                cAppm6.Column = 0;
                cAppm6.ColSpan = 2;
                cAppm6.Styles.add("key", "detailLabel3");
                cAppm6.Styles.add("value", "detailResult");

                tst.TestParamCells.push(cAppm6);

                var lnavm6 = new TestParam();
                lnavm6.Key = "Approach (APP):";
                var cLnavm6 = new TestParamCell(lnavm6);
                cLnavm6.Row = 14;
                cLnavm6.Column = 0;
                cLnavm6.ColSpan = 2;
                cLnavm6.Styles.add("key", "detailLabel3");
                cLnavm6.Styles.add("value", "detailResult");

                tst.TestParamCells.push(cLnavm6);

                var lnav6 = new TestParam();
                lnav6.Key = "LNAV:";
                var cLnav6 = new TestParamCell(lnav6);
                cLnav6.Row = 15;
                cLnav6.Column = 0;
                cLnav6.ColSpan = 2;
                cLnav6.Styles.add("key", "detailLabel3");
                cLnav6.Styles.add("value", "detailResult");

                tst.TestParamCells.push(cLnav6);

                newTest.Summaries.push(tst);

                //------------------------UAT Trajectory Change Test-----------------------------
                // var tct = new Test();
                // tct.Name = "UAT Trajectory Change Test";

                // var add5 = new TestParam();
                // add5.Key = "ADDRESS:";
                // var cAdd5 = new TestParamCell(add5);
                // cAdd5.Row = 0;
                // cAdd5.Column = 0;

                // tct.TestParamCells.push(cAdd5);

                // var q5 = new TestParam();
                // q5.Key = "Qualifier:";
                // var cQ5 = new TestParamCell(q5);
                // cQ5.Row = 1;
                // cQ5.Column = 0;

                // tct.TestParamCells.push(cQ5);

                // var pld5 = new TestParam();
                // pld5.Key = "Payload Rcvd:";
                // var cPld5 = new TestParamCell(pld5);
                // cPld5.Row = 2;
                // cPld5.Column = 0;

                // tst.TestParamCells.push(cPld5);

                // var agst5 = new TestParam();
                // agst5.Key = "RF Level:";
                // var cAgst5 = new TestParamCell(agst5);
                // cAgst5.Row = 2;
                // cAgst5.Column = 1;

                // tst.TestParamCells.push(cAgst5);

                // newTest.Summaries.push(tst);
                //------------------------UAT Payload Timing-----------------------------
                var rft = new Test();
                rft.Name = "UAT RF Test";

                var add4 = new TestParam();
                add4.Key = "ADDRESS:";
                var cAdd4 = new TestParamCell(add4);
                cAdd4.Row = 0;
                cAdd4.Column = 0;
                cAdd4.ColSpan = 2;
                cAdd4.Styles.add("key", "detailLabel");
                cAdd4.Styles.add("value", "detailResult");

                rft.TestParamCells.push(cAdd4);

                var addQ4 = new TestParam();
                addQ4.Key = "Qualifier:";
                var cAddQ4 = new TestParamCell(addQ4);
                cAddQ4.Row = 1;
                cAddQ4.Column = 0;
                cAddQ4.ColSpan = 2;
                cAddQ4.Styles.add("key", "detailLabel");
                cAddQ4.Styles.add("value", "detailResult");

                rft.TestParamCells.push(cAddQ4);

                var pld4 = new TestParam();
                pld4.Key = "Payload Rcvd:";
                var cPld4 = new TestParamCell(pld4);
                cPld4.Row = 2;
                cPld4.Column = 0;

                rft.TestParamCells.push(cPld4);

                var rfle4 = new TestParam();
                rfle4.Key = "RF Level:";
                var cRfle4 = new TestParamCell(rfle4);
                cRfle4.Row = 2;
                cRfle4.Column = 1;
                cRfle4.Styles.add("key", "detailLabel2");

                rft.TestParamCells.push(cRfle4);

                var rflp4 = new TestParam();
                rflp4.Key = "RF /Payload Timming";
                var cRflp4 = new TestParamCell(rflp4);
                cRflp4.Row = 3;
                cRflp4.Column = 0;
                cRflp4.ColSpan = 2;
                cRflp4.Styles.add("key", "detailheading1");
                cRflp4.Styles.add("value", "detailResult1");

                rft.TestParamCells.push(cRflp4);

                var txp4 = new TestParam();
                txp4.Key = "Payload Reception Rate:";
                var cTxp4 = new TestParamCell(txp4);
                cTxp4.Row = 4;
                cTxp4.Column = 0;
                cTxp4.ColSpan = 2;
                cTxp4.Styles.add("key", "detailLabel1");
                cTxp4.Styles.add("value", "detailResult1");

                rft.TestParamCells.push(cTxp4);

                var pwrd4 = new TestParam();
                pwrd4.Key = "State Vector (SV):";
                var cPwrd4 = new TestParamCell(pwrd4);
                cPwrd4.Row = 5;
                cPwrd4.Column = 0;
                cPwrd4.ColSpan = 2;
                cPwrd4.Styles.add("key", "detailLabel3");
                cPwrd4.Styles.add("value", "detailResult");

                rft.TestParamCells.push(cPwrd4);

                var frq4 = new TestParam();
                frq4.Key = "Mode Status (MS):";
                var cFrq4 = new TestParamCell(frq4);
                cFrq4.Row = 6;
                cFrq4.Column = 0;
                cFrq4.ColSpan = 2;
                cFrq4.Styles.add("key", "detailLabel3");
                cFrq4.Styles.add("value", "detailResult");

                rft.TestParamCells.push(cFrq4);

                var dvt4 = new TestParam();
                dvt4.Key = "Aux State Vector (AUX SV):";
                var cDvt4 = new TestParamCell(dvt4);
                cDvt4.Row = 7;
                cDvt4.Column = 0;
                cDvt4.ColSpan = 2;
                cDvt4.Styles.add("key", "detailLabel3");
                cDvt4.Styles.add("value", "detailResult");

                rft.TestParamCells.push(cDvt4);

                var pdvt4 = new TestParam();
                pdvt4.Key = "Target State (TS):";
                var cPdvt4 = new TestParamCell(pdvt4);
                cPdvt4.Row = 8;
                cPdvt4.Column = 0;
                cPdvt4.ColSpan = 2;
                cPdvt4.Styles.add("key", "detailLabel3");
                cPdvt4.Styles.add("value", "detailResult");

                rft.TestParamCells.push(cPdvt4);

                var msgt4 = new TestParam();
                msgt4.Key = "978 MHz RF Data";
                var cMsgt4 = new TestParamCell(msgt4);
                cMsgt4.Row = 9;
                cMsgt4.Column = 0;
                cMsgt4.ColSpan = 2;
                cMsgt4.Styles.add("key", "detailLabel1");
                cMsgt4.Styles.add("value", "detailResult1");

                rft.TestParamCells.push(cMsgt4);

                var eov4 = new TestParam();
                eov4.Key = "Measured frequency:";
                var cEov4 = new TestParamCell(eov4);
                cEov4.Row = 10;
                cEov4.Column = 0;
                cEov4.ColSpan = 2;
                cEov4.Styles.add("key", "detailLabel3");
                cEov4.Styles.add("value", "detailResult");

                rft.TestParamCells.push(cEov4);

                var mp4 = new TestParam();
                mp4.Key = "Measured power:";
                var cMp4 = new TestParamCell(mp4);
                cMp4.Row = 11;
                cMp4.Column = 0;
                cMp4.ColSpan = 2;
                cMp4.Styles.add("key", "detailLabel3");
                cMp4.Styles.add("value", "detailResult");

                rft.TestParamCells.push(cMp4);

                var ec4 = new TestParam();
                ec4.Key = "Error conditions:";
                var cEc4 = new TestParamCell(ec4);
                cEc4.Row = 12;
                cEc4.Column = 0;
                cEc4.ColSpan = 2;
                cEc4.Styles.add("key", "detailLabel3");
                cEc4.Styles.add("value", "detailResult");

                rft.TestParamCells.push(cEc4);

                newTest.Summaries.push(rft);
            }
                break;
            case 'UAT ADS-B IN': {
                newTest.Styles.add("key", "detailLabel");
                newTest.Styles.add("value", "detailResult2");
                newTest.Styles.add("unit", "detailUnit");

                newTest.Name = test;
                //-----------------------UAT In------------------------
                var uati = new Test();
                uati.Name = "UAT In";

                newTest.Summaries.push(uati);
                //------------------------TIS-B------------------------
                var tisb = new Test();
                tisb.Name = "TIS-B";

                newTest.Summaries.push(tisb);
                //------------------------FIS-B------------------------
                var fisb = new Test();
                fisb.Name = "FIS-B";

                newTest.Summaries.push(fisb);
            }
                break;
            case 'UAT RF': {
                newTest.Styles.add("key", "detailLabel");
                newTest.Styles.add("value", "detailResult2");
                newTest.Styles.add("unit", "detailUnit");

                newTest.Name = test;
                //------------------------UAT RF Link Test-----------------------------
                var urfl = new Test();
                urfl.Name = "UAT RF Link";

                newTest.Summaries.push(urfl);
                //------------------------GPS Status-----------------------------
                var gpss = new Test();
                gpss.Name = "GPS Status";

                newTest.Summaries.push(gpss);
            }
                break;
            case 'VSWR': {
                newTest.Styles.add("key", "detailLabel");
                newTest.Styles.add("value", "detailResult2");
                newTest.Styles.add("unit", "detailUnit");

                newTest.Name = test;
                //------------------------VSWR------------------------
                var vswr = new Test();
                vswr.Name = "VSWR";

                newTest.Summaries.push(vswr);
            }

        }
        return newTest;
    }
}