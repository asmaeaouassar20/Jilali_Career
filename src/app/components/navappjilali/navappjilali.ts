import { Component, Input } from '@angular/core';
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
}
