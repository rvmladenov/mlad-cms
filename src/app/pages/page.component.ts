import { Component, Input } from "@angular/core";

import { Page } from "./page.model";
import { PageService } from "./page.service";

import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'page-edit',
    templateUrl: './page.component.html',
    styles: [`
        .author {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
    `]
})
export class PageComponent {
    @Input() page: Page;

    constructor(private pageService: PageService, private auth: AuthService) {}

    onEdit() {
        this.pageService.editPage(this.page);
    }

    onDelete() {
        this.pageService.deletePage(this.page)
            .subscribe(
                result => console.log(result)
            );
    }

    belongsToUser() {
        return this.auth.belongsTo(this.page.created_by);
    }
}