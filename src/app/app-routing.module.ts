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
  { path: 'user-profile', loadChildren: () => import('./modules/user-profile/user-profile.module').then(m => m.UserProfileModule) },
  { path: 'banking-accounts', loadChildren: () => import('./modules/banking-accounts/banking-accounts.module').then(m => m.BankingAccountsModule) },
  { path: 'open-account', loadChildren: () => import('./modules/open-account/open-account.module').then(m => m.OpenAccountModule) },
  { path: 'banking-statements', loadChildren: () => import('./modules/banking-statements/banking-statements.module').then(m => m.BankingStatementsModule) },
  { path: 'manage-beneficiary', loadChildren: () => import('./modules/manage-beneficiary/manage-beneficiary.module').then(m => m.ManageBeneficiaryModule) },
  { path: 'add-beneficiary', loadChildren: () => import('./modules/add-beneficiary/add-beneficiary.module').then(m => m.AddBeneficiaryModule) },
  { path: 'banking-funds-transfer', loadChildren: () => import('./modules/banking-funds-transfer/banking-funds-transfer.module').then(m => m.BankingFundsTransferModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
