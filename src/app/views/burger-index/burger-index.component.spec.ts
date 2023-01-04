import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerIndexComponent } from './burger-index.component';

describe('BurgerIndexComponent', () => {
  let component: BurgerIndexComponent;
  let fixture: ComponentFixture<BurgerIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurgerIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurgerIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
