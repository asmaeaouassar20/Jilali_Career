import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { IUser } from '../../core/model/interfaces/User.model';
import { CurrentUserService } from '../../core/services/currentuser/current-user-service';

@Component({
  selector: 'app-navappjilali',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navappjilali.html',
  styleUrl: './navappjilali.css',
})
export class Navappjilali implements OnInit {
  private currentUserService = inject(CurrentUserService);

  @Input() loggedUser! : IUser; // Il déclare qu'il accepte de recevoir une donnée "loggedUser" depuis son parent

  // Syntaxe moderne avec Signals (Angular 17+) :
  // username = input<string>('');


  // Enfant(navbar) ->  Parent(Layout)
  // déclarer un événement personnalisé
  @Output() logout = new EventEmitter<void>();
  isProfileDetailsViewOpen:boolean = false;
  @Output() isProfileDetailsViewOpenEvent = new EventEmitter<boolean>();


  currentUser! : IUser | null;

  ngOnInit(): void {
    this.currentUser=this.currentUserService.getCurrentUser();
  }

  onLogoutClick(){
    // emettre l'événement vers le parent
    this.logout.emit();
  }
  toggleProfileDetailsView(){
    this.isProfileDetailsViewOpen=!this.isProfileDetailsViewOpen;
    this.isProfileDetailsViewOpenEvent.emit(this.isProfileDetailsViewOpen);
  }
}
