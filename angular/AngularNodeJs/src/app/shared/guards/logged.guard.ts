import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { TokenHelper } from '../helpers/token.helper';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanActivate {
  constructor(
    private tokenHelper: TokenHelper,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let token = this.tokenHelper.getToken();
    if (token) {
      return true;
    }
    this.router.navigate(['/account/access-denied-page']);
    return false;
  }
}
