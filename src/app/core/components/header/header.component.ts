import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isSettingsHidden: boolean = true;

  constructor(private authService: AuthService) {
  }

  public toggleSettings(): void {
    this.isSettingsHidden = !this.isSettingsHidden;
  }

  public ngOnInit(): void {
    this.subscribeToLoggingIn();
  }

  private subscribeToLoggingIn(): void {
    this.authService.isLoggedIn.subscribe((res) => {
      if (!res) {
        this.isSettingsHidden = true;
      }
    })
  }
}
