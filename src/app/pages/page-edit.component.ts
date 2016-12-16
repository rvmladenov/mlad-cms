import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PageService } from './page.service';
import { Page } from './page.model';

declare var tinymce: any;

@Component({
    selector: 'page-edit',
    templateUrl: './page-edit.component.html'
})
export class PageEditComponent implements OnInit {
    /**
     * Defines if the selected page for editting is new page or is being updated
     */
    isNew:boolean = false;
    tinyMceID: String = 'my-editor-id';
    @Output() page: Page;
    
    constructor(private route: ActivatedRoute, private pageService: PageService) {}

    ngOnInit() {
        if(!this.route.params['id']) {
            this.isNew = true;
        } else {
        // TODO: Populte the required data - this may also be happening when the view is already rendered - afterViewInit
            
            this.pageService.getPage(this.route.params['id'])
                .subscribe(page=> {
                        this.page = page;
                });
        }
    }

    keyupHandlerFunction(ev)  {
        // TODO: perhapse some cool future can be added using this :)
        // console.log(ev);
    }

    handleOnSave() {
        let text = tinymce.get(this.tinyMceID).getContent();

        // TODO:
        // this.pageService.addPage(new Page(
        //             result.obj.title,
        //             result.obj.subtitle,
        //             result.obj.text,
        //             result.obj.status,
        //             result.obj.category,
        //             result.obj.lang));

        console.log(text);
    }

    handleOnCancel() {
        //TODO: Add this
    }
}