import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';

import { AccountRoutingModule } from './account-routing.module';

@NgModule({
    imports: [
        CommonModule,
        AccountRoutingModule
    ],
    declarations: [
        LoginComponent
    ]
})
export class AccountModule { }