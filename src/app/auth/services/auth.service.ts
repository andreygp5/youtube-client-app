import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthTokenService } from './auth-token.service';
import { TEST_EMAIL, TEST_PASSWORD } from '../../core/constants/test.values';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.getIsLoggedIn());

  private TEST_EMAIL: string = TEST_EMAIL;
  private TEST_PASSWORD: string = TEST_PASSWORD;

  constructor(private authTokenService: AuthTokenService, private router: Router) {
  }

  public checkCredentialsValid(email: string, password: string) {
    return email === this.TEST_EMAIL && password === this.TEST_PASSWORD;
  }

  public logInUser(email: string, password: string): Observable<boolean> {
    return new Observable<boolean>(subscriber => {
      if (this.checkCredentialsValid(email, password)) {
        this.authTokenService.setToken(`${email}&&${password}`);
        this.isLoggedIn.next(true);
        subscriber.next(true);
      } else {
        subscriber.next(false);
      }
    });
  }

  public logOutUser(): void {
    this.authTokenService.removeToken();
    this.isLoggedIn.next(false);
    this.router.navigate(['auth/login']).then();
  }

  public getIsLoggedIn(): boolean {
    return this.authTokenService.getToken() !== '';
  }
}
