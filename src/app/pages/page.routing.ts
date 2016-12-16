import { Routes, RouterModule } from "@angular/router";

import { PageListComponent } from "./page-list.component";
import { PageEditComponent } from './page-edit.component';

const ROUTES: Routes = [
    { path: '', component: PageListComponent},
    { path: 'edit', component: PageEditComponent },
    { path: 'edit/:id', component: PageEditComponent }
];

export const pageRouting = RouterModule.forChild(ROUTES);