import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { Http, HttpModule } from '@angular/http'
import { AppRoutingModule } from './app.router'
import { FormsModule } from '@angular/forms';
import 'intl';
import 'intl/locale-data/jsonp/en.js';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppVersion } from '@ionic-native/app-version';
import { File } from '@ionic-native/file';
import { Device } from '@ionic-native/device';
import { EmailComposer } from '@ionic-native/email-composer';
import { SQLite } from '@ionic-native/sqlite';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { HeaderComponent } from '../pages/header/header';
import { FooterComponent } from '../pages/footer/footer';
import { MoreActionsPopover } from '../pages/moreactions/moreactions';
import { ConfigPanelPopover } from '../pages/config-panel/config-panel';

import { TestGroupComp } from '../pages/test/test-group/test-group';
import { TestDetailComp } from '../pages/test/test-detail/test-detail';
import { TestSetupPage } from '../pages/test/test-setup/test-setup';
import { TestHelpPage } from '../pages/test/test-help/test-help';
import { TestGuidePage } from '../pages/test/test-guide/test-guide';

import { SetupComp } from '../pages/setup/setup/setup';
import { SetupUsersComp } from '../pages/setup/setup-users/setup-users';
import { SetupDisplayComp } from '../pages/setup/setup-display/setup-display';
import { SetupGPSComp } from '../pages/setup/setup-gps/setup-gps';
import { SetupNetworkComp } from '../pages/setup/setup-network/setup-network';
import { SetupSystemInfoComp } from '../pages/setup/setup-systeminfo/setup-systeminfo';
import { SetupConnectionComp } from '../pages/setup/setup-connection/setup-connection';

import { DetailDefaultComp } from '../sub-components/tests/detail-default/detail-default';
import { DetailRadarComp } from '../sub-components/tests/detail-radar/detail-radar';
import { DetailWaveformComp } from '../sub-components/tests/detail-waveform/detail-waveform';
import { DetailVehiclesComp } from '../sub-components/tests/detail-vehicles/detail-vehicles';
import { PopOverButtonComp } from '../sub-components/popoverctrl/popover-button-comp';
import { ModalIonItemComp } from '../sub-components/modalctrl/modal-ionitem-comp';
import { TestsetinfoComp } from '../sub-components/footer/testsetinfo-comp/testsetinfo-comp';
import { TeststatusComp } from '../sub-components/footer/teststatus-comp/teststatus-comp';

import { AntennaComp } from "../pages/antenna/antenna/antenna";
import { AviationCalComp } from "../pages/antenna/aviation-cal/aviation-cal";
import { AviationVSWRComp } from "../pages/antenna/aviation-vswr/aviation-vswr";
import { AviationLossComp } from "../pages/antenna/aviation-loss/aviation-loss";
import { AviationDtfComp } from "../pages/antenna/aviation-dtf/aviation-dtf";
import { AviationHistoryModal } from "../pages/antenna/aviation-history-modal/aviation-history-modal";

import { GraphComp } from '../sub-components/aviation-antenna/graph-comp/graph-comp';
import { ModeSelectionComp } from '../sub-components/aviation-antenna/mode-selection/mode-selection';
import { BandSelectionComp } from '../sub-components/aviation-antenna/band-selection/band-selection';
import { CoaxSelectionComp } from '../sub-components/aviation-antenna/coax-selection/coax-selection';
import { CalTypeSelectionComp } from '../sub-components/aviation-antenna/caltype-selection/caltype-selection';
import { MarkerControlComp } from '../sub-components/aviation-antenna/marker-actions/marker-actions';
import { AviationHistoryService } from '../services/antenna/aviationhistory.service';
import { GraphService } from '../services/antenna/graph.service';

import { SpyDirective } from '../common/mySpy.directive';
import { FileFactory } from '../services/io/file-factory';
import { StorageFactory } from '../services/io/storage';
import { FileIOService } from '../services/io/file-io.service';
import { Factory } from '../services/objects/factory.service';
import { BrokerFactoryService } from '../services/broker/brokerFactory.service';
import { TestGroupsService } from '../services/tests/testgroups.service';
import { TestContextService } from '../services/tests/testcontext.service';
import { MasterService } from '../services/test-set/master.service';
import { UserService } from '../services/test-set/user.service';
import { DevicesService } from '../services/test-set/devices.service';
import { ConnectionService } from '../services/test-set/connection.service';
import { LocalStorage } from '../services/storage/local-storage';
import { HomeService } from '../services/ui/home.service';
import { PopoverService } from '../services/ui/popover.service';
import { ModalService } from '../services/ui/modal.service';
import { AlertsService } from '../services/ui/alerts.service';
import { ThemeService } from '../services/themes/themes.service';
import { LanguageService } from '../services/language/language-service';

import { Logger } from "../services/logging/logger";
import { AProvider } from "../services/logging/aProvider";
import { SqliteLogProvider } from "../services/logging/providers/sqliteLogProvider";
import { ShareLogsService } from '../services/logging/share-logs'


@NgModule({
    declarations: [
        MyApp,
        HomePage,
        MoreActionsPopover,
        ConfigPanelPopover,
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
        TestSetupPage,
        TestHelpPage,
        TestGuidePage,
        DetailDefaultComp, DetailRadarComp, DetailWaveformComp, DetailVehiclesComp,
        SpyDirective,
        PopOverButtonComp,
        ModalIonItemComp,
        AntennaComp,
        AviationCalComp, AviationVSWRComp, AviationLossComp, AviationDtfComp,
        AviationHistoryModal,
        GraphComp, ModeSelectionComp, BandSelectionComp, CoaxSelectionComp, CalTypeSelectionComp, MarkerControlComp
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        IonicModule.forRoot(MyApp),
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
        })
    ],
    exports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        HomePage,
        MyApp,
        MoreActionsPopover,
        ConfigPanelPopover,
        TestSetupPage,
        TestHelpPage,
        TestGuidePage,
        AviationHistoryModal
    ],
    providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        StatusBar,
        SplashScreen,
        AppVersion,
        File,
        Device,
        EmailComposer,
        SQLite,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        FileIOService,
        Logger,
        { provide: AProvider, useClass: SqliteLogProvider },
        ShareLogsService,
        Factory,
        MasterService,
        UserService,
        DevicesService,
        ConnectionService,
        HomeService,
        PopoverService,
        ModalService,
        AlertsService,
        BrokerFactoryService,
        TestGroupsService,
        TestContextService,
        ThemeService,
        FileFactory,
        StorageFactory,
        LocalStorage,
        LanguageService,
        AviationHistoryService,
        GraphService
    ]
})
export class AppModule { }

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}
