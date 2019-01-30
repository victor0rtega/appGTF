import { Component, OnInit } from '@angular/core';
import './login.component.scss';
import { AuthenticationService } from '../../app/services/authentication.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  private loginModel: any = {};
  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }


  login() {
    this.authenticationService.login(this.loginModel.email, this.loginModel.password)
    .subscribe((response: any) => {
      if (response.token) {
        const helper = new JwtHelperService();
        const decodedToken = helper.decodeToken(response.token);
        localStorage.setItem('currentUser', JSON.stringify(decodedToken));
      }
    });
  }

}
