import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassportVerifyComponent } from './passport-verify/passport-verify.component';

const routes: Routes = [{path:"", component:PassportVerifyComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PassportVerifyRoutingModule { }
