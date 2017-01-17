import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PageInputComponent } from "./page-input.component";
import { PageService } from "./page.service";
import { PageListComponent } from './page-list.component';
import { PageComponent } from './page.component';
import { PageEditCompositeComponent } from './page-edit.composite.component';

import { pageRouting } from './page.routing';

import { SimpleTinyComponent } from '../share/tyniMcsEditorComponent';

@NgModule({
    declarations: [
        PageInputComponent,
        PageListComponent,
        PageComponent,
        PageEditCompositeComponent,
        SimpleTinyComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        pageRouting
    ],
    providers: [PageService]
})
export class PageModule {

}