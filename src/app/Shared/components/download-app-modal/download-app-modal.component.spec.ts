import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadAppModalComponent } from './download-app-modal.component';

describe('DownloadAppModalComponent', () => {
  let component: DownloadAppModalComponent;
  let fixture: ComponentFixture<DownloadAppModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadAppModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadAppModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
