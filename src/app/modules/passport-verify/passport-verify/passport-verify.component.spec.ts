import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassportVerifyComponent } from './passport-verify.component';

describe('PassportVerifyComponent', () => {
  let component: PassportVerifyComponent;
  let fixture: ComponentFixture<PassportVerifyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassportVerifyComponent]
    });
    fixture = TestBed.createComponent(PassportVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
