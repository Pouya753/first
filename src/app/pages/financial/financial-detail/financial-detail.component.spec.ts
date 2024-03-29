import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialDetailComponent } from './financial-detail.component';

describe('FinancialDetailComponent', () => {
  let component: FinancialDetailComponent;
  let fixture: ComponentFixture<FinancialDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FinancialDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinancialDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
