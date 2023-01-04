import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerPreviewComponent } from './burger-preview.component';

describe('BurgerPreviewComponent', () => {
  let component: BurgerPreviewComponent;
  let fixture: ComponentFixture<BurgerPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurgerPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurgerPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
