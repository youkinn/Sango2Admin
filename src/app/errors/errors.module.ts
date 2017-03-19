import { NgModule } from '@angular/core';

import { P404Component } from './404.component';
import { P500Component } from './500.component';

import { ErrorsRoutingModule } from './errors-routing.module';

@NgModule({
  imports: [ErrorsRoutingModule],
  declarations: [
    P404Component,
    P500Component
  ]
})
export class ErrorsModule { }
