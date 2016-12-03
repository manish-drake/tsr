import { Injectable } from '@angular/core'


@Injectable()
export class File {

    getTextContents(fileName: string): string {

        var testContent: string = "";

        switch (fileName) {
            case 'hb': {
                testContent = `{
            "Fields":
                [{
                    "Name":"Heading"
                },{
                    "Name":"Para"
                }],
            "Script":"<ion-menu [content]='content' color='primary'>
        <ion-header>
            <ion-toolbar color='primary'>
                <ion-title>Menu</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content>

            <ion-item-group>
                <ion-item-divider no-lines>
                    Header
                </ion-item-divider>
                <ion-item menuClose (click)='openSections()'>
                    <h2 item-left color='primary'> Item</h2>
                    <h3 item-right>0</h3>
                </ion-item>
            </ion-item-group>
        </ion-content>

    </ion-menu>"
        }`;

            }
            default: {
                testContent = `{
            "Fields":
                [{
                    "Name":"Heading"
                },{
                    "Name":"Para"
                }],
            "Script":"\\n<html>\\n<body>\\n<h1>My First Heading: @~Heading~</h1>\\n<p>My first paragraph.@~Para~</p>\\n</body>\\n</html>\\n"
        }`;
            }
        }

        return testContent;
    }
}