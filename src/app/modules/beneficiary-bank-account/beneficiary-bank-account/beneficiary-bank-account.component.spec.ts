import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiaryBankAccountComponent } from './beneficiary-bank-account.component';

describe('BeneficiaryBankAccountComponent', () => {
  let component: BeneficiaryBankAccountComponent;
  let fixture: ComponentFixture<BeneficiaryBankAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeneficiaryBankAccountComponent]
    });
    fixture = TestBed.createComponent(BeneficiaryBankAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
