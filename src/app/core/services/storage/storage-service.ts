import { Injectable } from '@angular/core';
import { NoteModel } from '../../model/classes/Note.model';
import { Global } from '../../constant/Global.constant';



@Injectable({
  providedIn: 'root',
})
export class StorageService {

  getUserNotes() : NoteModel[] {
    const notes = localStorage.getItem(Global.NOTES_LOCAL_KEY);
    if (notes) {
      return JSON.parse(notes);
    }
    return this.factoryNotes()
  }

  factoryNotes(): NoteModel[] {
    const newNotes: NoteModel[] = [
      { id: 100, title: "Prepare Your Self-Introduction", content: "Prepare a 2-minute introduction covering your background, key skills, professional experience, and career goals.", createdAt: new Date() },
      { id: 200, title: "Common Interview Questions", content: "Prepare answers for common questions such as: Tell me about yourself, What are your strengths and weaknesses?, Why do you want to join our company?, and Where do you see yourself in five years?", createdAt: new Date() }
     ]
    return newNotes
  }

  deleteNote(indexNote : number) : NoteModel[]{
    const notes = this.getUserNotes();
    notes.splice(indexNote,1);
    localStorage.setItem(Global.NOTES_LOCAL_KEY, JSON.stringify(notes));
    return notes;
  }

  setLanguageTranslate(language : string){
    localStorage.setItem('language',language);
  }
  getLanguageTranslate() : string{
    const lang = localStorage.getItem('language');
    if(lang==null) return 'en';
    return lang;
  }
  setLoginDate(loginDate : Date){    
    localStorage.setItem(Global.LOGIN_DATE, loginDate.toLocaleString());
  }
  getLoginDate(){
    const date = localStorage.getItem(Global.LOGIN_DATE);
    if(date) return date;
    return "__";
  }
  
}




