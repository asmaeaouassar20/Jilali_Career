import { Component, inject } from '@angular/core';
import { IUser } from '../../core/model/interfaces/User.model';
import { Global } from '../../core/constant/Global.constant';
import { Router } from '@angular/router';
import { Navappjilali } from "../../components/navappjilali/navappjilali";

@Component({
  selector: 'app-layout',
  imports: [Navappjilali],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  loggedUser! : IUser;
  router = inject(Router);
  constructor(){
    const localUser = localStorage.getItem(Global.LOGIN_LOCAL_KEY);
    if(localUser != null){
      this.loggedUser = JSON.parse(localUser);
    }
  }
  onLogout(){
    localStorage.removeItem(Global.LOGIN_LOCAL_KEY);
    this.router.navigate(["/home"]);
  }
}
