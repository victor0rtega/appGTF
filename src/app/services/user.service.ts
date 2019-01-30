import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../app.constants';
import { User } from '../models/index';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(user: User) {
    return this.http.post(AppSettings.API_ENDPOINT + 'auth/user/create',
    { email: user.email,
      firstname: user.firstName,
      lastname: user.lastName,
      password: user.password
    });
  }
}
