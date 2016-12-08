import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { API } from '../config/app.config';

import { ErrorService } from '../errors/error.service';

import { User } from '../users/user.model';

@Injectable()
export class AuthService {

  constructor(private http: Http, private errorService: ErrorService) { }

  // TODO: This should be available only for admins - in other words only admins could create users
  // signup(user: User) {
  //     const body = JSON.stringify(user);
  //     const headers = new Headers({'Content-Type': 'application/json'});
  //     return this.http.post(API.API_URL + '/user', body, {headers: headers})
  //         .map((response: Response) => response.json())
  //         .catch((error: Response) => {
  //             this.errorService.handleError(error.json());
  //             return Observable.throw(error.json());
  //         });
  // }

  signin(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(API.API_URL + '/user/signin', body, { headers: headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
  }

  logout() {
    localStorage.clear();
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

  belongsTo(user: User): boolean {
    if(user && localStorage.getItem('userId') == user._id) {
      return true;
    }

    return false;
  }
}
