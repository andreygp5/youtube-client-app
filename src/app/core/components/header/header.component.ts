import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { RoleService } from '../../../auth/services/role.service';
import { RoleEnum } from '../../../shared/models/enums/role.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isSettingsHidden: boolean = true;
  public userRole: RoleEnum | null = RoleEnum.USER;
  public RoleEnum: typeof RoleEnum = RoleEnum;

  constructor(
    public authService: AuthService,
    private roleService: RoleService,
  ) {
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
        this.setVariablesForGuest();
      } else {
        this.setVariablesForLoggedInUser();
      }
    });
  }

  private setVariablesForLoggedInUser(): void {
    this.userRole = this.roleService.getCurrentUserRole();
  }

  private setVariablesForGuest(): void {
    this.isSettingsHidden = true;
    this.userRole = null;
  }
}
