import { Injectable } from '@angular/core'
import { TestSection } from '../../core/tests/testSection'
import { Test } from '../../core/tests/test'
import { TestParam } from '../../core/tests/testParam'
import { TestParamCell } from '../../core/tests/testParamCell'
import { FileIOService } from '../io/file-io.service'
import { Group } from '../../core/tests/group'

@Injectable()
export class Factory {


    constructor() {

    }

    createSection(section: string): TestSection {
        var testSection: TestSection = new TestSection();
        switch (section) {
            case 'UAT OUT': {

                testSection.Styles.add("key", "sectionLabel");
                testSection.Styles.add("value", "sectionResult");

                testSection.Name = section;
                //------------------------UAT Filter Target------------------------
                var uft = new Test();
                uft.Name = "UAT Filter Target";

                var add1 = new TestParam();
                add1.Key = "ADDRESS:";
                var cAdd1 = new TestParamCell(add1);
                cAdd1.Row = 0;
                cAdd1.Column = 0;

                uft.TestParamCells.push(cAdd1);

                var q1 = new TestParam();
                q1.Key = "Qualifier:";
                var cQ1 = new TestParamCell(q1);
                cQ1.Row = 1;
                cQ1.Column = 0;

                uft.TestParamCells.push(cQ1);

                var pld1 = new TestParam();
                pld1.Key = "Payload Rcvd:";
                var cPld1 = new TestParamCell(pld1);
                cPld1.Row = 2;
                cPld1.Column = 0;

                uft.TestParamCells.push(cPld1);

                var agst1 = new TestParam();
                agst1.Key = "RF Level:";
                var cAgst1 = new TestParamCell(agst1);
                cAgst1.Row = 2;
                cAgst1.Column = 1;

                uft.TestParamCells.push(cAgst1);

                testSection.Summaries.push(uft);
                //------------------------UAT Mode Status Test-----------------------------
                var mst = new Test();
                mst.Name = "UAT Mode Status Test";

                var add2 = new TestParam();
                add2.Key = "ADDRESS:";
                var cAdd2 = new TestParamCell(add2);
                cAdd2.Row = 0;
                cAdd2.Column = 0;

                mst.TestParamCells.push(cAdd2);

                var q2 = new TestParam();
                q2.Key = "Qualifier:";
                var cQ2 = new TestParamCell(q2);
                cQ2.Row = 1;
                cQ2.Column = 0;

                mst.TestParamCells.push(cQ2);

                var pld2 = new TestParam();
                pld2.Key = "Payload Rcvd:";
                var cPld2 = new TestParamCell(pld2);
                cPld2.Row = 2;
                cPld2.Column = 0;

                mst.TestParamCells.push(cPld2);

                var agst2 = new TestParam();
                agst2.Key = "RF Level:";
                var cAgst2 = new TestParamCell(agst2);
                cAgst2.Row = 2;
                cAgst2.Column = 1;

                mst.TestParamCells.push(cAgst2);

                testSection.Summaries.push(mst);

                //------------------------UAT State Vector Test-----------------------------
                var usvt = new Test();
                usvt.Name = "UAT State Vector Test";

                var add3 = new TestParam();
                add3.Key = "ADDRESS:";
                var cAdd3 = new TestParamCell(add3);
                cAdd3.Row = 0;
                cAdd3.Column = 0;

                usvt.TestParamCells.push(cAdd3);

                var q3 = new TestParam();
                q3.Key = "Qualifier:";
                var cQ3 = new TestParamCell(q3);
                cQ3.Row = 1;
                cQ3.Column = 0;

                usvt.TestParamCells.push(cQ3);

                var pld3 = new TestParam();
                pld3.Key = "Payload Rcvd:";
                var cPld3 = new TestParamCell(pld3);
                cPld3.Row = 2;
                cPld3.Column = 0;

                usvt.TestParamCells.push(cPld3);

                var agst3 = new TestParam();
                agst3.Key = "RF Level:";
                var cAgst3 = new TestParamCell(agst3);
                cAgst3.Row = 2;
                cAgst3.Column = 1;

                usvt.TestParamCells.push(cAgst3);

                testSection.Summaries.push(usvt);

                //------------------------UAT Target State Test-----------------------------
                var tst = new Test();
                tst.Name = "UAT Target State Test";

                var add4 = new TestParam();
                add4.Key = "ADDRESS:";
                var cAdd4 = new TestParamCell(add4);
                cAdd4.Row = 0;
                cAdd4.Column = 0;

                tst.TestParamCells.push(cAdd4);

                var q4 = new TestParam();
                q4.Key = "Qualifier:";
                var cQ4 = new TestParamCell(q4);
                cQ4.Row = 1;
                cQ4.Column = 0;

                tst.TestParamCells.push(cQ4);

                var pld4 = new TestParam();
                pld4.Key = "Payload Rcvd:";
                var cPld4 = new TestParamCell(pld4);
                cPld4.Row = 2;
                cPld4.Column = 0;

                tst.TestParamCells.push(cPld4);

                var agst4 = new TestParam();
                agst4.Key = "RF Level:";
                var cAgst4 = new TestParamCell(agst4);
                cAgst4.Row = 2;
                cAgst4.Column = 1;

                tst.TestParamCells.push(cAgst4);

                testSection.Summaries.push(tst);

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

                // testSection.Summaries.push(tst);
                //------------------------UAT Payload Timing-----------------------------
                var rft = new Test();
                rft.Name = "UAT Payload Timing";

                var add6 = new TestParam();
                add6.Key = "ADDRESS:";
                var cAdd6 = new TestParamCell(add6);
                cAdd6.Row = 0;
                cAdd6.Column = 0;

                rft.TestParamCells.push(cAdd6);

                var q6 = new TestParam();
                q6.Key = "Qualifier:";
                var cQ6 = new TestParamCell(q6);
                cQ6.Row = 1;
                cQ6.Column = 0;

                rft.TestParamCells.push(cQ6);

                var pld6 = new TestParam();
                pld6.Key = "Payload Rcvd:";
                var cPld6 = new TestParamCell(pld6);
                cPld6.Row = 2;
                cPld6.Column = 0;

                rft.TestParamCells.push(cPld6);

                var agst6 = new TestParam();
                agst6.Key = "RF Level:";
                var cAgst6 = new TestParamCell(agst6);
                cAgst6.Row = 2;
                cAgst6.Column = 1;

                rft.TestParamCells.push(cAgst6);

                testSection.Summaries.push(rft);
            }
                break;
            case 'UAT IN': {

                testSection.Styles.add("key", "sectionLabel");
                testSection.Styles.add("value", "sectionResult");

                testSection.Name = section;
                //------------------------UAT State Vector Test------------------------
                var uati = new Test();
                uati.Name = "UAT In";

                var add7 = new TestParam();
                add7.Key = "ADDRESS:";
                var cAdd7 = new TestParamCell(add7);
                cAdd7.Row = 0;
                cAdd7.Column = 0;

                uati.TestParamCells.push(cAdd7);

                var q7 = new TestParam();
                q7.Key = "Qualifier:";
                var cQ7 = new TestParamCell(q7);
                cQ7.Row = 1;
                cQ7.Column = 0;

                uati.TestParamCells.push(cQ7);

                var pld7 = new TestParam();
                pld7.Key = "Payload Rcvd:";
                var cPld7 = new TestParamCell(pld7);
                cPld7.Row = 2;
                cPld7.Column = 0;

                uati.TestParamCells.push(cPld7);

                var agst7 = new TestParam();
                agst7.Key = "RF Level:";
                var cAgst7 = new TestParamCell(agst7);
                cAgst7.Row = 2;
                cAgst7.Column = 1;

                uati.TestParamCells.push(cAgst7);

                testSection.Summaries.push(uati);

                //------------------------UAT Mode Status Test-----------------------------
                var tisb = new Test();
                tisb.Name = "TIS-B";

                var add8 = new TestParam();
                add8.Key = "ADDRESS:";
                var cAdd8 = new TestParamCell(add8);
                cAdd8.Row = 0;
                cAdd8.Column = 0;

                tisb.TestParamCells.push(cAdd8);

                var q8 = new TestParam();
                q8.Key = "Qualifier:";
                var cQ8 = new TestParamCell(q8);
                cQ8.Row = 1;
                cQ8.Column = 0;

                tisb.TestParamCells.push(cQ8);

                var pld8 = new TestParam();
                pld8.Key = "Payload Rcvd:";
                var cPld8 = new TestParamCell(pld8);
                cPld8.Row = 2;
                cPld8.Column = 0;

                tisb.TestParamCells.push(cPld8);

                var agst8 = new TestParam();
                agst8.Key = "RF Level:";
                var cAgst8 = new TestParamCell(agst8);
                cAgst8.Row = 2;
                cAgst8.Column = 1;

                tisb.TestParamCells.push(cAgst8);

                testSection.Summaries.push(tisb);

                //------------------------UAT RF Link Test-----------------------------
                var fisb = new Test();
                fisb.Name = "FIS-B";

                var add9 = new TestParam();
                add9.Key = "ADDRESS:";
                var cAdd9 = new TestParamCell(add9);
                cAdd9.Row = 0;
                cAdd9.Column = 0;

                fisb.TestParamCells.push(cAdd9);

                var q9 = new TestParam();
                q9.Key = "Qualifier:";
                var cQ9 = new TestParamCell(q9);
                cQ9.Row = 1;
                cQ9.Column = 0;

                fisb.TestParamCells.push(cQ9);

                var pld9 = new TestParam();
                pld9.Key = "Payload Rcvd:";
                var cPld9 = new TestParamCell(pld9);
                cPld9.Row = 2;
                cPld9.Column = 0;

                fisb.TestParamCells.push(cPld9);

                var agst9 = new TestParam();
                agst9.Key = "RF Level:";
                var cAgst9 = new TestParamCell(agst9);
                cAgst9.Row = 2;
                cAgst9.Column = 1;

                fisb.TestParamCells.push(cAgst9);

                testSection.Summaries.push(fisb);
            }
                break;
            case 'UAT RF': {

                testSection.Styles.add("key", "sectionLabel");
                testSection.Styles.add("value", "sectionResult");

                testSection.Name = section;

                //------------------------UAT RF Link Test-----------------------------
                var urfl = new Test();
                urfl.Name = "UAT RF Link";

                var add10 = new TestParam();
                add10.Key = "ADDRESS:";
                var cAdd10 = new TestParamCell(add10);
                cAdd10.Row = 0;
                cAdd10.Column = 0;

                urfl.TestParamCells.push(cAdd10);

                var q10 = new TestParam();
                q10.Key = "Qualifier:";
                var cQ10 = new TestParamCell(q10);
                cQ10.Row = 1;
                cQ10.Column = 0;

                urfl.TestParamCells.push(cQ10);

                var pld10 = new TestParam();
                pld10.Key = "Payload Rcvd:";
                var cPld10 = new TestParamCell(pld10);
                cPld10.Row = 2;
                cPld10.Column = 0;

                urfl.TestParamCells.push(cPld10);

                var agst10 = new TestParam();
                agst10.Key = "RF Level:";
                var cAgst10 = new TestParamCell(agst10);
                cAgst10.Row = 2;
                cAgst10.Column = 1;

                urfl.TestParamCells.push(cAgst10);

                testSection.Summaries.push(urfl);

                //------------------------GPS Status-----------------------------
                var gpss = new Test();
                gpss.Name = "GPS Status";

                var add11 = new TestParam();
                add11.Key = "ADDRESS:";
                var cAdd11 = new TestParamCell(add11);
                cAdd11.Row = 0;
                cAdd11.Column = 0;

                gpss.TestParamCells.push(cAdd11);

                var q11 = new TestParam();
                q11.Key = "Qualifier:";
                var cQ11 = new TestParamCell(q11);
                cQ11.Row = 1;
                cQ11.Column = 0;

                gpss.TestParamCells.push(cQ11);

                var pld11 = new TestParam();
                pld11.Key = "Payload Rcvd:";
                var cPld11 = new TestParamCell(pld11);
                cPld11.Row = 2;
                cPld11.Column = 0;

                gpss.TestParamCells.push(cPld11);

                var agst11 = new TestParam();
                agst11.Key = "RF Level:";
                var cAgst11 = new TestParamCell(agst11);
                cAgst11.Row = 2;
                cAgst11.Column = 1;

                gpss.TestParamCells.push(cAgst11);
                testSection.Summaries.push(gpss);
            }
                break;
            case 'VSWR': {

                testSection.Styles.add("key", "sectionLabel");
                testSection.Styles.add("value", "sectionResult");

                testSection.Name = section;
                //------------------------VSWR------------------------
                var vswr = new Test();
                vswr.Name = "VSWR";

                var add12 = new TestParam();
                add12.Key = "ADDRESS:";
                var cAdd12 = new TestParamCell(add12);
                cAdd12.Row = 0;
                cAdd12.Column = 0;

                vswr.TestParamCells.push(cAdd12);

                var q12 = new TestParam();
                q12.Key = "Qualifier:";
                var cQ12 = new TestParamCell(q12);
                cQ12.Row = 1;
                cQ12.Column = 0;

                vswr.TestParamCells.push(cQ12);

                var pld12 = new TestParam();
                pld12.Key = "Payload Rcvd:";
                var cPld12 = new TestParamCell(pld12);
                cPld12.Row = 2;
                cPld12.Column = 0;

                vswr.TestParamCells.push(cPld12);

                var agst12 = new TestParam();
                agst12.Key = "RF Level:";
                var cAgst12 = new TestParamCell(agst12);
                cAgst12.Row = 2;
                cAgst12.Column = 1;

                vswr.TestParamCells.push(cAgst12);

                testSection.Summaries.push(vswr);
            }
                break;
        }

        return testSection;
    }

    createGroup(groupName: string): Group {
        var group = new Group();
        switch (groupName) {
            case 'UAT': {
                group.Sections = [
                    this.createSection("UAT OUT"),
                    this.createSection("UAT IN"),
                    this.createSection("UAT RF"),
                    this.createSection("VSWR")
                ];
                break;
            }
            default: {
                break;
            }
        }
        return group
    }

    createTest(test: string, section: string): Test {
        var newTest: Test;
        var id = section + "/" + test

        switch (id) {
             case 'UAT OUT/UAT State Vector Test': {
                var svt = new Test();
                svt.Name = "UAT State Vector Test";

                var add1 = new TestParam();
                add1.Key = "ADDRESS:";
                var cAdd1 = new TestParamCell(add1);
                cAdd1.Row = 0;
                cAdd1.Column = 0;

                svt.TestParamCells.push(cAdd1);

                var addQ1 = new TestParam();
                addQ1.Key = "Qualifier:";
                var cAddQ1 = new TestParamCell(addQ1);
                cAddQ1.Row = 1;
                cAddQ1.Column = 0;

                svt.TestParamCells.push(cAddQ1);

                var pld1 = new TestParam();
                pld1.Key = "Payload Rcvd:";
                var cPld1 = new TestParamCell(pld1);
                cPld1.Row = 2;
                cPld1.Column = 0;

                svt.TestParamCells.push(cPld1);

                var rfle1 = new TestParam();
                rfle1.Key = "RF Level:";
                var cRfle1 = new TestParamCell(rfle1);
                cRfle1.Row = 2;
                cRfle1.Column = 1;

                svt.TestParamCells.push(cRfle1);

                var sve1 = new TestParam();
                sve1.Key = "State Vector Element (SV)";
                var cSve1 = new TestParamCell(sve1);
                cSve1.Styles.add("key", "detailheading1");
                cSve1.Row = 3;
                cSve1.Column = 0;
                cSve1.ColSpan = 3;

                svt.TestParamCells.push(cSve1);

                var pv1 = new TestParam();
                pv1.Key = "Position & Velocity:";
                var cPv1 = new TestParamCell(pv1);
                cPv1.Row = 4;
                cPv1.Column = 0;

                svt.TestParamCells.push(cPv1);

                var ags1 = new TestParam();
                ags1.Key = "A/G State:";
                var cAgs1 = new TestParamCell(ags1);
                cAgs1.Row = 5;
                cAgs1.Column = 0;

                svt.TestParamCells.push(cAgs1);

                var ltd1 = new TestParam();
                ltd1.Key = "Latitude:";
                var cLtd1 = new TestParamCell(ltd1);
                cLtd1.Row = 6;
                cLtd1.Column = 0;

                svt.TestParamCells.push(cLtd1);

                var lgd1 = new TestParam();
                lgd1.Key = "Longitude:";
                var cLgd1 = new TestParamCell(lgd1);
                cLgd1.Row = 7;
                cLgd1.Column = 0;

                svt.TestParamCells.push(cLgd1);

                var alt1 = new TestParam();
                alt1.Key = "Altitude:";
                var cAlt1 = new TestParamCell(alt1);
                cAlt1.Row = 8;
                cAlt1.Column = 0;

                svt.TestParamCells.push(cAlt1);

                var hv1 = new TestParam();
                hv1.Key = "Horizontal Velocity:";
                var cHv1 = new TestParamCell(hv1);
                cHv1.Row = 9;
                cHv1.Column = 0;

                svt.TestParamCells.push(cHv1);

                var vv1 = new TestParam();
                vv1.Key = "Vert. Velocity:";
                var cVv1 = new TestParamCell(vv1);
                cVv1.Row = 10;
                cVv1.Column = 0;

                svt.TestParamCells.push(cVv1);

                var of1 = new TestParam();
                of1.Key = "Other Fields:";
                var cOf1 = new TestParamCell(of1);
                cOf1.Row = 11;
                cOf1.Column = 0;
                cOf1.ColSpan = 3;
                cOf1.Styles.add("key", "detailheading1");

                svt.TestParamCells.push(cOf1);

                var nic1 = new TestParam();
                nic1.Key = "NIC:";
                var cNic1 = new TestParamCell(nic1);
                cNic1.Row = 12;
                cNic1.Column = 0;

                svt.TestParamCells.push(cNic1);

                var utc1 = new TestParam();
                utc1.Key = "UTC:";
                var cUtc1 = new TestParamCell(utc1);
                cUtc1.Row = 12;
                cUtc1.Column = 1;

                svt.TestParamCells.push(cUtc1);

                var ufb1 = new TestParam();
                ufb1.Key = "Uplink Feedback:";
                var cUfb1 = new TestParamCell(ufb1);
                cUfb1.Row = 13;
                cUfb1.Column = 0;

                svt.TestParamCells.push(cUfb1);

                var asve1 = new TestParam();
                asve1.Key = "Aux.State Vector Element (AUX SV):";
                var cAsve1 = new TestParamCell(asve1);
                cAsve1.Row = 14;
                cAsve1.Column = 0;
                cAsve1.ColSpan = 2;
                cAsve1.Styles.add("key", "detailheading1");

                svt.TestParamCells.push(cAsve1);

                var sa1 = new TestParam();
                sa1.Key = "Secondary Altitude:";
                var cSa1 = new TestParamCell(sa1);
                cSa1.Row = 15;
                cSa1.Column = 0;
                cSa1.ColSpan = 2;

                svt.TestParamCells.push(cSa1);

                newTest = svt;
            }
            case 'UAT OUT/UAT State Vector Test': {
                var usvt = new Test();
                usvt.Name = "UAT State Vector Test";

                var addr1 = new TestParam();
                addr1.Key = "ADDRESS:";
                var cAddr1 = new TestParamCell(addr1);
                cAddr1.Row = 0;
                cAddr1.Column = 0;

                usvt.TestParamCells.push(cAddr1);

                var aQ1 = new TestParam();
                aQ1.Key = "Qualifier:";
                var cAq1 = new TestParamCell(aQ1);
                cAq1.Row = 1;
                cAq1.Column = 0;

                usvt.TestParamCells.push(cAq1);

                var pldr1 = new TestParam();
                pldr1.Key = "Payload Rcvd:";
                var cPldr1 = new TestParamCell(pldr1);
                cPldr1.Row = 2;
                cPldr1.Column = 0;

                usvt.TestParamCells.push(cPldr1);

                var rflev1 = new TestParam();
                rflev1.Key = "RF Level:";
                var cRflev1 = new TestParamCell(rflev1);
                cRflev1.Row = 2;
                cRflev1.Column = 1;

                usvt.TestParamCells.push(cRflev1);

                var sv1 = new TestParam();
                sv1.Key = "State Vector Element (SV)";
                var cSv1 = new TestParamCell(sv1);
                cSv1.Styles.add("key", "detailheading1");
                cSv1.Row = 3;
                cSv1.Column = 0;
                cSv1.ColSpan = 3;

                usvt.TestParamCells.push(cSv1);

                var posv1 = new TestParam();
                posv1.Key = "Position & Velocity:";
                var cPosv1 = new TestParamCell(posv1);
                cPosv1.Row = 4;
                cPosv1.Column = 0;

                usvt.TestParamCells.push(cPosv1);

                var agst1 = new TestParam();
                agst1.Key = "A/G State:";
                var cAgst1 = new TestParamCell(agst1);
                cAgst1.Row = 5;
                cAgst1.Column = 0;

                usvt.TestParamCells.push(cAgst1);

                var latd1 = new TestParam();
                latd1.Key = "Latitude:";
                var cLatd1 = new TestParamCell(latd1);
                cLatd1.Row = 6;
                cLatd1.Column = 0;

                usvt.TestParamCells.push(cLatd1);

                var lagd1 = new TestParam();
                lagd1.Key = "Longitude:";
                var cLagd1 = new TestParamCell(lagd1);
                cLagd1.Row = 7;
                cLagd1.Column = 0;

                usvt.TestParamCells.push(cLagd1);

                var alti1 = new TestParam();
                alti1.Key = "Altitude:";
                var cAlti1 = new TestParamCell(alti1);
                cAlti1.Row = 8;
                cAlti1.Column = 0;

                usvt.TestParamCells.push(cAlti1);

                var horv1 = new TestParam();
                horv1.Key = "Horizontal Velocity:";
                var cHorv1 = new TestParamCell(horv1);
                cHorv1.Row = 9;
                cHorv1.Column = 0;

                usvt.TestParamCells.push(cHorv1);

                var verv1 = new TestParam();
                verv1.Key = "Vert. Velocity:";
                var cVerv1 = new TestParamCell(verv1);
                cVerv1.Row = 10;
                cVerv1.Column = 0;

                usvt.TestParamCells.push(cVerv1);

                var ofld1 = new TestParam();
                ofld1.Key = "Other Fields:";
                var cOfld1 = new TestParamCell(ofld1);
                cOfld1.Row = 11;
                cOfld1.Column = 0;
                cOfld1.ColSpan = 3;
                cOfld1.Styles.add("key", "detailheading1");

                usvt.TestParamCells.push(cOfld1);

                var ni1 = new TestParam();
                ni1.Key = "NIC:";
                var cNi1 = new TestParamCell(ni1);
                cNi1.Row = 12;
                cNi1.Column = 0;

                usvt.TestParamCells.push(cNi1);

                var ut1 = new TestParam();
                ut1.Key = "UTC:";
                var cUt1 = new TestParamCell(ut1);
                cUt1.Row = 12;
                cUt1.Column = 1;

                usvt.TestParamCells.push(cUt1);

                var upfb1 = new TestParam();
                upfb1.Key = "Uplink Feedback:";
                var cUpfb1 = new TestParamCell(upfb1);
                cUpfb1.Row = 13;
                cUpfb1.Column = 0;

                usvt.TestParamCells.push(cUpfb1);

                var auxsve1 = new TestParam();
                auxsve1.Key = "Aux.State Vector Element (AUX SV):";
                var cAuxsve1 = new TestParamCell(auxsve1);
                cAuxsve1.Row = 14;
                cAuxsve1.Column = 0;
                cAuxsve1.ColSpan = 2;
                cAuxsve1.Styles.add("key", "detailheading1");

                usvt.TestParamCells.push(cAuxsve1);

                var seca1 = new TestParam();
                seca1.Key = "Secondary Altitude:";
                var cSeca1 = new TestParamCell(seca1);
                cSeca1.Row = 15;
                cSeca1.Column = 0;
                cSeca1.ColSpan = 2;

                usvt.TestParamCells.push(cSeca1);

                newTest = usvt;
            }
                break;
            case 'UAT OUT/UAT Mode Status Test': {
                var mst = new Test();
                mst.Name = "UAT Mode Status Test";

                var add3 = new TestParam();
                add3.Key = "ADDRESS:";
                var cAdd3 = new TestParamCell(add3);
                cAdd3.Row = 0;
                cAdd3.Column = 0;


                mst.TestParamCells.push(cAdd3);

                var addQ3 = new TestParam();
                addQ3.Key = "Qualifier:";
                var cAddQ3 = new TestParamCell(addQ3);
                cAddQ3.Row = 1;
                cAddQ3.Column = 0;

                mst.TestParamCells.push(cAddQ3);

                var pld3 = new TestParam();
                pld3.Key = "Payload Rcvd:";
                var cPld3 = new TestParamCell(pld3);
                cPld3.Row = 2;
                cPld3.Column = 0;
                cPld3.ColSpan = 3;

                mst.TestParamCells.push(cPld3);

                var eqc3 = new TestParam();
                eqc3.Key = "RF Level:";
                var cEqc3 = new TestParamCell(eqc3);
                cEqc3.Row = 2;
                cEqc3.Column = 1;

                mst.TestParamCells.push(cEqc3);

                var esd3 = new TestParam();
                esd3.Key = "Mode Status Element (MS)";
                var cEsd3 = new TestParamCell(esd3);
                cEsd3.Row = 4;
                cEsd3.Column = 0;
                cEsd3.ColSpan = 2;
                cEsd3.Styles.add("key", "detailheading1");

                mst.TestParamCells.push(cEsd3);

                var avi3 = new TestParam();
                avi3.Key = "Aircraft/Vehicle Info:";
                var cAvi3 = new TestParamCell(avi3);
                cAvi3.Row = 5;
                cAvi3.Column = 0;

                mst.TestParamCells.push(cAvi3);

                var fid3 = new TestParam();
                fid3.Key = "Flight ID:";
                var cFid3 = new TestParamCell(fid3);
                cFid3.Row = 6;
                cFid3.Column = 0;

                mst.TestParamCells.push(cFid3);

                var csid3 = new TestParam();
                csid3.Key = "CSID:";
                var cCsid3 = new TestParamCell(csid3);
                cCsid3.Row = 6;
                cCsid3.Column = 1;

                mst.TestParamCells.push(cCsid3);

                var ec3 = new TestParam();
                ec3.Key = "Emitter Cat:";
                var cEc3 = new TestParamCell(ec3);
                cEc3.Row = 7;
                cEc3.Column = 0;

                mst.TestParamCells.push(cEc3);

                var acd3 = new TestParam();
                acd3.Key = "3/A Code:";
                var cAcd3 = new TestParamCell(acd3);
                cAcd3.Row = 7;
                cAcd3.Column = 1;

                mst.TestParamCells.push(cAcd3);

                var ep3 = new TestParam();
                ep3.Key = "Emg/Prty:";
                var cEp3 = new TestParamCell(ep3);
                cEp3.Row = 8;
                cEp3.Column = 0;
                cEp3.ColSpan = 2;

                mst.TestParamCells.push(cEp3);

                var cc3 = new TestParam();
                cc3.Key = "Capability Codes:";
                var cCc3 = new TestParamCell(cc3);
                cCc3.Row = 9;
                cCc3.Column = 0;
                cCc3.ColSpan = 2;

                mst.TestParamCells.push(cCc3);

                var uatin3 = new TestParam();
                uatin3.Key = "UAT IN:";
                var cUatin3 = new TestParamCell(uatin3);
                cUatin3.Row = 10;
                cUatin3.Column = 0;

                mst.TestParamCells.push(cUatin3);

                var tcasp3 = new TestParam();
                tcasp3.Key = "TCAS Op:";
                var cTcasp3 = new TestParamCell(tcasp3);
                cTcasp3.Row = 10;
                cTcasp3.Column = 1;

                mst.TestParamCells.push(cTcasp3);

                var es3 = new TestParam();
                es3.Key = "1090ES IN:";
                var cEs3 = new TestParamCell(es3);
                cEs3.Row = 11;
                cEs3.Column = 0;
                cEs3.ColSpan = 2;

                mst.TestParamCells.push(cEs3);

                var om3 = new TestParam();
                om3.Key = "Operational Modes:";
                var cOm3 = new TestParamCell(om3);
                cOm3.Row = 12;
                cOm3.Column = 0;
                cOm3.ColSpan = 3;

                mst.TestParamCells.push(cOm3);

                var atcs3 = new TestParam();
                atcs3.Key = "ATC Svcs:";
                var cAtcs3 = new TestParamCell(atcs3);
                cAtcs3.Row = 13;
                cAtcs3.Column = 0;

                mst.TestParamCells.push(cAtcs3);

                var idt3 = new TestParam();
                idt3.Key = "IDENT:";
                var cIdt3 = new TestParamCell(idt3);
                cIdt3.Row = 13;
                cIdt3.Column = 1;

                mst.TestParamCells.push(cIdt3);

                var tcasra3 = new TestParam();
                tcasra3.Key = "TCAS RA:";
                var cTcasra3 = new TestParamCell(tcasra3);
                cTcasra3.Row = 14;
                cTcasra3.Column = 0;

                mst.TestParamCells.push(cTcasra3);

                var ofd3 = new TestParam();
                ofd3.Key = "Other Fields:";
                var cOfd3 = new TestParamCell(ofd3);
                cOfd3.Row = 15;
                cOfd3.Column = 0;
                cOfd3.ColSpan = 2;

                mst.TestParamCells.push(cOfd3);

                var nacp3 = new TestParam();
                nacp3.Key = "NACp:";
                var cNacp3 = new TestParamCell(nacp3);
                cNacp3.Row = 16;
                cNacp3.Column = 0;

                mst.TestParamCells.push(cNacp3);
                var trnmso3 = new TestParam();
                trnmso3.Key = "Transmit MSO:";
                var cTrnmso3 = new TestParamCell(trnmso3);
                cTrnmso3.Row = 16;
                cTrnmso3.Column = 1;

                mst.TestParamCells.push(cTrnmso3);

                var nacv3 = new TestParam();
                nacv3.Key = "NACv:";
                var cNacv3 = new TestParamCell(nacv3);
                cNacv3.Row = 17;
                cNacv3.Column = 0;

                mst.TestParamCells.push(cNacv3);

                var sil3 = new TestParam();
                sil3.Key = "SIL:";
                var cSil3 = new TestParamCell(sil3);
                cSil3.Row = 17;
                cSil3.Column = 1;

                mst.TestParamCells.push(cSil3);

                var sda3 = new TestParam();
                sda3.Key = "SDA:";
                var cSda3 = new TestParamCell(sda3);
                cSda3.Row = 18;
                cSda3.Column = 0;

                mst.TestParamCells.push(cSda3);

                var gva3 = new TestParam();
                gva3.Key = "GVA:";
                var cGva3 = new TestParamCell(gva3);
                cGva3.Row = 18;
                cGva3.Column = 1;

                mst.TestParamCells.push(cGva3);

                var mops3 = new TestParam();
                mops3.Key = "MOPS:";
                var cMops3 = new TestParamCell(mops3);
                cMops3.Row = 19;
                cMops3.Column = 0;

                mst.TestParamCells.push(cMops3);

                var sils3 = new TestParam();
                sils3.Key = "SIL Sup:";
                var cSils3 = new TestParamCell(sils3);
                cSils3.Row = 19;
                cSils3.Column = 1;

                mst.TestParamCells.push(cSils3);

                var sgla3 = new TestParam();
                sgla3.Key = "Sgl Ant:";
                var cSgla3 = new TestParamCell(sgla3);
                cSgla3.Row = 20;
                cSgla3.Column = 0;

                mst.TestParamCells.push(cSgla3);

                var nicb3 = new TestParam();
                nicb3.Key = "NICbaro";
                var cNicb3 = new TestParamCell(nicb3);
                cNicb3.Row = 20;
                cNicb3.Column = 1;

                mst.TestParamCells.push(cNicb3);

                var nicsup3 = new TestParam();
                nicsup3.Key = "NICsup";
                var cNicsup3 = new TestParamCell(nicsup3);
                cNicsup3.Row = 21;
                cNicsup3.Column = 0;

                mst.TestParamCells.push(cNicsup3);

                newTest = mst;
            }
                break;
            case 'UAT OUT/UAT Payload Timing': {

                var rft = new Test();
                rft.Name = "UAT RF Test";

                var add4 = new TestParam();
                add4.Key = "ADDRESS:";
                var cAdd4 = new TestParamCell(add4);
                cAdd4.Row = 0;
                cAdd4.Column = 0;
                cAdd4.ColSpan = 2;
                rft.TestParamCells.push(cAdd4);

                var addQ4 = new TestParam();
                addQ4.Key = "Qualifier:";
                var cAddQ4 = new TestParamCell(addQ4);
                cAddQ4.Row = 1;
                cAddQ4.Column = 0;
                cAddQ4.ColSpan = 2;

                rft.TestParamCells.push(cAddQ4);

                var pld4 = new TestParam();
                pld4.Key = "Payload Rcvd:";
                var cPld4 = new TestParamCell(pld4);
                cPld4.Row = 2;
                cPld4.Column = 0;
                cPld4.ColSpan = 2;

                rft.TestParamCells.push(cPld4);

                var eqc4 = new TestParam();
                eqc4.Key = "RF Link:";
                var cEqc4 = new TestParamCell(eqc4);
                cEqc4.Row = 3;
                cEqc4.Column = 0;

                rft.TestParamCells.push(cEqc4);

                var rflp4 = new TestParam();
                rflp4.Key = "RF /Payload Timming";
                var cRflp4 = new TestParamCell(rflp4);
                cRflp4.Row = 4;
                cRflp4.Column = 0;
                cRflp4.ColSpan = 2;
                cRflp4.Styles.add("key", "detailheading1");

                rft.TestParamCells.push(cRflp4);

                var txp4 = new TestParam();
                txp4.Key = "Payload Reception Rate:";
                var cTxp4 = new TestParamCell(txp4);
                cTxp4.Row = 5;
                cTxp4.Column = 0;
                cTxp4.ColSpan = 2;
                cTxp4.Styles.add("key", "detailheading1");

                rft.TestParamCells.push(cTxp4);

                var pwrd4 = new TestParam();
                pwrd4.Key = "State Vector (SV):";
                var cPwrd4 = new TestParamCell(pwrd4);
                cPwrd4.Row = 6;
                cPwrd4.Column = 0;
                cPwrd4.ColSpan = 2;

                rft.TestParamCells.push(cPwrd4);

                var frq4 = new TestParam();
                frq4.Key = "Mode Status(MS):";
                var cFrq4 = new TestParamCell(frq4);
                cFrq4.Row = 7;
                cFrq4.Column = 0;
                cFrq4.ColSpan = 2;

                rft.TestParamCells.push(cFrq4);

                var dvt4 = new TestParam();
                dvt4.Key = "Aux State Vector(AUX SV):";
                var cDvt4 = new TestParamCell(dvt4);
                cDvt4.Row = 8;
                cDvt4.Column = 0;
                cDvt4.ColSpan = 2;

                rft.TestParamCells.push(cDvt4);

                var pdvt4 = new TestParam();
                pdvt4.Key = "Target State(TS):";
                var cPdvt4 = new TestParamCell(pdvt4);
                cPdvt4.Row = 9;
                cPdvt4.Column = 0;
                cPdvt4.ColSpan = 2;

                rft.TestParamCells.push(cPdvt4);

                var msgt4 = new TestParam();
                msgt4.Key = "978 MHz RF Data:";
                var cMsgt4 = new TestParamCell(msgt4);
                cMsgt4.Row = 10;
                cMsgt4.Column = 0;
                cMsgt4.ColSpan = 2;
                cMsgt4.Styles.add("key", "detailheading1");

                rft.TestParamCells.push(cMsgt4);

                var eov4 = new TestParam();
                eov4.Key = "Measured frequency:";
                var cEov4 = new TestParamCell(eov4);
                cEov4.Row = 11;
                cEov4.Column = 0;
                cEov4.ColSpan = 2;

                rft.TestParamCells.push(cEov4);

                var mp4 = new TestParam();
                mp4.Key = "Measured power:";
                var cMp4 = new TestParamCell(mp4);
                cMp4.Row = 12;
                cMp4.Column = 0;
                cMp4.ColSpan = 2;

                rft.TestParamCells.push(cMp4);

                var ec4 = new TestParam();
                ec4.Key = "Error Conditions:";
                var cEc4 = new TestParamCell(ec4);
                cEc4.Row = 12;
                cEc4.Column = 0;
                cEc4.ColSpan = 2;

                rft.TestParamCells.push(cEc4);

                newTest = rft;
            }
                break;
            case 'UAT OUT/UAT Target State Test': {
                var tst = new Test();
                tst.Name = "UAT Target State Test";

                var add6 = new TestParam();
                add6.Key = "ADDRESS:";
                var cAdd6 = new TestParamCell(add6);
                cAdd6.Row = 0;
                cAdd6.Column = 0;
                cAdd6.ColSpan = 2;

                tst.TestParamCells.push(cAdd6);

                var addQ6 = new TestParam();
                addQ6.Key = "Qualifier:";
                var cAddQ6 = new TestParamCell(addQ6);
                cAddQ6.Row = 1;
                cAddQ6.Column = 0;
                cAddQ6.ColSpan = 2;

                tst.TestParamCells.push(cAddQ6);

                var pld6 = new TestParam();
                pld6.Key = "Payload Rcvd:";
                var cPld6 = new TestParamCell(pld6);
                cPld6.Row = 2;
                cPld6.Column = 0;

                tst.TestParamCells.push(cPld6);

                var rfle6 = new TestParam();
                rfle6.Key = "RF Level:";
                var cRfle6 = new TestParamCell(rfle6);
                cRfle6.Row = 2;
                cRfle6.Column = 1;

                tst.TestParamCells.push(cRfle6);

                var tse6 = new TestParam();
                tse6.Key = "Target State Element (TS)";
                var cTse6 = new TestParamCell(tse6);
                cTse6.Row = 3;
                cTse6.Column = 0;
                cTse6.ColSpan = 3;
                cTse6.Styles.add("key", "detailheading1");

                tst.TestParamCells.push(cTse6);



                var sat6 = new TestParam();
                sat6.Key = "Sel. Altitude:";
                var cSat6 = new TestParamCell(sat6);
                cSat6.Row = 4;
                cSat6.Column = 0;

                tst.TestParamCells.push(cSat6);

                var typ6 = new TestParam();
                typ6.Key = "Type:";
                var cTyp6 = new TestParamCell(typ6);
                cTyp6.Row = 4;
                cTyp6.Column = 1;

                tst.TestParamCells.push(cTyp6);

                var bps6 = new TestParam();
                bps6.Key = "Baro Setting:";
                var cBps6 = new TestParamCell(bps6);
                cBps6.Row = 5;
                cBps6.Column = 0;
                cBps6.ColSpan = 2;

                tst.TestParamCells.push(cBps6);

                var seh6 = new TestParam();
                seh6.Key = "Sel. Heading:";
                var cSeh6 = new TestParamCell(seh6);
                cSeh6.Row = 7;
                cSeh6.Column = 0;
                cSeh6.ColSpan = 2;

                tst.TestParamCells.push(cSeh6);

                var mfms6 = new TestParam();
                mfms6.Key = "AutoPilot Modes";
                var cMfms6 = new TestParamCell(mfms6);
                cMfms6.Row = 8;
                cMfms6.Column = 0;
                cMfms6.ColSpan = 2;
                cMfms6.Styles.add("key", "detailheading1");

                tst.TestParamCells.push(cMfms6);

                var ap6 = new TestParam();
                ap6.Key = "Mode bits status:";
                var cAp6 = new TestParamCell(ap6);
                cAp6.Row = 9;
                cAp6.Column = 0;
                cAp6.ColSpan = 2;

                tst.TestParamCells.push(cAp6);

                var vnav6 = new TestParam();
                vnav6.Key = "AutoPilot(AP):";
                var cVnav6 = new TestParamCell(vnav6);
                cVnav6.Row = 10;
                cVnav6.Column = 0;
                cVnav6.ColSpan = 2;

                tst.TestParamCells.push(cVnav6);

                var alth6 = new TestParam();
                alth6.Key = "VNAV:";
                var cAlth6 = new TestParamCell(alth6);
                cAlth6.Row = 11;
                cAlth6.Column = 0;
                cAlth6.ColSpan = 2;

                tst.TestParamCells.push(cAlth6);

                var appm6 = new TestParam();
                appm6.Key = "Alt. Hold(ALT):";
                var cAppm6 = new TestParamCell(appm6);
                cAppm6.Row = 12;
                cAppm6.Column = 0;
                cAppm6.ColSpan = 2;

                tst.TestParamCells.push(cAppm6);

                var lnavm6 = new TestParam();
                lnavm6.Key = "Approach (APP):";
                var cLnavm6 = new TestParamCell(lnavm6);
                cLnavm6.Row = 13;
                cLnavm6.Column = 0;
                cLnavm6.ColSpan = 2;

                tst.TestParamCells.push(cLnavm6);

                var lnav6 = new TestParam();
                lnav6.Key = "LNAV:";
                var cLnav6 = new TestParamCell(lnav6);
                cLnav6.Row = 14;
                cLnav6.Column = 0;
                cLnav6.ColSpan = 2;

                tst.TestParamCells.push(cLnav6);



                newTest = tst;

            }
                break;
            // case 'UAT OUT/UAT AUX State Vector Test': {
            //     var asvt = new Test();
            //     asvt.Name = "UAT AUX State Vector Test";

            //     var add2 = new TestParam();
            //     add2.Key = "AA ID:";
            //     var cAdd2 = new TestParamCell(add2);
            //     cAdd2.Row = 0;
            //     cAdd2.Column = 0;

            //     var addQ2 = new TestParam();
            //     addQ2.Key = "Address Qualifier:";
            //     var cAddQ2 = new TestParamCell(addQ2);
            //     cAddQ2.Row = 1;
            //     cAddQ2.Column = 0;

            //     var pld2 = new TestParam();
            //     pld2.Key = "Payload Type Codes:";
            //     var cPld2 = new TestParamCell(pld2);
            //     cPld2.Row = 2;
            //     cPld2.Column = 0;

            //     var asve2 = new TestParam();
            //     asve2.Key = "AUX State Vector Element";
            //     var cAsve2 = new TestParamCell(asve2);
            //     cAsve2.ColSpan = 4;
            //     cAsve2.Row = 3;
            //     cAsve2.Column = 0;
            //     cAsve2.ColSpan = 3;
            //     cAsve2.Styles.add("key", "detailheading");

            //     var alt2 = new TestParam();
            //     alt2.Key = "Altitude";
            //     var cAlt2 = new TestParamCell(alt2);
            //     cAlt2.Row = 4;
            //     cAlt2.Column = 0;

            //     var altt2 = new TestParam();
            //     altt2.Key = "Altitude Type:";
            //     var cAltt2 = new TestParamCell(altt2);
            //     cAltt2.Row = 5;
            //     cAltt2.Column = 0;

            //     var rfl2 = new TestParam();
            //     rfl2.Key = "RF Link";
            //     var cRfl2 = new TestParamCell(rfl2);
            //     cRfl2.Row = 6;
            //     cRfl2.Column = 0;
            //     cRfl2.ColSpan = 3;
            //     cRfl2.Styles.add("key", "detailheading");

            //     var frq2 = new TestParam();
            //     frq2.Key = "Freq=";
            //     var cFrq2 = new TestParamCell(frq2);
            //     cFrq2.Row = 7;
            //     cFrq2.Column = 0;

            //     var pwr2 = new TestParam();
            //     pwr2.Key = "Power";
            //     var cPwr2 = new TestParamCell(pwr2);
            //     cPwr2.Row = 7;
            //     cPwr2.Column = 1;

            //     var gps2 = new TestParam();
            //     gps2.Key = "GPS=";
            //     var cGps2 = new TestParamCell(gps2);
            //     cGps2.Row = 8;
            //     cGps2.Column = 0;

            //     var rflt2 = new TestParam();
            //     rflt2.Key = "RF Link Test=";
            //     var cRflt2 = new TestParamCell(rflt2);
            //     cRflt2.Row = 8;
            //     cRflt2.Column = 1;

            //     asvt.TestParamCells.push(cAdd2);
            //     asvt.TestParamCells.push(cAddQ2);
            //     asvt.TestParamCells.push(cPld2);
            //     asvt.TestParamCells.push(cAsve2);
            //     asvt.TestParamCells.push(cAlt2);
            //     asvt.TestParamCells.push(cAltt2);
            //     asvt.TestParamCells.push(cRfl2);
            //     asvt.TestParamCells.push(cFrq2);
            //     asvt.TestParamCells.push(cPwr2);
            //     asvt.TestParamCells.push(cGps2);
            //     asvt.TestParamCells.push(cRflt2);
            //     newTest = asvt;
            // }
            //     break;
            // case 'UAT OUT/UAT Summary': {
            //     var summary = new Test();
            //     summary.Name = "UAT Summary";

            //     var add5 = new TestParam();
            //     add5.Key = "AA ID:";
            //     var cAdd5 = new TestParamCell(add5);
            //     cAdd5.Row = 0;
            //     cAdd5.Column = 0;

            //     summary.TestParamCells.push(cAdd5);

            //     var addQ5 = new TestParam();
            //     addQ5.Key = "Address Qualifier:";
            //     var cAddQ5 = new TestParamCell(addQ5);
            //     cAddQ5.Row = 1;
            //     cAddQ5.Column = 0;

            //     summary.TestParamCells.push(cAddQ5);

            //     var pld5 = new TestParam();
            //     pld5.Key = "Payload Type Codes:";
            //     var cPld5 = new TestParamCell(pld5);
            //     cPld5.Row = 2;
            //     cPld5.Column = 0;

            //     summary.TestParamCells.push(cPld5);

            //     var eqc5 = new TestParam();
            //     eqc5.Key = "Equipage Class:";
            //     var cEqc5 = new TestParamCell(eqc5);
            //     cEqc5.Row = 3;
            //     cEqc5.Column = 0;

            //     summary.TestParamCells.push(cEqc5);

            //     var esd5 = new TestParam();
            //     esd5.Key = "Element Summary Data";
            //     var cEsd5 = new TestParamCell(esd5);
            //     cEsd5.Row = 4;
            //     cEsd5.Column = 0;
            //     cEsd5.ColSpan = 3;
            //     cEsd5.Styles.add("key", "detailheading");

            //     summary.TestParamCells.push(cEsd5);

            //     var latd5 = new TestParam();
            //     latd5.Key = "Latitude:";
            //     var cLatd5 = new TestParamCell(latd5);
            //     cLatd5.Row = 5;
            //     cLatd5.Column = 0;

            //     summary.TestParamCells.push(cLatd5);

            //     var lgd5 = new TestParam();
            //     lgd5.Key = "Longitude:";
            //     var cLgd5 = new TestParamCell(lgd5);
            //     cLgd5.Row = 6;
            //     cLgd5.Column = 0;

            //     summary.TestParamCells.push(cLgd5);

            //     var ags5 = new TestParam();
            //     ags5.Key = "A/G State:";
            //     var cAgs5 = new TestParamCell(ags5);
            //     cAgs5.Row = 7;
            //     cAgs5.Column = 0;

            //     summary.TestParamCells.push(cAgs5);

            //     var dvt5 = new TestParam();
            //     dvt5.Key = "N Vel:";
            //     var cDvt5 = new TestParamCell(dvt5);
            //     cDvt5.Row = 7;
            //     cDvt5.Column = 1;

            //     summary.TestParamCells.push(cDvt5);

            //     var pdvt5 = new TestParam();
            //     pdvt5.Key = "E Vel:";
            //     var cPdvt5 = new TestParamCell(pdvt5);
            //     cPdvt5.Row = 7;
            //     cPdvt5.Column = 2;

            //     summary.TestParamCells.push(cPdvt5);

            //     var msgt5 = new TestParam();
            //     msgt5.Key = "Emit Cat:";
            //     var cMsgt5 = new TestParamCell(msgt5);
            //     cMsgt5.Row = 8;
            //     cMsgt5.Column = 0;

            //     summary.TestParamCells.push(cMsgt5);

            //     var eov5 = new TestParam();
            //     eov5.Key = "ID:";
            //     var cEov5 = new TestParamCell(eov5);
            //     cEov5.Row = 8;
            //     cEov5.Column = 1;

            //     summary.TestParamCells.push(cEov5);

            //     var eoh5 = new TestParam();
            //     eoh5.Key = "Emer:";
            //     var cEoh5 = new TestParamCell(eoh5);
            //     cEoh5.Row = 8;
            //     cEoh5.Column = 2;

            //     summary.TestParamCells.push(cEoh5);

            //     var sil5 = new TestParam();
            //     sil5.Key = "SIL:";
            //     var cSil5 = new TestParamCell(sil5);
            //     cSil5.Row = 9;
            //     cSil5.Column = 0;

            //     summary.TestParamCells.push(cSil5);

            //     var sils5 = new TestParam();
            //     sils5.Key = "SIL-S:";
            //     var cSils5 = new TestParamCell(sils5);
            //     cSils5.Row = 9;
            //     cSils5.Column = 1;

            //     summary.TestParamCells.push(cSils5);

            //     var nacp5 = new TestParam();
            //     nacp5.Key = "NAC-P:";
            //     var cNacp5 = new TestParamCell(nacp5);
            //     cNacp5.Row = 9;
            //     cNacp5.Column = 2;

            //     summary.TestParamCells.push(cNacp5);

            //     var nacv5 = new TestParam();
            //     nacv5.Key = "NAC-V:";
            //     var cNacv5 = new TestParamCell(nacv5);
            //     cNacv5.Row = 10;
            //     cNacv5.Column = 0;

            //     summary.TestParamCells.push(cNacv5);

            //     var nicb5 = new TestParam();
            //     nicb5.Key = "NIC Baro:";
            //     var cNicb5 = new TestParamCell(nicb5);
            //     cNicb5.Row = 10;
            //     cNicb5.Column = 1;

            //     summary.TestParamCells.push(cNicb5);

            //     var uatin5 = new TestParam();
            //     uatin5.Key = "Uat In:";
            //     var cUatin5 = new TestParamCell(uatin5);
            //     cUatin5.Row = 10;
            //     cUatin5.Column = 2;

            //     summary.TestParamCells.push(cUatin5);

            //     var es5 = new TestParam();
            //     es5.Key = "1090ES:";
            //     var cEs5 = new TestParamCell(es5);
            //     cEs5.Row = 11;
            //     cEs5.Column = 0;

            //     summary.TestParamCells.push(cEs5);

            //     var tcas5 = new TestParam();
            //     tcas5.Key = "TCAS:";
            //     var cTcas5 = new TestParamCell(tcas5);
            //     cTcas5.Row = 11;
            //     cTcas5.Column = 1;

            //     summary.TestParamCells.push(cTcas5);

            //     var tcasra5 = new TestParam();
            //     tcasra5.Key = "TCAS RA:";
            //     var cTcasra5 = new TestParamCell(tcasra5);
            //     cTcasra5.Row = 11;
            //     cTcasra5.Column = 2;

            //     summary.TestParamCells.push(cTcasra5);

            //     var idt5 = new TestParam();
            //     idt5.Key = "Ident:";
            //     var cIdt5 = new TestParamCell(idt5);
            //     cIdt5.Row = 12;
            //     cIdt5.Column = 0;

            //     summary.TestParamCells.push(cIdt5);

            //     var atcs5 = new TestParam();
            //     atcs5.Key = "ATC Serv:";
            //     var cAtcs5 = new TestParamCell(atcs5);
            //     cAtcs5.Row = 12;
            //     cAtcs5.Column = 1;

            //     summary.TestParamCells.push(cAtcs5);

            //     var csid5 = new TestParam();
            //     csid5.Key = "CSID:";
            //     var cCsid5 = new TestParamCell(csid5);
            //     cCsid5.Row = 12;
            //     cCsid5.Column = 2;

            //     summary.TestParamCells.push(cCsid5);

            //     var gva5 = new TestParam();
            //     gva5.Key = "GVA:";
            //     var cGva5 = new TestParamCell(gva5);
            //     cGva5.Row = 13;
            //     cGva5.Column = 0;

            //     summary.TestParamCells.push(cGva5);

            //     var ant5 = new TestParam();
            //     ant5.Key = "ANT:";
            //     var cAnt5 = new TestParamCell(ant5);
            //     cAnt5.Row = 13;
            //     cAnt5.Column = 1;

            //     summary.TestParamCells.push(cAnt5);

            //     var fbc5 = new TestParam();
            //     fbc5.Key = "FB Code:";
            //     var cFbc5 = new TestParamCell(fbc5);
            //     cFbc5.Row = 13;
            //     cFbc5.Column = 2;

            //     summary.TestParamCells.push(cFbc5);

            //     var rfl5 = new TestParam();
            //     rfl5.Key = "RF Link";
            //     var cRfl5 = new TestParamCell(rfl5);
            //     cRfl5.Row = 14;
            //     cRfl5.Column = 0;
            //     cRfl5.ColSpan = 3;
            //     cRfl5.Styles.add("key", "detailheading");

            //     summary.TestParamCells.push(cRfl5);

            //     var frq5 = new TestParam();
            //     frq5.Key = "Freq=";
            //     var cFrq5 = new TestParamCell(frq5);
            //     cFrq5.Row = 15;
            //     cFrq5.Column = 0;

            //     summary.TestParamCells.push(cFrq5);

            //     var pwr5 = new TestParam();
            //     pwr5.Key = "Power";
            //     var cPwr5 = new TestParamCell(pwr5);
            //     cPwr5.Row = 15;
            //     cPwr5.Column = 1;

            //     summary.TestParamCells.push(cPwr5);

            //     var gps5 = new TestParam();
            //     gps5.Key = "GPS=";
            //     var cGps5 = new TestParamCell(gps5);
            //     cGps5.Row = 16;
            //     cGps5.Column = 0;

            //     summary.TestParamCells.push(cGps5);

            //     var rflt5 = new TestParam();
            //     rflt5.Key = "RF Link Test=";
            //     var cRflt5 = new TestParamCell(rflt5);
            //     cRflt5.Row = 16;
            //     cRflt5.Column = 1;

            //     summary.TestParamCells.push(cRflt5);

            //     newTest = summary;
            // }
            // break;

            // case 'UAT OUT/UAT Trajectory Change Test': {
            //     var tct = new Test();
            //     tct.Name = "UAT Trajectory Change Test";

            //     var add = new TestParam();
            //     add.Key = "ADDRESS:";
            //     var cAdd = new TestParamCell(add);
            //     cAdd.Row = 0;
            //     cAdd.Column = 0;
            //     cAdd.ColSpan = 2;

            //     tct.TestParamCells.push(cAdd);

            //     var addQ7 = new TestParam();
            //     addQ7.Key = "Qualifier:";
            //     var cAddQ7 = new TestParamCell(addQ7);
            //     cAddQ7.Row = 1;
            //     cAddQ7.Column = 0;
            //     cAddQ7.ColSpan = 2;

            //     tct.TestParamCells.push(cAddQ7);

            //     var pld7 = new TestParam();
            //     pld7.Key = "Payload Rcvd:";
            //     var cPld7 = new TestParamCell(pld7);
            //     cPld7.Row = 2;
            //     cPld7.Column = 0;

            //     tct.TestParamCells.push(cPld7);

            //     var rfle7 = new TestParam();
            //     rfle7.Key = "RF Level:";
            //     var cRfle7 = new TestParamCell(rfle7);
            //     cRfle7.Row = 2;
            //     cRfle7.Column = 1;

            //     tct.TestParamCells.push(cRfle7);

            //     var tce7 = new TestParam();
            //     tce7.Key = "Trajectory Change Element";
            //     var cTce7 = new TestParamCell(tce7);
            //     cTce7.Row = 3;
            //     cTce7.Column = 0;
            //     cTce7.ColSpan = 3;
            //     cTce7.Styles.add("key", "detailheading1");

            //     tct.TestParamCells.push(cTce7);

            //     var tcf7 = new TestParam();
            //     tcf7.Key = "TC Field:";
            //     var cTcf7 = new TestParamCell(tcf7);
            //     cTcf7.Row = 4;
            //     cTcf7.Column = 0;
            //     cTcf7.ColSpan = 2;

            //     tct.TestParamCells.push(cTcf7);
            //     newTest = tct;
            // }
            //     break;
        }

        newTest.Styles.add("key", "detailLabel");
        newTest.Styles.add("value", "detailResult");

        return newTest;
    }
}