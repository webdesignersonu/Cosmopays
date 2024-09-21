import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankingFundsTransferComponent } from './banking-funds-transfer/banking-funds-transfer.component';

const routes: Routes = [
  {path:"", component:BankingFundsTransferComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankingFundsTransferRoutingModule { }
