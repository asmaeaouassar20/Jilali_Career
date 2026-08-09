import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from "@angular/router";
import { IUser } from '../../core/model/interfaces/User.model';

@Component({
  selector: 'app-navappjilali',
  imports: [RouterLink],
  templateUrl: './navappjilali.html',
  styleUrl: './navappjilali.css',
})
export class Navappjilali {
  @Input() loggedUser! : IUser; // Il déclare qu'il accepte de recevoir une donnée "loggedUser" depuis son parent

  // Syntaxe moderne avec Signals (Angular 17+) :
  // username = input<string>('');


  // Enfant(navbar) ->  Parent(Layout)
  // déclarer un événement personnalisé
  @Output() logout = new EventEmitter<void>();
  isProfileDetailsViewOpen:boolean = false;
  @Output() isProfileDetailsViewOpenEvent = new EventEmitter<boolean>();

  onLogoutClick(){
    // emettre l'événement vers le parent
    this.logout.emit();
  }
  toggleProfileDetailsView(){
    this.isProfileDetailsViewOpen=!this.isProfileDetailsViewOpen;
    this.isProfileDetailsViewOpenEvent.emit(this.isProfileDetailsViewOpen);
  }
}
