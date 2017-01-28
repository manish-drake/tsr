import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home'
import { MoreActionsPopover } from '../pages/moreactions-component/moreactions';
import { ConfigurationsPopover } from '../pages/configurations-component/configurations'
import { HeaderComponent } from '../pages/header-component/header-component'
import { FooterComponent } from '../pages/footer-component/footer-component'
import { TestGroupComp } from '../pages/testgroup-component/testgroup';
import { TestDetailComp } from '../pages/detail-component/detail';
import { SetupPage } from '../pages/setup-component/setup';
import { HelpPage } from '../pages/help-component/help';
import { FileIOService } from '../services/io/file-io.service'
import { Factory } from '../services/objects/factory.service'
import { BrokerFactoryService } from '../services/broker/brokerFactory.service'
import { MasterService } from '../services/test-set/master.service'
import { router } from './app.router'
import { HeaderService } from '../services/ui/header.service'
import { PopoverService } from '../services/ui/popover.service'
import { ModalService } from '../services/ui/modal.service'
import { ThemesService } from '../services/themes/themes.service'
import { FileFactory } from '../services/io/file-factory';
import { DetailDefaultComp } from '../sub-components/tests/detail-default/detail-default';
import { DetailRadarComp } from '../sub-components/tests/detail-radar/detail-radar';
import { DetailWaveformComp } from '../sub-components/tests/detail-waveform/detail-waveform';
import { DetailVehiclesComp } from '../sub-components/tests/detail-vehicles/detail-vehicles';
import { PopOverButtonComp } from '../sub-components/popoverctrl/popover-button-comp';
import { ModalIonItemComp } from '../sub-components/modalctrl/modal-ionitem-comp';
import { SpyDirective } from '../common/mySpy.directive';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        MoreActionsPopover,
        ConfigurationsPopover,
        HeaderComponent,
        TestGroupComp,
        FooterComponent,
        TestDetailComp,
        SetupPage,
        HelpPage,
        DetailDefaultComp, DetailRadarComp, DetailWaveformComp, DetailVehiclesComp,
        SpyDirective,
        PopOverButtonComp,
        ModalIonItemComp
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
        MasterService,
        HeaderService,
        PopoverService,
        ModalService,
        BrokerFactoryService,
        ThemesService,
        FileFactory
    ]
})
export class AppModule { }
