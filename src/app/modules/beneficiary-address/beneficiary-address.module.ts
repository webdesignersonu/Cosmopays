import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeneficiaryAddressRoutingModule } from './beneficiary-address-routing.module';
import { BeneficiaryAddressComponent } from './beneficiary-address/beneficiary-address.component';


@NgModule({
  declarations: [
    BeneficiaryAddressComponent
  ],
  imports: [
    CommonModule,
    BeneficiaryAddressRoutingModule
  ]
})
export class BeneficiaryAddressModule { }
