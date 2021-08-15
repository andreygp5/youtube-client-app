import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthTokenService {
  public tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(this.getToken());

  constructor() {
  }

  public setToken(token: string): void {
    this.tokenSubject.next(token);
    localStorage.setItem('token', token);
  }

  public getToken(): string {
    return localStorage.getItem('token') || '';
  }

  public removeToken() {
    this.tokenSubject.next('');
    localStorage.removeItem('token');
  }

  public getEmailPart(token: string): string {
    if (!token) {
      return token;
    }

    return token.split('&&')[0];
  }
}
