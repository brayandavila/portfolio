import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadImageComponent } from './load-image.component';

describe('LoadImageComponent', () => {
  let component: LoadImageComponent;
  let fixture: ComponentFixture<LoadImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadImageComponent]
    });
    fixture = TestBed.createComponent(LoadImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
