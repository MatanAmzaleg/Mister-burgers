import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerFilterComponent } from './burger-filter.component';

describe('BurgerFilterComponent', () => {
  let component: BurgerFilterComponent;
  let fixture: ComponentFixture<BurgerFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurgerFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurgerFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
