import { Routes, RouterModule } from "@angular/router";

import { PageListComponent } from "./page-list.component";
import { PageEditCompositeComponent } from './page-edit.composite.component';

const ROUTES: Routes = [
    { path: '', component: PageListComponent},
    { path: 'edit', component: PageEditCompositeComponent },
    { path: 'edit/:id', component: PageEditCompositeComponent }
];

export const pageRouting = RouterModule.forChild(ROUTES);