import { Component, Input } from "@angular/core";

import { Page } from "./page.model";
import { PageService } from "./page.service";

import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-page',
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

    constructor(private messageService: PageService, private auth: AuthService) {}

    onEdit() {
        this.messageService.editMessage(this.page);
    }

    onDelete() {
        this.messageService.deleteMessage(this.page)
            .subscribe(
                result => console.log(result)
            );
    }

    belongsToUser() {
        return this.auth.belongsTo(this.page.created_by);
    }
}