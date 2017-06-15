import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';
import { Logger } from "../logging/logger";

@Injectable()
export class DevicesService {

    availableDevices: any[] = [];

    private connectedDevice: BehaviorSubject<any> = new BehaviorSubject(undefined);

    constructor( private _logger: Logger ) {
        var deviceConnected = { name: "TestSet#5" };

        this.availableDevices.push(
            { name: "TestSet#1" },
            { name: "TestSet#2" },
            { name: "TestSet#3" },
            { name: "TestSet#4" },
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