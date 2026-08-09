import { Component, inject } from '@angular/core';
import { NoteModel } from '../../core/model/classes/Note.model';
import { Router } from '@angular/router';
import { AddNoteModal } from "../../components/add-note-modal/add-note-modal";


@Component({
  selector: 'app-add-note',
  imports: [AddNoteModal],
  templateUrl: './add-note.html',
  styleUrl: './add-note.css',
})
export class AddNote {  
  newUserNote = new NoteModel(); // initialiser la note
  noteService = inject(Router);
  openModalAddNote(){
    alert('add note ')
  }
  onSaveUserNote(){

  }
}
