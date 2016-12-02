import { Injectable } from '@angular/core'


@Injectable()
export class UatTargetState{

    getTextContents(fileName: string): string{
        var testContent = `{
            "Fields":
                [{
                    "Name":"UatOutDetail"
                },{
                    "Name":"UatTargetState"
                }],
            "Script":"\\n<ion-row style="height:100%;">
                            \\n<ion-card style="height:100%;">
                            \\n<ion-item>
                                \\n<table class="detailpageTbmargin">
                                \\n<tr>
                                    \\n<th class="detailheading" colspan="2" align="left">UAT Target State Test</th>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">AA ID:</td>
                                    \\n<td class="detailResult">@~uatTargetStateTest.address~</td>
                                \\n</tr>
                                \\n<tr>
                                   \\n<td class="detailLabel">Address Qualifier:</td>
                                   \\n<td class="detailResult">@~uatTargetStateTest.addressQualifier~</td>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">Payload Type Codes:</td>
                                    \\n<td class="detailResult">@~uatTargetStateTest.payloadTypeCodes~</td>
                                \\n</tr>
                                \\n</table>
                                \\n<table class="detailpageTbmargin">
                                \\n<tr>
                                    \\n<th class="detailheading" colspan="2" align="left">Target State Element</th>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">Selected Alt Type:</td>
                                    \\n<td class="detailResult">@~uatTargetStateTest.selectedAltType~</td>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">Selected Altitude:</td>
                                    \\n<td class="detailResult">@~uatTargetStateTest.selectedAltitude~</td>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">Baro Press Setting:</td>
                                    \\n<td class="detailResult">@~uatTargetStateTest.baroPressSetting~</td>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">Seleced Heading:</td>
                                    \\n<td class="detailResult">@~uatTargetStateTest.selecedHeading~</td>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">MCP/FCU M Status:</td>
                                    \\n<td class="detailResult">@~uatTargetStateTest.mfStatus~</td>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">AutoPilot:</td>
                                    \\n<td class="detailResult">@~uatTargetStateTest.autoPilot~</td>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">VNAV:</td>
                                    \\n<td class="detailResult">@~uatTargetStateTest.vnav~</td>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">Altitude Hold:</td>
                                    \\n<td class="detailResult">@~uatTargetStateTest.altitudeHold~</td>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">Approach Mode:</td>
                                    \\n<td class="detailResult">@~uatTargetStateTest.approachMode~</td>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel"> LNAV Mode:</td>
                                    \\n<td class="detailResult">@~uatTargetStateTest.lnavMode~</td>
                                \\n</tr>
                                \\n</table>
                                \\n<table class="detailpageTbmargin">
                                \\n<tr>
                                    \\n<th class="detailheading" colspan="2" align="left">RF Link</th>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel1">Freq=</td>
                                    \\n<td class="detailResult2">@~uatTargetStateTest.freq~</td>
                                    \\n<td class="detailLabel3">Power=</td>
                                    \\n<td class="detailResult4">@~uatTargetStateTest.power~</td>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel1">GPS=</td>
                                    \\n<td class="detailResult2">@~uatTargetStateTest.gps~</td>
                                    \\n<td class="detailLabel3">RF Link Test=</td>
                                    \\n<td class="detailResult4" style="color:green;">@~uatTargetStateTest.rfLinkTest~</td>
                                \\n</tr>
                                \\n</table>
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
                            \\n</ion-item>          
                            \\n</ion-card>
                        \\n</ion-row>\\n"
         }`;
        return testContent;
    }
}