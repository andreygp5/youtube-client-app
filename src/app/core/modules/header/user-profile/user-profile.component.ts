import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../auth/services/auth.service';
import { AuthTokenService } from '../../../../auth/services/auth-token.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  public userEmail?: string;

  constructor(
    public authService: AuthService,
    private authTokenService: AuthTokenService,
    private router: Router,
  ) {
  }

  public ngOnInit(): void {
    this.subscribeToToken();
  }

  public logOutUser(): void {
    this.authService.logOutUser();
  }

  public goToLoginPage(): void {
    this.router.navigate(['auth/login']).then();
  }

  private subscribeToToken(): void {
    this.authTokenService.tokenSubject.subscribe((token) => {
      const email = this.authTokenService.getEmailPart(token);
      this.userEmail = email === '' ? 'Your email' : email;
    });
  }
}
