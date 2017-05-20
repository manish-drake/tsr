import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { FileFactory } from "../../services/io/file-factory";

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

  fileName: string;

  constructor(
    private viewCtrl: ViewController,
    private params: NavParams,
    private _fileFactory: FileFactory) {
    this.fileName = this.params.get('filename');
  }

  ngAfterViewInit() {
    this._fileFactory.readfile(this._fileFactory.dataDirectory(), this.fileName).map(result => {
      this.dataList = JSON.parse(result);
    });
  }

  dataList: any[] = [
    // { date: "May 12 2017 13:46:23", user: "Operator 1" },
    // { date: "May 12 2017 13:46:55", user: "Operator 1" },
    // { date: "May 13 2017 06:13:07", user: "Operator 2" }
  ]

  dismiss() {
    this.viewCtrl.dismiss();
  }

  selectedItem: any;
  selectedItemIndex: number;

  onItemSelected(e, i) {
    this.selectedItem = e;
    this.selectedItemIndex = i;
  }

  onViewData() {
    this.dismiss();
  }

  deleteRecord() {
    this.dataList.splice(this.selectedItemIndex, 1);
    this.selectedItem = null;
    // this._fileFactory.saveFile(this._fileFactory.dataDirectory(), this.fileName, JSON.stringify(this.dataList));
  }

}
