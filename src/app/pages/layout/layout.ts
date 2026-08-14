import { Component, inject } from '@angular/core';
import { IUser } from '../../core/model/interfaces/User.model';
import { Global } from '../../core/constant/Global.constant';
import { Router, RouterOutlet } from '@angular/router';
import { Navappjilali } from "../../components/navappjilali/navappjilali";
import { ProfileViewModal } from "../../components/profile-view-modal/profile-view-modal";

@Component({
  selector: 'app-layout',
  imports: [Navappjilali, RouterOutlet, ProfileViewModal],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  loggedUser! : IUser;
  router = inject(Router);

  // if user want to see his profile details
  isProfileViewModalOpen : boolean =false;


  constructor(){
    const localUser = localStorage.getItem(Global.LOGIN_LOCAL_KEY);
    if(localUser != null){
      this.loggedUser = JSON.parse(localUser);
    }
  }
  recieveProfileDetailsViewOpenValue(isOpen : boolean){
    this.isProfileViewModalOpen=isOpen;
  }
  handleCloseProfileModal(){
    this.isProfileViewModalOpen=false;
  }
  handleUserLogout(){
    localStorage.removeItem(Global.LOGIN_LOCAL_KEY);
    this.router.navigate(["/home"]);
    console.log("logout from layout")
  }
}
