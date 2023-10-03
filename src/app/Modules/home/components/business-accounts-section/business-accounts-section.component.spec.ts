import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessAccountsSectionComponent } from './business-accounts-section.component';

describe('BusinessAccountsSectionComponent', () => {
  let component: BusinessAccountsSectionComponent;
  let fixture: ComponentFixture<BusinessAccountsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessAccountsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessAccountsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
