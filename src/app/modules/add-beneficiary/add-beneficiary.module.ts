import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddBeneficiaryRoutingModule } from './add-beneficiary-routing.module';
import { AddBeneficiaryComponent } from './add-beneficiary/add-beneficiary.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddBeneficiaryComponent
  ],
  imports: [
    CommonModule,
    AddBeneficiaryRoutingModule,ReactiveFormsModule,FormsModule
  ]
})
export class AddBeneficiaryModule { }
