import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SigninComponent } from "./signin.component";
import { AuthComponent } from "./auth.component";
import { AuthService } from "./auth.service";

@NgModule({
    declarations: [
        SigninComponent,
        AuthComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    providers: [AuthService]
})
export class AuthModule {

}