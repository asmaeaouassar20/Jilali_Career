import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBurgerSVG } from './menu-burger-svg';

describe('MenuBurgerSVG', () => {
  let component: MenuBurgerSVG;
  let fixture: ComponentFixture<MenuBurgerSVG>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuBurgerSVG]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuBurgerSVG);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
