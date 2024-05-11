import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateDetailsComponent } from './corporate-details.component';

describe('CorporateDetailsComponent', () => {
  let component: CorporateDetailsComponent;
  let fixture: ComponentFixture<CorporateDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorporateDetailsComponent]
    });
    fixture = TestBed.createComponent(CorporateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
