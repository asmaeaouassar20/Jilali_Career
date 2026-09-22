import { inject, Injectable } from '@angular/core';
import { IUser } from '../../model/interfaces/User.model';
import { AuthService } from '../auth/auth-service';
import { Global } from '../../constant/Global.constant';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {
  
  private authService = inject(AuthService);
  private router = inject(Router);

  getCurrentUser() : IUser | null{
    if(this.authService.isAuthenticated()){
        const user = localStorage.getItem(Global.LOGIN_LOCAL_KEY)
        if(user!=null){
          return JSON.parse(user);
        }
    }  
    return null;
  }

  logout(){
      localStorage.removeItem(Global.LOGIN_LOCAL_KEY);
      localStorage.removeItem(Global.LOGIN_DATE)
      localStorage.setItem(Global. LOGOUT_DATE,(new Date()).toLocaleString());
      this.router.navigate(["/home"]);  
  }

  getAvatarLetters(){
    const user = this.getCurrentUser();
    if(!user) this.logout();
    const letter1OfFirstName=user?.firstName.slice(0,1).toUpperCase();
    const letter1OfLaststName=user?.lastName.slice(0,1).toUpperCase();
    if(letter1OfFirstName && letter1OfLaststName){
      return letter1OfFirstName+letter1OfLaststName;
    }
    return "login";
  }
}
