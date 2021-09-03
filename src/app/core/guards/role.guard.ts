import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild } from '@angular/router';
import { RoleService } from '../../auth/services/role.service';
import { RoleEnum } from '../../shared/models/enums/role.enum';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate, CanActivateChild {
  constructor(private roleService: RoleService) {
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const role = route.data?.role as RoleEnum;
    return role && role === this.roleService.getCurrentUserRole();
  }

  canActivateChild(route: ActivatedRouteSnapshot): boolean {
    return this.canActivate(route);
  }
}
