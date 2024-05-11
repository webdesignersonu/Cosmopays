import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorporateDetailsComponent } from './corporate-details/corporate-details.component';

const routes: Routes = [{path:"", component:CorporateDetailsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorporateDetailsRoutingModule { }
