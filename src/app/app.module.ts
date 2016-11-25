import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MoreActionsPopover } from '../pages/moreactions/moreactions';
import { HeaderComponent } from '../pages/header-component/header-component'
import { SectionsPage } from '../pages/sections/sections';
import { DetailPage } from '../pages/detail/detail';
import { File } from '../services/io/file.service'
import { Factory } from '../services/objects/factory.service'
import { Master } from '../services/test-set/master.service'

@NgModule({
    declarations: [
        MyApp,
        MoreActionsPopover,
        HeaderComponent,
        SectionsPage,
        DetailPage
    ],
    imports: [
        IonicModule.forRoot(MyApp),

    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        MoreActionsPopover,
        SectionsPage,
        DetailPage
    ],
    providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, File, Factory, Master]
})
export class AppModule { }
