import { Injectable } from '@angular/core'


@Injectable()
export class UATSummary {

    getTextContents(fileName: string): string {
        var testContent = `{
            "Fields":
                [{
                    "Name":"UatOutDetail"
                },{
                    "Name":"UATSummary"
                }],
          "Script":"\\n<ion-row style="height:100%;">
                        \\n<ion-card style="height:930px;">
                            \\n<ion-item>
                                \\n<table class="detailpageTbmargin">
                                    \\n<tr>
                                        \\n<th class="detailheading" colspan="2" align="left">UAT Summary</th>
                                    \\n</tr>
                                    \\n<tr>
                                        \\n<td class="detailLabel">AA ID:</td>
                                        \\n<td class="detailResult">@~uatDetailSummary.address~</td>
                                        \\n</tr>
                                    \\n<tr>
                                        \\n<td class="detailLabel">Address Qualifier:</td>
                                        \\n<td class="detailResult">@~uatDetailSummary.addressQualifier~</td>
                                    \\n</tr>
                                    \\n<tr>
                                        \\n<td class="detailLabel">Payload Type Codes:</td>
                                        \\n<td class="detailResult">@~uatDetailSummary.payloadTypeCodes~</td>
                                    \\n</tr>
                                    \\n</table>
                                    \\n<table class="detailpageTbmargin">
                                    \\n<tr>
                                        \\n<th class="detailheading" colspan="3" align="left">Element Summary Data</th>
                                    \\n</tr>
                                    \\n<tr>
                                        \\n<td class="detailLabel">Latitude:</td>
                                        \\n<td class="detailSummaryResult">@~uatDetailSummary.latitude~</td>
                                    \\n</tr>
                                    \\n<tr>
                                        \\n<td class="detailLabel">Longitude:</td>
                                        \\n<td class="detailSummaryResult">@~uatDetailSummary.longitude~</td>
                                    \\n</tr>
                                    \\n<tr>
                                        \\n<td class="detailLabel">A/G State: @~uatDetailSummary.agState~</td>
                                        \\n<td class="detailSummaryResult">N Vel: @~uatDetailSummary.nVel~</td>
                                    \\n<td class="detailResult">E Vel: @~uatDetailSummary.eVel~</td>
                                    \\n</tr>
                                    \\n<tr>
                                        \\n<td class="detailLabel">Emit Cat: @~uatDetailSummary.emitCat~</td>
                                        \\n<td class="detailSummaryResult">ID: @~uatDetailSummary.id~</td>
                                        \\n<td class="detailResult">Emer: @~uatDetailSummary.emer~</td>
                                    \\n</tr>
                                    \\n<tr>
                                        \\n<td class="detailLabel">SIL: @~uatDetailSummary.sil~</td>
                                        \\n<td class="detailSummaryResult">SIL-S: @~uatDetailSummary.silS~</td>
                                        \\n<td class="detailResult">NAC-P: @~uatDetailSummary.nacP~</td>
                                    \\n</tr>
                                    \\n<tr>
                                        \\n<td class="detailLabel">NAC-V: @~uatDetailSummary.nacV~</td>
                                        \\n<td class="detailSummaryResult">NIC Baro: @~uatDetailSummary.nicBaro~</td>
                                        \\n<td class="detailRFLinkResult">UAT In: @~uatDetailSummary.uatIn~</td>
                                    \\n</tr>
                                    \\n<tr>
                                        \\n<td class="detailLabel">1090ES In: @~uatDetailSummary._1090esIn~</td>
                                        \\n<td class="detailSummaryResult">TCAS: @~uatDetailSummary.tcas~</td>
                                        \\n<td class="detailResult">TCAS RA: @~uatDetailSummary.tcasRA~</td>
                                    \\n</tr>
                                    \\n<tr>
                                        \\n<td class="detailLabel">Ident: @~uatDetailSummary.ident~</td>
                                        \\n<td class="detailSummaryResult">ATC Serv: @~uatDetailSummary.atcServ~</td>
                                        \\n<td class="detailResult">CSID: @~uatDetailSummary.csid~</td>
                                    \\n</tr>
                                    \\n<tr>
                                        \\n<td class="detailLabel">GVA: @~uatDetailSummary.gva~</td>
                                        \\n<td class="detailSummaryResult">ANT: @~uatDetailSummary.ant~</td>
                                        \\n<td class="detailResult">FB Code: @~uatDetailSummary.fbCode~</td>
                                    \\n</tr>
                                    \\n</table>
                                    \\n<table class="detailpageTbmargin">
                                    \\n<tr>
                                        \\n<th class="detailheading" colspan="2" align="left">RF Link</th>
                                    \\n</tr>
                                    \\n<tr>
                                        \\n<td class="detailLabel1">Freq=</td>
                                        \\n<td class="detailResult2">@~uatDetailSummary.freq~</td>
                                        \\n<td class="detailLabel3">Power=</td>
                                        \\n<td class="detailResult4">@~uatDetailSummary.power~</td>
                                    \\n</tr>
                                    \\n<tr>
                                        \\n<td class="detailLabel1">GPS=</td>
                                        \\n<td class="detailResult2">@~uatDetailSummary.gps~</td>
                                        \\n<td class="detailLabel3">RF Link Test=</td>
                                        \\n<td class="detailResult4" style="color:green;">@~uatDetailSummary.rfLinkTest~</td>
                                    \\n</tr>
                                    \\n</table>
                                \\n</ion-item>
                                \\n<ion-grid>
                                    \\n<ion-row>
                                    \\n<ion-col>
                                        \\n<div align="middle" style="height:110px;">
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