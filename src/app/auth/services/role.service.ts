import { Injectable } from '@angular/core';
import { RoleEnum } from '../../shared/models/enums/role.enum';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  private localStorageRoleKey: string = 'role';

  constructor() {
  }

  setCurrentUserRole(role: RoleEnum): void {
    localStorage.setItem(this.localStorageRoleKey, role);
  }

  getCurrentUserRole(): RoleEnum {
    return localStorage.getItem(this.localStorageRoleKey) as RoleEnum;
  }

  clearCurrentUserRole(): void {
    localStorage.removeItem(this.localStorageRoleKey);
  }
}
