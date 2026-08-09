import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-note-modal',
  imports: [],
  templateUrl: './add-note-modal.html',
  styleUrl: './add-note-modal.css',
})
export class AddNoteModal {
  @Input() isOpen = false; // Le composant AddNoteModal va recevoir du parent l'information concernant son ouverture.
  @Output() close = new EventEmitter<void>();  //Le composant AddNoteModal peut prévenir son parent lorsqu'il veut être fermé.


  closeModal(){
    this.close.emit();
  }
}
