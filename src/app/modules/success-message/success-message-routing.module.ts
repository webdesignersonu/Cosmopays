import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuccessMessageComponent } from './success-message/success-message.component';

const routes: Routes = [
  {path:"",component:SuccessMessageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuccessMessageRoutingModule { }
