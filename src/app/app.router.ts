import { RouterModule } from '@angular/router';

import { TestDetailComp } from '../pages/detail-component/detail';
import { TestGroupComp } from '../pages/testgroup-component/testgroup';
import { SetupComp } from '../pages/setup-component/setup';

export const router = RouterModule.forRoot([
    { path: '', redirectTo: 'testgroup/Start', pathMatch: 'full' },
    { path: 'testgroup/:name', component: TestGroupComp },
    { path: 'detail/:test/:headername', component: TestDetailComp },
    { path: 'setup/:name', component: SetupComp }
]);