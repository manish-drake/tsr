import { NgModule, ErrorHandler } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MoreActionsPopover } from '../pages/moreactions/moreactions';
import { ConfigurationsPopover } from '../pages/configurations/configurations'
import { HeaderComponent } from '../pages/header-component/header-component'
import { SectionsPage } from '../pages/sections/sections';
import { DetailPage } from '../pages/detail/detail';
import { File } from '../services/io/file.service'
import { Factory } from '../services/objects/factory.service'
import { BrokerFactoryService } from '../services/broker/brokerFactory.service'
import { Master } from '../services/test-set/master.service'
import { router } from './app.router'
import { HeaderService } from '../services/ui/header.service'
import { PopoverService } from '../services/ui/popover.service'
import { PopoverHub } from '../services/ui/popover.hub'
import { SectionComp } from '../comps/hamburger/section/section.comp';
import { TestSectionComp } from '../comps/tests/section/section.comp';
import { TestDetailComp } from '../comps/tests/detail/detail.comp';
import { TestCardComp } from '../comps/tests/card/card.comp';
import { SubSectionComp } from '../comps/hamburger/sub-section/subSection.comp';
import { SpyDirective } from '../common/mySpy.directive';

import { ThemesService } from '../services/themes/themes.service'

@NgModule({
    declarations: [
        MyApp,
        MoreActionsPopover,
        ConfigurationsPopover,
        HeaderComponent,
        SectionsPage,
        DetailPage,
        SectionComp,
        SubSectionComp,
        TestSectionComp,
        TestDetailComp,
        TestCardComp,
        SpyDirective
    ],
    imports: [
        router,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        MoreActionsPopover,
        ConfigurationsPopover,
        SectionsPage,
        DetailPage,
    ],
    providers: [
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        File, 
        Factory, 
        Master,
        HeaderService,
        PopoverService,
        PopoverHub,
        BrokerFactoryService,
        ThemesService
    ]
})
export class AppModule { }
