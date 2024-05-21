import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingAccountsComponent } from './banking-accounts.component';

describe('BankingAccountsComponent', () => {
  let component: BankingAccountsComponent;
  let fixture: ComponentFixture<BankingAccountsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankingAccountsComponent]
    });
    fixture = TestBed.createComponent(BankingAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
