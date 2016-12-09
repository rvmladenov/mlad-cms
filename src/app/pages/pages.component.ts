import { Component } from "@angular/core";

@Component({
    selector: 'app-pages',
    template: `
        <header class="row spacing">
            <nav class="col-md-8 col-md-offset-2">
                <ul>
                    <li routerLinkActive="active"><a [routerLink]="['/dashboard']">Create new </a></li>
                </ul>
            </nav>
        </header>
        <div>
           <router-outlet></router-outlet>
        </div>
    `
})
export class PagesComponent {}