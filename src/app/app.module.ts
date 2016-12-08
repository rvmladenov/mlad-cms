import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from "./app.routing";

import { AuthModule } from "./auth/auth.module";
import { AuthGuard } from './auth/auth-guard.service';

import { ErrorComponent } from "./errors/error.component";
import { ErrorService } from "./errors/error.service";
import { DashboardShellComponent } from './dashboard/dashboard.shell.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    DashboardShellComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AuthModule
  ],
  providers: [ErrorService,  AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
