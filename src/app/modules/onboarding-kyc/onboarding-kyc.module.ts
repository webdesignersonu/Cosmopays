import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardingKycRoutingModule } from './onboarding-kyc-routing.module';
import { OnboardingKycComponent } from './onboarding-kyc/onboarding-kyc.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OnboardingKycComponent
  ],
  imports: [
    CommonModule,
    OnboardingKycRoutingModule,FormsModule,ReactiveFormsModule
  ]
})
export class OnboardingKycModule { }
