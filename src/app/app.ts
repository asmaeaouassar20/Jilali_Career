import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Jilali');

  currentLanguage : 'fr'| 'en' = 'fr';

  get currentFlag() : string{
    return this.currentLanguage === 'fr' 
      ? 'fr.png'
      : 'en.png';
  }
  get otherFlag() : string {
    return this.currentLanguage === 'fr'
      ? 'en.png'
      : 'fr.png';
  }

  toggleLanguage(){
    this.currentLanguage = 
      this.currentLanguage === 'fr' 
        ? 'en' 
        : 'fr';
  }
 
}
