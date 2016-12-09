import { Component, OnInit } from "@angular/core";

import { Error } from "./error.model";
import { ErrorService } from "./error.service";

declare var $: any;

@Component({
    selector: 'app-error',
    templateUrl: './error.component.html'
})
export class ErrorComponent implements OnInit {
    error: Error = new Error("Server", "No response from server");

    constructor(private errorService: ErrorService) {}

    ngOnInit() {
        this.errorService.errorOccurred
            .subscribe(
                (error: Error) => {
                    this.error = {title: error.title || this.error.title, message: error.message || this.error.message};
                    $('#dialog_error').modal('show');
                }
            );
    }
}