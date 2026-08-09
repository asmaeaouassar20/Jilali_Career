import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerAdvice } from './career-advice';

describe('CareerAdvice', () => {
  let component: CareerAdvice;
  let fixture: ComponentFixture<CareerAdvice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerAdvice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareerAdvice);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
