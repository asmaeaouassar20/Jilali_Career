import { inject, Injectable } from '@angular/core';
import { IUser } from '../../model/interfaces/User.model';
import { AuthService } from '../auth/auth-service';
import { Global } from '../../constant/Global.constant';

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {
  
  private authService = inject(AuthService);

  getCurrentUser() : IUser | null{
    if(this.authService.isAuthenticated()){
        const user = localStorage.getItem(Global.LOGIN_LOCAL_KEY)
        if(user!=null){
          return JSON.parse(user);
        }
    }  
    return null;
  }
}
