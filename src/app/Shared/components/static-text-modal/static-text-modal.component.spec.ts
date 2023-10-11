import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticTextModalComponent } from './static-text-modal.component';

describe('StaticTextModalComponent', () => {
  let component: StaticTextModalComponent;
  let fixture: ComponentFixture<StaticTextModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticTextModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticTextModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
