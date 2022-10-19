import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { AccountRoutingModule } from './account-routing.module';
import { LayoutComponent } from './layout.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

import { MaterialModule } from 'src/app/material.module';
import { LogoutComponent } from './logout.component';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        AccountRoutingModule,
        MaterialModule,
    ],
    declarations: [
        LayoutComponent,
        LoginComponent,
        RegisterComponent,
        LogoutComponent
    ],
    providers:[HttpClientModule ]
})
export class AccountModule { }
