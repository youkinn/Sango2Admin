import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

import { LoginComponent } from './login.component';

import { AccountRoutingModule } from './account-routing.module';

@NgModule({
    imports: [
        // BrowserModule
        // ,
        AccountRoutingModule
    ],
    declarations: [
        LoginComponent
    ]
})
export class AccountModule { }