import { Injectable } from '@angular/core'
import { Platform, ToastController } from 'ionic-angular';
import { FileFactory } from "../../services/io/file-factory";
import { StorageFactory } from "../../services/io/storage";
import { UserService } from '../../services/test-set/user.service';
import { Logger } from "../logging/logger";

@Injectable()
export class AviationHistoryService {

    dataDirectory: string;

    constructor(
        private platform: Platform,
        private toastCtrl: ToastController,
        private _fileFactory: FileFactory,
        private _storage: StorageFactory,
        private _svcUser: UserService,
        private _logger: Logger) {
        if (this.platform.is('cordova')) {
            this._storage.dataDirectory().then((res) => {
                this.dataDirectory = res;
            });
        }
    }

    saveVSWRorLOSSrecord(filename: string, selectedBandIndex: number, isGraphScaleChecked: boolean, markers: any[], data: any) {
        this.platform.ready().then(() => {
            if (this.platform.is('cordova')) {
                let collection: any[] = [];
                this._fileFactory.readAsText(this.dataDirectory, filename)
                    .then(result => {
                        this._logger.Debug('File read success: ' + result);
                        if (result != undefined) collection = JSON.parse(result);
                        this.serializeVSWRorLOSSData(filename, collection, selectedBandIndex, isGraphScaleChecked, markers, data);
                    })
                    .catch((error) => {
                        this._logger.Error("File don't exists");
                        this.serializeVSWRorLOSSData(filename, collection, selectedBandIndex, isGraphScaleChecked, markers, data);
                    })
            }
        });
    }

    saveDTFrecord(filename: string, selectedCoaxIndex: number, isGraphScaleChecked: boolean, isLengthUnitChecked: boolean, markers: any[], data: any) {
        this.platform.ready().then(() => {
            if (this.platform.is('cordova')) {
                let collection: any[] = [];
                this._fileFactory.readAsText(this.dataDirectory, filename)
                    .then(result => {
                        this._logger.Debug('File read success: ' + result);
                        if (result != undefined) collection = JSON.parse(result);
                        this.serializeDTFData(filename, collection, selectedCoaxIndex, isGraphScaleChecked, isLengthUnitChecked, markers, data);
                    })
                    .catch((error) => {
                        this._logger.Error("File don't exists");
                        this.serializeDTFData(filename, collection, selectedCoaxIndex, isGraphScaleChecked, isLengthUnitChecked, markers, data);
                    })
            }
        });
    }

    serializeVSWRorLOSSData(filename: string, collection: any[], selectedBandIndex, isGraphScaleChecked: boolean, markers: any[], data: any) {
        let dateTime = new Date();
        let userName: string;
        this._svcUser.getCurrentUser().subscribe(val => userName = val.name);
        let record: any = {
            datetime: dateTime,
            username: userName,
            markers: markers,
            range: isGraphScaleChecked,
            bandIndex: selectedBandIndex,
            data: data
        }
        collection.unshift(record);
        this._fileFactory.writeFile(this.dataDirectory, filename, JSON.stringify(collection))
            .then(() => {
                this._logger.Debug('Record saved successfully');
                let toast = this.toastCtrl.create({ message: 'Record saved successfully', duration: 2000 });
                toast.present();
            })
            .catch(() => {
                this._logger.Error("Error, saving record.");
            });
    }

    serializeDTFData(filename: string, collection: any[], selectedCoaxIndex, isGraphScaleChecked: boolean, isLengthUnitChecked: boolean, markers: any[], data: any) {
        let dateTime = new Date();
        let userName: string;
        this._svcUser.getCurrentUser().subscribe(val => userName = val.name);
        let record: any = {
            datetime: dateTime,
            username: userName,
            markers: markers,
            range: isGraphScaleChecked,
            unit: isLengthUnitChecked,
            coaxIndex: selectedCoaxIndex,
            data: data
        }
        collection.unshift(record);
        this._fileFactory.writeFile(this.dataDirectory, filename, JSON.stringify(collection))
            .then(() => {
                this._logger.Debug('Record saved successfully');
                let toast = this.toastCtrl.create({ message: 'Record saved successfully', duration: 2000 });
                toast.present();
            })
            .catch(() => {
                this._logger.Error("Error, saving record.");
            });
    }

}