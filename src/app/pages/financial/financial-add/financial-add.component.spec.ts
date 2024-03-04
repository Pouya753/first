import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialAddComponent } from './financial-add.component';

describe('FinancialAddComponent', () => {
  let component: FinancialAddComponent;
  let fixture: ComponentFixture<FinancialAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FinancialAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinancialAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
