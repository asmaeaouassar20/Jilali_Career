import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Global } from '../../core/constant/Global.constant';
import { IUser } from '../../core/model/interfaces/User.model';

@Component({
  selector: 'app-login',
  imports: [FormsModule,RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginObj : IUser = {
    "name" : "Test",
    "email" : "",
    "password" : ""
  }

  router = inject(Router); 
  
  onLogin(){
    if(this.loginObj.email == "jilali@interview.com" && this.loginObj.password=="password"){
      localStorage.setItem(Global.LOGIN_LOCAL_KEY, JSON.stringify(this.loginObj))
      this.router.navigateByUrl('jilaliapp/dashboard')            
    }else{
      alert("identifiants incorrects");
    }    
  }
}
