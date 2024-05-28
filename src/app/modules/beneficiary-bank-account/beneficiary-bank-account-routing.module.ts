import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeneficiaryBankAccountComponent } from './beneficiary-bank-account/beneficiary-bank-account.component';

const routes: Routes = [{path:"", component:BeneficiaryBankAccountComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeneficiaryBankAccountRoutingModule { }
