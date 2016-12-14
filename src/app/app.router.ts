import { RouterModule } from '@angular/router';
import { SectionsPage } from '../pages/sections/sections';
import { DetailPage } from '../pages/detail/detail';

import { GroupPage } from '../pages/group/group';

export const router = RouterModule.forRoot([
    { path: 'group/:name', component: GroupPage },
    { path: '', component: SectionsPage },
    { path: 'section/:name', component: SectionsPage },
    { path: 'detail/:test/:parent', component: DetailPage },
]);