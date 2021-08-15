import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthTokenService {

  constructor() {
  }

  public setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  public getToken(): string {
    return localStorage.getItem('token') || '';
  }
}
