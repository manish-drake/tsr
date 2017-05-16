import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the AviationHistoryModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'aviation-history-modal',
  templateUrl: 'aviation-history-modal.html',
})
export class AviationHistoryModal {

  constructor(private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AviationHistoryModal');
  }

  dataList: any[] = [
    {date: "May 12 2017 13:46:23", user: "Operator 1"},
    {date: "May 12 2017 13:46:55", user: "Operator 1"},
    {date: "May 13 2017 06:13:07", user: "Operator 2"}
  ]

  dismiss() {
    this.viewCtrl.dismiss();
  }

  selectedItem:any;

  onItemSelected(e){
    this.selectedItem = e;
  }

  onViewData(){
    this.dismiss();
  }

}
