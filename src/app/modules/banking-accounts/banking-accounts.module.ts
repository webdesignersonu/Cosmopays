import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankingAccountsRoutingModule } from './banking-accounts-routing.module';
import { BankingAccountsComponent } from './banking-accounts/banking-accounts.component';


@NgModule({
  declarations: [
    BankingAccountsComponent
  ],
  imports: [
    CommonModule,
    BankingAccountsRoutingModule
  ]
})
export class BankingAccountsModule { }
