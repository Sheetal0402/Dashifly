import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockAuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private currentUserSubject = new BehaviorSubject<any>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor() {
    // Check localStorage for persisted auth state
    const savedAuth = localStorage.getItem('dashify_auth');
    if (savedAuth === 'true') {
      this.setAuthenticated(true);
      this.setCurrentUser(this.getMockUser());
    }
  }

  login(email: string, password: string): Observable<boolean> {
    return new Observable(observer => {
      // Mock login delay
      setTimeout(() => {
        if (email && password) {
          this.setAuthenticated(true);
          this.setCurrentUser(this.getMockUser());
          localStorage.setItem('dashify_auth', 'true');
          observer.next(true);
        } else {
          observer.next(false);
        }
        observer.complete();
      }, 1000);
    });
  }

  logout(): void {
    this.setAuthenticated(false);
    this.setCurrentUser(null);
    localStorage.removeItem('dashify_auth');
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  private setAuthenticated(value: boolean): void {
    this.isAuthenticatedSubject.next(value);
  }

  private setCurrentUser(user: any): void {
    this.currentUserSubject.next(user);
  }

  private getMockUser() {
    return {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      avatar: 'https://i.pravatar.cc/150?img=1',
      company: 'Acme Corp',
      role: 'Admin'
    };
  }
}