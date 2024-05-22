import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpenAccountRoutingModule } from './open-account-routing.module';
import { OpenAccountComponent } from './open-account/open-account.component';


@NgModule({
  declarations: [
    OpenAccountComponent
  ],
  imports: [
    CommonModule,
    OpenAccountRoutingModule
  ]
})
export class OpenAccountModule { }
