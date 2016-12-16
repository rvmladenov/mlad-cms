import { Component, Input } from "@angular/core";

import { Page } from "./page.model";
import { PageService } from "./page.service";

import { AuthService } from '../auth/auth.service';

@Component({
    selector: '[page-info]',
    templateUrl: './page.component.html',
    styles: [`
        .pages-table-options {
            max-width: 25px;
        }
    `]
})
export class PageComponent {
    @Input() page: Page;

    constructor(private pageService: PageService, private auth: AuthService) {}
}