import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessCooperationComponent } from './business-cooperation.component';

describe('BusinessCooperationComponent', () => {
  let component: BusinessCooperationComponent;
  let fixture: ComponentFixture<BusinessCooperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessCooperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessCooperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
