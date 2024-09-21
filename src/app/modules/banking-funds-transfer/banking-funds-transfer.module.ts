import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankingFundsTransferRoutingModule } from './banking-funds-transfer-routing.module';
import { BankingFundsTransferComponent } from './banking-funds-transfer/banking-funds-transfer.component';


@NgModule({
  declarations: [
    BankingFundsTransferComponent
  ],
  imports: [
    CommonModule,
    BankingFundsTransferRoutingModule
  ]
})
export class BankingFundsTransferModule { }
