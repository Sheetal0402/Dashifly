import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { MockAuthService } from '../services/mock-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  constructor(
    private mockAuthService: MockAuthService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.mockAuthService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

export const authGuard: CanActivateFn = () => {
  return inject(AuthGuardService).canActivate();
};