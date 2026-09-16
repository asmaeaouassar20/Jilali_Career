import { Component, OnInit } from '@angular/core';
import { NoteModel } from '../../core/model/classes/Note.model';
import { StorageService } from '../../core/services/storage/storage-service';
import { DatePipe } from '@angular/common';
import { TruncatePipe } from '../../pipe/truncate-pipe';
import { min } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  imports: [DatePipe,TruncatePipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {

  userNotes : NoteModel[] = [];
  noteToDispaly! : NoteModel | undefined;

  // on injecte le service => Angular donne une instance de ce service
  constructor(private storageservice : StorageService){}

  ngOnInit(): void {
    this.userNotes = this.storageservice.getUserNotes();
  }

  deleteNote(IndexNote:number){
    this.userNotes=this.storageservice.deleteNote(IndexNote);
  }

  // TODO
  getTimeAgo(createdAt : Date) : string{    
    const currentDate = new Date();    
    const difference = currentDate.getTime() - new Date(createdAt).getTime();
    
    const seconds = Math.floor(difference/1000);
    const minutes = Math.floor(seconds/60);
    const hours = Math.floor(minutes/60);
    const days = Math.floor(hours/24);

    if(seconds<60){
      return "quelques secondes";
    }
    if(minutes<60){
      return `${minutes} minute${minutes > 1 ? 's' : ''}`;
    }
    if(hours < 24){
      return `${hours} heure${hours>1 ? 's':''}`;
    }
    return `${days} jour${days>1 ? 's':''}`;
  }
}
