import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from './core/services/storage/storage-service';
import { ThemeService } from './core/services/theme/theme-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Jilali');

  private translate = inject(TranslateService); 
  private storageService = inject(StorageService); 
  private themeService = inject(ThemeService);
  currentLanguage : 'fr'| 'en' = 'en';  
  isLightThemApplied=false;

  constructor(){    
    this.translate.use(this.storageService.getLanguageTranslate());

    const currentTheme = this.themeService.getCurrentTheme();
    if(this.themeService.getCurrentTheme()=="light") this.isLightThemApplied=true;
    this.themeService.setTheme(currentTheme)
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
    else if(currentTheme == "pink") this.themeService.setTheme("green");
    else if(currentTheme == "green") this.themeService.setTheme("indigo");
    else this.themeService.setTheme("indigo");
  }

  setLightTheme(){
    const currentTheme = this.themeService.getCurrentTheme();
    if(currentTheme!="light") {
      this.themeService.setTheme("light");
      this.isLightThemApplied=true;
    } else {
      this.themeService.setTheme("indigo");
      this.isLightThemApplied=false;
    }
  }
 
 
 
}
