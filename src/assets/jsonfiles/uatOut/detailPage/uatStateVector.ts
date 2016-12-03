import { Injectable } from '@angular/core'


@Injectable()
export class UatStateVector {

    getTextContents(fileName: string): string {
        var testContent = `{
            "Fields":
                [{
                    "Name":"UatOutDetail"
                },{
                    "Name":"UatStateVectorTest"
                }],
            "Script":"\\n<ion-row style="height:100%;">
                            \\n<ion-card style="height:100%;">
                            \\n<ion-item>
                                \\n<table class="detailpageTbmargin">
                                \\n<tr>
                                    \\n<th class="detailheading" colspan="2" align="left">UAT State Vector Test</th>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">AA ID:</td>
                                    \\n<td class="detailResult">@~uatStateVectorTestSubsonic.address~</td>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">Address Qualifier:</td>
                                    \\n<td class="detailResult">@~uatStateVectorTestSubsonic.addressQualifier~</td>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">Payload Type Codes:</td>
                                    \\n<td class="detailResult">@~uatStateVectorTestSubsonic.payloadTypeCodes~</td>
                                \\n</tr>
                                \\n</table>
                                \\n<table class="detailpageTbmargin">
                                \\n<tr>
                                    \\n<th class="detailheading" colspan="2" align="left">State Vector Element</th>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">Air/Ground State:</td>
                                    \\n<td class="detailResult">@~uatStateVectorTestSubsonic.agState~</td>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">Latitude:</td>
                                    \\n<td class="detailResult">@~uatStateVectorTestSubsonic.latitude~</td>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">Longitude:</td>
                                    \\n<td class="detailResult">@~uatStateVectorTestSubsonic.longitude~</td>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">NIC:</td>
                                    \\n<td class="detailResult">@~uatStateVectorTestSubsonic.nic~</td>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">Altitude:</td>
                                    \\n<td class="detailResult">@~uatStateVectorTestSubsonic.altitude~</td>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">Altitude Type:</td>
                                    \\n<td class="detailResult">@~uatStateVectorTestSubsonic.altitudeType~</td>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">North Velocity:</td>
                                    \\n<td class="detailResult">@~uatStateVectorTestSubsonic.horizontalVelocity.nsK~</td>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">East Velocity:</td>
                                    \\n<td class="detailResult">@~uatStateVectorTestSubsonic.horizontalVelocity.ewK~</td>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">Feedback Code:</td>
                                    \\n<td class="detailResult">@~uatStateVectorTestSubsonic.uplinkFeedback~</td>
                                \\n</tr>
                                \\n</table>
                                \\n<table class="detailpageTbmargin">
                                \\n<tr>
                                    \\n<th class="detailheading" colspan="2" align="left">RF Link</th>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel1">Freq=</td>
                                    \\n<td class="detailResult2">@~uatStateVectorTestSubsonic.freq~</td>
                                    \\n<td class="detailLabel3">Power=</td>
                                    \\n<td class="detailResult4">@~uatStateVectorTestSubsonic.power~</td>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel1">GPS=</td>
                                    \\n<td class="detailResult2">@~uatStateVectorTestSubsonic.gps~</td>
                                    \\n<td class="detailLabel3">RF Link Test=</td>
                                    \\n<td class="detailResult4" style="color:green;">@~uatStateVectorTestSubsonic.rfLinkTest~</td>
                                \\n</tr>
                                \\n</table>
                            \\n</ion-item>
                            \\n<ion-grid>
                                \\n<ion-row>
                                \\n<ion-col>
                                    \\n<div align="middle">
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