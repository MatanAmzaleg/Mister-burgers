import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkPreviewComponent } from './drink-preview.component';

describe('DrinkPreviewComponent', () => {
  let component: DrinkPreviewComponent;
  let fixture: ComponentFixture<DrinkPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinkPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrinkPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
