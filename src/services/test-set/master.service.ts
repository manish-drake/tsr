import { Injectable } from '@angular/core'
import { Dictionary } from '../../common/dictionary'
import { Observable } from 'Rxjs'
import { Http } from '@angular/http';

import { Test } from '../../core/tests/test';

@Injectable()
export class MasterService {

    constructor(
        private http: Http,
    ) { }

    scanTest(): Observable<any> {
        console.log('posting');

        // return this.http.post('http://claganga.homeip.net/cgi-bin/UATCGIServer',
        // {
        //     "request":
        //     {
        //         "version": 2, "message": 8196, "params":
        //         {
        //         }
        //     }
        // })
        // .map((res) => {
        //     return res.json();
        // })

        //Return data from assets
        return this.http.get('assets/jsonfiles/vehicles.json')
            .map((res) => res.json())
    }

    runTest(testsData: Test) {

        switch (testsData.Name) {
            case "1090 ADS-B OUT": {
                testsData.SetValue("SUMMARY", "Flight ID", "N1246W");
                testsData.SetValue("SUMMARY", "Mode S Addr", "2345AA");
                testsData.SetValue("SUMMARY", "Emitter Cat", "3 (Large)");
                testsData.SetValue("SUMMARY", "3/A Code", this.get3ACode());
                testsData.SetValue("SUMMARY", "Emg/Prty", "0 (No Emerg)");
                testsData.SetValue("SUMMARY", "L/W", "10 ( 65 m / 59.5m)");
                testsData.SetValue("SUMMARY", "Latitude", "17.23873°");
                testsData.SetValue("SUMMARY", "Altitude(baro)", "10,000 ");
                testsData.SetValue("SUMMARY", "Longitude", "90.03972°");
                testsData.SetValue("SUMMARY", "Altitude(geom)", "10,341");
                testsData.SetValue("SUMMARY", "Velocity", "390");
                testsData.SetValue("SUMMARY", "UAT IN", "1(Y)");
                testsData.SetValue("SUMMARY", "TCAS Op", "1(Y)");
                testsData.SetValue("SUMMARY", "1090ES IN", "0(N)");
                testsData.SetValue("SUMMARY", "IDENT", "1(Y)");
                testsData.SetValue("SUMMARY", "TCAS RA", "0(N)");
                testsData.SetValue("SUMMARY", "NACp", "3 (< 2nm)");
                testsData.SetValue("SUMMARY", "NACv", "2 (< 3m/s)");
                testsData.SetValue("SUMMARY", "SIL", "1 (< 10-3)");
                testsData.SetValue("SUMMARY", "SDA", "2");
                testsData.SetValue("SUMMARY", "GVA", "2 (< 45m)");
                testsData.SetValue("SUMMARY", "NIC", "7 (RC< 2nmi)");
                //-----------------------------------------------------
                testsData.SetValue("AIRBORN POSITION", "Period", "500");
                testsData.SetValue("AIRBORN POSITION", "Message Element", "03 04 5D FA 19 AC ED");
                testsData.SetValue("AIRBORN POSITION", "Latitude", "17⁰ 19 21.00 ");
                testsData.SetValue("AIRBORN POSITION", "Longitude", "90⁰ 15 30.00 ");
                testsData.SetValue("AIRBORN POSITION", "Altitude (baro)", "10,000");
                testsData.SetValue("AIRBORN POSITION", "Surveillance Status", "3 (SPI)");
                testsData.SetValue("AIRBORN POSITION", "NIC-SB", "0");
                testsData.SetValue("AIRBORN POSITION", "CPR Format", "0(Even)");
                testsData.SetValue("AIRBORN POSITION", "UTC Sync", "1(Coupled)");
                //------------------------------------------------------
                testsData.SetValue("AC ID", "Period", "5.0");
                testsData.SetValue("AC ID", "Message Element", "03 04 5D FA 19 AC ED");
                testsData.SetValue("AC ID", "Aircraft ID", "N1246W");
                testsData.SetValue("AC ID", "Emitter Cat", "3 (Large)");
                //------------------------------------------------------
                testsData.SetValue("VELOCITY", "Period", "500");
                testsData.SetValue("VELOCITY", "Message Element", "03 04 5D FA 19 AC ED");
                testsData.SetValue("VELOCITY", "Heading", "N1246W");
                testsData.SetValue("VELOCITY", "Airspeed", "3 (Large)");
                testsData.SetValue("VELOCITY", "Vertical Rate", "+ 1500");
                testsData.SetValue("VELOCITY", "Geom/Baro Alt", "-123");
                testsData.SetValue("VELOCITY", "ICF", "0 (No chg)");
                testsData.SetValue("VELOCITY", "Airspd Type", "1 (TAS)");
                testsData.SetValue("VELOCITY", "NACv", "2 (< 3 m/s)");
                testsData.SetValue("VELOCITY", "Vert Rate Src", "1 (Baro)");
                testsData.SetValue("VELOCITY", "Hdg Sts", "1 (avail)");
                //------------------------------------------------------
                testsData.SetValue("OP STATUS", "Period", "5.0");
                testsData.SetValue("OP STATUS", "Message Element", "33 4C D1 5E 23 01 04");
                testsData.SetValue("OP STATUS", "NACp", "7 (<.1 nm)");
                testsData.SetValue("OP STATUS", "NIC-supA", "0");
                testsData.SetValue("OP STATUS", "SDA", "2");
                testsData.SetValue("OP STATUS", "GVA", "2(<45 m)");
                testsData.SetValue("OP STATUS", "SIL", "2 (10-5)");
                testsData.SetValue("OP STATUS", "SILsup", "0");
                testsData.SetValue("OP STATUS", "Airb Cap. Class", "00");
                testsData.SetValue("OP STATUS", "Op. Mode (OM)", "0");
                testsData.SetValue("OP STATUS", "Antenna", "1(Dual)");
                testsData.SetValue("OP STATUS", "Target State Rpt", "0(No)");
                testsData.SetValue("OP STATUS", "TCAS Oper", "1(Yes)");
                testsData.SetValue("OP STATUS", "TCAS RA", "1(Yes)");
                testsData.SetValue("OP STATUS", "1090ES-IN", "0(No)");
                testsData.SetValue("OP STATUS", "UAT-IN", "0(No)");
                testsData.SetValue("OP STATUS", "ATC", "1(Yes)");
                testsData.SetValue("OP STATUS", "IDENT", "0(No)");
                testsData.SetValue("OP STATUS", "Version", "2(260B)");
                testsData.SetValue("OP STATUS", "Traj Chg (TC)", "0(No)");
                testsData.SetValue("OP STATUS", "ARV capable", "1(Yes)");
                testsData.SetValue("OP STATUS", "ADS-R Flag", "0");
                testsData.SetValue("OP STATUS", "Hrz Ref Dir", "1(Mag N)");
                //------------------------------------------------------
                testsData.SetValue("TARGET STATE", "Sel. Altitude", "7 (<.1 nm)");
                testsData.SetValue("TARGET STATE", "NIC-supA", "0");
                testsData.SetValue("TARGET STATE", "Baro Setting", "950");
                testsData.SetValue("TARGET STATE", "Sel. Heading", "090");
                testsData.SetValue("TARGET STATE", "Status", "1 (Valid)");
                testsData.SetValue("TARGET STATE", "Mode bits status", "1 (Valid)");
                testsData.SetValue("TARGET STATE", "Autopilot (AP)", "1 (Engaged)");
                testsData.SetValue("TARGET STATE", "VNAV", "1 (Not Engaged)");
                testsData.SetValue("TARGET STATE", "Alt. Hold (ALT)", "1 (Engaged)");
                testsData.SetValue("TARGET STATE", "Approach (APP)", "0 (Not Engaged)");
                testsData.SetValue("TARGET STATE", "LNAV", "0 (Not Engaged)");
                //------------------------------------------------------
                testsData.SetValue("SQUITTER", "Extended Squitter Rate", "0.98");
                testsData.SetValue("SQUITTER", "Measured frequency", "978.021");
                testsData.SetValue("SQUITTER", "Measure power", "-55.0 ");
                testsData.SetValue("SQUITTER", "Error conditions", "None detected");


            }
            case "UAT ADS-B OUT": {
                testsData.SetValue("UAT Mode Status Test", "Interval", "4.1");
                testsData.SetValue("UAT Mode Status Test", "CSID", "0 (Flight Plan ID)");
                testsData.SetValue("UAT Mode Status Test", "Emitter Cat", "3 (Large)");
                testsData.SetValue("UAT Mode Status Test", "3/A Code", "1536");
                testsData.SetValue("UAT Mode Status Test", "Emg/Prty", "0 (No Emerg)");
                testsData.SetValue("UAT Mode Status Test", "UAT IN", "1 (Y)");
                testsData.SetValue("UAT Mode Status Test", "TCAS Op", "1 (Y)");
                testsData.SetValue("UAT Mode Status Test", "1090ES IN", "0 (N)");
                testsData.SetValue("UAT Mode Status Test", "ATC Svcs", "0 (N)");
                testsData.SetValue("UAT Mode Status Test", "IDENT", "1 (Y)");
                testsData.SetValue("UAT Mode Status Test", "TCAS RA", "0 (N)");
                testsData.SetValue("UAT Mode Status Test", "NACp", "3 (< 2nm)");
                testsData.SetValue("UAT Mode Status Test", "Transmit MSO", "16");
                testsData.SetValue("UAT Mode Status Test", "NACv", "3 (< 2nm)");
                testsData.SetValue("UAT Mode Status Test", "SIL", "1 (< 10-3)");
                testsData.SetValue("UAT Mode Status Test", "SDA", "2");
                testsData.SetValue("UAT Mode Status Test", "GVA", "2 (< 45m)");
                testsData.SetValue("UAT Mode Status Test", "MOPS", "2 (DO-282B)");
                testsData.SetValue("UAT Mode Status Test", "SIL Sup", "1 (per sample)");
                testsData.SetValue("UAT Mode Status Test", "Sgl Ant", "0 (Diversity)");
                testsData.SetValue("UAT Mode Status Test", "NICbaro", "0 (No X-chk)");
                testsData.SetValue("UAT Mode Status Test", "NICsup", "0");
                //------------------------------------------------------
                testsData.SetValue("UAT State Vector Test-Air", "Interval", "4.1");
                testsData.SetValue("UAT State Vector Test-Air", "Latitude", "17⁰ 19 21.00");
                testsData.SetValue("UAT State Vector Test-Air", "Longitude", "90⁰ 15 30.00");
                testsData.SetValue("UAT State Vector Test-Air", "Altitude", "10,000");
                testsData.SetValue("UAT State Vector Test-Air", "Type", "0 (Pressure)");
                testsData.SetValue("UAT State Vector Test-Air", "Horizontal Velocity", "300 kts N 157 kts W");
                testsData.SetValue("UAT State Vector Test-Air", "Vert. Velocity", "+1,000");
                testsData.SetValue("UAT State Vector Test-Air", "Source", "1 (Baro)");
                testsData.SetValue("UAT State Vector Test-Air", "NIC", "9 (< 75m)");
                testsData.SetValue("UAT State Vector Test-Air", "UTC", "1 (Coupled)");
                testsData.SetValue("UAT State Vector Test-Air", "Uplink Feedback", "6 (Score=31)");
                testsData.SetValue("UAT State Vector Test-Air", "Secondary Altitude", "10,000");
                //------------------------------------------------------
                testsData.SetValue("UAT State Vector Test-Ground", "Interval", "4.1");
                testsData.SetValue("UAT State Vector Test-Ground", "Latitude", '17⁰ 19 21.00"');
                testsData.SetValue("UAT State Vector Test-Ground", "Longitude", '90⁰ 15 30.00"');
                testsData.SetValue("UAT State Vector Test-Ground", "Altitude", "1,820");
                testsData.SetValue("UAT State Vector Test-Ground", "Type", "1 (Geometric)");
                testsData.SetValue("UAT State Vector Test-Ground", "Groundspeed", "23");
                testsData.SetValue("UAT State Vector Test-Ground", "Track/Heading", "002.7");
                testsData.SetValue("UAT State Vector Test-Ground", "T/H", "2 (MagHdg)");
                testsData.SetValue("UAT State Vector Test-Ground", "A/V L/W", "2 (25m/28.5m)");
                testsData.SetValue("UAT State Vector Test-Ground", "GPS Ant Offset", "4 m Right; 6 m Aft");
                testsData.SetValue("UAT State Vector Test-Ground", "NIC", "9 (< 75m)");
                testsData.SetValue("UAT State Vector Test-Ground", "UTC", "1 (Coupled)");
                testsData.SetValue("UAT State Vector Test-Ground", "Uplink Feedback", "6 (Score=31)");
                testsData.SetValue("UAT State Vector Test-Ground", "Secondary Altitude", "1,830");
                testsData.SetValue("UAT State Vector Test-Ground", "Type ", "0 (Baro)");
                //------------------------------------------------------
                testsData.SetValue("UAT Target State Test", "Interval", "4.1");
                testsData.SetValue("UAT Target State Test", "Sel. Altitude", "10,000");
                testsData.SetValue("UAT Target State Test", "Type", "0 (MCP/FCU)");
                testsData.SetValue("UAT Target State Test", "Baro Setting", "950");
                testsData.SetValue("UAT Target State Test", "Sel. Heading", "090");
                testsData.SetValue("UAT Target State Test", "Status", "1 (Valid)");
                testsData.SetValue("UAT Target State Test", "Mode bits status", "1 (Valid)");
                testsData.SetValue("UAT Target State Test", "AutoPilot (AP)", "1 (Engaged)");
                testsData.SetValue("UAT Target State Test", "VNAV", "0 (Not Engaged)");
                testsData.SetValue("UAT Target State Test", "Alt. Hold (ALT)", "1 (Engaged)");
                testsData.SetValue("UAT Target State Test", "Approach (APP)", "0 (Not Engaged)");
                testsData.SetValue("UAT Target State Test", "LNAV", "0 (Not Engaged)");
                //------------------------------------------------------
                testsData.SetValue("UAT Trajectory Change Test", "TC Field", "00000000000000000");
                //------------------------------------------------------
                testsData.SetValue("UAT RF Test", "Frequency", "978.021");
                testsData.SetValue("UAT RF Test", "Power", "-55.0 ");
                testsData.SetValue("UAT RF Test", "Error conditions", "None detected");
                testsData.SetValue("UAT RF Test", "Power Drop", "0.5");
                testsData.SetValue("UAT RF Test", "Deviation", "99");
                testsData.SetValue("UAT RF Test", "Peak Deviation", "114");
                testsData.SetValue("UAT RF Test", "Vert Eye Opening", "78");
                testsData.SetValue("UAT RF Test", "Horz Eye Opening", "91");
                testsData.SetValue("UAT RF Test", "Message Time Error", "0.12");
                testsData.SetValue("UAT RF Test", "Message Received", "112");
                testsData.SetValue("UAT RF Test", "Missing/Incorrect Messages", "5");
                testsData.SetValue("UAT RF Test", "Message Success Rate", "95");
                testsData.SetValue("UAT RF Test", "Current Message Bit Errors", "0");
                testsData.SetValue("UAT RF Test", "Message Sequence", "OK");
                testsData.SetValue("UAT RF Test", "Message Payloads", "0 1 0 2 0 1 0 2 0 1 0 2 0 1 0 2");

            }
        }
        return testsData;
    }

    get3ACode() {
        var text = "";
        var possible = "0123456789";
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }



    // runTest(testName: string, args: Dictionary<string, string>): string {
    //     return "";
    // }


}