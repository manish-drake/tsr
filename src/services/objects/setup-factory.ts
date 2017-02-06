import { Injectable } from '@angular/core'


@Injectable()
export class SetupFactory {

    constructor() { }

    createAllSetupData() {
        var allsetup: any;
        allsetup = [
            this.createSetupData("USER"),
            this.createSetupData("DISPLAY"),
            this.createSetupData("GPS"),
            this.createSetupData("NETWORK"),
            this.createSetupData("SYSTEM INFO"),
            this.createSetupData("CONNECTION")
        ];
        return allsetup
    }

    createSetupData(name: string) {
        return {name: name};
    }
}