import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { UserHelper } from '../helpers/user.helper';
import { UserRoleTypeDto } from '../dtos/enums/user-role-type-dto';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private userHelper: UserHelper,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let role = this.userHelper.getCurrentUserRole();
    if (role && role === UserRoleTypeDto.Admin) {
      return true;
    }
    this.router.navigate(['/account/access-denied-page']);
    return false;
  }
}
