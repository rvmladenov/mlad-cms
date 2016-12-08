import { Routes, RouterModule } from "@angular/router";

import { PageListComponent } from "./page-list.component";

const ROUTES: Routes = [
    { path: '', component: PageListComponent, pathMatch: 'full'}
];

export const pageRouting = RouterModule.forChild(ROUTES);