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
                testsData.SetValue("SUMMARY", "3/A Code", "1536");
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
                testsData.SetValue("SUMMARY", "Result", "PASS");
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
                testsData.SetValue("AIRBORN POSITION", "Result", "PASS");
                //------------------------------------------------------
                testsData.SetValue("AC ID", "Period", "5.0");
                testsData.SetValue("AC ID", "Message Element", "03 04 5D FA 19 AC ED");
                testsData.SetValue("AC ID", "Aircraft ID", "N1246W");
                testsData.SetValue("AC ID", "Emitter Cat", "3 (Large)");
                testsData.SetValue("AC ID", "Result", "PASS");
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
                testsData.SetValue("VELOCITY", "Result", "PASS");
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
                testsData.SetValue("OP STATUS", "Result", "PASS");
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
                testsData.SetValue("TARGET STATE", "Result", "PASS");
                //------------------------------------------------------
                testsData.SetValue("SQUITTER", "Extended Squitter Rate", "0.98");
                testsData.SetValue("SQUITTER", "Measured frequency", "978.021");
                testsData.SetValue("SQUITTER", "Measure power", "-55.0 ");
                testsData.SetValue("SQUITTER", "Error conditions", "None detected");
                testsData.SetValue("SQUITTER", "Result", "PASS");


            }
            case "UAT ADS-B OUT": {

            }

        }
        return testsData;
    }



    // runTest(testName: string, args: Dictionary<string, string>): string {
    //     return "";
    // }


}