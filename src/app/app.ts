import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from './core/services/storage/storage-service';
import { MenuBurgerSVG } from "./svg/menu-burger/menu-burger-svg/menu-burger-svg";
import { CloseBtn } from "./svg/close-btn/close-btn/close-btn";
import { Global } from './core/constant/Global.constant';
import { ThemeService } from './core/services/theme/theme-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuBurgerSVG, CloseBtn],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Jilali');

  private translate = inject(TranslateService); 
  private storageService = inject(StorageService); 
  private themeService = inject(ThemeService);
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

  changeTheme(){
    const currentTheme = this.themeService.getCurrentTheme();
    if(currentTheme == "indigo") this.themeService.setTheme("pink");
    if(currentTheme == "pink") this.themeService.setTheme("green");
    if(currentTheme == "green") this.themeService.setTheme("indigo");
  }
 
 
}
