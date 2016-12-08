import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { User } from "../users/user.model";
import { AuthService } from "./auth.service";

import { ErrorService } from '../errors/error.service';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
    myForm: FormGroup;

    constructor(private authService: AuthService, private router: Router, private err: ErrorService) {}

    onSubmit() {
        const user = new User(this.myForm.value.username, this.myForm.value.password);
        this.authService.signin(user)
            .subscribe(
                data => {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userId', data.userId);
                    this.router.navigateByUrl('/dashboard');
                },
                error => this.err.handleError(error) /*TODO: Check this "error" type */
            );
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            username: new FormControl(null, [
                Validators.required, 
                Validators.minLength(3)
            ]),
            password: new FormControl(null, [ 
                Validators.required,
                Validators.minLength(3)
            ])
        });
    }
}