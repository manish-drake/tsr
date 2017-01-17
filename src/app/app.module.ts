import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home'
import { MoreActionsPopover } from '../pages/moreactions/moreactions';
import { ConfigurationsPopover } from '../pages/configurations/configurations'
import { HeaderComponent } from '../pages/header-component/header-component'
import { GroupPage } from '../pages/group/group';
import { FooterComponent } from '../pages/footer-component/footer-component'
import { SectionsPage } from '../pages/sections/sections';
import { DetailPage } from '../pages/detail/detail';
import { SetupPage } from '../pages/setup/setup';
import { HelpPage } from '../pages/help/help';
import { FileIOService } from '../services/io/file-io.service'
import { Factory } from '../services/objects/factory.service'
import { BrokerFactoryService } from '../services/broker/brokerFactory.service'
import { Master } from '../services/test-set/master.service'
import { router } from './app.router'
import { HeaderService } from '../services/ui/header.service'
import { PopoverService } from '../services/ui/popover.service'
import { ThemesService } from '../services/themes/themes.service'
import { FileFactory } from '../services/io/file-factory';
import { TestSectionComp } from '../comps/tests/section/section.comp';
import { DetailMainComp } from '../comps/tests/detail-main/detail-main';
import { DetailRadarComp } from '../comps/tests/detail-radar/detail-radar';
import { DetailWaveformComp } from '../comps/tests/detail-waveform/detail-waveform';
import { DetailVehiclesComp } from '../comps/tests/detail-vehicles/detail-vehicles';
import { PopMenuItemComp } from '../comps/popover/pop-menu-item.comp';
import { PopButtonComp } from '../comps/popover/pop-button.comp';
import { TestCardComp } from '../comps/tests/card/card.comp';
import { SpyDirective } from '../common/mySpy.directive';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        MoreActionsPopover,
        ConfigurationsPopover,
        HeaderComponent,
        GroupPage,
        FooterComponent,
        SectionsPage,
        DetailPage,
        SetupPage,
        HelpPage,
        TestSectionComp,
        DetailMainComp, DetailRadarComp, DetailWaveformComp, DetailVehiclesComp,
        TestCardComp,
        SpyDirective,
        PopMenuItemComp,
        PopButtonComp

    ],
    imports: [
        router,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        MoreActionsPopover,
        ConfigurationsPopover,
        SetupPage,
        HelpPage
    ],
    providers: [
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        FileIOService,
        Factory,
        Master,
        HeaderService,
        PopoverService,
        BrokerFactoryService,
        ThemesService,
        FileFactory, MoreActionsPopover
    ]
})
export class AppModule { }
