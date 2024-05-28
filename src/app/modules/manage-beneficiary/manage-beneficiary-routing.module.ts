import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageBeneficiaryComponent } from './manage-beneficiary/manage-beneficiary.component';

const routes: Routes = [
  {path:"",component:ManageBeneficiaryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageBeneficiaryRoutingModule { }
