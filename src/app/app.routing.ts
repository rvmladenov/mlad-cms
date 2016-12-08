import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { AuthComponent } from "./auth/auth.component";
import { DashboardShellComponent } from "./dashboard/dashboard.shell.component";

import { AuthGuard } from './auth/auth-guard.service';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'auth', component: AuthComponent }, /*TODO: probably this also should be implemented as Lazy Loading */
    { 
        path: 'dashboard',
        canActivate: [AuthGuard], 
        canActivateChild: [AuthGuard],
        component: DashboardShellComponent, 
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    }
];

export const routing = RouterModule.forRoot(APP_ROUTES);