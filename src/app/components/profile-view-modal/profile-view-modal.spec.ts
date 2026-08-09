import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileViewModal } from './profile-view-modal';

describe('ProfileViewModal', () => {
  let component: ProfileViewModal;
  let fixture: ComponentFixture<ProfileViewModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileViewModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileViewModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
