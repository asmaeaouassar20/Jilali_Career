import { Component, contentChild, inject, OnInit } from '@angular/core';
import { NoteModel } from '../../core/model/classes/Note.model';
import { Router } from '@angular/router';
import { AddNoteModal } from "../../components/add-note-modal/add-note-modal";


@Component({
  selector: 'app-add-note',
  imports: [AddNoteModal],
  templateUrl: './add-note.html',
  styleUrl: './add-note.css',
})
export class AddNote implements OnInit {  
  newUserNote = new NoteModel(); // initialiser la note
  noteService = inject(Router);

  // modal to add new note
  isModalAddNoteOpen : boolean = false;

  myNotes! : NoteModel[];

  
  ngOnInit() : void {
    this.loadAllNotes();
  }

  loadAllNotes(){
    const notes = localStorage.getItem('my-notes');
    if(notes){
      this.myNotes=JSON.parse(notes)
    }else{
      this.myNotes=this.factoryNotes();
    }
  }

  factoryNotes() : NoteModel[]{
    const newNotes : NoteModel[] = [
      {id:100 , title: "Asmae" , content:"I am beauriful and intelligent" , createdAt: new Date()},
      {id:200 , title: "ALi" , content:"I am a vendor" , createdAt:new Date()}
    ]
    return newNotes
  }

  openModalAddNote(){
    this.isModalAddNoteOpen=true;
  }
  closeModalAddNote(){
    this.isModalAddNoteOpen=false;
  }
  
  receiveNewNoteAndSave(newNote:NoteModel){
    const idOfLastNote = this.myNotes[this.myNotes.length-1].id;
    newNote.id= idOfLastNote+1;
    this.myNotes.push(newNote);
    localStorage.setItem('my-notes', JSON.stringify(this.myNotes))
    this.closeModalAddNote()
  }

}
