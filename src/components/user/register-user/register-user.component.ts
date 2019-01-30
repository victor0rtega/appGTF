import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import './register-user.component.scss';
import { UserService } from '../../../app/services/user.service';
import { User } from '../../../app/models';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html'
})
export class RegisterUserComponent implements OnInit {

  private userModel: any = {};

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
  }


  register() {
    console.log(this.userModel);

    if (this.userModel && this.userModel.email) {
      this.userService.createUser(this.userModel)
      .subscribe(
          data => {
            alert('usuario creado con exito');
            this.router.navigate(['login']);
          },
          error => {
              alert('Error al registrar el usuario');
          });
    }
  }

  cancel() {
    this.router.navigate(['login']);
  }
}
