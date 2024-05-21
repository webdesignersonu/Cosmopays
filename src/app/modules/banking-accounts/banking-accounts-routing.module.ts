import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankingAccountsComponent } from './banking-accounts/banking-accounts.component';

const routes: Routes = [
  {path:"", component:BankingAccountsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankingAccountsRoutingModule { }
