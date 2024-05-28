import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBeneficiaryComponent } from './add-beneficiary/add-beneficiary.component';

const routes: Routes = [
  {path:"", component:AddBeneficiaryComponent,
  children:[
    {
      path: '',  loadChildren: () => import('../beneficiary/beneficiary.module').then(m => m.BeneficiaryModule) 
      
    },
    {
      path: 'beneficiary', loadChildren: () => import('../beneficiary/beneficiary.module').then(m => m.BeneficiaryModule)
      
    },
    {
      path: 'beneficiary-address', loadChildren: () => import('../beneficiary-address/beneficiary-address.module').then(m => m.BeneficiaryAddressModule)
      
    },
    {
      path: 'beneficiary-bank-account', loadChildren: () => import('../beneficiary-bank-account/beneficiary-bank-account.module').then(m => m.BeneficiaryBankAccountModule)
      
    },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddBeneficiaryRoutingModule {
  
 }