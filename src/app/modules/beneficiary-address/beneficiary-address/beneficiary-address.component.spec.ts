import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiaryAddressComponent } from './beneficiary-address.component';

describe('BeneficiaryAddressComponent', () => {
  let component: BeneficiaryAddressComponent;
  let fixture: ComponentFixture<BeneficiaryAddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeneficiaryAddressComponent]
    });
    fixture = TestBed.createComponent(BeneficiaryAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
