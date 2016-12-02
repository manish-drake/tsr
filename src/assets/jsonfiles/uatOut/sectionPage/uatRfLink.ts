import { Injectable } from '@angular/core'


@Injectable()
export class UatRfLink{

    getTextContents(fileName: string): string{
        var testContent = `{
            "Fields":
                [{
                    "Name":"UatOutSection"
                },{
                    "Name":"UatRfLink"
                }],
            "Script":"\\n<ion-card (click)=" openDetail() " style="width:97%;height:100%;">
                        \\n<ion-grid style="width:100%;height:100%;">
                            \\n<ion-row>
                            \\n<ion-col>
                                \\n<div align="right">
                                \\n<label style="font-size:18;font-weight: bold;">6</label>
                                \\n</div>
                            \\n</ion-col>
                            \\n</ion-row>
                            \\n<ion-row>
                            \\n<ion-col>
                                \\n<div align="center " style="height:70px;padding-top:10px;">
                                <label style="font-size:18;font-weight: bold;">UAT RF LINK TEST</label>
                                \\n\\n</div>
                            \\n</ion-col>
                            \\n</ion-row>
                            \\n<ion-row>
                            \\n<ion-col>
                                \\n<span style="font-size:18">Address: 2345AA;</span>
                                \\n<span style="font-size:18">Addr Qual: ADS-B ICAO (0);</span>                
                            \\n</ion-col>
                            \\n</ion-row>
                            \\n<ion-row>
                            \\n<ion-col>                
                                \\n<span style="font-size:18">Payload: 0,1;</span>
                                \\n<span style="font-size:18">Power: -55 dB;</span>
                                \\n<span style="font-size:18">RF Link: Pass;</span>                
                            \\n</ion-col>
                            \\n</ion-row>
                            \\n<ion-row>
                            \\n<ion-col>
                                \\n<span style="font-size:18">GPS: Sync</span>
                            \\n</ion-col>
                            \\n</ion-row>
                        \\n</ion-grid>
                        \\n</ion-card>\\n"
        }`;
        return testContent;
    }
}