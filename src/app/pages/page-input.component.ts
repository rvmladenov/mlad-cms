import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { PageService } from "./page.service";
import { Page } from "./page.model";

@Component({
    selector: 'page-input',
    templateUrl: './page-input.component.html'
})
export class PageInputComponent implements OnInit {
    page: Page;

    constructor(private pageService: PageService) {}

    onSubmit(form: NgForm) {
        if (this.page) {
            // Edit
            this.page.title = form.value.title;
            this.pageService.updatePage(this.page)
                .subscribe(
                    result => console.log(result)
                );
            this.page = null;
        } else {
            // Create
            const page = new Page(form.value.title, form.value.subtitle, form.value.text);
            this.pageService.addPage(page)
                .subscribe(
                    data => console.log(data),
                    // error => console.error(error)
                );
        }
        form.resetForm();
    }

    onClear(form: NgForm) {
        this.page = null;
        form.resetForm();
    }

    ngOnInit() {
        this.pageService.pageIsEdit.subscribe(
            (page: Page) => this.page = page
        );
    }
}