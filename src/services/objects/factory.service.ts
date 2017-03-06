import { Injectable } from '@angular/core';

import { Test } from '../../core/tests/test';
import { TestParam } from '../../core/tests/testParam';
import { TestParamCell } from '../../core/tests/testParamCell';
import { TestGroup } from '../../core/tests/testgroup';

import { LocalStorage } from '../../services/storage/local-storage';

@Injectable()
export class Factory {

    constructor(private _localStorage: LocalStorage) { }

    createTestGroupsData(groupName: string): TestGroup {
        var group: TestGroup = new TestGroup();
        switch (groupName) {
            case 'ADS-B': {
                group.Test = [
                    this.createTestsData("1090 ADS-B OUT"),
                    this.createTestsData("1090 ADS-B IN"),
                    this.createTestsData("UAT ADS-B OUT"),
                    this.createTestsData("UAT ADS-B IN")
                    // this.createTestsData("ADS-B SUMMARY"),
                    // this.createTestsData("ADS-B DATA"),
                    // this.createTestsData("ADS-B TBD")
                ];
                break;
            }
            case 'Start': {
                group.Test = []
                var startItems = this._localStorage.GetItem(this._localStorage.keyForStartItems());
                if (startItems != null) {
                    var favColl = JSON.parse(startItems);
                    favColl.forEach(favItem => {
                        group.Test.push(this.createTestsData(favItem));
                    });
                }
            }
            default: {
                break;
            }
        }
        return group
    }

    createFooterResultStatusData(_case: any): Test {
        var newStatus: any;
        switch (_case) {
            case 'before': {
                var bef = new Test();
                bef.Name = "before"

                var st1 = new TestParam();
                st1.Key = "Status";
                st1.Value = "Stopped";
                var cSt1 = new TestParamCell(st1);
                cSt1.Row = 0;
                cSt1.Column = 0;

                bef.TestParamCells.push(cSt1);

                var ts1 = new TestParam();
                ts1.Key = "Test Set";
                ts1.Value = "TS-001";
                var cTs1 = new TestParamCell(ts1);
                cTs1.Row = 0;
                cTs1.Column = 1;

                bef.TestParamCells.push(cTs1);

                var user1 = new TestParam();
                user1.Key = "User";
                user1.Value = "D. Smith";
                var cUser1 = new TestParamCell(user1);
                cUser1.Row = 0;
                cUser1.Column = 2;

                bef.TestParamCells.push(cUser1);

                var ctn1 = new TestParam();
                ctn1.Key = "Connection";
                ctn1.Value = "Bottom Antenna";
                var cCtn1 = new TestParamCell(ctn1);
                cCtn1.Row = 0;
                cCtn1.Column = 3;

                bef.TestParamCells.push(cCtn1);

                var dst1 = new TestParam();
                dst1.Key = "Distance";
                dst1.Value = "50 Ft";
                var cDst1 = new TestParamCell(dst1);
                cDst1.Row = 0;
                cDst1.Column = 3;

                bef.TestParamCells.push(cDst1);

                var tn1 = new TestParam();
                tn1.Key = "Test Name";
                tn1.Value = "UAT Out";
                var cTn1 = new TestParamCell(tn1);
                cTn1.Row = 0;
                cTn1.Column = 3;

                bef.TestParamCells.push(cTn1);

                var pia1 = new TestParam();
                pia1.Key = "Preset if Any";
                pia1.Value = "None";
                var cPia1 = new TestParamCell(pia1);
                cPia1.Row = 0;
                cPia1.Column = 3;

                bef.TestParamCells.push(cPia1);


                newStatus = bef;
            }
                break;
            case 'running': {
                var rung = new Test();
                rung.Name = "running";

                var st2 = new TestParam();
                st2.Key = "Status";
                st2.Value = "Running";
                var cSt2 = new TestParamCell(st2);
                cSt2.Row = 0;
                cSt2.Column = 0;

                rung.TestParamCells.push(cSt2);

                var dur2 = new TestParam();
                dur2.Key = "Duration";
                dur2.Value = "13s";
                var cDur2 = new TestParamCell(dur2);
                cDur2.Row = 0;
                cDur2.Column = 1;

                rung.TestParamCells.push(cDur2);

                var ctn2 = new TestParam();
                ctn2.Key = "Connection";
                ctn2.Value = "Bottom Antenna";
                var cCtn2 = new TestParamCell(ctn2);
                cCtn2.Row = 0;
                cCtn2.Column = 2;

                rung.TestParamCells.push(cCtn2);

                var dst2 = new TestParam();
                dst2.Key = "Distance";
                dst2.Value = "50 Ft";
                var cDst2 = new TestParamCell(dst2);
                cDst2.Row = 0;
                cDst2.Column = 3;

                rung.TestParamCells.push(cDst2);

                var tn2 = new TestParam();
                tn2.Key = "Test Name";
                tn2.Value = "UAT Out";
                var cTn2 = new TestParamCell(tn2);
                cTn2.Row = 0;
                cTn2.Column = 4;

                rung.TestParamCells.push(cTn2);

                var msg2 = new TestParam();
                msg2.Key = "Message";
                msg2.Value = "State Vector";
                var cMsg2 = new TestParamCell(msg2);
                cMsg2.Row = 0;
                cMsg2.Column = 5;

                rung.TestParamCells.push(cMsg2);

                var dt2 = new TestParam();
                dt2.Key = "Data";
                dt2.Value = "TBD";
                var cDt2 = new TestParamCell(dt2);
                cDt2.Row = 0;
                cDt2.Column = 6;

                rung.TestParamCells.push(cDt2);

                var dt2a = new TestParam();
                dt2a.Key = "Data";
                dt2a.Value = "TBD";
                var cDt2a = new TestParamCell(dt2a);
                cDt2a.Row = 0;
                cDt2a.Column = 7;

                rung.TestParamCells.push(cDt2a);

                var dt3a = new TestParam();
                dt3a.Key = "Data";
                dt3a.Value = "TBD";
                var cDt3a = new TestParamCell(dt3a);
                cDt3a.Row = 0;
                cDt3a.Column = 8;

                rung.TestParamCells.push(cDt3a);

                newStatus = rung;
            }
                break;
            case 'after': {
                var aft = new Test();
                aft.Name = "after";

                var st3 = new TestParam();
                st3.Key = "Status";
                st3.Value = "Stopped,______";
                var cSt3 = new TestParamCell(st3);
                cSt3.Row = 0;
                cSt3.Column = 0;

                aft.TestParamCells.push(cSt3);

                var date3 = new TestParam();
                date3.Key = "Date";
                date3.Value = "3/15/2016";
                var cDate3 = new TestParamCell(date3);
                cDate3.Row = 0;
                cDate3.Column = 1;

                aft.TestParamCells.push(cDate3);

                var time3 = new TestParam();
                time3.Key = "Time";
                time3.Value = "9:15:30";
                var cTime3 = new TestParamCell(time3);
                cTime3.Row = 0;
                cTime3.Column = 2;

                aft.TestParamCells.push(cTime3);

                var ts3 = new TestParam();
                ts3.Key = "Test Set";
                ts3.Value = "TS-001";
                var cTs3 = new TestParamCell(ts3);
                cTs3.Row = 0;
                cTs3.Column = 3;

                aft.TestParamCells.push(cTs3);

                var user3 = new TestParam();
                user3.Key = "User";
                user3.Value = "D.Smith";
                var cUser3 = new TestParamCell(user3);
                cUser3.Row = 0;
                cUser3.Column = 4;

                aft.TestParamCells.push(cUser3);

                var ctn3 = new TestParam();
                ctn3.Key = "Connection";
                ctn3.Value = "Bottom Antenna";
                var cCtn3 = new TestParamCell(ctn3);
                cCtn3.Row = 0;
                cCtn3.Column = 5;

                aft.TestParamCells.push(cCtn3);

                var dist3 = new TestParam();
                dist3.Key = "Distance";
                dist3.Value = "50 Ft";
                var cDist3 = new TestParamCell(dist3);
                cDist3.Row = 0;
                cDist3.Column = 6;

                aft.TestParamCells.push(cDist3);

                var tst3 = new TestParam();
                tst3.Key = "Test Name";
                tst3.Value = "UAT Out";
                var cTst3 = new TestParamCell(tst3);
                cTst3.Row = 0;
                cTst3.Column = 7;

                aft.TestParamCells.push(cTst3);

                var data3 = new TestParam();
                data3.Key = "Data";
                data3.Value = "TBD";
                var cData3 = new TestParamCell(data3);
                cData3.Row = 0;
                cData3.Column = 8;

                aft.TestParamCells.push(cData3);

                newStatus = aft;
            }
                break;
        }
        return newStatus;
    }

    createSelectAvTarget() {
        var favt = new Test();
        favt.Name = "Filter A/V Target";
        return favt;
    }

    CreateAircraftVehicleData() {
        var favt1 = new Test();

        var add = new TestParam();
        add.Key = "ADDRESS";
        add.Value = "______ (_) / ________ (_)";
        var cAdd = new TestParamCell(add);
        cAdd.Row = 0;
        cAdd.Column = 0;
        cAdd.ColSpan = 2;
        cAdd.Styles.add("key", "slabel80");
        cAdd.Styles.add("value", "sresult128");

        favt1.TestParamCells.push(cAdd);

        var ftid = new TestParam();
        ftid.Key = "Flight ID";
        ftid.Value = "______";
        var cFtid = new TestParamCell(ftid);
        cFtid.Row = 1;
        cFtid.Column = 0;
        cFtid.Styles.add("key", "slabel80");
        cFtid.Styles.add("value", "sresult85");

        favt1.TestParamCells.push(cFtid);

        var rfl = new TestParam();
        rfl.Key = "RF Level";
        rfl.Value = "______";
        var cRfl11 = new TestParamCell(rfl);
        cRfl11.Row = 1;
        cRfl11.Column = 1;
        cRfl11.Styles.add("key", "slabel65");
        cRfl11.Styles.add("value", "sresult85");

        favt1.TestParamCells.push(cRfl11);

        var bssr = new TestParam();
        bssr.Key = "BDS Rcvd (DF17)";
        bssr.Value = "_,_ _,_ _,_ _,_ _,_";
        var cBssr = new TestParamCell(bssr);
        cBssr.Row = 2;
        cBssr.Column = 0;
        cBssr.ColSpan = 2;
        cBssr.Styles.add("key", "slabel133");
        cBssr.Styles.add("value", "sresult128");

        favt1.TestParamCells.push(cBssr);

        return favt1;
    }

    createTestsData(test: string): Test {
        var newTest: Test = new Test();
        switch (test) {
            case '1090 ADS-B IN': {
                newTest.Name = test;
                newTest.isGuideAvailable = true;
                // -----------------------1----------------------------
                newTest.Summaries.push(this.createSelectAvTarget());

                //-----------------------2------------------------
                var adbin = new Test();
                adbin.Name = "1090 ADS-B IN";

                newTest.Summaries.push(adbin);
            }
                break;
            case '1090 ADS-B OUT': {
                newTest.Styles.add("key", "label110");
                newTest.Styles.add("value", "result85");
                newTest.Styles.add("unit", "unit35Left");

                newTest.Name = test;
                newTest.isGuideAvailable = true;
                // -----------------------1----------------------------
                newTest.Summaries.push(this.createSelectAvTarget());

                //-----------------------SUMMARY------------------------
                var smry = new Test();
                smry.Name = "SUMMARY";
                smry.Styles.add("value", "result135Right");


                // smry.TestParamCells.concat(this.CreateAircraftVehivleData());

                var avl1 = new TestParam();
                avl1.Key = "Aircraft/Vehicle";
                avl1.Value = "#__";
                var cAvl1 = new TestParamCell(avl1);
                cAvl1.Row = 0;
                cAvl1.Column = 0;
                cAvl1.ColSpan = 2;
                cAvl1.Styles.add("key", "labelAutoBold");
                cAvl1.Styles.add("value", "labelAutoBold");

                smry.TestParamCells.push(cAvl1);

                var add = new TestParam();
                add.Key = "ADDRESS";
                add.Value = "______ (_) / ________ (_)";
                var cAdd = new TestParamCell(add);
                cAdd.Row = 1;
                cAdd.Column = 0;
                cAdd.ColSpan = 2;
                cAdd.Styles.add("key", "label110");
                cAdd.Styles.add("value", "result128");

                smry.TestParamCells.push(cAdd);

                var ftid = new TestParam();
                ftid.Key = "Flight ID";
                ftid.Value = "______";
                var cFtid = new TestParamCell(ftid);
                cFtid.Row = 2;
                cFtid.Column = 0;
                cFtid.Styles.add("key", "label110");
                cFtid.Styles.add("value", "result85");

                smry.TestParamCells.push(cFtid);

                var rfl = new TestParam();
                rfl.Key = "RF Level";
                rfl.Value = "______";
                var cRfl11 = new TestParamCell(rfl);
                cRfl11.Row = 2;
                cRfl11.Column = 1;
                cRfl11.Styles.add("key", "label110");
                cRfl11.Styles.add("value", "result85");

                smry.TestParamCells.push(cRfl11);

                var bssr = new TestParam();
                bssr.Key = "BDS Rcvd (DF17)";
                bssr.Value = "_,_ _,_ _,_ _,_ _,_";
                var cBssr = new TestParamCell(bssr);
                cBssr.Row = 3;
                cBssr.Column = 0;
                cBssr.ColSpan = 2;
                cBssr.Styles.add("key", "label140");
                cBssr.Styles.add("value", "result128");

                smry.TestParamCells.push(cBssr);

                var frre11 = new TestParam();
                frre11.Key = "FAR 91.227 REQUIRED ELEMENTS";
                var cFrre11 = new TestParamCell(frre11);
                cFrre11.Row = 4;
                cFrre11.Column = 0;
                cFrre11.ColSpan = 2;
                cFrre11.Styles.add("key", "label70Bold");
                cFrre11.Styles.add("value", "result0");

                smry.TestParamCells.push(cFrre11);

                var avi11 = new TestParam();
                avi11.Key = "Aircraft/Vehicle Info";
                var cAvi11 = new TestParamCell(avi11);
                cAvi11.Row = 5;
                cAvi11.Column = 0;
                cAvi11.ColSpan = 2;
                cAvi11.Styles.add("key", "labelAutoBold");
                cAvi11.Styles.add("value", "result0");

                smry.TestParamCells.push(cAvi11);

                var fid11 = new TestParam();
                fid11.Key = "Flight ID";
                fid11.Value = "______";
                var cFid11 = new TestParamCell(fid11);
                cFid11.Row = 6;
                cFid11.Column = 0;

                smry.TestParamCells.push(cFid11);

                var madr11 = new TestParam();
                madr11.Key = "Mode S Addr";
                madr11.Value = "______";
                var cMadr11 = new TestParamCell(madr11);
                cMadr11.Row = 6;
                cMadr11.Column = 1;

                smry.TestParamCells.push(cMadr11);

                var ec11 = new TestParam();
                ec11.Key = "Emitter Cat";
                ec11.Value = "__ (______) ";
                var cEc11 = new TestParamCell(ec11);
                cEc11.Row = 7;
                cEc11.Column = 0;

                smry.TestParamCells.push(cEc11);

                var acd11 = new TestParam();
                acd11.Key = "3/A Code";
                acd11.Value = "_____";
                var cAcd11 = new TestParamCell(acd11);
                cAcd11.Row = 7;
                cAcd11.Column = 1;

                smry.TestParamCells.push(cAcd11);

                var ep11 = new TestParam();
                ep11.Key = "Emg/Prty";
                ep11.Value = "_ (________)";
                var cEp11 = new TestParamCell(ep11);
                cEp11.Row = 8;
                cEp11.Column = 0;

                smry.TestParamCells.push(cEp11);

                var lw11 = new TestParam();
                lw11.Key = "L/W";
                lw11.Value = "__ ( __ m / __._m)";
                var cLw11 = new TestParamCell(lw11);
                cLw11.Row = 8;
                cLw11.Column = 1;

                smry.TestParamCells.push(cLw11);

                var lat11 = new TestParam();
                lat11.Key = "Latitude";
                lat11.Value = "__._____°";
                lat11.Unit = "N";
                var cLat11 = new TestParamCell(lat11);
                cLat11.Row = 9;
                cLat11.Column = 0;

                smry.TestParamCells.push(cLat11);

                var altb11 = new TestParam();
                altb11.Key = "Altitude(baro)";
                altb11.Value = "____,_____";
                altb11.Unit = "ft";
                var cAltb11 = new TestParamCell(altb11);
                cAltb11.Row = 9;
                cAltb11.Column = 1;

                smry.TestParamCells.push(cAltb11);

                var lon11 = new TestParam();
                lon11.Key = "Longitude";
                lon11.Value = "____._____°";
                lon11.Unit = "W";
                var cLon11 = new TestParamCell(lon11);
                cLon11.Row = 10;
                cLon11.Column = 0;

                smry.TestParamCells.push(cLon11);

                var altg11 = new TestParam();
                altg11.Key = "Altitude(geom)";
                altg11.Value = "__,___";
                altg11.Unit = "ft";
                var cAltg11 = new TestParamCell(altg11);
                cAltg11.Row = 10;
                cAltg11.Column = 1;

                smry.TestParamCells.push(cAltg11);

                var vt11 = new TestParam();
                vt11.Key = "Velocity";
                vt11.Value = "___";
                vt11.Unit = "kts";
                var cVt11 = new TestParamCell(vt11);
                cVt11.Row = 11;
                cVt11.Column = 0;
                cVt11.ColSpan = 2;

                smry.TestParamCells.push(cVt11);

                var ynd11 = new TestParam();
                ynd11.Key = "YES/NO Discretes";
                var cYnd11 = new TestParamCell(ynd11);
                cYnd11.Row = 12;
                cYnd11.Column = 0;
                cYnd11.ColSpan = 2;
                cYnd11.Styles.add("key", "labelAutoBold");
                cYnd11.Styles.add("value", "result0");

                smry.TestParamCells.push(cYnd11);

                var ui11 = new TestParam();
                ui11.Key = "UAT IN";
                ui11.Value = "_ (_)";
                var cUi11 = new TestParamCell(ui11);
                cUi11.Row = 13;
                cUi11.Column = 0;

                smry.TestParamCells.push(cUi11);

                var to11 = new TestParam();
                to11.Key = "TCAS Op";
                to11.Value = "_ (_)";
                var cTo11 = new TestParamCell(to11);
                cTo11.Row = 13;
                cTo11.Column = 1;

                smry.TestParamCells.push(cTo11);

                var es11 = new TestParam();
                es11.Key = "1090ES IN";
                es11.Value = "_ (_)";
                var cEs11 = new TestParamCell(es11);
                cEs11.Row = 14;
                cEs11.Column = 0;

                smry.TestParamCells.push(cEs11);

                var idt11 = new TestParam();
                idt11.Key = "IDENT";
                idt11.Value = "_ (_)";
                var cIdt11 = new TestParamCell(idt11);
                cIdt11.Row = 14;
                cIdt11.Column = 1;

                smry.TestParamCells.push(cIdt11);

                var tcasra11 = new TestParam();
                tcasra11.Key = "TCAS RA";
                tcasra11.Value = "_ (_)";
                var cTcasra11 = new TestParamCell(tcasra11);
                cTcasra11.Row = 15;
                cTcasra11.Column = 0;
                cTcasra11.ColSpan = 2;

                smry.TestParamCells.push(cTcasra11);

                var ifd11 = new TestParam();
                ifd11.Key = "Integrity Fields";
                var cIfd11 = new TestParamCell(ifd11);
                cIfd11.Row = 16;
                cIfd11.Column = 0;
                cIfd11.ColSpan = 2;
                cIfd11.Styles.add("key", "labelAutoBold");
                cIfd11.Styles.add("value", "result0");

                smry.TestParamCells.push(cIfd11);

                var nacp11 = new TestParam();
                nacp11.Key = "NACp";
                nacp11.Value = "__ (< __nm) ";
                var cNacp11 = new TestParamCell(nacp11);
                cNacp11.Row = 17;
                cNacp11.Column = 0;

                smry.TestParamCells.push(cNacp11);

                var nv11 = new TestParam();
                nv11.Key = "NACv";
                nv11.Value = "__ (< __m/s)";
                var cNv11 = new TestParamCell(nv11);
                cNv11.Row = 17;
                cNv11.Column = 1;

                smry.TestParamCells.push(cNv11);

                var sil11 = new TestParam();
                sil11.Key = "SIL";
                sil11.Value = "__ (< __ -__ )";
                var cSil11 = new TestParamCell(sil11);
                cSil11.Row = 18;
                cSil11.Column = 0;

                smry.TestParamCells.push(cSil11);

                var sda11 = new TestParam();
                sda11.Key = "SDA";
                sda11.Value = "__";
                var cSda11 = new TestParamCell(sda11);
                cSda11.Row = 18;
                cSda11.Column = 1;

                smry.TestParamCells.push(cSda11);

                var gva11 = new TestParam();
                gva11.Key = "GVA";
                gva11.Value = "__ (< ___m)";
                var cGva11 = new TestParamCell(gva11);
                cGva11.Row = 19;
                cGva11.Column = 0;

                smry.TestParamCells.push(cGva11);

                var nic11 = new TestParam();
                nic11.Key = "NIC";
                nic11.Value = "__ (RC< __nmi)";
                var cNic11 = new TestParamCell(nic11);
                cNic11.Row = 19;
                cNic11.Column = 1;

                smry.TestParamCells.push(cNic11);

                newTest.Summaries.push(smry);
                //-----------------------AIRBORN POSITION------------------------
                var apos = new Test();
                apos.Name = "AIRBORN POSITION";
                apos.Styles.add("value", "result135Right");

                var avl1 = new TestParam();
                avl1.Key = "Aircraft/Vehicle";
                avl1.Value = "#__";
                var cAvl1 = new TestParamCell(avl1);
                cAvl1.Row = 0;
                cAvl1.Column = 0;
                cAvl1.ColSpan = 2;
                cAvl1.Styles.add("key", "labelAutoBold");
                cAvl1.Styles.add("value", "labelAutoBold");

                apos.TestParamCells.push(cAvl1);

                var add13 = new TestParam();
                add13.Key = "ADDRESS";
                add13.Value = "______ (_) / ________ (_)";
                var cAdd13 = new TestParamCell(add13);
                cAdd13.Row = 1;
                cAdd13.Column = 0;
                cAdd13.ColSpan = 2;
                cAdd13.Styles.add("key", "label110");
                cAdd13.Styles.add("value", "result128");

                apos.TestParamCells.push(cAdd13);

                var ftid13 = new TestParam();
                ftid13.Key = "Flight ID";
                ftid13.Value = "______";
                var cFtid13 = new TestParamCell(ftid13);
                cFtid13.Row = 2;
                cFtid13.Column = 0;
                cFtid13.Styles.add("key", "label110");
                cFtid13.Styles.add("value", "result85");

                apos.TestParamCells.push(cFtid13);

                var rfl13 = new TestParam();
                rfl13.Key = "RF Level";
                rfl13.Value = "______";
                var cRfl13 = new TestParamCell(rfl13);
                cRfl13.Row = 2;
                cRfl13.Column = 1;
                cRfl13.Styles.add("key", "label110");
                cRfl13.Styles.add("value", "result85");

                apos.TestParamCells.push(cRfl13);

                var bdsr13 = new TestParam();
                bdsr13.Key = "BDS Rcvd (DF17)";
                bdsr13.Value = "_,_ _,_ _,_ _,_ _,_";
                var cBdsr13 = new TestParamCell(bdsr13);
                cBdsr13.Row = 3;
                cBdsr13.Column = 0;
                cBdsr13.ColSpan = 2;
                cBdsr13.Styles.add("key", "label140");
                cBdsr13.Styles.add("value", "result128");

                apos.TestParamCells.push(cBdsr13);

                var bds13 = new TestParam();
                bds13.Key = "BDS 0,5";
                bds13.Value = "Airborne Position";
                var cBds13 = new TestParamCell(bds13);
                cBds13.Row = 4;
                cBds13.Column = 0;
                cBds13.Styles.add("key", "label70Bold");
                cBds13.Styles.add("value", "label70Bold");

                apos.TestParamCells.push(cBds13);

                var prd13 = new TestParam();
                prd13.Key = "Period";
                prd13.Value = "____";
                prd13.Unit = "ms";
                var cPrd13 = new TestParamCell(prd13);
                cPrd13.Row = 4;
                cPrd13.Column = 1;
                cPrd13.Styles.add("key", "label60");
                cPrd13.Styles.add("value", "result60Right");

                apos.TestParamCells.push(cPrd13);

                var me13 = new TestParam();
                me13.Key = "Message Element";
                me13.Value = "__ __ __ __ __ __ __";
                var cMe13 = new TestParamCell(me13);
                cMe13.Row = 5;
                cMe13.Column = 0;
                cMe13.ColSpan = 2;
                cMe13.Styles.add("key", "label133Bold");
                cMe13.Styles.add("value", "label133Bold");

                apos.TestParamCells.push(cMe13);

                var pos13 = new TestParam();
                pos13.Key = "Postion";
                var cPos13 = new TestParamCell(pos13);
                cPos13.Row = 6;
                cPos13.Column = 0;
                cPos13.ColSpan = 2;
                cPos13.Styles.add("key", "labelAutoBold");
                cPos13.Styles.add("value", "result0");

                apos.TestParamCells.push(cPos13);

                var lat13 = new TestParam();
                lat13.Key = "Latitude";
                lat13.Value = "__⁰ __ __.___";
                lat13.Unit = "N";
                var cLat13 = new TestParamCell(lat13);
                cLat13.Row = 7;
                cLat13.Column = 0;
                cLat13.ColSpan = 2;
                cLat13.Styles.add("key", "label140");

                apos.TestParamCells.push(cLat13);

                var lon13 = new TestParam();
                lon13.Key = "Longitude";
                lon13.Value = "____⁰ __ __.___";
                lon13.Unit = "W";
                var cLon13 = new TestParamCell(lon13);
                cLon13.Row = 8;
                cLon13.Column = 0;
                cLon13.ColSpan = 2;
                cLon13.Styles.add("key", "label140");

                apos.TestParamCells.push(cLon13);

                var altb13 = new TestParam();
                altb13.Key = "Altitude (baro)";
                altb13.Value = "____,_____";
                altb13.Unit = "ft";
                var cAltb13 = new TestParamCell(altb13);
                cAltb13.Row = 9;
                cAltb13.Column = 0;
                cAltb13.ColSpan = 2;
                cAltb13.Styles.add("key", "label140");

                apos.TestParamCells.push(cAltb13);

                var of13 = new TestParam();
                of13.Key = "Other Fields";
                var cOf13 = new TestParamCell(of13);
                cOf13.Row = 10;
                cOf13.Column = 0;
                cOf13.ColSpan = 2;
                cOf13.Styles.add("key", "labelAutoBold");
                cOf13.Styles.add("value", "result0");

                apos.TestParamCells.push(cOf13);

                var ss13 = new TestParam();
                ss13.Key = "Surveillance Status";
                ss13.Value = "__ (____)";
                var cSs13 = new TestParamCell(ss13);
                cSs13.Row = 11;
                cSs13.Column = 0;
                cSs13.ColSpan = 2;
                cSs13.Styles.add("key", "label140");
                // cSs13.Styles.add("value", "result85");

                apos.TestParamCells.push(cSs13);

                var nicsb13 = new TestParam();
                nicsb13.Key = "NIC-SB";
                nicsb13.Value = "__";
                var cNicsb13 = new TestParamCell(nicsb13);
                cNicsb13.Row = 12;
                cNicsb13.Column = 0;
                cNicsb13.ColSpan = 2;
                cNicsb13.Styles.add("key", "label140");
                // cNicsb13.Styles.add("value", "result85");

                apos.TestParamCells.push(cNicsb13);

                var cprf13 = new TestParam();
                cprf13.Key = "CPR Format";
                cprf13.Value = "__ (____)";
                var cCprf13 = new TestParamCell(cprf13);
                cCprf13.Row = 13;
                cCprf13.Column = 0;
                cCprf13.ColSpan = 2;
                cCprf13.Styles.add("key", "label140");
                // cCprf13.Styles.add("value", "result85");

                apos.TestParamCells.push(cCprf13);

                var uttcs13 = new TestParam();
                uttcs13.Key = "UTC Sync";
                uttcs13.Value = "__ (_______)";
                var cUttcs13 = new TestParamCell(uttcs13);
                cUttcs13.Row = 14;
                cUttcs13.Column = 0;
                cUttcs13.ColSpan = 2;
                cUttcs13.Styles.add("key", "label140");
                // cUttcs13.Styles.add("value", "result85");

                apos.TestParamCells.push(cUttcs13);

                newTest.Summaries.push(apos);
                //-----------------------AC ID------------------------
                var acid = new Test();
                acid.Name = "AC ID";
                acid.Styles.add("value", "result135Right");

                var avl1 = new TestParam();
                avl1.Key = "Aircraft/Vehicle";
                avl1.Value = "#__";
                var cAvl1 = new TestParamCell(avl1);
                cAvl1.Row = 0;
                cAvl1.Column = 0;
                cAvl1.ColSpan = 2;
                cAvl1.Styles.add("key", "labelAutoBold");
                cAvl1.Styles.add("value", "labelAutoBold");

                acid.TestParamCells.push(cAvl1);

                var add14 = new TestParam();
                add14.Key = "ADDRESS";
                add14.Value = "______ (_) / ________ (_)";
                var cAdd14 = new TestParamCell(add14);
                cAdd14.Row = 1;
                cAdd14.Column = 0;
                cAdd14.ColSpan = 2;
                cAdd14.Styles.add("value", "result128");

                acid.TestParamCells.push(cAdd14);

                var ftid14 = new TestParam();
                ftid14.Key = "Flight ID";
                ftid14.Value = "______";
                var cFtid14 = new TestParamCell(ftid14);
                cFtid14.Row = 2;
                cFtid14.Column = 0;
                cFtid14.Styles.add("value", "result85");

                acid.TestParamCells.push(cFtid14);

                var rfl14 = new TestParam();
                rfl14.Key = "RF Level";
                rfl14.Value = "______";
                var cRfl14 = new TestParamCell(rfl14);
                cRfl14.Row = 2;
                cRfl14.Column = 1;
                cRfl14.Styles.add("value", "result85");

                acid.TestParamCells.push(cRfl14);

                var bdsr14 = new TestParam();
                bdsr14.Key = "BDS Rcvd (DF17)";
                bdsr14.Value = "_,_ _,_ _,_ _,_ _,_";
                var cBdsr14 = new TestParamCell(bdsr14);
                cBdsr14.Row = 3;
                cBdsr14.Column = 0;
                cBdsr14.ColSpan = 2;
                cBdsr14.Styles.add("key", "label140");
                cBdsr14.Styles.add("value", "result128");

                acid.TestParamCells.push(cBdsr14);

                var bds14 = new TestParam();
                bds14.Key = "BDS 0,8";
                bds14.Value = "A/C ID & Category";
                var cBds14 = new TestParamCell(bds14);
                cBds14.Row = 4;
                cBds14.Column = 0;
                cBds14.Styles.add("key", "label70Bold");
                cBds14.Styles.add("value", "label70Bold");

                acid.TestParamCells.push(cBds14);

                var prd14 = new TestParam();
                prd14.Key = "Period";
                prd14.Value = "__.__";
                prd14.Unit = "sec";
                var cPrd14 = new TestParamCell(prd14);
                cPrd14.Row = 4;
                cPrd14.Column = 1;
                cPrd14.Styles.add("key", "label60");
                cPrd14.Styles.add("value", "result60Right");

                acid.TestParamCells.push(cPrd14);

                var me14 = new TestParam();
                me14.Key = "Message Element";
                me14.Value = "__ __ __ __ __ __ __";
                var cMe14 = new TestParamCell(me14);
                cMe14.Row = 5;
                cMe14.Column = 0;
                cMe14.ColSpan = 2;
                cMe14.Styles.add("key", "label133Bold");
                cMe14.Styles.add("value", "label133Bold");

                acid.TestParamCells.push(cMe14);

                var avi14 = new TestParam();
                avi14.Key = "Aircraft/Vehicle Info";
                var cAvi14 = new TestParamCell(avi14);
                cAvi14.Row = 6;
                cAvi14.Column = 0;
                cAvi14.ColSpan = 2;
                cAvi14.Styles.add("key", "labelAutoBold");
                cAvi14.Styles.add("value", "result0");

                acid.TestParamCells.push(cAvi14);

                var aid14 = new TestParam();
                aid14.Key = "Aircraft ID";
                aid14.Value = "______";
                var cAid14 = new TestParamCell(aid14);
                cAid14.Row = 7;
                cAid14.Column = 0;
                cAid14.ColSpan = 2;
                cAid14.Styles.add("value", "result90Left");

                acid.TestParamCells.push(cAid14);

                var ec14 = new TestParam();
                ec14.Key = "Emitter Cat";
                ec14.Value = "_ (_____)";
                var cEc14 = new TestParamCell(ec14);
                cEc14.Row = 8;
                cEc14.Column = 0;
                cEc14.ColSpan = 2;
                cEc14.Styles.add("value", "result90Left");

                acid.TestParamCells.push(cEc14);

                newTest.Summaries.push(acid);
                //-----------------------VELOCITY------------------------
                var vcty = new Test();
                vcty.Name = "VELOCITY";
                vcty.Styles.add("value", "result135Right");

                var avl1 = new TestParam();
                avl1.Key = "Aircraft/Vehicle";
                avl1.Value = "#__";
                var cAvl1 = new TestParamCell(avl1);
                cAvl1.Row = 0;
                cAvl1.Column = 0;
                cAvl1.ColSpan = 2;
                cAvl1.Styles.add("key", "labelAutoBold");
                cAvl1.Styles.add("value", "labelAutoBold");

                vcty.TestParamCells.push(cAvl1);

                var add15 = new TestParam();
                add15.Key = "ADDRESS";
                add15.Value = "______ (_) / ________ (_)";
                var cAdd15 = new TestParamCell(add15);
                cAdd15.Row = 1;
                cAdd15.Column = 0;
                cAdd15.ColSpan = 2;
                cAdd15.Styles.add("value", "result128");

                vcty.TestParamCells.push(cAdd15);

                var ftid15 = new TestParam();
                ftid15.Key = "Flight ID";
                ftid15.Value = "______";
                var cFtid15 = new TestParamCell(ftid15);
                cFtid15.Row = 2;
                cFtid15.Column = 0;
                cFtid15.Styles.add("value", "result85");

                vcty.TestParamCells.push(cFtid15);

                var rfl15 = new TestParam();
                rfl15.Key = "RF Level";
                rfl15.Value = "______";
                var cRfl15 = new TestParamCell(rfl15);
                cRfl15.Row = 2;
                cRfl15.Column = 1;
                cRfl15.Styles.add("value", "result85");

                vcty.TestParamCells.push(cRfl15);

                var bdsr15 = new TestParam();
                bdsr15.Key = "BDS Rcvd (DF17)";
                bdsr15.Value = "_,_ _,_ _,_ _,_ _,_";
                var cBdsr15 = new TestParamCell(bdsr15);
                cBdsr15.Row = 3;
                cBdsr15.Column = 0;
                cBdsr15.ColSpan = 2;
                cBdsr15.Styles.add("key", "label140");
                cBdsr15.Styles.add("value", "result128");

                vcty.TestParamCells.push(cBdsr15);

                var bds15 = new TestParam();
                bds15.Key = "BDS 0,9";
                bds15.Value = "Airborne Velocity";
                var cBds15 = new TestParamCell(bds15);
                cBds15.Row = 4;
                cBds15.Column = 0;
                cBds15.Styles.add("key", "label70Bold");
                cBds15.Styles.add("value", "label70Bold");

                vcty.TestParamCells.push(cBds15);

                var prd15 = new TestParam();
                prd15.Key = "Period";
                prd15.Value = "___";
                prd15.Unit = "ms";
                var cPrd15 = new TestParamCell(prd15);
                cPrd15.Row = 4;
                cPrd15.Column = 1;
                cPrd15.Styles.add("key", "label60");
                cPrd15.Styles.add("value", "result60Right");

                vcty.TestParamCells.push(cPrd15);

                var me15 = new TestParam();
                me15.Key = "Message Element";
                me15.Value = "__ __ __ __ __ __ __";
                var cMe15 = new TestParamCell(me15);
                cMe15.Row = 5;
                cMe15.Column = 0;
                cMe15.ColSpan = 2;
                cMe15.Styles.add("key", "label133Bold");
                cMe15.Styles.add("value", "label133Bold");

                vcty.TestParamCells.push(cMe15);

                var fd15 = new TestParam();
                fd15.Key = "Flight Data";
                var cFd15 = new TestParamCell(fd15);
                cFd15.Row = 6;
                cFd15.Column = 0;
                cFd15.ColSpan = 2;
                cFd15.Styles.add("key", "labelAutoBold");
                cFd15.Styles.add("value", "result0");

                vcty.TestParamCells.push(cFd15);

                var hdg15 = new TestParam();
                hdg15.Key = "Heading";
                hdg15.Value = "______";
                var cHdg15 = new TestParamCell(hdg15);
                cHdg15.Row = 7;
                cHdg15.Column = 0;
                cHdg15.ColSpan = 2;
                // cHdg15.Styles.add("key", "label140");
                // cHdg15.Styles.add("value", "result85");

                vcty.TestParamCells.push(cHdg15);

                var asd15 = new TestParam();
                asd15.Key = "Airspeed";
                asd15.Value = "__ (______)";
                var cAsd15 = new TestParamCell(asd15);
                cAsd15.Row = 8;
                cAsd15.Column = 0;
                cAsd15.ColSpan = 2;
                // cAsd15.Styles.add("key", "label140");
                // cAsd15.Styles.add("value", "result85");

                vcty.TestParamCells.push(cAsd15);

                var vr15 = new TestParam();
                vr15.Key = "Vertical Rate";
                vr15.Value = "______";
                vr15.Unit = "fpm";
                var cVr15 = new TestParamCell(vr15);
                cVr15.Row = 9;
                cVr15.Column = 0;
                cVr15.ColSpan = 2;
                // cVr15.Styles.add("key", "label140");
                // cVr15.Styles.add("value", "result85");

                vcty.TestParamCells.push(cVr15);

                var gbalt15 = new TestParam();
                gbalt15.Key = "Geom/Baro Alt";
                gbalt15.Value = "_____";
                gbalt15.Unit = "ft";
                var cGbalt15 = new TestParamCell(gbalt15);
                cGbalt15.Row = 10;
                cGbalt15.Column = 0;
                cGbalt15.ColSpan = 2;
                // cGbalt15.Styles.add("key", "label140");
                // cGbalt15.Styles.add("value", "result85");

                vcty.TestParamCells.push(cGbalt15);

                var of15 = new TestParam();
                of15.Key = "Other Fields";
                var cOf15 = new TestParamCell(of15);
                cOf15.Row = 11;
                cOf15.Column = 0;
                cOf15.ColSpan = 2;
                cOf15.Styles.add("key", "labelAutoBold");
                cOf15.Styles.add("value", "result0");

                vcty.TestParamCells.push(cOf15);

                var icf15 = new TestParam();
                icf15.Key = "ICF";
                icf15.Value = "_ (______)";
                var cIcf15 = new TestParamCell(icf15);
                cIcf15.Row = 12;
                cIcf15.Column = 0;
                // cIcf15.Styles.add("key", "label140");
                // cIcf15.Styles.add("value", "result85");

                vcty.TestParamCells.push(cIcf15);

                var at15 = new TestParam();
                at15.Key = "Airspd Type";
                at15.Value = "__ (___)";
                var cAt15 = new TestParamCell(at15);
                cAt15.Row = 12;
                cAt15.Column = 1;
                // cAt15.Styles.add("value", "result85");

                vcty.TestParamCells.push(cAt15);

                var nacv15 = new TestParam();
                nacv15.Key = "NACv";
                nacv15.Value = "__ (< __ m/s) ";
                var cNacv15 = new TestParamCell(nacv15);
                cNacv15.Row = 13;
                cNacv15.Column = 0;
                // cNacv15.Styles.add("key", "label140");
                // cNacv15.Styles.add("value", "result85");

                vcty.TestParamCells.push(cNacv15);

                var vrs15 = new TestParam();
                vrs15.Key = "Vert Rate Src";
                vrs15.Value = "_ (_____)";
                var cVrs15 = new TestParamCell(vrs15);
                cVrs15.Row = 13;
                cVrs15.Column = 1;
                // cVrs15.Styles.add("value", "result85");

                vcty.TestParamCells.push(cVrs15);

                var hss15 = new TestParam();
                hss15.Key = "Hdg Sts";
                hss15.Value = "_ (_____)";
                var cHss15 = new TestParamCell(hss15);
                cHss15.Row = 14;
                cHss15.Column = 0;
                cHss15.ColSpan = 2;
                // cHss15.Styles.add("key", "label140");
                // cHss15.Styles.add("value", "result85");

                vcty.TestParamCells.push(cHss15);

                newTest.Summaries.push(vcty);
                //-----------------------OP STATUS------------------------
                var opsts = new Test();
                opsts.Name = "OP STATUS";
                opsts.Styles.add("value", "result90Left");

                var avl16 = new TestParam();
                avl16.Key = "Aircraft/Vehicle";
                avl16.Value = "#__";
                var cAvl16 = new TestParamCell(avl16);
                cAvl16.Row = 0;
                cAvl16.Column = 0;
                cAvl16.ColSpan = 2;
                cAvl16.Styles.add("key", "labelAutoBold");
                cAvl16.Styles.add("value", "labelAutoBold");

                opsts.TestParamCells.push(cAvl16);

                var add16 = new TestParam();
                add16.Key = "ADDRESS";
                add16.Value = "______ (_) / ________ (_)";
                var cAdd16 = new TestParamCell(add16);
                cAdd16.Row = 1;
                cAdd16.Column = 0;
                cAdd16.ColSpan = 2;
                cAdd16.Styles.add("key", "label110");
                cAdd16.Styles.add("value", "result128");

                opsts.TestParamCells.push(cAdd16);

                var ftid16 = new TestParam();
                ftid16.Key = "Flight ID";
                ftid16.Value = "______";
                var cFtid16 = new TestParamCell(ftid16);
                cFtid16.Row = 2;
                cFtid16.Column = 0;
                cFtid16.Styles.add("key", "label110");
                cFtid16.Styles.add("value", "result85");

                opsts.TestParamCells.push(cFtid16);

                var rfl16 = new TestParam();
                rfl16.Key = "RF Level";
                rfl16.Value = "______";
                var cRfl16 = new TestParamCell(rfl16);
                cRfl16.Row = 2;
                cRfl16.Column = 1;
                cRfl16.Styles.add("key", "label110");
                cRfl16.Styles.add("value", "result85");

                opsts.TestParamCells.push(cRfl16);

                var bdsr16 = new TestParam();
                bdsr16.Key = "BDS Rcvd (DF17)";
                bdsr16.Value = "_,_ _,_ _,_ _,_ _,_";
                var cBdsr16 = new TestParamCell(bdsr16);
                cBdsr16.Row = 3;
                cBdsr16.Column = 0;
                cBdsr16.ColSpan = 2;
                cBdsr16.Styles.add("key", "label140");
                cBdsr16.Styles.add("value", "result128");

                opsts.TestParamCells.push(cBdsr16);

                var bds16 = new TestParam();
                bds16.Key = "BDS 6,5";
                bds16.Value = "Operational Status";
                var cBds16 = new TestParamCell(bds16);
                cBds16.Row = 4;
                cBds16.Column = 0;
                cBds16.Styles.add("key", "label70Bold");
                cBds16.Styles.add("value", "label70Bold");

                opsts.TestParamCells.push(cBds16);

                var prd16 = new TestParam();
                prd16.Key = "Period";
                prd16.Value = "__.__";
                prd16.Unit = "sec";
                var cPrd16 = new TestParamCell(prd16);
                cPrd16.Row = 4;
                cPrd16.Column = 1;
                cPrd16.Styles.add("key", "label60");
                cPrd16.Styles.add("value", "result60Right");

                opsts.TestParamCells.push(cPrd16);

                var me16 = new TestParam();
                me16.Key = "Message Element";
                me16.Value = "__ __ __ __ __ __ __";
                var cMe16 = new TestParamCell(me16);
                cMe16.Row = 5;
                cMe16.Column = 0;
                cMe16.ColSpan = 2;
                cMe16.Styles.add("key", "label133Bold");
                cMe16.Styles.add("value", "label133Bold");

                opsts.TestParamCells.push(cMe16);

                var id16 = new TestParam();
                id16.Key = "Intergrity Data";
                var cId16 = new TestParamCell(id16);
                cId16.Row = 6;
                cId16.Column = 0;
                cId16.ColSpan = 2;
                cId16.Styles.add("key", "labelAutoBold");
                cId16.Styles.add("value", "result0");

                opsts.TestParamCells.push(cId16);

                var navp16 = new TestParam();
                navp16.Key = "NACp";
                navp16.Value = "__ (<.__ nm) ";
                var cNacp16 = new TestParamCell(navp16);
                cNacp16.Row = 7;
                cNacp16.Column = 0;
                // cNacp16.Styles.add("value", "result90Left")

                opsts.TestParamCells.push(cNacp16);

                var cnicsa16 = new TestParam();
                cnicsa16.Key = "NIC-supA";
                cnicsa16.Value = "__";
                var cCnicsa16 = new TestParamCell(cnicsa16);
                cCnicsa16.Row = 7;
                cCnicsa16.Column = 1;

                opsts.TestParamCells.push(cCnicsa16);

                var sda16 = new TestParam();
                sda16.Key = "SDA";
                sda16.Value = "__";
                var cSda16 = new TestParamCell(sda16);
                cSda16.Row = 8;
                cSda16.Column = 0;
                // cSda16.Styles.add("value", "result90Left")

                opsts.TestParamCells.push(cSda16);

                var gva16 = new TestParam();
                gva16.Key = "GVA";
                gva16.Value = "_ (<__ m)";
                var cGva16 = new TestParamCell(gva16);
                cGva16.Row = 8;
                cGva16.Column = 1;

                opsts.TestParamCells.push(cGva16);

                var sil16 = new TestParam();
                sil16.Key = "SIL";
                sil16.Value = "_ (___)";
                var cSil16 = new TestParamCell(sil16);
                cSil16.Row = 9;
                cSil16.Column = 0;
                // cSil16.Styles.add("value", "result90Left")

                opsts.TestParamCells.push(cSil16);

                var silsup16 = new TestParam();
                silsup16.Key = "SILsup";
                silsup16.Value = "__";
                var csilsup16 = new TestParamCell(silsup16);
                csilsup16.Row = 9;
                csilsup16.Column = 1;

                opsts.TestParamCells.push(csilsup16);

                var cs16 = new TestParam();
                cs16.Key = "Capability/Status";
                var cCs16 = new TestParamCell(cs16);
                cCs16.Row = 10;
                cCs16.Column = 0;
                cCs16.ColSpan = 2;
                cCs16.Styles.add("key", "labelAutoBold");
                cCs16.Styles.add("value", "result0");

                opsts.TestParamCells.push(cCs16);

                var acc16 = new TestParam();
                acc16.Key = "Airb Cap. Class";
                acc16.Value = "___";
                var cAcc16 = new TestParamCell(acc16);
                cAcc16.Row = 11;
                cAcc16.Column = 0;
                cAcc16.Styles.add("key", "label140");

                opsts.TestParamCells.push(cAcc16);

                var om16 = new TestParam();
                om16.Key = "Op. Mode (OM)";
                om16.Value = "__";
                var cOm16 = new TestParamCell(om16);
                cOm16.Row = 11;
                cOm16.Column = 1;
                cOm16.Styles.add("key", "label140");

                opsts.TestParamCells.push(cOm16);

                var ant16 = new TestParam();
                ant16.Key = "Antenna";
                ant16.Value = "__ (___)";
                var cAnt16 = new TestParamCell(ant16);
                cAnt16.Row = 12;
                cAnt16.Column = 0;
                cAnt16.Styles.add("key", "label140");

                opsts.TestParamCells.push(cAnt16);

                var tsr16 = new TestParam();
                tsr16.Key = "Target State Rpt";
                tsr16.Value = "__ (____)";
                var cTsr16 = new TestParamCell(tsr16);
                cTsr16.Row = 12;
                cTsr16.Column = 1;
                cTsr16.Styles.add("key", "label140");

                opsts.TestParamCells.push(cTsr16);

                var tcaso16 = new TestParam();
                tcaso16.Key = "TCAS Oper";
                tcaso16.Value = "__ (____)";
                var cTcaso16 = new TestParamCell(tcaso16);
                cTcaso16.Row = 13;
                cTcaso16.Column = 0;
                cTcaso16.Styles.add("key", "label140");

                opsts.TestParamCells.push(cTcaso16);

                var tcasra16 = new TestParam();
                tcasra16.Key = "TCAS RA";
                tcasra16.Value = "__ (____)";
                var cTcasra16 = new TestParamCell(tcasra16);
                cTcasra16.Row = 13;
                cTcasra16.Column = 1;
                cTcasra16.Styles.add("key", "label140");

                opsts.TestParamCells.push(cTcasra16);

                var esin16 = new TestParam();
                esin16.Key = "1090ES-IN";
                esin16.Value = "__ (____)";
                var cEsin16 = new TestParamCell(esin16);
                cEsin16.Row = 14;
                cEsin16.Column = 0;
                cEsin16.Styles.add("key", "label140");

                opsts.TestParamCells.push(cEsin16);

                var utin16 = new TestParam();
                utin16.Key = "UAT-IN";
                utin16.Value = "__ (____)";
                var cUtin16 = new TestParamCell(utin16);
                cUtin16.Row = 14;
                cUtin16.Column = 1;
                cUtin16.Styles.add("key", "label140");

                opsts.TestParamCells.push(cUtin16);

                var atc16 = new TestParam();
                atc16.Key = "ATC";
                atc16.Value = "__ (____)";
                var cAtc16 = new TestParamCell(atc16);
                cAtc16.Row = 15;
                cAtc16.Column = 0;
                cAtc16.Styles.add("key", "label140");

                opsts.TestParamCells.push(cAtc16);

                var idt16 = new TestParam();
                idt16.Key = "IDENT";
                idt16.Value = "__ (____)";
                var cIdt16 = new TestParamCell(idt16);
                cIdt16.Row = 15;
                cIdt16.Column = 1;
                cIdt16.Styles.add("key", "label140");

                opsts.TestParamCells.push(cIdt16);

                var ofd16 = new TestParam();
                ofd16.Key = "Other Fields";
                var cOfd16 = new TestParamCell(ofd16);
                cOfd16.Row = 16;
                cOfd16.Column = 0;
                cOfd16.ColSpan = 2;
                cOfd16.Styles.add("key", "labelAutoBold");
                cOfd16.Styles.add("value", "result0");

                opsts.TestParamCells.push(cOfd16);

                var vrs16 = new TestParam();
                vrs16.Key = "Version";
                vrs16.Value = "__ (_____)";
                var cVrs16 = new TestParamCell(vrs16);
                cVrs16.Row = 17;
                cVrs16.Column = 0;

                opsts.TestParamCells.push(cVrs16);

                var tc16 = new TestParam();
                tc16.Key = "Traj Chg (TC)";
                tc16.Value = "__ (____)";
                var cTc16 = new TestParamCell(tc16);
                cTc16.Row = 17;
                cTc16.Column = 1;

                opsts.TestParamCells.push(cTc16);

                var arvc16 = new TestParam();
                arvc16.Key = "ARV capable";
                arvc16.Value = "__ (____)";
                var cArvc16 = new TestParamCell(arvc16);
                cArvc16.Row = 18;
                cArvc16.Column = 0;

                opsts.TestParamCells.push(cArvc16);

                var arf16 = new TestParam();
                arf16.Key = "ADS-R Flag";
                arf16.Value = "__";
                var cArf16 = new TestParamCell(arf16);
                cArf16.Row = 18;
                cArf16.Column = 1;

                opsts.TestParamCells.push(cArf16);

                var hrd16 = new TestParam();
                hrd16.Key = "Hrz Ref Dir";
                hrd16.Value = "__ (___ _)";
                var cHrd16 = new TestParamCell(hrd16);
                cHrd16.Row = 19;
                cHrd16.Column = 0;
                cHrd16.ColSpan = 2;

                opsts.TestParamCells.push(cHrd16);

                newTest.Summaries.push(opsts);
                //-----------------------TARGET STATE------------------------
                var ts = new Test();
                ts.Name = "TARGET STATE";
                ts.Styles.add("value", "result135");

                var avl17 = new TestParam();
                avl17.Key = "Aircraft/Vehicle";
                avl17.Value = "#__";
                var cAvl17 = new TestParamCell(avl17);
                cAvl17.Row = 0;
                cAvl17.Column = 0;
                cAvl17.ColSpan = 2;
                cAvl17.Styles.add("key", "labelAutoBold");
                cAvl17.Styles.add("value", "labelAutoBold");

                ts.TestParamCells.push(cAvl17);

                var add17 = new TestParam();
                add17.Key = "ADDRESS";
                add17.Value = "______ (_) / ________ (_)";
                var cAdd17 = new TestParamCell(add17);
                cAdd17.Row = 1;
                cAdd17.Column = 0;
                cAdd17.ColSpan = 2;
                cAdd17.Styles.add("key", "label110");
                cAdd17.Styles.add("value", "result128");

                ts.TestParamCells.push(cAdd17);

                var ftid17 = new TestParam();
                ftid17.Key = "Flight ID";
                ftid17.Value = "______";
                var cFtid17 = new TestParamCell(ftid17);
                cFtid17.Row = 2;
                cFtid17.Column = 0;
                cFtid17.Styles.add("key", "label110");
                cFtid17.Styles.add("value", "result85");

                ts.TestParamCells.push(cFtid17);

                var rfl17 = new TestParam();
                rfl17.Key = "RF Level";
                rfl17.Value = "______";
                var cRfl17 = new TestParamCell(rfl17);
                cRfl17.Row = 2;
                cRfl17.Column = 1;
                cRfl17.Styles.add("key", "label110");
                cRfl17.Styles.add("value", "result85");

                ts.TestParamCells.push(cRfl17);

                var bdsr17 = new TestParam();
                bdsr17.Key = "BDS Rcvd (DF17)";
                bdsr17.Value = "_,_ _,_ _,_ _,_ _,_";
                var cBdsr17 = new TestParamCell(bdsr17);
                cBdsr17.Row = 3;
                cBdsr17.Column = 0;
                cBdsr17.ColSpan = 2;
                cBdsr17.Styles.add("key", "label140");
                cBdsr17.Styles.add("value", "result128");

                ts.TestParamCells.push(cBdsr17);

                var tse17 = new TestParam();
                tse17.Key = "Target State Element (TS)";
                var cTse17 = new TestParamCell(tse17);
                cTse17.Row = 4;
                cTse17.Column = 0;
                cTse17.ColSpan = 2;
                cTse17.Styles.add("key", "label70Bold");
                cTse17.Styles.add("value", "result0");

                ts.TestParamCells.push(cTse17);

                var selalt17 = new TestParam();
                selalt17.Key = "Sel. Altitude";
                selalt17.Value = "__ (<.__ nm) ";
                var cSelalt17 = new TestParamCell(selalt17);
                cSelalt17.Row = 5;
                cSelalt17.Column = 0;
                cSelalt17.Styles.add("value", "result100Right");

                ts.TestParamCells.push(cSelalt17);

                var nicsa17 = new TestParam();
                nicsa17.Key = "NIC-supA";
                nicsa17.Value = "__";
                var cNicsa17 = new TestParamCell(nicsa17);
                cNicsa17.Row = 5;
                cNicsa17.Column = 1;
                cNicsa17.Styles.add("value", "result100Right");

                ts.TestParamCells.push(cNicsa17);

                var bs17 = new TestParam();
                bs17.Key = "Baro Setting";
                bs17.Value = "____";
                bs17.Unit = "mb";
                var cBs17 = new TestParamCell(bs17);
                cBs17.Row = 6;
                cBs17.Column = 0;
                cBs17.ColSpan = 2;
                cBs17.Styles.add("value", "result100Right");

                ts.TestParamCells.push(cBs17);

                var selhd17 = new TestParam();
                selhd17.Key = "Sel. Heading";
                selhd17.Value = "____";
                selhd17.Unit = "deg";
                var cSelhd17 = new TestParamCell(selhd17);
                cSelhd17.Row = 7;
                cSelhd17.Column = 0;
                cSelhd17.Styles.add("value", "result100Right");

                ts.TestParamCells.push(cSelhd17);

                var sts17 = new TestParam();
                sts17.Key = "Status";
                sts17.Value = "__ (_____)";
                var cSts17 = new TestParamCell(sts17);
                cSts17.Row = 7;
                cSts17.Column = 1;
                cSts17.Styles.add("value", "result100Right");

                ts.TestParamCells.push(cSts17);

                var apm17 = new TestParam();
                apm17.Key = "Autopilot Modes";
                var cApm17 = new TestParamCell(apm17);
                cApm17.Row = 8;
                cApm17.Column = 0;
                cApm17.ColSpan = 2;
                cApm17.Styles.add("key", "labelAutoBold");
                cApm17.Styles.add("value", "result0");

                ts.TestParamCells.push(cApm17);

                var mbs17 = new TestParam();
                mbs17.Key = "Mode bits status";
                mbs17.Value = "__(_____)";
                var cMbs17 = new TestParamCell(mbs17);
                cMbs17.Row = 9;
                cMbs17.Column = 0;
                cMbs17.ColSpan = 2;
                cMbs17.Styles.add("key", "label140");
                // cMbs17.Styles.add("value", "result85");

                ts.TestParamCells.push(cMbs17);

                var ap17 = new TestParam();
                ap17.Key = "Autopilot (AP)";
                ap17.Value = "_ (_______)";
                var cAp17 = new TestParamCell(ap17);
                cAp17.Row = 10;
                cAp17.Column = 0;
                cAp17.ColSpan = 2;
                cAp17.Styles.add("key", "label140");
                // cAp17.Styles.add("value", "result85");

                ts.TestParamCells.push(cAp17);

                var vnav17 = new TestParam();
                vnav17.Key = "VNAV";
                vnav17.Value = "_ (__________)";
                var cVnav17 = new TestParamCell(vnav17);
                cVnav17.Row = 11;
                cVnav17.Column = 0;
                cVnav17.ColSpan = 2;
                cVnav17.Styles.add("key", "label140");
                // cVnav17.Styles.add("value", "result85");

                ts.TestParamCells.push(cVnav17);

                var alt17 = new TestParam();
                alt17.Key = "Alt. Hold (ALT)";
                alt17.Value = "_ (_______)";
                var cAlt17 = new TestParamCell(alt17);
                cAlt17.Row = 12;
                cAlt17.Column = 0;
                cAlt17.ColSpan = 2;
                cAlt17.Styles.add("key", "label140");
                // cAlt17.Styles.add("value", "result85");

                ts.TestParamCells.push(cAlt17);

                var app17 = new TestParam();
                app17.Key = "Approach (APP)";
                app17.Value = "__ (___________)";
                var cApp17 = new TestParamCell(app17);
                cApp17.Row = 13;
                cApp17.Column = 0;
                cApp17.ColSpan = 2;
                cApp17.Styles.add("key", "label140");
                // cApp17.Styles.add("value", "result85");

                ts.TestParamCells.push(cApp17);

                var lnav17 = new TestParam();
                lnav17.Key = "LNAV";
                lnav17.Value = "__ (___________)";
                var cLnav17 = new TestParamCell(lnav17);
                cLnav17.Row = 14;
                cLnav17.Column = 0;
                cLnav17.ColSpan = 2;
                cLnav17.Styles.add("key", "label140");
                // cLnav17.Styles.add("value", "result85");

                ts.TestParamCells.push(cLnav17);
                newTest.Summaries.push(ts);
                //-----------------------SQUITTER------------------------
                var sqtr = new Test();
                sqtr.Name = "SQUITTER";
                sqtr.Styles.add("value", "result135Right");

                var avl18 = new TestParam();
                avl18.Key = "Aircraft/Vehicle";
                avl18.Value = "#__";
                var cAvl18 = new TestParamCell(avl18);
                cAvl18.Row = 0;
                cAvl18.Column = 0;
                cAvl18.ColSpan = 2;
                cAvl18.Styles.add("key", "labelAutoBold");
                cAvl18.Styles.add("value", "labelAutoBold");

                sqtr.TestParamCells.push(cAvl18);

                var add18 = new TestParam();
                add18.Key = "ADDRESS";
                add18.Value = "______ (_) / ________ (_)";
                var cAdd18 = new TestParamCell(add18);
                cAdd18.Row = 1;
                cAdd18.Column = 0;
                cAdd18.ColSpan = 2;
                cAdd18.Styles.add("key", "label110");
                cAdd18.Styles.add("value", "result128");

                sqtr.TestParamCells.push(cAdd18);

                var ftid18 = new TestParam();
                ftid18.Key = "Flight ID";
                ftid18.Value = "______";
                var cFtid18 = new TestParamCell(ftid18);
                cFtid18.Row = 2;
                cFtid18.Column = 0;
                cFtid18.Styles.add("key", "label110");
                cFtid18.Styles.add("value", "result85");

                sqtr.TestParamCells.push(cFtid18);

                var rfl18 = new TestParam();
                rfl18.Key = "RF Level";
                rfl18.Value = "______";
                var cRfl18 = new TestParamCell(rfl18);
                cRfl18.Row = 2;
                cRfl18.Column = 1;
                cRfl18.Styles.add("key", "label110");
                cRfl18.Styles.add("value", "result85");

                sqtr.TestParamCells.push(cRfl18);

                var bdsr18 = new TestParam();
                bdsr18.Key = "BDS Rcvd (DF17)";
                bdsr18.Value = "_,_ _,_ _,_ _,_ _,_";
                var cBdsr18 = new TestParamCell(bdsr18);
                cBdsr18.Row = 3;
                cBdsr18.Column = 0;
                cBdsr18.ColSpan = 2;
                cBdsr18.Styles.add("key", "label140");
                cBdsr18.Styles.add("value", "result128");

                sqtr.TestParamCells.push(cBdsr18);

                var rfst18 = new TestParam();
                rfst18.Key = "RF/ Squitter Timming";
                var cRfst18 = new TestParamCell(rfst18);
                cRfst18.Row = 4;
                cRfst18.Column = 0;
                cRfst18.ColSpan = 2;
                cRfst18.Styles.add("key", "label70Bold");

                sqtr.TestParamCells.push(cRfst18);

                var esr18 = new TestParam();
                esr18.Key = "Extended Squitter Rate";
                esr18.Value = "__.__";
                esr18.Unit = "sec";
                var cEsr18 = new TestParamCell(esr18);
                cEsr18.Row = 5;
                cEsr18.Column = 0;
                cEsr18.ColSpan = 2;
                cEsr18.Styles.add("key", "label133Bold");
                cEsr18.Styles.add("value", "result60BoldRight");
                cEsr18.Styles.add("unit", "unit35BoldLeft");

                sqtr.TestParamCells.push(cEsr18);

                var rfd18 = new TestParam();
                rfd18.Key = "1090 MHz RF Data";
                var cRfd18 = new TestParamCell(rfd18);
                cRfd18.Row = 6;
                cRfd18.Column = 0;
                cRfd18.ColSpan = 2;
                cRfd18.Styles.add("key", "labelAutoBold");
                cRfd18.Styles.add("value", "result0");

                sqtr.TestParamCells.push(cRfd18);

                var mfrq18 = new TestParam();
                mfrq18.Key = "Measured frequency";
                mfrq18.Value = "____.___";
                mfrq18.Unit = "MHz";
                var cMfrq18 = new TestParamCell(mfrq18);
                cMfrq18.Row = 7;
                cMfrq18.Column = 0;
                cMfrq18.ColSpan = 2;
                cMfrq18.Styles.add("key", "label150");
                // cMfrq18.Styles.add("value", "result85");

                sqtr.TestParamCells.push(cMfrq18);

                var mp18 = new TestParam();
                mp18.Key = "Measure power";
                mp18.Value = "___._";
                mp18.Unit = "dBm";
                var cMp18 = new TestParamCell(mp18);
                cMp18.Row = 8;
                cMp18.Column = 0;
                cMp18.ColSpan = 2;
                cMp18.Styles.add("key", "label150");
                // cMp18.Styles.add("value", "result85");

                sqtr.TestParamCells.push(cMp18);

                var ec18 = new TestParam();
                ec18.Key = "Error conditions";
                ec18.Value = "__________";
                var cEc18 = new TestParamCell(ec18);
                cEc18.Row = 8;
                cEc18.Column = 0;
                cEc18.ColSpan = 2;
                cEc18.Styles.add("key", "label150");
                // cEc18.Styles.add("value", "result85");

                sqtr.TestParamCells.push(cEc18);

                newTest.Summaries.push(sqtr);
            }
                break;
            case 'UAT ADS-B IN': {
                newTest.Styles.add("key", "label110");
                newTest.Styles.add("value", "result85");
                newTest.Styles.add("unit", "unit35Left");

                newTest.Name = test;
                newTest.isGuideAvailable = true;
                // -----------------------Filter A/v target----------------------------
                newTest.Summaries.push(this.createSelectAvTarget());

                //-----------------------UAT In------------------------
                var uati = new Test();
                uati.Name = "ADS-B IN";

                newTest.Summaries.push(uati);
            }
                break;
            case 'UAT ADS-B OUT': {
                newTest.Styles.add("key", "label110");
                newTest.Styles.add("value", "result85");
                newTest.Styles.add("unit", "unit35Left");

                newTest.Name = test;
                newTest.isGuideAvailable = true;
                // -----------------------Filter A/v target----------------------------
                newTest.Summaries.push(this.createSelectAvTarget());

                //------------------------UAT Mode Status Test-----------------------------
                var mst = new Test();
                mst.Name = "UAT Mode Status Test";
                mst.Styles.add("value", "result135");

                var avl3 = new TestParam();
                avl3.Key = "Aircraft/Vehicle";
                avl3.Value = "#__";
                var cAvl3 = new TestParamCell(avl3);
                cAvl3.Row = 0;
                cAvl3.Column = 0;
                cAvl3.ColSpan = 2;
                cAvl3.Styles.add("key", "labelAutoBold");
                cAvl3.Styles.add("value", "labelAutoBold");

                mst.TestParamCells.push(cAvl3);

                var add3 = new TestParam();
                add3.Key = "ADDRESS";
                add3.Value = "______ (_) / ________ (_)";
                var cAdd3 = new TestParamCell(add3);
                cAdd3.Row = 1;
                cAdd3.Column = 0;
                cAdd3.ColSpan = 2;
                cAdd3.Styles.add("value", "result128");

                mst.TestParamCells.push(cAdd3);

                var pld3 = new TestParam();
                pld3.Key = "Qualifier";
                pld3.Value = "______";
                var cPld3 = new TestParamCell(pld3);
                cPld3.Row = 2;
                cPld3.Column = 0;
                cPld3.Styles.add("key", "label110");
                cPld3.Styles.add("value", "result85");

                mst.TestParamCells.push(cPld3);

                var eqc3 = new TestParam();
                eqc3.Key = "RF Level";
                eqc3.Value = "______";
                var cEqc3 = new TestParamCell(eqc3);
                cEqc3.Row = 2;
                cEqc3.Column = 1;
                cEqc3.Styles.add("key", "label70");
                cEqc3.Styles.add("value", "result85");

                mst.TestParamCells.push(cEqc3);

                var addQ3 = new TestParam();
                addQ3.Key = "Payloads Rcvd";
                addQ3.Value = "_,_,_,_";
                var cAddQ3 = new TestParamCell(addQ3);
                cAddQ3.Row = 3;
                cAddQ3.Column = 0;
                cAddQ3.ColSpan = 2;
                cAddQ3.Styles.add("key", "label110");
                cAddQ3.Styles.add("value", "result128");

                mst.TestParamCells.push(cAddQ3);

                var esd3 = new TestParam();
                esd3.Key = "Mode Status Element (MS)";
                var cEsd3 = new TestParamCell(esd3);
                cEsd3.Row = 4;
                cEsd3.Column = 0;
                cEsd3.Styles.add("key", "label70Bold");
                cEsd3.Styles.add("value", "result0");

                mst.TestParamCells.push(cEsd3);

                var itvl4 = new TestParam();
                itvl4.Key = "Interval";
                itvl4.Value = "__.__";
                itvl4.Unit = "Second(s)";
                var cItvl4 = new TestParamCell(itvl4);
                cItvl4.Row = 4;
                cItvl4.Column = 1;
                cItvl4.Styles.add("key", "label60");
                cItvl4.Styles.add("value", "result60Right");

                mst.TestParamCells.push(cItvl4);

                var avi3 = new TestParam();
                avi3.Key = "Aircraft/Vehicle Info";
                var cAvi3 = new TestParamCell(avi3);
                cAvi3.Row = 5;
                cAvi3.Column = 0;
                cAvi3.ColSpan = 2;
                cAvi3.Styles.add("key", "labelAutoBold");
                cAvi3.Styles.add("value", "result0");

                mst.TestParamCells.push(cAvi3);

                var fid3 = new TestParam();
                fid3.Key = "Flight ID";
                fid3.Value = "_____";
                var cFid3 = new TestParamCell(fid3);
                cFid3.Row = 6;
                cFid3.Column = 0;

                mst.TestParamCells.push(cFid3);

                var csid3 = new TestParam();
                csid3.Key = "CSID";
                csid3.Value = "__ (__________)";
                var cCsid3 = new TestParamCell(csid3);
                cCsid3.Row = 6;
                cCsid3.Column = 1;

                mst.TestParamCells.push(cCsid3);

                var ec3 = new TestParam();
                ec3.Key = "Emitter Cat";
                ec3.Value = "__ (______) ";
                var cEc3 = new TestParamCell(ec3);
                cEc3.Row = 7;
                cEc3.Column = 0;

                mst.TestParamCells.push(cEc3);

                var acd3 = new TestParam();
                acd3.Key = "3/A Code";
                acd3.Value = "_____";
                var cAcd3 = new TestParamCell(acd3);
                cAcd3.Row = 7;
                cAcd3.Column = 1;

                mst.TestParamCells.push(cAcd3);

                var ep3 = new TestParam();
                ep3.Key = "Emg/Prty";
                ep3.Value = "_ (________)";
                var cEp3 = new TestParamCell(ep3);
                cEp3.Row = 8;
                cEp3.Column = 0;
                cEp3.ColSpan = 2;


                mst.TestParamCells.push(cEp3);

                var cc3 = new TestParam();
                cc3.Key = "Capability Codes";
                var cCc3 = new TestParamCell(cc3);
                cCc3.Row = 9;
                cCc3.Column = 0;
                cCc3.ColSpan = 2;
                cCc3.Styles.add("key", "labelAutoBold");
                cCc3.Styles.add("value", "result0");

                mst.TestParamCells.push(cCc3);

                var uatin3 = new TestParam();
                uatin3.Key = "UAT IN";
                uatin3.Value = "_ (_)";
                var cUatin3 = new TestParamCell(uatin3);
                cUatin3.Row = 10;
                cUatin3.Column = 0;

                mst.TestParamCells.push(cUatin3);

                var tcasp3 = new TestParam();
                tcasp3.Key = "TCAS Op";
                tcasp3.Value = "_ (_)";
                var cTcasp3 = new TestParamCell(tcasp3);
                cTcasp3.Row = 10;
                cTcasp3.Column = 1;

                mst.TestParamCells.push(cTcasp3);

                var es3 = new TestParam();
                es3.Key = "1090ES IN";
                es3.Value = "_ (_)";
                var cEs3 = new TestParamCell(es3);
                cEs3.Row = 11;
                cEs3.Column = 0;
                cEs3.ColSpan = 2;

                mst.TestParamCells.push(cEs3);

                var om3 = new TestParam();
                om3.Key = "Operational Modes";
                var cOm3 = new TestParamCell(om3);
                cOm3.Row = 12;
                cOm3.Column = 0;
                cOm3.ColSpan = 2;
                cOm3.Styles.add("key", "labelAutoBold");
                cOm3.Styles.add("value", "result0");

                mst.TestParamCells.push(cOm3);

                var atcs3 = new TestParam();
                atcs3.Key = "ATC Svcs";
                atcs3.Value = "_ (_)";
                var cAtcs3 = new TestParamCell(atcs3);
                cAtcs3.Row = 13;
                cAtcs3.Column = 0;

                mst.TestParamCells.push(cAtcs3);

                var idt3 = new TestParam();
                idt3.Key = "IDENT";
                idt3.Value = "_ (_)";
                var cIdt3 = new TestParamCell(idt3);
                cIdt3.Row = 13;
                cIdt3.Column = 1;

                mst.TestParamCells.push(cIdt3);

                var tcasra3 = new TestParam();
                tcasra3.Key = "TCAS RA";
                tcasra3.Value = "_ (_)";
                var cTcasra3 = new TestParamCell(tcasra3);
                cTcasra3.Row = 14;
                cTcasra3.Column = 0;
                cTcasra3.ColSpan = 2;

                mst.TestParamCells.push(cTcasra3);

                var ofd3 = new TestParam();
                ofd3.Key = "Other Fields";
                var cOfd3 = new TestParamCell(ofd3);
                cOfd3.Row = 15;
                cOfd3.Column = 0;
                cOfd3.ColSpan = 2;
                cOfd3.Styles.add("key", "labelAutoBold");
                cOfd3.Styles.add("value", "result0");

                mst.TestParamCells.push(cOfd3);

                var nacp3 = new TestParam();
                nacp3.Key = "NACp";
                nacp3.Value = "__ (< ___nm)";
                var cNacp3 = new TestParamCell(nacp3);
                cNacp3.Row = 16;
                cNacp3.Column = 0;

                mst.TestParamCells.push(cNacp3);
                var trnmso3 = new TestParam();
                trnmso3.Key = "Transmit MSO";
                trnmso3.Value = "___";
                var cTrnmso3 = new TestParamCell(trnmso3);
                cTrnmso3.Row = 16;
                cTrnmso3.Column = 1;

                mst.TestParamCells.push(cTrnmso3);

                var nacv3 = new TestParam();
                nacv3.Key = "NACv";
                nacv3.Value = "__ (< __m/s)";
                var cNacv3 = new TestParamCell(nacv3);
                cNacv3.Row = 17;
                cNacv3.Column = 0;

                mst.TestParamCells.push(cNacv3);

                var sil3 = new TestParam();
                sil3.Key = "SIL";
                sil3.Value = "_ (< ___)";
                var cSil3 = new TestParamCell(sil3);
                cSil3.Row = 17;
                cSil3.Column = 1;

                mst.TestParamCells.push(cSil3);

                var sda3 = new TestParam();
                sda3.Key = "SDA";
                sda3.Value = "__";
                var cSda3 = new TestParamCell(sda3);
                cSda3.Row = 18;
                cSda3.Column = 0;

                mst.TestParamCells.push(cSda3);

                var gva3 = new TestParam();
                gva3.Key = "GVA";
                gva3.Value = "__ (< __m)";
                var cGva3 = new TestParamCell(gva3);
                cGva3.Row = 18;
                cGva3.Column = 1;

                mst.TestParamCells.push(cGva3);

                var mops3 = new TestParam();
                mops3.Key = "MOPS";
                mops3.Value = "__ (__-____)";
                var cMops3 = new TestParamCell(mops3);
                cMops3.Row = 19;
                cMops3.Column = 0;

                mst.TestParamCells.push(cMops3);

                var sils3 = new TestParam();
                sils3.Key = "SIL Sup";
                sils3.Value = "__ (_________) ";
                var cSils3 = new TestParamCell(sils3);
                cSils3.Row = 19;
                cSils3.Column = 1;

                mst.TestParamCells.push(cSils3);

                var sgla3 = new TestParam();
                sgla3.Key = "Sgl Ant";
                sgla3.Value = "__ (________)";
                var cSgla3 = new TestParamCell(sgla3);
                cSgla3.Row = 20;
                cSgla3.Column = 0;

                mst.TestParamCells.push(cSgla3);

                var nicb3 = new TestParam();
                nicb3.Key = "NICbaro";
                nicb3.Value = "__ (_________)";
                var cNicb3 = new TestParamCell(nicb3);
                cNicb3.Row = 20;
                cNicb3.Column = 1;

                mst.TestParamCells.push(cNicb3);

                var nicsup3 = new TestParam();
                nicsup3.Key = "NICsup";
                nicsup3.Value = "__";
                var cNicsup3 = new TestParamCell(nicsup3);
                cNicsup3.Row = 21;
                cNicsup3.Column = 0;
                cNicsup3.ColSpan = 2;

                mst.TestParamCells.push(cNicsup3);

                newTest.Summaries.push(mst);

                //------------------------UAT State Vector Test------Air-----------------------
                var usvt = new Test();
                usvt.Name = "UAT State Vector Test-Air";
                usvt.Styles.add("value", "result135Right");

                var avl1 = new TestParam();
                avl1.Key = "Aircraft/Vehicle";
                avl1.Value = "#__";
                var cAvl1 = new TestParamCell(avl1);
                cAvl1.Row = 0;
                cAvl1.Column = 0;
                cAvl1.ColSpan = 2;
                cAvl1.Styles.add("key", "labelAutoBold");
                cAvl1.Styles.add("value", "labelAutoBold");

                usvt.TestParamCells.push(cAvl1);

                var addr1 = new TestParam();
                addr1.Key = "ADDRESS";
                addr1.Value = "_____ (_)/ _________(_)"
                var cAddr1 = new TestParamCell(addr1);
                cAddr1.Row = 1;
                cAddr1.Column = 0;
                cAddr1.ColSpan = 2;
                cAddr1.Styles.add("value", "result128");

                usvt.TestParamCells.push(cAddr1);

                var pldr1 = new TestParam();
                pldr1.Key = "Qualifier";
                pldr1.Value = "______";
                var cPldr1 = new TestParamCell(pldr1);
                cPldr1.Row = 2;
                cPldr1.Column = 0;
                cPldr1.Styles.add("value", "result85");


                usvt.TestParamCells.push(cPldr1);

                var rflev1 = new TestParam();
                rflev1.Key = "RF Level";
                rflev1.Value = "______";
                var cRflev1 = new TestParamCell(rflev1);
                cRflev1.Row = 2;
                cRflev1.Column = 1;
                cRflev1.Styles.add("key", "label70");
                cRflev1.Styles.add("value", "result85");

                usvt.TestParamCells.push(cRflev1);

                var aQ1 = new TestParam();
                aQ1.Key = "Payloads Rcvd";
                aQ1.Value = "_,_,_,_";
                var cAq1 = new TestParamCell(aQ1);
                cAq1.Row = 3;
                cAq1.Column = 0;
                cAq1.ColSpan = 2;
                cAq1.Styles.add("key", "label110");
                cAq1.Styles.add("value", "result128");

                usvt.TestParamCells.push(cAq1);

                var sv1 = new TestParam();
                sv1.Key = "State Vector Element (SV)";
                var cSv1 = new TestParamCell(sv1);
                cSv1.Row = 4;
                cSv1.Column = 0;
                cSv1.Styles.add("key", "label70Bold");
                cSv1.Styles.add("value", "result0");

                usvt.TestParamCells.push(cSv1);

                var itvl1 = new TestParam();
                itvl1.Key = "Interval";
                itvl1.Value = "__.__";
                itvl1.Unit = "Second(s)";
                var cItvl1 = new TestParamCell(itvl1);
                cItvl1.Row = 4;
                cItvl1.Column = 1;
                cItvl1.Styles.add("key", "label60");
                cItvl1.Styles.add("value", "result60Right");

                usvt.TestParamCells.push(cItvl1);

                var posv1 = new TestParam();
                posv1.Key = "Position & Velocity";
                var cPosv1 = new TestParamCell(posv1);
                cPosv1.Row = 5;
                cPosv1.Column = 0;
                cPosv1.ColSpan = 2;
                cPosv1.Styles.add("key", "labelAutoBold");
                cPosv1.Styles.add("value", "result0");

                usvt.TestParamCells.push(cPosv1);

                var agst1 = new TestParam();
                agst1.Key = "Air/Gnd State";
                agst1.Value = "AIR - Subsonic"
                var cAgst1 = new TestParamCell(agst1);
                cAgst1.Row = 6;
                cAgst1.Column = 0;
                cAgst1.ColSpan = 2;
                cAgst1.Styles.add("value", "result131Right");

                usvt.TestParamCells.push(cAgst1);

                var latd1 = new TestParam();
                latd1.Key = "Latitude";
                latd1.Value = "__⁰ __ __.___";
                latd1.Unit = "N";
                var cLatd1 = new TestParamCell(latd1);
                cLatd1.Row = 7;
                cLatd1.Column = 0;
                cLatd1.ColSpan = 2;
                cLatd1.Styles.add("value", "result131Right");

                usvt.TestParamCells.push(cLatd1);

                var lagd1 = new TestParam();
                lagd1.Key = "Longitude";
                lagd1.Value = "__⁰ __ __.___";
                lagd1.Unit = "W";
                var cLagd1 = new TestParamCell(lagd1);
                cLagd1.Row = 8;
                cLagd1.Column = 0;
                cLagd1.ColSpan = 2;
                cLagd1.Styles.add("value", "result131Right");

                usvt.TestParamCells.push(cLagd1);

                var alti1 = new TestParam();
                alti1.Key = "Altitude";
                alti1.Value = "___,_____";
                alti1.Unit = "ft";
                var cAlti1 = new TestParamCell(alti1);
                cAlti1.Row = 9;
                cAlti1.Column = 0;
                cAlti1.Styles.add("key", "label140");
                cAlti1.Styles.add("value", "result100Right");

                usvt.TestParamCells.push(cAlti1);

                var typ1 = new TestParam();
                typ1.Key = "Type";
                typ1.Value = "__ (______)"
                var cTyp1 = new TestParamCell(typ1);
                cTyp1.Row = 9;
                cTyp1.Column = 1;
                cTyp1.Styles.add("key", "label70");

                usvt.TestParamCells.push(cTyp1);

                var horv1 = new TestParam();
                horv1.Key = "Horizontal Velocity";
                horv1.Value = "___ kts N ___ kts W"
                var cHorv1 = new TestParamCell(horv1);
                cHorv1.Row = 10;
                cHorv1.Column = 0;
                cHorv1.ColSpan = 2;
                cHorv1.Styles.add("key", "label140");

                usvt.TestParamCells.push(cHorv1);

                var verv1 = new TestParam();
                verv1.Key = "Vert. Velocity";
                verv1.Value = "__,____";
                verv1.Unit = "fpm";
                var cVerv1 = new TestParamCell(verv1);
                cVerv1.Row = 11;
                cVerv1.Column = 0;
                cVerv1.Styles.add("key", "label140");
                cVerv1.Styles.add("value", "result100Right");

                usvt.TestParamCells.push(cVerv1);

                var src1 = new TestParam();
                src1.Key = "Source";
                src1.Value = "__ (_____)"
                var cSrc1 = new TestParamCell(src1);
                cSrc1.Row = 11;
                cSrc1.Column = 1;
                cSrc1.Styles.add("key", "label70");

                usvt.TestParamCells.push(cSrc1);

                var ofld1 = new TestParam();
                ofld1.Key = "Other Fields";
                var cOfld1 = new TestParamCell(ofld1);
                cOfld1.Row = 12;
                cOfld1.Column = 0;
                cOfld1.ColSpan = 2;
                cOfld1.Styles.add("key", "labelAutoBold");
                cOfld1.Styles.add("value", "result0");

                usvt.TestParamCells.push(cOfld1);

                var ni1 = new TestParam();
                ni1.Key = "NIC";
                ni1.Value = "__(< ___m)";
                var cNi1 = new TestParamCell(ni1);
                cNi1.Row = 13;
                cNi1.Column = 0;
                cNi1.Styles.add("key", "label140");

                usvt.TestParamCells.push(cNi1);

                var ut1 = new TestParam();
                ut1.Key = "UTC";
                ut1.Value = "__ (________)"
                var cUt1 = new TestParamCell(ut1);
                cUt1.Row = 13;
                cUt1.Column = 1;
                cUt1.Styles.add("key", "label70");

                usvt.TestParamCells.push(cUt1);

                var upfb1 = new TestParam();
                upfb1.Key = "Uplink Feedback";
                upfb1.Value = "__ (____=__)"
                var cUpfb1 = new TestParamCell(upfb1);
                cUpfb1.Row = 14;
                cUpfb1.Column = 0;
                cUpfb1.ColSpan = 2;
                cUpfb1.Styles.add("key", "label140");

                usvt.TestParamCells.push(cUpfb1);

                var auxsve1 = new TestParam();
                auxsve1.Key = "Aux.State Vector Element (AUX SV)";
                var cAuxsve1 = new TestParamCell(auxsve1);
                cAuxsve1.Row = 15;
                cAuxsve1.Column = 0;
                cAuxsve1.ColSpan = 2;
                cAuxsve1.Styles.add("key", "labelAutoBold");
                cAuxsve1.Styles.add("value", "result0");

                usvt.TestParamCells.push(cAuxsve1);

                var seca1 = new TestParam();
                seca1.Key = "Secondary Altitude";
                seca1.Value = "____,_____";
                seca1.Unit = "ft";
                var cSeca1 = new TestParamCell(seca1);
                cSeca1.Row = 16;
                cSeca1.Column = 0;
                cSeca1.ColSpan = 2;
                cSeca1.Styles.add("key", "label140");
                cSeca1.Styles.add("value", "result100Right");

                usvt.TestParamCells.push(cSeca1);

                newTest.Summaries.push(usvt);

                //------------------------UAT State Vector Test------Ground-----------------------
                var usvtg = new Test();
                usvtg.Name = "UAT State Vector Test-Ground";
                usvtg.Styles.add("key", "label115");
                usvtg.Styles.add("value", "result135Right");

                var avl2 = new TestParam();
                avl2.Key = "Aircraft/Vehicle";
                avl2.Value = "#__";
                var cAvl2 = new TestParamCell(avl2);
                cAvl2.Row = 0;
                cAvl2.Column = 0;
                cAvl2.ColSpan = 2;
                cAvl2.Styles.add("key", "labelAutoBold");
                cAvl2.Styles.add("value", "labelAutoBold");

                usvtg.TestParamCells.push(cAvl2);

                var addr2 = new TestParam();
                addr2.Key = "ADDRESS";
                addr2.Value = "_______ (_)/ _______(_)";
                var cAddr2 = new TestParamCell(addr2);
                cAddr2.Row = 1;
                cAddr2.Column = 0;
                cAddr2.ColSpan = 2;
                cAddr2.Styles.add("key", "label110");
                cAddr2.Styles.add("value", "result128");

                usvtg.TestParamCells.push(cAddr2);

                var pldr2 = new TestParam();
                pldr2.Key = "Qualifier";
                pldr2.Value = "______";
                var cPldr2 = new TestParamCell(pldr2);
                cPldr2.Row = 2;
                cPldr2.Column = 0;
                cPldr2.Styles.add("key", "label110");
                cPldr2.Styles.add("value", "result85");


                usvtg.TestParamCells.push(cPldr2);

                var rflev2 = new TestParam();
                rflev2.Key = "RF Level";
                rflev2.Value = "______";
                var cRflev2 = new TestParamCell(rflev2);
                cRflev2.Row = 2;
                cRflev2.Column = 1;
                cRflev2.Styles.add("key", "label70");
                cRflev2.Styles.add("value", "result85");

                usvtg.TestParamCells.push(cRflev2);


                var aQ2 = new TestParam();
                aQ2.Key = "Payloads Rcvd";
                aQ2.Value = "_,_,_,_";
                var cAq2 = new TestParamCell(aQ2);
                cAq2.Row = 3;
                cAq2.Column = 0;
                cAq2.ColSpan = 2;
                cAq2.Styles.add("key", "label110");
                cAq2.Styles.add("value", "result128");

                usvtg.TestParamCells.push(cAq2);

                var sv2 = new TestParam();
                sv2.Key = "State Vector Element (SV)";
                var cSv2 = new TestParamCell(sv2);
                cSv2.Row = 4;
                cSv2.Column = 0;
                cSv2.Styles.add("key", "label70Bold");
                cSv2.Styles.add("value", "result0");

                usvtg.TestParamCells.push(cSv2);

                var itvl2 = new TestParam();
                itvl2.Key = "Interval";
                itvl2.Value = "__.__";
                itvl2.Unit = "Second(s)";
                var cItvl2 = new TestParamCell(itvl2);
                cItvl2.Row = 4;
                cItvl2.Column = 1;
                cItvl2.Styles.add("key", "label60");
                cItvl2.Styles.add("value", "result60Right");

                usvtg.TestParamCells.push(cItvl2)

                var posv2 = new TestParam();
                posv2.Key = "Position & Velocity";
                var cPosv2 = new TestParamCell(posv2);
                cPosv2.Row = 5;
                cPosv2.Column = 0;
                cPosv2.ColSpan = 2;
                cPosv2.Styles.add("key", "labelAutoBold");
                cPosv2.Styles.add("value", "result0");

                usvtg.TestParamCells.push(cPosv2);

                var agst2 = new TestParam();
                agst2.Key = "Air/Gnd State";
                agst2.Value = "Ground"
                var cAgst2 = new TestParamCell(agst2);
                cAgst2.Row = 6;
                cAgst2.Column = 0;
                cAgst2.ColSpan = 2;

                usvtg.TestParamCells.push(cAgst2);

                var latd2 = new TestParam();
                latd2.Key = "Latitude";
                latd2.Value = "__⁰ __ __.___";
                latd2.Unit = "N";
                var cLatd2 = new TestParamCell(latd2);
                cLatd2.Row = 7;
                cLatd2.Column = 0;
                cLatd2.ColSpan = 2;

                usvtg.TestParamCells.push(cLatd2);

                var lagd2 = new TestParam();
                lagd2.Key = "Longitude";
                lagd2.Value = "____⁰ __ __.___";
                lagd2.Unit = "W";
                var cLagd2 = new TestParamCell(lagd2);
                cLagd2.Row = 8;
                cLagd2.Column = 0;
                cLagd2.ColSpan = 2;

                usvtg.TestParamCells.push(cLagd2);

                var alti2 = new TestParam();
                alti2.Key = "Altitude";
                alti2.Value = "_,____";
                alti2.Unit = "ft";
                var cAlti2 = new TestParamCell(alti2);
                cAlti2.Row = 9;
                cAlti2.Column = 0;

                usvtg.TestParamCells.push(cAlti2);

                var typ2 = new TestParam();
                typ2.Key = "Type";
                typ2.Value = "_ (__________)";
                var cTyp2 = new TestParamCell(typ2);
                cTyp2.Row = 9;
                cTyp2.Column = 1;
                cTyp2.Styles.add("key", "label70");

                usvtg.TestParamCells.push(cTyp2);

                var gsd2 = new TestParam();
                gsd2.Key = "Groundspeed";
                gsd2.Value = "___";
                gsd2.Unit = "kts";
                var cGsd2 = new TestParamCell(gsd2);
                cGsd2.Row = 10;
                cGsd2.Column = 0;
                cGsd2.ColSpan = 2;

                usvtg.TestParamCells.push(cGsd2);

                var verv2 = new TestParam();
                verv2.Key = "Track/Heading";
                verv2.Value = "___.__";
                verv2.Unit = "deg";
                var cVerv2 = new TestParamCell(verv2);
                cVerv2.Row = 11;
                cVerv2.Column = 0;

                usvtg.TestParamCells.push(cVerv2);

                var th2 = new TestParam();
                th2.Key = "T/H";
                th2.Value = "__(______)";
                var cTh2 = new TestParamCell(th2);
                cTh2.Row = 11;
                cTh2.Column = 1;
                cTh2.Styles.add("key", "label70");

                usvtg.TestParamCells.push(cTh2);

                var avlw2 = new TestParam();
                avlw2.Key = "A/V L/W";
                avlw2.Value = "__ (__m/__._m)";
                var cAvlw2 = new TestParamCell(avlw2);
                cAvlw2.Row = 12;
                cAvlw2.Column = 0;
                cAvlw2.ColSpan = 2;

                usvtg.TestParamCells.push(cAvlw2);

                var horv2 = new TestParam();
                horv2.Key = "GPS Ant Offset";
                horv2.Value = "_ m Right; _ m Aft";
                var cHorv2 = new TestParamCell(horv2);
                cHorv2.Row = 13;
                cHorv2.Column = 0;
                cHorv2.ColSpan = 2;

                usvtg.TestParamCells.push(cHorv2);

                var ofld2 = new TestParam();
                ofld2.Key = "Other Fields";
                var cOfld2 = new TestParamCell(ofld2);
                cOfld2.Row = 14;
                cOfld2.Column = 0;
                cOfld2.ColSpan = 2;
                cOfld2.Styles.add("key", "labelAutoBold");
                cOfld2.Styles.add("value", "result0");

                usvtg.TestParamCells.push(cOfld2);

                var ni2 = new TestParam();
                ni2.Key = "NIC";
                ni2.Value = "__(< ___m)";
                var cNi2 = new TestParamCell(ni2);
                cNi2.Row = 15;
                cNi2.Column = 0;
                cNi2.Styles.add("key", "label140");

                usvtg.TestParamCells.push(cNi2);

                var ut2 = new TestParam();
                ut2.Key = "UTC";
                ut2.Value = "__ (________)"
                var cUt2 = new TestParamCell(ut2);
                cUt2.Row = 15;
                cUt2.Column = 1;
                cUt2.Styles.add("key", "label70");

                usvtg.TestParamCells.push(cUt2);

                var upfb2 = new TestParam();
                upfb2.Key = "Uplink Feedback";
                upfb2.Value = "__ (_____=___)"
                var cUpfb2 = new TestParamCell(upfb2);
                cUpfb2.Row = 16;
                cUpfb2.Column = 0;
                cUpfb2.ColSpan = 2;
                cUpfb2.Styles.add("key", "label140");

                usvtg.TestParamCells.push(cUpfb2);

                var auxsve2 = new TestParam();
                auxsve2.Key = "Aux.State Vector Element (AUX SV)";
                var cAuxsve2 = new TestParamCell(auxsve2);
                cAuxsve2.Row = 17;
                cAuxsve2.Column = 0;
                cAuxsve2.ColSpan = 2;
                cAuxsve2.Styles.add("key", "labelAutoBold");
                cAuxsve2.Styles.add("value", "result0");

                usvtg.TestParamCells.push(cAuxsve2);

                var seca2 = new TestParam();
                seca2.Key = "Secondary Altitude";
                seca2.Value = "__,_____";
                seca2.Unit = "ft";
                var cSeca2 = new TestParamCell(seca2);
                cSeca2.Row = 18;
                cSeca2.Column = 0;
                cSeca2.Styles.add("key", "label140");
                cSeca2.Styles.add("value", "result115Right");

                usvtg.TestParamCells.push(cSeca2);

                var tpe1 = new TestParam();
                tpe1.Key = "Type ";
                tpe1.Value = "__ (_____)";
                var cTpe1 = new TestParamCell(tpe1);
                cTpe1.Row = 18;
                cTpe1.Column = 1;
                cTpe1.Styles.add("key", "label70");

                usvtg.TestParamCells.push(cTpe1);

                newTest.Summaries.push(usvtg);

                //------------------------UAT Target State Test-----------------------------
                var tst = new Test();
                tst.Name = "UAT Target State Test";
                tst.Styles.add("value", "result135")

                var avl6 = new TestParam();
                avl6.Key = "Aircraft/Vehicle";
                avl6.Value = "#__";
                var cAvl6 = new TestParamCell(avl6);
                cAvl6.Row = 0;
                cAvl6.Column = 0;
                cAvl6.ColSpan = 2;
                cAvl6.Styles.add("key", "labelAutoBold");
                cAvl6.Styles.add("value", "labelAutoBold");

                tst.TestParamCells.push(cAvl6);

                var add6 = new TestParam();
                add6.Key = "ADDRESS";
                add6.Value = "______ (_) / ________ (_)";
                var cAdd6 = new TestParamCell(add6);
                cAdd6.Row = 1;
                cAdd6.Column = 0;
                cAdd6.ColSpan = 2;
                cAdd6.Styles.add("value", "result128");

                tst.TestParamCells.push(cAdd6);

                var pld6 = new TestParam();
                pld6.Key = "Qualifier";
                pld6.Value = "______";
                var cPld6 = new TestParamCell(pld6);
                cPld6.Row = 2;
                cPld6.Column = 0;
                cPld6.Styles.add("value", "result85");

                tst.TestParamCells.push(cPld6);

                var rfle6 = new TestParam();
                rfle6.Key = "RF Level";
                rfle6.Value = "______";
                var cRfle6 = new TestParamCell(rfle6);
                cRfle6.Row = 2;
                cRfle6.Column = 1;
                cRfle6.Styles.add("key", "label70");
                cRfle6.Styles.add("value", "result85");

                tst.TestParamCells.push(cRfle6);

                var addQ6 = new TestParam();
                addQ6.Key = "Payloads Rcvd";
                addQ6.Value = "_,_,_,_";
                var cAddQ6 = new TestParamCell(addQ6);
                cAddQ6.Row = 3;
                cAddQ6.Column = 0;
                cAddQ6.ColSpan = 2;
                cAddQ6.Styles.add("key", "label110");
                cAddQ6.Styles.add("value", "result128");

                tst.TestParamCells.push(cAddQ6);

                var tse6 = new TestParam();
                tse6.Key = "Target State Element (TS)";
                var cTse6 = new TestParamCell(tse6);
                cTse6.Row = 4;
                cTse6.Column = 0;
                cTse6.Styles.add("key", "label70Bold");
                cTse6.Styles.add("value", "result0");

                tst.TestParamCells.push(cTse6);

                var itvl6 = new TestParam();
                itvl6.Key = "Interval";
                itvl6.Value = "__.__";
                itvl6.Unit = "Second(s)";
                var cItvl6 = new TestParamCell(itvl6);
                cItvl6.Row = 4;
                cItvl6.Column = 1;
                cItvl6.Styles.add("key", "label60");
                cItvl6.Styles.add("value", "result60Right");

                tst.TestParamCells.push(cItvl6)

                var sat6 = new TestParam();
                sat6.Key = "Sel. Altitude";
                sat6.Value = "____,_____";
                sat6.Unit = "ft";
                var cSat6 = new TestParamCell(sat6);
                cSat6.Row = 5;
                cSat6.Column = 0;
                cSat6.Styles.add("value", "result100Right")

                tst.TestParamCells.push(cSat6);

                var typ6 = new TestParam();
                typ6.Key = "Type";
                typ6.Value = " _ (________)";
                var cTyp6 = new TestParamCell(typ6);
                cTyp6.Row = 5;
                cTyp6.Column = 1;
                cTyp6.Styles.add("key", "label70");
                cTyp6.Styles.add("value", "result100Right")

                tst.TestParamCells.push(cTyp6);

                var bps6 = new TestParam();
                bps6.Key = "Baro Setting";
                bps6.Value = "____";
                bps6.Unit = "mb";
                var cBps6 = new TestParamCell(bps6);
                cBps6.Row = 6;
                cBps6.Column = 0;
                cBps6.ColSpan = 2;
                cBps6.Styles.add("value", "result100Right")

                tst.TestParamCells.push(cBps6);

                var seh6 = new TestParam();
                seh6.Key = "Sel. Heading";
                seh6.Value = "____";
                seh6.Unit = "deg";
                var cSeh6 = new TestParamCell(seh6);
                cSeh6.Row = 7;
                cSeh6.Column = 0;
                cSeh6.Styles.add("value", "result100Right")

                tst.TestParamCells.push(cSeh6);

                var sts6 = new TestParam();
                sts6.Key = "Status";
                sts6.Value = "__(_____)";
                var cSts6 = new TestParamCell(sts6);
                cSts6.Row = 7;
                cSts6.Column = 1;
                cSts6.Styles.add("key", "label70");
                cSts6.Styles.add("value", "result100Right")

                tst.TestParamCells.push(cSts6);

                var mfms6 = new TestParam();
                mfms6.Key = "AutoPilot Modes";
                var cMfms6 = new TestParamCell(mfms6);
                cMfms6.Row = 8;
                cMfms6.Column = 0;
                cMfms6.ColSpan = 2;
                cMfms6.Styles.add("key", "labelAutoBold");
                cMfms6.Styles.add("value", "result0");

                tst.TestParamCells.push(cMfms6);

                var ap6 = new TestParam();
                ap6.Key = "Mode bits status";
                ap6.Value = "__(_____)";
                var cAp6 = new TestParamCell(ap6);
                cAp6.Row = 9;
                cAp6.Column = 0;
                cAp6.ColSpan = 2;
                cAp6.Styles.add("key", "label140");

                tst.TestParamCells.push(cAp6);

                var vnav6 = new TestParam();
                vnav6.Key = "AutoPilot (AP)";
                vnav6.Value = "_ (_______)";
                var cVnav6 = new TestParamCell(vnav6);
                cVnav6.Row = 10;
                cVnav6.Column = 0;
                cVnav6.ColSpan = 2;
                cVnav6.Styles.add("key", "label140");

                tst.TestParamCells.push(cVnav6);

                var alth6 = new TestParam();
                alth6.Key = "VNAV";
                alth6.Value = "__ (___________)";
                var cAlth6 = new TestParamCell(alth6);
                cAlth6.Row = 11;
                cAlth6.Column = 0;
                cAlth6.ColSpan = 2;
                cAlth6.Styles.add("key", "label140");

                tst.TestParamCells.push(cAlth6);

                var appm6 = new TestParam();
                appm6.Key = "Alt. Hold (ALT)";
                appm6.Value = "_ (_______)";
                var cAppm6 = new TestParamCell(appm6);
                cAppm6.Row = 12;
                cAppm6.Column = 0;
                cAppm6.ColSpan = 2;
                cAppm6.Styles.add("key", "label140");

                tst.TestParamCells.push(cAppm6);

                var lnavm6 = new TestParam();
                lnavm6.Key = "Approach (APP)";
                lnavm6.Value = "__ (___________)";
                var cLnavm6 = new TestParamCell(lnavm6);
                cLnavm6.Row = 13;
                cLnavm6.Column = 0;
                cLnavm6.ColSpan = 2;
                cLnavm6.Styles.add("key", "label140");

                tst.TestParamCells.push(cLnavm6);

                var lnav6 = new TestParam();
                lnav6.Key = "LNAV";
                lnav6.Value = "__ (___________)";
                var cLnav6 = new TestParamCell(lnav6);
                cLnav6.Row = 14;
                cLnav6.Column = 0;
                cLnav6.ColSpan = 2;
                cLnav6.Styles.add("key", "label140");

                tst.TestParamCells.push(cLnav6);

                newTest.Summaries.push(tst);

                // ------------------------UAT Trajectory Change Test-----------------------------
                var tct = new Test();
                tct.Name = "UAT Trajectory Change Test";

                var avl5 = new TestParam();
                avl5.Key = "Aircraft/Vehicle";
                avl5.Value = "#__";
                var cAvl5 = new TestParamCell(avl5);
                cAvl5.Row = 0;
                cAvl5.Column = 0;
                cAvl5.ColSpan = 2;
                cAvl5.Styles.add("key", "labelAutoBold");
                cAvl5.Styles.add("value", "labelAutoBold");

                tct.TestParamCells.push(cAvl5);

                var add5 = new TestParam();
                add5.Key = "ADDRESS";
                add5.Value = "______ (_) / ________ (_)";
                var cAdd5 = new TestParamCell(add5);
                cAdd5.Row = 1;
                cAdd5.Column = 0;
                cAdd5.ColSpan = 2;
                cAdd5.Styles.add("value", "result128");
                tct.TestParamCells.push(cAdd5);

                var pld5 = new TestParam();
                pld5.Key = "Qualifier";
                pld5.Value = "______";
                var cPld5 = new TestParamCell(pld5);
                cPld5.Row = 2;
                cPld5.Column = 0;

                tct.TestParamCells.push(cPld5);

                var agst5 = new TestParam();
                agst5.Key = "RF Level";
                agst5.Value = "______";
                var cAgst5 = new TestParamCell(agst5);
                cAgst5.Row = 2;
                cAgst5.Column = 1;
                cAgst5.Styles.add("key", "label70");
                cAgst5.Styles.add("value", "result85");

                tct.TestParamCells.push(cAgst5);

                var q5 = new TestParam();
                q5.Key = "Payloads Rcvd";
                q5.Value = "_,_,_,_";
                var cQ5 = new TestParamCell(q5);
                cQ5.Row = 3;
                cQ5.Column = 0;
                cQ5.ColSpan = 2;
                cQ5.Styles.add("value", "result128");
                tct.TestParamCells.push(cQ5);

                var tce5 = new TestParam();
                tce5.Key = "Trajectory Change Element";
                var cTce5 = new TestParamCell(tce5);
                cTce5.Row = 4;
                cTce5.Column = 0;
                cTce5.ColSpan = 2;
                cTce5.Styles.add("key", "label70Bold");
                cTce5.Styles.add("value", "result0");

                tct.TestParamCells.push(cTce5);

                var tcfld5 = new TestParam();
                tcfld5.Key = "TC Field";
                tcfld5.Value = "_________________";
                var cTcfld5 = new TestParamCell(tcfld5);
                cTcfld5.Row = 5;
                cTcfld5.Column = 0;
                cTcfld5.ColSpan = 2;
                cTcfld5.Styles.add("value", "result128");
                tct.TestParamCells.push(cTcfld5);

                newTest.Summaries.push(tct);

                //------------------------RF Link Measurements Screen Suggestions---------S--------------------
                var rft = new Test();
                rft.Name = "UAT RF Test";
                rft.Styles.add("key", "label150");

                var avl4 = new TestParam();
                avl4.Key = "Aircraft/Vehicle";
                avl4.Value = "#__";
                var cAvl4 = new TestParamCell(avl4);
                cAvl4.Row = 0;
                cAvl4.Column = 0;
                cAvl4.ColSpan = 2;
                cAvl4.Styles.add("key", "labelAutoBold");
                cAvl4.Styles.add("value", "labelAutoBold");

                rft.TestParamCells.push(cAvl4);

                var add4 = new TestParam();
                add4.Key = "ADDRESS";
                add4.Value = "______ (_) / ________ (_)";
                var cAdd4 = new TestParamCell(add4);
                cAdd4.Row = 1;
                cAdd4.Column = 0;
                cAdd4.ColSpan = 2;
                cAdd4.Styles.add("key", "label110")
                cAdd4.Styles.add("value", "result128");
                rft.TestParamCells.push(cAdd4);

                var pld4 = new TestParam();
                pld4.Key = "Qualifier";
                pld4.Value = "______";
                var cPld4 = new TestParamCell(pld4);
                cPld4.Row = 2;
                cPld4.Column = 0;
                cPld4.Styles.add("key", "label110")
                cPld4.Styles.add("value", "result85");

                rft.TestParamCells.push(cPld4);

                var agst4 = new TestParam();
                agst4.Key = "RF Level";
                agst4.Value = "______";
                var cAgst4 = new TestParamCell(agst4);
                cAgst4.Row = 2;
                cAgst4.Column = 1;
                cAgst4.Styles.add("key", "label70");
                cAgst4.Styles.add("value", "result85");
                rft.TestParamCells.push(cAgst4);

                var q4 = new TestParam();
                q4.Key = "Payloads Rcvd";
                q5.Value = "_,_,_,_";
                var cQ4 = new TestParamCell(q4);
                cQ4.Row = 3;
                cQ4.Column = 0;
                cQ4.ColSpan = 2;
                cQ4.Styles.add("key", "label110");
                cQ4.Styles.add("value", "result128");
                rft.TestParamCells.push(cQ4);

                var rflm4 = new TestParam();
                rflm4.Key = "978 MHz RF Link Measurements";
                var cRflm4 = new TestParamCell(rflm4);
                cRflm4.Row = 4;
                cRflm4.Column = 0;
                cRflm4.ColSpan = 2;
                cRflm4.Styles.add("key", "label70Bold");
                cRflm4.Styles.add("value", "result0");

                rft.TestParamCells.push(cRflm4);

                var frq4 = new TestParam();
                frq4.Key = "Frequency";
                frq4.Value = "___.___";
                frq4.Unit = "MHz";
                var cFrq4 = new TestParamCell(frq4);
                cFrq4.Row = 5;
                cFrq4.Column = 0;
                cFrq4.ColSpan = 2;

                cFrq4.Styles.add("value", "result135Right");

                rft.TestParamCells.push(cFrq4);

                var pwr4 = new TestParam();
                pwr4.Key = "Power";
                pwr4.Value = "__._";
                pwr4.Unit = "dBm (Medium)";
                var cPwr4 = new TestParamCell(pwr4);
                cPwr4.Row = 6;
                cPwr4.Column = 0;
                cPwr4.ColSpan = 2;
                cPwr4.Styles.add("value", "result135Right");

                rft.TestParamCells.push(cPwr4);

                var ec4 = new TestParam();
                ec4.Key = "Error conditions";
                ec4.Value = "_____________";
                var cEc4 = new TestParamCell(ec4);
                cEc4.Row = 7;
                cEc4.Column = 0;
                cEc4.ColSpan = 2;
                cEc4.Styles.add("value", "result135Right");

                rft.TestParamCells.push(cEc4);

                var pwrdp4 = new TestParam();
                pwrdp4.Key = "Power Drop";
                pwrdp4.Value = "_._";
                pwrdp4.Unit = "dB";
                var cPwrdp4 = new TestParamCell(pwrdp4);
                cPwrdp4.Row = 8;
                cPwrdp4.Column = 0;
                cPwrdp4.ColSpan = 2;
                cPwrdp4.Styles.add("value", "result135Right");

                rft.TestParamCells.push(cPwrdp4);

                var dvn4 = new TestParam();
                dvn4.Key = "Deviation";
                dvn4.Value = "__";
                dvn4.Unit = "%";
                var cDvn4 = new TestParamCell(dvn4);
                cDvn4.Row = 9;
                cDvn4.Column = 0;
                cDvn4.ColSpan = 2;
                cDvn4.Styles.add("value", "result135Right");

                rft.TestParamCells.push(cDvn4);

                var pkdn4 = new TestParam();
                pkdn4.Key = "Peak Deviation";
                pkdn4.Value = "___";
                pkdn4.Unit = "%";
                var cPkdn4 = new TestParamCell(pkdn4);
                cPkdn4.Row = 10;
                cPkdn4.Column = 0;
                cPkdn4.ColSpan = 2;
                cPkdn4.Styles.add("value", "result135Right");

                rft.TestParamCells.push(cPkdn4);

                var veo4 = new TestParam();
                veo4.Key = "Vert Eye Opening";
                veo4.Value = "__";
                veo4.Unit = "%";
                var cVeo4 = new TestParamCell(veo4);
                cVeo4.Row = 11;
                cVeo4.Column = 0;
                cVeo4.ColSpan = 2;
                cVeo4.Styles.add("value", "result135Right");

                rft.TestParamCells.push(cVeo4);

                var heo4 = new TestParam();
                heo4.Key = "Horz Eye Opening";
                heo4.Value = "___";
                heo4.Unit = "%";
                var cHeo4 = new TestParamCell(heo4);
                cHeo4.Row = 12;
                cHeo4.Column = 0;
                cHeo4.ColSpan = 2;
                cHeo4.Styles.add("value", "result135Right");

                rft.TestParamCells.push(cHeo4);

                var mte4 = new TestParam();
                mte4.Key = "Message Time Error";
                mte4.Value = "__.__";
                mte4.Unit = "uS";
                var cMte4 = new TestParamCell(mte4);
                cMte4.Row = 13;
                cMte4.Column = 0;
                cMte4.ColSpan = 2;
                cMte4.Styles.add("value", "result135Right");

                rft.TestParamCells.push(cMte4);

                var uatms4 = new TestParam();
                uatms4.Key = "UAT Message Summary";
                var cUatms4 = new TestParamCell(uatms4);
                cUatms4.Row = 14;
                cUatms4.Column = 0;
                cUatms4.ColSpan = 2;
                cUatms4.Styles.add("key", "labelAutoBold");

                rft.TestParamCells.push(cUatms4);

                var msrcd4 = new TestParam();
                msrcd4.Key = "Message Received";
                msrcd4.Value = "___";
                var cMsrcd4 = new TestParamCell(msrcd4);
                cMsrcd4.Row = 15;
                cMsrcd4.Column = 0;
                cMsrcd4.ColSpan = 2;
                cMsrcd4.Styles.add("key", "label210");
                cMsrcd4.Styles.add("value", "result75Right");

                rft.TestParamCells.push(cMsrcd4);

                var msict4 = new TestParam();
                msict4.Key = "Missing/Incorrect Messages";
                msict4.Value = "_";
                var cMsict4 = new TestParamCell(msict4);
                cMsict4.Row = 16;
                cMsict4.Column = 0;
                cMsict4.ColSpan = 2;
                cMsict4.Styles.add("key", "label210");
                cMsict4.Styles.add("value", "result75Right");

                rft.TestParamCells.push(cMsict4);

                var msslrt4 = new TestParam();
                msslrt4.Key = "Message Success Rate";
                msslrt4.Value = "__";
                msslrt4.Unit = "%";
                var cMsslrt4 = new TestParamCell(msslrt4);
                cMsslrt4.Row = 17;
                cMsslrt4.Column = 0;
                cMsslrt4.ColSpan = 2;
                cMsslrt4.Styles.add("key", "label210");
                cMsslrt4.Styles.add("value", "result75Right");

                rft.TestParamCells.push(cMsslrt4);

                var ctmst4 = new TestParam();
                ctmst4.Key = "Current Message Bit Errors";
                ctmst4.Value = "__";
                var cCtmst4 = new TestParamCell(ctmst4);
                cCtmst4.Row = 18;
                cCtmst4.Column = 0;
                cCtmst4.ColSpan = 2;
                cCtmst4.Styles.add("key", "label210");
                cCtmst4.Styles.add("value", "result75Right");

                rft.TestParamCells.push(cCtmst4);

                var ctmser4 = new TestParam();
                ctmser4.Key = "Message Sequence";
                ctmser4.Value = "__";
                var cCtmser4 = new TestParamCell(ctmser4);
                cCtmser4.Row = 19;
                cCtmser4.Column = 0;
                cCtmser4.ColSpan = 2;
                cCtmser4.Styles.add("key", "label210");
                cCtmser4.Styles.add("value", "result75Right");

                rft.TestParamCells.push(cCtmser4);

                var ctmssq4 = new TestParam();
                ctmssq4.Key = "Message Payloads";
                ctmssq4.Value = "_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _";
                var cCtmssq4 = new TestParamCell(ctmssq4);
                cCtmssq4.Row = 20;
                cCtmssq4.Column = 0;
                cCtmssq4.ColSpan = 2;
                cCtmssq4.Styles.add("value", "result128");

                rft.TestParamCells.push(cCtmssq4);

                newTest.Summaries.push(rft);

                // //------------------------UAT Payload Timing-----------------------------
                // var rft = new Test();
                // rft.Name = "UAT RF Test";

                // var add4 = new TestParam();
                // add4.Key = "ADDRESS";
                // var cAdd4 = new TestParamCell(add4);
                // cAdd4.Row = 0;
                // cAdd4.Column = 0;
                // cAdd4.ColSpan = 2;
                // cAdd4.Styles.add("key", "label110");
                // cAdd4.Styles.add("value", "result128");

                // rft.TestParamCells.push(cAdd4);

                // var addQ4 = new TestParam();
                // addQ4.Key = "Qualifier";
                // var cAddQ4 = new TestParamCell(addQ4);
                // cAddQ4.Row = 1;
                // cAddQ4.Column = 0;
                // cAddQ4.ColSpan = 2;
                // cAddQ4.Styles.add("key", "label110");
                // cAddQ4.Styles.add("value", "result128");

                // rft.TestParamCells.push(cAddQ4);

                // var pld4 = new TestParam();
                // pld4.Key = "Payload Rcvd";
                // var cPld4 = new TestParamCell(pld4);
                // cPld4.Row = 2;
                // cPld4.Column = 0;

                // rft.TestParamCells.push(cPld4);

                // var rfle4 = new TestParam();
                // rfle4.Key = "RF Level";
                // var cRfle4 = new TestParamCell(rfle4);
                // cRfle4.Row = 2;
                // cRfle4.Column = 1;
                // cRfle4.Styles.add("key", "label70");

                // rft.TestParamCells.push(cRfle4);

                // var rflm4 = new TestParam();
                // rflm4.Key = "978 MHz RF Link Measurements";
                // var cRflm4 = new TestParamCell(rflm4);
                // cRflm4.Row = 2;
                // cRflm4.Column = 0;
                // cRflm4.ColSpan = 2;
                // cRflm4.Styles.add("key", "labelAutoBold");
                // cRflm4.Styles.add("value", "result0");

                // rft.TestParamCells.push(cRflm4);

                // var frq4 = new TestParam();
                // frq4.Key = "Frequency";
                // var cFrq4 = new TestParamCell(frq4);
                // cFrq4.Row = 3;
                // cFrq4.Column = 0;
                // cFrq4.ColSpan = 2;
                // cFrq4.Styles.add("key", "label140");
                // cFrq4.Styles.add("value", "result128");

                // rft.TestParamCells.push(cFrq4);

                // var pwr4 = new TestParam();
                // pwr4.Key = "Power";
                // var cPwr4 = new TestParamCell(pwr4);
                // cPwr4.Row = 4;
                // cPwr4.Column = 0;
                // cPwr4.ColSpan = 2;
                // cPwr4.Styles.add("key", "label140");
                // cPwr4.Styles.add("value", "result128");

                // rft.TestParamCells.push(cPwr4);

                // var pwrdp4 = new TestParam();
                // pwrdp4.Key = "Power Droop";
                // var cPwrdp4 = new TestParamCell(pwrdp4);
                // cPwrdp4.Row = 6;
                // cPwrdp4.Column = 0;
                // cPwrdp4.ColSpan = 2;
                // cPwrdp4.Styles.add("key", "label140");
                // cPwrdp4.Styles.add("value", "result128");

                // rft.TestParamCells.push(cPwrdp4);

                // var dvn4 = new TestParam();
                // dvn4.Key = "Deviation";
                // var cDvn4 = new TestParamCell(dvn4);
                // cDvn4.Row = 6;
                // cDvn4.Column = 0;
                // cDvn4.ColSpan = 2;
                // cDvn4.Styles.add("key", "label140");
                // cDvn4.Styles.add("value", "result128");

                // rft.TestParamCells.push(cDvn4);

                // var pkdn4 = new TestParam();
                // pkdn4.Key = "Peak Deviation";
                // var cPkdn4 = new TestParamCell(pkdn4);
                // cPkdn4.Row = 6;
                // cPkdn4.Column = 0;
                // cPkdn4.ColSpan = 2;
                // cPkdn4.Styles.add("key", "label140");
                // cPkdn4.Styles.add("value", "result128");

                // rft.TestParamCells.push(cPkdn4);

                // var veo4 = new TestParam();
                // veo4.Key = "Vert Eye Opening";
                // var cVeo4 = new TestParamCell(veo4);
                // cVeo4.Row = 6;
                // cVeo4.Column = 0;
                // cVeo4.ColSpan = 2;
                // cVeo4.Styles.add("key", "label140");
                // cVeo4.Styles.add("value", "result128");

                // rft.TestParamCells.push(cVeo4);

                // var heo4 = new TestParam();
                // heo4.Key = "Horz Eye Opening";
                // var cHeo4 = new TestParamCell(heo4);
                // cHeo4.Row = 6;
                // cHeo4.Column = 0;
                // cHeo4.ColSpan = 2;
                // cHeo4.Styles.add("key", "label140");
                // cHeo4.Styles.add("value", "result128");

                // rft.TestParamCells.push(cHeo4);

                // var mte4 = new TestParam();
                // mte4.Key = "Message Time Error";
                // var cMte4 = new TestParamCell(mte4);
                // cMte4.Row = 6;
                // cMte4.Column = 0;
                // cMte4.ColSpan = 2;
                // cMte4.Styles.add("key", "label140");
                // cMte4.Styles.add("value", "result128");

                // rft.TestParamCells.push(cMte4);

                // var ums4 = new TestParam();
                // ums4.Key = "UAT Message Summary";
                // var cUms44 = new TestParamCell(ums4);
                // cUms44.Row = 7;
                // cUms44.Column = 0;
                // cUms44.ColSpan = 2;
                // cUms44.Styles.add("key", "labelAutoBold");
                // cUms44.Styles.add("value", "result0");

                // rft.TestParamCells.push(cUms44);

                // var pwrd4 = new TestParam();
                // pwrd4.Key = "State Vector (SV)";
                // var cPwrd4 = new TestParamCell(pwrd4);
                // cPwrd4.Row = 8;
                // cPwrd4.Column = 0;
                // cPwrd4.ColSpan = 2;
                // cPwrd4.Styles.add("key", "label140");
                // cPwrd4.Styles.add("value", "result128");

                // rft.TestParamCells.push(cPwrd4);

                // var frq4 = new TestParam();
                // frq4.Key = "Mode Status (MS)";
                // var cFrq4 = new TestParamCell(frq4);
                // cFrq4.Row = 9;
                // cFrq4.Column = 0;
                // cFrq4.ColSpan = 2;
                // cFrq4.Styles.add("key", "label140");
                // cFrq4.Styles.add("value", "result128");

                // rft.TestParamCells.push(cFrq4);

                // var dvt4 = new TestParam();
                // dvt4.Key = "Aux State Vector (AUX SV)";
                // var cDvt4 = new TestParamCell(dvt4);
                // cDvt4.Row = 10;
                // cDvt4.Column = 0;
                // cDvt4.ColSpan = 2;
                // cDvt4.Styles.add("key", "label140");
                // cDvt4.Styles.add("value", "result128");

                // rft.TestParamCells.push(cDvt4);

                // var pdvt4 = new TestParam();
                // pdvt4.Key = "Target State (TS)";
                // var cPdvt4 = new TestParamCell(pdvt4);
                // cPdvt4.Row = 11;
                // cPdvt4.Column = 0;
                // cPdvt4.ColSpan = 2;
                // cPdvt4.Styles.add("key", "label140");
                // cPdvt4.Styles.add("value", "result128");

                // rft.TestParamCells.push(cPdvt4);

                // var uatms4 = new TestParam();
                // uatms4.Key = "UAT Message Summary";
                // var cUatms4 = new TestParamCell(uatms4);
                // cUatms4.Row = 12;
                // cUatms4.Column = 0;
                // cUatms4.ColSpan = 2;
                // cUatms4.Styles.add("key", "labelAutoBold");
                // cUatms4.Styles.add("value", "result0");

                // rft.TestParamCells.push(cUatms4);

                // var msrcd4 = new TestParam();
                // msrcd4.Key = "Message Received";
                // var cMsrcd4 = new TestParamCell(msrcd4);
                // cMsrcd4.Row = 13;
                // cMsrcd4.Column = 0;
                // cMsrcd4.ColSpan = 2;
                // cMsrcd4.Styles.add("key", "label140");
                // cMsrcd4.Styles.add("value", "result0");

                // rft.TestParamCells.push(cMsrcd4);

                // var msict4 = new TestParam();
                // msict4.Key = "Message Incorrect";
                // var cMsict4 = new TestParamCell(msict4);
                // cMsict4.Row = 14;
                // cMsict4.Column = 0;
                // cMsict4.ColSpan = 2;
                // cMsict4.Styles.add("key", "label140");
                // cMsict4.Styles.add("value", "result0");

                // rft.TestParamCells.push(cMsict4);

                // var msslrt4 = new TestParam();
                // msslrt4.Key = "Message Successful Rate";
                // var cMsslrt4 = new TestParamCell(msslrt4);
                // cMsslrt4.Row = 15;
                // cMsslrt4.Column = 0;
                // cMsslrt4.ColSpan = 2;
                // cMsslrt4.Styles.add("key", "label140");
                // cMsslrt4.Styles.add("value", "result0");

                // rft.TestParamCells.push(cMsslrt4);

                // var ctmst4 = new TestParam();
                // ctmst4.Key = "Current Message Type";
                // var cCtmst4 = new TestParamCell(ctmst4);
                // cCtmst4.Row = 16;
                // cCtmst4.Column = 0;
                // cCtmst4.ColSpan = 2;
                // cCtmst4.Styles.add("key", "label140");
                // cCtmst4.Styles.add("value", "result0");

                // rft.TestParamCells.push(cCtmst4);

                // var ctmser4 = new TestParam();
                // ctmser4.Key = "Current Message Errors";
                // var cCtmser4 = new TestParamCell(ctmser4);
                // cCtmser4.Row = 17;
                // cCtmser4.Column = 0;
                // cCtmser4.ColSpan = 2;
                // cCtmser4.Styles.add("key", "label140");
                // cCtmser4.Styles.add("value", "result0");

                // rft.TestParamCells.push(cCtmser4);

                // var ctmssq4 = new TestParam();
                // ctmssq4.Key = "Current Message Sequence";
                // var cCtmssq4 = new TestParamCell(ctmssq4);
                // cCtmssq4.Row = 18;
                // cCtmssq4.Column = 0;
                // cCtmssq4.ColSpan = 2;
                // cCtmssq4.Styles.add("key", "label140");
                // cCtmssq4.Styles.add("value", "result0");

                // rft.TestParamCells.push(cCtmssq4);

                // newTest.Summaries.push(rft);

                //----------------------------------------------------------------------------------------------------
            }
                break;

            case 'ADS-B SUMMARY': {
                newTest.Styles.add("key", "label110");
                newTest.Styles.add("value", "result85");
                newTest.Styles.add("unit", "unit35Left");

                newTest.Name = test;
                // -----------------------Filter A/v target----------------------------
                newTest.Summaries.push(this.createSelectAvTarget());

                //-----------------------1------------------------
                var adssum1 = new Test();
                adssum1.Name = "ADS-B SUMMARY";

                var aid3 = new TestParam();
                aid3.Key = "AC Id";
                aid3.Value = "_____";
                var cAid3 = new TestParamCell(aid3);
                cAid3.Row = 0;
                cAid3.Column = 0;
                cAid3.ColSpan = 2;
                cAid3.Styles.add("key", "label110");
                cAid3.Styles.add("value", "result100Right");

                adssum1.TestParamCells.push(cAid3);

                var acc3 = new TestParam();
                acc3.Key = "AC Class";
                acc3.Value = "_";
                var cAcc3 = new TestParamCell(acc3);
                cAcc3.Row = 1;
                cAcc3.Column = 0;
                cAcc3.ColSpan = 2;
                cAcc3.Styles.add("key", "label110");
                cAcc3.Styles.add("value", "result100Right");

                adssum1.TestParamCells.push(cAcc3);

                var rply3 = new TestParam();
                rply3.Key = "Reply";
                rply3.Value = "_._";
                rply3.Unit = "%";
                var cRply3 = new TestParamCell(rply3);
                cRply3.Row = 2;
                cRply3.Column = 0;
                cRply3.ColSpan = 2;
                cRply3.Styles.add("key", "label110");
                cRply3.Styles.add("value", "result100Right");

                adssum1.TestParamCells.push(cRply3);

                var pr3 = new TestParam();
                pr3.Key = "Power";
                pr3.Value = "___._";
                pr3.Unit = "dB";
                var cPr3 = new TestParamCell(pr3);
                cPr3.Row = 3;
                cPr3.Column = 0;
                cPr3.ColSpan = 2;
                cPr3.Styles.add("key", "label110");
                cPr3.Styles.add("value", "result100Right");

                adssum1.TestParamCells.push(cPr3);

                var fq3 = new TestParam();
                fq3.Key = "Freq";
                fq3.Value = "_____._";
                fq3.Unit = "MHz";
                var cFq3 = new TestParamCell(fq3);
                cFq3.Row = 4;
                cFq3.Column = 0;
                cFq3.ColSpan = 2;
                cFq3.Styles.add("key", "label110");
                cFq3.Styles.add("value", "result100Right");

                adssum1.TestParamCells.push(cFq3);

                var vc3 = new TestParam();
                vc3.Key = "Velocity";
                vc3.Value = "____";
                vc3.Unit = "Kts";
                var cVc3 = new TestParamCell(vc3);
                cVc3.Row = 5;
                cVc3.Column = 0;
                cVc3.Styles.add("key", "label110");
                cVc3.Styles.add("value", "result100Right");

                adssum1.TestParamCells.push(cVc3);

                var br3 = new TestParam();
                br3.Key = "Bearing";
                br3.Value = "___._";
                br3.Unit = "Deg";
                var cBr3 = new TestParamCell(br3);
                cBr3.Row = 5;
                cBr3.Column = 1;
                cBr3.Styles.add("key", "label70");
                cBr3.Styles.add("value", "result100Right");

                adssum1.TestParamCells.push(cBr3);

                var atd3 = new TestParam();
                atd3.Key = "Altitude";
                atd3.Value = "_____";
                atd3.Unit = "Ft";
                var cAtd3 = new TestParamCell(atd3);
                cAtd3.Row = 6;
                cAtd3.Column = 0;
                cAtd3.Styles.add("value", "result100Right");

                adssum1.TestParamCells.push(cAtd3);

                var rg3 = new TestParam();
                rg3.Key = "Range";
                rg3.Value = "_____";
                rg3.Unit = "Ft";
                var cRg3 = new TestParamCell(rg3);
                cRg3.Row = 6;
                cRg3.Column = 1;
                cRg3.Styles.add("key", "label70");
                cRg3.Styles.add("value", "result100Right");

                adssum1.TestParamCells.push(cRg3);

                var pwr3 = new TestParam();
                pwr3.Key = "Power";
                pwr3.Value = "___._";
                pwr3.Unit = "dBm";
                var cPwr3 = new TestParamCell(pwr3);
                cPwr3.Row = 7;
                cPwr3.Column = 0;
                cPwr3.Styles.add("value", "result100Right");

                adssum1.TestParamCells.push(cPwr3);

                var bro3 = new TestParam();
                bro3.Key = "_____";
                bro3.Value = "_____";
                bro3.Unit = "Mb";
                var cBro3 = new TestParamCell(bro3);
                cBro3.Row = 7;
                cBro3.Column = 1;
                cBro3.Styles.add("key", "label70");
                cBro3.Styles.add("value", "result100Right");

                adssum1.TestParamCells.push(cBro3);

                var frqc3 = new TestParam();
                frqc3.Key = "Frequency";
                frqc3.Value = "_____._";
                frqc3.Unit = "MHz";
                var cFrqc3 = new TestParamCell(frqc3);
                cFrqc3.Row = 8;
                cFrqc3.Column = 0;
                cFrqc3.Styles.add("value", "result100Right");

                adssum1.TestParamCells.push(cFrqc3);

                var lt3 = new TestParam();
                lt3.Key = "Lat";
                lt3.Value = "___._____";
                lt3.Unit = "N";
                var cLt3 = new TestParamCell(lt3);
                cLt3.Row = 8;
                cLt3.Column = 1;
                cLt3.Styles.add("key", "label70");
                cLt3.Styles.add("value", "result100Right");

                adssum1.TestParamCells.push(cLt3);

                var spg3 = new TestParam();
                spg3.Key = "Spacing";
                spg3.Value = "_._";
                spg3.Unit = "ns";
                var cSpg3 = new TestParamCell(spg3);
                cSpg3.Row = 9;
                cSpg3.Column = 0;
                cSpg3.Styles.add("value", "result100Right");

                adssum1.TestParamCells.push(cSpg3);

                var ln3 = new TestParam();
                ln3.Key = "Lon";
                ln3.Value = "____._____";
                ln3.Unit = "W";
                var cLn3 = new TestParamCell(ln3);
                cLn3.Row = 9;
                cLn3.Column = 1;
                cLn3.Styles.add("key", "label70");
                cLn3.Styles.add("value", "result100Right");

                adssum1.TestParamCells.push(cLn3);

                newTest.Summaries.push(adssum1);
                //------------------------2------------------------
                var adssum2 = new Test();
                adssum2.Name = "ADS-B SUMMARY";

                newTest.Summaries.push(adssum2);
                //------------------------3------------------------
                var adssum3 = new Test();
                adssum3.Name = "ADS-B SUMMARY";

                newTest.Summaries.push(adssum3);
                //-----------------------4------------------------
                var adssum4 = new Test();
                adssum4.Name = "ADS-B SUMMARY";

                newTest.Summaries.push(adssum4);
                //------------------------5------------------------
                var adssum5 = new Test();
                adssum5.Name = "ADS-B SUMMARY";

                newTest.Summaries.push(adssum5);
            }
                break;
            case 'ADS-B DATA': {
                newTest.Styles.add("key", "label110");
                newTest.Styles.add("value", "result85");
                newTest.Styles.add("unit", "unit35Left");

                newTest.Name = test;
                // -----------------------Filter A/v target----------------------------
                newTest.Summaries.push(this.createSelectAvTarget());

                //------------------------ADS-B DATA=1-----------------------------
                var adsdata1 = new Test();
                adsdata1.Name = "ADS-B DATA";

                newTest.Summaries.push(adsdata1);
                //------------------------ADS-B DATA=2-----------------------------
                var adsdata2 = new Test();
                adsdata2.Name = "ADS-B DATA";

                newTest.Summaries.push(adsdata2);

            }
                break;
            case 'ADS-B TBD': {
                newTest.Styles.add("key", "label110");
                newTest.Styles.add("value", "result85");
                newTest.Styles.add("unit", "unit35Left");
                // -----------------------Filter A/v target----------------------------
                newTest.Summaries.push(this.createSelectAvTarget());

                newTest.Name = test;
                // //------------------------VSWR------------------------
                // var adstbd = new Test();
                // adstbd.Name = "ADS-B TBD";

                // newTest.Summaries.push(adstbd);
            }

        }
        return newTest;
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
    //             add1.Key = "ADDRESS";
    //             // add1.Value = "______ (_) / ________ (_) [______]";
    //             var cAdd1 = new TestParamCell(add1);
    //             cAdd1.Row = 0;
    //             cAdd1.Column = 0;
    //             cAdd1.ColSpan = 2;

    //             uft.TestParamCells.push(cAdd1);

    //             var q1 = new TestParam();
    //             q1.Key = "Qualifier";
    //             // q1.Value = "0 (ADS-B ICAO)";
    //             var cQ1 = new TestParamCell(q1);
    //             cQ1.Row = 1;
    //             cQ1.Column = 0;
    //             cQ1.ColSpan = 2;

    //             uft.TestParamCells.push(cQ1);

    //             var pld1 = new TestParam();
    //             pld1.Key = "Payload Rcvd";
    //             // pld1.Value = "1,0,2,0";
    //             var cPld1 = new TestParamCell(pld1);
    //             cPld1.Row = 2;
    //             cPld1.Column = 0;

    //             uft.TestParamCells.push(cPld1);

    //             var agst1 = new TestParam();
    //             agst1.Key = "RF Level";
    //             // agst1.Value = "______";
    //             var cAgst1 = new TestParamCell(agst1);
    //             cAgst1.Row = 2;
    //             cAgst1.Column = 1;

    //             uft.TestParamCells.push(cAgst1);

    //             testSection.Summaries.push(uft);
    //             //------------------------UAT Mode Status Test-----------------------------
    //             var mst = new Test();
    //             mst.Name = "UAT Mode Status Test";

    //             var add2 = new TestParam();
    //             add2.Key = "ADDRESS";
    //             // add2.Value = "CA310A (H) / 74361202 (O) [----------]";
    //             var cAdd2 = new TestParamCell(add2);
    //             cAdd2.Row = 0;
    //             cAdd2.Column = 0;
    //             cAdd2.ColSpan = 2;

    //             mst.TestParamCells.push(cAdd2);

    //             var q2 = new TestParam();
    //             q2.Key = "Qualifier";
    //             // q2.Value = "4 (Surface Vehicle)";
    //             var cQ2 = new TestParamCell(q2);
    //             cQ2.Row = 1;
    //             cQ2.Column = 0;
    //             cQ2.ColSpan = 2;

    //             mst.TestParamCells.push(cQ2);

    //             var pld2 = new TestParam();
    //             pld2.Key = "Payload Rcvd";
    //             // pld2.Value = "1,0,0,0";
    //             var cPld2 = new TestParamCell(pld2);
    //             cPld2.Row = 2;
    //             cPld2.Column = 0;

    //             mst.TestParamCells.push(cPld2);

    //             var agst2 = new TestParam();
    //             agst2.Key = "RF Level";
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
    //             add3.Key = "ADDRESS";
    //             // add3.Value ="9CDA34 (H) / 47800213 (O) [N32DL]";
    //             var cAdd3 = new TestParamCell(add3);
    //             cAdd3.Row = 0;
    //             cAdd3.Column = 0;
    //             cAdd3.ColSpan = 2;

    //             usvt.TestParamCells.push(cAdd3);

    //             var q3 = new TestParam();
    //             q3.Key = "Qualifier";
    //             // q3.Value = "1 (ADS-B self-addr)";
    //             var cQ3 = new TestParamCell(q3);
    //             cQ3.Row = 1;
    //             cQ3.Column = 0;
    //             cQ3.ColSpan = 2;

    //             usvt.TestParamCells.push(cQ3);

    //             var pld3 = new TestParam();
    //             pld3.Key = "Payload Rcvd";
    //             // pld3.Value ="1,4,4,4 ";
    //             var cPld3 = new TestParamCell(pld3);
    //             cPld3.Row = 2;
    //             cPld3.Column = 0;

    //             usvt.TestParamCells.push(cPld3);

    //             var agst3 = new TestParam();
    //             agst3.Key = "RF Level";
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
    //             add4.Key = "ADDRESS";
    //             var cAdd4 = new TestParamCell(add4);
    //             cAdd4.Row = 0;
    //             cAdd4.Column = 0;
    //             cAdd4.ColSpan = 2;

    //             tst.TestParamCells.push(cAdd4);

    //             var q4 = new TestParam();
    //             q4.Key = "Qualifier";
    //             var cQ4 = new TestParamCell(q4);
    //             cQ4.Row = 1;
    //             cQ4.Column = 0;
    //             cQ4.ColSpan = 2;

    //             tst.TestParamCells.push(cQ4);

    //             var pld4 = new TestParam();
    //             pld4.Key = "Payload Rcvd";
    //             var cPld4 = new TestParamCell(pld4);
    //             cPld4.Row = 2;
    //             cPld4.Column = 0;

    //             tst.TestParamCells.push(cPld4);

    //             var agst4 = new TestParam();
    //             agst4.Key = "RF Level";
    //             var cAgst4 = new TestParamCell(agst4);
    //             cAgst4.Row = 2;
    //             cAgst4.Column = 1;

    //             tst.TestParamCells.push(cAgst4);

    //             testSection.Summaries.push(tst);

    //             //------------------------UAT Trajectory Change Test-----------------------------
    //             // var tct = new Test();
    //             // tct.Name = "UAT Trajectory Change Test";

    //             // var add5 = new TestParam();
    //             // add5.Key = "ADDRESS";
    //             // var cAdd5 = new TestParamCell(add5);
    //             // cAdd5.Row = 0;
    //             // cAdd5.Column = 0;
    //             // cAdd5.Colspan = 2;

    //             // tct.TestParamCells.push(cAdd5);

    //             // var q5 = new TestParam();
    //             // q5.Key = "Qualifier";
    //             // var cQ5 = new TestParamCell(q5);
    //             // cQ5.Row = 1;
    //             // cQ5.Column = 0;
    //             // cQ5.Colspan = 2;

    //             // tct.TestParamCells.push(cQ5);

    //             // var pld5 = new TestParam();
    //             // pld5.Key = "Payload Rcvd";
    //             // var cPld5 = new TestParamCell(pld5);
    //             // cPld5.Row = 2;
    //             // cPld5.Column = 0;

    //             // tst.TestParamCells.push(cPld5);

    //             // var agst5 = new TestParam();
    //             // agst5.Key = "RF Level";
    //             // var cAgst5 = new TestParamCell(agst5);
    //             // cAgst5.Row = 2;
    //             // cAgst5.Column = 1;

    //             // tst.TestParamCells.push(cAgst5);

    //             // testSection.Summaries.push(tst);
    //             //------------------------UAT Payload Timing-----------------------------
    //             var rft = new Test();
    //             rft.Name = "UAT Payload Timing";

    //             var add6 = new TestParam();
    //             add6.Key = "ADDRESS";
    //             var cAdd6 = new TestParamCell(add6);
    //             cAdd6.Row = 0;
    //             cAdd6.Column = 0;
    //             cAdd6.ColSpan = 2;

    //             rft.TestParamCells.push(cAdd6);

    //             var q6 = new TestParam();
    //             q6.Key = "Qualifier";
    //             var cQ6 = new TestParamCell(q6);
    //             cQ6.Row = 1;
    //             cQ6.Column = 0;
    //             cQ6.ColSpan = 2;

    //             rft.TestParamCells.push(cQ6);

    //             var pld6 = new TestParam();
    //             pld6.Key = "Payload Rcvd";
    //             var cPld6 = new TestParamCell(pld6);
    //             cPld6.Row = 2;
    //             cPld6.Column = 0;

    //             rft.TestParamCells.push(cPld6);

    //             var agst6 = new TestParam();
    //             agst6.Key = "RF Level";
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
    //             add7.Key = "ADDRESS";
    //             var cAdd7 = new TestParamCell(add7);
    //             cAdd7.Row = 0;
    //             cAdd7.Column = 0;
    //             cAdd7.ColSpan = 2;

    //             uati.TestParamCells.push(cAdd7);

    //             var q7 = new TestParam();
    //             q7.Key = "Qualifier";
    //             var cQ7 = new TestParamCell(q7);
    //             cQ7.Row = 1;
    //             cQ7.Column = 0;
    //             cQ7.ColSpan = 2;

    //             uati.TestParamCells.push(cQ7);

    //             var pld7 = new TestParam();
    //             pld7.Key = "Payload Rcvd";
    //             var cPld7 = new TestParamCell(pld7);
    //             cPld7.Row = 2;
    //             cPld7.Column = 0;

    //             uati.TestParamCells.push(cPld7);

    //             var agst7 = new TestParam();
    //             agst7.Key = "RF Level";
    //             var cAgst7 = new TestParamCell(agst7);
    //             cAgst7.Row = 2;
    //             cAgst7.Column = 1;

    //             uati.TestParamCells.push(cAgst7);

    //             testSection.Summaries.push(uati);

    //             //------------------------UAT Mode Status Test-----------------------------
    //             var tisb = new Test();
    //             tisb.Name = "TIS-B";

    //             var add8 = new TestParam();
    //             add8.Key = "ADDRESS";
    //             var cAdd8 = new TestParamCell(add8);
    //             cAdd8.Row = 0;
    //             cAdd8.Column = 0;
    //             cAdd8.ColSpan = 2;

    //             tisb.TestParamCells.push(cAdd8);

    //             var q8 = new TestParam();
    //             q8.Key = "Qualifier";
    //             var cQ8 = new TestParamCell(q8);
    //             cQ8.Row = 1;
    //             cQ8.Column = 0;
    //             cQ8.ColSpan = 2;

    //             tisb.TestParamCells.push(cQ8);

    //             var pld8 = new TestParam();
    //             pld8.Key = "Payload Rcvd";
    //             var cPld8 = new TestParamCell(pld8);
    //             cPld8.Row = 2;
    //             cPld8.Column = 0;

    //             tisb.TestParamCells.push(cPld8);

    //             var agst8 = new TestParam();
    //             agst8.Key = "RF Level";
    //             var cAgst8 = new TestParamCell(agst8);
    //             cAgst8.Row = 2;
    //             cAgst8.Column = 1;

    //             tisb.TestParamCells.push(cAgst8);

    //             testSection.Summaries.push(tisb);

    //             //------------------------UAT RF Link Test-----------------------------
    //             var fisb = new Test();
    //             fisb.Name = "FIS-B";

    //             var add9 = new TestParam();
    //             add9.Key = "ADDRESS";
    //             var cAdd9 = new TestParamCell(add9);
    //             cAdd9.Row = 0;
    //             cAdd9.Column = 0;
    //             cAdd9.ColSpan = 2;

    //             fisb.TestParamCells.push(cAdd9);

    //             var q9 = new TestParam();
    //             q9.Key = "Qualifier";
    //             var cQ9 = new TestParamCell(q9);
    //             cQ9.Row = 1;
    //             cQ9.Column = 0;
    //             cQ9.ColSpan = 2;

    //             fisb.TestParamCells.push(cQ9);

    //             var pld9 = new TestParam();
    //             pld9.Key = "Payload Rcvd";
    //             var cPld9 = new TestParamCell(pld9);
    //             cPld9.Row = 2;
    //             cPld9.Column = 0;

    //             fisb.TestParamCells.push(cPld9);

    //             var agst9 = new TestParam();
    //             agst9.Key = "RF Level";
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
    //             add10.Key = "ADDRESS";
    //             var cAdd10 = new TestParamCell(add10);
    //             cAdd10.Row = 0;
    //             cAdd10.Column = 0;
    //             cAdd10.ColSpan = 2;

    //             urfl.TestParamCells.push(cAdd10);

    //             var q10 = new TestParam();
    //             q10.Key = "Qualifier";
    //             var cQ10 = new TestParamCell(q10);
    //             cQ10.Row = 1;
    //             cQ10.Column = 0;
    //             cQ10.ColSpan = 2;

    //             urfl.TestParamCells.push(cQ10);

    //             var pld10 = new TestParam();
    //             pld10.Key = "Payload Rcvd";
    //             var cPld10 = new TestParamCell(pld10);
    //             cPld10.Row = 2;
    //             cPld10.Column = 0;

    //             urfl.TestParamCells.push(cPld10);

    //             var agst10 = new TestParam();
    //             agst10.Key = "RF Level";
    //             var cAgst10 = new TestParamCell(agst10);
    //             cAgst10.Row = 2;
    //             cAgst10.Column = 1;

    //             urfl.TestParamCells.push(cAgst10);

    //             testSection.Summaries.push(urfl);

    //             //------------------------GPS Status-----------------------------
    //             var gpss = new Test();
    //             gpss.Name = "GPS Status";

    //             var add11 = new TestParam();
    //             add11.Key = "ADDRESS";
    //             var cAdd11 = new TestParamCell(add11);
    //             cAdd11.Row = 0;
    //             cAdd11.Column = 0;
    //             cAdd11.ColSpan = 2;

    //             gpss.TestParamCells.push(cAdd11);

    //             var q11 = new TestParam();
    //             q11.Key = "Qualifier";
    //             var cQ11 = new TestParamCell(q11);
    //             cQ11.Row = 1;
    //             cQ11.Column = 0;
    //             cQ11.ColSpan = 2;

    //             gpss.TestParamCells.push(cQ11);

    //             var pld11 = new TestParam();
    //             pld11.Key = "Payload Rcvd";
    //             var cPld11 = new TestParamCell(pld11);
    //             cPld11.Row = 2;
    //             cPld11.Column = 0;

    //             gpss.TestParamCells.push(cPld11);

    //             var agst11 = new TestParam();
    //             agst11.Key = "RF Level";
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
    //             add12.Key = "ADDRESS";
    //             var cAdd12 = new TestParamCell(add12);
    //             cAdd12.Row = 0;
    //             cAdd12.Column = 0;
    //             cAdd12.ColSpan = 2;

    //             vswr.TestParamCells.push(cAdd12);

    //             var q12 = new TestParam();
    //             q12.Key = "Qualifier";
    //             var cQ12 = new TestParamCell(q12);
    //             cQ12.Row = 1;
    //             cQ12.Column = 0;
    //             cQ12.ColSpan = 2;

    //             vswr.TestParamCells.push(cQ12);

    //             var pld12 = new TestParam();
    //             pld12.Key = "Payload Rcvd";
    //             var cPld12 = new TestParamCell(pld12);
    //             cPld12.Row = 2;
    //             cPld12.Column = 0;

    //             vswr.TestParamCells.push(cPld12);

    //             var agst12 = new TestParam();
    //             agst12.Key = "RF Level";
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


}