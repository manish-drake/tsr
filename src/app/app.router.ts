import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestGroupComp } from '../pages/test/testgroup-component/testgroup';
import { TestDetailComp } from '../pages/test/detail-component/detail';

import { SetupComp } from '../pages/setup/setup-component/setup';
import { SetupUsersComp } from '../pages/setup/setup-users-component/users-component';
import { SetupDisplayComp } from '../pages/setup/setup-display-component/display-component';
import { SetupGPSComp } from '../pages/setup/setup-gps-component/gps-component';
import { SetupNetworkComp } from '../pages/setup/setup-network-component/network-component';
import { SetupSystemInfoComp } from '../pages/setup/setup-systeminfo-component/systeminfo-component';
import { SetupConnectionComp } from '../pages/setup/setup-connection-component/connection-component';

import { AntennaComp } from "../pages/antenna/antenna/antenna";
import { AviationVSWRComp } from "../pages/antenna/aviation-vswr-comp/aviation-vswr-comp";
import { AviationCalComp } from "../pages/antenna/aviation-calibration/aviation-calibration";
import { AviationDtfComp } from "../pages/antenna/aviation-dtf/aviation-dtf";
import { AviationLossComp } from "../pages/antenna/aviation-loss-comp/aviation-loss-comp";

const routes: Routes = [
  // { path: '', redirectTo: 'testgroup/Start', pathMatch: 'full' },
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
  { path: 'aviation-dtf/:parent', component: AviationDtfComp }
]

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);