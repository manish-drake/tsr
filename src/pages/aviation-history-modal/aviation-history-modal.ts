import { Component } from '@angular/core';
import { ViewController, NavParams, Platform } from 'ionic-angular';
import { FileFactory } from "../../services/io/file-factory";
import { StorageFactory } from "../../services/io/storage";
import { Logger } from "../../services/logging/logger";

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
  dataDirectory: string;

  constructor(
    private viewCtrl: ViewController,
    private params: NavParams,
    private _fileFactory: FileFactory,
    private _storage: StorageFactory,
    private platform: Platform,
    private _logger: Logger) {
    this.fileName = this.params.get('filename');
    if (this.platform.is('cordova')) {
      this._storage.dataDirectory().then((res) => {
        this.dataDirectory = res;
      });
    }
  }

  dataList: any[] = []

  ngAfterViewInit() {
    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        this._fileFactory.readAsText(this.dataDirectory, this.fileName)
          .then(result => {
            console.log('file read success: ' + result);
            if (result != undefined) this.dataList = JSON.parse(result);
          })
          .catch(error => { console.log("file don't exists: " + JSON.stringify(error)) })
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
    this.viewCtrl.dismiss(this.selectedItem);
  }

  deleteRecord() {
    this.dataList.splice(this.selectedItemIndex, 1);
    this.selectedItem = null;
    this._fileFactory.writeFile(this.dataDirectory, this.fileName, JSON.stringify(this.dataList));
  }

}
