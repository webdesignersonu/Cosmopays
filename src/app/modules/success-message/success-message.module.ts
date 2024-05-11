import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuccessMessageRoutingModule } from './success-message-routing.module';
import { SuccessMessageComponent } from './success-message/success-message.component';


@NgModule({
  declarations: [
    SuccessMessageComponent
  ],
  imports: [
    CommonModule,
    SuccessMessageRoutingModule
  ]
})
export class SuccessMessageModule { }
