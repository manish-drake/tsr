import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { Http } from '@angular/http'
import { AppRoutingModule } from './app.router'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppVersion } from '@ionic-native/app-version';
import { File} from '@ionic-native/file';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { HeaderComponent } from '../pages/header-component/header-component';
import { FooterComponent } from '../pages/footer-component/footer-component';
import { MoreActionsPopover } from '../pages/moreactions-component/moreactions';
import { ConfigurationsPopover } from '../pages/configurations-component/configurations';
import { TestGroupComp } from '../pages/testgroup-component/testgroup';
import { TestDetailComp } from '../pages/detail-component/detail';
import { SetupTestPage } from '../pages/setuptest/setuptest';
import { HelpPage } from '../pages/help-component/help';
import { GuidePage } from '../pages/guide/guide';

import { SetupComp } from '../pages/setup-component/setup';
import { SetupUsersComp } from '../pages/setup-users-component/users-component';
import { SetupDisplayComp } from '../pages/setup-display-component/display-component';
import { SetupGPSComp } from '../pages/setup-gps-component/gps-component';
import { SetupNetworkComp } from '../pages/setup-network-component/network-component';
import { SetupSystemInfoComp } from '../pages/setup-systeminfo-component/systeminfo-component';
import { SetupConnectionComp } from '../pages/setup-connection-component/connection-component';

import { DetailDefaultComp } from '../sub-components/tests/detail-default/detail-default';
import { DetailRadarComp } from '../sub-components/tests/detail-radar/detail-radar';
import { DetailWaveformComp } from '../sub-components/tests/detail-waveform/detail-waveform';
import { DetailVehiclesComp } from '../sub-components/tests/detail-vehicles/detail-vehicles';
import { PopOverButtonComp } from '../sub-components/popoverctrl/popover-button-comp';
import { ModalIonItemComp } from '../sub-components/modalctrl/modal-ionitem-comp';
import { TestsetinfoComp } from '../sub-components/footer/testsetinfo-comp/testsetinfo-comp';
import { TeststatusComp } from '../sub-components/footer/teststatus-comp/teststatus-comp';

import { SpyDirective } from '../common/mySpy.directive';
import { FileFactory } from '../services/io/file-factory';
import { FileIOService } from '../services/io/file-io.service';
import { Factory } from '../services/objects/factory.service';
import { BrokerFactoryService } from '../services/broker/brokerFactory.service';
import { TestGroupsService } from '../services/tests/testgroups.service';
import { TestContextService } from '../services/tests/testcontext.service';
import { MasterService } from '../services/test-set/master.service';
import { UserService } from '../services/test-set/user.service';
import { ConnectionService } from '../services/test-set/connection.service'
import { LocalStorage } from '../services/storage/local-storage';
import { HomeService } from '../services/ui/home.service';
import { PopoverService } from '../services/ui/popover.service';
import { ModalService } from '../services/ui/modal.service';
import { ThemeService } from '../services/themes/themes.service';
import { LanguageService } from '../services/language/language-service';

import { AntennaComp } from "../pages/antenna-component/antenna";
import { AviationVSWRComp } from "../pages/aviation-vswr-comp/aviation-vswr-comp";

import { GraphComp} from '../sub-components/aviation-antenna/graph-comp/graph-comp';


@NgModule({
    declarations: [
        MyApp,
        HomePage,
        MoreActionsPopover,
        ConfigurationsPopover,
        HeaderComponent,
        TestGroupComp,
        SetupComp,
        SetupUsersComp,
        SetupDisplayComp,
        SetupGPSComp,
        SetupNetworkComp,
        SetupSystemInfoComp,
        SetupConnectionComp,
        FooterComponent,
        TestsetinfoComp,
        TeststatusComp,
        TestDetailComp,
        SetupTestPage,
        HelpPage,
        GuidePage,
        DetailDefaultComp, DetailRadarComp, DetailWaveformComp, DetailVehiclesComp,
        SpyDirective,
        PopOverButtonComp,
        ModalIonItemComp,
        AntennaComp,
        AviationVSWRComp,
        GraphComp
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        AppRoutingModule,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
        })
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        HomePage,
        MyApp,
        MoreActionsPopover,
        ConfigurationsPopover,
        SetupTestPage,
        HelpPage,
        GuidePage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        AppVersion,
        File,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        FileIOService,
        Factory,
        MasterService,
        UserService,
        ConnectionService,
        HomeService,
        PopoverService,
        ModalService,
        BrokerFactoryService,
        TestGroupsService,
        TestContextService,
        ThemeService,
        FileFactory,
        LocalStorage,
        LanguageService
    ]
})
export class AppModule { }

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, '../assets/i18n', '.json');
}
