import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-passport-verify',
  templateUrl: './passport-verify.component.html',
  styleUrls: ['./passport-verify.component.scss']
})
export class PassportVerifyComponent {
  passDetails:any=FormGroup
}
