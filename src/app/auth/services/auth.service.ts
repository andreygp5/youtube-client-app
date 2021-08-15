import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthTokenService } from './auth-token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private TEST_EMAIL: string = 'test@gmail.com';
  private TEST_PASSWORD: string = 'password';

  constructor(private authTokenService: AuthTokenService) {
  }

  public checkCredentialsValid(email: string, password: string) {
    return email === this.TEST_EMAIL && password === this.TEST_PASSWORD;
  }

  public logInUser(email: string, password: string): Observable<boolean> {
    return new Observable<boolean>(subscriber => {
      if (this.checkCredentialsValid(email, password)) {
        this.authTokenService.setToken(`${email}&&${password}`);
        subscriber.next(true);
      } else {
        subscriber.next(false);
      }
    });
  }

  public getIsLoggedIn(): boolean {
    return this.authTokenService.getToken() !== '';
  }
}
