import { Injectable } from '@angular/core'
import { Platform, ToastController } from 'ionic-angular';
import { FileFactory } from "../../services/io/file-factory";
import { UserService } from '../../services/test-set/user.service';

@Injectable()
export class AviationHistoryService {

    constructor(
        private platform: Platform,
        private toastCtrl: ToastController,
        private _fileFactory: FileFactory,
        private _svcUser: UserService) { }

    saveVSWRorLOSSrecord(filename: string, selectedBandIndex: number, isGraphScaleChecked: boolean, markers: any[]) {
        this.platform.ready().then(() => {
            if (this.platform.is('cordova')) {
                let collection: any[] = [];
                this._fileFactory.readAsText(this._fileFactory.dataDirectory(), filename)
                    .then(result => {
                        console.log('file read success: ' + result);
                        if (result != undefined) collection = JSON.parse(result);
                        this.serializeVSWRorLOSSData(filename, collection, selectedBandIndex, isGraphScaleChecked, markers);
                    })
                    .catch((error) => {
                        console.log("file don't exists")
                        this.serializeVSWRorLOSSData(filename, collection, selectedBandIndex, isGraphScaleChecked, markers);
                    })
            }
        });
    }

    saveDTFrecord(filename: string, selectedCoaxIndex: number, isGraphScaleChecked: boolean, isLengthUnitChecked: boolean, markers: any[]) {
        this.platform.ready().then(() => {
            if (this.platform.is('cordova')) {
                let collection: any[] = [];
                this._fileFactory.readAsText(this._fileFactory.dataDirectory(), filename)
                    .then(result => {
                        console.log('file read success: ' + result);
                        if (result != undefined) collection = JSON.parse(result);
                        this.serializeDTFData(filename, collection, selectedCoaxIndex, isGraphScaleChecked, isLengthUnitChecked, markers);
                    })
                    .catch((error) => {
                        console.log("file don't exists")
                        this.serializeDTFData(filename, collection, selectedCoaxIndex, isGraphScaleChecked, isLengthUnitChecked, markers);
                    })
            }
        });
    }

    serializeVSWRorLOSSData(filename: string, collection: any[], selectedBandIndex, isGraphScaleChecked: boolean, markers: any[]) {
        let dateTime = new Date();
        let userName: string;
        this._svcUser.getCurrentUser().subscribe(val => userName = val.name);
        let data: any = "";
        let record: any = {
            datetime: dateTime,
            username: userName,
            markers: markers,
            range: isGraphScaleChecked,
            bandIndex: selectedBandIndex,
            data: data
        }
        collection.unshift(record);
        this._fileFactory.writeFile(this._fileFactory.dataDirectory(), filename, JSON.stringify(collection))
            .then(() => {
                let toast = this.toastCtrl.create({ message: 'Record saved successfully', duration: 2000 });
                toast.present();
            });
    }

    serializeDTFData(filename: string, collection: any[], selectedCoaxIndex, isGraphScaleChecked: boolean, isLengthUnitChecked: boolean, markers: any[]) {
        let dateTime = new Date();
        let userName: string;
        this._svcUser.getCurrentUser().subscribe(val => userName = val.name);
        let data: any = "";
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
        this._fileFactory.writeFile(this._fileFactory.dataDirectory(), filename, JSON.stringify(collection))
            .then(() => {
                let toast = this.toastCtrl.create({ message: 'Record saved successfully', duration: 2000 });
                toast.present();
            });
    }

}