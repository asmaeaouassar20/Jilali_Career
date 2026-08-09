import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../service/storage-service';
import { NoteModel } from '../../core/model/classes/Note.model';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {

  userNotes : NoteModel[] = [];

  // on injecte le service => Angular donne une instance de ce service
  constructor(private storageservice : StorageService){}

  ngOnInit(): void {
    this.userNotes = this.storageservice.getUserNotes();
  }

}
