import { Injectable } from "@angular/core"
import { Platform } from 'ionic-angular';
import { Observable } from 'Rxjs'
import { AppVersion } from '@ionic-native/app-version';
import { Device } from '@ionic-native/device';
import { EmailComposer } from '@ionic-native/email-composer';
import { FileFactory } from '../../services/io/file-factory';
import { StorageFactory } from '../../services/io/storage';
import { Logger } from '../../services/logging/logger';
import { AlertsService } from '../../services/ui/alerts.service';

declare var cordova: any;

@Injectable()
export class ShareLogsService {

    rootDirectory: any;
    sqliteLogDirectory: any;
    versionNumber: any;

    constructor(
        private platform: Platform,
        private appVersion: AppVersion,
        private device: Device,
        private emailComposer: EmailComposer,
        private _fileFactory: FileFactory,
        private _storage: StorageFactory,
        private _logger: Logger,
        private _svcAlerts: AlertsService
    ) {
        this.platform.ready().then(() => {
            if (this.platform.is('cordova')) {
                if (this.platform.is('android')) {
                    this._storage.applicationStorageDirectory().then((res) => {
                        this.sqliteLogDirectory = res + 'databases/';
                    })
                }
                else if (this.platform.is('ios')) {
                    this._storage.externalRootDirectory().then((res) => {
                        this.sqliteLogDirectory = res;
                    })
                }
                this._storage.externalRootDirectory().then((res) => {
                    this.rootDirectory = res;
                });
                this.appVersion.getVersionNumber().then((s) => {
                    this.versionNumber = s;
                });
            }
        });
    }

    sendLogs() {
        if (this.platform.is('cordova')) {
            this._fileFactory.checkFile(this.sqliteLogDirectory, "data.db")
                .then(succ => {
                    console.log("Success: " + JSON.stringify(succ));
                    this._fileFactory.checkFile(this.rootDirectory, "data.db")
                        .then(promise => {
                            this._fileFactory.removeFile(this.rootDirectory, "data.db")
                                .then(promise => {
                                    this.getLogsFile();
                                })
                        })
                        .catch(err => new Observable(err => { this.getLogsFile(); }))
                })
                .catch(err => {
                    this._logger.Error("Error: no log file exists", JSON.stringify(err));
                    this._svcAlerts.BasicAlert("No log file found", JSON.stringify(err));
                })
        }
    }

    getLogsFile() {
        this._fileFactory.copyFile(this.sqliteLogDirectory, "data.db", this.rootDirectory, "data.db")
            .catch(err => new Observable(err => {
                this._logger.Error("Error copying log file: ", JSON.stringify(err));
                this._svcAlerts.BasicAlert("Error getting logs file", JSON.stringify(err));
            }))
            .subscribe(promise => {
                this._logger.Debug("Composing email");
                this.composeEmail();
            })

    }

    composeEmail() {
        let email = {
            to: 'manish@drake.in',
            attachments: [this.rootDirectory + "data.db"],
            subject: "Logs for Test Set Remote (" + this.versionNumber + ") from " + this.device.platform + " (See attachment)",
            body:
            "App Version: " + "<b>" + this.versionNumber + "</b><br>" +
            "OS: " + "<b>" + this.device.platform + " " + this.device.version + "</b><br>" +
            "Device: " + "<b>" + this.device.manufacturer.toUpperCase() + " " + this.device.model + "</b><br>" +

            "<br><br>" +
            "Here is the logs file for Test Set Remote app as attachment.."
            ,
            isHtml: true
        };
        this.emailComposer.open(email);
    }
}