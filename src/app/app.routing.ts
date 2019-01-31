import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../components/login/index';
import { RegisterUserComponent } from '../components/user/index';
import { AccountComponent } from 'src/components/main/account/account.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterUserComponent },
    { path: 'account', component: AccountComponent },

    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
