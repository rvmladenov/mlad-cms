import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { dashboardRouting } from "./dashboard.routing";
import { DashboardComponent } from "./dashboard.component";
import { DashboardHeaderComponent } from "./dashboard.header.component";

import { PagesComponent } from "../pages/pages.component";

@NgModule({
    declarations: [
        DashboardComponent,
        DashboardHeaderComponent,
        PagesComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        dashboardRouting
    ]
})
export class DashboardModule {}