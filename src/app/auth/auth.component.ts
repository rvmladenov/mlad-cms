import { Component, OnInit } from '@angular/core';

import { ErrorService } from '../errors/error.service';
import { Error } from "../errors/error.model";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private err: ErrorService) { }

  ngOnInit() {
  }

  authorize() {
    this.err.handleError(new Error("dummy error", "Some stupid message"));
  }

}
