import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';
import { Logger } from "../logging/logger";

@Injectable()
export class DevicesService {

    availableDevices: any[] = [];

    private connectedDevice: BehaviorSubject<any> = new BehaviorSubject(undefined);

    constructor(private _logger: Logger) {
        var deviceConnected = { name: "TestSet#5", isController: true };

        this.availableDevices.push(
            { name: "TestSet#1", isController: false },
            { name: "TestSet#2", isController: false },
            { name: "TestSet#3", isController: false },
            { name: "TestSet#4", isController: false },
            deviceConnected
        );
        this.connectedDevice = new BehaviorSubject(deviceConnected);
    }

    getAvailableDevices() {
        return this.availableDevices;
    }

    getconnectedDevice() {
        return this.connectedDevice.asObservable();
    }

    setConnectedDevice(val) {
        this.connectedDevice.next(val);
    }

}