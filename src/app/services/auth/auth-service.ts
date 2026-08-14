import { Injectable } from '@angular/core';
import { Global } from '../../core/constant/Global.constant';



@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated(): boolean {
    const userLocalStorage = localStorage.getItem(Global.LOGIN_LOCAL_KEY);
    if (userLocalStorage) {
      return true;
    }
    return false;
  }
}
