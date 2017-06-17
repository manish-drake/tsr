import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestGroupComp } from '../pages/test/test-group/test-group';
import { TestDetailComp } from '../pages/test/test-detail/test-detail';

import { SetupComp } from '../pages/setup/setup/setup';
import { SetupUsersComp } from '../pages/setup/setup-users/setup-users';
import { SetupDisplayComp } from '../pages/setup/setup-display/setup-display';
import { SetupGPSComp } from '../pages/setup/setup-gps/setup-gps';
import { SetupNetworkComp } from '../pages/setup/setup-network/setup-network';
import { SetupSystemInfoComp } from '../pages/setup/setup-systeminfo/setup-systeminfo';
import { SetupConnectionComp } from '../pages/setup/setup-connection/setup-connection';

import { AntennaComp } from "../pages/antenna/antenna/antenna";
import { AviationVSWRComp } from "../pages/antenna/aviation-vswr/aviation-vswr";
import { AviationCalComp } from "../pages/antenna/aviation-cal/aviation-cal";
import { AviationDtfComp } from "../pages/antenna/aviation-dtf/aviation-dtf";
import { AviationLossComp } from "../pages/antenna/aviation-loss/aviation-loss";

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