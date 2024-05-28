import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankingStatementsComponent } from './banking-statements/banking-statements.component';

const routes: Routes = [
  {path:"", component:BankingStatementsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankingStatementsRoutingModule { }
