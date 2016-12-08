import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PageInputComponent } from "./page-input.component";
import { PageService } from "./page.service";
import { PageListComponent } from './page-list.component';
import { PageComponent } from './page.component';

import { pageRouting } from './page.routing';

@NgModule({
    declarations: [
        PageInputComponent,
        PageListComponent,
        PageComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        pageRouting
    ],
    providers: [PageService]
})
export class PageModule {

}