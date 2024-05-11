import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)},
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
  { path: 'sign-up', loadChildren: () => import('./modules/sign-up/sign-up.module').then(m => m.SignUpModule) },
  { path: 'otp-verification', loadChildren: () => import('./modules/otp-verification/otp-verification.module').then(m => m.OtpVerificationModule) },
  { path: 'reset-password', loadChildren: () => import('./modules/reset-password/reset-password.module').then(m => m.ResetPasswordModule) },
  { path: 'success-message', loadChildren: () => import('./modules/success-message/success-message.module').then(m => m.SuccessMessageModule) },
  { path: 'onboarding-kyc', loadChildren: () => import('./modules/onboarding-kyc/onboarding-kyc.module').then(m => m.OnboardingKycModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
