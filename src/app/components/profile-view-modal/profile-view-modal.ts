import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { CurrentUserService } from '../../core/services/currentuser/current-user-service';
import { IUser } from '../../core/model/interfaces/User.model';
import { Router } from "@angular/router";
import { StorageService } from '../../core/services/storage/storage-service';

@Component({
  selector: 'app-profile-view-modal',
  imports: [],
  templateUrl: './profile-view-modal.html',
  styleUrl: './profile-view-modal.css',
})
export class ProfileViewModal implements OnInit {  

  private connectedUserService = inject(CurrentUserService);
  private storageService = inject(StorageService);
  private router = inject(Router);
  connectedUser! : IUser | null;
  loginDate! : string;
  logoutDate! : string;

  @Input() isOpen = false;
  @Output() closeProfileModal = new EventEmitter<void>()

  ngOnInit(): void {
    this.connectedUser=this.connectedUserService.getCurrentUser();
    this.loginDate = this.storageService.getLoginDate();    
    this.logoutDate = this.storageService.getLogoutDate();   
  }
  closeModal(){
    this.closeProfileModal.emit();
  }
  updateProfile(){
    this.router.navigateByUrl("/jilaliapp/update-profile");
    this.closeModal();    
  }
  logout(){
    this.connectedUserService.logout();
  }
}
