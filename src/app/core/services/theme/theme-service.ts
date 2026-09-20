import { Injectable } from '@angular/core';
import { Global } from '../../constant/Global.constant';


export type Theme = 'indigo' | 'green' | 'pink' | 'light';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {  

  setTheme(theme:Theme) : void {  // Angular produit essentiellement : <html data-theme="green">    
    document.documentElement.setAttribute('data-theme',theme);
    localStorage.setItem(Global.THEME_LOCAL_KEY,theme); 

    let logo = "logo.png";
    if(theme == "pink") logo="logo-pink.png";
    if(theme == "green") logo = "logo-green.png";
    localStorage.setItem(Global.LOGO_SRC,logo);
  }

  getCurrentTheme() : Theme {
    const theme  = localStorage.getItem(Global.THEME_LOCAL_KEY);
    if(theme==null) return "indigo";
    return theme as Theme ;    
  }
}
