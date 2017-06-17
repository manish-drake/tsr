import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { AlertsService } from '../../services/ui/alerts.service';
import { Logger } from "../logging/logger";
import { DevicesService } from '../../services/test-set/devices.service';

@Injectable()
export class ConnectionService {

    availableDevices: any;

    constructor(
        private _logger: Logger,
        private loadingCtrl: LoadingController,
        private _svcAlerts: AlertsService,
        private _svcDevices: DevicesService,
    ) {
        this.availableDevices = this._svcDevices.getAvailableDevices();
    }

    ScanDevices() {
        this._logger.Debug("Scanning devices..")
        let loader = this.loadingCtrl.create({
            content: "Scanning..."
        });
        loader.present();
        setTimeout(() => {
            loader.dismiss();
            this.DeviceSelection(this.availableDevices);
        }, 1000)
    }

    DeviceSelection(data: any[]) {
        this._svcAlerts.showRadioAlert("Available Devices", data, 'Connect')
            .then(res => {
                this._logger.Debug("Selected Device: " + JSON.stringify(res));
                if (res != undefined) {
                    this.ConnectionRequest(res);
                }
            })
            .catch(e => {
                this._logger.Error("Device Selection cancelled by user: " + JSON.stringify(e));
            })
    }

    ConnectionRequest(res) {
        this.PINConfirmation(res)
    }

    PINConfirmation(res) {
        this._svcAlerts.PromptAlert('PIN Confirmation', 'Enter PIN displaying on Test Set', 'pin', 'PIN eg. 1234', '', 'number')
            .then(succ => {
                this._logger.Debug('Response: ' + JSON.stringify(succ));
                this._svcDevices.setConnectedDevice(res);
                this.SuccessMessage();
            })
            .catch(e => {
                this._logger.Error("PIN confirmation cancelled by user: " + JSON.stringify(e));
                this.FailMessage();
            })
    }

    SuccessMessage() {
        this._svcAlerts.BasicAlert("Pairing successful", "Connected to the device");
    }

    FailMessage() {
        this._svcAlerts.BasicAlert("Pairing failed", "Try again");
    }

    onDisconnect(){
        this._svcAlerts.BasicAlert("Disconnected..","Device got disconnected");
    }

}