import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageBeneficiaryRoutingModule } from './manage-beneficiary-routing.module';
import { ManageBeneficiaryComponent } from './manage-beneficiary/manage-beneficiary.component';


@NgModule({
  declarations: [
    ManageBeneficiaryComponent
  ],
  imports: [
    CommonModule,
    ManageBeneficiaryRoutingModule
  ]
})
export class ManageBeneficiaryModule { }
