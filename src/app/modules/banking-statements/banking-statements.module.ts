import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankingStatementsRoutingModule } from './banking-statements-routing.module';
import { BankingStatementsComponent } from './banking-statements/banking-statements.component';


@NgModule({
  declarations: [
    BankingStatementsComponent
  ],
  imports: [
    CommonModule,
    BankingStatementsRoutingModule
  ]
})
export class BankingStatementsModule { }
