import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeneficiaryAddressComponent } from './beneficiary-address/beneficiary-address.component';

const routes: Routes = [{path:"", component:BeneficiaryAddressComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeneficiaryAddressRoutingModule { }
