import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerAdvice2 } from './career-advice2';

describe('CareerAdvice2', () => {
  let component: CareerAdvice2;
  let fixture: ComponentFixture<CareerAdvice2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerAdvice2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareerAdvice2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
