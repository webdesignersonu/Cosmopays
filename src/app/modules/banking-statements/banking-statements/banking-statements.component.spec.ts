import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingStatementsComponent } from './banking-statements.component';

describe('BankingStatementsComponent', () => {
  let component: BankingStatementsComponent;
  let fixture: ComponentFixture<BankingStatementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankingStatementsComponent]
    });
    fixture = TestBed.createComponent(BankingStatementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
