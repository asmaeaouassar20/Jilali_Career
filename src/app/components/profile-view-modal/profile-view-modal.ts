import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-profile-view-modal',
  imports: [],
  templateUrl: './profile-view-modal.html',
  styleUrl: './profile-view-modal.css',
})
export class ProfileViewModal {
  @Input() isOpen = false;
  @Output() closeProfileModal = new EventEmitter<void>()
  closeModal(){
    this.closeProfileModal.emit();
  }
}
