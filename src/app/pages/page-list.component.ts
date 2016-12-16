import { Component } from "@angular/core";

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
export class PageListComponent {
    pages: Page[];

    constructor(private pageService: PageService) {
        this.pageService.getPages()
            .subscribe(
                (pages: Page[]) => {
                    this.pages = pages;
                }
            );
    }

// TODO: Old Should be removed if not using it
    // ngOnInit() {
    //     this.pageService.getPages()
    //         .subscribe(
    //             (pages: Page[]) => {
    //                 this.pages = pages;
    //             }
    //         );
    // }
}