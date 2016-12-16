import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { PageService } from "./page.service";
import { Page } from "./page.model";

@Component({
    selector: 'page-input',
    templateUrl: './page-input.component.html'
})
export class PageInputComponent implements OnInit {
    @Input() page: Page;
    myForm: FormGroup;

    constructor(private pageService: PageService) {}

// TODO: Old Code
    // onSubmit(form: NgForm) {
    //     if (this.page) {
    //         // Edit
    //         this.page.title = form.value.title;
    //         this.pageService.updatePage(this.page)
    //             .subscribe(
    //                 result => console.log(result)
    //             );
    //         this.page = null;
    //     } else {
    //         // Create
    //         const page = new Page(form.value.title, form.value.subtitle, form.value.text);
    //         this.pageService.addPage(page)
    //             .subscribe(
    //                 data => console.log(data),
    //                 // error => console.error(error)
    //             );
    //     }
    //     form.resetForm();
    // }

// TODO: Old Code
    // onClear(form: NgForm) {
    //     this.page = null;
    //     form.resetForm();
    // }

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