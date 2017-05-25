import { Component } from '@angular/core';
import { ViewController, NavParams, Platform } from 'ionic-angular';
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
    private _fileFactory: FileFactory,
    private platform: Platform) {
    this.fileName = this.params.get('filename');
  }

  dataList: any[] = []

  ngAfterViewInit() {
    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        this._fileFactory.readfile(this._fileFactory.dataDirectory(), this.fileName)
          .then(result => {
            console.log('file read success: ' + result);
            if (result != undefined) this.dataList = JSON.parse(result);
          });
      }
    });
  }

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
    this._fileFactory.writeFile(this._fileFactory.dataDirectory(), this.fileName, JSON.stringify(this.dataList));
  }

}
