import { Component, inject } from '@angular/core';
import { IUser } from '../../core/model/interfaces/User.model';
import { Global } from '../../core/constant/Global.constant';
import { Router, RouterOutlet } from '@angular/router';
import { Navappjilali } from "../../components/navappjilali/navappjilali";
import { ProfileViewModal } from "../../components/profile-view-modal/profile-view-modal";
import { CurrentUserService } from '../../core/services/currentuser/current-user-service';
import { MenuBurgerSVG } from "../../svg/menu-burger/menu-burger-svg/menu-burger-svg";
import { NgIf } from '@angular/common';
import { CloseBtn } from "../../svg/close-btn/close-btn/close-btn";

@Component({
  selector: 'app-layout',
  imports: [Navappjilali, RouterOutlet, ProfileViewModal, MenuBurgerSVG, CloseBtn],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  loggedUser! : IUser |null;
  router = inject(Router);
  currentUserService = inject(CurrentUserService);
  isSidebarOpen:boolean = false;

  // if user want to see his profile details
  isProfileViewModalOpen : boolean =false; 


  constructor(){
    this.loggedUser = this.currentUserService.getCurrentUser();  
  }
  recieveProfileDetailsViewOpenValue(isOpen : boolean){
    this.isProfileViewModalOpen=isOpen;
  }
  handleCloseProfileModal(){
    this.isProfileViewModalOpen=false;
  }
  handleUserLogout(){
    this.currentUserService.logout();  
  }

  // TODO
  getAvatarLetters(){

  }


  openSideBarMenu(){
    this.isSidebarOpen=true;
  }
  closeSideBar(){
    this.isSidebarOpen=false;
  }
 
}
