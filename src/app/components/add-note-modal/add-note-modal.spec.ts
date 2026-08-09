import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddNoteModal } from './add-note-modal';



describe('Modal', () => {
  let component: AddNoteModal;
  let fixture: ComponentFixture<AddNoteModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNoteModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNoteModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
