import { Component, OnInit } from '@angular/core';
import { NoteModel } from '../../core/model/classes/Note.model';
import { StorageService } from '../../services/storage/storage-service';

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
