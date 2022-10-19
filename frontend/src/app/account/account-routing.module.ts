import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { LoginComponent } from './login.component';
import { LogoutComponent } from './logout.component';
import { RegisterComponent } from './register.component';

const routes: Routes = [
    {
        path: 'auth', component:LayoutComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            { path: '', pathMatch:"full", redirectTo: 'login'},
        ]
    },
    { path: 'logout', component: LogoutComponent},     
    { path: '', pathMatch:"full", redirectTo: 'auth'},
    { path:'**', redirectTo: 'auth'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }