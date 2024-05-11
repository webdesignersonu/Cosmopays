import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorporateDetailsRoutingModule } from './corporate-details-routing.module';
import { CorporateDetailsComponent } from './corporate-details/corporate-details.component';


@NgModule({
  declarations: [
    CorporateDetailsComponent
  ],
  imports: [
    CommonModule,
    CorporateDetailsRoutingModule
  ]
})
export class CorporateDetailsModule { }
