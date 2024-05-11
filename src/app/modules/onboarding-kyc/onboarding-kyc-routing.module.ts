import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardingKycComponent } from './onboarding-kyc/onboarding-kyc.component';
const routes: Routes = [{path:"", component:OnboardingKycComponent,
children:[
  
    // {
    //   path: '', loadChildren: () => import('../corporate-details/corporate-details.module').then(m => m.CorporateDetailsModule) 
      
    // },
    // {
    //   path: 'corporate', loadChildren: () => import('../corporate-details/corporate-details.module').then(m => m.CorporateDetailsModule)
      
    // },
    {
      path: '',  loadChildren: () => import('../passport-verify/passport-verify.module').then(m => m.PassportVerifyModule) 
      
    },
    {
      path: 'passport', loadChildren: () => import('../passport-verify/passport-verify.module').then(m => m.PassportVerifyModule)
      
    },
   

    {
      path: 'bank-detail', loadChildren: () => import('../bank-detail/bank-detail.module').then(m => m.BankDetailModule) 
      
    },
    {
      path: 'utility', loadChildren: () => import('../utility/utility.module').then(m => m.UtilityModule)
      
    },
   
   
    {
        path: 'esign', loadChildren: () => import('../e-sign/e-sign.module').then(m => m.ESignModule) 
        
      }
   

]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardingKycRoutingModule { }
