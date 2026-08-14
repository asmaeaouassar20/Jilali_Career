import { Injectable } from '@angular/core';
import { NoteModel } from '../../core/model/classes/Note.model';


@Injectable({
  providedIn: 'root',
})
export class StorageService {
  getUserNotes() {
    const notes = localStorage.getItem('my-notes');
    if (notes) {
      return JSON.parse(notes);
    }
    return this.factoryNotes()
  }

  factoryNotes(): NoteModel[] {
    const newNotes: NoteModel[] = [
      { id: 100, title: "Asmae Title", content: "I am a serious person who really enjoys learning and taking on challenges.", createdAt: new Date() },
      { id: 200, title: "Jilali Title", content: "He is an engineer I met online, and I would love to be as talented as he is.", createdAt: new Date() }
    ]
    return newNotes
  }
}




