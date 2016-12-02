import { Injectable } from '@angular/core'


@Injectable()
export class UatModeStatus{

    getTextContents(fileName: string): string{
        var testContent = `{
            "Fields":
                [{
                    "Name":"UatOutDetail"
                },{
                    "Name":"UatModeStatus"
                }],
            "Script":"\\n<ion-row style="height:100%;">
                            \\n<ion-card style="height:100%;">
                            \\n<ion-item>
                                \\n<table class="detailpageTbmargin">
                                \\n<tr>
                                    \\n<th class="detailheading" colspan="2" align="left">UAT Mode Status</th>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">AA ID:</td>
                                    \\n<td class="detailResult">@~uatModeStatusTest.address~</td>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">Address Qualifier:</td>
                                    \\n<td class="detailResult">@~uatModeStatusTest.addressQualifier~</td>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">Payload Type Codes:</td>
                                    \\n<td class="detailResult">@~uatModeStatusTest.payloadTypeCodes~</td>
                                \\n</tr>
                                \\n</table>
                                \\n<table class="detailpageTbmargin">
                                \\n<tr>
                                    \\n<th class="detailheading" colspan="2" align="left">Mode Status Element</th>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">Emitter Status:</td>
                                    \\n<td class="detailResult">@~uatModeStatusTest.emitterCat~</td>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">Flight Id:</td>
                                    \\n<td class="detailResult">@~uatModeStatusTest.fightID~</td>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">Emer/Prty Status:</td>
                                    \\n<td class="detailResult">@~uatModeStatusTest.epStatus~</td>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">
                                    \\n<span>SIL: </span>
                                    \\n<span>@~uatModeStatusTest.sil~</span>
                                    \\n</td>
                                    \\n<td class="detailResult">
                                    \\n<span>SIL Sup:</span>
                                    \\n<span>@~uatModeStatusTest.silSup~</span>
                                    \\n</td>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">
                                    \\n<span>NAC-P:</span>
                                    \\n<span>@~uatModeStatusTest.nacP~</span>
                                    \\n</td>
                                    \\n<td class="detailResult">
                                    \\n<span>NAC-V:</span>
                                    \\n<span>@~uatModeStatusTest.nacV~</span>
                                    \\n</td>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">
                                    \\n<span>NIC Baro Code:</span>
                                    \\n<span>@~uatModeStatusTest.nicBaroCode~</span>
                                    \\n</td>
                                    \\n<td class="detailResult">
                                    \\n<span>UAT In:</span>
                                    \\n<span>@~uatModeStatusTest.uatIn~</span>
                                    \\n</td>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">
                                    \\n<span>1090ES In:</span>
                                    \\n<span>@~uatModeStatusTest._1090esIn~</span>
                                    \\n</td>
                                    \\n<td class="detailResult">
                                    \\n<span>TCAS:</span>
                                    \\n\\n<span>@~uatModeStatusTest.tcas~</span>
                                    \\n</td>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">
                                    \\n<span>TCAS RA:</span>
                                    \\n<span>@~uatModeStatusTest.tcasRA~</span>
                                    \\n</td>
                                    \\n<td class="detailResult">
                                    \\n<span>Ident:</span>
                                    \\n<span>@~uatModeStatusTest.ident~</span>
                                    \\n</td>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">
                                    \\n<span>ATC Serve:</span>
                                    \\n<span>@~uatModeStatusTest.atcServe~</span>
                                    \\n</td>
                                    \\n<td class="detailResult">
                                    \\n<span>CSID:</span>
                                    \\n<span>@~uatModeStatusTest.csid~</span>
                                    \\n</td>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">
                                    \\n<span>GVA:</span>
                                    \\n<span>@~uatModeStatusTest.gva~</span>
                                    \\n</td>
                                    \\n<td class="detailResult">
                                    \\n<span>ANT:</span>
                                    \\n<span>@~uatModeStatusTest.ant~</span>
                                    \\n</td>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel">
                                    \\n<span>FB Code:</span>
                                    \\n<span>@~uatModeStatusTest.fbCode~</span>
                                    \\n</td>
                                \\n</tr>
                                \\n</table>
                                \\n<table class="detailpageTbmargin">
                                \\n<tr>
                                    \\n<th class="detailheading" colspan="2" align="left">RF Link</th>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel1">Freq=</td>
                                    \\n<td class="detailResult2">@~uatModeStatusTest.freq~</td>
                                    \\n<td class="detailLabel3">Power=</td>
                                    \\n<td class="detailResult4">@~uatModeStatusTest.power~</td>
                                \\n</tr>
                                \\n<tr>
                                    \\n<td class="detailLabel1">GPS=</td>
                                    \\n<td class="detailResult2">@~uatModeStatusTest.gps~</td>
                                    \\n<td class="detailLabel3">RF Link Test=</td>
                                    \\n<td class="detailResult4" style="color:green;">@~uatModeStatusTest.rfLinkTest~</td>
                                \\n</tr>
                                \\n</table>
                            \\n</ion-item>
                            \\n<ion-grid>
                                \\n<ion-row>
                                \\n<ion-col>
                                    \\n<div align="middle">
                                    \\n<button ion-button outline style="font-size:50px;height:100px;width:100px;border-radius: 100%;border: 3px solid;"> 
                                        \\n<ion-icon name="play" style="padding-left:8px"></ion-icon>
                                    \\n</button>
                                    \\n</div>
                                \\n</ion-col>
                                \\n</ion-row>
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