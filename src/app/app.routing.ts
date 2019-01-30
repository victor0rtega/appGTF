import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../components/login/index';
import { RegisterUserComponent } from '../components/user/index';
// import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterUserComponent },

    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
