import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Global } from '../../core/constant/Global.constant';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginObj : any = {
    "email" : "",
    "password" : ""
  }

  router = inject(Router); 
  
  onLogin(){
    if(this.loginObj.email == "jilali@entretien.com" && this.loginObj.password=="jilali"){
      localStorage.setItem(Global.LOGIN_LOCAL_KEY, JSON.stringify(this.loginObj))
      this.router.navigateByUrl('jilaliapp/dashboard')            
    }else{
      alert("identifiants incorrects");
    }    
  }
}
