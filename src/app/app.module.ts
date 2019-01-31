import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { routing } from './app.routing';


import { AppComponent } from './app.component';
import { RegisterUserComponent } from '../components/user/index';
import { LoginComponent } from '../components/login/index';
import { UserService } from './services/user.service';
import { AuthenticationService } from './services/authentication.service';
import { AccountComponent } from 'src/components/main/account/account.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    LoginComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    UserService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
