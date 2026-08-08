import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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
      this.router.navigateByUrl('jilaliapp/dashboard')
    }else{
      alert("identifiants incorrects");
    }    
  }
}
