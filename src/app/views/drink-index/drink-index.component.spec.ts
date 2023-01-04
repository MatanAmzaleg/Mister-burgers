import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkIndexComponent } from './drink-index.component';

describe('DrinkIndexComponent', () => {
  let component: DrinkIndexComponent;
  let fixture: ComponentFixture<DrinkIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinkIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrinkIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
