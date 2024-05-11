import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PassportVerifyRoutingModule } from './passport-verify-routing.module';
import { PassportVerifyComponent } from './passport-verify/passport-verify.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PassportVerifyComponent
  ],
  imports: [
    CommonModule,
    PassportVerifyRoutingModule,ReactiveFormsModule,FormsModule
  ]
})
export class PassportVerifyModule { }
