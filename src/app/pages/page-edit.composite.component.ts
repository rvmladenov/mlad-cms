import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PageService } from './page.service';
import { Page } from './page.model';

import { PageInputComponent } from './page-input.component';

declare var tinymce: any;

@Component({
    selector: 'page-edit',
    templateUrl: './page-edit.composite.component.html'
})
export class PageEditCompositeComponent implements OnInit {
    /**
     * Defines if the selected page for editting is new page or is being updated
     */
    isNew:boolean = false;
    tinyMceID: String = 'my-editor-id';
    @Output() page: Page;

    @ViewChild(PageInputComponent) pageInputComponent: PageInputComponent;
    
    constructor(private route: ActivatedRoute, private pageService: PageService) {}

    ngOnInit() {
        if(!this.route.params['id']) {
            this.page = new Page();
        } else {
            this.pageService.getPage(this.route.params['id'])
                .subscribe(page => {
                        this.page = page;
                });
        }
    }

    /**
     * Shallow copy of the object properties
     */
    private updatePage(changedProps: Page) {
        if(changedProps && this.page) {
            let text = tinymce.get(this.tinyMceID).getContent();
            changedProps.text = text;

            Object.assign(this.page, changedProps);
        }
    }

    handleOnSave(pageInput: Page) {
        this.updatePage(pageInput);

        console.log("Saving Page data ....");
        console.dir(this.page);

        // TODO ----------------------------------------------
        this.pageService.addPage(this.page).subscribe(
            newPage: Page => {}, 
            err => con;


        // TODO: Add the actual save in here

        // TODO:
        // this.pageService.addPage(new Page(
        //             result.obj.title,
        //             result.obj.subtitle,
        //             result.obj.text,
        //             result.obj.status,
        //             result.obj.category,
        //             result.obj.lang));
    }

    handleOnCancel() {
        //TODO: Add this
    }
}