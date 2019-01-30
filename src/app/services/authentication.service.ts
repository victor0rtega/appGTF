import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
import { AppSettings } from '../app.constants';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    // login(username: string, password: string): Observable<Response> {
    //     return this.http.post<any>('/api/authenticate', { username: username, password: password })
    //         .map(user => {
    //             // login successful if there's a jwt token in the response
    //             if (user && user.token) {
    //                 // store user details and jwt token in local storage to keep user logged in between page refreshes
    //                 localStorage.setItem('currentUser', JSON.stringify(user));
    //             }

    //             return user;
    //         });
    // }

    login(email: string, password: string): Observable<any> {
      return this.loginRest(email, password);
    }

    loginRest(email: string, password: string): Observable<Response> {
      return this.http.post<any>(
        AppSettings.API_ENDPOINT + 'auth/user/authenticate',
        { email, password }
      );
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
