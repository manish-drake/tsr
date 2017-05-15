import { Injectable } from '@angular/core'
import { Observable } from 'Rxjs'
import { Http } from '@angular/http';

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
        return this.http.get('../../assets/jsonfiles/vehicles.json')
            .map((res) => res.json())
    }

    runTest(tests: any[]) {

        var SetValue = function (summaryName, key, value) {
            tests.forEach(test => {
                if (test.name == summaryName) {
                    test.rows.forEach(row => {
                        row.forEach(cell => {
                            if (cell.key == key) {
                                cell.value = value;
                            }
                        });
                    });
                }
            });
        }

        tests.forEach(test => {
            switch (test.parent) {
                case "1090 ADS-B OUT": {
                    SetValue("SUMMARY", "Emitter Cat", "3 (Large)");
                    SetValue("SUMMARY", "3/A Code", this.get3ACode());
                    SetValue("SUMMARY", "Emg/Prty", "0 (No Emerg)");
                    SetValue("SUMMARY", "L/W", "10 ( 65 m / 59.5m)");
                    SetValue("SUMMARY", "Latitude", "17.23873°");
                    SetValue("SUMMARY", "Altitude(baro)", "10,000 ");
                    SetValue("SUMMARY", "Longitude", "90.03972°");
                    SetValue("SUMMARY", "Altitude(geom)", "10,341");
                    SetValue("SUMMARY", "Velocity", "390");
                    SetValue("SUMMARY", "UAT IN", "1(Y)");
                    SetValue("SUMMARY", "TCAS Op", "1(Y)");
                    SetValue("SUMMARY", "1090ES IN", "0(N)");
                    SetValue("SUMMARY", "IDENT", "1(Y)");
                    SetValue("SUMMARY", "TCAS RA", "0(N)");
                    SetValue("SUMMARY", "NACp", "3 (< 2nm)");
                    SetValue("SUMMARY", "NACv", "2 (< 3m/s)");
                    SetValue("SUMMARY", "SIL", "1 (< 10-3)");
                    SetValue("SUMMARY", "SDA", "2");
                    SetValue("SUMMARY", "GVA", "2 (< 45m)");
                    SetValue("SUMMARY", "NIC", "7 (RC< 2nmi)");
                    //-----------------------------------------------------
                    SetValue("AIRBORN POSITION", "Period", "500");
                    SetValue("AIRBORN POSITION", "Message Element", "03 04 5D FA 19 AC ED");
                    SetValue("AIRBORN POSITION", "Latitude", "17⁰ 19 21.00 ");
                    SetValue("AIRBORN POSITION", "Longitude", "90⁰ 15 30.00 ");
                    SetValue("AIRBORN POSITION", "Altitude (baro)", this.getAltitude());
                    SetValue("AIRBORN POSITION", "Surveillance Status", "3 (SPI)");
                    SetValue("AIRBORN POSITION", "NIC-SB", "0");
                    SetValue("AIRBORN POSITION", "CPR Format", "0(Even)");
                    SetValue("AIRBORN POSITION", "UTC Sync", "1(Coupled)");
                    //------------------------------------------------------
                    SetValue("AC ID", "Period", "5.0");
                    SetValue("AC ID", "Message Element", "03 04 5D FA 19 AC ED");
                    SetValue("AC ID", "Aircraft ID", "N1246W");
                    SetValue("AC ID", "Emitter Cat", "3 (Large)");
                    //------------------------------------------------------
                    SetValue("VELOCITY", "Period", "500");
                    SetValue("VELOCITY", "Message Element", "03 04 5D FA 19 AC ED");
                    SetValue("VELOCITY", "Heading", "N1246W");
                    SetValue("VELOCITY", "Airspeed", "3 (Large)");
                    SetValue("VELOCITY", "Vertical Rate", "+ 1500");
                    SetValue("VELOCITY", "Geom/Baro Alt", "-123");
                    SetValue("VELOCITY", "ICF", "0 (No chg)");
                    SetValue("VELOCITY", "Airspd Type", "1 (TAS)");
                    SetValue("VELOCITY", "NACv", "2 (< 3 m/s)");
                    SetValue("VELOCITY", "Vert Rate Src", "1 (Baro)");
                    SetValue("VELOCITY", "Hdg Sts", "1 (avail)");
                    //------------------------------------------------------
                    SetValue("OP STATUS", "Period", "5.0");
                    SetValue("OP STATUS", "Message Element", "33 4C D1 5E 23 01 04");
                    SetValue("OP STATUS", "NACp", "7 (<.1 nm)");
                    SetValue("OP STATUS", "NIC-supA", "0");
                    SetValue("OP STATUS", "SDA", "2");
                    SetValue("OP STATUS", "GVA", "2(<45 m)");
                    SetValue("OP STATUS", "SIL", "2 (10-5)");
                    SetValue("OP STATUS", "SILsup", "0");
                    SetValue("OP STATUS", "Airb Cap. Class", "00");
                    SetValue("OP STATUS", "Op. Mode (OM)", "0");
                    SetValue("OP STATUS", "Antenna", "1(Dual)");
                    SetValue("OP STATUS", "Target State Rpt", "0(No)");
                    SetValue("OP STATUS", "TCAS Oper", "1(Yes)");
                    SetValue("OP STATUS", "TCAS RA", "1(Yes)");
                    SetValue("OP STATUS", "1090ES-IN", "0(No)");
                    SetValue("OP STATUS", "UAT-IN", "0(No)");
                    SetValue("OP STATUS", "ATC", "1(Yes)");
                    SetValue("OP STATUS", "IDENT", "0(No)");
                    SetValue("OP STATUS", "Version", "2(260B)");
                    SetValue("OP STATUS", "Traj Chg (TC)", "0(No)");
                    SetValue("OP STATUS", "ARV capable", "1(Yes)");
                    SetValue("OP STATUS", "ADS-R Flag", "0");
                    SetValue("OP STATUS", "Hrz Ref Dir", "1(Mag N)");
                    //------------------------------------------------------
                    SetValue("TARGET STATE", "Sel. Altitude", "7 (<.1 nm)");
                    SetValue("TARGET STATE", "NIC-supA", "0");
                    SetValue("TARGET STATE", "Baro Setting", "950");
                    SetValue("TARGET STATE", "Sel. Heading", "090");
                    SetValue("TARGET STATE", "Status", "1 (Valid)");
                    SetValue("TARGET STATE", "Mode bits status", "1 (Valid)");
                    SetValue("TARGET STATE", "Autopilot (AP)", "1 (Engaged)");
                    SetValue("TARGET STATE", "VNAV", "1 (Not Engaged)");
                    SetValue("TARGET STATE", "Alt. Hold (ALT)", "1 (Engaged)");
                    SetValue("TARGET STATE", "Approach (APP)", "0 (Not Engaged)");
                    SetValue("TARGET STATE", "LNAV", "0 (Not Engaged)");
                    //------------------------------------------------------
                    SetValue("SQUITTER", "Extended Squitter Rate", "0.98");
                    SetValue("SQUITTER", "Measured frequency", "978.021");
                    SetValue("SQUITTER", "Measure power", "-55.0 ");
                    SetValue("SQUITTER", "Error conditions", "None detected");
                }
                case "UAT ADS-B OUT": {
                    SetValue("UAT Mode Status Test", "Interval", "4.1");
                    SetValue("UAT Mode Status Test", "CSID", "0 (Flight Plan ID)");
                    SetValue("UAT Mode Status Test", "Emitter Cat", "3 (Large)");
                    SetValue("UAT Mode Status Test", "3/A Code", this.get3ACode());
                    SetValue("UAT Mode Status Test", "Emg/Prty", "0 (No Emerg)");
                    SetValue("UAT Mode Status Test", "UAT IN", "1 (Y)");
                    SetValue("UAT Mode Status Test", "TCAS Op", "1 (Y)");
                    SetValue("UAT Mode Status Test", "1090ES IN", "0 (N)");
                    SetValue("UAT Mode Status Test", "ATC Svcs", "0 (N)");
                    SetValue("UAT Mode Status Test", "IDENT", "1 (Y)");
                    SetValue("UAT Mode Status Test", "TCAS RA", "0 (N)");
                    SetValue("UAT Mode Status Test", "NACp", "3 (< 2nm)");
                    SetValue("UAT Mode Status Test", "Transmit MSO", "16");
                    SetValue("UAT Mode Status Test", "NACv", "3 (< 2nm)");
                    SetValue("UAT Mode Status Test", "SIL", "1 (< 10-3)");
                    SetValue("UAT Mode Status Test", "SDA", "2");
                    SetValue("UAT Mode Status Test", "GVA", "2 (< 45m)");
                    SetValue("UAT Mode Status Test", "MOPS", "2 (DO-282B)");
                    SetValue("UAT Mode Status Test", "SIL Sup", "1 (per sample)");
                    SetValue("UAT Mode Status Test", "Sgl Ant", "0 (Diversity)");
                    SetValue("UAT Mode Status Test", "NICbaro", "0 (No X-chk)");
                    SetValue("UAT Mode Status Test", "NICsup", "0");
                    //------------------------------------------------------
                    SetValue("UAT State Vector Test-Air", "Interval", "4.1");
                    SetValue("UAT State Vector Test-Air", "Latitude", "17⁰ 19 21.00");
                    SetValue("UAT State Vector Test-Air", "Longitude", "90⁰ 15 30.00");
                    SetValue("UAT State Vector Test-Air", "Altitude", this.getAltitude());
                    SetValue("UAT State Vector Test-Air", "Type", "0 (Pressure)");
                    SetValue("UAT State Vector Test-Air", "Horizontal Velocity", "300 kts N 157 kts W");
                    SetValue("UAT State Vector Test-Air", "Vert. Velocity", "+1,000");
                    SetValue("UAT State Vector Test-Air", "Source", "1 (Baro)");
                    SetValue("UAT State Vector Test-Air", "NIC", "9 (< 75m)");
                    SetValue("UAT State Vector Test-Air", "UTC", "1 (Coupled)");
                    SetValue("UAT State Vector Test-Air", "Uplink Feedback", "6 (Score=31)");
                    SetValue("UAT State Vector Test-Air", "Secondary Altitude", "10,000");
                    //------------------------------------------------------
                    SetValue("UAT State Vector Test-Ground", "Interval", "4.1");
                    SetValue("UAT State Vector Test-Ground", "Latitude", '17⁰ 19 21.00"');
                    SetValue("UAT State Vector Test-Ground", "Longitude", '90⁰ 15 30.00"');
                    SetValue("UAT State Vector Test-Ground", "Altitude", "1,820");
                    SetValue("UAT State Vector Test-Ground", "Type", "1 (Geometric)");
                    SetValue("UAT State Vector Test-Ground", "Groundspeed", "23");
                    SetValue("UAT State Vector Test-Ground", "Track/Heading", "002.7");
                    SetValue("UAT State Vector Test-Ground", "T/H", "2 (MagHdg)");
                    SetValue("UAT State Vector Test-Ground", "A/V L/W", "2 (25m/28.5m)");
                    SetValue("UAT State Vector Test-Ground", "GPS Ant Offset", "4 m Right; 6 m Aft");
                    SetValue("UAT State Vector Test-Ground", "NIC", "9 (< 75m)");
                    SetValue("UAT State Vector Test-Ground", "UTC", "1 (Coupled)");
                    SetValue("UAT State Vector Test-Ground", "Uplink Feedback", "6 (Score=31)");
                    SetValue("UAT State Vector Test-Ground", "Secondary Altitude", "1,830");
                    SetValue("UAT State Vector Test-Ground", "Type ", "0 (Baro)");
                    //------------------------------------------------------
                    SetValue("UAT Target State Test", "Interval", "4.1");
                    SetValue("UAT Target State Test", "Sel. Altitude", "10,000");
                    SetValue("UAT Target State Test", "Type", "0 (MCP/FCU)");
                    SetValue("UAT Target State Test", "Baro Setting", "950");
                    SetValue("UAT Target State Test", "Sel. Heading", "090");
                    SetValue("UAT Target State Test", "Status", "1 (Valid)");
                    SetValue("UAT Target State Test", "Mode bits status", "1 (Valid)");
                    SetValue("UAT Target State Test", "AutoPilot (AP)", "1 (Engaged)");
                    SetValue("UAT Target State Test", "VNAV", "0 (Not Engaged)");
                    SetValue("UAT Target State Test", "Alt. Hold (ALT)", "1 (Engaged)");
                    SetValue("UAT Target State Test", "Approach (APP)", "0 (Not Engaged)");
                    SetValue("UAT Target State Test", "LNAV", "0 (Not Engaged)");
                    //------------------------------------------------------
                    SetValue("UAT Trajectory Change Test", "TC Field", "00000000000000000");
                    //------------------------------------------------------
                    SetValue("UAT RF Test", "Frequency", "978.021");
                    SetValue("UAT RF Test", "Power", "-55.0 ");
                    SetValue("UAT RF Test", "Error conditions", "None detected");
                    SetValue("UAT RF Test", "Power Drop", "0.5");
                    SetValue("UAT RF Test", "Deviation", "99");
                    SetValue("UAT RF Test", "Peak Deviation", "114");
                    SetValue("UAT RF Test", "Vert Eye Opening", "78");
                    SetValue("UAT RF Test", "Horz Eye Opening", "91");
                    SetValue("UAT RF Test", "Message Time Error", "0.12");
                    SetValue("UAT RF Test", "Message Received", "112");
                    SetValue("UAT RF Test", "Missing/Incorrect Messages", "5");
                    SetValue("UAT RF Test", "Message Success Rate", "95");
                    SetValue("UAT RF Test", "Current Message Bit Errors", "0");
                    SetValue("UAT RF Test", "Message Sequence", "OK");
                    SetValue("UAT RF Test", "Message Payloads", "0 1 0 2 0 1 0 2 0 1 0 2 0 1 0 2");

                }
            }
        });
    }

    get3ACode() {
        var text = "";
        var possible = "0123456789";
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }

    getAltitude() {
        var textArray = ['10,000', '10,300', '9,800', '9,300'];
        var randomNumber = (Math.floor(Math.random() * textArray.length)).toString();
        return textArray[randomNumber];
    }

}