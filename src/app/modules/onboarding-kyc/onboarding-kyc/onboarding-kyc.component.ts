
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-onboarding-kyc',
  templateUrl: './onboarding-kyc.component.html',
  styleUrls: ['./onboarding-kyc.component.scss']
})
export class OnboardingKycComponent {
  onBoardKycForm:any=FormGroup;
  submited:any;
  tab1: any = 1;
  completedSteps: number = 0;
  clVal:boolean= false;
  clVal1:boolean=false;
  clVal11:any="1";
  clVal2:boolean=false;
  clVal3:boolean=false;
  clVal4:boolean=false;
  clVal5:boolean=false;
  constructor(private services:ApiServiceService,private formBuilder: FormBuilder,  private router:Router) {
    
  }
}
