import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthTokenService } from './auth-token.service';
import { ADMIN_EMAIL, ADMIN_PASSWORD, TEST_EMAIL, TEST_PASSWORD } from '../../core/constants/test.values';
import { RoleEnum } from '../../shared/models/enums/role.enum';
import { RoleService } from './role.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.getIsLoggedIn());

  private userCredentials: { email: string, password: string, role: RoleEnum }[] = [
    {
      email: TEST_EMAIL,
      password: TEST_PASSWORD,
      role: RoleEnum.USER,
    },
    {
      email: ADMIN_EMAIL,
      password: ADMIN_PASSWORD,
      role: RoleEnum.ADMIN,
    },
  ];

  constructor(
    private authTokenService: AuthTokenService,
    private router: Router,
    private roleService: RoleService,
  ) {
  }

  public login(email: string, password: string): Observable<boolean> {
    return new Observable<boolean>(subscriber => {
      if (this.getIsCredentialsValid(email, password)) {
        this.roleService.setCurrentUserRole(this.getRoleByEmail(email));
        this.authTokenService.setToken(`${email}&&${password}`);
        this.isLoggedIn.next(true);
        subscriber.next(true);
      } else {
        subscriber.next(false);
      }
    });
  }

  public logout(): void {
    this.authTokenService.removeToken();
    this.roleService.clearCurrentUserRole();
    this.isLoggedIn.next(false);
    this.router.navigate(['auth/login']);
  }

  public getIsLoggedIn(): boolean {
    return this.authTokenService.getToken() !== '';
  }

  private getIsCredentialsValid(email: string, password: string): boolean {
    return this.userCredentials.some(({ email: emailInBase, password: passwordInBase }) => {
      return emailInBase === email && passwordInBase === password;
    });
  }

  private getRoleByEmail(email: string): RoleEnum {
    const user = this.userCredentials.find(({ email: emailInBase }) => {
      return emailInBase === email;
    });

    return user ? user.role : RoleEnum.USER;
  }
}
