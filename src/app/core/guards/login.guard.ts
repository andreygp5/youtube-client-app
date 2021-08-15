import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    const isLoggedIn = this.authService.getIsLoggedIn();
    if (!isLoggedIn) {
      return true;
    }

    this.router.navigate(['/youtube']).then();
    return false;
  }

  canActivateChild(): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate();
  }
}
