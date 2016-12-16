import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Page } from "./page.model";
import { ErrorService } from "../errors/error.service";

import { API } from '../config/app.config';

@Injectable()
export class PageService {
    private pages: Page[] = [];
    pageIsEdit = new EventEmitter<Page>();
    private pagesUrl: string = API.API_URL + '/' + API.API_PAGES;

    constructor(private http: Http, private errorService: ErrorService) {}

    addPage(page: Page) {
        const body = JSON.stringify(page);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.post(this.pagesUrl + token, body, {headers: headers})
            .map((response: Response) => {
                const result = response.json();
                const page = new Page(
                    result.obj.title,
                    result.obj.subtitle,
                    result.obj.text,
                    result.obj.status,
                    result.obj.category,
                    result.obj.lang);
                this.pages.push(page);
                return page;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    getPages() {
        return this.http.get(this.pagesUrl)
            .map((response: Response) => {
                const pages = response.json().obj;
                let transformedPages: Page[] = [];
                for (let page of pages) {
                    transformedPages.push(new Page(page.title, page.subtitle, page.text, page.status, page.category, page.lang));
                }
                this.pages = transformedPages;
                return transformedPages;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }
    
    getPage(pageId: String) {
        return this.http.get(this.pagesUrl + pageId)
            .map((response: Response) => {
                const page = response.json().obj;
                
                return page;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    editPage(page: Page) {
        // TODO: Will I need this ?
        this.pageIsEdit.emit(page);
    }

    updatePage(page: Page) {
        const body = JSON.stringify(page);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.patch(this.pagesUrl + page._id + token, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    deletePage(page: Page) {
        this.pages.splice(this.pages.indexOf(page), 1);
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.delete(this.pagesUrl + page._id + token)
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                //TODO: This functionality is repeated few times in this file - think of delegating this
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }
}