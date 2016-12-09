import { Component, OnInit } from "@angular/core";

import { Page } from "./page.model";
import { PageService } from "./page.service";

@Component({
    selector: 'pages-list',
    templateUrl: './page-list.component.html',
    styles: [`
        #pages-table {
            width: 100%;
        }
    `]
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