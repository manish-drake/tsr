import { Router, RouterModule } from '@angular/router';
import { SectionsPage } from '../pages/sections/sections';
import { DetailPage } from '../pages/detail/detail';

export const router = RouterModule.forRoot([
    {path: '', component: SectionsPage},
    {path: 'section/:name', component: SectionsPage},
    {path: 'detail/:summary', component: DetailPage},
]);