import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartRoadExhibitionComponent } from './smart-road-exhibition.component';

describe('SmartRoadExhibitionComponent', () => {
  let component: SmartRoadExhibitionComponent;
  let fixture: ComponentFixture<SmartRoadExhibitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartRoadExhibitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartRoadExhibitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
