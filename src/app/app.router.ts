import { RouterModule } from '@angular/router';
import { SectionsPage } from '../pages/sections/sections';
import { DetailPage } from '../pages/detail-component/detail';
import { GroupPage } from '../pages/group-component/group';

export const router = RouterModule.forRoot([
    { path: '', redirectTo: 'group/Favorites', pathMatch: 'full' },
    { path: 'group/:name', component: GroupPage },
    { path: 'detail/:test/:parent', component: DetailPage }
]);