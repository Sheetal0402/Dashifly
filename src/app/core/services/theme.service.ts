import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkModeSubject = new BehaviorSubject<boolean>(false);
  public isDarkMode$ = this.isDarkModeSubject.asObservable();

  constructor() {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('dashify_theme');
    if (savedTheme === 'dark') {
      this.setDarkMode(true);
    } else if (savedTheme === 'light') {
      this.setDarkMode(false);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.setDarkMode(prefersDark);
    }
  }

  toggleTheme(): void {
    this.setDarkMode(!this.isDarkModeSubject.value);
  }

  setDarkMode(isDark: boolean): void {
    this.isDarkModeSubject.next(isDark);
    
    // Update body class
    if (isDark) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
    
    // Save preference
    localStorage.setItem('dashify_theme', isDark ? 'dark' : 'light');
  }

  isDarkMode(): boolean {
    return this.isDarkModeSubject.value;
  }
}