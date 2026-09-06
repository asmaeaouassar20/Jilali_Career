import { Injectable } from '@angular/core';
import { Global } from '../../constant/Global.constant';


export type Theme = 'indigo' | 'green' | 'pink';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentTheme : Theme = "indigo";

  constructor(){
    this.setTheme(this.currentTheme);
  }

  setTheme(theme:Theme) : void {  // Angular produit essentiellement : <html data-theme="green">
    this.currentTheme = theme;
    document.documentElement.setAttribute('data-theme',theme);
    localStorage.setItem(Global.THEME_LOCAL_KEY,theme);
  }

  getCurrentTheme() : Theme {
    const theme  = localStorage.getItem(Global.THEME_LOCAL_KEY);
    if(theme==null) return this.currentTheme;
    this.currentTheme=theme as Theme ;
    return this.currentTheme;
  }
}
