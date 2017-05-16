import { NgModule }              from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestDetailComp } from '../pages/detail-component/detail';
import { TestGroupComp } from '../pages/testgroup-component/testgroup';
import { SetupComp } from '../pages/setup-component/setup';

import { SetupUsersComp } from '../pages/setup-users-component/users-component';
import { SetupDisplayComp } from '../pages/setup-display-component/display-component';
import { SetupGPSComp } from '../pages/setup-gps-component/gps-component';
import { SetupNetworkComp } from '../pages/setup-network-component/network-component';
import { SetupSystemInfoComp } from '../pages/setup-systeminfo-component/systeminfo-component';
import { SetupConnectionComp } from '../pages/setup-connection-component/connection-component';
import { AntennaComp } from "../pages/antenna-component/antenna";
import { AviationVSWRComp } from "../pages/aviation-vswr-comp/aviation-vswr-comp";
import { AviationCalComp } from "../pages/aviation-cal-comp/aviation-cal-comp";
import { AviationDtfComp } from "../pages/aviation-dtf-comp/aviation-dtf-comp";
import { AviationLossComp } from "../pages/aviation-loss-comp/aviation-loss-comp";

const appRoutes: Routes = [
    { path: 'testgroup/:name', component: TestGroupComp },
    { path: 'detail/:test/:headername', component: TestDetailComp },
    { path: 'setup/:name', component: SetupComp },

    { path: 'setup-users/:parent', component: SetupUsersComp },
    { path: 'setup-display/:parent', component: SetupDisplayComp },
    { path: 'setup-gps/:parent', component: SetupGPSComp },
    { path: 'setup-network/:parent', component: SetupNetworkComp },
    { path: 'setup-systeminfo/:parent', component: SetupSystemInfoComp },
    { path: 'setup-connection/:parent', component: SetupConnectionComp },

    { path: 'antenna/:name', component: AntennaComp },
    { path: 'aviation-vswr/:parent', component: AviationVSWRComp },
    { path: 'aviation-cal/:parent', component: AviationCalComp },
    { path: 'aviation-loss/:parent', component: AviationLossComp },
    { path: 'aviation-dtf/:parent', component: AviationDtfComp }];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}