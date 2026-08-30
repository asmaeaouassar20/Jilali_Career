import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { CurrentUserService } from '../../core/services/currentuser/current-user-service';
import { IUser } from '../../core/model/interfaces/User.model';

@Component({
  selector: 'app-profile-view-modal',
  imports: [],
  templateUrl: './profile-view-modal.html',
  styleUrl: './profile-view-modal.css',
})
export class ProfileViewModal implements OnInit {

  private connectedUserService = inject(CurrentUserService);
  connectedUser! : IUser | null;

  @Input() isOpen = false;
  @Output() closeProfileModal = new EventEmitter<void>()

  ngOnInit(): void {
    this.connectedUser=this.connectedUserService.getCurrentUser();
  }

  closeModal(){
    this.closeProfileModal.emit();
  }
}
