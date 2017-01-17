import { Component, Output, OnInit, Input, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { PageService } from "./page.service";
import { Page } from "./page.model";

@Component({
    selector: 'page-input',
    templateUrl: './page-input.component.html'
})
export class PageInputComponent implements OnInit {
    @Input() page: Page;

    private changes = {title: '', subtitle: ''};
    myForm: FormGroup;

    constructor(private pageService: PageService) {}

    getData() {
        this.changes.title = this.myForm.value.title;
        this.changes.subtitle = this.myForm.value.subtitle;
        return this.changes;
    }

    /**
     * Resets the form data
     */
    resetData() {
        this.myForm.value.title = this.page.title;
        this.myForm.value.subtitle = this.page.subtitle;
    }

    ngOnInit() {
        this.pageService.pageIsEdit.subscribe(
            (page: Page) => this.page = page
        );

        this.myForm = new FormGroup({
            title: new FormControl(null, [
                Validators.required, 
                Validators.minLength(3)
            ]),

            subtitle: new FormControl(null, [ 
                Validators.required,
                Validators.minLength(3)
            ])
        });
    }
}