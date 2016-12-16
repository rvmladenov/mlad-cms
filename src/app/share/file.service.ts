import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from "rxjs";

import { ErrorService } from '../errors/error.service';

import { API } from '../config/app.config';

@Injectable()
export class FileService {

    private pagesUrl: string = API.API_URL + '/' + API.FILE_UPLOAD;

    constructor(private http: Http, private errorService: ErrorService) { }

    uploadFile(file:any) {
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        
        var frmData = new FormData();
        frmData.append('sampleFile', file.files[0]);
        
        return this.http.post(this.pagesUrl + token, frmData)
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }
}