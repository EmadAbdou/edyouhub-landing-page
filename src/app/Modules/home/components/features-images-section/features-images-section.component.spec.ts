import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesImagesSectionComponent } from './features-images-section.component';

describe('FeaturesImagesSectionComponent', () => {
  let component: FeaturesImagesSectionComponent;
  let fixture: ComponentFixture<FeaturesImagesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesImagesSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesImagesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
