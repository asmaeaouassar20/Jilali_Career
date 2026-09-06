import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from './core/services/storage/storage-service';
import { MenuBurgerSVG } from "./svg/menu-burger/menu-burger-svg/menu-burger-svg";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuBurgerSVG],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Jilali');

  private translate = inject(TranslateService); 
  private storageService = inject(StorageService); 
  currentLanguage : 'fr'| 'en' = 'en';

  constructor(){
    this.translate.use(this.storageService.getLanguageTranslate());
  }
 
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
    this.storageService.setLanguageTranslate(this.currentLanguage);   
    this.translate.use(this.currentLanguage);  
  }
 
}
