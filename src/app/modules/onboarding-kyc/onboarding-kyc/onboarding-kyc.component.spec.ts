import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingKycComponent } from './onboarding-kyc.component';

describe('OnboardingKycComponent', () => {
  let component: OnboardingKycComponent;
  let fixture: ComponentFixture<OnboardingKycComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnboardingKycComponent]
    });
    fixture = TestBed.createComponent(OnboardingKycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
