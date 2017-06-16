import { Injectable } from "@angular/core"
import { Platform } from 'ionic-angular'
import { File } from '@ionic-native/file'

declare var cordova: any;

@Injectable()
export class StorageFactory {
    constructor(private platform: Platform, private file: File) {}

    dataDirectory() {
        return this.platform.ready().then(() => {
            if (this.platform.is('cordova')) {
                return this.file.dataDirectory;
            }
        })
    }

    externalRootDirectory() {
        return this.platform.ready().then(() => {
            if (this.platform.is('cordova')) {
                if (this.platform.is('android')) {
                    return cordova.file.externalRootDirectory;
                }
                else if (this.platform.is('ios')) {
                    return cordova.file.documentsDirectory;
                }
            }
        })
    }

    externalDataDirectory() {
        return this.platform.ready().then(() => {
            if (this.platform.is('cordova')) {
                if (this.platform.is('android')) {
                    return cordova.file.externalDataDirectory;
                }
                else if (this.platform.is('ios')) {
                    return cordova.file.documentsDirectory;
                }
            }
        })
    }

    applicationStorageDirectory() {
        return this.platform.ready().then(() => {
            if (this.platform.is('cordova')) {
                if (this.platform.is('android')) {
                    return cordova.file.applicationStorageDirectory;
                }
            }
        })
    }
}