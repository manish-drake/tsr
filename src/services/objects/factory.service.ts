import { Injectable } from '@angular/core'
import { Datum } from '../../core/tests/datum'
import { TestSection } from '../../core/tests/testSection'
import { Test } from '../../core/tests/test'
import { TestParam } from '../../core/tests/testParam'
import { TestParamCell } from '../../core/tests/testParamCell'
import { File } from '../io/file.service'

@Injectable()
export class Factory {

    constructor(private file: File) {

    }

    createSection(section: string, parent: string): TestSection {
        var testSection: TestSection = new TestSection();
        switch (section) {
            case 'UAT OUT': {

                testSection.Styles.add("key", "sectionLabel");
                testSection.Styles.add("value", "sectionResult");

                testSection.Name = section;
                //------------------------UAT State Vector Test------------------------
                var svt = new Test();
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
                var asvt = new Test();
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
                var mst = new Test();
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
                var rft = new Test();
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
                var summary = new Test();
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
                var tst = new Test();
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
                var tct = new Test();
                tct.Name = "UAT Trajectory Change Test";

                var add6 = new TestParam();
                add6.Key = "Address:";
                var cAdd6 = new TestParamCell(add6);
                cAdd6.Row = 0;
                cAdd6.Column = 0;

                var addQ6 = new TestParam();
                addQ6.Key = "Addr Qual:";
                var cAddQ6 = new TestParamCell(addQ6);
                cAddQ6.Row = 0;
                cAddQ6.Column = 1;

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


    createTest(test: string, section: string): Test {
        var newTest: Test;
        var id = section + "/" + test
        switch (id) {
            case 'UAT OUT/UAT State Vector Test': {
                var svt = new Test();
                svt.Name = "UAT State Vector Test";

                var add = new TestParam();
                add.Key = "AA ID:";
                var cAdd = new TestParamCell(add);
                cAdd.Row = 0;
                cAdd.Column = 0;

                var addQ = new TestParam();
                addQ.Key = "Address Qualifier:";
                var cAddQ = new TestParamCell(addQ);
                cAddQ.Row = 1;
                cAddQ.Column = 0;

                var pld = new TestParam();
                pld.Key = "Payload Types Codes:";
                var cPld = new TestParamCell(pld);
                cPld.Row = 2;
                cPld.Column = 0;

                var sve = new TestParam();
                sve.Key = "State Vector Element:";
                var cSve = new TestParamCell(sve);
                cSve.Row = 3;
                cSve.Column = 0;

                var ags = new TestParam();
                ags.Key = "Air/Ground State:";
                var cAgs = new TestParamCell(ags);
                cAgs.Row = 4;
                cAgs.Column = 0;

                var ltd = new TestParam();
                ltd.Key = "Latitude:";
                var cLtd = new TestParamCell(ltd);
                cLtd.Row = 5;
                cLtd.Column = 0;

                var lgd = new TestParam();
                lgd.Key = "Longitude:";
                var cLgd = new TestParamCell(lgd);
                cLgd.Row = 6;
                cLgd.Column = 0;

                var nic = new TestParam();
                nic.Key = "NIC:";
                var cNic = new TestParamCell(nic);
                cNic.Row = 7;
                cNic.Column = 0;

                var alt = new TestParam();
                alt.Key = "Altitude:";
                var cAlt = new TestParamCell(alt);
                cAlt.Row = 8;
                cAlt.Column = 0;

                var altt = new TestParam();
                altt.Key = "Altitude Type:";
                var cAltt = new TestParamCell(altt);
                cAltt.Row = 9;
                cAltt.Column = 0;

                var gds = new TestParam();
                gds.Key = "Ground Speed:";
                var cGds = new TestParamCell(gds);
                cGds.Row = 10;
                cGds.Column = 0;

                var hdg = new TestParam();
                hdg.Key = "Heading:";
                var cHdg = new TestParamCell(hdg);
                cHdg.Row = 11;
                cHdg.Column = 0;

                var lto = new TestParam();
                lto.Key = "Lat Offset:";
                var cLto = new TestParamCell(lto);
                cLto.Row = 12;
                cLto.Column = 0;

                var lot = new TestParam();
                lot.Key = "Lon Offset:";
                var cLot = new TestParamCell(lot);
                cLot.Row = 13;
                cLot.Column = 0;

                var fdc = new TestParam();
                fdc.Key = "Feedback Code:";
                var cFdc = new TestParamCell(fdc);
                cFdc.Row = 14;
                cFdc.Column = 0;

                var rfl = new TestParam();
                rfl.Key = "RF Link";
                var cRfl = new TestParamCell(rfl);
                cRfl.Row = 15;
                cRfl.Column = 0;

                var frq = new TestParam();
                frq.Key = "Freq=";
                var cFrq = new TestParamCell(frq);
                cFrq.Row = 16;
                cFrq.Column = 0;

                var pwr = new TestParam();
                pwr.Key = "Power=";
                var cPwr = new TestParamCell(pwr);
                cPwr.Row = 16;
                cPwr.Column = 1;

                var gps = new TestParam();
                gps.Key = "GPS=";
                var cGps = new TestParamCell(gps);
                cGps.Row = 17;
                cGps.Column = 0;

                var rflt = new TestParam();
                rflt.Key = "RF Link Test=";
                var cRflt = new TestParamCell(rflt);
                cRflt.Row = 17;
                cRflt.Column = 1;

                svt.TestParamCells.push(cAdd);
                svt.TestParamCells.push(cAddQ);
                svt.TestParamCells.push(cPld);
                svt.TestParamCells.push(cSve);
                svt.TestParamCells.push(cAgs);
                svt.TestParamCells.push(cLtd);
                svt.TestParamCells.push(cLgd);
                svt.TestParamCells.push(cNic);
                svt.TestParamCells.push(cAlt);
                svt.TestParamCells.push(cAltt);
                svt.TestParamCells.push(cGds);
                svt.TestParamCells.push(cHdg);
                svt.TestParamCells.push(cLto);
                svt.TestParamCells.push(cLot);
                svt.TestParamCells.push(cRfl);
                svt.TestParamCells.push(cFrq);
                svt.TestParamCells.push(cPwr);
                svt.TestParamCells.push(cGps);
                svt.TestParamCells.push(cRflt);

                newTest = svt;
            }
                break;
            case 'UAT OUT/UAT AUX State Vector Test': {
                var asvt = new Test();
                asvt.Name = "UAT AUX State Vector Test";

                var add1 = new TestParam();
                add1.Key = "AA ID:";
                var cAdd1 = new TestParamCell(add1);
                cAdd1.Row = 0;
                cAdd1.Column = 0;

                var addQ1 = new TestParam();
                addQ1.Key = "Address Qualifier:";
                var cAddQ1 = new TestParamCell(addQ1);
                cAddQ1.Row = 1;
                cAddQ1.Column = 0;

                var pld1 = new TestParam();
                pld1.Key = "Payload Type Codes:";
                var cPld1 = new TestParamCell(pld1);
                cPld1.Row = 2;
                cPld1.Column = 0;

                var asve = new TestParam();
                asve.Key = "AUX State Vector Element";
                var cAsve = new TestParamCell(asve);
                cAsve.ColSpan = 4;
                cAsve.Row = 3;
                cAsve.Column = 0;

                var alt = new TestParam();
                alt.Key = "Altitude";
                var cAlt = new TestParamCell(alt);
                cAlt.Row = 4;
                cAlt.Column = 0;

                var altt = new TestParam();
                altt.Key = "Altitude Type:";
                var cAltt = new TestParamCell(altt);
                cAltt.Row = 5;
                cAltt.Column = 0;

                var rfl = new TestParam();
                rfl.Key = "RF Link:";
                var cRfl = new TestParamCell(rfl);
                cRfl.Row = 6;
                cRfl.Column = 0;

                var frq = new TestParam();
                frq.Key = "Freq=";
                var cFrq = new TestParamCell(frq);
                cFrq.Row = 7;
                cFrq.Column = 0;

                var pwr = new TestParam();
                pwr.Key = "Power";
                var cPwr = new TestParamCell(pwr);
                cPwr.Row = 7;
                cPwr.Column = 1;

                var gps = new TestParam();
                gps.Key = "GPS=";
                var cGps = new TestParamCell(gps);
                cGps.Row = 8;
                cGps.Column = 0;

                var rflt = new TestParam();
                rflt.Key = "RF Link=";
                var cRflt = new TestParamCell(rflt);
                cRflt.Row = 8;
                cRflt.Column = 1;

                asvt.TestParamCells.push(cAdd1);
                asvt.TestParamCells.push(cAddQ1);
                asvt.TestParamCells.push(cPld1);
                asvt.TestParamCells.push(cAsve);
                asvt.TestParamCells.push(cAlt);
                asvt.TestParamCells.push(cAltt);
                asvt.TestParamCells.push(cRfl);
                asvt.TestParamCells.push(cFrq);
                asvt.TestParamCells.push(cPwr);
                asvt.TestParamCells.push(cGps);
                asvt.TestParamCells.push(cRflt);
                newTest = asvt;
            }
                break;
            case 'UAT OUT/UAT Mode Status Test': {
                var mst = new Test();
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

                newTest = mst;
            }
                break;
            case 'UAT OUT/UAT RF Link Test': {
                var rft = new Test();
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

                newTest = rft;
            }
                break;
            case 'UAT OUT/UAT Summary': {
                var summary = new Test();
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

                newTest = summary;
            }
                break;
            case 'UAT OUT/UAT Target State Test': {
                var tst = new Test();
                tst.Name = "UAT Target State Test";

                var add = new TestParam();
                add.Key = "AA ID:";
                var cAdd = new TestParamCell(add);
                cAdd.Row = 0;
                cAdd.Column = 0;

                var addQ = new TestParam();
                addQ.Key = "Address Qualifier:";
                var cAddQ = new TestParamCell(addQ);
                cAddQ.Row = 1;
                cAddQ.Column = 0;

                var pld = new TestParam();
                pld.Key = "Payload Type Codes:";
                var cPld = new TestParamCell(pld);
                cPld.Row = 2;
                cPld.Column = 0;

                var tse = new TestParam();
                tse.Key = "Target State Element";
                var cTse = new TestParamCell(tse);
                cTse.Row = 3;
                cTse.Column = 0;

                var sal = new TestParam();
                sal.Key = "Selected Alt Type:";
                var cSal = new TestParamCell(sal);
                cSal.Row = 4;
                cSal.Column = 0;

                var sat = new TestParam();
                sat.Key = "Selected Altitude:";
                var cSat = new TestParamCell(sat);
                cSat.Row = 5;
                cSat.Column = 0;

                var bps = new TestParam();
                bps.Key = "Baro Press Setting:";
                var cBps = new TestParamCell(bps);
                cBps.Row = 6;
                cBps.Column = 0;

                var seh = new TestParam();
                seh.Key = "Selected Heading:";
                var cSeh = new TestParamCell(seh);
                cSeh.Row = 7;
                cSeh.Column = 0;

                var mfms = new TestParam();
                mfms.Key = "MCP/FCU M Status:";
                var cMfms = new TestParamCell(mfms);
                cMfms.Row = 8;
                cMfms.Column = 0;

                var ap = new TestParam();
                ap.Key = "AutoPilot:";
                var cAp = new TestParamCell(ap);
                cAp.Row = 9;
                cAp.Column = 0;

                var vnav = new TestParam();
                vnav.Key = "VNAV:";
                var cVnav = new TestParamCell(vnav);
                cVnav.Row = 10;
                cVnav.Column = 0;

                var alth = new TestParam();
                alth.Key = "Altitude Hold:";
                var cAlth = new TestParamCell(alth);
                cAlth.Row = 11;
                cAlth.Column = 0;

                var appm = new TestParam();
                appm.Key = "Approach Mode:";
                var cAppm = new TestParamCell(appm);
                cAppm.Row = 12;
                cAppm.Column = 0;

                var lnavm = new TestParam();
                lnavm.Key = "LNAV Mode:";
                var cLnavm = new TestParamCell(lnavm);
                cLnavm.Row = 13;
                cLnavm.Column = 0;

                var rfl = new TestParam();
                rfl.Key = "RF Link";
                var cRfl = new TestParamCell(rfl);
                cRfl.Row = 14;
                cRfl.Column = 0;

                var frq = new TestParam();
                frq.Key = "Freq=";
                var cFrq = new TestParamCell(frq);
                cFrq.Row = 15;
                cFrq.Column = 0;

                var pwr = new TestParam();
                pwr.Key = "Power=";
                var cPwr = new TestParamCell(pwr);
                cPwr.Row = 15;
                cPwr.Column = 1;

                var gps = new TestParam();
                gps.Key = "GPS=";
                var cGps = new TestParamCell(gps);
                cGps.Row = 16;
                cGps.Column = 0;

                var rflt = new TestParam();
                rflt.Key = "LNAV Mode=";
                var cRflt = new TestParamCell(rflt);
                cRflt.Row = 16;
                cRflt.Column = 1;

                tst.TestParamCells.push(cAdd);
                tst.TestParamCells.push(cAddQ);
                tst.TestParamCells.push(cPld);
                tst.TestParamCells.push(cTse);
                tst.TestParamCells.push(cSal);
                tst.TestParamCells.push(cSat);
                tst.TestParamCells.push(cBps);
                tst.TestParamCells.push(cSeh);
                tst.TestParamCells.push(cMfms);
                tst.TestParamCells.push(cAp);
                tst.TestParamCells.push(cVnav);
                tst.TestParamCells.push(cAlth);
                tst.TestParamCells.push(cAppm);
                tst.TestParamCells.push(cLnavm);
                tst.TestParamCells.push(cRfl);
                tst.TestParamCells.push(cFrq);
                tst.TestParamCells.push(cPwr);
                tst.TestParamCells.push(cGps);
                tst.TestParamCells.push(cRflt);


                newTest = tst;

            }
                break;
            case 'UAT OUT/UAT Trajectory Change Test': {
                var tct = new Test();
                tct.Name = "UAT Trajectory Change Test";

                var add = new TestParam();
                add.Key = "AA ID:";
                var cAdd = new TestParamCell(add);
                cAdd.Row = 0;
                cAdd.Column = 0;

                tct.TestParamCells.push(cAdd);

                var addQ = new TestParam();
                addQ.Key = "Address Qualifier:";
                var cAddQ = new TestParamCell(addQ);
                cAddQ.Row = 1;
                cAddQ.Column = 0;

                tct.TestParamCells.push(cAddQ);

                var pld = new TestParam();
                pld.Key = "Payload Type Codes:";
                var cPld = new TestParamCell(pld);
                cPld.Row = 2;
                cPld.Column = 0;

                tct.TestParamCells.push(cPld);

                var tce = new TestParam();
                tce.Key = "Trajectory Change Element:";
                var cTce = new TestParamCell(tce);
                cTce.Row = 3;
                cTce.Column = 0;

                tct.TestParamCells.push(cTce);

                var tcf = new TestParam();
                tcf.Key = "TC Field:";
                var cTcf = new TestParamCell(tcf);
                cTcf.Row = 4;
                cTcf.Column = 0;

                tct.TestParamCells.push(cTcf);

                var rfl = new TestParam();
                rfl.Key = "RF Link";
                var cRfl = new TestParamCell(rfl);
                cRfl.Row = 5;
                cRfl.Column = 0;

                tct.TestParamCells.push(cRfl);

                var frq = new TestParam();
                frq.Key = "Freq=";
                var cFrq = new TestParamCell(frq);
                cFrq.Row = 6;
                cFrq.Column = 0;

                tct.TestParamCells.push(cFrq);

                var pwr = new TestParam();
                pwr.Key = "Power=";
                var cPwr = new TestParamCell(pwr);
                cPwr.Row = 6;
                cPwr.Column = 1;

                tct.TestParamCells.push(cPwr);

                var gps = new TestParam();
                gps.Key = "GPS=";
                var cGps = new TestParamCell(gps);
                cGps.Row = 7;
                cGps.Column = 0;

                tct.TestParamCells.push(cGps);

                var rflt = new TestParam();
                rflt.Key = "RF Link Test=";
                var cRflt = new TestParamCell(rflt);
                cRflt.Row = 7;
                cRflt.Column = 1;

                tct.TestParamCells.push(cRflt);

                newTest = tct;
            }
                break;
        }

        newTest.Styles.add("key", "detailLabel");
        newTest.Styles.add("value", "detailResult");

        return newTest;
    }
}