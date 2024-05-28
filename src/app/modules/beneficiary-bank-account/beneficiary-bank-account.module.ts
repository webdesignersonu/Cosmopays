import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeneficiaryBankAccountRoutingModule } from './beneficiary-bank-account-routing.module';
import { BeneficiaryBankAccountComponent } from './beneficiary-bank-account/beneficiary-bank-account.component';


@NgModule({
  declarations: [
    BeneficiaryBankAccountComponent
  ],
  imports: [
    CommonModule,
    BeneficiaryBankAccountRoutingModule
  ]
})
export class BeneficiaryBankAccountModule { }
