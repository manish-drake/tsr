import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { HeaderComponent, MoreActionsPopover } from '../pages/header-component/header-component'
import { SectionsPage } from '../pages/sections/sections';
import { DetailPage } from '../pages/detail/detail';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        HeaderComponent, MoreActionsPopover,
        SectionsPage,
        DetailPage
    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        MoreActionsPopover,
        SectionsPage,
        DetailPage
    ],
    providers: []
})
export class AppModule { }
