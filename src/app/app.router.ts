import { RouterModule } from '@angular/router';

import { TestDetailComp } from '../pages/detail-component/detail';
import { TestGroupComp } from '../pages/testgroup-component/testgroup';

export const router = RouterModule.forRoot([
    { path: '', redirectTo: 'testgroup/Favorites', pathMatch: 'full' },
    { path: 'testgroup/:name', component: TestGroupComp },
    { path: 'detail/:test/:parent', component: TestDetailComp }
]);