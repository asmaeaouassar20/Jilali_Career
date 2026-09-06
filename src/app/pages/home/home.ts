import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { AuthService } from '../../core/services/auth/auth-service';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterLinkActive, TranslatePipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home  { 
  private router = inject(Router);
  private authService = inject(AuthService);

  ngOnInit(): void {
    if(this.authService.isAuthenticated()){
        this.router.navigateByUrl("jilaliapp/dashboard");
    }
  }

}
