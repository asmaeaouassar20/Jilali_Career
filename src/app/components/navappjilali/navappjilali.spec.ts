import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navappjilali } from './navappjilali';

describe('Navappjilali', () => {
  let component: Navappjilali;
  let fixture: ComponentFixture<Navappjilali>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navappjilali]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Navappjilali);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
