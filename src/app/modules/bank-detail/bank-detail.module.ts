import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankDetailRoutingModule } from './bank-detail-routing.module';
import { BankDetailComponent } from './bank-detail/bank-detail.component';


@NgModule({
  declarations: [
    BankDetailComponent
  ],
  imports: [
    CommonModule,
    BankDetailRoutingModule
  ]
})
export class BankDetailModule { }
