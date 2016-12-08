import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from "./dashboard.component";
import { PagesComponent } from '../pages/pages.component';

const ROUTES: Routes = [
    { path: '', component: DashboardComponent, pathMatch: 'full' },
    { path: 'pages', component: PagesComponent, loadChildren: '../pages/pages.module#PageModule'}
];

export const dashboardRouting = RouterModule.forChild(ROUTES);