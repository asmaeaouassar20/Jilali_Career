import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NoteModel } from '../../core/model/classes/Note.model'

@Component({
  selector: 'app-add-note-modal',
  imports: [ReactiveFormsModule],
  templateUrl: './add-note-modal.html',
  styleUrl: './add-note-modal.css',
})
export class AddNoteModal {
  @Input() isOpen = false; // Le composant AddNoteModal va recevoir du parent l'information concernant son ouverture.
  @Output() close = new EventEmitter<void>();  //Le composant AddNoteModal peut prévenir son parent lorsqu'il veut être fermé.
  @Output() newNoteValues = new EventEmitter<any>();


  // form to add new note  
  form = new FormGroup({
    id :new FormControl(),
    title : new FormControl('',Validators.required),
    content : new FormControl('',Validators.required),
    createdAt : new FormControl(new Date())
  })

  closeModal(){
    this.close.emit();
  }

  addNewNote(){
    // Vérification du formulaire 
    if (this.form.valid) { 
      this.newNoteValues.emit(this.form.value)  
    }  
  }
}
