import { Injectable } from '@angular/core'


@Injectable()
export class UatTrajectoryChange{

    getTextContents(fileName: string): string{
        var testContent = `{
            "Fields":
                [{
                    "Name":"UatOutDetail"
                },{
                    "Name":"UatTrajectoryChange"
                }],
            "Script":"\\n<ion-row style="height:100%;">
                            \\n<ion-card style="height:100%;">
                            \\n<ion-item>
                                \\n<table class="detailpageTbmargin">
                                \\n<tr>
                                    \\n<th class="detailheading" colspan="2" align="left">UAT Trajectory Change</th>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">AA ID:</td>
                                    \\n<td class="detailResult">@~uatTrajectoryChangeTest.address~</td>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">Address Qualifier:</td>
                                    \\n<td class="detailResult">@~uatTrajectoryChangeTest.addressQualifier~</td>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">Payload Type Codes:</td>
                                    \\n<td class="detailResult">@~uatTrajectoryChangeTest.payloadTypeCodes~</td>
                                \\n</tr>
                                \\n</table>
                                \\n<table class="detailpageTbmargin">
                                \\n<tr>
                                    \\n<th class="detailheading" colspan="2" align="left">State Vector Element</th>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">TC Field:</td>
                                    \\n<td class="detailResult">@~uatTrajectoryChangeTest.tcField~</td>
                                \\n</tr>
                                \\n</table>
                                \\n<table class="detailpageTbmargin">
                                \\n<tr>
                                    \\n<th class="detailheading" colspan="2" align="left">RF Link</th>
                                \\n</tr>
                               \\n<tr>
                                    \\n<td class="detailLabel1">Freq=</td>
                                    \\n<td class="detailResult2">@~uatTrajectoryChangeTest.freq~</td>
                                    \\n<td class="detailLabel3">Power=</td>
                                    \\n<td class="detailResult4">@~uatTrajectoryChangeTest.power~</td>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel1">GPS=</td>
                                    \\n<td class="detailResult2">@~uatTrajectoryChangeTest.gps~</td>
                                    \\n<td class="detailLabel3">RF Link Test=</td>
                                    \\n<td class="detailResult4" style="color:green;">@~uatTrajectoryChangeTest.rfLinkTest~</td>
                                \\n</tr>
                                \\n</table>
                            \\n</ion-item>
                            \\n<ion-grid>
                                \\n<ion-row>
                                \\n<ion-col>
                                    \\n<div align="middle" style="height:380px;padding-top:41%">
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
                                    \\n<button ion-button clear style="font-size:21px;">
                                    \\n<ion-icon name='arrow-back'></ion-icon>
                                    \\n<label style="margin-left:5px">PREVIOUS</label>
                                \\n</button>
                                    \\n</div>
                                \\n</ion-col>
                                \\n<ion-col>
                                    \\n<div align="right">
                                    \\n<button ion-button clear style="font-size:21px;">
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