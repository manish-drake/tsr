import { Injectable } from '@angular/core';
import { AlertController } from "ionic-angular";

@Injectable()
export class AlertsService {
    constructor(private alertCtrl: AlertController) { }

    BasicAlert(title, subTitle) {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: ['OK']
        });
        alert.present();
    }

    ConfirmationAlert(title: string, message: string, btnText: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            let alert = this.alertCtrl.create({
                title: title,
                message: message,
                buttons: [
                    {
                        text: btnText,
                        handler: () => {
                            resolve(true)
                        }
                    },
                    {
                        text: 'Cancel',
                        handler: () => {
                            reject(false)
                        }
                    }
                ]
            });
            alert.present();

        })
    }

    PromptAlert(title, message, inputName, inputPlaceholder, inputValue, inputType) {
        return new Promise((resolve, reject) => {
            let prompt = this.alertCtrl.create({
                title: title,
                message: message,
                inputs: [
                    {
                        name: inputName,
                        placeholder: inputPlaceholder,
                        value: inputValue,
                        type: inputType
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        handler: data => { reject(data) }
                    },
                    {
                        text: 'Ok',
                        handler: data => { resolve(data) }
                    }
                ]
            });
            prompt.present();
        })
    }

    showRadioAlert(title: string, data: any[], primaryButtonText: string) {
        return new Promise((resolve, reject) => {
            let _alert = this.alertCtrl.create();
            _alert.setTitle(title);

            data.forEach(item => {
                _alert.addInput({
                    type: 'radio',
                    label: item.name,
                    value: item
                });
            });

            _alert.addButton({
                text: 'Cancel',
                handler: response => { reject(response) }
            });
            _alert.addButton({
                text: primaryButtonText,
                handler: response => { resolve(response) }
            });
            _alert.present();
        });
    }


}