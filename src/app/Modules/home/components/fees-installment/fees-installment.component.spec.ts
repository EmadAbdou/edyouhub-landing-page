import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesInstallmentComponent } from './fees-installment.component';

describe('FeesInstallmentComponent', () => {
  let component: FeesInstallmentComponent;
  let fixture: ComponentFixture<FeesInstallmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeesInstallmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesInstallmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
