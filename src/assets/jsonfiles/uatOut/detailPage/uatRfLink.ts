import { Injectable } from '@angular/core'


@Injectable()
export class UatRfLink{

    getTextContents(fileName: string): string{
        var testContent = `{
            "Fields":
                [{
                    "Name":"UatOutDetail"
                },{
                    "Name":"UatRfLink"
                }],
            "Script":"\\n<ion-row style="height:100%;">
                            \\n<ion-card style="height:100%;">
                            \\n<ion-item>
                                \\n<table class="detailpageTbmargin">
                                \\n<tr>
                                    \\n<th class="detailheading" colspan="2" align="left">UAT RF Link Test</th>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">AA ID:</td>
                                    \\n<td class="detailResult">@~uatDetailRFLinkTest.address~</td>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">Address Qualifier:</td>
                                    \\n<td class="detailResult">@~uatDetailRFLinkTest.addressQualifier~</td>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">Payload Type Codes:</td>
                                    \\n<td class="detailResult">@~uatDetailRFLinkTest.payloadTypeCodes~</td>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">Equipage Class:</td>
                                    \\n<td class="detailResult">@~uatDetailRFLinkTest.equipageClass~</td>
                                \\n</tr>
                                \\n</table>
                                \\n<table class="detailpageTbmargin">
                                \\n<tr>
                                    \\n<th class="detailheading" colspan="3" align="left">RF Link Properties</th>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">TX Power:</td>
                                    \\n<td class="detailRFLinkResult">@~uatDetailRFLinkTest.txPower~</td>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">Power Droop:</td>
                                    \\n<td class="detailRFLinkResult">@~uatDetailRFLinkTest.powerDroop~</td>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">Frequency:</td>
                                    \\n<td class="detailRFLinkResult">@~uatDetailRFLinkTest.frequencyA~</td>
                                    \\n<td class="detailResult">@~uatDetailRFLinkTest.frequencyB~</td>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">Deviation:</td>
                                    \\n<td class="detailRFLinkResult">@~uatDetailRFLinkTest.deviationA~</td>
                                    \\n<td class="detailResult">@~uatDetailRFLinkTest.deviationB~</td>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">Peak Deviation:</td>
                                    \\n<td class="detailRFLinkResult">@~uatDetailRFLinkTest.peakDeviationA~</td>
                                    \\n<td class="detailResult">@~uatDetailRFLinkTest.peakDeviationB~</td>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">Message Timming:</td>
                                    \\n<td class="detailRFLinkResult">@~uatDetailRFLinkTest.messageTimming~</td>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">Eye Openning Ver:</td>
                                    \\n<td class="detailRFLinkResult">@~uatDetailRFLinkTest.eyeOpenningVerA~</td>
                                    \\n<td class="detailResult">@~uatDetailRFLinkTest.eyeOpenningVerB~</td>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">Eye Openning Hor:</td>
                                    \\n<td class="detailRFLinkResult">@~uatDetailRFLinkTest.eyeOpenningHorA~</td>
                                    \\n<td class="detailResult">@~uatDetailRFLinkTest.eyeOpenningHorB~</td>
                                \\n</tr>
                                \\n</table>
                            \\n</ion-item>
                            \\n<ion-grid>
                                \\n<ion-row>
                                \\n<ion-col>
                                    \\n<div align="middle" style="height:240px;padding-top:17%">
                                    \\n<button ion-button outline style="font-size:50px;height:100px;width:100px;border-radius: 100%;border: 3px solid;"> 
                                        \\n<ion-icon name="play"  style="padding-left:8px"></ion-icon>
                                    \\n</button>
                                    \\n</div>
                                \\n</ion-col>
                                \\n</ion-row>
                            \\n</ion-grid>
                            \\n<ion-grid>
                                \\n<ion-row>
                                \\n<ion-col>
                                    \\n<div align="left">
                                    \\n<button ion-button clear style="font-size:18px;">
                                    \\n<ion-icon name='arrow-back'></ion-icon>
                                    \\n<label style="margin-left:5px">PREVIOUS</label>
                                \\n</button>
                                    \\n</div>
                                \\n</ion-col>
                                \\n<ion-col>
                                    \\n<div align="right">
                                    \\n<button ion-button clear style="font-size:18px;">
                                    \\n<label style="margin-right:5px">NEXT</label> 
                                    \\n<ion-icon name='arrow-forward'></ion-icon>
                                \\n</button>
                                    \\n</div>
                               \\n</ion-col>
                                \\n</ion-row>
                            \\n</ion-grid>
                            \\n</ion-card>
                        \\n</ion-row>\\n"
        }`;
        return testContent;
    }
}