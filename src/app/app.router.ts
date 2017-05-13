import { RouterModule } from '@angular/router';

import { TestDetailComp } from '../pages/detail-component/detail';
import { TestGroupComp } from '../pages/testgroup-component/testgroup';
import { SetupComp } from '../pages/setup-component/setup';

import { SetupUsersComp } from '../pages/setup-users-component/users-component';
import { SetupDisplayComp } from '../pages/setup-display-component/display-component';
import { SetupGPSComp } from '../pages/setup-gps-component/gps-component';
import { SetupNetworkComp } from '../pages/setup-network-component/network-component';
import { SetupSystemInfoComp } from '../pages/setup-systeminfo-component/systeminfo-component';
import { SetupConnectionComp } from '../pages/setup-connection-component/connection-component';

export const routes = RouterModule.forRoot([
    { path: '', redirectTo: 'testgroup/Start', pathMatch: 'full' },
    { path: 'testgroup/:name', component: TestGroupComp },
    { path: 'detail/:test/:headername', component: TestDetailComp },
    { path: 'setup/:name', component: SetupComp },

    { path: 'setup-users/:parent', component: SetupUsersComp },
    { path: 'setup-display/:parent', component: SetupDisplayComp },
    { path: 'setup-gps/:parent', component: SetupGPSComp },
    { path: 'setup-network/:parent', component: SetupNetworkComp },
    { path: 'setup-systeminfo/:parent', component: SetupSystemInfoComp },
    { path: 'setup-connection/:parent', component: SetupConnectionComp }
]);