import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { AlertsService } from '../../services/ui/alerts.service';
import { Logger } from "../logging/logger";

@Injectable()
export class ConnectionService {

    constructor(
        private _logger: Logger,
        private loadingCtrl: LoadingController,
        private _svcAlerts: AlertsService) {

    }

    ScanDevices() {
        this._logger.Debug("Scanning devices..")
        let loader = this.loadingCtrl.create({
            content: "Scanning..."
        });
        loader.present();
        setTimeout(() => {
            loader.dismiss();
            let data: any[] = [{ name: 'Device 1', ipaddress: '192.168.10.8' }, { name: 'Device 2', ipaddress: '192.168.10.9' }];
            this.DeviceSelection(data);
        }, 1000)
    }

    DeviceSelection(data: any[]) {
        this._svcAlerts.showRadioAlert("Avaialble Devices", data, 'Connect')
            .then(res => {
                this._logger.Debug("Selected Device: " + JSON.stringify(res));
                if(res != undefined){
                    this.ConnectionRequest();
                }
            })
            .catch(e => {
               this._logger.Error("Device Selection cancelled by user: " + JSON.stringify(e));
            })
    }

    ConnectionRequest() {
        this.PINConfirmation()
    }

    PINConfirmation() {
        this._svcAlerts.PromptAlert('PIN Confirmation', 'Enter PIN displaying on Test Set', 'pin', 'PIN eg. 1234', '', 'number')
            .then(res => {
                this._logger.Debug('Response: ' + JSON.stringify(res));
                this.SuccessMessage();
            })
            .catch(e => {
                this._logger.Error("PIN confirmation cancelled by user: " + JSON.stringify(e));
                this.FailMessage();
            })
    }

    SuccessMessage(){
        this._svcAlerts.BasicAlert("Pairing successful","Connected to the device");
    }

    FailMessage(){
        this._svcAlerts.BasicAlert("Pairing failed","Try again");
    }

}