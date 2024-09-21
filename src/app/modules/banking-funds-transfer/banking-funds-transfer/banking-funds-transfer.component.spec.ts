import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingFundsTransferComponent } from './banking-funds-transfer.component';

describe('BankingFundsTransferComponent', () => {
  let component: BankingFundsTransferComponent;
  let fixture: ComponentFixture<BankingFundsTransferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankingFundsTransferComponent]
    });
    fixture = TestBed.createComponent(BankingFundsTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
