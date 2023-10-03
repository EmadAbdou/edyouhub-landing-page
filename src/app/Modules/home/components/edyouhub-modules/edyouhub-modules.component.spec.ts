import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdyouhubModulesComponent } from './edyouhub-modules.component';

describe('EdyouhubModulesComponent', () => {
  let component: EdyouhubModulesComponent;
  let fixture: ComponentFixture<EdyouhubModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdyouhubModulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdyouhubModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
