import { Component, OnInit } from "@angular/core";

import { Page } from "./page.model";
import { PageService } from "./page.service";

@Component({
    selector: 'pages-list',
    template: `
        <div class="col-md-8 col-md-offset-2">
            <page-edit [page]="page" *ngFor="let page of pages"></page-edit>
        </div>
    `
})
export class PageListComponent implements OnInit {
    pages: Page[];

    constructor(private pageService: PageService) {}

    ngOnInit() {
        this.pageService.getPages()
            .subscribe(
                (pages: Page[]) => {
                    this.pages = pages;
                }
            );
    }
}