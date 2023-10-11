import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesFormModalComponent } from './fees-form-modal.component';

describe('FeesFormModalComponent', () => {
  let component: FeesFormModalComponent;
  let fixture: ComponentFixture<FeesFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeesFormModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
