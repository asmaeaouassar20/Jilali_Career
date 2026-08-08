import { Component, inject } from '@angular/core';
import { NoteModel } from '../../core/model/classes/Note.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-note',
  imports: [],
  templateUrl: './add-note.html',
  styleUrl: './add-note.css',
})
export class AddNote {  
  newUserNote = new NoteModel(); // initialiser la note
  noteService = inject(Router);
  showAddNoteModal(){
    alert('add note ')
  }
  onSaveUserNote(){

  }
}
